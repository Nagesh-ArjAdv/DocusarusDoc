---
title: Google BigQuery
---

import Admonition from '@theme/Admonition';

# Google BigQuery
Extract data from BigQuery using SQL queries and ingest into Hubhouse Tables.
<div className="hero-image">
  <img src="\img\data-source-flow-bigquery.svg" alt="DeliveryHub Platform" />
</div>

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Key Features</span>

| Feature | Benefit |
|---------|---------|
| **SQL Extraction** | Define queries to select exactly what you need |
| **Serverless Scale** | Handle terabyte+ datasets natively |
| **Service Account Auth** | Secure, auditable access control |
| **Incremental Sync** | Schedule timestamp-based extracts |

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Data Flow</span>

```
BigQuery → SQL Query → Service Account → DeliveryHub → Hubhouse Table → Data Products
```

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Requirements</span>

- **Service Account** with `BigQuery Data Viewer` and `BigQuery Job User` roles
- **Permissions** scoped to required datasets (project or dataset level)
- **JSON Key** for authentication

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Supported Queries</span>

✅ Standard SQL (SELECT, joins, aggregations)  
✅ CTEs and subqueries  
✅ Window functions  
✅ Parameterized queries (for incremental syncs)

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Setup</span>

1. [Create service account + JSON key](/docs/Sources/Bigquery/setup-guide)
2. Grant BigQuery roles
3. Configure source in DeliveryHub

---

[Setup Guide](/docs/Sources/Bigquery/setup-guide)
