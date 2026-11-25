export const REPAIR_CATALOG = [
  {
    id: "espresso-machine",
    name: "Home Espresso Machine",
    category: "Kitchen Appliance",
    symptoms: ["low pressure", "leaking group head", "steam wand weak", "not heating"],
    commonCause: "Hardened 58mm rubber group gasket or clogged solenoid valve from scale buildup.",
    safetyLevel: "HIGH",
    safetyNote: "Unplug from AC mains and let boiler cool completely (45+ min) before opening housing.",
    requiredEquipment: "Multimeter & Descale Bench",
    recommendedPartIds: ["part-gasket-58", "part-thermo-fuse"],
    estRepairUsd: 14,
    replacementUsd: 480,
    co2SavedKg: 26,
    difficulty: "Beginner (35 min)",
  },
  {
    id: "mechanical-keyboard",
    name: "Mechanical Keyboard (USB-C)",
    category: "Electronics",
    symptoms: ["usb-c loose", "chattering keys", "dead column", "no power"],
    commonCause: "Cracked USB-C SMD solder joints or oxidized hot-swap switch socket.",
    safetyLevel: "LOW",
    safetyNote: "Low-voltage 5V DC; use ESD wrist strap and fume extractor during SMD reflow.",
    requiredEquipment: "Micro-Soldering Station",
    recommendedPartIds: ["part-usbc-receptacle", "part-hotswap-pack"],
    estRepairUsd: 9,
    replacementUsd: 165,
    co2SavedKg: 8,
    difficulty: "Intermediate (45 min)",
  },
  {
    id: "ebike-brake",
    name: "Commuter E-Bike Brake & Sensor",
    category: "Micromobility",
    symptoms: ["squealing disc brake", "motor cutoff stuck", "weak stopping", "bent rotor"],
    commonCause: "Glazed resin brake pads or misaligned Hall-effect brake lever cutoff magnet.",
    safetyLevel: "MODERATE",
    safetyNote: "Remove Li-ion battery pack before servicing wiring; never puncture swollen cells.",
    requiredEquipment: "Bike Torque Stand",
    recommendedPartIds: ["part-brake-pads", "part-hall-sensor"],
    estRepairUsd: 18,
    replacementUsd: 240,
    co2SavedKg: 19,
    difficulty: "Beginner (30 min)",
  },
  {
    id: "laptop-cooling",
    name: "Laptop Overheating / Fan Noise",
    category: "Computing",
    symptoms: ["thermal throttling", "grinding fan", "random shutdown", "hot palmrest"],
    commonCause: "Dried factory thermal paste and dust-packed heatsink fins.",
    safetyLevel: "MODERATE",
    safetyNote: "Disconnect internal battery header before touching motherboard heatsink screws.",
    requiredEquipment: "Micro-Soldering Station",
    recommendedPartIds: ["part-thermal-paste", "part-blower-fan"],
    estRepairUsd: 16,
    replacementUsd: 950,
    co2SavedKg: 64,
    difficulty: "Beginner (40 min)",
  },
  {
    id: "anc-headphones",
    name: "Over-Ear ANC Headphones",
    category: "Audio",
    symptoms: ["won't hold charge", "one ear silent", "cracked hinge", "crackling audio"],
    commonCause: "Degraded 3.7V pouch battery or fatigued internal hinge ribbon wire.",
    safetyLevel: "MODERATE",
    safetyNote: "Use plastic spudger only near Li-ion pouch cell; verify polarity before soldering.",
    requiredEquipment: "Micro-Soldering Station",
    recommendedPartIds: ["part-liion-600mah", "part-earpads-pair"],
    estRepairUsd: 15,
    replacementUsd: 320,
    co2SavedKg: 12,
    difficulty: "Intermediate (50 min)",
  },
  {
    id: "stand-mixer",
    name: "Kitchen Stand Mixer",
    category: "Kitchen Appliance",
    symptoms: ["clicking gears", "beater stops under load", "grease leaking", "speed stuck"],
    commonCause: "Stripped sacrificial nylon worm gear designed to protect the motor.",
    safetyLevel: "HIGH",
    safetyNote: "Unplug AC cord before removing rear housing; wear nitrile gloves for food-grade grease.",
    requiredEquipment: "Mechanical Press & Gear Bay",
    recommendedPartIds: ["part-worm-gear", "part-food-grease"],
    estRepairUsd: 19,
    replacementUsd: 420,
    co2SavedKg: 34,
    difficulty: "Intermediate (55 min)",
  },
];

