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
  sitemap: `<rect x="9" y="2.5" width="6" height="5" rx="1"/><rect x="2.5" y="16.5" width="6" height="5" rx="1"/><rect x="15.5" y="16.5" width="6" height="5" rx="1"/><path d="M12 7.5v4M5.5 16.5v-3h13v3M12 11.5v2"/>`,
  layers: `<path d="M12 2.5 2.5 7 12 11.5 21.5 7 12 2.5Z"/><path d="M2.5 12 12 16.5 21.5 12M2.5 16.5 12 21 21.5 16.5"/>`,
  workflow: `<rect x="3" y="3.5" width="6" height="5" rx="1"/><rect x="15" y="3.5" width="6" height="5" rx="1"/><rect x="9" y="15.5" width="6" height="5" rx="1"/><path d="M6 8.5v2.5h12V8.5M12 11v4.5"/>`,
  plug: `<path d="M9 2v6M15 2v6"/><path d="M6 8h12v3a6 6 0 0 1-12 0V8Z"/><path d="M12 17v5"/>`,
  database: `<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>`,
  history: `<path d="M3 4v5h5"/><path d="M3.5 9a9 9 0 1 1-1 4"/><path d="M12 8v4l3 2"/>`,
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

// System Administration console helpers
function setRow(title, sub, control) {
  return `<div class="set-row"><div><div class="sr-title">${title}</div>${sub ? `<div class="sr-sub">${sub}</div>` : ""}</div><div class="sr-control">${control}</div></div>`;
}
function sw(on) { return `<button class="switch ${on ? "on" : ""}" data-action="toggle-demo" role="switch" aria-checked="${!!on}"><span class="switch-knob"></span></button>`; }
function accessPill(level) {
  const m = { View: "blue", Edit: "amber", Full: "green" };
  return level === "None" ? '<span class="muted">—</span>' : pill(level, m[level] || "gray");
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
      <div class="profile-meta">${meta}</div>
      ${Pages.wtimeProfileBlock(e)}`;
  },

  // Working-time profile (collective agreement) block for the employee profile modal
  wtimeProfileBlock(e) {
    const cur = H.wtimeProfileFor(e.id);
    const info = WTIME_PROFILES[cur];
    const chips = Object.values(WTIME_PROFILES).map((p) =>
      `<button class="chip ${p.key === cur ? "active" : ""}" data-action="set-wtime-profile" data-id="${e.id}" data-profile="${p.key}">${p.label}</button>`).join("");
    return `<div style="margin-top:18px;border-top:1px solid var(--border-2);padding-top:16px">
      <div class="mi-label">Working-time profile · collective agreement</div>
      <div class="flex items-center gap-8" style="flex-wrap:wrap;margin-top:8px">${chips}</div>
      <div class="text-2 mt-8" style="font-size:12px">${info.agreement} · ${info.weekly} h/week · ${info.reduction}</div>
    </div>`;
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

    const prof = H.wtimeProfileInfo(DB.currentUser.id);
    const weeklyTarget = prof.weekly;
    const dailyTarget = +(weeklyTarget / 5).toFixed(1);
    const weekNum = DB.timesheet.reduce((s, t) => s + (t.hours || 0), 0);
    const weekTotal = weekNum.toFixed(1);
    const done = DB.timesheet.filter((t) => t.hours != null);
    const daysLogged = DB.timesheet.filter((t) => t.in !== "—").length;
    const overtime = weekNum - dailyTarget * done.length;
    const ins = DB.timesheet.filter((t) => t.in !== "—").map((t) => { const [h, m] = t.in.split(":").map(Number); return h * 60 + m; });
    const avgMin = ins.length ? Math.round(ins.reduce((a, b) => a + b, 0) / ins.length) : 0;
    const avgStart = `${String(Math.floor(avgMin / 60)).padStart(2, "0")}:${String(avgMin % 60).padStart(2, "0")}`;
    const remaining = Math.max(0, weeklyTarget - weekNum).toFixed(1);

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
        <div><div class="flex items-center gap-8"><h2>Time Clock</h2>${pill(prof.label + " · " + prof.reduction, prof.tone)}</div><p>Clock in/out &amp; your timesheet · ${H.fmtDate(DB.today)}</p></div>
        <div class="page-actions">
          <button class="btn btn--ghost" data-action="export">${icon("download", 17)} Export timesheet</button>
          <button class="btn btn--primary" data-action="request-leave">${icon("leave", 17)} Request Leave</button>
        </div>
      </div>

      <div class="grid grid-3 section-gap">
        ${Pages.clockWidget()}
        ${statCard({ icon: "clock", tint: "tint-brand", label: "Logged This Week", value: weekTotal + " h", foot: `Target ${weeklyTarget} h/week` })}
      </div>

      <div class="grid grid-4 section-gap">
        ${statCard({ icon: "checkCircle", tint: "tint-green", label: "Days Present", value: daysLogged + " / 5", foot: "This week" })}
        ${statCard({ icon: "time", tint: "tint-blue", label: "Avg Start Time", value: avgStart, foot: "On-time" })}
        ${statCard({ icon: "trendUp", tint: "tint-violet", label: "Overtime", value: (overtime >= 0 ? "+" : "") + overtime.toFixed(1) + " h", foot: `Vs. ${dailyTarget} h/day` })}
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

  /* ---------------- SYSTEM ADMINISTRATION ---------------- */
  adminSection: "org",
  adminEnv: "Production",
  admin() {
    const NAV = [
      ["Organization", [["org", "Organization Structure", "sitemap"], ["jobs", "Job Architecture", "layers"]]],
      ["Time & Leave", [["wtime", "Working Time Rules", "clock"], ["leavecfg", "Leave Configuration", "leave"], ["workflows", "Approval Workflows", "workflow"]]],
      ["Access & Security", [["roles", "User Roles & Permissions", "shield"], ["security", "Security", "lock"], ["audit", "Audit Log", "history"]]],
      ["Platform", [["notifications", "Notifications", "bell"], ["integrations", "Integrations", "plug"], ["data", "Data Management", "database"], ["localization", "Localization", "globe"], ["ai", "AI Configuration", "assistant"]]],
    ];
    const navHtml = NAV.map(([group, items]) =>
      `<span class="admin-nav-label">${group}</span>` +
      items.map(([key, label, ic]) => `<button class="admin-nav-item ${Pages.adminSection === key ? "active" : ""}" data-action="admin-section" data-section="${key}">${icon(ic, 17)}<span>${label}</span></button>`).join("")
    ).join("");
    const env = Pages.adminEnv;
    const envSwitch = `<div class="env-switch" role="group" aria-label="Environment">
      <button class="env-opt env-opt--prod ${env === "Production" ? "active" : ""}" data-action="set-env" data-env="Production"><span class="dot"></span>Production</button>
      <button class="env-opt env-opt--sandbox ${env === "Sandbox" ? "active" : ""}" data-action="set-env" data-env="Sandbox"><span class="dot"></span>Sandbox</button>
    </div>`;
    const sandboxBanner = env === "Sandbox"
      ? `<div class="banner banner--sandbox"><span class="banner__icon tint-amber">${icon("alert", 18)}</span>
          <div style="flex:1"><strong>Sandbox environment</strong> — you're working in a test copy. Configuration changes here won't affect live data or employees.</div>
          <button class="btn btn--ghost btn--sm" data-action="toast-demo">${icon("check", 15)} Publish to Production</button></div>`
      : "";
    return `
      <div class="page-head">
        <div><h2>System Administration</h2><p>Platform configuration &amp; governance</p></div>
        <div class="page-actions" style="align-items:center;gap:10px"><span class="text-2" style="font-size:12.5px;font-weight:600">Environment</span>${envSwitch}</div>
      </div>
      ${sandboxBanner}
      <div class="admin-layout">
        <aside class="admin-nav">${navHtml}</aside>
        <div class="admin-content" id="adminContent">${Pages.adminContent(Pages.adminSection)}</div>
      </div>`;
  },

  adminContent(section) {
    const fn = {
      org: Pages.adminOrg, jobs: Pages.adminJobs, wtime: Pages.adminWorkingTime, leavecfg: Pages.adminLeaveConfig,
      workflows: Pages.adminWorkflows, roles: Pages.adminRoles, security: Pages.adminSecurity, audit: Pages.adminAudit,
      notifications: Pages.adminNotifications, integrations: Pages.adminIntegrations, data: Pages.adminData,
      localization: Pages.adminLocalization, ai: Pages.adminAI,
    }[section];
    return fn ? fn() : "";
  },

  // ---- Organization Structure ----
  adminOrg() {
    const depts = DB.departments.map((d, i) => {
      const cnt = DB.employees.filter((e) => e.dept === d.id).length;
      return `<tr><td><span class="pill pill--gray"><span class="dot" style="background:${d.color}"></span>${d.name}</span></td><td>${d.head}</td><td class="muted">CC-${100 + i * 10}</td><td><strong>${cnt}</strong></td></tr>`;
    }).join("");
    const entities = [
      ["TaruHR Technologies Oy", "Finland 🇫🇮", "FI-28471920", "EUR", 20],
      ["TaruHR Inc.", "United States 🇺🇸", "US-DE-90114", "USD", 2],
    ].map((r) => `<tr><td><strong>${r[0]}</strong></td><td class="muted">${r[1]}</td><td class="muted">${r[2]}</td><td class="muted">${r[3]}</td><td><strong>${r[4]}</strong></td></tr>`).join("");
    const locs = [
      ["Helsinki (HQ)", "Finland", "Europe/Helsinki", 8], ["London", "United Kingdom", "Europe/London", 3],
      ["Berlin", "Germany", "Europe/Berlin", 2], ["New York", "United States", "America/New_York", 3],
      ["Amsterdam", "Netherlands", "Europe/Amsterdam", 2], ["Remote / other", "—", "Various", 4],
    ].map((r) => `<tr><td><strong>${r[0]}</strong></td><td class="muted">${r[1]}</td><td class="muted">${r[2]}</td><td>${r[3]}</td></tr>`).join("");
    return `
      <div class="grid grid-4 section-gap">
        ${statCard({ icon: "building", tint: "tint-brand", label: "Legal Entities", value: 2, foot: "FI · US" })}
        ${statCard({ icon: "sitemap", tint: "tint-violet", label: "Departments", value: DB.departments.length, foot: "Active" })}
        ${statCard({ icon: "pin", tint: "tint-teal", label: "Locations", value: 6, foot: "5 countries" })}
        ${statCard({ icon: "users", tint: "tint-green", label: "Headcount", value: DB.employees.length, foot: "All entities" })}
      </div>
      <div class="card"><div class="card__head"><div class="card__title">Legal Entities</div><button class="btn btn--ghost btn--sm" data-action="toast-demo">${icon("plus", 15)} Add entity</button></div>
        <div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>Entity</th><th>Country</th><th>Registration</th><th>Currency</th><th>Employees</th></tr></thead><tbody>${entities}</tbody></table></div></div></div>
      <div class="grid grid-2">
        <div class="card"><div class="card__head"><div class="card__title">Departments &amp; Cost Centres</div></div><div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>Department</th><th>Lead</th><th>Cost centre</th><th>People</th></tr></thead><tbody>${depts}</tbody></table></div></div></div>
        <div class="card"><div class="card__head"><div class="card__title">Locations</div></div><div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>Office</th><th>Country</th><th>Timezone</th><th>People</th></tr></thead><tbody>${locs}</tbody></table></div></div></div>
      </div>`;
  },

  // ---- Job Architecture (ties to compensation bands) ----
  adminJobs() {
    const grades = [
      ["P1", "Associate", "Individual contributor", "€2,400 – €3,300"],
      ["P2", "Professional", "Individual contributor", "€3,000 – €4,000"],
      ["P3", "Senior Professional", "Individual contributor", "€3,200 – €4,400"],
      ["M3", "Manager", "Management", "€4,200 – €5,800"],
      ["M4", "Leadership", "Management", "€5,600 – €8,000"],
    ].map((r) => `<tr><td><span class="pill pill--violet">${r[0]}</span></td><td><strong>${r[1]}</strong></td><td class="muted">${r[2]}</td><td class="muted">${r[3]}</td></tr>`).join("");
    const families = ["Engineering", "Product", "Design", "Sales", "Marketing", "Customer Success", "Finance", "People & Culture"]
      .map((f) => `<span class="pill pill--gray">${f}</span>`).join(" ");
    const gradeFor = { 1: "P1", 2: "P2", 3: "P3", 4: "M3", 5: "M4" };
    const catalog = DB.employees.slice(0, 8).map((e) => `<tr><td><strong>${e.title}</strong></td><td class="muted">${H.deptName(e.dept)}</td><td><span class="pill pill--violet">${gradeFor[compLevel(e.title)]}</span></td></tr>`).join("");
    return `
      <div class="card"><div class="card__head"><div><div class="card__title">Job Levels &amp; Grades</div><div class="card__sub">Levelling framework — feeds compensation bands</div></div>${pill("Synced with Compensation", "green")}</div>
        <div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>Grade</th><th>Level</th><th>Track</th><th>Monthly band (FTE)</th></tr></thead><tbody>${grades}</tbody></table></div></div></div>
      <div class="grid grid-2">
        <div class="card"><div class="card__head"><div class="card__title">Job Families</div></div><div class="card__body"><div style="display:flex;flex-wrap:wrap;gap:8px">${families}</div><p class="text-2 mt-16" style="font-size:12.5px">8 families · used for career paths, pay benchmarking and org reporting.</p></div></div>
        <div class="card"><div class="card__head"><div class="card__title">Job Catalog</div><span class="text-2" style="font-size:12.5px">sample</span></div><div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>Job title</th><th>Family</th><th>Grade</th></tr></thead><tbody>${catalog}</tbody></table></div></div></div>
      </div>`;
  },

  // ---- Working Time Rules (per collective agreement / employee population) ----
  wtimeProfile: "salaried",
  adminWorkingTime() {
    const profiles = [["workers", "Workers", "40 h"], ["salaried", "Salaried", "37.5 h"], ["senior", "Senior salaried", "Flexible"]];
    const counts = H.wtimeCounts();
    const chips = profiles.map(([k, l, s]) => `<button class="chip ${Pages.wtimeProfile === k ? "active" : ""}" data-action="wtime-profile" data-profile="${k}">${l} · ${s}/wk <span style="opacity:.6;font-weight:700">${counts[k]}</span></button>`).join("");
    const cp = WTIME_PROFILES[Pages.wtimeProfile];
    const mapped = DB.employees.filter((e) => H.wtimeProfileFor(e.id) === Pages.wtimeProfile);
    const examples = mapped.slice(0, 6).map((em) => `<span class="pill pill--gray">${H.fullName(em)}</span>`).join(" ");
    const holidays = [
      ["1 Jan", "New Year's Day"], ["6 Jan", "Epiphany"], ["3 Apr", "Good Friday"], ["6 Apr", "Easter Monday"],
      ["1 May", "May Day (Vappu)"], ["14 May", "Ascension Day"], ["19 Jun", "Midsummer Eve"], ["6 Dec", "Independence Day"],
      ["24–26 Dec", "Christmas"],
    ].map((r) => `<div class="list-row"><span class="dot-icon tint-teal">${icon("calendar", 16)}</span><div><div class="lr-title">${r[1]}</div></div><span class="lr-time">${r[0]}</span></div>`).join("");
    const body = ({ workers: Pages.wtimeWorkers, salaried: Pages.wtimeSalaried, senior: Pages.wtimeSenior }[Pages.wtimeProfile])();
    return `
      <div class="card section-gap"><div class="card__body" style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
        <div><div class="card__title" style="font-size:14px">Working-time profile</div><div class="card__sub">Rules apply per collective agreement (TES) &amp; employee population</div></div>
        <div class="filterbar" style="margin:0;margin-left:auto">${chips}</div>
      </div></div>
      <div class="card section-gap"><div class="card__head"><div><div class="card__title">Employee mapping</div><div class="card__sub">Each employee is assigned a profile on their record; counts update the rules that apply to them</div></div></div>
        <div class="card__body">
          <div class="text-2" style="font-size:12.5px">On <strong>${cp.label}</strong> (${cp.agreement}) — <strong>${mapped.length}</strong> employee${mapped.length === 1 ? "" : "s"}:</div>
          <div class="flex items-center gap-8 mt-8" style="flex-wrap:wrap">${examples || '<span class="muted">No employees on this agreement (a software company has no production staff) — held for future use</span>'}${mapped.length > 6 ? ` <span class="muted" style="font-size:12px">+${mapped.length - 6} more</span>` : ""}</div>
        </div></div>
      ${body}
      <div class="card"><div class="card__head"><div class="card__title">Public Holidays 2026</div><span class="text-2" style="font-size:12.5px">Finland · weekday holidays shorten weekly hours</span></div><div class="card__body"><div class="list">${holidays}</div></div></div>`;
  },

  wtimeWorkers() {
    const otCell = (v, note) => `${pill(v, v === "+100%" ? "red" : "amber")}${note ? ` <span class="muted" style="font-size:11px">${note}</span>` : ""}`;
    const forms = [
      ["Day work", "8 h", "40 h", "Averaging leave", "—"],
      ["Two-shift work", "8 h", "40 h", "Averaging leave", "Evening bonus"],
      ["Three-shift, continuous", "8 h", "≈ 34.9 h avg", "Continuous cycle", "Evening + night"],
      ["Part-time", "≤ 8 h", "Pro-rata", "By contract", "As applicable"],
    ].map((r) => `<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td>${r[2]}</td><td class="muted">${r[3]}</td><td class="muted">${r[4]}</td></tr>`).join("");
    const ot = [
      ["Daily overtime", "&gt; 8 h / day", ["+50%", "first 2 h"], ["+100%", "thereafter"]],
      ["Weekly overtime", "&gt; 40 h / week", ["+50%", "first 8 h"], ["+100%", "thereafter"]],
      ["Eve of Sunday / public holiday", "Overtime hours", ["+100%", ""], ["+100%", ""]],
    ].map((r) => `<tr><td><strong>${r[0]}</strong></td><td class="muted">${r[1]}</td><td>${otCell(r[2][0], r[2][1])}</td><td>${otCell(r[3][0], r[3][1])}</td></tr>`).join("");
    return `
      <div class="banner"><span class="banner__icon tint-brand">${icon("doc", 18)}</span><div><strong>Technology Industries — Workers (TES 2025–2027).</strong> Applies to production, assembly &amp; maintenance staff. Regular time <strong>8 h/day · 40 h/week</strong>, averaged via working-time reduction (pekkas) leave.</div></div>
      <div class="card"><div class="card__head"><div><div class="card__title">Regular Working Time</div><div class="card__sub">By working-time form · § 19</div></div>${pill("40 h / week", "gray")}</div>
        <div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>Working-time form</th><th>Daily</th><th>Weekly (max)</th><th>Averaging</th><th>Shift bonus</th></tr></thead><tbody>${forms}</tbody></table></div></div></div>
      <div class="grid grid-2">
        <div class="card"><div class="card__head"><div><div class="card__title">Overtime</div><div class="card__sub">§ 20 · on top of base / incentive pay</div></div></div>
          <div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>Type</th><th>Threshold</th><th>First tier</th><th>After</th></tr></thead><tbody>${ot}</tbody></table></div></div></div>
        <div class="card"><div class="card__head"><div class="card__title">Sunday, Holidays &amp; Rest</div></div><div class="card__body" style="padding-top:4px">
          ${setRow("Sunday &amp; public holiday work", "§ 20.8 · on top of pay + overtime", pill("+100%", "red"))}
          ${setRow("Easter Sat · Midsummer Eve · Christmas Eve", "§ 20.9", pill("+100%", "red"))}
          ${setRow("Daily rest", "Statutory minimum between shifts", '<span class="pill pill--gray">11 hours</span>')}
          ${setRow("Weekly rest", "§ 20.10 · uninterrupted", '<span class="pill pill--gray">35 hours</span>')}
          ${setRow("Lost weekly rest", "Monetary compensation", pill("+100%", "red"))}
        </div></div>
      </div>
      <div class="grid grid-2">
        <div class="card"><div class="card__head"><div class="card__title">Shift &amp; Standby Bonuses</div></div><div class="card__body" style="padding-top:4px">
          ${setRow("Evening shift bonus", "Vuorolisä", '<span class="pill pill--gray">per TES rate table</span>')}
          ${setRow("Night shift bonus", "Vuorolisä", '<span class="pill pill--gray">per TES rate table</span>')}
          ${setRow("Standby — on call", "§ 20.12 · restricted", pill("+50%", "amber"))}
          ${setRow("Standby — reachable", "§ 20.12", pill("+35%", "amber"))}
        </div></div>
        <div class="card"><div class="card__head"><div class="card__title">Averaging, Bank &amp; Limits</div></div><div class="card__body" style="padding-top:4px">
          ${setRow("Working-time averaging", "Balance 40 h/week over the period", '<span class="pill pill--gray">up to 12 months</span>')}
          ${setRow("Working time bank", "Save / borrow hours (§ 19.8)", sw(true))}
          ${setRow("Maximum working time", "Avg incl. overtime over 4 months", '<span class="pill pill--gray">48 h / week</span>')}
          ${setRow("Auto clock-out", "Force clock-out if forgotten", sw(true))}
        </div></div>
      </div>`;
  },

  wtimeSalaried() {
    const otCell = (v, note) => `${pill(v, v === "+100%" ? "red" : "amber")}${note ? ` <span class="muted" style="font-size:11px">${note}</span>` : ""}`;
    const avg = [["2025", "36.0 h"], ["2026", "36.1 h"], ["2027", "36.3 h"]].map((r) => `<tr><td><strong>${r[0]}</strong></td><td>${r[1]} / week average</td><td class="muted">via reduction leave &amp; holidays</td></tr>`).join("");
    const ot = [
      ["Daily overtime", "&gt; 7.5 h / day", ["+50%", "first 2 h"], ["+100%", "thereafter"]],
      ["Weekly overtime", "&gt; 37.5 h / week", ["+50%", "first 8 h"], ["+100%", "thereafter"]],
    ].map((r) => `<tr><td><strong>${r[0]}</strong></td><td class="muted">${r[1]}</td><td>${otCell(r[2][0], r[2][1])}</td><td>${otCell(r[3][0], r[3][1])}</td></tr>`).join("");
    return `
      <div class="banner"><span class="banner__icon tint-blue">${icon("doc", 18)}</span><div><strong>Technology Industries — Salaried employees / toimihenkilöt (TES 2025–2027).</strong> Applies to office, technical &amp; professional staff. Regular time <strong>7.5 h/day · 37.5 h/week</strong>, mostly daytime with flexitime.</div></div>
      <div class="grid grid-2">
        <div class="card"><div class="card__head"><div><div class="card__title">Regular Working Time</div><div class="card__sub">§ 6 · nominal &amp; averaged</div></div>${pill("37.5 h / week", "gray")}</div>
          <div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>Year</th><th>Average weekly time</th><th>Basis</th></tr></thead><tbody>${avg}</tbody></table></div>
          <div style="padding:14px 20px" class="text-2">Nominal 7.5 h/day. Actual annual average is lower — reduced by midweek holidays and working-time reduction leave.</div></div></div>
        <div class="card"><div class="card__head"><div class="card__title">Flexitime (liukuva työaika)</div></div><div class="card__body" style="padding-top:4px">
          ${setRow("Flexitime enabled", "Vary start / end within limits", sw(true))}
          ${setRow("Daily flex range", "Around fixed hours", '<span class="pill pill--gray">± 3 h</span>')}
          ${setRow("Core hours", "Must be present", '<span class="pill pill--gray">09:30–15:00</span>')}
          ${setRow("Reference period", "Flexitime settlement", '<span class="pill pill--gray">6 months</span>')}
          ${setRow("Max balance → bank", "Excess transfers to working time bank", '<span class="pill pill--gray">+40 h</span>')}
        </div></div>
      </div>
      <div class="grid grid-2">
        <div class="card"><div class="card__head"><div class="card__title">Overtime</div></div>
          <div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>Type</th><th>Threshold</th><th>First tier</th><th>After</th></tr></thead><tbody>${ot}</tbody></table></div></div></div>
        <div class="card"><div class="card__head"><div class="card__title">Sunday &amp; Rest</div></div><div class="card__body" style="padding-top:4px">
          ${setRow("Sunday &amp; public holiday work", "On top of pay + overtime", pill("+100%", "red"))}
          ${setRow("Daily rest", "Statutory minimum", '<span class="pill pill--gray">11 hours</span>')}
          ${setRow("Weekly rest", "Uninterrupted", '<span class="pill pill--gray">35 hours</span>')}
          ${setRow("Working time bank", "Save / borrow hours", sw(true))}
        </div></div>
      </div>`;
  },

  wtimeSenior() {
    return `
      <div class="banner"><span class="banner__icon tint-violet">${icon("doc", 18)}</span><div><strong>Technology Industries — Senior salaried employees / ylemmät toimihenkilöt (TES 2025–2027).</strong> Applies to experts, specialists &amp; managers. Working time is largely <strong>autonomous</strong>.</div></div>
      <div class="grid grid-2">
        <div class="card"><div class="card__head"><div><div class="card__title">Regular Working Time</div><div class="card__sub">§ 3 · agreed individually</div></div>${pill("≤ 40 h / week", "gray")}</div><div class="card__body" style="padding-top:4px">
          ${setRow("Regular working time", "Set in the employment contract", '<span class="pill pill--gray">≤ 8 h/day · 40 h/week</span>')}
          ${setRow("Statutory basis", "Within the Working Time Act", '<span class="pill pill--gray">Working Time Act</span>')}
          ${setRow("Averaging period", "Hours average out over", '<span class="pill pill--gray">up to 12 months</span>')}
          ${setRow("Maximum working time", "Reference period", '<span class="pill pill--gray">12 months</span>')}
        </div></div>
        <div class="card"><div class="card__head"><div class="card__title">Working-time Autonomy</div></div><div class="card__body" style="padding-top:4px">
          ${setRow("Self-scheduling", "Employee determines working hours", sw(true))}
          ${setRow("Flexible working hours", "Local derogation from Working Time Act", sw(true))}
          ${setRow("Remote / location-independent", "", sw(true))}
          ${setRow("Time tracking", "Autonomy over hours", '<span class="pill pill--gray">Light-touch</span>')}
        </div></div>
      </div>
      <div class="grid grid-2">
        <div class="card"><div class="card__head"><div><div class="card__title">Overtime &amp; Additional Work</div><div class="card__sub">§ 3 · not automatic percentages</div></div></div><div class="card__body" style="padding-top:4px">
          ${setRow("Overtime compensation", "Governed by Working Time Act", pill("By separate agreement", "violet"))}
          ${setRow("Common method", "Chosen per contract / locally", '<span class="pill pill--gray">Monthly supplement or time off in lieu</span>')}
          ${setRow("Additional regular hours", "Employer-assigned, production reasons", '<span class="pill pill--gray">Capped per year</span>')}
        </div></div>
        <div class="card"><div class="card__head"><div class="card__title">Rest &amp; Bank</div></div><div class="card__body" style="padding-top:4px">
          ${setRow("Daily rest", "Statutory minimum", '<span class="pill pill--gray">11 hours</span>')}
          ${setRow("Weekly rest", "Uninterrupted", '<span class="pill pill--gray">35 hours</span>')}
          ${setRow("Working time bank", "Save / borrow hours &amp; TOIL", sw(true))}
        </div></div>
      </div>`;
  },

  // ---- Leave Configuration ----
  adminLeaveConfig() {
    const types = [
      ["Annual Leave", "30 days", "2.5 d / month", "5 days", "40 days", "Required", "Paid"],
      ["Sick Leave", "Per TES", "As incurred", "—", "—", "Notify", "Paid"],
      ["Personal Leave", "Per TES", "As incurred", "—", "—", "Required", "Paid"],
      ["Parental Leave", "Statutory", "—", "—", "—", "Required", "Statutory"],
      ["Unpaid Leave", "On request", "—", "—", "—", "Required", "Unpaid"],
    ].map((r) => `<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td class="muted">${r[2]}</td><td class="muted">${r[3]}</td><td class="muted">${r[4]}</td><td>${r[5] === "Required" ? pill("Required", "amber") : pill(r[5], "gray")}</td><td>${r[6] === "Unpaid" ? pill("Unpaid", "gray") : pill(r[6], "green")}</td></tr>`).join("");
    return `
      <div class="card"><div class="card__head"><div><div class="card__title">Leave Types</div><div class="card__sub">Accrual, carryover &amp; approval rules</div></div><button class="btn btn--ghost btn--sm" data-action="toast-demo">${icon("plus", 15)} Add type</button></div>
        <div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>Leave type</th><th>Allowance</th><th>Accrual</th><th>Carryover</th><th>Max balance</th><th>Approval</th><th>Paid</th></tr></thead><tbody>${types}</tbody></table></div></div></div>
      <div class="card"><div class="card__head"><div class="card__title">Accrual &amp; Rules</div></div><div class="card__body" style="padding-top:4px">
        ${setRow("Accrual basis", "How annual leave is earned", '<span class="pill pill--gray">Monthly (2.5 d/mo)</span>')}
        ${setRow("Pro-rate for part-time", "Scale allowance by FTE %", sw(true))}
        ${setRow("Allow negative balance", "Let employees borrow ahead", sw(false))}
        ${setRow("Carryover expiry", "Unused carried days expire", '<span class="pill pill--gray">31 March</span>')}
        ${setRow("Public holidays deducted", "Count holidays as leave", sw(false))}
      </div></div>`;
  },

  // ---- Approval Workflows ----
  adminWorkflows() {
    const flow = (steps) => `<div class="flow">` + steps.map((s, i) => `${i > 0 ? `<span class="flow-arrow">${icon("chevronRight", 16)}</span>` : ""}<span class="flow-step"><span class="fs-num">${i + 1}</span>${s}</span>`).join("") + `</div>`;
    const wf = [
      ["Leave request", ["Employee", "Line manager", "HR review"], "HR step only when request > 10 days"],
      ["Timesheet", ["Employee", "Line manager"], "Auto-approved if within schedule ±15 min"],
      ["Expense claim", ["Employee", "Line manager", "Finance"], "Finance step only when amount > €500"],
      ["Equipment request", ["Employee", "Line manager", "IT"], "Assets provisioned after IT approval"],
      ["Salary change", ["HR", "Head of department", "Finance"], "Off-cycle changes require Finance sign-off"],
    ].map((w) => `<div class="card"><div class="card__body">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:12px">
          <div class="card__title">${w[0]}</div>${pill("Active", "green")}</div>
        ${flow(w[1])}
        <div class="flow-cond mt-16">${icon("info", 13)} ${w[2]}</div>
      </div></div>`).join("");
    return `
      <div class="banner"><span class="banner__icon tint-brand">${icon("workflow", 18)}</span><div>Approval chains route each request type through the right approvers. Steps can be conditional on amount, duration or department.</div></div>
      <div class="grid" style="gap:16px">${wf}</div>
      <div class="card" style="margin-top:16px"><div class="card__head"><div class="card__title">Global Rules</div></div><div class="card__body" style="padding-top:4px">
        ${setRow("Escalation", "Auto-escalate if pending > 48h", sw(true))}
        ${setRow("Delegation", "Approvers can delegate while away", sw(true))}
        ${setRow("Approver can't approve own request", "Segregation of duties", sw(true))}
      </div></div>`;
  },

  // ---- User Roles & Permissions (RBAC matrix) ----
  adminRoles() {
    const roles = ["Employee", "Manager", "HR", "Payroll", "Admin"];
    const matrix = [
      ["Dashboard", ["View", "View", "View", "View", "Full"]],
      ["Employees", ["View", "View", "Full", "View", "Full"]],
      ["Time & Attendance", ["Edit", "Edit", "Full", "View", "Full"]],
      ["Leave", ["Edit", "Edit", "Full", "View", "Full"]],
      ["Compensation", ["None", "View", "Full", "Edit", "Full"]],
      ["Approvals", ["None", "Edit", "Full", "Edit", "Full"]],
      ["Reports", ["None", "View", "Full", "View", "Full"]],
      ["System Admin", ["None", "None", "Edit", "None", "Full"]],
    ];
    const head = `<tr><th>Module</th>${roles.map((r) => `<th style="text-align:center">${r}</th>`).join("")}</tr>`;
    const body = matrix.map(([m, cells]) => `<tr><td><strong>${m}</strong></td>${cells.map((c) => `<td style="text-align:center">${accessPill(c)}</td>`).join("")}</tr>`).join("");
    const counts = { Employee: DB.employees.length, Manager: 8, HR: 3, Payroll: 2, Admin: 1 };
    const roleCards = roles.map((r) => `<div class="set-row"><div><div class="sr-title">${roleBadge(r)}</div></div><div class="sr-control"><span class="text-2" style="font-size:12.5px">${counts[r]} member${counts[r] === 1 ? "" : "s"}</span></div></div>`).join("");
    return `
      <div class="card"><div class="card__head"><div><div class="card__title">Permission Matrix</div><div class="card__sub">Access level per module, per role (RBAC)</div></div>
        <div class="matrix-legend">${accessPill("View")} view · ${accessPill("Edit")} edit · ${accessPill("Full")} full · — none</div></div>
        <div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead>${head}</thead><tbody>${body}</tbody></table></div></div></div>
      <div class="card"><div class="card__head"><div class="card__title">Roles</div><button class="btn btn--ghost btn--sm" data-action="toast-demo">${icon("plus", 15)} New role</button></div><div class="card__body" style="padding-top:4px">${roleCards}</div></div>`;
  },

  // ---- Security ----
  adminSecurity() {
    const logins = [
      ["Taru Hervoe", "Today 08:41", "Helsinki, FI", "SSO · Azure AD", "Success"],
      ["Sarah Chen", "Today 09:03", "Helsinki, FI", "SSO · Azure AD", "Success"],
      ["Unknown", "Today 06:30", "Unknown (203.0.113.7)", "Password", "Blocked"],
      ["Marcus Johnson", "Yesterday 08:15", "Berlin, DE", "SSO · Azure AD", "Success"],
    ].map((r) => `<tr><td><strong>${r[0]}</strong></td><td class="muted">${r[1]}</td><td class="muted">${r[2]}</td><td class="muted">${r[3]}</td><td>${r[4] === "Success" ? pill("Success", "green") : pill("Blocked", "red")}</td></tr>`).join("");
    return `
      <div class="grid grid-2">
        <div class="card"><div class="card__head"><div class="card__title">Authentication</div></div><div class="card__body" style="padding-top:4px">
          ${setRow("Single sign-on (SSO)", "SAML 2.0 · Microsoft Azure AD", sw(true))}
          ${setRow("Enforce MFA", "Multi-factor for all users", sw(true))}
          ${setRow("IP allow-list", "Restrict access by network", sw(false))}
          ${setRow("Just-in-time provisioning", "Create users on first SSO login", sw(true))}
        </div></div>
        <div class="card"><div class="card__head"><div class="card__title">Password Policy</div></div><div class="card__body" style="padding-top:4px">
          ${setRow("Minimum length", "", '<span class="pill pill--gray">12 characters</span>')}
          ${setRow("Complexity", "Upper, lower, number, symbol", sw(true))}
          ${setRow("Expiry", "", '<span class="pill pill--gray">90 days</span>')}
          ${setRow("Session timeout", "Idle logout", '<span class="pill pill--gray">30 minutes</span>')}
        </div></div>
      </div>
      <div class="card"><div class="card__head"><div><div class="card__title">Recent Sign-in Activity</div><div class="card__sub">Encryption: AES-256 at rest · TLS 1.3 in transit</div></div></div>
        <div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>User</th><th>When</th><th>Location</th><th>Method</th><th>Status</th></tr></thead><tbody>${logins}</tbody></table></div></div></div>`;
  },

  // ---- Audit Log ----
  adminAudit() {
    const tone = { config: "amber", data: "blue", access: "violet", approval: "green" };
    const log = [
      ["08 Jul 09:14", "Taru Hervoe", "config", "Updated leave policy — annual 25 → 30 days", "10.0.4.21"],
      ["08 Jul 08:57", "Taru Hervoe", "data", "Edited salary — Marcus Johnson (EMP-003)", "10.0.4.21"],
      ["08 Jul 08:41", "Taru Hervoe", "access", "SSO sign-in (Azure AD)", "10.0.4.21"],
      ["07 Jul 17:22", "Sarah Chen", "approval", "Approved leave LV-1043 — Daniel Novak", "10.2.1.8"],
      ["07 Jul 15:03", "Isabella Rossi", "data", "Added employee — Grace Okonkwo (EMP-013)", "10.0.4.35"],
      ["07 Jul 11:48", "Taru Hervoe", "config", "Changed expense workflow — threshold €500", "10.0.4.21"],
      ["06 Jul 16:10", "Omar Haddad", "data", "Exported report — Headcount (CSV)", "10.0.4.40"],
      ["06 Jul 06:30", "Unknown", "access", "Blocked sign-in attempt", "203.0.113.7"],
      ["05 Jul 14:05", "Taru Hervoe", "config", "Updated role permissions — Payroll", "10.0.4.21"],
    ].map((r) => `<tr><td class="muted nowrap">${r[0]}</td><td><strong>${r[1]}</strong></td><td>${pill(r[2], tone[r[2]])}</td><td>${r[3]}</td><td class="muted">${r[4]}</td></tr>`).join("");
    return `
      <div class="card"><div class="card__head"><div><div class="card__title">Audit Log</div><div class="card__sub">Immutable record of data &amp; configuration changes</div></div>
        <button class="btn btn--ghost btn--sm" data-action="export">${icon("download", 15)} Export</button></div>
        <div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>Timestamp</th><th>User</th><th>Type</th><th>Action</th><th>IP</th></tr></thead><tbody>${log}</tbody></table></div></div></div>`;
  },

  // ---- Notifications ----
  adminNotifications() {
    const events = [
      ["Leave requested", "Manager", 1, 1, 1], ["Leave approved / rejected", "Employee", 1, 1, 0],
      ["Timesheet reminder", "Employee", 1, 1, 0], ["Approval pending > 48h", "Approver", 1, 1, 1],
      ["New hire onboarding", "HR + Manager", 1, 1, 1], ["Contract ending in 30 days", "HR", 1, 0, 0],
      ["Birthday & work anniversary", "Team", 0, 1, 1], ["Payroll cut-off reminder", "HR + Finance", 1, 0, 0],
    ].map((r) => `<tr><td><strong>${r[0]}</strong></td><td class="muted">${r[1]}</td><td>${sw(r[2])}</td><td>${sw(r[3])}</td><td>${sw(r[4])}</td></tr>`).join("");
    return `
      <div class="card"><div class="card__head"><div><div class="card__title">Notification Events</div><div class="card__sub">Choose channels per event</div></div></div>
        <div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>Event</th><th>Recipients</th><th style="text-align:left">Email</th><th>In-app</th><th>Slack</th></tr></thead><tbody>${events}</tbody></table></div></div></div>
      <div class="card"><div class="card__head"><div class="card__title">Digest &amp; Delivery</div></div><div class="card__body" style="padding-top:4px">
        ${setRow("Weekly people-metrics digest", "Sent to HR every Monday 08:00", sw(true))}
        ${setRow("Quiet hours", "No notifications 20:00–07:00", sw(true))}
        ${setRow("Default channel", "", '<span class="pill pill--gray">Email + In-app</span>')}
      </div></div>`;
  },

  // ---- Integrations ----
  adminIntegrations() {
    const intg = [
      ["Payroll (Emace)", "Payroll sync", "Connected", "#0ea5e9", "P", "Nightly · last 02:00"],
      ["Microsoft Azure AD", "SSO / SCIM", "Connected", "#2563eb", "AD", "Real-time"],
      ["Slack", "Notifications", "Connected", "#611f69", "S", "Real-time"],
      ["Google Calendar", "Leave & OOO", "Connected", "#16a34a", "G", "2-way sync"],
      ["Power BI", "Analytics export", "Connected", "#f59e0b", "BI", "Daily 06:00"],
      ["Greenhouse", "Recruitment (ATS)", "Available", "#14b8a6", "GH", "—"],
      ["LMS (Learning)", "Training records", "Available", "#8b5cf6", "L", "—"],
    ].map((r) => `<div class="intg">
        <div class="intg__logo" style="background:${r[3]}">${r[4]}</div>
        <div style="flex:1;min-width:0"><div class="intg__name">${r[0]}</div><div class="intg__meta">${r[1]}${r[5] !== "—" ? " · " + r[5] : ""}</div></div>
        ${r[2] === "Connected" ? pill("Connected", "green") : pill("Available", "gray")}
        <button class="btn btn--ghost btn--sm" data-action="toast-demo">${r[2] === "Connected" ? "Manage" : "Connect"}</button>
      </div>`).join("");
    return `
      <div class="grid grid-2" style="gap:14px">${intg}</div>
      <div class="card" style="margin-top:16px"><div class="card__head"><div class="card__title">API &amp; Webhooks</div><span class="pill pill--green"><span class="dot"></span>Enabled</span></div><div class="card__body" style="padding-top:4px">
        ${setRow("API key", "For custom integrations", '<code style="font-size:12px;background:var(--surface-2);padding:4px 8px;border-radius:6px;border:1px solid var(--border)">thr_live_••••••••3f9a</code>')}
        ${setRow("Webhook endpoint", "Events pushed on change", '<span class="muted" style="font-size:12.5px">https://hooks.taruhr.com/v1/events</span>')}
        ${setRow("Rate limit", "", '<span class="pill pill--gray">600 req / min</span>')}
      </div></div>`;
  },

  // ---- Data Management ----
  adminData() {
    const retention = [
      ["Employee records", "10 years after exit", "Statutory (FI)"], ["Payroll & tax", "6 years", "Bookkeeping Act"],
      ["Job applications", "12 months", "Consent / GDPR"], ["Timesheets", "6 years", "Working Hours Act"],
      ["Audit logs", "2 years", "Internal policy"], ["Analytics (aggregated)", "Indefinite", "Anonymised"],
    ].map((r) => `<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td class="muted">${r[2]}</td></tr>`).join("");
    const fields = [
      ["Emergency contact", "Text", "All", "Yes"], ["T-shirt size", "Select", "All", "No"],
      ["Bike benefit plan", "Select", "All", "No"], ["Security clearance", "Select", "Engineering", "No"],
    ].map((r) => `<tr><td><strong>${r[0]}</strong></td><td class="muted">${r[1]}</td><td class="muted">${r[2]}</td><td>${r[3] === "Yes" ? pill("Required", "amber") : '<span class="muted">Optional</span>'}</td></tr>`).join("");
    return `
      <div class="card"><div class="card__head"><div class="card__title">Import &amp; Export</div></div><div class="card__body">
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button class="btn btn--ghost" data-action="toast-demo">${icon("download", 16)} Import employees (CSV)</button>
          <button class="btn btn--ghost" data-action="export">${icon("download", 16)} Export all data</button>
          <button class="btn btn--ghost" data-action="toast-demo">${icon("doc", 16)} Download template</button>
        </div>
        <p class="text-2 mt-16" style="font-size:12.5px">Bulk operations are validated and previewed before commit. Exports are logged in the audit trail.</p>
      </div></div>
      <div class="grid grid-2">
        <div class="card"><div class="card__head"><div><div class="card__title">Data Retention</div><div class="card__sub">GDPR-aligned policies</div></div></div><div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>Data type</th><th>Retention</th><th>Basis</th></tr></thead><tbody>${retention}</tbody></table></div></div></div>
        <div class="card"><div class="card__head"><div class="card__title">Custom Fields</div><button class="btn btn--ghost btn--sm" data-action="toast-demo">${icon("plus", 15)} Add field</button></div><div class="card__body card__body--flush"><div class="table-wrap"><table class="tbl"><thead><tr><th>Field</th><th>Type</th><th>Applies to</th><th>Required</th></tr></thead><tbody>${fields}</tbody></table></div></div></div>
      </div>`;
  },

  // ---- Localization ----
  adminLocalization() {
    const langs = [["English", "Default"], ["Suomi (Finnish)", ""], ["Svenska (Swedish)", ""], ["Deutsch (German)", ""]]
      .map((l) => `<span class="pill ${l[1] ? "pill--brand" : "pill--gray"}">${l[0]}${l[1] ? " · " + l[1] : ""}</span>`).join(" ");
    const opt = (v) => `<span class="pill pill--gray">${v}</span>`;
    return `
      <div class="card"><div class="card__head"><div class="card__title">Regional Settings</div></div><div class="card__body" style="padding-top:4px">
        ${setRow("Default language", "Fallback for new users", opt("English"))}
        ${setRow("Date format", "", opt("DD.MM.YYYY"))}
        ${setRow("Time format", "", opt("24-hour"))}
        ${setRow("Number format", "", opt("1 234,56"))}
        ${setRow("Default currency", "", opt("EUR (€)"))}
        ${setRow("First day of week", "", opt("Monday"))}
        ${setRow("Default timezone", "", opt("Europe/Helsinki (EET)"))}
      </div></div>
      <div class="card"><div class="card__head"><div class="card__title">Supported Languages</div><button class="btn btn--ghost btn--sm" data-action="toast-demo">${icon("plus", 15)} Add language</button></div><div class="card__body"><div style="display:flex;flex-wrap:wrap;gap:8px">${langs}</div><p class="text-2 mt-16" style="font-size:12.5px">Employees choose their own language; payslips and policies localise to entity country.</p></div></div>`;
  },

  // ---- AI Configuration ----
  adminAI() {
    return `
      <div class="banner"><span class="banner__icon tint-violet">${icon("assistant", 18)}</span><div>AI features run on your permission-scoped HR data. Governance controls keep decisions human-owned and data private.</div></div>
      <div class="grid grid-2">
        <div class="card"><div class="card__head"><div class="card__title">AI Features</div></div><div class="card__body" style="padding-top:4px">
          ${setRow("HR Assistant", "Natural-language Q&A over HR data", sw(true))}
          ${setRow("Smart suggestions", "Surface relevant actions", sw(true))}
          ${setRow("Anomaly detection", "Flag attendance & attrition risks", sw(true))}
          ${setRow("Draft assistance", "Help write HR comms & policies", sw(true))}
          ${setRow("Auto-summarise reviews", "Summarise performance feedback", sw(false))}
        </div></div>
        <div class="card"><div class="card__head"><div class="card__title">Model &amp; Data</div></div><div class="card__body" style="padding-top:4px">
          ${setRow("Model", "Language model provider", '<span class="pill pill--violet">Claude (Anthropic)</span>')}
          ${setRow("Data access", "Scope of data the AI can read", '<span class="pill pill--gray">Role-scoped</span>')}
          ${setRow("PII redaction", "Mask identifiers in prompts", sw(true))}
          ${setRow("EU data residency", "Process within the EU", sw(true))}
          ${setRow("Response logging", "For audit & quality", sw(true))}
        </div></div>
      </div>
      <div class="card" style="margin-top:16px"><div class="card__head"><div class="card__title">Governance</div></div><div class="card__body" style="padding-top:4px">
        ${setRow("Human-in-the-loop", "People decisions require human approval", sw(true))}
        ${setRow("Employee opt-out", "Let employees exclude their data", sw(true))}
        ${setRow("Training on your data", "Your data is never used to train models", sw(false))}
      </div></div>`;
  },
};
