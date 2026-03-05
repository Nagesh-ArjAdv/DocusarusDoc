---
id: hubhouse-quickstart
title: Hubhouse Quickstart
---

# Hubhouse Quickstart

This guide helps you get started with **Hubhouse** in DeliveryHub so you can create Hubhouse Tables, define Data Products, and fulfill them to destinations.

## Prerequisites

Before you begin, make sure you have:

- Access to a DeliveryHub environment with Hubhouse enabled
- Permissions to configure [Sources](/docs/Sources/) and [Destinations](/docs/Destinations/)
- Required credentials and cloud permissions for your selected systems

## Step 1: Sign in to DeliveryHub

Sign in using your DeliveryHub credentials and confirm you can access Hubhouse features in your workspace.

## Step 2: Set up a data source

1. Open **Sources** from the left navigation.
2. Click **Add Source**.
3. Complete the setup wizard and save.

After connection, DeliveryHub starts indexing source metadata for table setup and product definition.

:::tip
Some sources require extra IAM, networking, or provisioning prerequisites.
Verify these requirements before setup.
:::

## Step 3: Create a Hubhouse Table

1. Open **Hubhouse Tables**.
2. Select **Create Hubhouse Table**.
3. Follow the wizard to configure replication pattern and sync settings.
4. Save and run the initial sync.

When the first sync completes, your canonical table is ready to power Data Products.

For more context, see [What is a Hubhouse Table](/docs/hubhouse/what-is-a-hubhouse-table).

## Step 4: Define a Data Product

1. Open **Data Products**.
2. Click **Define Data Product**.
3. Select source Hubhouse Table(s).
4. Use query-based or no-code configuration to shape the dataset.
5. Save your Data Product.

See [What are Data Products](/docs/hubhouse/what-are-data-products) for concepts and best practices.

## Step 5: Set up Data Fulfillment

1. Open **Data Fulfillment**.
2. Add a new consumer or fulfillment target.
3. Select destination type and region.
4. Provide destination access credentials and save.

This configuration defines where and how your Data Products will be delivered.

For details, see [What is Data Fulfillment](/docs/hubhouse/what-is-data-fulfillment).

## Step 6: Share Data Products with a consumer

1. Open the consumer/fulfillment target you created.
2. Click **Share Data**.
3. Choose one or more Data Products.
4. Optionally customize delivery behavior.
5. Confirm and start fulfillment.

## Step 7: Monitor delivery and validate access

After sharing starts:

- Monitor run status and logs from fulfillment details.
- Confirm destination objects are created as expected.
- Verify schema, row counts, and freshness.

Use destination-specific instructions from [Destinations](/docs/Destinations/) when handing off access details.

## Step 8: Expand your Hubhouse footprint

Once your first fulfillment is successful, scale by:

- Defining additional Data Products for new use cases
- Adding more consumers and destination targets
- Running historical backfills when business logic changes

For historical refresh workflows, see [Backfilling in Hubhouse](/docs/hubhouse/backfilling-in-hubhouse).