export const SPARE_PARTS = [
  { id: "part-gasket-58", sku: "FB-ESP-58G", name: "58mm Silicone Group Gasket", priceUsd: 8, stock: 7, forDevice: "espresso-machine" },
  { id: "part-thermo-fuse", sku: "FB-ESP-184F", name: "184°C Thermal Cutoff Fuse", priceUsd: 6, stock: 12, forDevice: "espresso-machine" },
  { id: "part-usbc-receptacle", sku: "FB-SMD-USBC", name: "16-Pin USB-C SMD Receptacle", priceUsd: 4, stock: 15, forDevice: "mechanical-keyboard" },
  { id: "part-hotswap-pack", sku: "FB-KBD-HS10", name: "Kailh Hot-Swap Socket (10-pack)", priceUsd: 5, stock: 9, forDevice: "mechanical-keyboard" },
  { id: "part-brake-pads", sku: "FB-EBK-PAD2", name: "Sintered Hydraulic Disc Pads", priceUsd: 12, stock: 6, forDevice: "ebike-brake" },
  { id: "part-hall-sensor", sku: "FB-EBK-HALL", name: "Magnetic Cutoff Hall Sensor", priceUsd: 6, stock: 8, forDevice: "ebike-brake" },
  { id: "part-thermal-paste", sku: "FB-CPU-PTM", name: "Phase-Change Thermal Pad + Paste", priceUsd: 7, stock: 11, forDevice: "laptop-cooling" },
  { id: "part-blower-fan", sku: "FB-CPU-FAN5V", name: "5V Low-Noise Laptop Blower Fan", priceUsd: 14, stock: 4, forDevice: "laptop-cooling" },
  { id: "part-liion-600mah", sku: "FB-AUD-600B", name: "3.7V 600mAh Protected Li-Po Cell", priceUsd: 11, stock: 5, forDevice: "anc-headphones" },
  { id: "part-earpads-pair", sku: "FB-AUD-PAD", name: "Memory Foam Replacement Earpads", priceUsd: 9, stock: 10, forDevice: "anc-headphones" },
  { id: "part-worm-gear", sku: "FB-MIX-WORM", name: "Nylon Sacrificial Worm Gear", priceUsd: 13, stock: 6, forDevice: "stand-mixer" },
  { id: "part-food-grease", sku: "FB-MIX-GRS", name: "NSF H1 Food-Grade Gear Grease", priceUsd: 6, stock: 9, forDevice: "stand-mixer" },
];

export const BENCH_SLOTS = [
  { id: "sat-1000-micro", day: "Saturday", time: "10:00", bench: "Bench A1", equipment: "Micro-Soldering Station", mentor: "Maya Lin (EE)", available: true },
  { id: "sat-1130-multi", day: "Saturday", time: "11:30", bench: "Bench B2", equipment: "Multimeter & Descale Bench", mentor: "Carlos Vega", available: true },
  { id: "sat-1330-bike", day: "Saturday", time: "13:30", bench: "Bench C1", equipment: "Bike Torque Stand", mentor: "Priya Patel", available: true },
  { id: "sat-1400-micro", day: "Saturday", time: "14:00", bench: "Bench A2", equipment: "Micro-Soldering Station", mentor: "Kenji Sato", available: true },
  { id: "sat-1530-press", day: "Saturday", time: "15:30", bench: "Bench D1", equipment: "Mechanical Press & Gear Bay", mentor: "Elena Rossi", available: true },
  { id: "sun-1100-multi", day: "Sunday", time: "11:00", bench: "Bench B1", equipment: "Multimeter & Descale Bench", mentor: "Carlos Vega", available: true },
];

const state = {
  stateVersion: 0,
  selectedDeviceId: "espresso-machine",
  partsStock: Object.fromEntries(SPARE_PARTS.map((p) => [p.id, p.stock])),
  reservedParts: [], // [{ partId, quantity }]
  benchSlots: BENCH_SLOTS.map((s) => ({ ...s })),
  bookings: [],
  communityCo2SavedKg: 142,
  communityMoneySavedUsd: 2680,
  traceLog: [],
};

export function pushTraceEvent(kind, summary, detail = "") {
  state.traceLog.unshift({
    ts: new Date().toLocaleTimeString(),
    kind,
    summary,
    detail,
  });
  if (state.traceLog.length > 25) state.traceLog.pop();
  renderTraceLog();
}

