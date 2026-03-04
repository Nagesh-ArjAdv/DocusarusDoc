---
id: deliveryhub-managed-databricks-setup-guide
title: DeliveryHub-managed Databricks setup guide
description: Configure a DeliveryHub-managed Databricks destination using Databricks-to-Databricks sharing or Open Delta Sharing.
---

# DeliveryHub-managed Databricks setup guide

This guide explains how to configure DeliveryHub to grant access to data delivered to Databricks.

DeliveryHub supports two sharing models:

- **Databricks-to-Databricks sharing** (native Delta Sharing)
- **Open Sharing** (Open Delta Sharing protocol)

## Prerequisites

Before setup, confirm:

- A share has been created in DeliveryHub.
- You know the target Databricks cloud and region.
- You have decided which sharing model applies to the consumer.

For Databricks-to-Databricks sharing:

- Obtain the consumer’s Databricks sharing identifier (`metastore id`).
- Ensure a user with sufficient permissions in the consumer workspace can accept the share and make it available.

For Open Sharing:

- Ensure the consumer can use Open Delta Sharing credentials and endpoint details.

## Setup Instructions

1. Open the share in DeliveryHub.
2. Select **Pick Destination**.
3. Choose **Databricks**.
4. Select cloud platform and destination region.
5. Select **Continue**.

### Option A: Databricks-to-Databricks Sharing

1. Enter the consumer **Databricks Metastore ID**.
2. Select **Grant Access**.
3. Select **Finish** to save setup.

You have now configured native sharing access.

### Option B: Open Sharing

1. Enter a human-readable recipient name.
2. Generate the recipient credential link.
3. Share the credential link securely with the consumer.
4. Select **Finish** to save setup.

> Open-sharing credential links are typically one-time download artifacts. Ensure the recipient captures credentials securely.

## Choosing the Right Sharing Mode

- Use **Databricks-to-Databricks** when the consumer can accept shares in Unity Catalog (preferred experience).
- Use **Open Sharing** when native share acceptance is not available in the consumer environment.

## After Setup

After destination setup:

- Complete source selection in the share.
- Run a transfer.
- Confirm recipient-side access and table visibility in the chosen sharing mode.

## Revoking Access

To revoke recipient access, use the **Revoke** action in destination access settings.

## Best Practices

- Validate metastore IDs carefully before granting native sharing access.
- Use explicit recipient naming conventions for auditability.
- Share open-sharing credentials only through approved secure channels.
- Review and remove stale recipients regularly.
