import {
  REPAIR_CATALOG,
  SPARE_PARTS,
  BENCH_SLOTS,
  getWorkshopState,
  diagnoseDevice,
  reserveSparePart,
  clearPartReservations,
  bookRepairBench,
} from "./workshop.js";

/**
 * Conforming Open Agentic Web Actions Module (declared in agent-manifest.json -> actions.module).
 * Exposes read, write, and irreversible site actions with bounded JSON Schemas.
 */
export function registerActions(actions) {
  actions.register({
    name: "get_workshop_state",
    description:
      "Read live FixBay Repair Café catalog, spare-part stock levels, reserved parts kit, available workbench slots, community eco-impact metrics, and current stateVersion.",
    effect: "read",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    execute: () => getWorkshopState(),
  });

  actions.register({
    name: "diagnose_device",
    description:
      "Run right-to-repair safety & symptom triage for a supported device. Returns electrical/Li-ion safety warnings, likely cause, recommended in-stock spare parts, matching open benches, and dollar + CO2 savings.",
    effect: "read",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      required: ["deviceId"],
      properties: {
        deviceId: { type: "string", enum: REPAIR_CATALOG.map((d) => d.id) },
        symptomQuery: { type: "string", maxLength: 200 },
      },
    },
    execute: (args) => diagnoseDevice(args),
  });

  actions.register({
    name: "reserve_spare_part",
    description:
      "Reserve a quantity of an in-stock spare part for the member's repair kit immediately. Updates live stock on the page.",
    effect: "write",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      required: ["partId", "quantity"],
      properties: {
        partId: { type: "string", enum: SPARE_PARTS.map((p) => p.id) },
        quantity: { type: "integer", minimum: 1, maximum: 5 },
      },
    },
    execute: (args) => reserveSparePart(args),
  });

  actions.register({
    name: "clear_part_reservations",
    description:
      "Release all currently reserved spare parts back into workshop stock.",
    effect: "write",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    execute: () => clearPartReservations(),
  });

  actions.register({
    name: "book_repair_bench",
    description:
      "Book a community repair workbench slot for the member's device and attach their reserved parts kit. Requires user confirmation (irreversible demo booking). Pass current stateVersion as expectedStateVersion.",
    effect: "irreversible",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      required: ["memberName", "deviceId", "slotId", "expectedStateVersion"],
      properties: {
        memberName: { type: "string", minLength: 1, maxLength: 80 },
        deviceId: { type: "string", enum: REPAIR_CATALOG.map((d) => d.id) },
        slotId: { type: "string", enum: BENCH_SLOTS.map((s) => s.id) },
        expectedStateVersion: { type: "integer", minimum: 0 },
      },
    },
    execute: (args) => bookRepairBench(args),
  });
}
