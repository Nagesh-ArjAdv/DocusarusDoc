---
id: consumer-managed-application-setup-guide
title: Consumer-Managed Application Setup Guide
description: Configure Azure Blob Storage access in DeliveryHub using your own Azure multi-tenant application.
---

# Consumer-Managed Application Setup Guide

Use this guide to configure DeliveryHub to deliver data to Azure Blob Storage while **you retain ownership of the Azure application credentials**.

In this model:
- DeliveryHub writes data to the target storage location.
- Access is granted to the Azure application you provide.
- Your team controls app registration, secrets, and lifecycle.

## Prerequisites

Before setup, confirm the following:

- A share exists in DeliveryHub.
- You have a target Azure subscription, storage account, and blob container.
- You can create or use an existing **multi-tenant** Azure application.
- You have permission to assign RBAC roles at:
  - Subscription scope
  - Container scope

> If app registration is restricted in your tenant, an Entra ID admin may need to create the app or grant you the required permissions.

## Setup Overview

1. Create or prepare an Azure multi-tenant application.
2. Assign required Azure roles.
3. Configure the destination in DeliveryHub using the app details.
4. Validate access and complete destination setup.

---

## Step 1: Create an Azure Application

You can do this in either the Azure Portal or Azure CLI.

### Option A: Azure Portal

1. Sign in to Azure Portal.
2. Switch to the tenant where the target storage account/container exists.
3. Go to **Microsoft Entra ID → App registrations → New registration**.
4. Set:
	- Name: your app name
	- Supported account types: **Accounts in any organizational directory (Multitenant)**
5. Create the app and record:
	- **Application (client) ID**
	- **Directory (tenant) ID** (recommended)
6. Go to **Certificates & secrets → New client secret** and create a secret.
7. Copy the secret value immediately and store it securely (for example, Key Vault).

### Required Role Assignments

Assign the application these roles:

1. **Subscription scope**
	- Role: `Storage Queue Data Reader`
	- Scope: target subscription

2. **Container scope**
	- Role: `Storage Blob Data Contributor`
	- Scope: target blob container

> These role assignments allow DeliveryHub workflows to coordinate transfer operations and write objects to the target container.

### Option B: Azure CLI

Use Azure CLI or Cloud Shell.

1. Log in to the correct tenant:

```bash
az login --tenant <tenant-id>
```

2. Create service principal with subscription-level role:

```bash
az ad sp create-for-rbac \
  -n "<app-name>" \
  --role "Storage Queue Data Reader" \
  --scope "/subscriptions/<subscription-id>"
```

3. Record values returned by the command:
	- `appId`
	- `password`
	- `tenant`

4. Ensure app is multi-tenant:

```bash
az ad app update --id <app-id> --sign-in-audience AzureADMultipleOrgs
```

5. (Optional) Create target container:

```bash
az storage container create \
  -n <container-name> \
  --account-name <storage-account-name> \
  --auth-mode login
```

6. Assign container-level role:

```bash
az role assignment create \
  --assignee <app-id> \
  --role "Storage Blob Data Contributor" \
  --scope "/subscriptions/<subscription-id>/resourceGroups/<resource-group>/providers/Microsoft.Storage/storageAccounts/<storage-account>/blobServices/default/containers/<container-name>"
```

## Step 2: Configure Destination in DeliveryHub

1. Open the share in DeliveryHub.
2. Select **Pick Destination**.
3. Choose **Azure Blob Storage** and the target region.
4. Select the **Consumer-Managed Application** access method.
5. Enter:
	- Destination label (optional)
	- **Application ID (Client ID)**
	- **Tenant ID** (recommended)
6. Select **Grant Access**.
7. Select **Finish** to complete destination setup.

## Where to Find Values Later

If you need to retrieve values after initial setup:

- **Application ID**: Microsoft Entra ID → App registrations → your app
- **Tenant ID**: Microsoft Entra ID → Overview
- **Secret**: create a new client secret if the previous one is no longer available

## Revoking Access

To revoke access, remove or disable the configured application from the destination in DeliveryHub, or remove assigned RBAC roles in Azure.

## Security & Operations Best Practices

- Store secrets only in approved secret managers (for example, Azure Key Vault).
- Set secret expiration policies and rotate before expiry.
- Use least-privilege RBAC and scope assignments narrowly.
- Audit role assignments and app sign-ins regularly.
- Remove unused applications and stale credentials promptly.