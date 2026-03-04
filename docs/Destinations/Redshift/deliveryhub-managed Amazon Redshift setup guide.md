---
id: deliveryhub-managed-amazon-redshift-setup-guide
title: DeliveryHub-managed Amazon Redshift setup guide
---
# DeliveryHub-managed Amazon Redshift setup guide

This guide explains how to configure DeliveryHub to grant access to deliveries made to Amazon Redshift.

In this setup, data is delivered to a **DeliveryHub-managed Redshift destination**, and access is authorized for the AWS Account ID you provide.

## Prerequisites

Before setup, confirm:

- A share has been created in DeliveryHub.
- You have the AWS Account ID that should receive access.
- The selected destination region matches your consumer’s Redshift deployment requirements.

## Setup Instructions

1. Open the share in DeliveryHub.
2. Select **Pick Destination**.
3. Choose **Amazon Redshift**.
4. Select the region for the target cloud data warehouse.
5. Select **Continue**.
6. Enter the consumer **AWS Account ID**.
7. Select **Grant Access**.
8. Select **Finish** to save destination configuration.

You have now successfully configured access for Redshift delivery.

## After Setup

After destination setup:

- Complete source selection in the share.
- Run a transfer.
- Confirm table visibility and access in the authorized Redshift account.

## Revoking Access

To revoke access for an AWS Account ID from a share, use the **Revoke** action in destination access settings.

## Best Practices

- Validate account IDs carefully before granting access.
- Use environment-specific shares for dev/stage/prod isolation.
- Review granted account access regularly and remove stale entries.
