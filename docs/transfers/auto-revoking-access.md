---
id: auto-revoking-access
title: Auto Revoking Access
---

# Auto Revoking Access

Auto-revoking access lets you create time-limited data deliveries by setting an end date for transfer access. This helps enforce security and compliance requirements for temporary sharing.

## Supported scope

This feature applies to DeliveryHub-managed destination flows where access grants are controlled by DeliveryHub. Support can vary by destination type.

For destination-specific behavior, review [Destinations](/docs/Destinations/).

## Create a transfer with an end date

1. Open **Shares** and create or edit a share.
2. Choose source and destination.
3. Configure access and select data to transfer.
4. In the review/settings step, set a future **End Date**.
5. Save and start the transfer.

:::note
If the end date is set to the next day, access revocation is applied at the configured cutoff window (commonly midnight UTC, depending on environment settings).
:::

## What happens on the end date

When the configured end date is reached, DeliveryHub automatically:

- Changes the transfer state to **Paused**
- Revokes destination access grants associated with that share/transfer

This ensures data access is stopped on schedule without manual intervention.

## Reinstate access after revocation

To re-enable access:

1. Open the transfer settings.
2. Set a new future **End Date** (or remove expiration, if policy allows).
3. Save changes and resume transfer execution.

Depending on destination type, consumers may need to repeat destination-side access/consumption steps.

## Verify auto-revocation in logs

To confirm revocation actions:

1. Open transfer **Logs**.
2. Find events related to expiration and access revocation.
3. Confirm the transfer entered paused state and grant removal completed.

## Related guides

- [Create and Manage Share](/docs/shares/create-and-manage-share)
- [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers)
- [Sync Preferences Schedule](/docs/transfers/sync-preferences-schedule)
