/* ============================================================
   TaruHR — Icons, shared UI helpers and page renderers
   ============================================================ */

/* ---------- Icon set (Feather-style line icons) ---------- */
const Icons = {
  dashboard: `<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>`,
  employees: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>`,
  time: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,
  leave: `<path d="M12 2a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9Z"/><path d="M12 11v8a2 2 0 0 0 4 0"/>`,
  approvals: `<rect x="5" y="4" width="14" height="17" rx="2"/><rect x="9" y="2.5" width="6" height="3.5" rx="1"/><path d="M9 13l2 2 4-4"/>`,
  reports: `<path d="M3 21h18"/><rect x="5" y="10" width="3.5" height="8" rx="1"/><rect x="10.5" y="6" width="3.5" height="12" rx="1"/><rect x="16" y="13" width="3.5" height="5" rx="1"/>`,
  assistant: `<path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z"/><path d="M19 15l.7 1.9L21.6 17.6l-1.9.7L19 20l-.7-1.7-1.9-.7 1.9-.7L19 15Z"/>`,
  settings: `<circle cx="12" cy="12" r="3.2"/><path d="M19.4 13a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.1a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-2.9-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 4.6 13H4.5a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.1-2.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 2.9-1.1V2a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 2.9 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-1.1 2.9h.1a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.6 1Z"/>`,

  user: `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
  check: `<path d="M20 6 9 17l-5-5"/>`,
  checkCircle: `<circle cx="12" cy="12" r="9"/><path d="M8.5 12l2.5 2.5 4.5-4.5"/>`,
  x: `<path d="M18 6 6 18M6 6l12 12"/>`,
  plus: `<path d="M12 5v14M5 12h14"/>`,
  download: `<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>`,
  mail: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>`,
  phone: `<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>`,
  pin: `<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>`,
  calendar: `<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>`,
  briefcase: `<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 13h20"/>`,
  building: `<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M9 6h.01M13 6h.01M9 10h.01M13 10h.01M9 14h.01M13 14h.01"/>`,
  home: `<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/>`,
  office: `<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M9 6h.01M13 6h.01M9 10h.01M13 10h.01M9 14h.01M13 14h.01"/>`,
  wallet: `<path d="M3 7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2"/><rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M16 13.5h5"/><circle cx="16.4" cy="13.5" r="1.3"/>`,
  health: `<rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><path d="M12 8.5v7M8.5 12h7"/>`,
  bike: `<circle cx="5.5" cy="17.5" r="3"/><circle cx="18.5" cy="17.5" r="3"/><path d="M5.5 17.5 9 9h6l3.5 8.5"/><path d="M15 9l1.5-3h1.8"/>`,
  car: `<path d="M5 13l1.6-4.3A2 2 0 0 1 8.5 7.4h7a2 2 0 0 1 1.9 1.3L19 13"/><path d="M4 13h16v4a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-.5H7.5v.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z"/>`,
  gift: `<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13"/><path d="M12 8S10.8 4 8.8 4a2 2 0 0 0 0 4H12ZM12 8s1.2-4 3.2-4a2 2 0 0 1 0 4H12Z"/>`,
  percent: `<path d="M19 5 5 19"/><circle cx="7.5" cy="7.5" r="2.2"/><circle cx="16.5" cy="16.5" r="2.2"/>`,
  lock: `<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>`,
  dollar: `<path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>`,
  laptop: `<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>`,
  doc: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M9 13h6M9 17h4"/>`,
  send: `<path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"/>`,
  cake: `<path d="M4 21h16v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7Z"/><path d="M4 16c1.4 0 1.4 1 2.8 1s1.4-1 2.8-1 1.4 1 2.8 1 1.4-1 2.8-1 1.4 1 2 1"/><path d="M12 8V5"/><path d="M12 4a1 1 0 1 1-1-1"/>`,
  trendUp: `<path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>`,
  trendDown: `<path d="M23 18l-9.5-9.5-5 5L1 6"/><path d="M17 18h6v-6"/>`,
  edit: `<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/>`,
  shield: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>`,
  palette: `<path d="M12 22a10 10 0 1 1 0-20 8 8 0 0 1 8 8c0 2-2 3-3 3h-2a2 2 0 0 0-1 3.7A2 2 0 0 1 12 22Z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16.5" cy="10.5" r="1"/>`,
  globe: `<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/>`,
  bell: `<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>`,
  info: `<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>`,
  coffee: `<path d="M17 8h1a3 3 0 0 1 0 6h-1"/><path d="M3 8h14v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8Z"/><path d="M6 2v2M10 2v2M14 2v2"/>`,
  play: `<path d="M6 4l14 8-14 8V4Z"/>`,
  stop: `<rect x="6" y="6" width="12" height="12" rx="2"/>`,
  filter: `<path d="M22 3H2l8 9.5V19l4 2v-8.5L22 3Z"/>`,
  logout: `<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>`,
  star: `<path d="M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1L12 2Z"/>`,
  clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,
  users: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>`,
  userCheck: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M16 11l2 2 4-4"/>`,
  alert: `<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>`,
  chevronRight: `<path d="M9 6l6 6-6 6"/>`,
};

