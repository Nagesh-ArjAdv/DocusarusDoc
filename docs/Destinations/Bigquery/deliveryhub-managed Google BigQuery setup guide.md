---
id: deliveryhub-managed-google-bigquery-setup-guide
title: DeliveryHub-managed Google BigQuery setup guide
description: Configure a DeliveryHub-managed Google BigQuery destination and grant access to authorized Google principals.
---

# DeliveryHub-managed Google BigQuery setup guide

This guide explains how to configure DeliveryHub to grant access to deliveries made to Google BigQuery.

In this setup, data is delivered to a **DeliveryHub-managed BigQuery destination**, and access is authorized for the Google principal(s) you provide.

## Prerequisites

Before setup, confirm:

- A share has been created in DeliveryHub.
- You have at least one Google principal to grant destination access.
- The destination region aligns with consumer project and residency requirements.

## Setup Instructions

1. Open the share in DeliveryHub.
2. Select **Pick Destination**.
3. Choose **Google BigQuery**.
4. Select the target region for the destination cloud data warehouse.
5. Select **Continue**.
6. Enter the consumer **Google principal**.
7. Select **Grant Access**.
8. Select **Finish** to save destination configuration.

You have now successfully configured access for BigQuery delivery.

## After Setup

After destination setup:

- Complete source selection in the share.
- Run a transfer.
- Validate listing/subscription visibility and dataset access in the authorized consumer project.

## Revoking Access

To revoke a Google principal from a share, use the **Revoke** action in destination access settings.

## Best Practices

- Use group/service principals instead of individual users where possible.
- Validate principal format and project alignment before granting access.
- Review and remove stale principals on a regular cadence.
