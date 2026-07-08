/* ============================================================
   TaruHR — Mock data (single source of truth)
   Everything in the UI is computed from this object, so all
   dashboards, charts and tables stay internally consistent.
   All names, figures and events are fictional.
   ============================================================ */

const DB = {
  // Pinned reference date so the snapshot stays coherent whenever it's opened.
  today: "2026-07-08", // Wednesday

  company: {
    name: "TaruHR",
    legal: "TaruHR",
    tagline: "HR Operations Portal",
    founded: 2019,
    location: "Helsinki, FI · Remote-first",
    workweekHours: 37.5,
  },

  currentUser: {
    id: "EMP-001",
    name: "Taru Hervoe",
    role: "HR Operations Manager",
    email: "taru.hervoe@taruhr.com",
  },

  /* ---- Departments (colour drives every chart) ---- */
  departments: [
    { id: "eng",  name: "Engineering",       head: "Sarah Chen",       color: "#4f46e5" },
    { id: "prod", name: "Production",         head: "Fatima Al-Sayed",  color: "#ef4444" },
    { id: "des",  name: "Design",            head: "Priya Patel",      color: "#8b5cf6" },
    { id: "sal",  name: "Sales",             head: "David Kim",        color: "#10b981" },
    { id: "mkt",  name: "Marketing",         head: "Emma Wilson",      color: "#ec4899" },
    { id: "cs",   name: "Customer Success",  head: "Sofia Garcia",     color: "#14b8a6" },
    { id: "fin",  name: "Finance",           head: "Aisha Okafor",     color: "#f59e0b" },
    { id: "ppl",  name: "People & Culture",  head: "Taru Hervoe",      color: "#3b82f6" },
  ],

  /* ---- Employees ---- */
  employees: [
    { id: "EMP-001", first: "Taru",    last: "Hervoe",   dept: "ppl",  title: "HR Operations Manager",   type: "Full-time", status: "Active",   location: "Helsinki, FI",  join: "2020-02-17", manager: null,      email: "taru.hervoe@taruhr.com" },
    { id: "EMP-002", first: "Sarah",   last: "Chen",     dept: "eng",  title: "VP of Engineering",       type: "Full-time", status: "Active",   location: "Helsinki, FI",  join: "2019-06-03", manager: null,      email: "sarah.chen@taruhr.com" },
    { id: "EMP-003", first: "Marcus",  last: "Johnson",  dept: "eng",  title: "Senior Software Engineer",type: "Full-time", status: "Active",   location: "Berlin, DE",    join: "2021-03-15", manager: "EMP-002", email: "marcus.johnson@taruhr.com" },
    { id: "EMP-004", first: "Liam",    last: "O'Brien",  dept: "eng",  title: "DevOps Engineer",         type: "Full-time", status: "Remote",   location: "Dublin, IE",    join: "2022-01-10", manager: "EMP-002", email: "liam.obrien@taruhr.com" },
    { id: "EMP-005", first: "Ethan",   last: "Müller",   dept: "eng",  title: "Backend Engineer",        type: "Full-time", status: "Active",   location: "Munich, DE",    join: "2023-09-04", manager: "EMP-002", email: "ethan.muller@taruhr.com" },
    { id: "EMP-006", first: "Ava",     last: "Nguyen",   dept: "eng",  title: "Frontend Engineer",       type: "Full-time", status: "On Leave", location: "Helsinki, FI",  join: "2022-11-21", manager: "EMP-002", email: "ava.nguyen@taruhr.com" },
    { id: "EMP-007", first: "Fatima",  last: "Al-Sayed", dept: "prod", title: "Head of Production",      type: "Full-time", status: "Active",   location: "London, UK",    join: "2020-08-12", manager: null,      email: "fatima.alsayed@taruhr.com" },
    { id: "EMP-008", first: "Noah",    last: "Williams", dept: "prod", title: "Production Manager",      type: "Full-time", status: "Active",   location: "Amsterdam, NL", join: "2023-02-27", manager: "EMP-007", email: "noah.williams@taruhr.com" },
    { id: "EMP-009", first: "Priya",   last: "Patel",    dept: "des",  title: "Design Lead",             type: "Full-time", status: "Active",   location: "Helsinki, FI",  join: "2021-05-19", manager: null,      email: "priya.patel@taruhr.com" },
    { id: "EMP-010", first: "Lucas",   last: "Silva",    dept: "des",  title: "Product Designer",        type: "Full-time", status: "Active",   location: "Lisbon, PT",    join: "2024-01-08", manager: "EMP-009", email: "lucas.silva@taruhr.com" },
    { id: "EMP-011", first: "David",   last: "Kim",      dept: "sal",  title: "Sales Director",          type: "Full-time", status: "Active",   location: "New York, US",  join: "2020-04-06", manager: null,      email: "david.kim@taruhr.com" },
    { id: "EMP-012", first: "James",   last: "Rodriguez",dept: "sal",  title: "Account Executive",       type: "Full-time", status: "Active",   location: "New York, US",  join: "2022-07-18", manager: "EMP-011", email: "james.rodriguez@taruhr.com" },
    { id: "EMP-013", first: "Grace",   last: "Okonkwo",  dept: "sal",  title: "Sales Development Rep",   type: "Full-time", status: "Probation",location: "Remote, US",    join: "2026-05-26", manager: "EMP-011", email: "grace.okonkwo@taruhr.com" },
    { id: "EMP-014", first: "Emma",    last: "Wilson",   dept: "mkt",  title: "Marketing Lead",          type: "Full-time", status: "Active",   location: "London, UK",    join: "2021-09-13", manager: null,      email: "emma.wilson@taruhr.com" },
    { id: "EMP-015", first: "Oliver",  last: "Brown",    dept: "mkt",  title: "Content Strategist",      type: "Part-time", status: "Active",   location: "Manchester, UK",join: "2023-06-01", manager: "EMP-014", email: "oliver.brown@taruhr.com" },
    { id: "EMP-016", first: "Sofia",   last: "Garcia",   dept: "cs",   title: "Customer Success Manager",type: "Full-time", status: "Active",   location: "Barcelona, ES", join: "2021-11-02", manager: null,      email: "sofia.garcia@taruhr.com" },
    { id: "EMP-017", first: "Yuki",    last: "Tanaka",   dept: "cs",   title: "Support Specialist",      type: "Full-time", status: "Remote",   location: "Tokyo, JP",     join: "2023-04-24", manager: "EMP-016", email: "yuki.tanaka@taruhr.com" },
    { id: "EMP-018", first: "Aisha",   last: "Okafor",   dept: "fin",  title: "Finance Manager",         type: "Full-time", status: "Active",   location: "Helsinki, FI",  join: "2020-10-05", manager: null,      email: "aisha.okafor@taruhr.com" },
    { id: "EMP-019", first: "Daniel",  last: "Novak",    dept: "fin",  title: "Financial Analyst",       type: "Full-time", status: "On Leave", location: "Prague, CZ",    join: "2022-03-28", manager: "EMP-018", email: "daniel.novak@taruhr.com" },
    { id: "EMP-020", first: "Isabella",last: "Rossi",    dept: "ppl",  title: "Talent Acquisition Lead", type: "Full-time", status: "Active",   location: "Milan, IT",     join: "2022-02-14", manager: "EMP-001", email: "isabella.rossi@taruhr.com" },
    { id: "EMP-021", first: "Omar",    last: "Haddad",   dept: "ppl",  title: "People Operations Coord.",type: "Full-time", status: "Active",   location: "Helsinki, FI",  join: "2024-03-11", manager: "EMP-001", email: "omar.haddad@taruhr.com" },
    { id: "EMP-022", first: "Chloe",   last: "Martin",   dept: "eng",  title: "QA Engineer",             type: "Contract",  status: "Active",   location: "Paris, FR",     join: "2024-09-16", manager: "EMP-002", email: "chloe.martin@taruhr.com" },
  ],

  /* ---- Leave requests (feed Leave + Approvals + Dashboard) ---- */
  leaveRequests: [
    { id: "LV-1042", empId: "EMP-006", type: "Annual Leave",    from: "2026-07-06", to: "2026-07-17", days: 10, status: "Approved", reason: "Summer holiday with family",        submitted: "2026-06-12" },
    { id: "LV-1043", empId: "EMP-019", type: "Sick Leave",      from: "2026-07-07", to: "2026-07-09", days: 3,  status: "Approved", reason: "Medical — flu recovery",           submitted: "2026-07-06" },
    { id: "LV-1051", empId: "EMP-012", type: "Annual Leave",    from: "2026-07-20", to: "2026-07-24", days: 5,  status: "Pending",  reason: "Short trip",                       submitted: "2026-07-07" },
    { id: "LV-1052", empId: "EMP-010", type: "Personal Leave",  from: "2026-07-14", to: "2026-07-14", days: 1,  status: "Pending",  reason: "Apartment move",                   submitted: "2026-07-07" },
    { id: "LV-1053", empId: "EMP-017", type: "Annual Leave",    from: "2026-08-03", to: "2026-08-14", days: 10, status: "Pending",  reason: "Obon holiday visit",               submitted: "2026-07-08" },
    { id: "LV-1054", empId: "EMP-015", type: "Sick Leave",      from: "2026-07-08", to: "2026-07-08", days: 1,  status: "Pending",  reason: "Dental appointment",               submitted: "2026-07-08" },
    { id: "LV-1039", empId: "EMP-008", type: "Parental Leave",  from: "2026-09-01", to: "2026-11-24", days: 60, status: "Approved", reason: "Parental leave",                   submitted: "2026-05-30" },
    { id: "LV-1030", empId: "EMP-013", type: "Annual Leave",    from: "2026-06-30", to: "2026-07-01", days: 2,  status: "Rejected", reason: "Overlaps onboarding week",         submitted: "2026-06-20" },
    { id: "LV-1055", empId: "EMP-005", type: "Annual Leave",    from: "2026-07-28", to: "2026-07-31", days: 4,  status: "Pending",  reason: "Long weekend",                     submitted: "2026-07-08" },
  ],

  /* ---- Current user's leave balances (days) ---- */
  leaveBalances: [
    { type: "Annual Leave",   entitled: 25, used: 11, pending: 0, color: "#4f46e5" },
    { type: "Sick Leave",     entitled: 10, used: 3,  pending: 0, color: "#f59e0b" },
    { type: "Personal Leave", entitled: 5,  used: 1,  pending: 0, color: "#14b8a6" },
    { type: "Parental Leave", entitled: 0,  used: 0,  pending: 0, color: "#8b5cf6" },
  ],

  /* ---- Attendance snapshot for TODAY ---- */
  attendance: [
    { empId: "EMP-001", status: "Present", in: "08:42", out: "—",     hours: null,  mode: "Office" },
    { empId: "EMP-002", status: "Present", in: "09:03", out: "—",     hours: null,  mode: "Office" },
    { empId: "EMP-003", status: "Remote",  in: "08:15", out: "—",     hours: null,  mode: "Remote" },
    { empId: "EMP-004", status: "Remote",  in: "09:30", out: "—",     hours: null,  mode: "Remote" },
    { empId: "EMP-005", status: "Present", in: "08:55", out: "—",     hours: null,  mode: "Office" },
    { empId: "EMP-006", status: "On Leave",in: "—",     out: "—",     hours: null,  mode: "—" },
    { empId: "EMP-007", status: "Present", in: "08:48", out: "—",     hours: null,  mode: "Office" },
    { empId: "EMP-008", status: "Present", in: "09:12", out: "—",     hours: null,  mode: "Office" },
    { empId: "EMP-009", status: "Present", in: "08:30", out: "—",     hours: null,  mode: "Office" },
    { empId: "EMP-010", status: "Late",    in: "10:24", out: "—",     hours: null,  mode: "Office" },
    { empId: "EMP-011", status: "Present", in: "08:05", out: "—",     hours: null,  mode: "Office" },
    { empId: "EMP-012", status: "Present", in: "08:58", out: "—",     hours: null,  mode: "Office" },
    { empId: "EMP-013", status: "Remote",  in: "09:00", out: "—",     hours: null,  mode: "Remote" },
    { empId: "EMP-014", status: "Present", in: "08:40", out: "—",     hours: null,  mode: "Office" },
    { empId: "EMP-015", status: "Present", in: "09:20", out: "—",     hours: null,  mode: "Office" },
    { empId: "EMP-016", status: "Present", in: "08:36", out: "—",     hours: null,  mode: "Office" },
    { empId: "EMP-017", status: "Remote",  in: "01:30", out: "—",     hours: null,  mode: "Remote" },
    { empId: "EMP-018", status: "Present", in: "08:22", out: "—",     hours: null,  mode: "Office" },
    { empId: "EMP-019", status: "On Leave",in: "—",     out: "—",     hours: null,  mode: "—" },
    { empId: "EMP-020", status: "Present", in: "09:05", out: "—",     hours: null,  mode: "Office" },
    { empId: "EMP-021", status: "Absent",  in: "—",     out: "—",     hours: null,  mode: "—" },
    { empId: "EMP-022", status: "Remote",  in: "09:45", out: "—",     hours: null,  mode: "Remote" },
  ],

  /* ---- Current user weekly timesheet (this week) ---- */
  timesheet: [
    { day: "Mon", date: "2026-07-06", in: "08:38", out: "17:02", break: 0.5, hours: 7.9,  status: "Approved" },
    { day: "Tue", date: "2026-07-07", in: "08:45", out: "17:15", break: 0.5, hours: 8.0,  status: "Approved" },
    { day: "Wed", date: "2026-07-08", in: "08:42", out: "—",     break: 0.5, hours: null, status: "In progress" },
    { day: "Thu", date: "2026-07-09", in: "—",     out: "—",     break: 0.5, hours: null, status: "—" },
    { day: "Fri", date: "2026-07-10", in: "—",     out: "—",     break: 0.5, hours: null, status: "—" },
  ],

  /* ---- Approvals queue (mixed request types) ---- */
  approvals: [
    { id: "LV-1054", kind: "Leave",     empId: "EMP-015", title: "Sick Leave — 1 day",           detail: "8 Jul 2026 · Dental appointment",      submitted: "2026-07-08", priority: "high" },
    { id: "LV-1052", kind: "Leave",     empId: "EMP-010", title: "Personal Leave — 1 day",        detail: "14 Jul 2026 · Apartment move",         submitted: "2026-07-07", priority: "normal" },
    { id: "LV-1051", kind: "Leave",     empId: "EMP-012", title: "Annual Leave — 5 days",         detail: "20–24 Jul 2026 · Short trip",          submitted: "2026-07-07", priority: "normal" },
    { id: "LV-1053", kind: "Leave",     empId: "EMP-017", title: "Annual Leave — 10 days",        detail: "3–14 Aug 2026 · Obon holiday",         submitted: "2026-07-08", priority: "normal" },
    { id: "LV-1055", kind: "Leave",     empId: "EMP-005", title: "Annual Leave — 4 days",         detail: "28–31 Jul 2026 · Long weekend",        submitted: "2026-07-08", priority: "low" },
    { id: "TS-3308", kind: "Timesheet", empId: "EMP-003", title: "Timesheet — Wk 27",             detail: "39.5 h logged · 1.5 h overtime",       submitted: "2026-07-07", priority: "normal" },
    { id: "EX-2210", kind: "Expense",   empId: "EMP-012", title: "Expense — €340 client dinner",  detail: "Sales · NY client visit · receipt ✓",  submitted: "2026-07-06", priority: "normal" },
    { id: "EQ-0091", kind: "Equipment", empId: "EMP-013", title: "Equipment — Laptop + monitor",  detail: "New hire onboarding · Sales",          submitted: "2026-07-06", priority: "high" },
  ],

  /* ---- Recent activity feed ---- */
  activity: [
    { icon: "leave",   color: "teal",   title: "Leave approved",       detail: "Ava Nguyen — Annual Leave (6–17 Jul)", time: "12 min ago" },
    { icon: "user",    color: "brand",  title: "New hire onboarded",   detail: "Grace Okonkwo joined Sales",           time: "1 hour ago" },
    { icon: "clock",   color: "amber",  title: "Late clock-in flagged",detail: "Lucas Silva — 10:24",                  time: "2 hours ago" },
    { icon: "doc",     color: "blue",   title: "Timesheet submitted",  detail: "Marcus Johnson — Week 27",             time: "3 hours ago" },
    { icon: "check",   color: "green",  title: "Expense reimbursed",   detail: "James Rodriguez — €120 travel",        time: "Yesterday" },
    { icon: "cake",    color: "pink",   title: "Work anniversary",     detail: "Sofia Garcia — 4 years 🎉",            time: "Yesterday" },
  ],

  /* ---- Upcoming events (people ops) ---- */
  events: [
    { type: "Holiday",     title: "Company Summer Day",        who: "All employees",    date: "2026-07-10", tag: "holiday" },
    { type: "Birthday",    title: "Marcus Johnson",            who: "Engineering",      date: "2026-07-11", tag: "birthday" },
    { type: "Anniversary", title: "Aisha Okafor — 6 years",    who: "Finance",          date: "2026-07-12", tag: "anniversary" },
    { type: "Review",      title: "Q3 performance reviews open",who: "All managers",     date: "2026-07-15", tag: "review" },
    { type: "Onboarding",  title: "Onboarding — Grace Okonkwo",who: "Sales",            date: "2026-07-16", tag: "onboarding" },
  ],

  /* ---- Trends for charts ---- */
  headcountTrend: [ // last 8 months, ending current
    { m: "Dec", v: 15 }, { m: "Jan", v: 16 }, { m: "Feb", v: 17 }, { m: "Mar", v: 18 },
    { m: "Apr", v: 19 }, { m: "May", v: 20 }, { m: "Jun", v: 21 }, { m: "Jul", v: 22 },
  ],

  attendanceTrend: [ // this week attendance rate %
    { d: "Mon", present: 20, remote: 4, leave: 2 },
    { d: "Tue", present: 19, remote: 5, leave: 2 },
    { d: "Wed", present: 15, remote: 5, leave: 2 },
    { d: "Thu", present: 0,  remote: 0, leave: 0 },
    { d: "Fri", present: 0,  remote: 0, leave: 0 },
  ],

  // 12-month attrition / hires for Reports
  hiresVsExits: [
    { m: "Aug", hires: 1, exits: 0 }, { m: "Sep", hires: 1, exits: 0 },
    { m: "Oct", hires: 1, exits: 0 }, { m: "Nov", hires: 0, exits: 1 },
    { m: "Dec", hires: 1, exits: 0 }, { m: "Jan", hires: 1, exits: 0 },
    { m: "Feb", hires: 0, exits: 0 }, { m: "Mar", hires: 1, exits: 0 },
    { m: "Apr", hires: 1, exits: 0 }, { m: "May", hires: 0, exits: 0 },
    { m: "Jun", hires: 1, exits: 1 }, { m: "Jul", hires: 1, exits: 0 },
  ],

  // Engagement survey scores (Reports)
  engagement: [
    { label: "Job satisfaction",    score: 82 },
    { label: "Work-life balance",   score: 78 },
    { label: "Manager support",     score: 85 },
    { label: "Career growth",       score: 71 },
    { label: "Recommend as employer", score: 88 },
  ],

  /* ---- Compensation & Benefits (current user's record) ---- */
  compensation: {
    empId: "EMP-001",
    currency: "€",
    salaryMonthly: 3800,
    grade: "P3",
    band: { name: "P3 · Senior Professional", min: 3200, mid: 3800, max: 4400 },
    effectiveDate: "2026-01-01",
    fte: 100,               // employment percentage
    bonusEligible: true,
    bonusTarget: 10,        // % of annual salary
    nextReview: "2026-12-01",
    payFrequency: "Monthly",
  },

  compensationHistory: [
    { date: "2026-01-01", salary: 3800, reason: "Annual increase",   by: "HR" },
    { date: "2025-04-01", salary: 3650, reason: "Promotion to P3",   by: "HR" },
    { date: "2024-01-01", salary: 3400, reason: "Annual increase",   by: "HR" },
    { date: "2022-01-01", salary: 3150, reason: "Annual increase",   by: "HR" },
    { date: "2020-02-17", salary: 2900, reason: "Starting salary",   by: "HR" },
  ],

  // Finnish-context benefits (TaruHR is Helsinki-based)
  benefits: [
    { id: "healthcare", name: "Occupational healthcare", desc: "Extended private health cover",  value: "Full cover",       taxable: false, enabled: true,  tint: "tint-red",    icon: "health" },
    { id: "lunch",      name: "Lunch benefit",           desc: "Meal benefit (ePassi)",           value: "€8.60 / day",      taxable: true,  enabled: true,  tint: "tint-amber",  icon: "coffee" },
    { id: "phone",      name: "Phone benefit",           desc: "Work mobile & plan",              value: "€20 / month",      taxable: true,  enabled: true,  tint: "tint-blue",   icon: "phone" },
    { id: "wellness",   name: "Wellness benefit",        desc: "Sport & culture (ePassi)",        value: "€400 / year",      taxable: false, enabled: true,  tint: "tint-teal",   icon: "star" },
    { id: "bicycle",    name: "Bicycle benefit",         desc: "Tax-free company bike",           value: "up to €1,200 / yr",taxable: false, enabled: true,  tint: "tint-green",  icon: "bike" },
    { id: "housing",    name: "Housing benefit",         desc: "Employer-provided housing",       value: "Market value",     taxable: true,  enabled: false, tint: "tint-violet", icon: "home" },
    { id: "car",        name: "Company car",             desc: "Benefit car",                     value: "Benefit value",    taxable: true,  enabled: false, tint: "tint-brand",  icon: "car" },
  ],

  benefitsHistory: [
    { date: "2026-01-15", benefit: "Wellness benefit",        action: "added",   by: "HR" },
    { date: "2025-04-01", benefit: "Phone benefit",           action: "added",   by: "HR" },
    { date: "2024-05-01", benefit: "Bicycle benefit",         action: "added",   by: "HR" },
    { date: "2020-02-17", benefit: "Occupational healthcare", action: "added",   by: "HR" },
    { date: "2020-02-17", benefit: "Lunch benefit",           action: "added",   by: "HR" },
  ],

  // Role-based access to compensation data (drives the "Viewing as" switcher)
  compAccess: [
    { role: "Employee",      access: "View own salary and benefits" },
    { role: "Manager",       access: "View team salary bands (if permitted)" },
    { role: "HR",            access: "Edit salary and benefits" },
    { role: "Payroll",       access: "Edit salary details" },
    { role: "Administrator", access: "Full access" },
  ],
};

