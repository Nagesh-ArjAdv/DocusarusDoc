---
id: what-is-a-hubhouse-table
title: What is a Hubhouse Table?
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Hubhouse Tables in DeliveryHub

<div className="hero-banner">
  <h2>Your Golden Copies for Reusable Delivery</h2>
</div>

<Admonition type="info" icon="📊" title="Golden, Managed Tables">
A **Hubhouse Table** is DeliveryHub's managed, analytic-ready replica of your source data.  
Think of it as a **golden copy**—we keep it up to date, store it in our infrastructure, and make it available for you to filter, transform, and share without touching your source again.
</Admonition>

![hubhouse table](/img/hubhousetable.png)

---

## Why Hubhouse Tables Exist

<Tabs>
  <TabItem value="efficiency" label="💸 Cost & Efficiency" default>
    Moving data directly from source to destination works, but every transfer means reconnecting,
    re-extracting, and re-processing from scratch. That can increase **egress costs**, slow delivery,
    and limit reuse.
  </TabItem>

  <TabItem value="reuse" label="♻️ Reuse & Consistency">
    A Hubhouse Table creates a single, central copy in DeliveryHub. From there, you can distribute it
    to any number of destinations via Data Products **without re-pulling from the source each time**.
  </TabItem>

  <TabItem value="governance" label="🛡 Governance">
    Because Hubhouse Tables live in one place, you get consistent governance, quality checks,
    and schema management across all downstream products and destinations.
  </TabItem>
</Tabs>

---

## How Hubhouse Tables Work

DeliveryHub transforms your source data into targeted, filtered datasets for different destinations—without moving or copying your original systems every time.

```text
Sources → Hubhouse Tables → Data Products → Destinations
```

<div className="workflow-steps">

1. **📥 Ingest from Source**  
   Connect to operational systems, warehouses, or files and load data into Hubhouse.

2. **🏗 Model as Hubhouse Tables**  
   Normalize, partition, and organize data into analytic-ready tables.

3. **✂️ Attach Data Products**  
   Build filtered/joined views that represent exactly what different consumers need.

4. **🚚 Deliver to Destinations**  
   Use DeliveryHub fulfillment to send those products to warehouses, lakes, caches, APIs, and partner systems.

</div>

---

## Key Capabilities

<div className="feature-table">

| Capability | What You Can Do |
|-----------|-----------------|
| **Central Golden Copy** | Maintain one trusted, analytic-ready replica of your source data in Hubhouse. |
| **Reuse Across Products** | Feed many Data Products and destinations without re-extracting from the source. |
| **Schema & Quality Management** | Control schemas, validations, and evolution in a single place. |
| **Performance Optimization** | Store data in formats and layouts optimized for analytics and delivery patterns. |

</div>

---

## Example Flow

The classic example is a **Sales Prospects Upload Table**:

- Raw uploads land in Hubhouse as a **Hubhouse Table**.  
- You define Data Products such as:  
  - "Free Customers Table (US)" – filtered by tier and region  
  - "Customers from Year 2025" – filtered by date range  
- DeliveryHub then fulfills those products to multiple destinations (e.g., AWS storage, Redis cache, Databricks, Snowflake) without ever reconnecting to the original source.

---

## Related Docs

- [What is Hubhouse](/docs/hubhouse/what-is-hubhouse)
- [What are Data Products](/docs/hubhouse/what-are-data-products)
- [What is Data Fulfillment](/docs/hubhouse/what-is-data-fulfillment)
- [Backfilling in Hubhouse](/docs/hubhouse/backfilling-in-hubhouse)