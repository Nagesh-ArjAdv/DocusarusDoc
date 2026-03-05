---
id: deliveryhub-transfer-backfill
title: DeliveryHub Transfer Backfill
---

# DeliveryHub Transfer Backfill

Backfilling helps ensure data consistency and completeness by re-syncing historical source data to your destination.

In most transfer types, a backfill performs a full historical synchronization for the selected scope. For warehouse-style destinations, this can include resetting destination table state before reloading.

## When does a backfill occur?

You can trigger a backfill in two common ways:

- **First-time transfer setup** for a new destination path or table scope
- **Manual backfill selection** while editing a transfer (for example, backfill on next run or full backfill options)

## When is a backfill recommended?

DeliveryHub may recommend a backfill in the application when configuration changes can affect data correctness, such as:

- Changes to [Sources](/docs/Sources/) or [Destinations](/docs/Destinations/) locations
- Updates to loading/unloading behavior (for example keys, delete handling, or file options)
- Changes to transfer filters, including [Setting Globs](/docs/transfers/setting-globs) or source-side view definitions
- Configuration updates related to [Setting Backfill Segmentation](/docs/transfers/setting-backfill-segmentation)

:::note
Skipping a recommended backfill can result in inconsistent destination data or failed runs. If that happens, you can still manually run a backfill later.
:::

## Snowflake view-change behavior (if enabled)

If Snowflake view-change detection is enabled in your environment, DeliveryHub can detect recreated secure views and recommend backfill to keep destination data aligned with source definition changes.

## Key benefits

- **Data consistency:** destination data is realigned with source history and current configuration
- **Operational safety:** helps recover from drift introduced by schema, filter, or behavior changes
- **Faster recovery:** provides a clear path to restore correctness after transfer failures related to configuration changes

## Considerations

- **TTL-limited sources:** if the source retains only recent data (for example due to TTL lifecycle policies), backfill can only restore data that still exists in the source.
- **Runtime impact:** full historical backfills can be larger and take longer than incremental syncs.
- **Destination behavior:** depending on transfer mode, destination tables/files may be recreated or overwritten during backfill.

## Related guides

- [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers)
- [Retry Mechanism](/docs/transfers/retry-mechanism)
- [Setting Backfill Segmentation](/docs/transfers/setting-backfill-segmentation)
