/* ============================================================
   TaruHR — Lightweight SVG charts (no libraries)
   Every function returns an SVG string. Axis/grid colours use
   CSS variables so charts follow the light/dark theme.
   ============================================================ */

const Charts = {
  /* ---- Donut / ring chart ---- */
  donut(data, opts = {}) {
    const { size = 180, thickness = 24, centerValue = "", centerLabel = "" } = opts;
    const total = data.reduce((s, d) => s + d.value, 0) || 1;
    const r = (size - thickness) / 2;
    const cx = size / 2, cy = size / 2;
    const C = 2 * Math.PI * r;
    let offset = 0;
    let arcs = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--border-2)" stroke-width="${thickness}"/>`;
    data.forEach((d) => {
      if (d.value <= 0) return;
      const len = (d.value / total) * C;
      arcs += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${d.color}" stroke-width="${thickness}"
        stroke-dasharray="${len.toFixed(2)} ${(C - len).toFixed(2)}" stroke-dashoffset="${(-offset).toFixed(2)}"
        transform="rotate(-90 ${cx} ${cy})" stroke-linecap="butt">
        <title>${d.label}: ${d.value} (${Math.round((d.value / total) * 100)}%)</title></circle>`;
      offset += len;
    });
    const center = centerValue !== "" || centerLabel !== ""
      ? `<text x="${cx}" y="${cy - 2}" text-anchor="middle" font-size="26" font-weight="800" fill="var(--text)">${centerValue}</text>
         <text x="${cx}" y="${cy + 16}" text-anchor="middle" font-size="11" fill="var(--text-3)">${centerLabel}</text>`
      : "";
    return `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" class="chart-donut">${arcs}${center}</svg>`;
  },

  /* ---- Vertical bar chart ---- */
  bars(data, opts = {}) {
    const { height = 240, suffix = "", singleColor = null } = opts;
    const W = Math.max(340, data.length * 62);
    const padL = 34, padR = 14, padT = 18, padB = 40;
    const plotW = W - padL - padR, plotH = height - padT - padB;
    const max = Math.max(...data.map((d) => d.value), 1);
    const niceMax = Math.ceil(max / 4) * 4 || 4;
    const bw = Math.min(46, (plotW / data.length) * 0.55);

    let grid = "", bars = "";
    for (let i = 0; i <= 4; i++) {
      const y = padT + (plotH / 4) * i;
      const val = Math.round(niceMax - (niceMax / 4) * i);
      grid += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="var(--border-2)" stroke-width="1"/>
               <text x="${padL - 8}" y="${y + 4}" text-anchor="end" font-size="10" fill="var(--text-3)">${val}</text>`;
    }
    data.forEach((d, i) => {
      const x = padL + (plotW / data.length) * i + (plotW / data.length - bw) / 2;
      const h = (d.value / niceMax) * plotH;
      const y = padT + plotH - h;
      const color = singleColor || d.color || "var(--brand)";
      bars += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${bw.toFixed(1)}" height="${Math.max(h, 0).toFixed(1)}" rx="5" fill="${color}">
                 <title>${d.label}: ${d.value}${suffix}</title></rect>
               <text x="${(x + bw / 2).toFixed(1)}" y="${(y - 6).toFixed(1)}" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text)">${d.value}${suffix}</text>
               <text x="${(x + bw / 2).toFixed(1)}" y="${height - 14}" text-anchor="middle" font-size="10.5" fill="var(--text-3)">${this._short(d.label)}</text>`;
    });
    return `<svg viewBox="0 0 ${W} ${height}" preserveAspectRatio="xMidYMid meet">${grid}${bars}</svg>`;
  },

  /* ---- Grouped bars (two series) ---- */
  groupedBars(data, opts = {}) {
    const { height = 240, colorA = "#10b981", colorB = "#ef4444", labelA = "A", labelB = "B" } = opts;
    const W = Math.max(420, data.length * 52);
    const padL = 30, padR = 14, padT = 16, padB = 34;
    const plotW = W - padL - padR, plotH = height - padT - padB;
    const max = Math.max(...data.map((d) => Math.max(d.a, d.b)), 1);
    const niceMax = Math.ceil(max) || 1;
    const groupW = plotW / data.length;
    const bw = Math.min(14, groupW * 0.28);

    let grid = "", bars = "";
    for (let i = 0; i <= niceMax; i++) {
      const y = padT + plotH - (plotH / niceMax) * i;
      grid += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="var(--border-2)"/>
               <text x="${padL - 6}" y="${y + 4}" text-anchor="end" font-size="9.5" fill="var(--text-3)">${i}</text>`;
    }
    data.forEach((d, i) => {
      const cx = padL + groupW * i + groupW / 2;
      const ha = (d.a / niceMax) * plotH, hb = (d.b / niceMax) * plotH;
      bars += `<rect x="${(cx - bw - 2).toFixed(1)}" y="${(padT + plotH - ha).toFixed(1)}" width="${bw}" height="${ha.toFixed(1)}" rx="3" fill="${colorA}"><title>${d.label} ${labelA}: ${d.a}</title></rect>
               <rect x="${(cx + 2).toFixed(1)}" y="${(padT + plotH - hb).toFixed(1)}" width="${bw}" height="${hb.toFixed(1)}" rx="3" fill="${colorB}"><title>${d.label} ${labelB}: ${d.b}</title></rect>
               <text x="${cx.toFixed(1)}" y="${height - 12}" text-anchor="middle" font-size="10" fill="var(--text-3)">${d.label}</text>`;
    });
    return `<svg viewBox="0 0 ${W} ${height}" preserveAspectRatio="xMidYMid meet">${grid}${bars}</svg>`;
  },

  /* ---- Line / area chart ---- */
  line(cfg) {
    const { xLabels, series, height = 240, area = true, suffix = "" } = cfg;
    const W = 560;
    const padL = 34, padR = 16, padT = 18, padB = 34;
    const plotW = W - padL - padR, plotH = height - padT - padB;
    const allVals = series.flatMap((s) => s.points);
    const max = Math.max(...allVals, 1);
    const niceMax = Math.ceil(max / 5) * 5 || 5;
    const n = xLabels.length;
    const xAt = (i) => padL + (plotW / Math.max(n - 1, 1)) * i;
    const yAt = (v) => padT + plotH - (v / niceMax) * plotH;

    let grid = "";
    for (let i = 0; i <= 4; i++) {
      const y = padT + (plotH / 4) * i;
      const val = Math.round(niceMax - (niceMax / 4) * i);
      grid += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="var(--border-2)"/>
               <text x="${padL - 8}" y="${y + 4}" text-anchor="end" font-size="10" fill="var(--text-3)">${val}</text>`;
    }
    let xlab = xLabels.map((l, i) => `<text x="${xAt(i)}" y="${height - 12}" text-anchor="middle" font-size="10.5" fill="var(--text-3)">${l}</text>`).join("");

    let paths = "";
    series.forEach((s, si) => {
      const pts = s.points.map((v, i) => `${xAt(i).toFixed(1)},${yAt(v).toFixed(1)}`);
      const line = `<polyline points="${pts.join(" ")}" fill="none" stroke="${s.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;
      let areaFill = "";
      if (area && series.length === 1) {
        const gid = `grad${si}`;
        areaFill = `<defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="${s.color}" stop-opacity="0.28"/>
            <stop offset="100%" stop-color="${s.color}" stop-opacity="0"/></linearGradient></defs>
          <path d="M ${xAt(0)},${padT + plotH} L ${pts.join(" L ")} L ${xAt(n - 1)},${padT + plotH} Z" fill="url(#${gid})"/>`;
      }
      const dots = s.points.map((v, i) => `<circle cx="${xAt(i).toFixed(1)}" cy="${yAt(v).toFixed(1)}" r="3.5" fill="var(--surface)" stroke="${s.color}" stroke-width="2.5"><title>${xLabels[i]}: ${v}${suffix}</title></circle>`).join("");
      paths += areaFill + line + dots;
    });
    return `<svg viewBox="0 0 ${W} ${height}" preserveAspectRatio="xMidYMid meet">${grid}${xlab}${paths}</svg>`;
  },

  /* ---- Horizontal bars (0–max, good for scores) ---- */
  hbars(data, opts = {}) {
    const { max = 100, suffix = "", color = "var(--brand)" } = opts;
    const rowH = 40, W = 460, labelW = 150;
    const height = data.length * rowH + 8;
    let rows = "";
    data.forEach((d, i) => {
      const y = i * rowH + 8;
      const barMax = W - labelW - 46;
      const w = (d.value / max) * barMax;
      const c = d.color || color;
      rows += `<text x="0" y="${y + 14}" font-size="12.5" fill="var(--text-2)" font-weight="500">${d.label}</text>
        <rect x="${labelW}" y="${y + 4}" width="${barMax}" height="14" rx="7" fill="var(--border-2)"/>
        <rect x="${labelW}" y="${y + 4}" width="${Math.max(w, 4).toFixed(1)}" height="14" rx="7" fill="${c}"><title>${d.label}: ${d.value}${suffix}</title></rect>
        <text x="${W}" y="${y + 15}" text-anchor="end" font-size="12" font-weight="700" fill="var(--text)">${d.value}${suffix}</text>`;
    });
    return `<svg viewBox="0 0 ${W} ${height}" preserveAspectRatio="xMidYMid meet">${rows}</svg>`;
  },

  /* ---- Mini sparkline ---- */
  spark(values, color = "var(--brand)") {
    const W = 90, H = 30, max = Math.max(...values), min = Math.min(...values);
    const range = max - min || 1;
    const pts = values.map((v, i) => `${(i / (values.length - 1)) * W},${H - ((v - min) / range) * (H - 4) - 2}`);
    return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" preserveAspectRatio="none">
      <polyline points="${pts.join(" ")}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  },

  _short(label) {
    const map = { "Customer Success": "Cust. Succ.", "People & Culture": "People", "Engineering": "Eng.", "Marketing": "Mktg." };
    return map[label] || label;
  },
};
