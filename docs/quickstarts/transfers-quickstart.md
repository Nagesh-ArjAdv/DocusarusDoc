---
id: transfers-quickstart
title: Transfers Quickstart
---

# Transfers Quickstart

This guide walks you through creating your first **DeliveryHub Transfer** from source setup to successful delivery.

## Before you begin

Make sure you have:

- Access to a DeliveryHub environment
- Permissions to configure at least one [source](/docs/Sources/) and one [destination](/docs/Destinations/)
- Credentials or cloud permissions required by your selected systems

## Step 1: Sign in to DeliveryHub

Sign in with your DeliveryHub credentials and confirm you can access the workspace where you want to configure transfers.

## Step 2: Set up a source

1. Open **Sources** from the left navigation.
2. Click **Add Source**.
3. Follow the setup wizard and save the connection.

After a successful connection, DeliveryHub begins indexing metadata needed for transfer configuration.

:::tip
Some source connectors require additional cloud IAM or network allow-list setup.
Confirm prerequisites before starting your source configuration.
:::

## Step 3: Create a share

1. Open **Shares**.
2. Click **Create Share**.
3. Optionally add a name and description.

For detailed options, see [Create and Manage Share](/docs/shares/create-and-manage-share).

## Step 4: Choose the share source

1. Select **Pick Source**.
2. Choose the source you configured in Step 2.
3. Save your selection.

## Step 5: Choose destination and access setup

1. Select **Pick Destination**.
2. Choose destination type, cloud platform (if applicable), and region.
3. Complete destination setup and save.

Review supported destination-specific setup details in [Destinations](/docs/Destinations/).

## Step 6: Add consumer organization (optional)

If your workflow includes external consumers, add a consumer organization for identification, governance, and billing alignment.

## Step 7: Create your first transfer

1. Click **Create Transfer**.
2. Select data objects to transfer.
3. Configure transfer behavior (pattern, schedule, and options).
4. Review and start the transfer.

For transfer concepts and behavior, see [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers).

## Step 8: Monitor transfer status

Track progress from the transfer details page, including run status and retry activity.

- Use logs to identify where a run is in progress or why a run failed.
- Use retry controls where available.

See [Retry Mechanism](/docs/transfers/retry-mechanism) for details.

## Step 9: Validate delivered data

After completion, access data in your configured destination and confirm:

- Expected tables/files are present
- Schema and record counts match expectations
- Freshness aligns with your schedule

If needed, review destination-specific consumption guides under [Destinations](/docs/Destinations/).

## Step 10: Scale delivery

Once the first transfer is successful, expand by:

- Adding more data objects to existing shares
- Creating additional shares for new consumers
- Running a historical load when needed

For historical sync setup, see [DeliveryHub Transfer Backfill](/docs/transfers/deliveryhub-transfer-backfill).