/* ============================================================
   Derived helpers — keep every view consistent with the data
   ============================================================ */
const H = {
  emp: (id) => DB.employees.find((e) => e.id === id),
  dept: (id) => DB.departments.find((d) => d.id === id),
  deptName: (id) => (H.dept(id) ? H.dept(id).name : "—"),
  deptColor: (id) => (H.dept(id) ? H.dept(id).color : "#94a3b8"),
  fullName: (e) => `${e.first} ${e.last}`,
  initials: (e) => `${e.first[0]}${e.last[0]}`.toUpperCase(),

  // Deterministic avatar colour from a string (stable across renders)
  colorFor(str) {
    const palette = ["#4f46e5","#10b981","#f59e0b","#ef4444","#3b82f6","#8b5cf6","#14b8a6","#ec4899","#6366f1","#0ea5e9"];
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) & 0xffffff;
    return palette[Math.abs(h) % palette.length];
  },

  fmtDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${d} ${months[m - 1]} ${y}`;
  },
  fmtDateShort(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${d} ${months[m - 1]}`;
  },
  tenureYears(iso) {
    const [y, m] = iso.split("-").map(Number);
    const [ty, tm] = DB.today.split("-").map(Number);
    let months = (ty - y) * 12 + (tm - m);
    return (months / 12).toFixed(1);
  },

  // Dashboard KPIs — all computed live
  stats() {
    const emps = DB.employees;
    const att = DB.attendance;
    const present = att.filter((a) => a.status === "Present" || a.status === "Late").length;
    const remote = att.filter((a) => a.status === "Remote").length;
    const onLeave = att.filter((a) => a.status === "On Leave").length;
    const absent = att.filter((a) => a.status === "Absent").length;
    const pendingApprovals = DB.approvals.length;
    const newHires = emps.filter((e) => e.join >= "2026-01-01").length;
    const attendanceRate = Math.round(((present + remote) / emps.length) * 100);
    return {
      total: emps.length,
      present, remote, onLeave, absent,
      atWork: present + remote,
      pendingApprovals,
      newHires,
      attendanceRate,
      openRoles: 4,
      avgTenure: (emps.reduce((s, e) => s + parseFloat(H.tenureYears(e.join)), 0) / emps.length).toFixed(1),
    };
  },

  headcountByDept() {
    return DB.departments.map((d) => ({
      label: d.name,
      value: DB.employees.filter((e) => e.dept === d.id).length,
      color: d.color,
    }));
  },

  byEmploymentType() {
    const types = {};
    DB.employees.forEach((e) => (types[e.type] = (types[e.type] || 0) + 1));
    const colors = { "Full-time": "#4f46e5", "Part-time": "#f59e0b", Contract: "#14b8a6" };
    return Object.entries(types).map(([label, value]) => ({ label, value, color: colors[label] || "#94a3b8" }));
  },

  byStatus() {
    const s = {};
    DB.attendance.forEach((a) => (s[a.status] = (s[a.status] || 0) + 1));
    const colors = { Present: "#10b981", Remote: "#3b82f6", "On Leave": "#f59e0b", Late: "#ec4899", Absent: "#ef4444" };
    return Object.entries(s).map(([label, value]) => ({ label, value, color: colors[label] || "#94a3b8" }));
  },

  pendingApprovals: () => DB.approvals,
  pendingLeaveCount: () => DB.leaveRequests.filter((l) => l.status === "Pending").length,

  // Per-employee compensation record — generated lazily and cached so edits persist.
  // EMP-001 (Taru) keeps the hand-authored seed; everyone else is generated.
  compFor(empId) {
    DB._comp = DB._comp || {};
    if (!DB._comp[empId]) {
      DB._comp[empId] = empId === "EMP-001"
        ? { compensation: DB.compensation, history: DB.compensationHistory, benefits: DB.benefits, benefitsHistory: DB.benefitsHistory }
        : buildComp(H.emp(empId));
    }
    return DB._comp[empId];
  },
};

