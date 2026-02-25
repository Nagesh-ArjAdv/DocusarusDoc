---
title: Google Cloud Storage
---

import Admonition from '@theme/Admonition';

# <span style={{color: 'var(--ifm-color-primary)'}}>Google Cloud Storage — DeliveryHub Source</span>

<div className="hero-banner">
  <h2>Ingest Data from Google Cloud Storage into DeliveryHub</h2>
  <p className="hero-sub">Scale your data pipelines with GCP's high-performance object storage.</p>
</div>

<Admonition type="info" icon="☁️" title="GCS in DeliveryHub">
DeliveryHub integrates seamlessly with Google Cloud Storage (GCS), enabling you to ingest structured files from GCP buckets into Hubhouse Tables and power your data products at scale.
</Admonition>

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Why Google Cloud Storage with DeliveryHub?</span>

GCS pairs perfectly with DeliveryHub for enterprise-grade data ingestion:

<div className="feature-grid">
  <div className="feature-item">
    <span className="feature-icon">⚡</span>
    <div>
      <strong>Global Scale & Speed</strong>
      <p>Leverage GCP's multi-region infrastructure for high-throughput ingestion without latency bottlenecks.</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">🔐</span>
    <div>
      <strong>Enterprise Security</strong>
      <p>Use IAM, VPC Service Controls, and signed URLs for granular, auditable access control.</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">📊</span>
    <div>
      <strong>Native Format Support</strong>
      <p>Ingest Parquet, Avro, JSON, CSV, and other structured formats natively from GCS.</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">🔄</span>
    <div>
      <strong>Reliable Sync</strong>
      <p>Automatic retry logic, incremental ingestion, and change tracking for consistent data delivery.</p>
    </div>
  </div>
</div>

---

## <span style={{color: 'var(--ifm-color-primary)'}}>DeliveryHub GCS Service Account</span>

DeliveryHub accesses your GCS bucket via a dedicated service account. You grant this service account a custom IAM role with only the permissions DeliveryHub needs.

**Recommended Approach:**
- Create a custom IAM role in your GCP project
- Assign only the required permissions (listed below)
- Bind the DeliveryHub service account to this role on your source bucket

This ensures least-privilege security and auditability.

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Required Permissions</span>

Grant the DeliveryHub service account these permissions on your GCS bucket:

| Permission | Purpose |
|-----------|---------|
| `storage.buckets.get` | Read bucket metadata and configuration |
| `storage.objects.get` | Retrieve individual object contents |
| `storage.objects.list` | List objects in bucket and folders |

These minimal permissions allow DeliveryHub to discover and ingest your data files while blocking destructive operations.

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Regional Support</span>

DeliveryHub integrates with GCS in regions that support **Google Cloud Functions (Gen2)**. 

<Admonition type="warning" title="Check region support">
Visit [Google Cloud Functions Locations](https://cloud.google.com/functions/locations) to verify your region is supported before configuring your source.
</Admonition>

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Setup Path</span>

1. **Create a custom IAM role** in GCP with the 3 required permissions
2. **Assign the role** to the DeliveryHub service account on your bucket
3. **Configure the source** in DeliveryHub (see setup guide for step-by-step instructions)

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Related Resources</span>

- [Google Cloud Storage Setup Guide](/docs/Sources/Google-cloud-storage/setup-guide) — Step-by-step configuration
- [GCP IAM Permissions Reference](https://cloud.google.com/iam/docs/permissions-reference) — Full permission details
- [What is a Hubhouse Table](/docs/hubhouse/what-is-a-hubhouse-table) — Learn about Hubhouse Tables
- [What are Data Products](/docs/hubhouse/what-are-data-products) — Build and deliver data products
