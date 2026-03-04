---
id: accessing-data-in-snowflake
title: Accessing data in Snowflake
description: Access data delivered by DeliveryHub in Snowflake using private sharing and database creation from share.
---

# Accessing data in Snowflake

This guide explains how to consume data delivered by DeliveryHub in Snowflake.

## Prerequisites

Before consuming data, confirm:

- In Transfers: a data transfer has completed and destination access is configured for the consuming identity.
- In Hubhouse Data Fulfillment: at least one Data Product has been shared to the destination.
- The Snowflake user accepting the private listing/share has profile fields set: first name, last name, and email.

Example SQL to set profile fields:

```sql
ALTER USER <username>
SET FIRST_NAME = 'John', LAST_NAME = 'Smith', EMAIL = 'john@company.com';
```

## Consuming a Data Transfer via Share (Transfers)

1. Open **Shares** in DeliveryHub.
2. Select the share you want to access.
3. After transfer completion, select **Access Data**.

### Access via Snowflake UI (Snowsight)

1. Sign in to Snowsight with the Snowflake account that has share access.
2. Navigate to **Data** → **Private Sharing**.
3. Under **Shared With Me**, select the DeliveryHub-provided share/listing.
4. In the dialog, create a database from the share:
	- Set database name (or keep default)
	- Grant privileges to required roles
5. Select **Get Data** (or equivalent action) to create the shared database.
6. Query schemas/tables from the created database.

### Validation SQL

```sql
SHOW SCHEMAS IN DATABASE <shared_db_name>;
SHOW TABLES IN SCHEMA <shared_db_name>.<schema_name>;
SELECT * FROM <shared_db_name>.<schema_name>.<table_name> LIMIT 10;
```

## Accessing Data Products via Data Fulfillment (Hubhouse)

1. Open the Data Consumer in Data Fulfillment.
2. Select **Access Data** after fulfillment is complete.
3. Share the provided access details securely with the consumer.
4. Follow the same Snowflake UI steps above to create/query the shared database.

## Troubleshooting

- **Share not visible**: verify account identifiers and access grants in DeliveryHub.
- **Cannot create database from share**: confirm role privileges and user profile metadata.
- **No tables visible**: ensure transfer/fulfillment completed and refresh object listings.

## Best Practices

- Use separate shared databases per environment (dev/stage/prod).
- Grant least-privilege roles to shared objects.
- Audit shared database access and role grants regularly.
