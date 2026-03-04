---
id: consuming-a-data-transfer-in-google-bigquery
title: Consuming a data transfer in Google BigQuery
description: Consume data delivered by DeliveryHub in Google BigQuery through Analytics Hub listings and linked datasets.
---

# Consuming a data transfer in Google BigQuery

This guide explains how to consume data delivered by DeliveryHub in Google BigQuery.

DeliveryHub uses Google Analytics Hub to share data, allowing authorized consumers to subscribe to listings and query linked datasets in their own projects.

## Prerequisites

Before consuming data, confirm the following:

- A data transfer has completed to the BigQuery destination.
- Access has been configured in DeliveryHub for the consuming Google principal.
- You can sign in to Google Cloud Console with the principal granted access.

## Consuming the Data Transfer

1. Open **Shares** in DeliveryHub.
2. Select the share you want to consume.
3. After transfer completion, select **Access Data**.

### Accessing Data via Web Console

1. In the Access Data dialog, open the **Web Console** tab.
2. Select the link to open the Analytics Hub listing.
3. Subscribe to the listing.
4. Confirm a linked dataset is created in your project.
5. Query the linked dataset in BigQuery.

Subscribing grants read-only access through a linked dataset managed in your consumer project.

## Validation Checklist

- Listing opens with the expected destination/share details.
- Subscription succeeds for the intended project.
- Linked dataset appears in BigQuery Explorer.
- Sample query returns expected results.

## Troubleshooting

- **Listing access denied**: verify the principal in DeliveryHub matches the signed-in Google account.
- **Cannot subscribe**: confirm project permissions for Analytics Hub subscription.
- **No linked dataset appears**: refresh BigQuery Explorer and re-check subscription project selection.
- **Query errors**: verify transfer completion and dataset/table naming in the linked dataset.

## Best Practices

- Use group principals for easier access lifecycle management.
- Separate dev/stage/prod consumers at project level.
- Review subscriptions and principal access regularly.
