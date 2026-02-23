---
id: how-deliveryhub-moves-your-data
title: How DeliveryHub Moves Your Data
---

# How DeliveryHub [Moves](#) Your Data

DeliveryHub connects your sources and destinations, handling the “lower-case ETL” for you — extracting, lightly transforming, and loading or replicating your data with minimal setup.

Whether you’re delivering from file storage, moving data between cloud data warehouses, or sending data back to file storage, DeliveryHub applies proven patterns designed for accuracy, performance, and ease of maintenance.

DeliveryHub data movement principles apply whether you’re moving data directly from your [source](/docs/Sources/) to a [destination](/docs/Destinations/), or creating [DeliveryHub Tables](#).

---
 [File Storage](#) to Cloud Data Warehouse
---

When delivering data from a file storage source (for example, Amazon S3) to a cloud data warehouse (such as Snowflake), **DeliveryHub converts files into structured tables** using **DeliveryHub data types** as a seamless bridge.

## Patterns

* [Append Only](#): 
Load all new records from files into the destination table.  
*(Best suited for immutable datasets)*

* [Update and Append](#):
Merge updates into the table, ensuring only the most recent record exists for each key.

* [Recordset Overwrite](#):
Replace entire related sets of records together.

* [Overwrite](#):
Completely replace the destination table with new files.

* [True Up](#):
Combine daily incremental updates with periodic full overwrites.

* [Change Data Capture (CDC)](#):
Apply inserts, updates, and deletes from a continuous change stream.

 **Typical sync frequencies:** hourly, daily, or aligned with upstream file deliveries.  
CDC pipelines may run continuously.

For deeper details, refer to the  
[File Storage to Cloud Data Warehouse transfer guide](#)

---
 [File Storage](#) to File Storage
---

When replicating between file storage systems (for example, Amazon S3 to Azure Blob Storage), **DeliveryHub mirrors the structure of the source bucket** based on your configuration.

## Patterns

* [Mirror](#):
Keep the destination fully in sync with the source  
(add and remove files as needed).

* [Append Only](#):
Only add new files to the destination.

**Typical syncs:**  
Daily or hourly for static datasets, and more frequently for high-change environments.

For more in-depth information, visit the  
[File Storage to File Storage transfer guide](#)

---
 [Cloud Data Warehouse](#) to Cloud Data Warehouse
---

When moving tables between data warehouses (for example, BigQuery to Databricks), **DeliveryHub mirrors source tables into the destination** with a strong focus on correctness, using **DeliveryHub data types** as a bridge.

## Patterns

* [Full-Table Replication](#):
Replace the destination table with the full source table during each sync.

* [Incremental Replication – Append Only](#):
Add new rows based on a `created_at` column.

* [Incremental Replication – Update and Append](#):
Insert and update rows based on a `last_modified_at` column and a unique key.

* [Change Tracking (Snowflake only)](#):
Use Snowflake change streams to replicate inserts, updates, and deletes.

### Typical syncs

• Full-table: daily or weekly  
• Incremental: hourly or near-real-time  
• Change tracking: continuous or high-frequency  

For more in-depth information, visit the  
[Cloud Data Warehouse to Cloud Data Warehouse transfer guide](#)

---
 [Cloud Data Warehouse](#) to File Storage
---

When delivering data from a warehouse to file storage, **DeliveryHub extracts tables into structured folder paths** for easy consumption.

## Patterns

* [Full-Table Replication](#):
Export the entire table as compressed files.

* [Incremental Replication – Append Only](#):
Write only new rows.

* [Incremental Replication – Update and Append](#):
Write updated and new rows, ensuring the latest state per key.

* [Change Tracking (Snowflake only)](#):
Capture inserts, updates, and deletes for accurate downstream files.

### Typical syncs

• Batch exports: daily or weekly  
• Incremental: hourly or aligned with downstream consumption windows  
• Change tracking: near-real-time  

For more in-depth information, visit the  
[Cloud Data Warehouse to File Storage transfer guide](#)

---
## Choosing the right pattern

| Scenario                     | Recommended Pattern       | Typical Sync            |
|-----------------------------|---------------------------|-------------------------|
| Immutable event logs        | Append Only               | Hourly or daily         |
| Frequently updated records  | Update and Append         | Hourly                  |
| Multi-row record units      | Recordset Overwrite       | Hourly or daily         |
| Periodic full refresh       | Overwrite / Full-Table    | Weekly or monthly       |
| Incrementals + periodic full| True Up                   | Daily with weekly full  |
| Real-time change streams    | CDC / Change Tracking     | Continuous              |

---

:::tip

**If you're unsure which pattern is right for your data,**  
contact your sales representative or [book a demo](#).

**DeliveryHub recommends running a backfill** if configuration changes could impact how data is loaded or queried.  
However, you're always in control — except for **Local Copies**, which automatically stay in sync with their parent **DeliveryHub Tables**.

:::

---
 [How](#) DeliveryHub keeps your data in sync
---

Each transfer or **DeliveryHub Table** runs on a configurable sync schedule that controls when your selected replication or loading pattern executes. You can:

• **Run on a schedule** – hourly, daily, weekly, or custom intervals  
• **Trigger manually** – launch a one-off sync whenever needed  
• **Trigger on demand via API** – perfect for upstream workflow integrations  
• **Combine with event-based automation** – ideal for near-real-time pipelines such as CDC or change tracking  

Some patterns (like CDC or change tracking) may run **continuously or at high frequency** to capture changes as soon as they happen.

### Need to backfill data for your customers?

**DeliveryHub lets you run a backfill** to repopulate historical records and notifies you when a backfill is recommended. This is especially useful when:

✔ You’ve added new fields and want historical data populated  
✔ You need to realign the destination with the full source history  
✔ A previous sync encountered errors but partially succeeded  