export function getWorkshopState() {
  const reservedDetails = state.reservedParts.map(({ partId, quantity }) => {
    const part = SPARE_PARTS.find((p) => p.id === partId);
    return {
      partId,
      sku: part?.sku ?? "",
      name: part?.name ?? partId,
      quantity,
      unitPriceUsd: part?.priceUsd ?? 0,
      lineTotalUsd: (part?.priceUsd ?? 0) * quantity,
    };
  });
  const partsTotalUsd = reservedDetails.reduce((s, i) => s + i.lineTotalUsd, 0);

  return {
    stateVersion: state.stateVersion,
    selectedDeviceId: state.selectedDeviceId,
    devices: REPAIR_CATALOG,
    partsInventory: SPARE_PARTS.map((p) => ({
      ...p,
      availableStock: state.partsStock[p.id] ?? 0,
    })),
    reservedParts: reservedDetails,
    partsTotalUsd,
    benchSlots: state.benchSlots,
    latestBooking: state.bookings[0] ?? null,
    totalBookingsCount: state.bookings.length,
    impact: {
      communityCo2SavedKg: state.communityCo2SavedKg,
      communityMoneySavedUsd: state.communityMoneySavedUsd,
    },
  };
}

export function diagnoseDevice({ deviceId, symptomQuery = "" }) {
  const device = REPAIR_CATALOG.find((d) => d.id === deviceId);
  if (!device) {
    throw new Error(`Unknown deviceId "${deviceId}". Valid IDs: ${REPAIR_CATALOG.map((d) => d.id).join(", ")}`);
  }
  state.selectedDeviceId = device.id;
  const q = symptomQuery.toLowerCase();
  const matchedSymptoms = q
    ? device.symptoms.filter((s) => q.includes(s.split(" ")[0]) || s.includes(q))
    : device.symptoms;
  const parts = device.recommendedPartIds.map((pid) => {
    const p = SPARE_PARTS.find((x) => x.id === pid);
    return { ...p, availableStock: state.partsStock[pid] ?? 0 };
  });
  const matchingSlots = state.benchSlots.filter(
    (s) => s.available && s.equipment === device.requiredEquipment
  );
  const netSavingsUsd = Math.max(0, device.replacementUsd - device.estRepairUsd);
  pushTraceEvent("ACTION:READ", `diagnose_device(${device.id})`, `Safety: ${device.safetyLevel}, Save $${netSavingsUsd}, ${device.co2SavedKg}kg CO2`);
  renderAll();
  return {
    device: device.name,
    deviceId: device.id,
    safetyLevel: device.safetyLevel,
    safetyNote: device.safetyNote,
    likelyCause: device.commonCause,
    matchedSymptoms,
    recommendedParts: parts,
    requiredEquipment: device.requiredEquipment,
    matchingOpenSlots: matchingSlots,
    economics: {
      estRepairUsd: device.estRepairUsd,
      replacementUsd: device.replacementUsd,
      netSavingsUsd,
      co2SavedKg: device.co2SavedKg,
    },
    recommendation: "Repair recommended — saves money and prevents e-waste.",
  };
}

export function reserveSparePart({ partId, quantity }) {
  const part = SPARE_PARTS.find((p) => p.id === partId);
  if (!part) throw new Error(`Unknown partId "${partId}"`);
  const avail = state.partsStock[partId] ?? 0;
  if (quantity < 1 || quantity > avail) {
    throw new Error(`Requested ${quantity} of ${part.name}, but only ${avail} left in stock.`);
  }
  state.partsStock[partId] = avail - quantity;
  const existing = state.reservedParts.find((r) => r.partId === partId);
  if (existing) existing.quantity += quantity;
  else state.reservedParts.push({ partId, quantity });
  state.stateVersion += 1;
  pushTraceEvent("ACTION:WRITE", `reserve_spare_part(${part.sku} ×${quantity})`, `Remaining stock: ${state.partsStock[partId]}`);
  renderAll();
  return getWorkshopState();
}

export function clearPartReservations() {
  for (const r of state.reservedParts) {
    state.partsStock[r.partId] = (state.partsStock[r.partId] ?? 0) + r.quantity;
  }
  state.reservedParts = [];
  state.stateVersion += 1;
  pushTraceEvent("ACTION:WRITE", "clear_part_reservations()", "Returned all reserved parts to workshop stock");
  renderAll();
  return getWorkshopState();
}

