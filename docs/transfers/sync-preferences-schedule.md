---
id: sync-preferences-schedule
title: Sync Preferences & Schedule
---

# Sync Preferences & Schedule

When creating a transfer, DeliveryHub lets you control how often it checks for source changes and when each run starts.

These settings define your operational cadence and directly affect freshness, cost, and recovery behavior.

## Scheduling options

DeliveryHub supports common scheduling cadences, including:

- Run once
- Every 5 minutes
- Every 30 minutes
- Every 1 hour
- Every 6 hours
- Every 12 hours
- Daily
- Weekly
- Every 2 weeks
- Monthly

Available intervals can vary by environment or destination capabilities.

## Start timing

For scheduled transfers, you can choose to:

- **Start now**: run immediately and continue on the selected cadence
- **Start later**: set a future date/time for first execution

This is useful when delivery must begin on a contract date or after upstream data is ready.

## One-time transfers

If you select **Run once**, DeliveryHub performs a single synchronization and then does not schedule additional runs.

Use this for ad hoc exports, onboarding snapshots, or one-off historical movement.

## How scheduling interacts with retries

Retry behavior is tied to schedule frequency:

- Higher-frequency schedules generally recover faster from transient failures.
- Lower-frequency schedules rely more on adaptive retry timing between run windows.

For details, see [Retry Mechanism](/docs/transfers/retry-mechanism).

## Choosing the right cadence

| Use case | Suggested cadence |
| --- | --- |
| Near-real-time operational feeds | 5 to 30 minutes |
| Intra-day analytics refresh | Hourly to 6 hours |
| Daily business reporting | 12 hours to daily |
| Periodic regulatory/partner delivery | Weekly to monthly |
| One-time migration/export | Run once |

## Best practices

- Align schedule with source data arrival patterns.
- Avoid overly frequent runs when source updates are infrequent.
- Use start-later scheduling for controlled go-live.
- Revisit cadence after enabling backfill segmentation or changing transfer patterns.

## Related guides

- [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers)
- [Retry Mechanism](/docs/transfers/retry-mechanism)
- [DeliveryHub Transfer Backfill](/docs/transfers/deliveryhub-transfer-backfill)
- [Setting Backfill Segmentation](/docs/transfers/setting-backfill-segmentation)
