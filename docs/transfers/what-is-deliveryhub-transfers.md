---
id: what-is-deliveryhub-transfers
title: What are DeliveryHub Transfers?
---

# What are DeliveryHub Transfers?

A **DeliveryHub Transfer** is a direct data pipeline from your selected source to your selected destination, with no persistent DeliveryHub-managed copy required in between.

Think of DeliveryHub as the courier: it picks up data where it lives, normalizes it for the target platform, and delivers it securely on your configured schedule.

## How it works

1. **Connect a source**
	- Configure your source system in DeliveryHub.
	- Grant read access to the data you want to move.

2. **Create a transfer**
	- Choose the destination platform and region.
	- Select the transfer pattern that matches your use case.
	- Define sync and scheduling preferences.

3. **Run and monitor delivery**
	- DeliveryHub moves data directly from source to destination.
	- You can monitor syncs, retries, and outcomes from the transfer view.

## What you can configure

- **Transfer pattern** (for example append-only, update-and-append, overwrite)
- **Schedule and trigger behavior** (manual, scheduled, or API-triggered)
- **Schema override behavior** and destination-specific options
- **Backfill behavior** for historical data movement

## Related guides

- [Transfers Quickstart](/docs/quickstarts/transfers-quickstart)
