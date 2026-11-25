# 🔧 FixBay — Open Agentic Community Repair Café

> **Built for the 2026 Open Agentic Web Challenge (Cognizant)**  
> A fully conforming **Open Agentic Website** (MVP Profile 0.2/0.3) combining a right-to-repair community workshop with a 4-agent Neuro SAN network, 5 bounded page-local site actions (`read` / `write` / `irreversible`), BYOK / Mozilla Otari LLM routing, and a reusable live **Open Agentic Web Protocol & Action Trace Inspector**.

---

## ✨ Conforming Open Agentic Web Artifacts

| Artifact | Purpose |
| :--- | :--- |
| [`agent-manifest.json`](./agent-manifest.json) | Public machine-readable index declaring `fixbay_repair_assistant`, BYOK/Otari LLM router, `nsdeploy-link/v1`, and registered `actions`. |
| [`fixbay_repair_assistant.network.json`](./fixbay_repair_assistant.network.json) | 4-agent Neuro SAN network (`fixbay_coordinator` + `diagnostics_specialist` + `parts_inventory_specialist` + `bench_scheduler_specialist`). |
| [`links.json`](./links.json) | Public peer-network link registry (`version: 1`). |
| [`runtime/`](./runtime/) | Official self-contained browser runtime (`runtime/index.js` + `runtime/sandbox-worker.js`). |
| [`fixbay-actions.js`](./fixbay-actions.js) | Exposes 5 bounded-JSON-Schema actions (`get_workshop_state`, `diagnose_device`, `reserve_spare_part`, `clear_part_reservations`, `book_repair_bench`). |

## 🌱 Real-World Problem & Community Tooling

Consumers discard millions of repairable appliances and electronics every year due to uncertainty about electrical safety, spare part SKUs, and workbench tool access. **FixBay** lets both humans and external AI agents:
1. Triage device symptoms with explicit **HIGH / MODERATE / LOW electrical & Li-ion safety warnings** (`website_diagnose_device`).
2. Check live spare-part stock and reserve parts directly into the shared workshop kit (`website_reserve_spare_part`).
3. Book an equipment-matched volunteer repair bench with a mandatory human confirmation review step (`website_book_repair_bench`, `effect: "irreversible"`).
4. Inspect live `TraceBus` & action execution events using our reusable **Open Agentic Web Protocol & Action Trace Inspector** section at the bottom of the page.
