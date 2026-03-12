---
id: create-and-manage-share
title: Create and Manage Data Shares
---

# Create and Manage Data Shares

This guide walks you through setting up a share in DeliveryHub, from basic details to active data transfer delivery.

## Prerequisites

Before creating a share, make sure:

- At least one [Source](/docs/Sources/) is configured
- You know your target [Destination](/docs/Destinations/)
- You have permissions to create shares and transfers

Depending on destination type, extra access or credential setup may be required.

## Share overview

A share is the container that holds:

- Share name and description
- Provider/account context
- Optional consumer organization assignment
- Source and destination pairing
- One or more transfers
- Logs and operational status

## Setup instructions

### 1) Create a share

1. Open **Shares** from the left navigation.
2. Click **Create Share**.
3. A blank share page opens for configuration.

### 2) Add share name and description (optional)

1. Edit the title/details area.
2. Enter a descriptive name and optional description.
3. Save changes.

### 3) Add consumer organization (optional)

1. Click **Add Consumer Organization**.
2. Select an existing org or create a new one.
3. Save.

This is recommended for governance and billing attribution, and may be required in some account configurations.

### 4) Pick a source

1. Click **Pick Source**.
2. Select a configured source.
3. Save.

If no transfer has been created yet, source/destination selections can usually be removed and reselected.

### 5) Pick a destination

1. Click **Pick Destination**.
2. Choose destination type, cloud platform (if applicable), and region.
3. Complete access setup now or later (if supported).
4. Save.

:::note
For some managed destination workflows, transfers can run before final consumer access is granted, but consumers cannot read data until access is configured.
:::

### 6) Create and manage transfer(s)

Once source and destination are set, create one or more transfers for the datasets you want to deliver.

Typical first-transfer flow:

1. Click **Create Transfer**.
2. Select the source objects, files, or dataset scope you want to deliver.
3. Choose the transfer behavior that matches your use case.
4. Set scheduling or trigger preferences.
5. Review the configuration and save.
6. Run the transfer and confirm the first execution completes successfully.

After the first run, validate that the expected data arrived in the configured destination.

See [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers) and [Transfers Quickstart](/docs/quickstarts/transfers-quickstart).

### 7) Monitor logs and status

Use share and transfer logs to monitor runs, retries, and operational events.

Check at least the following after initial setup:

- Share state
- Transfer run status
- Last run outcome
- Data transferred volume
- Destination-side data visibility

## Monitor and operate data shares

After shares are created, use the Shares workspace to monitor health and run operations.

### Common share states

- **Active**: Share is enabled and can run on schedule.
- **Paused**: Scheduled runs are temporarily stopped.
- **Error**: A recent run failed and requires attention.

### Common share actions

- **Pause/Resume** to stop or restart scheduled execution.
- **Edit** to update share configuration.
- **Run Now** to trigger an on-demand run.
- **Delete/Archive** to retire a share based on your environment policy.

### Operational fields to check

- **Schedule** for configured run cadence.
- **Next Run** to confirm expected execution timing.
- **Last Run** to verify success or failure details.
- **Data Transferred** to validate transfer volume trends.

## Managing existing shares

### Edit share metadata

You can update name/description and supported settings at any time.

### Archive a share

Archive when a share should be retired:

1. Open share actions (ellipsis menu).
2. Select **Archive**.
3. Confirm archive action.

Archived shares can typically be restored within a retention window; permanent deletion behavior depends on environment policy.

## Best practices

- Use clear naming conventions for share purpose and consumer.
- Set consumer organization early for accurate governance/billing alignment.
- Confirm destination access before production go-live.
- Keep share scope focused; use multiple shares when access policies differ.

## Related guides

- [Transfers Quickstart](/docs/quickstarts/transfers-quickstart)
- [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers)