export function bookRepairBench({ memberName, deviceId, slotId, expectedStateVersion }) {
  if (expectedStateVersion !== undefined && expectedStateVersion !== state.stateVersion) {
    throw new Error(
      `Workshop state changed (expected v${expectedStateVersion}, current v${state.stateVersion}). Please review updated parts/slots before booking.`
    );
  }
  const slot = state.benchSlots.find((s) => s.id === slotId);
  if (!slot) throw new Error(`Unknown slotId "${slotId}"`);
  if (!slot.available) throw new Error(`Slot ${slot.day} ${slot.time} (${slot.bench}) is already booked.`);
  const device = REPAIR_CATALOG.find((d) => d.id === deviceId);
  if (!device) throw new Error(`Unknown deviceId "${deviceId}"`);

  slot.available = false;
  const confirmationCode = `FB-${Math.floor(100000 + Math.random() * 900000)}`;
  const reservedSnapshot = getWorkshopState().reservedParts;
  const partsTotalUsd = reservedSnapshot.reduce((s, i) => s + i.lineTotalUsd, 0);

  const booking = {
    confirmationCode,
    memberName: memberName.trim(),
    deviceId: device.id,
    deviceName: device.name,
    slotId: slot.id,
    schedule: `${slot.day} ${slot.time}`,
    bench: slot.bench,
    equipment: slot.equipment,
    mentor: slot.mentor,
    reservedParts: reservedSnapshot,
    partsTotalUsd,
    co2SavedKg: device.co2SavedKg,
    moneySavedUsd: Math.max(0, device.replacementUsd - (partsTotalUsd || device.estRepairUsd)),
    createdAt: new Date().toISOString(),
  };

  state.bookings.unshift(booking);
  state.reservedParts = [];
  state.communityCo2SavedKg += booking.co2SavedKg;
  state.communityMoneySavedUsd += booking.moneySavedUsd;
  state.stateVersion += 1;

  pushTraceEvent("ACTION:IRREVERSIBLE", `book_repair_bench(${confirmationCode})`, `${booking.memberName} @ ${booking.bench} (${booking.schedule})`);
  renderAll();
  return booking;
}

// ---------- DOM Rendering ----------
function renderAll() {
  if (typeof document === "undefined") return;
  renderImpactBar();
  renderDeviceGrid();
  renderPartsList();
  renderBenchSlots();
  renderBookingReceipt();
  renderTraceLog();
}

function renderImpactBar() {
  const co2El = document.querySelector("#metric-co2");
  const usdEl = document.querySelector("#metric-usd");
  const bkgEl = document.querySelector("#metric-bookings");
  if (co2El) co2El.textContent = `${state.communityCo2SavedKg} kg`;
  if (usdEl) usdEl.textContent = `$${state.communityMoneySavedUsd.toLocaleString()}`;
  if (bkgEl) bkgEl.textContent = String(state.bookings.length + 18);
}

function renderDeviceGrid() {
  const container = document.querySelector("#device-grid");
  if (!container) return;
  container.innerHTML = REPAIR_CATALOG.map((d) => {
    const active = d.id === state.selectedDeviceId;
    const savings = d.replacementUsd - d.estRepairUsd;
    return `
      <article class="device-card ${active ? "selected" : ""}" data-device="${d.id}">
        <div class="device-top">
          <span class="cat-pill">${d.category}</span>
          <span class="safety-pill ${d.safetyLevel}">${d.safetyLevel} VOLTAGE/RISK</span>
        </div>
        <h3>${d.name}</h3>
        <p class="cause">${d.commonCause}</p>
        <p class="safety-note">⚠ ${d.safetyNote}</p>
        <div class="econ-row">
          <span>Repair ~$${d.estRepairUsd} vs. New $${d.replacementUsd}</span>
          <strong class="save-chip">Save $${savings} · ${d.co2SavedKg}kg CO₂</strong>
        </div>
        <div class="device-foot">
          <span class="equip-tag">🔧 ${d.requiredEquipment}</span>
          <button type="button" class="mini-btn" data-select-device="${d.id}">
            ${active ? "Selected ✓" : "Inspect Parts"}
          </button>
        </div>
      </article>
    `;
  }).join("");

  container.querySelectorAll("[data-select-device]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selectedDeviceId = btn.getAttribute("data-select-device");
      renderAll();
    });
  });
}

