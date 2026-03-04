---
id: destinations-snowflake-index
title: Snowflake
description: Configure Snowflake as a DeliveryHub destination using Secure Data Sharing and optimize table delivery behavior.
---

# Snowflake

Snowflake is a supported DeliveryHub destination for warehouse-native data delivery.
<div className="hero-image">
  <img src="\img\deliveryhub-snowflake-destination.png" alt="DeliveryHub Platform" />
</div>
When delivering from object storage sources, DeliveryHub can materialize selected datasets as Snowflake tables and share access through Snowflake Secure Data Sharing for authorized consumer accounts.

## DeliveryHub-managed Snowflake

Use this guide to configure destination setup and share access:

- [DeliveryHub-managed Snowflake setup guide](./Deliveryhub-managed%20Snowflake%20setup%20guide)

### Authorization

DeliveryHub requires the consumer Snowflake identifiers to grant share access:

- Snowflake organization name
- Snowflake account name

A Snowflake admin (or equivalent privileged user) in the consumer account must accept the share and make it queryable.

## Advanced Table Controls

DeliveryHub supports destination table controls for performance and compatibility.

### Clustering Keys

DeliveryHub supports Snowflake clustering keys to optimize query patterns.

#### Common Unsupported Data Types for Clustering Keys

Semi-structured types are not supported as cluster keys in this workflow:

- `ARRAY`
- `OBJECT`
- `VARIANT`

#### Additional Notes

To improve clustering efficiency, transformations may be applied to selected data types:

- `TIMESTAMP` columns can be converted to `DATE` via `TO_DATE()`.
- `GEOGRAPHY` columns can be converted to string representations (for example, `ST_GEOHASH()`).

### Data Type Override

DeliveryHub supports destination data type override where source-to-destination alignment requires explicit control.

### Search Optimization

DeliveryHub supports Snowflake search optimization settings for workloads that benefit from accelerated selective query patterns.

## Schema Migration Support

DeliveryHub supports additive schema evolution for active deliveries.

- New columns can be added without interrupting transfer continuity.
- Missing values for newly introduced or absent columns are represented as `null` where applicable.

## Accessing Data

After destination setup, access grant, and transfer completion, continue with:

- [Accessing data in Snowflake](./Accessing%20data%20in%20Snowflake)

## Operational Notes

- Validate consumer account identifiers before granting access.
- Confirm share acceptance workflow in the consumer account early.
- Test representative query workloads before broad release.
