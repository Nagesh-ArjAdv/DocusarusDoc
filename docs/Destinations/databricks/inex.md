---
id: destinations-databricks-index
title: Databricks
description: Configure Databricks as a DeliveryHub destination using Delta Sharing and optimize table delivery behavior.
---

# Databricks

Databricks is a supported DeliveryHub destination for warehouse-native data delivery.

<div className="hero-image">
  <img src="\img\deliveryhub-databricks-destination.png" alt="DeliveryHub Platform" />
</div>

When delivering from object storage sources, DeliveryHub can materialize selected datasets as Databricks tables and share access using Delta Sharing for authorized consumer workspaces.

## DeliveryHub-managed Databricks

Use this guide to configure destination setup and access grants:

- [DeliveryHub-managed Databricks setup guide](./deliveryhub-managed%20Databricks%20setup%20guide)

### Authorization

DeliveryHub requires a Databricks sharing identifier to grant your account access to the Delta share.

To make data available in the target workspace, a Databricks admin (or equivalent privileged user) must accept the share and create the appropriate catalog/provider objects.

## Advanced Table Controls

DeliveryHub supports destination table controls for performance and schema compatibility.

### Clustering (Z-Order)

DeliveryHub supports Databricks clustering/Z-Order configuration for table optimization.

- Cluster key configuration can be applied through setup flows and API/table settings.
- Complex nested fields should be flattened before use as cluster keys.

#### Common Unsupported Types for Cluster Keys

In this workflow, clustering is limited to primitive column types. Common unsupported types include:

- `BINARY`
- `MAP`
- `STRUCT`
- `ARRAY`

### Data Type Override

DeliveryHub supports destination type overrides where source-to-destination type alignment requires explicit control.

### Schema Migration Support

DeliveryHub supports additive schema evolution for active deliveries.

- New columns can be added without interrupting transfer continuity.
- Missing values for newly introduced or absent fields are represented as `null` where applicable.

## Consuming a Data Transfer

After destination configuration, access grant, and transfer completion, continue with:

- [Consuming a data transfer in Databricks](./Consuming%20a%20data%20transfer%20in%20Databricks)
- [Consuming a data transfer in Databricks (Open Sharing)](./Consuming%20a%20data%20transfer%20in%20Databricks%20(Open%20Sharing)%20)

## Operational Notes

- Validate workspace-level sharing prerequisites before production rollout.
- Confirm role permissions for share acceptance and catalog creation.
- Test representative query workloads prior to broad release.
