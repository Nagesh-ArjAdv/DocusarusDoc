---
id: transfers-quickstart
title: Transfers Quickstart
---

# Transfers Quickstart

This guide walks you through the fastest supported path to your first **DeliveryHub Transfer**, from source setup to successful delivery in a destination.

Use this page as the main onboarding flow for DeliveryHub when your goal is to move data from a configured source into a configured destination.

## Before you begin

Make sure you have:

- Access to a DeliveryHub environment
- Permissions to configure at least one [source](/docs/Sources/) and one [destination](/docs/Destinations/)
- Credentials or cloud permissions required by your selected systems

For background concepts, see [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers).

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

If you need connector-specific setup help, start in [Sources](/docs/Sources/).

## Step 3: Create a share

1. Open **Shares**.
2. Click **Create Share**.
3. Optionally add a name and description.

A share is the container for your source, destination, transfer settings, and run history.


## Step 4: Choose the share source

1. Select **Pick Source**.
2. Choose the source you configured in Step 2.
3. Save your selection.

For more detail on share setup, see [Create and Manage Data Shares](../Data%20Share/create-and-manage-share.md).

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

Common examples:

- Use [File Storage to Cloud](/docs/transfers/file-storage-to-cloud) when loading files into a warehouse destination.
- Use [File Storage to File Storage](/docs/transfers/file-storage-to-file-storage) when replicating files between storage systems.

## Step 8: Monitor transfer status

Track progress from the transfer details page, including run status and retry activity.

- Use logs to identify where a run is in progress or why a run failed.
- Use retry controls where available.

You can also monitor run state and share health from the Shares workspace.


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

## Next steps

- Read [Create and Manage Data Shares](../Data%20Share/create-and-manage-share.md) for the full share lifecycle.
- Read [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers) for transfer concepts and configuration scope.
- Use [Sources](/docs/Sources/) to find connector-specific setup guides.
- Use [Destinations](/docs/Destinations/) to find destination setup and access guides.

