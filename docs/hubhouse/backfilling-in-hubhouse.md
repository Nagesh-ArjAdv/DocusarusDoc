---
id: backfilling-in-hubhouse
title: Backfilling in Hubhouse
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Backfilling in Hubhouse

<div className="hero-banner">
  <h2>Make Your Historical Data Complete and Trustworthy</h2>
</div>

<Admonition type="info" icon="🕰" title="Fixing the Past, Confidently">
**Backfilling** in Hubhouse is the process of recomputing or replenishing **historical data** so that your Hubhouse Tables and Data Products are complete, accurate, and ready for downstream fulfillment.  
You correct history **once** in Hubhouse—and DeliveryHub takes care of pushing the updated truth everywhere it needs to go.
</Admonition>

---

## When You Need a Backfill

Backfills are typically used when:

<Tabs>
  <TabItem value="onboarding" label="📥 Initial Onboarding" default>
    You’re onboarding an existing system and want **years of history**, not just new events going forward.
  </TabItem>

  <TabItem value="gaps" label="⚠️ Filling Gaps">
    Source outages, schema changes, or pipeline issues left **missing or partial data** that needs to be repaired.
  </TabItem>

  <TabItem value="logic" label="🧠 New Business Logic">
    Metric definitions, joins, or filters have changed and must be **applied retroactively** to historical data.
  </TabItem>

  <TabItem value="products" label="🆕 New Products">
    A new Data Product requires history that was never previously materialized.
  </TabItem>
</Tabs>

Backfills ensure consumers see a **consistent story over time**, not just correct data from today onward.

---

## How Backfilling Works Conceptually

At a high level, a Hubhouse backfill:

<div className="workflow-steps">

1. **🎯 Define the Scope**  
   Choose which sources, Hubhouse Tables, and time ranges need to be recomputed.

2. **🔁 Re-ingest or Recompute**  
   Hubhouse reads from upstream systems or raw storage and rebuilds the affected tables.

3. **📦 Refresh Dependent Products**  
   Data Products and other materializations that depend on those tables are brought back into sync.

4. **🚚 Resume Normal Fulfillment**  
   Once history is correct, incremental updates and ongoing data fulfillment continue as usual.

</div>

---

## Best Practices

<div className="feature-grid">
  <div className="feature-item">
    <span className="feature-icon">🎯</span>
    <div>
      <strong>Scope Carefully</strong>
      <p>Limit the backfill to the smallest time range and set of tables that satisfy your use case.</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">📣</span>
    <div>
      <strong>Communicate with Consumers</strong>
      <p>Align with downstream teams on timing and expectations, especially for large or breaking changes.</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">✅</span>
    <div>
      <strong>Validate Before & After</strong>
      <p>Compare key metrics (counts, sums, distincts) to confirm that the backfill produced the intended result.</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">🛑</span>
    <div>
      <strong>Coordinate with Fulfillment</strong>
      <p>For critical destinations, consider pausing or throttling deliveries during heavy backfills.</p>
    </div>
  </div>
</div>

---

## Backfilling + Data Fulfillment

Backfills and data fulfillment are designed to work together:

```text
Backfilling  →  Corrects historical data in Hubhouse
Fulfillment  →  Delivers that corrected history to every destination
```

- **Backfilling** focuses on **data correctness over time** in Hubhouse Tables and Data Products.
- **Data fulfillment** ensures that corrected data is **propagated reliably** to all configured destinations.

Once a backfill completes:

- Historical views in Hubhouse are consistent.
- Future fulfillment runs will automatically **deliver the updated truth** without reconfiguring destinations.

---

## Example Scenarios

<Tabs groupId="backfill-use-cases">
  <TabItem value="pricing" label="Pricing Corrections" default>

### Correcting Historical Pricing

<div className="checklist">

- ✅ You discover a bug in a pricing calculation used for the last three months.  
- ✅ You update the logic in Hubhouse, run a backfill for that period, and let DeliveryHub re-deliver corrected revenue tables to finance and analytics destinations.

</div>

  </TabItem>

  <TabItem value="attributes" label="Customer Attributes">

### Rebuilding Customer Attributes

<div className="checklist">

- ✅ A new definition of "active customer" is adopted across the business.  
- ✅ You backfill customer-attribute tables so all downstream dashboards, models, and extracts share the same definition historically.

</div>

  </TabItem>

  <TabItem value="migration" label="System Migration">

### Migrating from Legacy Systems

<div className="checklist">

- ✅ You migrate from a legacy operational system to a new platform.  
- ✅ You backfill Hubhouse with historical data from both systems, ensuring continuous, unified history for analytics and reporting.

</div>

  </TabItem>
</Tabs>

---

## Related Docs

- [What is Hubhouse](/docs/hubhouse/what-is-hubhouse)
- [What is a Hubhouse Table](/docs/hubhouse/what-is-a-hubhouse-table)
- [What are Data Products](/docs/hubhouse/what-are-data-products)
- [What is Data Fulfillment](/docs/hubhouse/what-is-data-fulfillment)
