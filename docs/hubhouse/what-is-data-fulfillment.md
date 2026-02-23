---
id: what-is-data-fulfillment
title: What is Data Fulfillment?
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Data Fulfillment in DeliveryHub

<div className="hero-banner">
  <h2>Turn Trusted Data into Reliable Deliveries</h2>
</div>

<Admonition type="info" icon="🚚" title="From Storage to Arrival">
**Data Fulfillment** in DeliveryHub is the end-to-end process of taking trusted data from **Hubhouse** and delivering the **right slices** of it to the **right destinations**—securely, reliably, and on schedule.  
It’s how DeliveryHub turns your centralized data into real-world outcomes for teams, systems, and partners.
</Admonition>

---

## What Data Fulfillment Does

Data fulfillment ensures that once data is modeled in Hubhouse, it:

- Arrives **where** it’s needed (warehouses, lakes, caches, APIs, partner systems)
- Arrives **how** it’s needed (schema, filters, formats, and SLAs)
- Arrives **when** it’s needed (batch, micro-batch, or event-driven)

At a high level:

```text
Sources → Hubhouse Tables → Data Products → Fulfillment → Destinations
```

---

## Core Building Blocks

<Tabs>
  <TabItem value="hubhouse" label="🏗 Hubhouse Tables" default>
    Canonical, analytic-ready replicas of your source data—stored and managed in Hubhouse.
    They are the **single source of truth** that all downstream deliveries depend on.
  </TabItem>

  <TabItem value="products" label="📦 Data Products">
    Curated, reusable slices of Hubhouse Tables—filtered, joined, and enriched with metadata.
    They define **what** should be delivered and to **whom**.
  </TabItem>

  <TabItem value="pipelines" label="⚙️ Fulfillment Pipelines">
    The configuration that defines **where**, **how**, and **how often** Data Products are delivered
    (destinations, formats, schedules, and retry behavior).
  </TabItem>

  <TabItem value="policies" label="🛡 Policies & SLAs">
    Governance rules, retention policies, access controls, and freshness guarantees applied consistently
    across products and destinations.
  </TabItem>
</Tabs>

---

## Why Data Fulfillment Matters

Without centralized fulfillment, every team or integration typically:

- Reconnects directly to upstream systems
- Rebuilds overlapping transformations
- Manages its own fragile schedules and error handling

This creates:

- **Inconsistent logic** across destinations
- **Higher risk** of data drift and outages
- **Slower time-to-value** for new use cases

With DeliveryHub:

- Business logic is defined **once** in Hubhouse and reused everywhere.
- Fulfillment behavior is **centralized and observable**.
- New destinations can be added by **reusing existing Data Products**, not rebuilding from scratch.

---

## Key Capabilities

<div className="feature-table">

| Capability | What You Can Do |
|-----------|-----------------|
| **Multi-Destination Delivery** | Deliver the same Data Product to warehouses, lakes, caches, APIs, and partner systems without redefining it each time. |
| **Schedule & Mode Control** | Choose between batch, micro-batch, or near-real-time patterns based on business needs. |
| **Schema & Contract Management** | Maintain stable delivery contracts to downstream consumers—even as underlying Hubhouse logic evolves. |
| **Monitoring & Alerts** | Track freshness, delivery success, and failures, and alert teams when SLAs are at risk. |
| **Access & Governance** | Apply consistent access controls and policies across all fulfilled products and destinations. |

</div>

---

## Common Use Cases

<Tabs groupId="fulfillment-use-cases">
  <TabItem value="analytics" label="Analytics & BI" default>

### Power Data Warehouses & BI Tools

<div className="checklist">

- ✅ Keep Snowflake, Databricks, or BigQuery refreshed with curated analytics tables  
- ✅ Ensure dashboards receive **consistent metrics** across teams  
- ✅ Enforce central governance while enabling self-service reporting  

</div>

  </TabItem>

  <TabItem value="operational" label="Operational Systems">

### Feed Operational & Real-Time Systems

<div className="checklist">

- ✅ Maintain up-to-date cache layers (e.g., Redis) for low-latency experiences  
- ✅ Power recommendation engines, pricing services, or routing logic  
- ✅ Drive in-product experiences with clean, consistent data  

</div>

  </TabItem>

  <TabItem value="external" label="External & Partners">

### Serve Partners & Customers

<div className="checklist">

- ✅ Deliver contractual data feeds to enterprise customers  
- ✅ Power partner portals with governed, purpose-built datasets  
- ✅ Support compliance exports and audit-ready reporting  

</div>

  </TabItem>
</Tabs>

---

## How It Works End-to-End

<div className="workflow-steps">

1. **📦 Model in Hubhouse**  
   Ingest and organize your source data as Hubhouse Tables.

2. **✂️ Define Data Products**  
   Create filtered, joined, and documented products that reflect what consumers need.

3. **🛰 Configure Fulfillment**  
   Choose destinations, formats, schedules, and SLA/policy settings.

4. **🚀 Deliver & Monitor**  
   Let DeliveryHub execute deliveries, track freshness, and surface issues.

5. **🔄 Evolve Safely**  
   Update Data Products, run backfills, or adjust policies while keeping downstream contracts stable.

</div>

---

## Relationship to Backfilling

Backfilling in Hubhouse focuses on **making history correct**—recomputing or replenishing past data.  
Data fulfillment focuses on **making the present and future reliable**—ensuring that trusted data continuously reaches its destinations.

When you run a backfill:

- Hubhouse Tables and Data Products are updated to reflect corrected history.
- Data fulfillment ensures those corrected products are **re-delivered** to all configured destinations.

---

## Related Docs

- [What is Hubhouse](/docs/hubhouse/what-is-hubhouse)
- [What is a Hubhouse Table](/docs/hubhouse/what-is-a-hubhouse-table)
- [What are Data Products](/docs/hubhouse/what-are-data-products)
- [Backfilling in Hubhouse](/docs/hubhouse/backfilling-in-hubhouse)
