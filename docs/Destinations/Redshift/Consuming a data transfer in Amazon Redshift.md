---
id: consuming-a-data-transfer-in-amazon-redshift
title: Consuming a data transfer in Amazon Redshift
description: Consume data delivered by DeliveryHub in Amazon Redshift using datashares and SQL database creation.
---

# Consuming a data transfer in Amazon Redshift

This guide explains how to consume data delivered by DeliveryHub in Amazon Redshift.

## Prerequisites

Before consuming data, confirm the following:

- A data transfer has completed to the Redshift destination.
- Access has been configured in DeliveryHub for the AWS account that will consume data.
- You can access Amazon Redshift in the target AWS account.

## Consuming the Data Transfer

1. Open Amazon Redshift in the AWS Console.
2. In the left navigation, open **Datashares**.
3. Select the datashare associated with your DeliveryHub share.
4. After transfer completion, open **Access Data** details from the DeliveryHub share.
5. Copy the SQL statement provided to create a database from the datashare.
6. Run the SQL statement in Redshift Query Editor.
7. Query the created database/schema objects to verify access.

### Example SQL Pattern

Use the statement provided in DeliveryHub. A common pattern is:

```sql
CREATE DATABASE <consumer_database_name>
FROM DATASHARE <datashare_name>
OF ACCOUNT '<producer_account_id>'
NAMESPACE '<producer_namespace>';
```

Then grant usage as needed in your consumer environment.

## Validation Checklist

- Database creation succeeds without permission errors.
- Shared schemas/tables are visible in the consumer database.
- Sample queries return expected data.

## Troubleshooting

- **Datashare not visible**: verify destination access was granted to the correct AWS account.
- **CREATE DATABASE fails**: confirm account/namespace values and Redshift datashare compatibility.
- **Objects not found**: ensure transfer has completed and refresh metadata in Query Editor.

## Best Practices

- Create environment-specific consumer databases (dev/stage/prod).
- Control downstream permissions using Redshift roles/groups.
- Audit shared object access and query usage regularly.
