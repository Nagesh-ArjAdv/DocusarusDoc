---
title: Sources
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';
import ThemedImage from '@theme/ThemedImage';

# Sources in DeliveryHub

<div className="hero-banner">
  <h2>Bring Your Data into DeliveryHub</h2>
</div>

<Admonition type="info" icon="📥" title="Connect Once, Reuse Everywhere">
**Sources** are how data first enters DeliveryHub.  
You connect operational systems, files, and platforms so they can be used in shares and delivery workflows.
</Admonition>

<div style={{textAlign: 'center', margin: '2rem 0'}}>
  <ThemedImage
    alt="Data source to DeliveryHub flow"
    sources={{
      light: '/img/data-source-flow.svg',
      dark: '/img/data-source-flow-dark.svg',
    }}
    style={{maxWidth: '100%', maxHeight: '300px'}}
  />
</div>

---

## What Is a Source?

A source is any external system that DeliveryHub can read from, such as:

- Object storage (e.g., Amazon S3)
- Data warehouses or databases
- SaaS applications
- Event streams or logs

Once connected, DeliveryHub can use these systems as the source for shares, transfers, and destination delivery.

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
          <p>Pull from existing analytics systems for downstream delivery and consumer access.</p>
        </div>
      </div>
      <div className="feature-item">
        <span className="feature-icon">🗄</span>
        <div>
          <strong>Operational Datastores</strong>
          <p>Read key tables without adding custom extraction pipelines to transactional workloads.</p>
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
Source System → DeliveryHub Source Connection → Share / Transfer → Destination
```

<div className="workflow-steps">

1. **🔗 Connect a Source**  
   Provide credentials and connection details for the system you want DeliveryHub to read from.

2. **📂 Select Data to Ingest**  
   Choose buckets, folders, or tables and define how DeliveryHub should interpret them.

3. **⚙ Configure Delivery**  
  Use the source in a share and define the transfer behavior that matches your delivery pattern.

4. **🚀 Deliver to Destinations**  
  Run transfers to the destinations your consumers or internal teams need.

</div>

---

## Available Sources Today

- [Amazon S3](/docs/Sources/Amazon-s3)

More sources are on the roadmap. The overall experience is the same: **connect once, configure delivery, and reuse sources across shares and destinations**.
