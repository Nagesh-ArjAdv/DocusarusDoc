---
title: Azure Blob Storage Setup Guide
---

import Admonition from '@theme/Admonition';

# Setup Guide

<div className="hero-banner">
  <h2>⚙️ Grant DeliveryHub Access to Your Azure Blob Container</h2>
  <p className="hero-sub">Configure authentication and permissions in 3 steps.</p>
</div>

<Admonition type="info" icon="☁️" title="Prerequisites">
You need an Azure tenant administrator or user with permissions to consent to applications and assign roles (Owner or higher) at the subscription, resource group, or storage account level.
</Admonition>

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Setup Overview</span>

1. **Consent** the DeliveryHub application in your Azure tenant
2. **Assign roles** granting DeliveryHub read access to your storage container
3. **Connect** the source in the DeliveryHub UI

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Step 1: Consent to the DeliveryHub Azure Application</span>

**Option A: Via DeliveryHub UI (Recommended)**

1. In DeliveryHub, open **Data sources** and click **Add Source**.
2. Enter a name for your source and select **Azure Blob Storage** + region.
3. Enter your **Tenant ID** and click **Test App Registration**.
4. Click the link provided (opens in a new tab).
5. Review and accept the permissions—you'll see "DeliveryHub app is connected!" when done.

**Option B: Via Azure CLI**

```bash
az ad app permission admin-consent --id <DELIVERYHUB_APP_ID>
```

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Step 2: Assign Roles to DeliveryHub</span>

After consent, grant the DeliveryHub application two roles to read blobs.

**Method 1: Azure CLI (Recommended)**

Replace placeholders with your actual values and run:

**Assign Storage Blob Delegator at the storage account:**

```bash
az role assignment create \
  --assignee <DELIVERYHUB_APP_ID> \
  --role "Storage Blob Delegator" \
  --scope "/subscriptions/<SUBSCRIPTION_ID>/resourceGroups/<RESOURCE_GROUP>/providers/Microsoft.Storage/storageAccounts/<STORAGE_ACCOUNT>"
```

**Assign Storage Blob Data Reader at the container:**

```bash
az role assignment create \
  --assignee <DELIVERYHUB_APP_ID> \
  --role "Storage Blob Data Reader" \
  --scope "/subscriptions/<SUBSCRIPTION_ID>/resourceGroups/<RESOURCE_GROUP>/providers/Microsoft.Storage/storageAccounts/<STORAGE_ACCOUNT>/blobServices/default/containers/<CONTAINER_NAME>"
```

**Optional: Restrict access to a folder**

To limit DeliveryHub to a specific folder (note the trailing slash is required):

```bash
az role assignment create \
  --assignee <DELIVERYHUB_APP_ID> \
  --role "Storage Blob Data Reader" \
  --scope "/subscriptions/<SUBSCRIPTION_ID>/resourceGroups/<RESOURCE_GROUP>/providers/Microsoft.Storage/storageAccounts/<STORAGE_ACCOUNT>/blobServices/default/containers/<CONTAINER_NAME>" \
  --condition "((!(ActionMatches{'Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read'} AND SubOperationMatches{'Blob.List'})) OR (@Resource[Microsoft.Storage/storageAccounts/blobServices/containers:name] StringEquals '<CONTAINER_NAME>' AND @Request[Microsoft.Storage/storageAccounts/blobServices/containers/blobs:prefix] StringStartsWith '<FOLDER_NAME>/'))"
```

---

**Method 2: Azure Portal**

1. In the Azure Portal, go to **Storage accounts** and select your storage account.

2. Assign **Storage Blob Delegator** (storage account level):
   - Click **Access Control (IAM)** → **Add role assignment**
   - Search for and select **Storage Blob Delegator**
   - Under **Members**, select **User, group, or service principal** → **Select members**
   - Type the DeliveryHub app name and add it
   - Click **Review + assign**

3. Assign **Storage Blob Data Reader** (container level):
   - Go to **Data storage** → **Containers** and select your target container
   - Click **Access Control (IAM)** → **Add role assignment**
   - Search for and select **Storage Blob Data Reader**
   - Add the DeliveryHub application as a member
   - Click **Review + assign**

4. (Optional) To restrict access to a folder:
   - While assigning the Data Reader role, click **Conditions**
   - Set **Editor type** to **Code**
   - Paste this condition (replace placeholders):
   ```
   ( ( !(ActionMatches{'Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read'} AND SubOperationMatches{'Blob.List'}) ) OR ( @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:name] StringEquals '<CONTAINER_NAME>' AND @Request[Microsoft.Storage/storageAccounts/blobServices/containers/blobs:prefix] StringStartsWith '<FOLDER_NAME>/' ) )
   ```
   - Click **Save** and then **Review + assign**

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Step 3: Connect Your Source in DeliveryHub</span>

1. Return to the DeliveryHub UI.
2. Enter your **Storage account name** and **Container name**. Optionally add a folder path.
3. Click **Save** and run a connection test.
4. Once validated, add the source to a Share, select Destinations, and create Transfers.

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Troubleshooting</span>

**"DeliveryHub app is not connected!"**
- Ensure a tenant admin consented to the application and check there are no tenant policies blocking user consent.

**"Permission denied" when accessing blobs**
- Verify both roles are assigned: Storage Blob Delegator (account) and Storage Blob Data Reader (container).
- Check that the role scope matches your container/folder.

**Need to restrict access to a folder?**
- Use the condition expression in Step 2, ensuring the folder path ends with `/`.

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Related Resources</span>

- [Azure Object Storage Overview](/docs/Sources/Azure-object-storage) — Features and capabilities
- [What is a Hubhouse Table](/docs/hubhouse/what-is-a-hubhouse-table) — Learn about tables
- [What are Data Products](/docs/hubhouse/what-are-data-products) — Build and deliver data products
