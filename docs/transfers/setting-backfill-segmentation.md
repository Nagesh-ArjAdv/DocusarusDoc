---
id: setting-backfill-segmentation
title: Setting Backfill Segmentation
---

# Setting Backfill Segmentation

Backfill segmentation lets you split a large backfill into smaller segments so long-running transfers are easier to execute and recover.

This is especially useful for very large tables (for example, multi-terabyte ranges) where a single monolithic backfill is expensive or brittle.

## When to use segmentation

Use segmentation when:

- Table volume is large and full backfill runtime is high
- You want better fault tolerance during historical reloads
- You need finer progress checkpoints for operational control

## Prerequisites

Before enabling segmentation:

- A share must exist
- At least one source and destination must be configured
- You must be creating or editing a transfer that supports segmented backfill

See:

- [Create and Manage Share](/docs/shares/create-and-manage-share)
- [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers)

## Setup steps

1. Open an eligible transfer configuration.
2. Choose source objects and continue to table transfer settings.
3. Select a supported loading/replication pattern.
4. Open advanced settings (cog/options).
5. Enable **Backfill segmentation**.
6. Choose a **Segment column**.
7. Set **Number of segments** (commonly 1–100).
8. Save and start (or update) the transfer.

## Choosing the segment column

Pick a column that gives balanced distribution and predictable scanning, such as:

- A partition-aligned date/timestamp key
- A stable high-cardinality key used consistently in source layout

Poor key choice can create segment skew and uneven runtimes.

## Segment sizing guidance

- Start with moderate segment counts and increase as needed.
- Prefer segment sizes that avoid very large single-segment workloads.
- Validate performance on a representative table before scaling broadly.

## Limitations and notes

- Segmentation is generally not available for full-table replication mode.
- If a segmented run fails, DeliveryHub can continue from the last successful segment boundary.
- Feature availability may vary by source/destination combination.

:::note
For BigQuery partitioned tables, use a segmentation key strategy aligned with the replication cursor/partition key to improve performance and correctness.
:::

## Related guides

- [DeliveryHub Transfer Backfill](/docs/transfers/deliveryhub-transfer-backfill)
- [Cloud to Cloud](/docs/transfers/cloud-to-cloud)
- [Cloud to File Storage](/docs/transfers/cloud-to-file-storage)
