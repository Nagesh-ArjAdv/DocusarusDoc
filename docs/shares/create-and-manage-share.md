---
id: create-and-manage-share
title: Create and Manage Share
---

# Create and Manage Share

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

See [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers) and [Transfers Quickstart](/docs/quickstarts/transfers-quickstart).

### 7) Monitor logs and status

Use share and transfer logs to monitor runs, retries, and operational events.

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
- [Sync Preferences and Schedule](/docs/transfers/sync-preferences-schedule)
- [Auto Revoking Access](/docs/transfers/auto-revoking-access)
