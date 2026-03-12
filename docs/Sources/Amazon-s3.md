---
title: Amazon S3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Amazon S3 as a Source

<div className="hero-image">
  <img src="\img\data-source-flow-s3.svg" alt="DeliveryHub Platform" />
</div>

<div className="hero-banner">
  <h2>Ingest Files from Your S3 Buckets into DeliveryHub</h2>
</div>

<Admonition type="info" icon="🪣" title="Object Storage Source">
DeliveryHub supports **Amazon S3** as a source, allowing you to read files stored in S3 and use them in shares and transfer workflows.
</Admonition>

---

## What You Can Do with the S3 Source

<div className="feature-grid">
  <div className="feature-item">
    <span className="feature-icon">📂</span>
    <div>
      <strong>Ingest Structured Files</strong>
      <p>Load CSV, Parquet, JSON, or other structured objects from one or more buckets.</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">⚡</span>
    <div>
      <strong>Handle Large Volumes</strong>
      <p>Work with large files and partitions without manual sharding or batching.</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">🔁</span>
    <div>
      <strong>Incremental Sync</strong>
      <p>Ingest new or updated objects based on prefixes, timestamps, or other patterns.</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">🛡</span>
    <div>
      <strong>Secure Access</strong>
      <p>Use AWS IAM to tightly control which buckets and paths DeliveryHub can read.</p>
    </div>
  </div>
</div>

---

## How the S3 Source Works

```text
Amazon S3 Bucket → DeliveryHub Source Connection → Share / Transfer → Destination
```

<div className="workflow-steps">

1. **🔗 Authorize DeliveryHub**  
   Configure AWS credentials or roles that grant DeliveryHub read access to your S3 buckets.

2. **📁 Select Buckets & Paths**  
   Choose which buckets, prefixes, or folders DeliveryHub should monitor and ingest from.

3. **⚙ Define Source Scope**  
  Select the files, prefixes, formats, and source settings DeliveryHub should use.

4. **🚀 Deliver Data**  
  Use the configured source in shares and transfers to send data to your destinations.

</div>

---

## Required AWS Permissions

At minimum, the DeliveryHub S3 source integration needs read access to the buckets and prefixes you configure.

<div className="feature-table">

| Permission | Why It’s Needed |
|-----------|-----------------|
| **s3:ListBucket** | Allows DeliveryHub to discover objects within the configured buckets/prefixes. |
| **s3:GetObject** | Allows DeliveryHub to read file contents during source discovery and transfer execution. |

</div>

You can scope these permissions to specific buckets and prefixes using IAM policies to follow least-privilege best practices.

---

## Related Docs

- [Sources in DeliveryHub](/docs/Sources/)
