---
title: Sources
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Sources in DeliveryHub

<div className="hero-banner">
  <h2>Bring Your Data into DeliveryHub</h2>
</div>

<Admonition type="info" icon="📥" title="Connect Once, Reuse Everywhere">
**Sources** are how data first enters DeliveryHub.  
You connect operational systems, files, and platforms to create **Hubhouse Tables** that power Data Products and downstream fulfillment.
</Admonition>

---

## What Is a Source?

A source is any external system that DeliveryHub can read from, such as:

- Object storage (e.g., Amazon S3)
- Data warehouses or databases
- SaaS applications
- Event streams or logs

Once connected, DeliveryHub ingests data from these systems into Hubhouse, where it becomes the foundation for Hubhouse Tables and Data Products.

---

## Source Categories

<Tabs>
  <TabItem value="storage" label="🗂 Object Storage" default>
    <div className="feature-grid">
      <div className="feature-item">
        <span className="feature-icon">🪣</span>
        <div>
          <strong>File & Object Buckets</strong>
          <p>Connect buckets (like Amazon S3) that hold CSV, Parquet, JSON, or other structured files.</p>
        </div>
      </div>
      <div className="feature-item">
        <span className="feature-icon">⚡</span>
        <div>
          <strong>Batch or Micro-Batch Loads</strong>
          <p>Ingest on schedules aligned with how often your files land.</p>
        </div>
      </div>
    </div>
  </TabItem>

  <TabItem value="warehouse" label="🏛 Warehouses & Databases">
    <div className="feature-grid">
      <div className="feature-item">
        <span className="feature-icon">❄️</span>
        <div>
          <strong>Analytic Warehouses</strong>
          <p>Pull from existing analytics systems to unify metrics in Hubhouse.</p>
        </div>
      </div>
      <div className="feature-item">
        <span className="feature-icon">🗄</span>
        <div>
          <strong>Operational Datastores</strong>
          <p>Mirror key tables into Hubhouse without impacting transactional workloads.</p>
        </div>
      </div>
    </div>
  </TabItem>

  <TabItem value="saas" label="🌐 SaaS Platforms">
    <div className="feature-grid">
      <div className="feature-item">
        <span className="feature-icon">📣</span>
        <div>
          <strong>Marketing & Sales Tools</strong>
          <p>Unify campaigns, leads, and accounts from third-party systems.</p>
        </div>
      </div>
      <div className="feature-item">
        <span className="feature-icon">👥</span>
        <div>
          <strong>Customer Systems</strong>
          <p>Bring customer interactions together for analytics and activation.</p>
        </div>
      </div>
    </div>
  </TabItem>
</Tabs>

---

## How Source Connections Work

```text
Source System → DeliveryHub Ingestion → Hubhouse Tables → Data Products → Destinations
```

<div className="workflow-steps">

1. **🔗 Connect a Source**  
   Provide credentials and connection details for the system you want DeliveryHub to read from.

2. **📂 Select Data to Ingest**  
   Choose buckets, folders, or tables and define how DeliveryHub should interpret them.

3. **🏗 Create Hubhouse Tables**  
   Map source data into modeled Hubhouse Tables that are ready for analytics and delivery.

4. **🚀 Power Data Products & Fulfillment**  
   Use those tables to build Data Products and configure fulfillment to downstream destinations.

</div>

---

## Available Sources Today

- [Amazon S3](/docs/Sources/Amazon-s3)

More sources are on the roadmap. The overall experience is the same: **connect once, centralize in Hubhouse, and reuse across all your Data Products and destinations**.