function icon(name, size = 20) {
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Icons[name] || ""}</svg>`;
}

/* ---------- UI helpers ---------- */
function avatar(emp, cls = "") {
  const c = H.colorFor(H.fullName(emp));
  return `<span class="avatar ${cls}" style="background:${c}">${H.initials(emp)}</span>`;
}
function avatarName(name, cls = "") {
  const parts = name.trim().split(" ");
  const ini = (parts[0][0] + (parts[1] ? parts[1][0] : "")).toUpperCase();
  return `<span class="avatar ${cls}" style="background:${H.colorFor(name)}">${ini}</span>`;
}
function pill(text, tone = "gray", dot = false) {
  return `<span class="pill pill--${tone}">${dot ? '<span class="dot"></span>' : ""}${text}</span>`;
}
function statusPill(status) {
  const map = { Active: "green", Remote: "blue", "On Leave": "amber", Probation: "violet", Absent: "red", Late: "pink", Present: "green" };
  return pill(status, map[status] || "gray", true);
}
function leaveStatusPill(s) {
  const map = { Approved: "green", Pending: "amber", Rejected: "red", "In progress": "blue" };
  return pill(s, map[s] || "gray");
}
function kindPill(k) {
  const map = { Leave: "teal", Timesheet: "blue", Expense: "amber", Equipment: "violet" };
  return pill(k, map[k] || "gray");
}
function roleBadge(role) {
  const map = { Employee: "teal", Manager: "blue", HR: "violet", Payroll: "amber", Administrator: "red" };
  return pill(role, map[role] || "gray");
}
function statCard({ icon: ic, tint, label, value, foot }) {
  return `<div class="stat">
    <div class="stat__top">
      <div class="stat__icon ${tint}">${icon(ic, 22)}</div>
    </div>
    <div>
      <div class="stat__label">${label}</div>
      <div class="stat__value">${value}</div>
    </div>
    <div class="stat__foot">${foot}</div>
  </div>`;
}
function card(title, sub, body, headExtra = "") {
  return `<div class="card">
    <div class="card__head">
      <div><div class="card__title">${title}</div>${sub ? `<div class="card__sub">${sub}</div>` : ""}</div>
      ${headExtra}
    </div>
    <div class="card__body">${body}</div>
  </div>`;
}

// Leave-balance card. Two modes:
//   "usage" (sick/personal) — no fixed quota, just show days used this year.
//   "quota" (annual)        — accruing entitlement; show days left (after pending) + used/entitled.
function balanceCard(b) {
  const pendingNote = b.pending ? ` · <span style="color:var(--amber);font-weight:600">${b.pending} pending</span>` : "";

  if (b.mode === "usage") {
    return `<div class="card"><div class="card__body">
      <div class="balance">
        <div class="chart-donut" style="width:84px;height:84px;position:relative;display:grid;place-items:center">
          <svg viewBox="0 0 84 84" width="84" height="84"><circle cx="42" cy="42" r="34" fill="none" stroke="${b.color}" stroke-width="9" opacity="0.18"/></svg>
          <div style="position:absolute;text-align:center">
            <div style="font-size:26px;font-weight:800;line-height:1;color:${b.color}">${b.used}</div>
            <div style="font-size:10px;color:var(--text-3);margin-top:2px">used</div>
          </div>
        </div>
        <div class="bal-info">
          <div class="bal-type">${b.type}</div>
          <div class="bal-detail"><strong>${b.used}</strong> day${b.used === 1 ? "" : "s"} used this year${pendingNote}</div>
        </div>
      </div>
    </div></div>`;
  }

  // quota mode (annual leave; parental shows "no entitlement" when 0)
  if (!b.entitled) {
    return `<div class="card"><div class="card__body">
      <div class="balance">
        <div class="chart-donut">${Charts.donut([{ label: "None", value: 1, color: "var(--border-2)" }], { size: 84, thickness: 12, centerValue: "—", centerLabel: "" })}</div>
        <div class="bal-info"><div class="bal-type">${b.type}</div><div class="bal-detail">No standing entitlement</div></div>
      </div>
    </div></div>`;
  }
  return `<div class="card"><div class="card__body">
    <div class="balance">
      <div class="chart-donut">${Charts.donut([
        { label: "Used", value: b.used, color: b.color },
        { label: "Pending", value: b.pending, color: b.color + "66" },
        { label: "Available", value: Math.max(b.available, 0), color: "var(--border-2)" },
      ], { size: 84, thickness: 12, centerValue: b.available, centerLabel: "left" })}</div>
      <div class="bal-info">
        <div class="bal-type">${b.type}</div>
        <div class="bal-detail"><strong>${b.available} days left</strong>${pendingNote}</div>
      </div>
    </div>
  </div></div>`;
}

/* ============================================================
   PAGES
   ============================================================ */
const Pages = {
  // view state
  empFilter: { q: "", dept: "all" },
  reportTab: "headcount",
  leaveTab: "all",
  approvalFilter: "all",
  clock: { in: true, mode: "Office", inTime: "08:42", outTime: "—" },
  compRole: "HR",
  compEmpId: "EMP-001",

  /* ---------------- DASHBOARD ---------------- */
  dashboard() {
    const s = H.stats();
    const deptData = H.headcountByDept();
    const statusData = H.byStatus();
    const typeData = H.byEmploymentType();

    const stats = [
      statCard({ icon: "users", tint: "tint-brand", label: "Total Employees", value: s.total,
        foot: `<span class="trend trend--up">${icon("trendUp", 14)} +1</span> this month` }),
      statCard({ icon: "checkCircle", tint: "tint-green", label: "At Work Today", value: s.atWork,
        foot: `${s.attendanceRate}% attendance rate` }),
      statCard({ icon: "leave", tint: "tint-amber", label: "On Leave Today", value: s.onLeave,
        foot: `${DB.leaveRequests.filter(l=>l.status==='Approved').length} approved this period` }),
      statCard({ icon: "approvals", tint: "tint-violet", label: "Pending Approvals", value: s.pendingApprovals,
        foot: `<a href="#approvals" style="color:var(--brand);font-weight:600">Review queue →</a>` }),
    ].join("");

    const growthChart = Charts.line({
      xLabels: DB.headcountTrend.map((d) => d.m),
      series: [{ name: "Headcount", color: "#4f46e5", points: DB.headcountTrend.map((d) => d.v) }],
      height: 240, area: true,
    });

    const attnLegend = statusData.map((d) => `
      <div class="legend-item"><span class="swatch" style="background:${d.color}"></span>
      <span class="lg-label">${d.label}</span><span class="lg-val">${d.value}</span></div>`).join("");

    const deptChart = Charts.bars(deptData, { height: 250 });

    const typeLegend = typeData.map((d) => `
      <div class="legend-item"><span class="swatch" style="background:${d.color}"></span>
      <span class="lg-label">${d.label}</span><span class="lg-val">${d.value}</span></div>`).join("");

    const activity = DB.activity.map((a) => `
      <div class="list-row">
        <span class="dot-icon tint-${a.color}">${icon(a.icon, 17)}</span>
        <div><div class="lr-title">${a.title}</div><div class="lr-sub">${a.detail}</div></div>
        <span class="lr-time">${a.time}</span>
      </div>`).join("");

    const events = DB.events.map((e) => {
      const tone = { holiday: "teal", birthday: "pink", anniversary: "violet", review: "amber", onboarding: "blue" }[e.tag] || "gray";
      const ic = { holiday: "coffee", birthday: "cake", anniversary: "star", review: "doc", onboarding: "user" }[e.tag] || "calendar";
      return `<div class="list-row">
        <span class="dot-icon tint-${tone}">${icon(ic, 17)}</span>
        <div><div class="lr-title">${e.title}</div><div class="lr-sub">${e.who}</div></div>
        <span class="lr-time">${H.fmtDateShort(e.date)}</span>
      </div>`;
    }).join("");

    return `
      <div class="page-head">
        <div>
          <h2>Good morning, Taru 👋</h2>
          <p>Here's your people operations snapshot for ${H.fmtDate(DB.today)}.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn--ghost" data-action="export">${icon("download", 17)} Export</button>
          <button class="btn btn--primary" data-action="add-employee">${icon("plus", 17)} Add Employee</button>
        </div>
      </div>

      <div class="grid grid-4 section-gap">${stats}</div>

      <div class="grid grid-3 section-gap">
        <div class="card col-span-2">
          <div class="card__head">
            <div><div class="card__title">Headcount Growth</div><div class="card__sub">Last 8 months · +47% YoY</div></div>
            ${pill("Live", "green", true)}
          </div>
          <div class="card__body"><div class="chart">${growthChart}</div></div>
        </div>
        <div class="card">
          <div class="card__head"><div class="card__title">Who's In Today</div></div>
          <div class="card__body">
            <div class="chart-flex" style="justify-content:center">
              <div class="chart">${Charts.donut(statusData, { centerValue: s.attendanceRate + "%", centerLabel: "at work" })}</div>
            </div>
            <div class="legend mt-16">${attnLegend}</div>
          </div>
        </div>
      </div>

      <div class="grid grid-3 section-gap">
        <div class="card col-span-2">
          <div class="card__head"><div><div class="card__title">Headcount by Department</div><div class="card__sub">${DB.departments.length} departments</div></div></div>
          <div class="card__body"><div class="chart">${deptChart}</div></div>
        </div>
        <div class="card">
          <div class="card__head"><div class="card__title">Employment Type</div></div>
          <div class="card__body">
            <div class="chart-flex" style="justify-content:center">
              <div class="chart">${Charts.donut(typeData, { centerValue: s.total, centerLabel: "people" })}</div>
            </div>
            <div class="legend mt-16">${typeLegend}</div>
          </div>
        </div>
      </div>

      <div class="grid grid-3">
        <div class="card col-span-2">
          <div class="card__head"><div class="card__title">Recent Activity</div><a href="#" class="text-2" style="font-size:13px">View all</a></div>
          <div class="card__body"><div class="list">${activity}</div></div>
        </div>
        <div class="card">
          <div class="card__head"><div class="card__title">Upcoming</div>${icon("calendar", 18)}</div>
          <div class="card__body"><div class="list">${events}</div></div>
        </div>
      </div>`;
  },

  /* ---------------- EMPLOYEES ---------------- */
  employees() {
    const s = H.stats();
    const chips = [{ id: "all", name: "All" }].concat(DB.departments.map((d) => ({ id: d.id, name: d.name })));
    const chipHtml = chips.map((c) =>
      `<button class="chip ${Pages.empFilter.dept === c.id ? "active" : ""}" data-action="emp-dept" data-dept="${c.id}">${c.name}</button>`).join("");

    return `
      <div class="page-head">
        <div><h2>Employees</h2><p>${s.total} people across ${DB.departments.length} departments</p></div>
        <div class="page-actions">
          <button class="btn btn--ghost" data-action="export">${icon("download", 17)} Export CSV</button>
          <button class="btn btn--primary" data-action="add-employee">${icon("plus", 17)} Add Employee</button>
        </div>
      </div>

      <div class="grid grid-4 section-gap">
        ${statCard({ icon: "users", tint: "tint-brand", label: "Headcount", value: s.total, foot: "Active workforce" })}
        ${statCard({ icon: "user", tint: "tint-green", label: "New Hires (2026)", value: s.newHires, foot: "Onboarded this year" })}
        ${statCard({ icon: "briefcase", tint: "tint-blue", label: "Open Roles", value: s.openRoles, foot: "In recruitment" })}
        ${statCard({ icon: "star", tint: "tint-amber", label: "Avg Tenure", value: s.avgTenure + " yrs", foot: "Company average" })}
      </div>

      <div class="card">
        <div class="card__head" style="flex-wrap:wrap;gap:14px">
          <div class="search" style="width:280px">
            ${icon("filter", 16)}
            <input type="text" id="empSearch" placeholder="Search by ID, name, title or email…" value="${Pages.empFilter.q}" />
          </div>
          <div class="filterbar" style="margin:0">${chipHtml}</div>
        </div>
        <div class="card__body card__body--flush">
          <div class="table-wrap">
            <table class="tbl">
              <thead><tr>
                <th>Employee</th><th>Department</th><th>Job Title</th><th>Location</th><th>Type</th><th>Status</th><th></th>
              </tr></thead>
              <tbody id="empBody">${Pages.employeeRows()}</tbody>
            </table>
          </div>
        </div>
      </div>`;
  },

  employeeRows() {
    let list = DB.employees.slice();
    const { q, dept } = Pages.empFilter;
    if (dept !== "all") list = list.filter((e) => e.dept === dept);
    if (q) {
      const t = q.toLowerCase();
      list = list.filter((e) =>
        e.id.toLowerCase().includes(t) || H.fullName(e).toLowerCase().includes(t) || e.title.toLowerCase().includes(t) || e.email.toLowerCase().includes(t));
    }
    if (!list.length)
      return `<tr><td colspan="7"><div class="empty">${icon("search", 42)}<div>No employees match your search.</div></td></tr>`;

    return list.map((e) => `
      <tr data-action="open-profile" data-id="${e.id}" style="cursor:pointer">
        <td><div class="cell-user">${avatar(e)}<div><div class="cu-name">${H.fullName(e)}</div><div class="cu-sub">${e.id} · ${e.email}</div></div></div></td>
        <td><span class="pill pill--gray"><span class="dot" style="background:${H.deptColor(e.dept)}"></span>${H.deptName(e.dept)}</span></td>
        <td>${e.title}</td>
        <td class="muted">${e.location}</td>
        <td class="muted">${e.type}</td>
        <td>${statusPill(e.status)}</td>
        <td>${icon("chevronRight", 16)}</td>
      </tr>`).join("");
  },

  employeeProfile(e) {
    const mgr = e.manager ? H.emp(e.manager) : null;
    const directs = DB.employees.filter((x) => x.manager === e.id);
    const meta = [
      { label: "Employee ID", val: e.id, ic: "user" },
      { label: "Department", val: H.deptName(e.dept), ic: "building" },
      { label: "Employment", val: e.type, ic: "briefcase" },
      { label: "Location", val: e.location, ic: "pin" },
      { label: "Start date", val: H.fmtDate(e.join), ic: "calendar" },
      { label: "Tenure", val: H.tenureYears(e.join) + " years", ic: "clock" },
      { label: "Manager", val: mgr ? H.fullName(mgr) : "—", ic: "users" },
      { label: "Direct reports", val: directs.length, ic: "users" },
    ].map((m) => `<div class="meta-item"><div class="mi-label">${m.label}</div><div class="mi-val">${m.val}</div></div>`).join("");

    return `
      <div class="profile-hero">
        ${avatar(e, "avatar--xl")}
        <div>
          <div style="font-size:20px;font-weight:800">${H.fullName(e)}</div>
          <div class="text-2" style="margin:2px 0 8px">${e.title} · ${H.deptName(e.dept)}</div>
          ${statusPill(e.status)}
        </div>
      </div>
      <div style="display:flex;gap:10px;margin:18px 0;flex-wrap:wrap" class="page-actions">
        <button class="btn btn--primary btn--sm" data-action="view-comp" data-id="${e.id}">${icon("wallet", 16)} Compensation &amp; Benefits</button>
        <a class="btn btn--ghost btn--sm" href="mailto:${e.email}">${icon("mail", 16)} Email</a>
        <button class="btn btn--ghost btn--sm" data-action="toast-demo">${icon("edit", 16)} Edit profile</button>
      </div>
      <div class="profile-meta">${meta}</div>`;
  },

  /* ---------------- TIME TRACKING ---------------- */
  // Clock-in widget — your work mode (Office / Remote) is the "chosen option"
  // that determines your status in today's attendance log.
  clockWidget() {
    const c = Pages.clock;
    const statusText = c.in ? `Clocked in · ${c.inTime}` : `Clocked out · ${c.outTime}`;
    const modeLabel = c.mode === "Remote" ? "working remotely" : "in the office";
    const hint = c.in ? `Working since ${c.inTime} — ${modeLabel} today` : `Hours recorded for today · ${c.mode} mode`;
    const modeToggle = ["Office", "Remote"].map((m) =>
      `<button class="tab ${c.mode === m ? "active" : ""}" data-action="set-mode" data-mode="${m}" style="flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px">${icon(m === "Office" ? "office" : "home", 15)} ${m}</button>`).join("");
    const btn = c.in
      ? `<button class="btn btn--red" data-action="clock-toggle" style="min-width:160px">${icon("stop", 17)} Clock Out</button>`
      : `<button class="btn btn--green" data-action="clock-toggle" style="min-width:160px">${icon("play", 17)} Clock In · ${c.mode}</button>`;
    return `<div class="card col-span-2">
      <div class="card__body" style="display:flex;align-items:center;gap:20px;flex-wrap:wrap">
        <div class="stat__icon ${c.in ? "tint-brand" : "tint-amber"}" style="width:56px;height:56px">${icon("clock", 28)}</div>
        <div style="flex:1;min-width:190px">
          <div class="flex items-center gap-8" style="font-size:13px;color:var(--text-2)">Your status · Wednesday ${c.in ? statusPill(c.mode === "Remote" ? "Remote" : "Present") : ""}</div>
          <div class="big-num">${statusText}</div>
          <div class="text-2" style="font-size:12.5px">${hint}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;align-items:stretch;min-width:220px">
          <span class="text-3" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;font-weight:600">Work mode</span>
          <div class="tabs" style="display:flex">${modeToggle}</div>
          ${btn}
        </div>
      </div>
    </div>`;
  },

  // Personal "stamping in" page — your clock + your timesheet only.
  time() {
    const ts = DB.timesheet.map((t) => `
      <tr>
        <td><strong>${t.day}</strong> <span class="muted">${H.fmtDateShort(t.date)}</span></td>
        <td class="muted">${t.in}</td><td class="muted">${t.out}</td>
        <td class="muted">${t.break} h</td>
        <td><strong>${t.hours != null ? t.hours + " h" : "—"}</strong></td>
        <td>${t.status === "—" ? '<span class="muted">—</span>' : leaveStatusPill(t.status)}</td>
      </tr>`).join("");

    const weekNum = DB.timesheet.reduce((s, t) => s + (t.hours || 0), 0);
    const weekTotal = weekNum.toFixed(1);
    const done = DB.timesheet.filter((t) => t.hours != null);
    const daysLogged = DB.timesheet.filter((t) => t.in !== "—").length;
    const overtime = weekNum - 7.5 * done.length;
    const ins = DB.timesheet.filter((t) => t.in !== "—").map((t) => { const [h, m] = t.in.split(":").map(Number); return h * 60 + m; });
    const avgMin = ins.length ? Math.round(ins.reduce((a, b) => a + b, 0) / ins.length) : 0;
    const avgStart = `${String(Math.floor(avgMin / 60)).padStart(2, "0")}:${String(avgMin % 60).padStart(2, "0")}`;
    const remaining = Math.max(0, DB.company.workweekHours - weekNum).toFixed(1);

    // Personal leave: balances + request tracking
    const balanceCards = H.myLeaveBalances().map((b) => balanceCard(b)).join("");
    const myReqs = H.myLeaveRequests();
    const myPending = myReqs.filter((l) => l.status === "Pending").length;
    const reqRows = myReqs.length
      ? myReqs.map((l) => `<tr>
          <td>${l.type}</td>
          <td class="muted nowrap">${H.fmtDateShort(l.from)} – ${H.fmtDateShort(l.to)}</td>
          <td><strong>${l.days}</strong></td>
          <td class="muted nowrap">${H.fmtDateShort(l.submitted)}</td>
          <td>${leaveStatusPill(l.status)}</td>
        </tr>`).join("")
      : `<tr><td colspan="5"><div class="empty">${icon("leave", 42)}<div>No leave requests yet — use <strong>Request Leave</strong> to submit one.</div></div></td></tr>`;

    return `
      <div class="page-head">
        <div><h2>Time Clock</h2><p>Clock in/out &amp; your timesheet · ${H.fmtDate(DB.today)}</p></div>
        <div class="page-actions">
          <button class="btn btn--ghost" data-action="export">${icon("download", 17)} Export timesheet</button>
          <button class="btn btn--primary" data-action="request-leave">${icon("leave", 17)} Request Leave</button>
        </div>
      </div>

      <div class="grid grid-3 section-gap">
        ${Pages.clockWidget()}
        ${statCard({ icon: "clock", tint: "tint-brand", label: "Logged This Week", value: weekTotal + " h", foot: `Target ${DB.company.workweekHours} h/week` })}
      </div>

      <div class="grid grid-4 section-gap">
        ${statCard({ icon: "checkCircle", tint: "tint-green", label: "Days Present", value: daysLogged + " / 5", foot: "This week" })}
        ${statCard({ icon: "time", tint: "tint-blue", label: "Avg Start Time", value: avgStart, foot: "On-time" })}
        ${statCard({ icon: "trendUp", tint: "tint-violet", label: "Overtime", value: (overtime >= 0 ? "+" : "") + overtime.toFixed(1) + " h", foot: "Vs. 7.5 h/day" })}
        ${statCard({ icon: "coffee", tint: "tint-amber", label: "Remaining to Target", value: remaining + " h", foot: "This week" })}
      </div>

      <div class="card">
        <div class="card__head"><div><div class="card__title">My Timesheet</div><div class="card__sub">Week 28 · ${H.fmtDateShort(DB.timesheet[0].date)} – ${H.fmtDateShort(DB.timesheet[4].date)}</div></div><span class="text-2" style="font-size:13px">${weekTotal} h logged</span></div>
        <div class="card__body card__body--flush">
          <div class="table-wrap"><table class="tbl">
            <thead><tr><th>Day</th><th>Clock In</th><th>Clock Out</th><th>Break</th><th>Hours</th><th>Status</th></tr></thead>
            <tbody>${ts}</tbody>
            <tfoot><tr><td colspan="4" style="text-align:right;font-weight:600;padding:13px 20px">Week total</td><td style="font-weight:800">${weekTotal} h</td><td></td></tr></tfoot>
          </table></div>
        </div>
      </div>

      <div style="margin:24px 0 14px">
        <h3 style="font-size:16px;font-weight:700;letter-spacing:-.2px">My Leave</h3>
        <p class="text-2" style="font-size:12.5px">Your balances &amp; the status of your requests</p>
      </div>

      <div class="grid grid-4 section-gap">${balanceCards}</div>

      <div class="card">
        <div class="card__head">
          <div><div class="card__title">My Leave Requests</div><div class="card__sub">Track whether your time-off was approved</div></div>
          ${myPending ? pill(myPending + " pending", "amber") : pill("All up to date", "green")}
        </div>
        <div class="card__body card__body--flush">
          <div class="table-wrap"><table class="tbl">
            <thead><tr><th>Type</th><th>Dates</th><th>Days</th><th>Submitted</th><th>Status</th></tr></thead>
            <tbody>${reqRows}</tbody>
          </table></div>
        </div>
      </div>`;
  },

  /* ---------------- ATTENDANCE (all employees) ---------------- */
  attendanceFilter: "all",
  attendance() {
    const s = H.stats();
    const late = DB.attendance.filter((a) => a.status === "Late").length;
    const attnTrend = Charts.line({
      xLabels: DB.attendanceTrend.map((d) => d.d),
      series: [
        { name: "In office", color: "#10b981", points: DB.attendanceTrend.map((d) => d.present) },
        { name: "Remote", color: "#3b82f6", points: DB.attendanceTrend.map((d) => d.remote) },
      ],
      height: 240, area: false,
    });
    const statusData = H.byStatus();
    const legend = statusData.map((d) => `<div class="legend-item"><span class="swatch" style="background:${d.color}"></span><span class="lg-label">${d.label}</span><span class="lg-val">${d.value}</span></div>`).join("");

    const filters = [["all", "All"], ["Present", "In office"], ["Remote", "Remote"], ["On Leave", "On leave"], ["Late", "Late"], ["Absent", "Absent"]];
    const chips = filters.map(([st, label]) => `<button class="chip ${Pages.attendanceFilter === st ? "active" : ""}" data-action="attn-filter" data-status="${st}">${label}</button>`).join("");

    return `
      <div class="page-head">
        <div><h2>Attendance</h2><p>Team attendance overview · ${H.fmtDate(DB.today)}</p></div>
        <div class="page-actions"><button class="btn btn--ghost" data-action="export">${icon("download", 17)} Export</button></div>
      </div>

      <div class="grid grid-4 section-gap">
        ${statCard({ icon: "checkCircle", tint: "tint-green", label: "In Office", value: s.present, foot: `${s.attendanceRate}% attendance rate` })}
        ${statCard({ icon: "globe", tint: "tint-blue", label: "Remote", value: s.remote, foot: "Working remotely" })}
        ${statCard({ icon: "leave", tint: "tint-amber", label: "On Leave", value: s.onLeave, foot: "Approved absence" })}
        ${statCard({ icon: "alert", tint: "tint-pink", label: "Late / Absent", value: (s.absent + late), foot: "Needs follow-up" })}
      </div>

      <div class="grid grid-3 section-gap">
        <div class="card col-span-2">
          <div class="card__head"><div class="card__title">Weekly Attendance Trend</div>
            <div class="legend" style="flex-direction:row;gap:16px">
              <div class="legend-item"><span class="swatch" style="background:#10b981"></span><span class="lg-label">Office</span></div>
              <div class="legend-item"><span class="swatch" style="background:#3b82f6"></span><span class="lg-label">Remote</span></div>
            </div>
          </div>
          <div class="card__body"><div class="chart">${attnTrend}</div></div>
        </div>
        <div class="card">
          <div class="card__head"><div class="card__title">Who's In Today</div></div>
          <div class="card__body">
            <div class="chart-flex" style="justify-content:center"><div class="chart">${Charts.donut(statusData, { centerValue: s.attendanceRate + "%", centerLabel: "at work" })}</div></div>
            <div class="legend mt-16">${legend}</div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card__head" style="flex-wrap:wrap;gap:12px">
          <div><div class="card__title">Today's Attendance Log</div><div class="card__sub">${DB.attendance.length} employees · ${H.fmtDate(DB.today)}</div></div>
          <div class="filterbar" style="margin:0">${chips}</div>
        </div>
        <div class="card__body card__body--flush">
          <div class="table-wrap"><table class="tbl">
            <thead><tr><th>Employee</th><th>Department</th><th>Status</th><th>Clock In</th><th>Clock Out</th><th>Mode</th></tr></thead>
            <tbody id="attnBody">${Pages.attendanceRows()}</tbody>
          </table></div>
        </div>
      </div>`;
  },

  attendanceRows() {
    let list = DB.attendance.slice();
    if (Pages.attendanceFilter !== "all") list = list.filter((a) => a.status === Pages.attendanceFilter);
    if (!list.length) return `<tr><td colspan="6"><div class="empty">${icon("users", 42)}<div>No employees with this status.</div></div></td></tr>`;
    return list.map((a) => {
      const e = H.emp(a.empId);
      return `<tr>
        <td><div class="cell-user">${avatar(e, "avatar--sm")}<div><div class="cu-name">${H.fullName(e)}</div><div class="cu-sub">${e.id}</div></div></div></td>
        <td><span class="pill pill--gray"><span class="dot" style="background:${H.deptColor(e.dept)}"></span>${H.deptName(e.dept)}</span></td>
        <td>${statusPill(a.status)}</td>
        <td class="muted">${a.in}</td>
        <td class="muted">${a.out}</td>
        <td class="muted">${a.mode}</td>
      </tr>`;
    }).join("");
  },

  /* ---------------- LEAVE MANAGEMENT ---------------- */
  leave() {
    const spansToday = (l) => l.from <= DB.today && l.to >= DB.today;
    const onLeaveToday = DB.leaveRequests.filter((l) => l.status === "Approved" && spansToday(l)).length;
    const pending = DB.leaveRequests.filter((l) => l.status === "Pending").length;
    const approved = DB.leaveRequests.filter((l) => l.status === "Approved").length;
    const rejected = DB.leaveRequests.filter((l) => l.status === "Rejected").length;

    const tabs = [["all", "All requests"], ["Pending", "Pending"], ["Approved", "Approved"], ["Rejected", "Rejected"]];
    const tabHtml = tabs.map(([id, label]) =>
      `<button class="tab ${Pages.leaveTab === id ? "active" : ""}" data-action="leave-tab" data-tab="${id}">${label}</button>`).join("");

    return `
      <div class="page-head">
        <div><h2>Leave Management</h2><p>View, edit &amp; add leave for your team</p></div>
        <div class="page-actions"><button class="btn btn--primary" data-action="add-leave">${icon("plus", 17)} Add Leave</button></div>
      </div>

      <div class="grid grid-4 section-gap">
        ${statCard({ icon: "leave", tint: "tint-amber", label: "On Leave Today", value: onLeaveToday, foot: "Currently away" })}
        ${statCard({ icon: "clock", tint: "tint-blue", label: "Pending Approval", value: pending, foot: "Awaiting decision" })}
        ${statCard({ icon: "checkCircle", tint: "tint-green", label: "Approved Requests", value: approved, foot: "This year" })}
        ${statCard({ icon: "x", tint: "tint-red", label: "Rejected", value: rejected, foot: "This year" })}
      </div>

      <div class="card">
        <div class="card__head" style="flex-wrap:wrap;gap:12px">
          <div><div class="card__title">Leave Requests</div><div class="card__sub">Team leave records · approvals handled in Approvals</div></div>
          <div class="tabs">${tabHtml}</div>
        </div>
        <div class="card__body card__body--flush">
          <div class="table-wrap"><table class="tbl">
            <thead><tr><th>Employee</th><th>Type</th><th>Dates</th><th>Days</th><th>Reason</th><th>Status</th><th></th></tr></thead>
            <tbody id="leaveBody">${Pages.leaveRows()}</tbody>
          </table></div>
        </div>
      </div>`;
  },

  leaveRows() {
    let list = DB.leaveRequests.slice().sort((a, b) => (a.submitted < b.submitted ? 1 : -1));
    if (Pages.leaveTab !== "all") list = list.filter((l) => l.status === Pages.leaveTab);
    if (!list.length) return `<tr><td colspan="7"><div class="empty">${icon("leave", 42)}<div>No ${Pages.leaveTab.toLowerCase()} requests.</div></div></td></tr>`;
    return list.map((l) => {
      const e = H.emp(l.empId);
      const action = `<div style="display:flex;justify-content:flex-end">
        <button class="btn btn--ghost btn--sm" data-action="edit-leave" data-id="${l.id}">${icon("edit", 15)} Edit leave</button>
      </div>`;
      return `<tr>
        <td><div class="cell-user">${avatar(e, "avatar--sm")}<div><div class="cu-name">${H.fullName(e)}</div><div class="cu-sub">${H.deptName(e.dept)}</div></div></div></td>
        <td>${l.type}</td>
        <td class="muted nowrap">${H.fmtDateShort(l.from)} – ${H.fmtDateShort(l.to)}</td>
        <td><strong>${l.days}</strong></td>
        <td class="muted">${l.reason}</td>
        <td>${leaveStatusPill(l.status)}</td>
        <td>${action}</td>
      </tr>`;
    }).join("");
  },

  /* ---------------- APPROVALS ---------------- */
  approvals() {
    const kinds = ["all", "Leave", "Timesheet", "Expense", "Equipment"];
    const filterHtml = kinds.map((k) =>
      `<button class="chip ${Pages.approvalFilter === k ? "active" : ""}" data-action="appr-filter" data-kind="${k}">${k === "all" ? "All" : k}</button>`).join("");
    const counts = {};
    DB.approvals.forEach((a) => (counts[a.kind] = (counts[a.kind] || 0) + 1));

    return `
      <div class="page-head">
        <div><h2>Approvals</h2><p>${DB.approvals.length} items awaiting your decision</p></div>
        <div class="page-actions">
          <button class="btn btn--ghost" data-action="toast-demo">${icon("check", 17)} Bulk approve</button>
        </div>
      </div>

      <div class="grid grid-4 section-gap">
        ${statCard({ icon: "leave", tint: "tint-teal", label: "Leave", value: counts.Leave || 0, foot: "Time-off requests" })}
        ${statCard({ icon: "clock", tint: "tint-blue", label: "Timesheets", value: counts.Timesheet || 0, foot: "Hours to approve" })}
        ${statCard({ icon: "dollar", tint: "tint-amber", label: "Expenses", value: counts.Expense || 0, foot: "Reimbursements" })}
        ${statCard({ icon: "laptop", tint: "tint-violet", label: "Equipment", value: counts.Equipment || 0, foot: "Asset requests" })}
      </div>

      <div class="card">
        <div class="card__head" style="flex-wrap:wrap;gap:12px">
          <div class="filterbar" style="margin:0">${filterHtml}</div>
        </div>
        <div class="card__body card__body--flush">
          <div id="approvalList">${Pages.approvalItems()}</div>
        </div>
      </div>`;
  },

  approvalItems() {
    let list = DB.approvals.slice();
    if (Pages.approvalFilter !== "all") list = list.filter((a) => a.kind === Pages.approvalFilter);
    if (!list.length) return `<div class="empty">${icon("checkCircle", 42)}<div>All caught up — nothing to approve here. 🎉</div></div>`;
    const prio = { high: "red", normal: "gray", low: "blue" };
    return list.map((a) => {
      const e = H.emp(a.empId);
      return `<div class="list-row" style="padding:16px 20px" data-appr="${a.id}">
        <div class="cell-user" style="min-width:200px">${avatar(e)}<div><div class="cu-name">${H.fullName(e)}</div><div class="cu-sub">${H.deptName(e.dept)}</div></div></div>
        <div style="flex:1;min-width:180px">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">${kindPill(a.kind)}<strong style="font-size:13.5px">${a.title}</strong></div>
          <div class="lr-sub mt-4">${a.detail} · <span class="muted">submitted ${H.fmtDateShort(a.submitted)}</span></div>
        </div>
        ${a.priority !== "normal" ? pill(a.priority === "high" ? "High priority" : "Low", prio[a.priority]) : ""}
        <div style="display:flex;gap:8px">
          <button class="btn btn--green btn--sm" data-action="approve" data-id="${a.id}">${icon("check", 16)} Approve</button>
          <button class="btn btn--ghost btn--sm" data-action="reject" data-id="${a.id}">${icon("x", 16)} Reject</button>
        </div>
      </div>`;
    }).join("");
  },

  /* ---------------- REPORTS ---------------- */
  reports() {
    const tabs = [["headcount", "Headcount"], ["attendance", "Attendance"], ["leave", "Leave"], ["attrition", "Attrition"], ["engagement", "Engagement"]];
    const tabHtml = tabs.map(([id, label]) =>
      `<button class="tab ${Pages.reportTab === id ? "active" : ""}" data-action="report-tab" data-tab="${id}">${label}</button>`).join("");

    return `
      <div class="page-head">
        <div><h2>Reports & Analytics</h2><p>People metrics · exportable to Power BI / CSV</p></div>
        <div class="page-actions">
          <select class="select" style="width:auto"><option>Last 12 months</option><option>Year to date</option><option>This quarter</option></select>
          <button class="btn btn--primary" data-action="export">${icon("download", 17)} Export</button>
        </div>
      </div>
      <div class="tabs section-gap">${tabHtml}</div>
      <div id="reportBody">${Pages.reportBody()}</div>`;
  },

  reportBody() {
    const s = H.stats();
    switch (Pages.reportTab) {
      case "headcount": {
        const dept = H.headcountByDept();
        const rows = dept.map((d) => {
          const dObj = DB.departments.find((x) => x.name === d.label);
          return `<tr>
            <td><span class="pill pill--gray"><span class="dot" style="background:${d.color}"></span>${d.label}</span></td>
            <td>${dObj.head}</td>
            <td><strong>${d.value}</strong></td>
            <td class="muted">${Math.round((d.value / s.total) * 100)}%</td>
          </tr>`;
        }).join("");
        return `
          <div class="grid grid-3 section-gap">
            <div class="card col-span-2">
              <div class="card__head"><div><div class="card__title">Headcount Growth</div><div class="card__sub">Monthly, last 8 months</div></div></div>
              <div class="card__body"><div class="chart">${Charts.line({ xLabels: DB.headcountTrend.map((d) => d.m), series: [{ name: "Headcount", color: "#4f46e5", points: DB.headcountTrend.map((d) => d.v) }], height: 250 })}</div></div>
            </div>
            <div class="card">
              <div class="card__head"><div class="card__title">By Type</div></div>
              <div class="card__body"><div class="chart-flex" style="justify-content:center">${Charts.donut(H.byEmploymentType(), { centerValue: s.total, centerLabel: "total" })}</div></div>
            </div>
          </div>
          <div class="grid grid-2">
            <div class="card"><div class="card__head"><div class="card__title">Headcount by Department</div></div><div class="card__body"><div class="chart">${Charts.bars(H.headcountByDept(), { height: 250 })}</div></div></div>
            <div class="card"><div class="card__head"><div class="card__title">Department Breakdown</div></div><div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>Department</th><th>Lead</th><th>People</th><th>Share</th></tr></thead><tbody>${rows}</tbody></table></div></div></div>
          </div>`;
      }
      case "attendance": {
        const late = DB.attendance.filter(a=>a.status==='Late').length;
        return `
          <div class="grid grid-4 section-gap">
            ${statCard({ icon: "checkCircle", tint: "tint-green", label: "Attendance Rate", value: s.attendanceRate + "%", foot: "This week avg" })}
            ${statCard({ icon: "globe", tint: "tint-blue", label: "Remote Share", value: Math.round(s.remote/s.total*100) + "%", foot: "Working remotely" })}
            ${statCard({ icon: "alert", tint: "tint-pink", label: "Late Arrivals", value: late, foot: "Today" })}
            ${statCard({ icon: "coffee", tint: "tint-amber", label: "Avg Hours/Day", value: "7.9", foot: "Per employee" })}
          </div>
          <div class="grid grid-2">
            <div class="card"><div class="card__head"><div class="card__title">Weekly Attendance</div></div><div class="card__body"><div class="chart">${Charts.line({ xLabels: DB.attendanceTrend.map(d=>d.d), series:[{name:"Office",color:"#10b981",points:DB.attendanceTrend.map(d=>d.present)},{name:"Remote",color:"#3b82f6",points:DB.attendanceTrend.map(d=>d.remote)}], height:250, area:false })}</div></div></div>
            <div class="card"><div class="card__head"><div class="card__title">Status Distribution (Today)</div></div><div class="card__body"><div class="chart-flex" style="justify-content:center">${Charts.donut(H.byStatus(), { centerValue: s.total, centerLabel: "people" })}</div><div class="legend mt-16">${H.byStatus().map(d=>`<div class="legend-item"><span class="swatch" style="background:${d.color}"></span><span class="lg-label">${d.label}</span><span class="lg-val">${d.value}</span></div>`).join("")}</div></div></div>
          </div>`;
      }
      case "leave": {
        const taken = {};
        DB.leaveRequests.filter(l=>l.status==='Approved').forEach(l=>taken[l.type]=(taken[l.type]||0)+l.days);
        const colors = { "Annual Leave":"#4f46e5","Sick Leave":"#f59e0b","Personal Leave":"#14b8a6","Parental Leave":"#8b5cf6" };
        const takenData = Object.entries(taken).map(([label,value])=>({label,value,color:colors[label]||"#94a3b8"}));
        const balHbar = DB.leaveBalances.filter(b=>b.entitled>0).map(b=>({label:b.type,value:b.used,color:b.color}));
        return `
          <div class="grid grid-2">
            <div class="card"><div class="card__head"><div class="card__title">Leave Days Taken by Type</div><div class="card__sub">Approved · this period</div></div><div class="card__body"><div class="chart-flex" style="justify-content:center">${Charts.donut(takenData,{centerValue:takenData.reduce((s,d)=>s+d.value,0),centerLabel:"days"})}</div><div class="legend mt-16">${takenData.map(d=>`<div class="legend-item"><span class="swatch" style="background:${d.color}"></span><span class="lg-label">${d.label}</span><span class="lg-val">${d.value} d</span></div>`).join("")}</div></div></div>
            <div class="card"><div class="card__head"><div class="card__title">My Leave Utilisation</div><div class="card__sub">Days used vs entitlement</div></div><div class="card__body"><div class="chart">${Charts.hbars(balHbar,{max:25,suffix:" d"})}</div></div></div>
          </div>`;
      }
      case "attrition": {
        const exits = DB.hiresVsExits.reduce((s,d)=>s+d.exits,0);
        const hires = DB.hiresVsExits.reduce((s,d)=>s+d.hires,0);
        const attr = Math.round((exits / s.total) * 100);
        return `
          <div class="grid grid-4 section-gap">
            ${statCard({ icon: "trendDown", tint: "tint-green", label: "Attrition (12mo)", value: attr + "%", foot: exits + " exits · below benchmark" })}
            ${statCard({ icon: "user", tint: "tint-brand", label: "New Hires (12mo)", value: hires, foot: "Net +" + (hires - exits) })}
            ${statCard({ icon: "shield", tint: "tint-teal", label: "Retention", value: (100 - attr) + "%", foot: "12-month" })}
            ${statCard({ icon: "star", tint: "tint-amber", label: "Avg Tenure", value: s.avgTenure + " yrs", foot: "Company-wide" })}
          </div>
          <div class="card"><div class="card__head"><div class="card__title">Hires vs Exits</div>
            <div class="legend" style="flex-direction:row;gap:16px"><div class="legend-item"><span class="swatch" style="background:#10b981"></span><span class="lg-label">Hires</span></div><div class="legend-item"><span class="swatch" style="background:#ef4444"></span><span class="lg-label">Exits</span></div></div>
          </div><div class="card__body"><div class="chart">${Charts.groupedBars(DB.hiresVsExits, { labelA: "hires", labelB: "exits", height: 260 })}</div></div></div>`;
      }
      case "engagement": {
        const enps = 42;
        return `
          <div class="grid grid-3 section-gap">
            ${statCard({ icon: "star", tint: "tint-amber", label: "Engagement Score", value: "81%", foot: "+4 pts vs last survey" })}
            ${statCard({ icon: "trendUp", tint: "tint-green", label: "eNPS", value: "+" + enps, foot: "Employee Net Promoter" })}
            ${statCard({ icon: "users", tint: "tint-brand", label: "Survey Response", value: "91%", foot: "20 of 22 responded" })}
          </div>
          <div class="card"><div class="card__head"><div class="card__title">Engagement Drivers</div><div class="card__sub">Latest pulse survey · % favourable</div></div><div class="card__body"><div class="chart">${Charts.hbars(DB.engagement.map(e=>({label:e.label,value:e.score,color:e.score>=85?"#10b981":e.score>=75?"#4f46e5":"#f59e0b"})),{max:100,suffix:"%"})}</div></div></div>`;
      }
    }
  },

  /* ---------------- AI ASSISTANT ---------------- */
  assistant() {
    const suggestions = ["Who's on leave today?", "How many employees do we have?", "What's my leave balance?", "Show pending approvals", "What's our attrition rate?"];
    return `
      <div class="page-head">
        <div><h2>AI Assistant</h2><p>Ask about your HR data in plain language</p></div>
        ${pill("Demo · rule-based", "violet")}
      </div>
      <div class="card">
        <div class="chat">
          <div class="chat__stream" id="chatStream">
            <div class="msg msg--bot">
              <span class="ai-ava">${icon("assistant", 19)}</span>
              <div class="msg__bubble">Hi Taru 👋 I'm your HR assistant. I can answer questions about headcount, attendance, leave, approvals and more — all from your portal data. Try one of the suggestions below.</div>
            </div>
          </div>
          <div class="suggestions" id="chatSuggestions">
            ${suggestions.map((s) => `<button class="suggestion" data-action="ai-suggest" data-q="${s}">${s}</button>`).join("")}
          </div>
          <form class="chat__input" id="chatForm">
            <input type="text" id="chatInput" placeholder="Ask a question about your HR data…" autocomplete="off" />
            <button type="submit" class="btn btn--primary">${icon("send", 17)} Send</button>
          </form>
        </div>
      </div>
      <p class="text-3" style="font-size:12px;margin-top:12px;text-align:center">
        This assistant uses simple rule-based matching over the demo dataset. In production it would connect to an LLM (e.g. the Claude API) with role-based access to live HR data.
      </p>`;
  },

  // Rule-based "AI" response engine over the mock data
  aiRespond(text) {
    const t = text.toLowerCase();
    const s = H.stats();
    const has = (...k) => k.some((w) => t.includes(w));

    if (has("on leave", "who's out", "whos out", "who is out", "off today", "away")) {
      const out = DB.attendance.filter((a) => a.status === "On Leave").map((a) => H.emp(a.empId));
      if (!out.length) return "Nobody is on leave today — full house! 🎉";
      return `<strong>${out.length} people are on leave today:</strong><ul>${out.map((e) => `<li>${H.fullName(e)} — ${H.deptName(e.dept)}</li>`).join("")}</ul>`;
    }
    if (has("how many employ", "headcount", "total employ", "team size", "people do we", "staff")) {
      const dept = H.headcountByDept();
      return `We currently have <strong>${s.total} employees</strong> across ${DB.departments.length} departments.<ul>${dept.map((d) => `<li>${d.label}: ${d.value}</li>`).join("")}</ul>`;
    }
    if (has("my leave", "leave balance", "vacation day", "days off", "my balance", "holiday left", "annual leave left")) {
      const bal = H.myLeaveBalances();
      const annual = bal.find((b) => b.type === "Annual Leave");
      const sick = bal.find((b) => b.type === "Sick Leave");
      const personal = bal.find((b) => b.type === "Personal Leave");
      return `You have <strong>${annual.available} of ${annual.entitled} annual leave days</strong> available (${annual.used} used${annual.pending ? `, ${annual.pending} pending` : ""}). Sick leave used this year: <strong>${sick.used} day${sick.used === 1 ? "" : "s"}</strong>. Personal leave used: <strong>${personal.used} day${personal.used === 1 ? "" : "s"}</strong>. Sick & personal leave follow the collective agreement (TES).`;
    }
    if (has("pending", "approval", "to approve", "waiting")) {
      const list = DB.approvals.slice(0, 4);
      return `There are <strong>${DB.approvals.length} items pending approval</strong>. Top of the queue:<ul>${list.map((a) => `<li>${H.fullName(H.emp(a.empId))} — ${a.title}</li>`).join("")}</ul>`;
    }
    if (has("attendance", "present today", "who's in", "in office", "at work")) {
      return `Today <strong>${s.atWork} of ${s.total}</strong> are working (${s.attendanceRate}% attendance): ${s.present} in office, ${s.remote} remote. ${s.onLeave} on leave, ${s.absent} absent.`;
    }
    if (has("attrition", "turnover", "churn", "retention")) {
      const exits = DB.hiresVsExits.reduce((x, d) => x + d.exits, 0);
      const attr = Math.round((exits / s.total) * 100);
      return `Our 12-month <strong>attrition rate is ${attr}%</strong> (${exits} departures) — comfortably below the tech-industry benchmark of ~13%. Retention stands at ${100 - attr}%.`;
    }
    if (has("new hire", "onboard", "recently join", "joined")) {
      const nh = DB.employees.filter((e) => e.join >= "2026-01-01");
      return `<strong>${nh.length} new hires in 2026:</strong><ul>${nh.map((e) => `<li>${H.fullName(e)} — ${e.title} (${H.fmtDateShort(e.join)})</li>`).join("")}</ul>`;
    }
    if (has("birthday", "anniversary", "event", "upcoming", "holiday")) {
      return `<strong>Upcoming events:</strong><ul>${DB.events.map((e) => `<li>${H.fmtDateShort(e.date)} — ${e.title} (${e.type})</li>`).join("")}</ul>`;
    }
    if (has("engagement", "enps", "survey", "satisfaction")) {
      return `Latest pulse survey: <strong>81% engagement</strong>, eNPS <strong>+42</strong>, 91% response rate. Highest driver: "Recommend as employer" (88%). Lowest: "Career growth" (71%).`;
    }
    for (const d of DB.departments) {
      if (t.includes(d.name.toLowerCase()) || (d.id === "eng" && t.includes("engineer"))) {
        const cnt = DB.employees.filter((e) => e.dept === d.id).length;
        return `The <strong>${d.name}</strong> team has <strong>${cnt} people</strong>, led by ${d.head}.`;
      }
    }
    if (has("hi", "hello", "hey", "help", "what can you")) {
      return `I can help with:<ul><li>Headcount & department breakdowns</li><li>Who's on leave / attendance today</li><li>Your leave balances</li><li>Pending approvals</li><li>Attrition, engagement & other metrics</li></ul>Just ask in plain language!`;
    }
    return `I'm a demo assistant, so I understand a focused set of HR questions. Try asking about <strong>headcount, attendance, leave balances, pending approvals, attrition</strong> or a specific department. (A production version would use the Claude API for open-ended questions.)`;
  },

  /* ---------------- COMPENSATION & BENEFITS ---------------- */
  // Role-based access model that drives the "Viewing as" switcher
  compAccessModel(role) {
    return {
      Employee:      { exact: true,  editSalary: false, editBenefits: false },
      Manager:       { exact: false, editSalary: false, editBenefits: false },
      HR:            { exact: true,  editSalary: true,  editBenefits: true  },
      Payroll:       { exact: true,  editSalary: true,  editBenefits: false },
      Administrator: { exact: true,  editSalary: true,  editBenefits: true  },
    }[role] || { exact: false, editSalary: false, editBenefits: false };
  },

  comp() {
    const emp = H.emp(Pages.compEmpId) || H.emp("EMP-001");
    const rec = H.compFor(emp.id);
    const c = rec.compensation;
    const isSelf = emp.id === DB.currentUser.id;
    const role = Pages.compRole;
    const acc = Pages.compAccessModel(role);
    const cur = c.currency;
    const money = (n) => cur + n.toLocaleString("en-US");
    const annual = c.salaryMonthly * 12;
    const bandPct = Math.max(0, Math.min(100, Math.round(((c.salaryMonthly - c.band.min) / (c.band.max - c.band.min)) * 100)));
    const ratio = c.salaryMonthly / c.band.mid;
    const compaRatio = ratio.toFixed(2);
    const activeBenefits = rec.benefits.filter((x) => x.enabled).length;

    const banners = {
      Employee:      { icon: "user",   tint: "tint-blue",   text: "Viewing as <strong>Employee</strong> — you can see your own salary and benefits, but not edit them." },
      Manager:       { icon: "users",  tint: "tint-amber",  text: "Viewing as <strong>Manager</strong> — exact salaries are hidden; you see the <strong>salary band</strong> only." },
      HR:            { icon: "shield", tint: "tint-green",  text: "Viewing as <strong>HR</strong> — you can edit salary and benefits." },
      Payroll:       { icon: "dollar", tint: "tint-violet", text: "Viewing as <strong>Payroll</strong> — you can edit salary details, but not benefits." },
      Administrator: { icon: "shield", tint: "tint-green",  text: "Viewing as <strong>Administrator</strong> — full access to all compensation data." },
    };
    const bn = banners[role];
    const roleOptions = DB.compAccess.map((a) => `<option ${a.role === role ? "selected" : ""}>${a.role}</option>`).join("");

    const salaryDisplay = acc.exact
      ? `<div class="salary-hero"><span class="amount">${money(c.salaryMonthly)}</span><span class="per">/ month · gross</span></div>
         <div class="text-2 mt-4">${money(annual)} annual${c.bonusEligible ? ` · +${c.bonusTarget}% bonus target (${money(Math.round(annual * c.bonusTarget / 100))})` : ""}</div>`
      : `<div class="salary-masked">•••••• / month</div>
         <div class="text-2 mt-4">Exact salary hidden for your role — band <strong>${money(c.band.min)}–${money(c.band.max)}</strong> (${c.grade})</div>`;

    const bandBar = `
      <div class="band-track">
        <div class="band-mid"></div>
        ${acc.exact ? `<div class="band-marker" style="left:${bandPct}%" data-label="${money(c.salaryMonthly)}"></div>` : ""}
      </div>
      <div class="band-labels"><span>${money(c.band.min)}</span><span>mid ${money(c.band.mid)}</span><span>${money(c.band.max)}</span></div>
      ${acc.exact ? `<div class="mt-16 flex items-center gap-8"><span class="pill pill--${ratio >= 1 ? "green" : "amber"}">Compa-ratio ${compaRatio}</span><span class="text-2" style="font-size:12.5px">${ratio === 1 ? "At band midpoint" : ratio > 1 ? "Above midpoint" : "Below midpoint"}</span></div>` : ""}`;

    const meta = [
      { label: "Salary grade / band", val: c.band.name },
      { label: "Effective date", val: H.fmtDate(c.effectiveDate) },
      { label: "Employment %", val: c.fte + "%" },
      { label: "Bonus eligibility", val: c.bonusEligible ? `Yes · ${c.bonusTarget}% target` : "Not eligible" },
      { label: "Next salary review", val: H.fmtDate(c.nextReview) },
      { label: "Pay frequency", val: c.payFrequency },
    ].map((m) => `<div class="meta-item"><div class="mi-label">${m.label}</div><div class="mi-val">${m.val}</div></div>`).join("");

    const benefitCards = rec.benefits.map((bf) => {
      const control = acc.editBenefits
        ? `<button class="switch ${bf.enabled ? "on" : ""}" data-action="toggle-benefit" data-id="${bf.id}" aria-pressed="${bf.enabled}"><span class="switch-knob"></span></button>`
        : `${bf.enabled ? pill("Active", "green") : pill("Off", "gray")}${icon("lock", 15)}`;
      return `<div class="benefit ${bf.enabled ? "benefit--on" : ""}">
        <div class="benefit__icon ${bf.tint}">${icon(bf.icon, 20)}</div>
        <div class="benefit__info">
          <div class="benefit__name">${bf.name}</div>
          <div class="benefit__desc">${bf.desc}</div>
          <div class="benefit__meta">${bf.value} · ${bf.taxable ? pill("Taxable", "amber") : pill("Tax-free", "teal")}</div>
        </div>
        <div class="benefit__control">${control}</div>
      </div>`;
    }).join("");

    const sortedComp = rec.history.slice().sort((a, z) => (a.date < z.date ? 1 : -1));
    const compRows = sortedComp.map((h, i) => {
      const prev = sortedComp[i + 1];
      const delta = prev ? h.salary - prev.salary : null;
      const deltaHtml = delta === null ? '<span class="muted">—</span>' : `<span class="trend trend--up">${icon("trendUp", 13)} +${money(delta)}</span>`;
      return `<tr>
        <td class="nowrap">${H.fmtDate(h.date)}</td>
        <td><strong>${acc.exact ? money(h.salary) : "••••"}</strong></td>
        <td>${acc.exact ? deltaHtml : '<span class="muted">—</span>'}</td>
        <td class="muted">${h.reason}</td>
      </tr>`;
    }).join("");

    const benRows = rec.benefitsHistory.slice().sort((a, z) => (a.date < z.date ? 1 : -1)).map((h) => `
      <div class="list-row">
        <span class="dot-icon ${h.action === "added" ? "tint-green" : "tint-red"}">${icon(h.action === "added" ? "plus" : "x", 16)}</span>
        <div><div class="lr-title">${h.benefit}</div><div class="lr-sub">${h.action === "added" ? "Added" : "Removed"} by ${h.by}</div></div>
        <span class="lr-time">${H.fmtDateShort(h.date)}</span>
      </div>`).join("");

    const permRows = DB.compAccess.map((a) => `
      <tr class="${a.role === role ? "perm-active" : ""}">
        <td>${roleBadge(a.role)}</td>
        <td class="muted">${a.access}</td>
        <td>${a.role === role ? pill("Viewing", "brand") : ""}</td>
      </tr>`).join("");

    const empOptions = DB.employees.slice()
      .sort((a, z) => H.fullName(a).localeCompare(H.fullName(z)))
      .map((e) => `<option value="${e.id}" ${e.id === emp.id ? "selected" : ""}>${H.fullName(e)}${e.id === DB.currentUser.id ? " (me)" : ""}</option>`).join("");

    return `
      <div class="page-head">
        <div class="flex items-center gap-12">
          ${avatar(emp, "avatar--lg")}
          <div>
            <h2 style="font-size:20px">${H.fullName(emp)}${isSelf ? ' <span class="pill pill--gray" style="vertical-align:middle;font-size:11px">You</span>' : ""}</h2>
            <p>${emp.title} · ${H.deptName(emp.dept)} · ${emp.id}</p>
          </div>
        </div>
        <div class="page-actions" style="align-items:center;gap:10px">
          <label class="flex items-center gap-8" style="font-size:12.5px;color:var(--text-2);font-weight:600">Employee
            <select class="select" id="compEmpSelect" style="width:auto;max-width:200px">${empOptions}</select>
          </label>
          <label class="flex items-center gap-8" style="font-size:12.5px;color:var(--text-2);font-weight:600">Viewing as
            <select class="select" id="compRoleSelect" style="width:auto">${roleOptions}</select>
          </label>
          ${acc.editSalary ? `<button class="btn btn--primary" data-action="edit-comp">${icon("edit", 16)} Edit salary</button>` : ""}
        </div>
      </div>

      <div class="banner"><span class="banner__icon ${bn.tint}">${icon(bn.icon, 18)}</span><div>${bn.text}</div></div>

      <div class="grid grid-3 section-gap">
        <div class="card col-span-2">
          <div class="card__head"><div><div class="card__title">Current Compensation</div><div class="card__sub">Effective ${H.fmtDate(c.effectiveDate)}</div></div>${acc.editSalary ? "" : pill("Read-only", "gray")}</div>
          <div class="card__body">${salaryDisplay}<div class="profile-meta mt-20">${meta}</div></div>
        </div>
        <div class="card">
          <div class="card__head"><div class="card__title">Salary Band</div><span class="pill pill--violet">${c.grade}</span></div>
          <div class="card__body">${bandBar}</div>
        </div>
      </div>

      <div class="card section-gap">
        <div class="card__head"><div><div class="card__title">Benefits</div><div class="card__sub">${activeBenefits} of ${rec.benefits.length} active${acc.editBenefits ? " · toggle to enrol / remove" : ""}</div></div>${acc.editBenefits ? pill("Editable", "green") : `<span class="flex items-center gap-8 text-3" style="font-size:12px">${icon("lock", 14)} Read-only</span>`}</div>
        <div class="card__body"><div class="grid grid-2">${benefitCards}</div></div>
      </div>

      <div class="grid grid-3 section-gap">
        <div class="card col-span-2">
          <div class="card__head"><div class="card__title">Compensation History</div></div>
          <div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl">
            <thead><tr><th>Effective Date</th><th>Salary</th><th>Change</th><th>Reason</th></tr></thead>
            <tbody>${compRows}</tbody>
          </table></div></div>
        </div>
        <div class="card">
          <div class="card__head"><div class="card__title">Benefits History</div></div>
          <div class="card__body"><div class="list timeline">${benRows}</div></div>
        </div>
      </div>

      <div class="card">
        <div class="card__head"><div><div class="card__title">Permissions</div><div class="card__sub">Role-based access control (RBAC) for compensation data</div></div>${icon("shield", 18)}</div>
        <div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl">
          <thead><tr><th>Role</th><th>Access</th><th></th></tr></thead>
          <tbody>${permRows}</tbody>
        </table></div></div>
      </div>`;
  },

  /* ---------------- SETTINGS ---------------- */
  settingsTab: "company",
  settings() {
    const tabs = [["company", "Company"], ["preferences", "Preferences"], ["departments", "Departments"], ["policy", "Leave Policy"], ["roles", "Roles & Access"]];
    const tabHtml = tabs.map(([id, label]) =>
      `<button class="tab ${Pages.settingsTab === id ? "active" : ""}" data-action="settings-tab" data-tab="${id}">${label}</button>`).join("");
    return `
      <div class="page-head"><div><h2>Settings</h2><p>Configure your HR portal</p></div></div>
      <div class="tabs section-gap">${tabHtml}</div>
      <div id="settingsBody">${Pages.settingsBody()}</div>`;
  },

  settingsBody() {
    switch (Pages.settingsTab) {
      case "company":
        return card("Company Profile", "Organisation details", `
          <div class="form-row">
            <div class="field"><label>Company name</label><input class="input" value="${DB.company.name}" /></div>
            <div class="field"><label>Legal entity</label><input class="input" value="${DB.company.legal}" /></div>
          </div>
          <div class="form-row">
            <div class="field"><label>Headquarters</label><input class="input" value="${DB.company.location}" /></div>
            <div class="field"><label>Standard work week (hours)</label><input class="input" type="number" value="${DB.company.workweekHours}" /></div>
          </div>
          <div class="field"><label>Founded</label><input class="input" value="${DB.company.founded}" style="max-width:160px" /></div>
          <button class="btn btn--primary" data-action="save-settings">${icon("check", 17)} Save changes</button>`);
      case "preferences":
        return card("Preferences", "Personalise your experience", `
          <div class="field"><label>Theme</label>
            <div class="filterbar">
              <button class="chip" data-action="set-theme" data-theme="light">☀️ Light</button>
              <button class="chip" data-action="set-theme" data-theme="dark">🌙 Dark</button>
            </div>
          </div>
          <div class="field"><label>Default landing page</label>
            <select class="select" style="max-width:260px"><option>Dashboard</option><option>Approvals</option><option>Employees</option></select></div>
          <div class="field"><label>Notifications</label>
            <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px">
              <label style="display:flex;gap:10px;align-items:center;font-weight:500"><input type="checkbox" checked /> Email me when a request needs approval</label>
              <label style="display:flex;gap:10px;align-items:center;font-weight:500"><input type="checkbox" checked /> Weekly people-metrics digest</label>
              <label style="display:flex;gap:10px;align-items:center;font-weight:500"><input type="checkbox" /> Birthday & anniversary reminders</label>
            </div></div>
          <button class="btn btn--primary" data-action="save-settings">${icon("check", 17)} Save preferences</button>`);
      case "departments": {
        const rows = DB.departments.map((d) => {
          const cnt = DB.employees.filter((e) => e.dept === d.id).length;
          return `<tr><td><span class="pill pill--gray"><span class="dot" style="background:${d.color}"></span>${d.name}</span></td><td>${d.head}</td><td><strong>${cnt}</strong></td><td><button class="btn btn--ghost btn--sm" data-action="toast-demo">${icon("edit", 15)} Edit</button></td></tr>`;
        }).join("");
        return `<div class="card"><div class="card__head"><div class="card__title">Departments</div><button class="btn btn--primary btn--sm" data-action="toast-demo">${icon("plus", 16)} Add department</button></div>
          <div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>Department</th><th>Lead</th><th>People</th><th></th></tr></thead><tbody>${rows}</tbody></table></div></div></div>`;
      }
      case "policy":
        return card("Leave Policy", "Entitlements by leave type (per collective agreement · TES)", `
          <div class="table-wrap"><table class="tbl">
            <thead><tr><th>Leave type</th><th>Allowance / year</th><th>Accrual</th><th>Carryover</th></tr></thead>
            <tbody>
              <tr><td><strong>Annual Leave</strong></td><td>30 days</td><td>Monthly (2.5 d/mo)</td><td>5 days</td></tr>
              <tr><td><strong>Sick Leave</strong></td><td>Per TES</td><td>As incurred</td><td>—</td></tr>
              <tr><td><strong>Personal Leave</strong></td><td>Per TES</td><td>As incurred</td><td>—</td></tr>
              <tr><td><strong>Parental Leave</strong></td><td>Statutory</td><td>—</td><td>—</td></tr>
            </tbody>
          </table></div>
          <button class="btn btn--primary mt-16" data-action="save-settings">${icon("check", 17)} Update policy</button>`);
      case "roles":
        return card("Roles & Access", "Who can see and do what", `
          <div class="table-wrap"><table class="tbl">
            <thead><tr><th>Role</th><th>Members</th><th>Permissions</th></tr></thead>
            <tbody>
              <tr><td><span class="pill pill--violet">HR Admin</span></td><td>3</td><td class="muted">Full access · manage all data & settings</td></tr>
              <tr><td><span class="pill pill--blue">Manager</span></td><td>8</td><td class="muted">Approve team requests · view team data</td></tr>
              <tr><td><span class="pill pill--teal">Employee</span></td><td>22</td><td class="muted">Self-service · own profile, leave & timesheet</td></tr>
              <tr><td><span class="pill pill--gray">Finance</span></td><td>2</td><td class="muted">Payroll & expense approvals</td></tr>
            </tbody>
          </table></div>
          <button class="btn btn--primary mt-16" data-action="toast-demo">${icon("shield", 17)} Manage roles</button>`);
    }
  },
};
