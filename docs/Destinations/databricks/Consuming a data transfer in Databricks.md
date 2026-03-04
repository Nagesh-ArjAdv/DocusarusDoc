---
id: consuming-a-data-transfer-in-databricks
title: Consuming a data transfer in Databricks
description: Consume data delivered by DeliveryHub in Databricks using native Delta Sharing.
---

# Consuming a data transfer in Databricks

This guide explains how to consume data delivered by DeliveryHub in Databricks using native Databricks sharing.

## Prerequisites

Before consuming data, confirm the following:

- A data transfer has completed to the Databricks destination.
- Access has been configured in DeliveryHub for the consuming Databricks workspace/account.
- You can sign in to the Databricks workspace that received the share.

## Consuming the Data Transfer

1. Open **Shares** in DeliveryHub.
2. Select the share you want to consume.
3. After transfer completion, select **Access Data**.

### Access via Databricks UI

1. Sign in to Databricks UI with the workspace that has share access.
2. Navigate to **Catalog** and then **Delta Sharing**.
3. Under **Shared with me**, select the provider for your region.
4. Locate the new share and select **Create catalog**.
5. In the dialog:
	- Set catalog name (or keep default)
	- Optionally add a comment
	- Confirm catalog creation
6. Open the created catalog and verify schemas/tables are visible.

### Query Validation (SQL)

Run a quick check in Databricks SQL:

```sql
SHOW SCHEMAS IN <catalog_name>;
SHOW TABLES IN <catalog_name>.<schema_name>;
SELECT * FROM <catalog_name>.<schema_name>.<table_name> LIMIT 10;
```

## Troubleshooting

- **Provider/share not visible**: verify access grant in DeliveryHub and confirm you are in the correct workspace.
- **Cannot create catalog**: check workspace permissions and Unity Catalog privileges.
- **No tables visible**: confirm transfer completion and refresh catalog metadata.

## Best Practices

- Use environment-specific catalogs (dev/stage/prod).
- Apply catalog/schema grants based on least privilege.
- Audit access and query activity on a regular cadence.
