---
id: destinations-redshift-index
title: Amazon Redshift
description: Configure Amazon Redshift as a DeliveryHub destination and manage table delivery behavior.
---

# Amazon Redshift

Amazon Redshift is a supported DeliveryHub destination for warehouse-native data delivery.
<div className="hero-image">
  <img src="\img\deliveryhub-redshift-destination.png" alt="DeliveryHub Platform" />
</div>
When delivering from cloud object storage sources, DeliveryHub can materialize selected datasets as Redshift tables and share access with approved AWS accounts.

> Redshift data sharing support depends on your Redshift deployment model (for example, serverless or compatible cluster families).

## DeliveryHub-Managed Amazon Redshift

To configure destination setup, permissions, and advanced options, use:

- [DeliveryHub-managed Amazon Redshift setup guide](./deliveryhub-managed%20Amazon%20Redshift%20setup%20guide)

### Authorization

DeliveryHub requires the consumer’s AWS account identifier to grant destination access for shared data.

## Advanced Table Controls

DeliveryHub supports advanced controls to optimize destination tables for downstream workloads.

### Sort Key

You can configure Redshift sort keys to improve query performance.

- Sort key configuration is table-specific.
- Sort key column order is preserved and affects performance characteristics.
- Configuration can be managed in table settings during share setup.

### Data Type Override

DeliveryHub supports overriding source column data types at destination when schema-level compatibility or performance tuning requires it.

### Schema Migration Support

DeliveryHub handles schema evolution during ongoing deliveries by applying additive changes safely.

- New columns can be added without interrupting transfers.
- Missing values for newly introduced or absent columns are represented as `null` where applicable.
- This behavior supports continuity during source schema evolution.

## Consuming a Data Transfer

After destination setup, access grant, and completed transfer, continue with:

- [Consuming a data transfer in Amazon Redshift](./Consuming%20a%20data%20transfer%20in%20Amazon%20Redshift)

## Notes for Rollout

- Validate Redshift compatibility and sharing model before production rollout.
- For very large table transfers, align sizing and performance expectations in advance.
- Test representative workloads before broad deployment.