/* ============================================================
   Compensation generator — deterministic, realistic records
   derived from each employee's title, department and tenure.
   ============================================================ */
function compLevel(title) {
  const t = title.toLowerCase();
  if (/vp|head of|chief|director/.test(t)) return 5;
  if (/lead|manager|principal/.test(t)) return 4;
  if (/senior|sr\.?\b/.test(t)) return 3;
  if (/coordinator|specialist|\brep\b|associate|assistant|support|intern/.test(t)) return 1;
  return 2;
}

function benefitEnabledFor(emp, id, level) {
  let h = 0; const s = emp.id + id;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  switch (id) {
    case "healthcare": return true;
    case "lunch":      return true;
    case "phone":      return level >= 3 || emp.dept === "sal" || emp.dept === "cs";
    case "wellness":   return h % 4 !== 0;             // ~75%
    case "bicycle":    return h % 2 === 0;             // ~50%
    case "housing":    return false;
    case "car":        return (emp.dept === "sal" && level >= 4) || level >= 5;
    default:           return false;
  }
}

function buildComp(emp) {
  const bands = {
    1: { grade: "P1", tier: "Associate",           min: 2400, mid: 2850, max: 3300 },
    2: { grade: "P2", tier: "Professional",        min: 3000, mid: 3500, max: 4000 },
    3: { grade: "P3", tier: "Senior Professional", min: 3200, mid: 3800, max: 4400 },
    4: { grade: "M3", tier: "Manager",             min: 4200, mid: 5000, max: 5800 },
    5: { grade: "M4", tier: "Leadership",          min: 5600, mid: 6800, max: 8000 },
  };
  const level = compLevel(emp.title);
  const band = bands[level];
  const deptFactor = { eng: 1.06, prod: 1.04, sal: 1.02, fin: 1.0, des: 1.0, mkt: 0.98, cs: 0.96, ppl: 0.99 }[emp.dept] || 1;
  const years = parseFloat(H.tenureYears(emp.join));
  const round50 = (n) => Math.round(n / 50) * 50;

  let h = 0;
  for (let i = 0; i < emp.id.length; i++) h = (h * 31 + emp.id.charCodeAt(i)) >>> 0;
  const jitter = (h % 7) * 50 - 150; // -150..+150

  const fte = emp.type === "Part-time" ? 80 : 100;
  // Salary is the full-time-equivalent band salary; the FTE % is shown separately.
  let salary = round50(band.mid * deptFactor + years * 20 + jitter);
  salary = Math.max(band.min, Math.min(band.max, salary));

  const bonusEligible = level >= 3;
  const bonusTarget = level >= 5 ? 15 : level >= 4 ? 12 : level >= 3 ? 10 : 0;
  const effectiveDate = emp.join >= "2026-01-01" ? emp.join : "2026-01-01";
  const joinYear = +emp.join.slice(0, 4);

  // Compensation history — progression up to current salary
  let history;
  if (emp.join >= "2026-01-01") {
    history = [{ date: emp.join, salary, reason: "Starting salary", by: "HR" }];
  } else {
    history = [{ date: effectiveDate, salary, reason: "Annual increase", by: "HR" }];
    let sal = salary, y = 2026;
    const raises = Math.max(1, Math.min(3, Math.floor(years)));
    for (let i = 0; i < raises; i++) {
      y--;
      if (y <= joinYear) break;
      sal = round50(sal - (110 + i * 40));
      history.push({ date: `${y}-01-01`, salary: sal, reason: i === raises - 1 && years >= 2 ? "Promotion" : "Annual increase", by: "HR" });
    }
    history.push({ date: emp.join, salary: round50(Math.max(band.min - 200, sal - 150)), reason: "Starting salary", by: "HR" });
  }

  // Benefits (copied from the shared catalogue so edits stay per-employee)
  const benefits = DB.benefits.map((b) => ({ ...b, enabled: benefitEnabledFor(emp, b.id, level) }));
  const addDate = emp.join < "2025-01-01" ? "2025-06-01" : emp.join;
  const benefitsHistory = [];
  benefits.filter((b) => b.enabled && !["healthcare", "lunch"].includes(b.id)).forEach((b) => {
    benefitsHistory.push({ date: addDate, benefit: b.name, action: "added", by: "HR" });
  });
  benefitsHistory.push({ date: emp.join, benefit: "Lunch benefit", action: "added", by: "HR" });
  benefitsHistory.push({ date: emp.join, benefit: "Occupational healthcare", action: "added", by: "HR" });

  return {
    compensation: {
      empId: emp.id, currency: "€", salaryMonthly: salary,
      grade: band.grade, band: { name: `${band.grade} · ${band.tier}`, min: band.min, max: band.max, mid: band.mid },
      effectiveDate, fte, bonusEligible, bonusTarget, nextReview: "2026-12-01", payFrequency: "Monthly",
    },
    history, benefits, benefitsHistory,
  };
}
