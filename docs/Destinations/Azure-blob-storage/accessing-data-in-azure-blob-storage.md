---
id: accessing-data-in-azure-blob-storage
title: Accessing Data in Azure Blob Storage
description: Access data transfers delivered by DeliveryHub to Azure Blob Storage using AzCopy or Azure CLI.
---

# Accessing Data in Azure Blob Storage

This guide explains how to access data delivered to an Azure Blob Storage destination through DeliveryHub.

You can access transfer data using:
- AzCopy (recommended for copy/sync operations)
- Azure CLI (useful for listing and scripting)
- Azure-compatible clients or REST APIs (for production integrations)

## Prerequisites

Before consuming data, confirm all requirements are met:

- A transfer has completed to the Azure Blob destination.
- Access has been configured in DeliveryHub for the identity that will read the data.
- One access method is configured in your share:
	- **DeliveryHub-managed application** (use credentials generated in DeliveryHub)
	- **Consumer-managed application** (use your own multi-tenant Azure app credentials)
- Azure CLI and/or AzCopy is installed.

> Azure Blob data access in this workflow is typically performed using AzCopy, Azure CLI, or Azure REST APIs.

## Access Data from a Share

1. Open **Shares** in DeliveryHub.
2. Select the share you want to consume.
3. After a transfer completes, select **Access Data**.
4. Copy the access values shown in the dialog (for example, Storage Container URI, Application ID, Tenant ID, and secret if provided).

---

## Option 1: Access via AzCopy (Recommended)

AzCopy is the preferred method for listing, copying, and syncing transfer data.

### Step 1: Authenticate

Set your client secret as an environment variable.

**Windows Command Prompt**

```bat
set AZCOPY_SPA_CLIENT_SECRET=<client-secret>
```

**PowerShell**

```powershell
$Env:AZCOPY_SPA_CLIENT_SECRET="<client-secret>"
```

Log in with service principal credentials:

```bash
azcopy login --service-principal --application-id <application-id> --tenant-id <tenant-id>
```

### Step 2: List Transfer Contents

```bash
azcopy list <storage-container-uri>
```

### Step 3: Generate a SAS Token (for copy/sync scenarios)

Sign in with Azure CLI:

```bash
az login --service-principal -u <application-id> -p <client-secret> --tenant <tenant-id>
```

Generate a SAS token:

```bash
az storage container generate-sas --account-name <storage-account-name> --name <container-name> --permissions lr --expiry <expiry-utc> --auth-mode login --as-user
```

### Step 4: (If needed) Switch Tenant Context

If your destination or target account is in a different tenant, re-authenticate before copy/sync.

**DeliveryHub-managed app access**

```bash
azcopy login --tenant-id <your-tenant-id>
```

**Consumer-managed app access**

```bash
azcopy login --service-principal --application-id <application-id> --tenant-id <your-tenant-id>
```

### Step 5: Copy Data

Append the SAS token to the source URI (include `?` before the token):

```bash
azcopy copy "<source-storage-container-uri>?<sas-token>" "<target-container-uri>"
```

### Step 6: Sync Data

```bash
azcopy sync "<source-storage-container-uri>?<sas-token>" "<target-container-uri>"
```

---

## Option 2: Access via Azure CLI

Use Azure CLI when you need scripted metadata checks or directory-style listing.

### Step 1: Authenticate

```bash
az login --service-principal -u <application-id> -p <client-secret> --tenant <tenant-id>
```

### Step 2: List Blobs in the Transfer Path

```bash
az storage blob list --auth-mode login --blob-endpoint <blob-endpoint> -c <container-name> --delimiter '/'
```

From a URI like:

`https://<storage-account>.blob.core.windows.net/<container-name>/<transfer-prefix>`

Use:
- `blob-endpoint` = `https://<storage-account>.blob.core.windows.net`
- `container-name` = `<container-name>`
- `delimiter` / prefix pattern = `<transfer-prefix>`

> Use AzCopy for large-scale copy and sync operations.

---

## Data Fulfillment (Hubhouse) Access Notes

If consuming data through DeliveryHub Data Fulfillment workflows:

- Open the Data Consumer record and select **Access Data**.
- Share required credentials and delivery paths securely with the consuming team.
- Expect discrete paths per Data Product (instead of one aggregated container path).

## Troubleshooting

- **Authentication failed**: Verify `application-id`, `tenant-id`, and active secret value.
- **No blobs listed**: Confirm transfer completed and the URI points to the correct path.
- **Permission denied**: Check RBAC scope and role assignments for the app identity.
- **Copy/sync issues**: Regenerate SAS token with valid expiry and required permissions.

## Security Best Practices

- Store secrets in Key Vault or another approved secret manager.
- Rotate client secrets before expiration.
- Use the smallest RBAC scope required.
- Audit app sign-ins and role assignments regularly.