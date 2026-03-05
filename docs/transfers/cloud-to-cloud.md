---
id: cloud-to-cloud
title: Cloud to Cloud
---

# Cloud to Cloud

DeliveryHub supports replicating tables from one cloud data warehouse to another while prioritizing correctness, consistency, and operational efficiency.

<div className="hero-image">
  <img src="\img\1-cloud-to-cloud.svg" alt="DeliveryHub Platform" />
</div>

This transfer type is used for warehouse-to-warehouse delivery scenarios such as Snowflake to Databricks, BigQuery to Snowflake, and similar cross-platform replication workflows.

## Replication patterns

Choose a pattern based on how source records change over time.

### Full-table replication

Copies the full source table and replaces destination contents transactionally.

Best for:

- Small or moderately sized tables
- Tables that are refreshed as full snapshots
- Sources without reliable change-tracking columns

#### BigQuery view cursor behavior

For BigQuery views, using a `last_modified_at`-style bookmark column helps control refresh cadence. If no cursor is configured, periodic full refresh behavior may apply by default.

### Incremental replication — Append only

Replicates newly created rows using a created-at cursor.

Required field:

- Created-at key

Best for immutable event/log style data where existing rows are not updated.

### Incremental replication — Update and append

Replicates inserted and updated rows, and keeps only the latest record version.

Required fields:

- Unique identifier key(s)
- Last-modified key

Optional fields:

- Delete flag
- Created-at key for merge pruning/performance

Best for mutable business entities (orders, accounts, status-driven records).

### Snowflake source only — Change tracking

Uses Snowflake change tracking metadata to capture inserts, updates, and deletes.

Required field:

- Unique identifier key(s)

Optional field:

- Created-at key for performance optimization

Best for high-change tables where downstream delete correctness is required.

:::note
For Snowflake views using change tracking, explicit column aliases in the view select list improve schema handling reliability.
:::

## Pattern selection guidance

| Scenario | Recommended pattern |
| --- | --- |
| Snapshot-style table refresh | Full-table replication |
| Immutable append-only events | Incremental append only |
| Mutable records with updates | Incremental update and append |
| Snowflake source with delete propagation needs | Snowflake change tracking |

## Backfill behavior

You can manually trigger backfill to restate destination tables from source history. DeliveryHub may also recommend or trigger backfill when configuration changes require full realignment.

See [DeliveryHub Transfer Backfill](/docs/transfers/deliveryhub-transfer-backfill).

## Operational considerations

- Ensure change-tracking fields are stable and non-null where required.
- For large merge workloads, optional created-at pruning can improve performance.
- If paused beyond source retention windows, historical re-alignment may require backfill.

## Related guides

- [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers)
- [Retry Mechanism](/docs/transfers/retry-mechanism)
- [Sync Preferences Schedule](/docs/transfers/sync-preferences-schedule)
- [Cloud to File Storage](/docs/transfers/cloud-to-file-storage)
