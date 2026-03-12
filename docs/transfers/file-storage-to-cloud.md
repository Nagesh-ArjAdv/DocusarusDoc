---
id: file-storage-to-cloud
title: File Storage to Cloud
---

# File Storage to Cloud

DeliveryHub supports moving data from file storage sources into cloud warehouse destinations by transforming selected files into destination tables.
<div className="hero-image">
  <img src="\img\3-filestorage-to-cloud.svg" alt="DeliveryHub Platform" />
</div>
This transfer type is commonly used for delivering files from object storage (for example Amazon S3, Azure Blob Storage, or GCS) into analytics platforms like Snowflake, BigQuery, and Databricks.

## Supported source file formats

- Parquet (commonly with Snappy compression)
- CSV (commonly with GZIP compression)
- Newline-delimited JSON (commonly with GZIP compression)
- Avro

## How schemas are determined

DeliveryHub extracts or infers schema from source files, then maps data types to destination-compatible warehouse types.

- **Self-describing formats** (for example Parquet/Avro): schema is read from files.
- **CSV/JSON formats**: schema and types are inferred from sampled records.

For CSV and JSON, inferred types are based on value compatibility and type precedence rules.

## Table loading patterns

Choose the loading pattern that matches how your source files are produced.

### Append Only

Loads new records as additional rows.

Best for immutable/event-style data where files only contain new records.

### Update and Append

Keeps only the latest version of each record using:

- Unique identifier key(s)
- Last-modified field
- Optional delete flag
- Optional created-at field for performance optimization

Best for datasets where records change over time.

### Recordset Overwrite

Replaces all rows in a logical recordset together using:

- Matching key(s)
- Last-modified field

Best when a single entity spans multiple rows that must be updated as a unit.

### Overwrite

Replaces destination table contents with the latest full source state.

Common source identification strategies include:

- Completion file markers (for example `_SUCCESS`)
- Latest file strategy
- Entire-folder synchronization

Best when each publish represents a complete snapshot.

### True Up

Combines incremental updates with periodic full refresh behavior.

Typically configured with:

- Unique identifier
- Last-modified field
- Full-load identifier
- Date format metadata

Best when pipelines produce both daily incrementals and periodic full snapshots.

### Change Data Capture (CDC)

Applies inserts, updates, and deletes transactionally from CDC-style file feeds.

Typically configured with:

- Primary key
- Last-modified timestamp
- Change type column
- Optional created-at for merge optimization

Best for near-real-time or high-change operational data.

## File update behavior

- Most patterns can process updated source files according to their merge/overwrite logic.
- **Append Only** does not treat modified files as in-place corrections; use new files or a different pattern if corrections are required.

## Hive partition support

DeliveryHub can parse Hive-style folder partitions and load partition values as columns in destination tables. Default partition type is typically string unless overridden.

## CSV loading options

CSV parsing and loading options are applied per destination platform. Defaults are chosen for compatibility and can vary by destination engine.

## Related guides

- [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers)
- [File Storage to File Storage](/docs/transfers/file-storage-to-file-storage)
