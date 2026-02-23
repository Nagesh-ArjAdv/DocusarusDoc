---
id: how-deliveryhub-maps-data-types
title: How DeliveryHub Maps Data Types
---

# How DeliveryHub Maps [Data Types](#primitive-data-types)
![datatype](/img/datatype.png)

## [How](#) DeliveryHub handles data types and schemas

Different file formats and databases use different data type systems. When structured data moves from a source to a destination, DeliveryHub automatically analyzes your schema and maps each column to the correct destination type — accurately and consistently.

### Smart schema detection

**When DeliveryHub ingests data, it determines the schema based on the source and file format:**

• Self-describing formats (Parquet, ORC, Avro)
→ Schema is read directly from the file metadata

• Data warehouses (Snowflake, BigQuery, Databricks)
→ Native table schema is extracted automatically

• Semi-structured formats (CSV, JSON)
→ Schema is intelligently inferred from the data

:::tip

Case-sensitivity behavior

If your source schema contains columns that differ only by letter casing
(for example: hash and HASH)
DeliveryHub will retain one column only to avoid downstream conflicts.

(This behavior depends on the destination system’s case-sensitivity rules.)

:::

## DeliveryHub Type System

DeliveryHub represents all schemas using its internal type system — designed as a universal translation layer between every supported source and destination.

This enables:

✔ Consistent data delivery across platforms

✔ Predictable schema mapping

✔ Reduced transformation errors

✔ Clear expectations for downstream consumers

---
### [Why](#why-this-matters-for-providers) this matters for providers

**Providers should understand how DeliveryHub data types translate into destination-specific types so they can:**

• Design compatible schemas

• Avoid type mismatches

• Optimize downstream performance

• Ensure reliable analytics consumption

This documentation explains exactly how DeliveryHub types map to each destination system.

---


## Primitive Data Types

Deliveryhub Data Types include all the well-known SQL Data Types.


| Data Type | Description |
|------------|-------------|
| `BINARY` | Variable-length binary data such as encoded files or raw bytes. |
| `BOOLEAN` | Logical value: TRUE, FALSE, or NULL. |
| `DECIMAL(precision, scale)` | Fixed-point decimal number. Precision and scale depend on source and destination system limits. |
| `FLOAT` | 64-bit double-precision floating-point number. |
| `FLOAT<FLOAT4 \| FLOAT8>` | Parameterized floating type. Supports 32-bit or 64-bit precision. Currently supported for Parquet → Databricks transfers. |
| `INTEGER` | Whole number. Value range depends on source and destination systems or file formats. |
| `INTEGER<TINYINT \| SMALLINT \| INT \| BIGINT>` | Parameterized integer type supporting 1, 2, 4, and 8-byte values. Supported for Parquet → Databricks transfers. |
| `STRING` | UTF-8 encoded text of variable length. |

## Date and Time

| Data Type | Explanation |
|------------|-------------|
| `DATE` | SQL date value based on the Gregorian calendar (YYYY-MM-DD). |
| `TIME_NTZ` | Represents a wall-clock time value (e.g., 10:23) **without any time zone information**. |
| `TIME_TZ` | Represents a wall-clock time value (e.g., 10:23 CET) **with a specific time zone**. |
| `TIMESTAMP_NTZ` | Represents a date-time value (e.g., 2024-04-01 10:23) **without time zone context**. Equivalent to `DATETIME` in some SQL systems. |
| `TIMESTAMP_TZ` | Represents a specific moment in time (e.g., 2024-04-01 10:23 UTC) **including time zone information**. |

## Complex Data Types

| Data Type | Explanation |
|------------|-------------|
| `ARRAY<Primitive>` | Variable-length list of simple data type elements. All elements must be of the **same primitive type**. |
| `ARRAY<COMPLEX>` | Represents an array containing **nested structures** such as arrays, structs, or maps. |
| `JSON` | JSON-formatted string. Commonly used for **nested structures** including objects, arrays, and key-value maps. |

---
## Mapping into [DeliveryHub Data Types](#)

### Snowflake → [DeliveryHub](#)

| Snowflake | DeliveryHub Data Type |
|------------|----------------------|
| `ARRAY` | `ARRAY<Primitive>` – Snowflake doesn’t expose primitive array types, so values are mapped as strings. |
| `VARIANT` / `OBJECT` | `JSON` |
| `BINARY` / `VARBINARY` | `BINARY` |
| `BOOLEAN` | `BOOLEAN` |
| `DATE` | `DATE` |
| `NUMBER(p,s)` | `DECIMAL(p,s)` |
| `INTEGER` | `DECIMAL(38,0)` – Snowflake stores integers internally as high-precision numbers. |
| `FLOAT` | `FLOAT` |
| `GEOGRAPHY` | `GEOGRAPHY` |
| `GEOMETRY` | `GEOMETRY` |
| `TIME` | `TIME_NTZ` |
| `TIMESTAMP` / `TIMESTAMP_NTZ` | `TIMESTAMP_NTZ` |
| `TIMESTAMP_TZ` | `TIMESTAMP_TZ` |
| `VARCHAR` | `STRING` |

## DeliveryHub Types to [Destination Mapping](#)

### DeliveryHub → [Snowflake](#)

| DeliveryHub Type | Snowflake |
|------------------|-----------|
| `ARRAY<Primitive>` | `ARRAY` |
| `ARRAY<COMPLEX>` | `ARRAY` |
| `BINARY` | `BINARY` |
| `BOOLEAN` | `BOOLEAN` |
| `DATE` | `DATE` |
| `DECIMAL(p,s)` *(p ≤ 38 and s ≤ 37)* | `DECIMAL(p,s)` |
| `DECIMAL(p,s)` *(p > 38 or s > 37)* | `STRING` – Used when value cannot be stored as DECIMAL in Snowflake |
| `FLOAT` | `FLOAT` |
| `GEOGRAPHY` | `GEOGRAPHY` |
| `GEOMETRY` | `GEOMETRY` |
| `INTEGER` | `INTEGER` / `DECIMAL(38,0)` |
| `JSON` | `VARIANT` |
| `STRING` | `STRING`

---
### Summary

DeliveryHub removes schema complexity by:

✔ Automatically detecting structure

✔ Normalizing data types

✔ Mapping safely to every destination

✔ Eliminating manual conversions

---