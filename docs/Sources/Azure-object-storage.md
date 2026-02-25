---
title: Azure Object Storage
---

import Admonition from '@theme/Admonition';

# <span style={{color: 'var(--ifm-color-primary)'}}>Azure Object Storage (Blob) — DeliveryHub Source</span>

<div className="hero-banner">
  <h2>Connect Azure Blob Storage to DeliveryHub</h2>
  <p className="hero-sub">Secure, scalable ingestion from Azure containers into Hubhouse Tables.</p>
</div>

<Admonition type="info" icon="☁️" title="Quick summary">
DeliveryHub reads blobs from Azure Storage. Register the DeliveryHub application in your tenant, grant it the minimum Storage Blob roles, then configure the source in DeliveryHub.
</Admonition>

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Why Azure Blob for DeliveryHub?</span>

Azure Blob Storage pairs well with DeliveryHub for large-file ingestion, partitioned datasets, and enterprise security controls (KMS, private endpoints, and Entra ID).

<div className="feature-grid">
  <div className="feature-item">
    <span className="feature-icon">📈</span>
    <div>
      <strong>Scale & Performance</strong>
      <p>Handle TB-scale datasets with high throughput and parallelism.</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">🔒</span>
    <div>
      <strong>Enterprise Security</strong>
      <p>Use Entra ID, role assignments, and customer-managed keys for strict access control.</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">🧾</span>
    <div>
      <strong>Flexible Formats</strong>
      <p>Ingest CSV, Parquet, JSON, Avro, or custom object formats.</p>
    </div>
  </div>
</div>

---

## <span style={{color: 'var(--ifm-color-primary)'}}>DeliveryHub Application (Azure)</span>

1. Register the DeliveryHub application in your Azure AD (Entra ID) tenant.
2. Grant the app the minimal API permission `User.Read` so it appears under Enterprise Applications after consent.

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Required Azure Roles</span>

Grant these roles to the DeliveryHub application (assign at storage account or container scope):

- **Storage Blob Delegator** (Storage account) — allows delegation for blob operations when using managed identities or role-based flows.
- **Storage Blob Data Reader** (Container level) — read access to blob contents.

Use least-privilege: prefer scoping `Storage Blob Data Reader` to specific containers or paths.

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Azure-specific Setup (unique guidance)</span>

Below are Azure CLI examples and practical tips tailored for Azure environments.

<Admonition type="note" title="Find resource IDs">
Use `az storage account show` and `az storage container show` to get resource IDs needed for role assignment.
</Admonition>

### Example: Assign Storage Blob Data Reader to an App (container scope)

Replace placeholders before running:

```bash
# Variables (replace values)
SUBSCRIPTION_ID="<subscription-id>"
RESOURCE_GROUP="<resource-group>"
STORAGE_ACCOUNT="<storage-account-name>"
CONTAINER_NAME="<container-name>"
APP_OBJECT_ID="<service-principal-object-id>"

# Container resource ID
CONTAINER_SCOPE="/subscriptions/${SUBSCRIPTION_ID}/resourceGroups/${RESOURCE_GROUP}/providers/Microsoft.Storage/storageAccounts/${STORAGE_ACCOUNT}/blobServices/default/containers/${CONTAINER_NAME}"

# Assign role
az role assignment create --assignee ${APP_OBJECT_ID} --role "Storage Blob Data Reader" --scope "${CONTAINER_SCOPE}"
```

### Grant Storage Blob Delegator at storage account

```bash
STORAGE_SCOPE="/subscriptions/${SUBSCRIPTION_ID}/resourceGroups/${RESOURCE_GROUP}/providers/Microsoft.Storage/storageAccounts/${STORAGE_ACCOUNT}"
az role assignment create --assignee ${APP_OBJECT_ID} --role "Storage Blob Delegator" --scope "${STORAGE_SCOPE}"
```

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Network & Encryption Considerations</span>

- For sensitive data, enable Private Endpoints and configure DeliveryHub network access accordingly.
- If the container is encrypted with a customer-managed key (CMK), add the DeliveryHub role as a Key User in Azure Key Vault access policies.

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Quick Checklist</span>

- Register DeliveryHub app in Entra ID
- Grant `Storage Blob Delegator` (account) and `Storage Blob Data Reader` (container)
- (Optional) Configure Private Endpoint and KMS/Key Vault access
- Add source in DeliveryHub and test ingestion

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Related Resources</span>

- [Azure Object Storage Setup Guide](/docs/Sources/Azure-object-storage/setup-guide)
- [What is a Hubhouse Table](/docs/hubhouse/what-is-a-hubhouse-table)
- [Network Security Best Practices](/docs/using/environment)
