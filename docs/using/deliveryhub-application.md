---
id: deliveryhub-application
title: DeliveryHub Application
---

# DeliveryHub Application

The DeliveryHub application is the web-based control center for configuring data delivery, monitoring operations, and managing users and settings.

This page explains what you can do in each major section of the app.

:::note
What you can view or manage depends on your role and permissions.
:::

## Navigation overview

For most users, the primary working area starts with **Shares**, then extends into source/destination setup, transfer operations, and account management.

### Shares

Manage share lifecycle and transfer entry points:

- View active, personal, and archived shares
- Set share name/details
- Assign consumer organization
- Pick source and destination
- Create and manage transfers
- Review transfer logs

See [Create and Manage Share](/docs/shares/create-and-manage-share).

### Data Sources

Configure and maintain source connectivity:

- Add source connections
- Monitor connection status
- Test, view, edit, and delete sources

See [Data Sources](/docs/using/data-sources).

### Transfers

Build and operate data pipelines inside shares:

- Select source objects/paths
- Configure transfer patterns and destination options
- Set [globs](/docs/transfers/setting-globs) for file sources
- [View schema and override data types](/docs/transfers/view-schema-override-types)
- Configure [backfill segmentation](/docs/transfers/setting-backfill-segmentation) where supported
- Set [sync preferences and schedules](/docs/transfers/sync-preferences-schedule)

See [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers).

### Hubhouse

Create and operate centralized data assets:

- Hubhouse Tables
- Data Products
- Data Fulfillment

See [What is Hubhouse](/docs/hubhouse/what-is-hubhouse) and [Hubhouse Quickstart](/docs/quickstarts/hubhouse-quickstart).

### Environment and Administration

Manage account-wide configuration:

- Environment settings
- Authentication preferences
- Service accounts and secrets
- Webhooks
- Users and roles

## Typical workflow

1. Configure a source.
2. Create a share.
3. Pick destination and access setup.
4. Create transfer and schedule runs.
5. Monitor logs/status and tune settings.

For fast onboarding, see [Transfers Quickstart](/docs/quickstarts/transfers-quickstart).

## Related guides

- [Data Sources](/docs/using/data-sources)
- [Create and Manage Share](/docs/shares/create-and-manage-share)
- [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers)
- [Hubhouse Quickstart](/docs/quickstarts/hubhouse-quickstart)
