---
id: data-sources
title: Data Sources
---

# Data Sources

A data source in DeliveryHub is a configured connection to where your provider data lives, such as cloud object storage or a cloud data warehouse.

Data sources are used to power [Shares](/docs/shares/create-and-manage-share), [Transfers](/docs/transfers/what-is-deliveryhub-transfers), and Hubhouse workflows.

## Overview

The Data Sources page typically shows:

- Source name (internal label)
- Source type (for example S3, Snowflake, BigQuery)
- Region
- Connection status
- Creator
- Test connection action
- More actions (view, edit, delete)

## Data source statuses

You may see one or more of the following states:

- **Created**: source object exists but setup may be incomplete
- **Setting up**: initial connection configuration is in progress
- **Indexing**: metadata discovery is running
- **Connected**: source is healthy and available for use
- **Error**: source has connection/configuration issues

Use **Test connection** to retrieve details when status is in error.

## Create a new data source

1. Open **Data Sources**.
2. Click **Add Source**.
3. Enter source name and source details (platform, region, product/connector as applicable).
4. Provide required connection credentials/permissions.
5. Save and wait for source to become connected.

Once connected, the source can be selected in shares and transfers.

## View a source connection

1. Open **Data Sources**.
2. Open the source action menu (ellipsis).
3. Select **View** for read-only details.

## Edit a source connection

1. Open **Data Sources**.
2. Open source action menu (ellipsis).
3. Select **Edit**.
4. Update settings and save.

After edits, re-test connection before using the source in production workflows.

## Delete a source connection

1. Open **Data Sources**.
2. Open source action menu (ellipsis).
3. Select **Delete** and confirm.

Deleting a source can impact existing shares/transfers that depend on it.

## Troubleshooting

If a source is failing:

- Run **Test connection** and review the returned error details.
- Verify credentials, IAM permissions, and network access.
- Confirm region/platform settings match the actual source.
- Re-run connection test after each fix.

## Best practices

- Use clear, stable source naming conventions.
- Prefer least-privilege credentials with required read scope.
- Validate source health before onboarding consumers.
- Avoid deleting sources that are in active production use.

## Related guides

- [Create and Manage Share](/docs/shares/create-and-manage-share)
- [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers)
- [Sources](/docs/Sources/)
- [Destinations](/docs/Destinations/)
