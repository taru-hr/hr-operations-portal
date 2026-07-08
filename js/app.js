/* ============================================================
   TaruHR — App shell: routing, interactivity, modals, toasts
   ============================================================ */

const ROUTES = {
  dashboard: { label: "Dashboard",       sub: "Your people operations overview", icon: "dashboard" },
  employees: { label: "Employees",       sub: "Directory & profiles",            icon: "employees" },
  time:      { label: "Time Tracking",   sub: "Attendance & timesheets",         icon: "time" },
  leave:     { label: "Leave Management", sub: "Balances & requests",            icon: "leave", count: () => H.pendingLeaveCount() },
  comp:      { label: "Compensation & Benefits", navLabel: "Compensation", sub: "Salary, benefits & pay history", icon: "wallet" },
  approvals: { label: "Approvals",       sub: "Pending your review",             icon: "approvals", count: () => DB.approvals.length },
  reports:   { label: "Reports",         sub: "People analytics",                icon: "reports" },
  assistant: { label: "AI Assistant",    sub: "Ask your HR data",                icon: "assistant" },
  settings:  { label: "Settings",        sub: "Configure the portal",            icon: "settings" },
};

const App = {
  route: "dashboard",

  init() {
    this.populateNav();
    this.renderUser();
    this.applyTheme(this.getStoredTheme());
    this.wireGlobalEvents();
    window.addEventListener("hashchange", () => this.handleRoute());
    this.handleRoute();
  },

  /* ---------- Navigation ---------- */
  populateNav() {
    document.querySelectorAll(".nav-item").forEach((a) => {
      const key = a.dataset.route;
      const r = ROUTES[key];
      if (!r) return;
      const c = r.count ? r.count() : 0;
      a.innerHTML = `${icon(r.icon, 19)}<span>${r.navLabel || r.label}</span>${c ? `<span class="nav-count">${c}</span>` : ""}`;
    });
  },

  updateNavCounts() {
    document.querySelectorAll(".nav-item").forEach((a) => {
      const r = ROUTES[a.dataset.route];
      if (!r || !r.count) return;
      const c = r.count();
      let badge = a.querySelector(".nav-count");
      if (c && !badge) { badge = document.createElement("span"); badge.className = "nav-count"; a.appendChild(badge); }
      if (badge) badge.textContent = c || "";
      if (badge && !c) badge.remove();
    });
  },

  renderUser() {
    const me = H.emp(DB.currentUser.id);
    document.getElementById("sidebarUser").innerHTML =
      `${avatar(me)}<div style="flex:1;min-width:0"><div class="su-name">${DB.currentUser.name}</div><div class="su-role">${DB.currentUser.role}</div></div>
       <button class="icon-btn" style="width:32px;height:32px;background:transparent;border-color:transparent" data-action="logout" title="Sign out">${icon("logout", 16)}</button>`;
    document.getElementById("topbarAvatar").innerHTML = `<span data-action="user-menu">${avatar(me)}</span>`;
  },

  handleRoute() {
    let key = (location.hash || "#dashboard").slice(1);
    if (!ROUTES[key]) key = "dashboard";
    this.route = key;
    this.renderRoute(key);
    // active states + topbar
    document.querySelectorAll(".nav-item").forEach((a) => a.classList.toggle("active", a.dataset.route === key));
    document.getElementById("pageTitle").textContent = ROUTES[key].label;
    document.getElementById("pageSubtitle").textContent = ROUTES[key].sub;
    document.getElementById("page").scrollTop = 0;
    window.scrollTo(0, 0);
    this.closeSidebar();
  },

  renderRoute(key) {
    document.getElementById("page").innerHTML = Pages[key]();
    this.afterRender(key);
  },

  afterRender(key) {
    if (key === "employees") {
      const s = document.getElementById("empSearch");
      if (s) s.addEventListener("input", (e) => {
        Pages.empFilter.q = e.target.value;
        document.getElementById("empBody").innerHTML = Pages.employeeRows();
      });
    }
    if (key === "assistant") this.wireChat();
    if (key === "comp") {
      const rs = document.getElementById("compRoleSelect");
      if (rs) rs.addEventListener("change", (e) => { Pages.compRole = e.target.value; this.renderRoute("comp"); });
      const es = document.getElementById("compEmpSelect");
      if (es) es.addEventListener("change", (e) => { Pages.compEmpId = e.target.value; this.renderRoute("comp"); });
    }
  },

  /* ---------- Global event delegation ---------- */
  wireGlobalEvents() {
    document.getElementById("themeToggle").addEventListener("click", () => this.toggleTheme());
    document.getElementById("menuToggle").addEventListener("click", () => this.toggleSidebar());
    document.getElementById("sidebarOverlay").addEventListener("click", () => this.closeSidebar());
    document.getElementById("notifBtn").addEventListener("click", () =>
      this.toast("3 new notifications", "2 leave requests · 1 timesheet awaiting approval", "info"));

    const gs = document.getElementById("globalSearch");
    gs.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const q = e.target.value.trim();
      if (!q) return;
      // Exact Employee ID (e.g. "EMP-001", "emp-001", "EMP-1") → jump straight to the profile
      const emp = this.findEmpById(q);
      if (emp) {
        Pages.empFilter = { q: emp.id, dept: "all" };
        e.target.value = "";
        if (location.hash === "#employees") this.renderRoute("employees");
        else location.hash = "#employees";
        this.openProfile(emp.id);
        return;
      }
      // Otherwise: filter the directory
      Pages.empFilter.q = q;
      Pages.empFilter.dept = "all";
      location.hash = "#employees";
    });

    document.addEventListener("click", (e) => {
      const el = e.target.closest("[data-action]");
      if (!el) return;
      const act = el.dataset.action;
      const handlers = {
        export: () => this.toast("Export started", "Your report is being generated (demo).", "info"),
        "add-employee": () => this.openAddEmployee(),
        "request-leave": () => this.openRequestLeave(),
        "open-profile": () => this.openProfile(el.dataset.id),
        "view-comp": () => this.openComp(el.dataset.id),
        approve: () => this.decide(el.dataset.id, "Approved"),
        reject: () => this.decide(el.dataset.id, "Rejected"),
        "clock-toggle": () => this.toggleClock(),
        "set-mode": () => this.setMode(el.dataset.mode),
        "toggle-benefit": () => this.toggleBenefit(el.dataset.id),
        "edit-comp": () => this.openEditComp(),
        "report-tab": () => { Pages.reportTab = el.dataset.tab; this.swapTabs(el); document.getElementById("reportBody").innerHTML = Pages.reportBody(); },
        "settings-tab": () => { Pages.settingsTab = el.dataset.tab; this.swapTabs(el); document.getElementById("settingsBody").innerHTML = Pages.settingsBody(); },
        "leave-tab": () => { Pages.leaveTab = el.dataset.tab; this.swapTabs(el); document.getElementById("leaveBody").innerHTML = Pages.leaveRows(); },
        "appr-filter": () => { Pages.approvalFilter = el.dataset.kind; this.swapChips(el); document.getElementById("approvalList").innerHTML = Pages.approvalItems(); },
        "emp-dept": () => { Pages.empFilter.dept = el.dataset.dept; this.swapChips(el); document.getElementById("empBody").innerHTML = Pages.employeeRows(); },
        "set-theme": () => this.applyTheme(el.dataset.theme, true),
        "save-settings": () => this.toast("Saved", "Your changes have been saved (demo).", "success"),
        "toast-demo": () => this.toast("Demo action", "This is a portfolio prototype — the action isn't wired to a backend.", "info"),
        "ai-suggest": () => this.sendChat(el.dataset.q),
        "close-modal": () => this.closeModal(),
        logout: () => this.toast("Signed in as Taru", "Sign-out is disabled in this demo.", "info"),
        "user-menu": () => this.toast("Signed in as " + DB.currentUser.name, DB.currentUser.role + " · " + DB.currentUser.email, "info"),
      };
      if (handlers[act]) { e.preventDefault(); handlers[act](); }
    });

    document.addEventListener("keydown", (e) => { if (e.key === "Escape") this.closeModal(); });
  },

  swapTabs(el) { el.parentElement.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")); el.classList.add("active"); },
  swapChips(el) { el.parentElement.querySelectorAll(".chip").forEach((c) => c.classList.remove("active")); el.classList.add("active"); },

  /* ---------- Approvals ---------- */
  decide(id, decision) {
    const item = DB.approvals.find((a) => a.id === id);
    if (!item) return;
    DB.approvals = DB.approvals.filter((a) => a.id !== id);
    const lr = DB.leaveRequests.find((l) => l.id === id);
    if (lr) lr.status = decision;
    this.renderRoute("approvals");
    this.updateNavCounts();
    const who = H.fullName(H.emp(item.empId));
    this.toast(`${decision}`, `${item.title} for ${who}.`, decision === "Approved" ? "success" : "err");
  },

  /* ---------- Time clock ---------- */
  // Push the current user's clock state into the shared attendance data, so the
  // "Today's Attendance Log" and the KPIs/donut all reflect the chosen work mode.
  applyMyAttendance() {
    const a = DB.attendance.find((x) => x.empId === DB.currentUser.id);
    if (!a) return;
    const c = Pages.clock;
    a.mode = c.mode;
    a.in = c.inTime;
    a.out = c.in ? "—" : c.outTime;
    a.status = c.mode === "Remote" ? "Remote" : "Present";
  },

  toggleClock() {
    const c = Pages.clock;
    if (c.in) { c.in = false; c.outTime = "17:04"; } else { c.in = true; c.inTime = "08:42"; c.outTime = "—"; }
    this.applyMyAttendance();
    this.renderRoute("time");
    this.toast(c.in ? "Clocked in" : "Clocked out",
      c.in ? `Timer running — you're marked as ${c.mode === "Remote" ? "working remotely" : "in the office"} (demo).`
           : "Your hours for today have been recorded (demo).", "success");
  },

  setMode(mode) {
    Pages.clock.mode = mode;
    this.applyMyAttendance();
    this.renderRoute("time");
    this.toast("Work mode updated", `You're now marked as ${mode === "Remote" ? "working remotely 🏠" : "working from the office 🏢"} (demo).`, "success");
  },

  /* ---------- Compensation & Benefits ---------- */
  toggleBenefit(id) {
    const acc = Pages.compAccessModel(Pages.compRole);
    if (!acc.editBenefits) {
      this.toast("No permission", `The ${Pages.compRole} role can't edit benefits — try the HR or Administrator role.`, "err");
      return;
    }
    const rec = H.compFor(Pages.compEmpId);
    const b = rec.benefits.find((x) => x.id === id);
    if (!b) return;
    b.enabled = !b.enabled;
    rec.benefitsHistory.unshift({ date: DB.today, benefit: b.name, action: b.enabled ? "added" : "removed", by: Pages.compRole });
    this.renderRoute("comp");
    const who = H.fullName(H.emp(Pages.compEmpId));
    this.toast(b.enabled ? "Benefit added" : "Benefit removed", `${b.name} — ${b.enabled ? "enrolled" : "removed"} for ${who} (demo).`, b.enabled ? "success" : "info");
  },

  openEditComp() {
    const acc = Pages.compAccessModel(Pages.compRole);
    if (!acc.editSalary) { this.toast("No permission", `The ${Pages.compRole} role can't edit salary.`, "err"); return; }
    const rec = H.compFor(Pages.compEmpId);
    const c = rec.compensation;
    const who = H.fullName(H.emp(Pages.compEmpId));
    const body = `<form id="compForm">
      <p class="text-2" style="font-size:12.5px;margin-bottom:14px">Editing salary for <strong>${who}</strong></p>
      <div class="form-row">
        <div class="field"><label>New monthly salary (€)</label><input class="input" type="number" name="salary" value="${c.salaryMonthly}" min="0" step="50" /></div>
        <div class="field"><label>Effective date</label><input class="input" type="date" name="date" value="${DB.today}" /></div>
      </div>
      <div class="field"><label>Reason</label>
        <select class="select" name="reason"><option>Annual increase</option><option>Promotion</option><option>Market adjustment</option><option>Correction</option></select></div>
      <p class="text-3" style="font-size:12px">Salary band ${c.band.name}: €${c.band.min.toLocaleString("en-US")}–€${c.band.max.toLocaleString("en-US")}.</p>
    </form>`;
    const footer = `<button class="btn btn--ghost" data-action="close-modal">Cancel</button>
      <button class="btn btn--primary" id="compSubmit">${icon("check", 16)} Save change</button>`;
    this.openModal("Edit Salary", body, footer);
    document.getElementById("compSubmit").addEventListener("click", () => {
      const f = document.getElementById("compForm");
      const salary = parseInt(f.salary.value, 10);
      if (!salary || salary <= 0) { this.toast("Invalid amount", "Enter a valid salary.", "err"); return; }
      c.salaryMonthly = salary;
      c.effectiveDate = f.date.value || DB.today;
      rec.history.unshift({ date: c.effectiveDate, salary, reason: f.reason.value, by: Pages.compRole });
      this.closeModal();
      this.renderRoute("comp");
      this.toast("Salary updated", `${who} — new salary €${salary.toLocaleString("en-US")} recorded (demo).`, "success");
    });
  },

  /* ---------- Modals ---------- */
  openModal(title, body, footer = "") {
    this.closeModal();
    const wrap = document.createElement("div");
    wrap.className = "modal-backdrop";
    wrap.id = "modalBackdrop";
    wrap.innerHTML = `<div class="modal">
      <div class="modal__head"><div class="modal__title">${title}</div>
        <button class="icon-btn" style="width:34px;height:34px" data-action="close-modal">${icon("x", 18)}</button></div>
      <div class="modal__body">${body}</div>
      ${footer ? `<div class="modal__foot">${footer}</div>` : ""}
    </div>`;
    wrap.addEventListener("click", (e) => { if (e.target === wrap) this.closeModal(); });
    document.body.appendChild(wrap);
    return wrap;
  },
  closeModal() { const m = document.getElementById("modalBackdrop"); if (m) m.remove(); },

  // Resolve a search query to an employee only when it's an exact ID match
  // (accepts "EMP-001", "emp-001", and loosely-typed "EMP-1"). Returns null otherwise.
  findEmpById(q) {
    const s = q.trim().toLowerCase();
    let emp = DB.employees.find((x) => x.id.toLowerCase() === s);
    if (emp) return emp;
    const m = s.match(/^emp-?0*(\d{1,3})$/);
    if (m) return DB.employees.find((x) => x.id === "EMP-" + m[1].padStart(3, "0")) || null;
    return null;
  },

  openProfile(id) {
    const e = H.emp(id);
    if (!e) return;
    this.openModal("Employee Profile", Pages.employeeProfile(e));
  },

  // Open the Compensation & Benefits page for a specific employee
  openComp(id) {
    if (id) Pages.compEmpId = id;
    this.closeModal();
    if (location.hash === "#comp") this.renderRoute("comp");
    else location.hash = "#comp";
  },

  openAddEmployee() {
    const deptOpts = DB.departments.map((d) => `<option value="${d.id}">${d.name}</option>`).join("");
    const body = `<form id="addEmpForm">
      <div class="form-row">
        <div class="field"><label>First name</label><input class="input" name="first" required placeholder="Alex" /></div>
        <div class="field"><label>Last name</label><input class="input" name="last" required placeholder="Taylor" /></div>
      </div>
      <div class="field"><label>Job title</label><input class="input" name="title" required placeholder="Software Engineer" /></div>
      <div class="form-row">
        <div class="field"><label>Department</label><select class="select" name="dept">${deptOpts}</select></div>
        <div class="field"><label>Employment type</label><select class="select" name="type"><option>Full-time</option><option>Part-time</option><option>Contract</option></select></div>
      </div>
      <div class="form-row">
        <div class="field"><label>Location</label><input class="input" name="location" placeholder="Helsinki, FI" value="Helsinki, FI" /></div>
        <div class="field"><label>Start date</label><input class="input" type="date" name="join" value="2026-07-08" /></div>
      </div>
    </form>`;
    const footer = `<button class="btn btn--ghost" data-action="close-modal">Cancel</button>
      <button class="btn btn--primary" id="addEmpSubmit">${icon("check", 16)} Add employee</button>`;
    this.openModal("Add Employee", body, footer);
    document.getElementById("addEmpSubmit").addEventListener("click", () => {
      const f = document.getElementById("addEmpForm");
      if (!f.first.value || !f.last.value || !f.title.value) { this.toast("Missing info", "Please fill in name and job title.", "err"); return; }
      const num = DB.employees.length + 1;
      DB.employees.push({
        id: "EMP-0" + String(num).padStart(2, "0"),
        first: f.first.value, last: f.last.value, dept: f.dept.value, title: f.title.value,
        type: f.type.value, status: "Active", location: f.location.value || "Remote",
        join: f.join.value || DB.today, manager: null, email: `${f.first.value.toLowerCase()}.${f.last.value.toLowerCase()}@taruhr.com`,
      });
      this.closeModal();
      if (this.route === "employees" || this.route === "dashboard") this.renderRoute(this.route);
      this.toast("Employee added", `${f.first.value} ${f.last.value} joined ${H.deptName(f.dept.value)} (demo).`, "success");
    });
  },

  openRequestLeave() {
    const body = `<form id="leaveForm">
      <div class="field"><label>Leave type</label><select class="select" name="type">${DB.leaveBalances.map((b) => `<option>${b.type}</option>`).join("")}</select></div>
      <div class="form-row">
        <div class="field"><label>From</label><input class="input" type="date" name="from" value="2026-07-20" /></div>
        <div class="field"><label>To</label><input class="input" type="date" name="to" value="2026-07-22" /></div>
      </div>
      <div class="field"><label>Reason (optional)</label><textarea class="textarea" name="reason" placeholder="A short note for your manager…"></textarea></div>
      <p class="text-3" style="font-size:12px">Your request will be sent to your manager for approval.</p>
    </form>`;
    const footer = `<button class="btn btn--ghost" data-action="close-modal">Cancel</button>
      <button class="btn btn--primary" id="leaveSubmit">${icon("send", 16)} Submit request</button>`;
    this.openModal("Request Leave", body, footer);
    document.getElementById("leaveSubmit").addEventListener("click", () => {
      const f = document.getElementById("leaveForm");
      const from = f.from.value, to = f.to.value;
      if (!from || !to || to < from) { this.toast("Invalid dates", "Please choose a valid date range.", "err"); return; }
      const days = Math.max(1, Math.round((new Date(to) - new Date(from)) / 86400000) + 1);
      const id = "LV-" + (1056 + DB.leaveRequests.length);
      DB.leaveRequests.unshift({ id, empId: DB.currentUser.id, type: f.type.value, from, to, days, status: "Pending", reason: f.reason.value || "—", submitted: DB.today });
      DB.approvals.unshift({ id, kind: "Leave", empId: DB.currentUser.id, title: `${f.type.value} — ${days} day${days > 1 ? "s" : ""}`, detail: `${H.fmtDateShort(from)}–${H.fmtDateShort(to)} · ${f.reason.value || "No reason given"}`, submitted: DB.today, priority: "normal" });
      this.closeModal();
      this.updateNavCounts();
      if (this.route === "leave") this.renderRoute("leave");
      this.toast("Request submitted", `${days} day(s) of ${f.type.value} sent for approval (demo).`, "success");
    });
  },

  /* ---------- AI chat ---------- */
  wireChat() {
    const form = document.getElementById("chatForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("chatInput");
      const v = input.value.trim();
      if (!v) return;
      input.value = "";
      this.sendChat(v);
    });
  },

  sendChat(text) {
    const stream = document.getElementById("chatStream");
    if (!stream) return;
    // user message
    const me = H.emp(DB.currentUser.id);
    stream.insertAdjacentHTML("beforeend",
      `<div class="msg msg--user">${avatar(me, "avatar--sm")}<div class="msg__bubble">${this.escape(text)}</div></div>`);
    stream.scrollTop = stream.scrollHeight;
    // typing indicator
    const typing = document.createElement("div");
    typing.className = "msg msg--bot";
    typing.innerHTML = `<span class="ai-ava">${icon("assistant", 19)}</span><div class="msg__bubble typing"><span></span><span></span><span></span></div>`;
    stream.appendChild(typing);
    stream.scrollTop = stream.scrollHeight;
    setTimeout(() => {
      typing.querySelector(".msg__bubble").classList.remove("typing");
      typing.querySelector(".msg__bubble").innerHTML = Pages.aiRespond(text);
      stream.scrollTop = stream.scrollHeight;
    }, 650);
  },

  escape(s) { return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); },

  /* ---------- Theme ---------- */
  getStoredTheme() { try { return localStorage.getItem("taruhr-theme") || "light"; } catch { return "light"; } },
  applyTheme(theme, toast) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("taruhr-theme", theme); } catch {}
    if (toast) this.toast("Theme updated", `Switched to ${theme} mode.`, "success");
  },
  toggleTheme() {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    this.applyTheme(next);
  },

  /* ---------- Sidebar (mobile) ---------- */
  toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
    document.getElementById("sidebarOverlay").classList.toggle("show");
  },
  closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebarOverlay").classList.remove("show");
  },

  /* ---------- Toasts ---------- */
  toast(title, msg, type = "success") {
    const icons = { success: "checkCircle", err: "alert", info: "info" };
    const tints = { success: "tint-green", err: "tint-red", info: "tint-blue" };
    const el = document.createElement("div");
    el.className = "toast " + (type === "success" ? "" : type);
    el.innerHTML = `<span class="toast__icon ${tints[type]}">${icon(icons[type] || "info", 18)}</span>
      <div><div class="toast__title">${title}</div><div class="toast__msg">${msg}</div></div>`;
    document.getElementById("toastWrap").appendChild(el);
    setTimeout(() => { el.style.opacity = "0"; el.style.transform = "translateX(30px)"; el.style.transition = "all .3s"; setTimeout(() => el.remove(), 320); }, 3400);
  },
};

document.addEventListener("DOMContentLoaded", () => App.init());
