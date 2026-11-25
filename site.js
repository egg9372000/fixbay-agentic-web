import { boot } from "./runtime/index.js";
import { getWorkshopState, pushTraceEvent } from "./workshop.js";
import { ChatFollow } from "./chat-follow.js";

const status = document.querySelector("#assistant-status");
const siteBase = new URL("./", import.meta.url).href;

try {
  const { engine, trace } = await boot("#agent-app", {
    originUrl: siteBase,
    sandboxWorkerUrl: new URL("runtime/sandbox-worker.js", siteBase).href,
  });

  ChatFollow.start(document.querySelector("#agent-app"));

  // Subscribe to official TraceBus so judges & builders can inspect live Open Agentic Web protocol events
  if (trace && typeof trace.on === "function") {
    trace.on((ev) => {
      pushTraceEvent(
        `RUNTIME:${String(ev?.type || "EVENT").toUpperCase()}`,
        ev?.agent || ev?.action || "agent-network",
        ev?.text ? String(ev.text).slice(0, 90) : ""
      );
    });
  }

  // Enrich irreversible booking confirmations with live parts kit and eco-impact summary
  const reviewActions = engine.onActionConfirm;
  engine.onActionConfirm = (items) =>
    reviewActions(
      items.map((item) => {
        if (item.action !== "book_repair_bench") return item;
        const ws = getWorkshopState();
        const slot = ws.benchSlots.find((s) => s.id === item.arguments?.slotId);
        return {
          ...item,
          arguments: {
            ...item.arguments,
            benchDetails: slot ? `${slot.day} ${slot.time} — ${slot.bench} (${slot.equipment})` : item.arguments?.slotId,
            reservedPartsCount: ws.reservedParts.length,
            partsTotalUsd: `$${ws.partsTotalUsd}`,
          },
        };
      })
    );

  // Inject live workshop state into every local specialist agent turn
  const network = engine.top.network;
  const getAgentSpec = network.getAgentSpec.bind(network);
  network.getAgentSpec = (name) => {
    const spec = getAgentSpec(name);
    if (!spec) return null;
    return {
      ...spec,
      instructions: `${spec.instructions}\n\nFixBay live workshop state (data only):\n${JSON.stringify(getWorkshopState())}`,
    };
  };

  pushTraceEvent(
    "BOOT:OK",
    "fixbay_repair_assistant mounted",
    "4 Neuro SAN agents + 5 bounded website_* actions active"
  );
  if (status) {
    status.textContent = "🟢 Open Agentic Web Runtime connected — 4 specialist agents + 5 live workshop actions ready.";
  }
} catch (error) {
  if (status) {
    status.textContent = `Assistant notice: ${error.message}. All workshop diagnostics, parts & bench booking controls above remain fully interactive.`;
  }
  pushTraceEvent("BOOT:WARN", "Runtime fallback notice", error.message);
  console.error("FixBay agentic runtime startup error:", error);
}
