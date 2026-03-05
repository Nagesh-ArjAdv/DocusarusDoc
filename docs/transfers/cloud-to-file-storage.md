---
id: cloud-to-file-storage
title: Cloud to File Storage
---

# Cloud to File Storage

DeliveryHub supports exporting tables from cloud data warehouse sources into file storage destinations using a structured, versioned folder layout.
<div className="hero-image">
  <img src="\img\2-cloud-to-filestorage.svg" alt="DeliveryHub Platform" />
</div>
This transfer type is useful when downstream systems consume files rather than direct warehouse access.

## Replication methods

Choose the method that matches how your source table changes.

### Full-table replication

Exports the full table state and writes a new versioned folder on each successful run.

Best for:

- Snapshot-style source updates
- Smaller tables with infrequent change
- Sources without reliable incremental keys

Each successful run writes data parts and a completion marker (for example `_SUCCESS`).

#### BigQuery view cursor behavior

For BigQuery views, a `last_modified_at`-style cursor can be used to detect changes more efficiently. Without it, periodic refresh behavior may apply by default.

### Incremental replication — Append only

Exports only newly created rows.

Required field:

- Created-at key

Best for immutable append-only event/log datasets.

### Incremental replication — Update and append

Exports inserts and updates so downstream consumers can reconstruct the latest row state.

Required fields:

- Unique identifier key(s)
- Last-modified key

Optional field:

- Delete flag

Best for mutable entities where records evolve over time.

### Snowflake source only — Change tracking

Uses Snowflake change tracking metadata to export inserts, updates, and deletes.

Required field:

- Unique identifier key(s)

Optional field:

- Created-at key for performance optimization

Best when delete propagation and high-change accuracy are required.

## Folder structure and versioning

Exports are written in a versioned table path pattern similar to:

`/table_name/version=n/YYYY/MM/DD/HH_MM_SS/file_name.ext`

- `version=n` represents a restatement lineage for that table
- Date/time path segments represent extraction time in UTC
- New version folders are typically created during backfill/restate workflows

To retrieve the latest state, use the highest version and apply pattern-specific merge/append logic.

## File formats and output options

Common output formats include:

- Parquet (compressed)
- CSV (compressed)
- JSON (compressed)

Depending on destination and source combination, you may also configure:

- Single-file export for smaller tables
- Target file size for larger exports
- CSV formatting options (delimiter/escape rules)
- Success marker behavior

## Empty source table behavior

If a source table is empty, the run can still complete successfully with no data files delivered for that table scope.

## Related guides

- [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers)
- [Cloud to Cloud](/docs/transfers/cloud-to-cloud)
- [DeliveryHub Transfer Backfill](/docs/transfers/deliveryhub-transfer-backfill)
- [Setting Globs](/docs/transfers/setting-globs)
