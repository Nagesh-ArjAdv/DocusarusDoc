---
id: deliveryhub-managed-snowflake-setup-guide
title: DeliveryHub-managed Snowflake setup guide
description: Configure a DeliveryHub-managed Snowflake destination and grant access using Snowflake account identifiers.
---

# DeliveryHub-managed Snowflake setup guide

This guide explains how to configure DeliveryHub to grant access to data delivered to Snowflake.

In this setup, data is delivered to a **DeliveryHub-managed Snowflake destination**, and access is granted to the Snowflake account identifiers you provide.

## Prerequisites

Before setup, confirm:

- For Transfers: a share has been created.
- For Hubhouse Data Fulfillment: the feature is enabled in your environment.
- You have the target Snowflake account identifiers:
	- Organization name
	- Account name
	- Region / cloud platform context

## Setup via Share (Transfers)

1. Open the share in DeliveryHub.
2. Select **Pick Destination**.
3. Choose **Snowflake**.
4. Select cloud platform and destination region.
5. Select **Continue**.
6. Enter:
	 - Snowflake organization name
	 - Snowflake account name
7. Select **Grant Access**.
8. Select **Finish** to save setup.

You have now configured Snowflake destination access for the share.

## Setup via Data Fulfillment (Hubhouse)

1. Create or open a Data Consumer record.
2. Choose **Snowflake** destination, cloud platform, and region.
3. Enter the Snowflake account identifier (for example, `OrgName.AccountName`).
4. Save access details.
5. Complete setup and continue fulfillment.

## After Setup

After destination setup:

- Complete source selection in the share (Transfers flow).
- Run a transfer or fulfill Data Products.
- Confirm share visibility and database creation in the consumer Snowflake account.

## Access Revocation

To remove access, revoke the configured Snowflake account from destination access settings.

## Best Practices

- Validate organization/account identifiers carefully before granting access.
- Use environment-specific destinations for dev/stage/prod separation.
- Review granted accounts regularly and remove stale access promptly.
