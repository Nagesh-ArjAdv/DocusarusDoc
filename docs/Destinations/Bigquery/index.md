---
id: destinations-bigquery-index
title: Google BigQuery
description: Configure Google BigQuery as a DeliveryHub destination using Analytics Hub data sharing.
---

# Google BigQuery

Google BigQuery is a supported DeliveryHub destination for warehouse-native data delivery.

<div className="hero-image">
  <img src="\img\deliveryhub-bigquery-destination.png" alt="DeliveryHub Platform" />
</div>

When delivering from object storage sources, DeliveryHub can materialize selected datasets as BigQuery tables and share them through Analytics Hub exchanges for approved consumer principals.

## DeliveryHub-managed Google BigQuery

Use this guide to configure destination setup and access grants:

- [DeliveryHub-managed Google BigQuery setup guide](./deliveryhub-managed%20Google%20BigQuery%20setup%20guide)

### Authorization

DeliveryHub requires one or more consumer Google principals to grant access to the Analytics Hub exchange/listing.

## Advanced Table Controls

DeliveryHub supports destination table controls to optimize query performance and compatibility.

### Clustering

DeliveryHub supports configuring BigQuery clustering for destination tables.

- Use clustering on flat, high-cardinality scalar columns.
- Cluster key selection can be configured in setup flows and API/table settings.

#### Common Unsupported Types for Cluster Keys

BigQuery clustering does not support these types as cluster keys in this workflow:

- `ARRAY`
- `FLOAT64`
- `BYTES`
- `JSON`
- `STRUCT`
- `TIME`

Best practices:

- Prefer flat scalar columns.
- Flatten nested structures when clustering is required.

### Data Type Override

DeliveryHub supports destination type override for selected fields when source-to-destination type alignment requires explicit control.

### Schema Migration Support

DeliveryHub supports additive schema evolution for ongoing deliveries.

- New columns can be appended without disrupting active transfers.
- Missing values in new/optional fields are represented as `null` where applicable.
- This helps maintain continuity as source schemas evolve.

## Consuming a Data Transfer

After destination configuration, access grant, and transfer completion, continue with:

- [Consuming a data transfer in Google BigQuery](./Consuming%20a%20data%20transfer%20in%20Google%20BigQuery)

## Operational Notes

- Validate destination volume and table planning before production rollout.
- For very high file-count tables, plan batching/compaction strategy in advance.
- Test representative queries and partitioning/clustering behavior before broad release.
