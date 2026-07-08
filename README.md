# TaruHR — HR Operations Portal

> **Portfolio prototype & demo application.** This is a self-contained front-end
> prototype built to demonstrate how a modern **HRIS (Human Resources Information
> System)** works and to translate real HR operations processes into a coherent,
> user-friendly interface. It is **not** a production system, and **all data is
> fictional**.

A clean, single-page HR Operations Portal covering the everyday workflows an HR /
People Operations team relies on — headcount, attendance, leave, approvals,
analytics and an AI assistant.

---

## ✨ Highlights

- **10 fully navigable sections** — Dashboard, Employees, Time Clock, Attendance,
  Leave Management, Compensation & Benefits, Approvals, Reports, AI Assistant, System Administration.
- **A full System Administration console** — a 13-area admin back-office (org structure,
  job architecture, RBAC permission matrix, working-time & leave rules, approval workflows,
  notifications, integrations, data governance, audit log, security, localization & AI config)
  showing the configuration layer an HRIS specialist owns.
- **Internally consistent data** — every KPI, chart and table is computed live
  from a single mock dataset, so the app behaves like a real system.
- **Role-based access control (RBAC) demo** — a "Viewing as" switcher on the
  Compensation page changes what each role (Employee / Manager / HR / Payroll /
  Administrator) can see and edit, live.
- **Hand-built SVG charts** — donut, bar, grouped-bar and line/area charts with
  **no external libraries** (a nod to Power BI–style people analytics).
- **Working interactions** — search & filter the directory, clock in/out,
  approve/reject requests, submit leave, add an employee, and chat with a
  rule-based **AI assistant** that answers questions from the data.
- **Light & dark themes**, fully **responsive** (desktop → mobile), zero
  dependencies, zero build step.

## 🧭 Sections

| Section | What it demonstrates |
|---|---|
| 🏠 **Dashboard** | KPI cards, headcount growth, attendance snapshot, activity feed & upcoming people-ops events |
| 👥 **Employees** | Searchable/filterable directory with employee profiles & org details |
| ⏰ **Time Clock** | Your personal clock in/out (Office / Remote), weekly timesheet, work-time stats, **leave balances** (annual days-left vs. sick/personal days-used per TES), **request tracking** (approved/pending) & self-service **Request Leave** |
| 🗓️ **Attendance** | Team-wide attendance — today's log (filterable by status), KPIs & weekly trend |
| 🌴 **Leave Management** | HR/Manager view — view & edit leave records, add leave for any employee, balances (approvals live in **Approvals**) |
| 💶 **Compensation & Benefits** | Per-employee salary, grade/band & compa-ratio, benefits enrolment, pay & benefits history — opened from any employee's profile — plus a live **role-based access (RBAC)** demo |
| ✅ **Approvals** | Unified queue for leave, timesheets, expenses & equipment with approve/reject |
| 📊 **Reports** | People analytics: headcount, attendance, leave, attrition & engagement |
| 🤖 **AI Assistant** | Ask HR questions in plain language (rule-based over the demo data) |
| ⚙️ **System Administration** | 13-area admin console — org structure, job architecture, **RBAC permission matrix**, working-time & leave configuration, **approval workflows**, notifications, integrations, data governance (GDPR retention), **audit log**, security, localization & **AI configuration** |

## 🚀 Run it

No install, no build tools — it's plain HTML/CSS/JavaScript.

**Option A — just open it**
Double-click `index.html` (or drag it into your browser).

**Option B — local server** (recommended, mirrors real hosting)
```bash
# from the project folder
python -m http.server 8000
# then visit http://localhost:8000
```

**Deploy for free**
Push to GitHub and enable **GitHub Pages** (Settings → Pages → deploy from
`main`), or drag the folder onto Netlify. Great for sharing a live link on a CV.

## 🗂️ Project structure

```
hr-operations-portal/
├── index.html        # App shell (sidebar, top bar, content area)
├── css/
│   └── styles.css    # Design system + light/dark themes
└── js/
    ├── data.js       # Single source of truth (mock HR data)
    ├── charts.js     # Dependency-free SVG chart helpers
    ├── pages.js      # Icons, UI helpers & the 8 page renderers
    └── app.js        # Routing, interactivity, modals, toasts, AI chat
```

## 🛠️ Tech

Vanilla **HTML5 · CSS3 · JavaScript (ES6)** — no frameworks, no dependencies.
Chosen deliberately so the prototype is easy to read, easy to host, and portable.

## 🔮 Where a production version would go next

- Real backend & database (e.g. Python/Flask or FastAPI) with authentication and
  role-based access control.
- Persisted data and audit trails instead of in-memory demo state.
- The AI assistant wired to the **Claude API** for open-ended questions over live,
  permission-scoped HR data.
- Integrations: payroll, calendars, SSO, and export to **Power BI**.

---

*Built by Taru as a portfolio piece for HRIS / HR Operations / Workplace
Experience roles. Names, figures and events are entirely fictional.*
