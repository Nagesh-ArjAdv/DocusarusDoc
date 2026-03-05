---
id: retry-mechanism
title: Retry Mechanism
---

# Retry Mechanism

DeliveryHub includes a smart retry mechanism for failed transfer runs to reduce disruption and improve recovery without creating unnecessary operational noise.

## How retries work

When a transfer run fails, DeliveryHub retries failed workload units based on transfer timing and failure context.

- Successful workload units are not reprocessed unnecessarily.
- Failed workload units are retried according to an adaptive schedule.
- Retry status is visible in transfer run details and logs.

## Key features

| Feature | Behavior |
| --- | --- |
| Targeted retries | Only failed workload segments with pending data are retried, while successful segments remain unaffected. |
| Adaptive backoff | Retry cadence increases over time to balance fast recovery with system efficiency. |
| Reduced alert noise | Repeated failures for the same workload segment are grouped to avoid duplicate notifications. |
| User-initiated retry | You can trigger an immediate retry with a manual sync action when needed. |
| Transparent status | Transfer runs clearly show failed, retrying, and recovered states. |

## Retry timing behavior

Retry behavior depends on the transfer’s configured frequency:

- **High-frequency transfers** (for example every few minutes): retry usually happens in the next scheduled run window.
- **Lower-frequency transfers** (for example daily/weekly/monthly): retries follow progressive intervals to maximize recovery within the next delivery window.

For schedule setup, see [Sync Preferences Schedule](/docs/transfers/sync-preferences-schedule).

## Manual intervention

If you need immediate action, you can manually trigger a retry from the transfer UI. This is useful when:

- A transient destination or network issue has been resolved
- You fixed credentials/permissions and want to rerun now
- You want to validate recovery before the next scheduled run

## Benefits

- **Improved efficiency:** avoids full reruns when only part of a transfer failed
- **Faster recovery:** retries failed parts quickly and predictably
- **Better operations:** minimizes alert fatigue and makes issue triage easier

:::note
If a failure persists after retry attempts, investigate the root cause (schema mismatch, access, quota, or connectivity), then retry manually or pause the transfer until corrected.
:::

## Related guides

- [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers)
- [DeliveryHub Transfer Backfill](/docs/transfers/deliveryhub-transfer-backfill)
- [Sync Preferences Schedule](/docs/transfers/sync-preferences-schedule)
