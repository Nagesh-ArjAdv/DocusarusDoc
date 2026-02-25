---
title: Google Cloud Storage Setup Guide
---

import Admonition from '@theme/Admonition';

# Setup Guide

This guide describes the steps for a provider to configure DeliveryHub access to a Google Cloud Storage bucket to use as a data source.

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Prerequisites</span>

To configure DeliveryHub access to your bucket, your account must have sufficient permissions to create custom roles and assign roles in Google Cloud Storage.

<Admonition type="info" title="Domain Allowlist (if applicable)">
If your GCP organization restricts which domains can access resources, you must add the DeliveryHub domain to your organization policies.

To find the DeliveryHub domain:
1. Log into DeliveryHub and go to **Settings** → **Environment**
2. Scroll to **Google Cloud Storage** and note the DeliveryHub domain
3. Follow [Add domain to organization in GCP](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-policies) to allowlist the DeliveryHub domain
</Admonition>

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Setup Instructions</span>

### <span style={{color: 'var(--ifm-color-primary)'}}>Step 1: Create a Custom IAM Role</span>

1. Log into the Google Cloud Platform Console as a **Project Editor**
2. From the home dashboard, go to **IAM & Admin** → **Roles**
3. Click **Create Role**
4. Enter a role name (e.g., `DeliveryHub GCS Access Role`) and description (e.g., "Custom role for DeliveryHub to access required data in GCS buckets")
5. Click **Add Permissions** and add these three permissions:
   - `storage.buckets.get`
   - `storage.objects.get`
   - `storage.objects.list`
6. Click **Create**

---

### <span style={{color: 'var(--ifm-color-primary)'}}>Step 2: Assign the Custom Role to the DeliveryHub Service Account</span>

Before starting, obtain the **DeliveryHub Service Account Email**. Find it in one of these ways:

- In DeliveryHub, go to **Settings** → **Environment**, scroll to **Google Cloud Storage**, and copy the service account email
- Or, create a new source: go to **Data sources** → **Add Source**, select **Google Cloud Storage** and your region, then follow the wizard to see the service account email

Then assign the role:

1. Log into the Google Cloud Platform Console as a **Project Editor**
2. Go to **Cloud Storage** → **Buckets**
3. Find your bucket and click the **three-dot menu** on its row, then select **Edit Access**
4. Click **Add Principal**
5. Paste the DeliveryHub Service Account Email into the **New principals** field and select it from the dropdown
6. From the **Role** dropdown, select the custom role you created in Step 1 (e.g., `DeliveryHub GCS Access Role`)
7. Click **Save**

You should now see the role assigned to the DeliveryHub service account.

---

### <span style={{color: 'var(--ifm-color-primary)'}}>Step 3: (KMS Encrypted Buckets Only) Grant Cryptographic Key Permissions</span>

If your GCS bucket is encrypted with a customer-managed key (CMK) in Cloud KMS:

1. Log into the Google Cloud Platform Console as a **Project Editor**
2. Go to **Security** → **Key Management**
3. Select the key ring associated with your GCS bucket
4. Click **Show Info Panel** in the upper-right corner
5. Click **Add Principal**
6. Search for the DeliveryHub service account and select it
7. From the **Select a role** dropdown, choose **Cloud KMS CryptoKey Encryptor/Decryptor**
8. Click **Save**

---

### <span style={{color: 'var(--ifm-color-primary)'}}>Step 4: Finish Configuration in DeliveryHub</span>

1. In DeliveryHub, go to **Data sources** and click **Add Source**
2. Enter a human-readable name for your source
3. Select **Google Cloud Storage** and choose the region of your bucket (note: if your bucket is multi-region, you can select any supported region)
4. Enter the bucket name and optionally a folder path at the root of your source
5. Click **Save**

Once successfully configured, you can add the source to a Share, choose Destinations, and create Transfers to start delivering your data.

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Related Resources</span>

- [Google Cloud Storage Overview](/docs/Sources/Google-cloud-storage) — Features and capabilities
- [GCP IAM Permissions Reference](https://cloud.google.com/iam/docs/permissions-reference) — Full permission details
- [What is a Hubhouse Table](/docs/hubhouse/what-is-a-hubhouse-table) — Learn about Hubhouse Tables