function renderPartsList() {
  const container = document.querySelector("#parts-list");
  const kitEl = document.querySelector("#reserved-kit");
  if (!container || !kitEl) return;

  const relevant = SPARE_PARTS.filter((p) => p.forDevice === state.selectedDeviceId);
  const others = SPARE_PARTS.filter((p) => p.forDevice !== state.selectedDeviceId);
  const ordered = [...relevant, ...others.slice(0, 4)];

  container.innerHTML = ordered
    .map((p) => {
      const avail = state.partsStock[p.id] ?? 0;
      const isMatch = p.forDevice === state.selectedDeviceId;
      return `
        <div class="part-row ${isMatch ? "recommended" : ""}">
          <div>
            <div class="part-name">${p.name} ${isMatch ? '<span class="match-tag">Recommended</span>' : ""}</div>
            <div class="part-meta">${p.sku} · $${p.priceUsd} · ${avail} in stock</div>
          </div>
          <button type="button" class="mini-btn" data-reserve-part="${p.id}" ${avail <= 0 ? "disabled" : ""}>
            + Reserve
          </button>
        </div>
      `;
    })
    .join("");

  container.querySelectorAll("[data-reserve-part]").forEach((btn) => {
    btn.addEventListener("click", () => {
      try {
        reserveSparePart({ partId: btn.getAttribute("data-reserve-part"), quantity: 1 });
      } catch (err) {
        alert(err.message);
      }
    });
  });

  const ws = getWorkshopState();
  if (ws.reservedParts.length === 0) {
    kitEl.innerHTML = `<p class="muted">No spare parts reserved yet. Click "+ Reserve" or ask the FixBay Agent!</p>`;
  } else {
    kitEl.innerHTML = `
      <ul class="kit-ul">
        ${ws.reservedParts
          .map((r) => `<li><span>${r.name} ×${r.quantity}</span><strong>$${r.lineTotalUsd}</strong></li>`)
          .join("")}
      </ul>
      <div class="kit-foot">
        <span>Parts Kit Total: <strong>$${ws.partsTotalUsd}</strong></span>
        <button type="button" class="link-btn" id="clear-kit-btn">Clear kit</button>
      </div>
    `;
    document.querySelector("#clear-kit-btn")?.addEventListener("click", () => clearPartReservations());
  }
}

function renderBenchSlots() {
  const select = document.querySelector("#slot-select");
  const deviceSelect = document.querySelector("#device-select");
  if (deviceSelect) {
    deviceSelect.innerHTML = REPAIR_CATALOG.map(
      (d) => `<option value="${d.id}" ${d.id === state.selectedDeviceId ? "selected" : ""}>${d.name}</option>`
    ).join("");
  }
  if (select) {
    select.innerHTML = state.benchSlots
      .map(
        (s) =>
          `<option value="${s.id}" ${!s.available ? "disabled" : ""}>${s.day} ${s.time} — ${s.bench} (${s.equipment}) ${
            s.available ? "" : "[BOOKED]"
          }</option>`
      )
      .join("");
  }
}

function renderBookingReceipt() {
  const box = document.querySelector("#booking-receipt");
  if (!box) return;
  const latest = state.bookings[0];
  if (!latest) {
    box.hidden = true;
    return;
  }
  box.hidden = false;
  box.innerHTML = `
    <div class="receipt-head">✅ Bench Reserved · Confirmation <code>${latest.confirmationCode}</code></div>
    <p><strong>${latest.memberName}</strong> · ${latest.deviceName}</p>
    <p>📅 ${latest.schedule} · ${latest.bench} (${latest.equipment}) · Mentor: ${latest.mentor}</p>
    <p>🌱 Impact: Saved <strong>$${latest.moneySavedUsd}</strong> &amp; avoided <strong>${latest.co2SavedKg} kg CO₂</strong></p>
  `;
}

function renderTraceLog() {
  if (typeof document === "undefined") return;
  const el = document.querySelector("#trace-log");
  if (!el) return;
  if (state.traceLog.length === 0) {
    el.innerHTML = `<div class="trace-empty">Waiting for agentic runtime or user actions...</div>`;
    return;
  }
  el.innerHTML = state.traceLog
    .map(
      (t) => `
      <div class="trace-row">
        <span class="trace-ts">${t.ts}</span>
        <span class="trace-kind">${t.kind}</span>
        <span class="trace-msg"><strong>${t.summary}</strong> ${t.detail ? `— ${t.detail}` : ""}</span>
      </div>`
    )
    .join("");
}

if (typeof document !== "undefined") {
document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  const form = document.querySelector("#booking-form");
  const errEl = document.querySelector("#booking-error");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (errEl) errEl.textContent = "";
    const fd = new FormData(form);
    try {
      bookRepairBench({
        memberName: String(fd.get("memberName") || ""),
        deviceId: String(fd.get("deviceId") || state.selectedDeviceId),
        slotId: String(fd.get("slotId") || ""),
        expectedStateVersion: state.stateVersion,
      });
      form.reset();
    } catch (err) {
      if (errEl) errEl.textContent = err.message;
    }
  });
});
}
