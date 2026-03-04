---
id: consuming-a-data-transfer-in-databricks-open-sharing
title: Consuming a data transfer in Databricks (Open Sharing)
description: Consume data delivered by DeliveryHub in Databricks using Open Delta Sharing credentials.
---

# Consuming a data transfer in Databricks (Open Sharing)

This guide explains how to consume data delivered by DeliveryHub in Databricks using Open Delta Sharing.

## Prerequisites

Before consuming data, confirm the following:

- A transfer has completed to the Databricks destination.
- Access was configured using the **Open Sharing** option.
- You have the credential file link generated during destination setup.
- You can sign in to the Databricks workspace that will query the shared data.

## Consuming the Data Transfer

1. Open **Shares** in DeliveryHub.
2. Select the share you want to consume.
3. After transfer completion, select **Access Data**.
4. Download the Open Sharing credential file from the provided link.

### Access via Databricks UI

1. Sign in to Databricks UI.
2. Navigate to **Catalog** and then **Delta Sharing**.
3. Under **Shared with me**, choose **Import provider directly**.
4. In the import dialog:
	- Enter a provider name
	- Upload (or drag/drop) the downloaded share credential file
	- Select **Import**
5. Create a catalog from the imported share.
6. Query data from the created catalog.

## Query Validation (SQL)

Run a quick validation in Databricks SQL:

```sql
SHOW SCHEMAS IN <catalog_name>;
SHOW TABLES IN <catalog_name>.<schema_name>;
SELECT * FROM <catalog_name>.<schema_name>.<table_name> LIMIT 10;
```

## Troubleshooting

- **Import provider not available**: verify your workspace permissions for Delta Sharing.
- **Credential file rejected**: re-download credentials from Access Data and retry import.
- **No tables visible**: confirm transfer completion and refresh metadata/catalog view.
- **Query failures**: validate the selected catalog/schema/table names after import.

## Security Best Practices

- Treat share credential files as sensitive secrets.
- Store credentials in approved secure systems only.
- Rotate or revoke access immediately if credentials are exposed.
- Remove stale imported providers and catalogs when no longer needed.
