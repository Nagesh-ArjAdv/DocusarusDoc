---
id: create-and-manage-consumer-organizations
title: Create and Manage Consumer Organizations
---

# Create and Manage Consumer Organizations

This guide explains how providers create, manage, and assign Consumer Organizations in DeliveryHub.

## Prerequisites

- Access to the DeliveryHub application
- Permissions to manage shares and consumer metadata

## Creating and managing Consumer Organizations

There are two common ways to create a Consumer Organization:

- From the **Consumer Organizations** page
- Directly from a **Share** while configuring it

### Option 1: From the Consumer Organizations page

1. Open **Consumer Organizations**.
2. Click **Create Consumer Organization**.
3. Enter a human-readable name.
4. Save.

:::tip Naming requirement
Use a Consumer Organization name with at least **2 characters**.
:::

### Edit a Consumer Organization

1. Open **Consumer Organizations**.
2. Open the row action menu (ellipsis).
3. Select **Edit**.
4. Update details and save.

### Delete a Consumer Organization

1. Open **Consumer Organizations**.
2. Open the row action menu (ellipsis).
3. Select **Delete** and confirm.

:::warning Before you delete
Deleting an organization that is referenced by active shares can impact reporting and billing attribution.
Reassign affected shares first, then delete.
:::

### Option 2: Add new or existing from a Share

1. Open **Shares** and select the target share.
2. Click **Add Consumer Organization**.
3. In the selector, either:
	- choose an existing organization, or
	- type a new name and create it inline.
4. Click **Done**.

## Assign a Consumer Organization to a share

You can assign or change the consumer organization from the share details view while setting up source, destination, and transfers.

See [Create and Manage Share](/docs/shares/create-and-manage-share).

## Best practices

- Use stable naming conventions (customer, region, business unit).
- Create organizations before onboarding new consumer shares.
- Review organization usage regularly across active shares.
- Avoid deleting organizations that are still referenced by active shares.

## Related guides

- [Consumer Organizations](/docs/consumer-organizations)
- [Create and Manage Share](/docs/shares/create-and-manage-share)
- [Transfers Quickstart](/docs/quickstarts/transfers-quickstart)
