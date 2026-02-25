---
title: Snowflake
---

# <span style={{color: 'var(--ifm-color-primary)'}}>Snowflake — DeliveryHub Source</span>

Extract data from your Snowflake data warehouse into Hubhouse Tables.

<div style={{textAlign: 'center', margin: '2rem 0'}}>
  <img src="/img/data-source-flow.svg" alt="Data source to DeliveryHub flow" style={{maxWidth: '100%', maxHeight: '300px'}} />
</div>

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Key Features</span>

| Feature | Benefit |
|---------|---------|
| **OAuth Authentication** | Secure, token-based access without sharing credentials |
| **SQL Queries** | Extract exactly what you need using standard SQL |
| **Zero-Copy Sharing** | Leverage Snowflake's secure data sharing capabilities |
| **Automatic Scaling** | Handle unlimited data volumes without infrastructure overhead |

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Data Flow</span>

```
Snowflake → OAuth Login → SQL Query → DeliveryHub → Hubhouse Table → Data Products
```

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Requirements</span>

- **Snowflake Account** (Standard or higher edition)
- **Account Locator** (region and identifier)
- **Credentials** (username/password or OAuth token)
- **Database & Schema** with tables you want to query
- **Query Permissions** on specified tables

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Supported Queries</span>

✅ Standard SQL (SELECT, joins, aggregations)  
✅ CTEs and subqueries  
✅ Window functions  
✅ Time-based incremental extracts  
✅ Views and dynamic SQL

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Common Use Cases</span>

- **Analytics Export** — Query aggregated dashboards and sync to Hubhouse
- **Multi-Warehouse Consolidation** — Combine data from multiple Snowflake accounts
- **Incremental Syncs** — Extract new/modified rows on a schedule
- **Data Enrichment** — Join Snowflake tables with cloud storage sources

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Setup</span>

1. [Run the setup script to grant permissions](/docs/Sources/Snowflake/setup-guide)
2. Provide your account locator and credentials
3. Configure source in DeliveryHub

---

[Setup Guide](/docs/Sources/Snowflake/setup-guide) • [Hubhouse Table Guide](/docs/hubhouse/what-is-a-hubhouse-table)
