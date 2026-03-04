---
id: external-gcs-managed-bucket-setup-guide
title: External-Managed GCS Bucket Setup Guide
description: Configure DeliveryHub to deliver data to an external Google Cloud Storage bucket in your or a partner-managed GCP project.
---

# External-Managed GCS Bucket Setup Guide

Use this guide to configure DeliveryHub to write data to a Google Cloud Storage bucket that your organization (or partner) owns and manages.

This model gives you full control over bucket policy, encryption, IAM, and lifecycle configuration.

## Prerequisites

Before setup, confirm:

- A share exists in DeliveryHub.
- You know the target bucket name, region, and optional prefix/path.
- Your Google Cloud account can manage IAM policies and role assignments.
- If your organization restricts allowed external domains, allow DeliveryHub’s domain in org policy before granting access.

## Setup Instructions

### Step 1: Configure Share Destination

1. Open the share in DeliveryHub.
2. Select **Pick Destination**.
3. Choose **Google Cloud Storage**.
4. Select the target bucket region.
5. Select **External bucket** and continue.

### Step 2: Configure Destination Access Details

1. Enter the destination bucket name.
2. Optionally provide a write path/prefix.
3. Configure optional behaviors:
	- **DeliveryHub share path**: adds share-scoped pathing to avoid overlap when multiple shares write to one bucket.
	- **Mirror source data**: allows DeliveryHub to remove objects deleted from source.
4. Select one access mode:
	- **DeliveryHub Service Account**
	- **Assume Service Account**
5. Complete IAM steps for your selected mode (below), then select **Grant Access** and **Finish**.

> For warehouse-style sources or append-only use cases, keep **Mirror source data** disabled unless delete mirroring is explicitly required.

## Access Configuration

### Option 1: DeliveryHub Service Account

Use this mode when granting DeliveryHub’s service account direct access to the bucket.

1. Copy the DeliveryHub service account email from the destination setup modal.
2. In Google Cloud Console, open **Cloud Storage → Buckets**.
3. Open the target bucket permissions/access panel.
4. Add the DeliveryHub service account as a principal.
5. Assign roles:
	- `Storage Object Creator`
	- `Storage Object Viewer`

If DeliveryHub must delete objects in the destination, use `Storage Object User` instead of `Storage Object Creator`.

### Option 2: Assume Service Account

Use this mode when DeliveryHub should impersonate a service account that already has bucket write access.

1. Copy the DeliveryHub service account email from the setup modal.
2. In Google Cloud Console, open **IAM → Service Accounts**.
3. Select the service account that has access to the target bucket.
4. Grant DeliveryHub’s service account these roles on that service account:
	- `Service Account Token Creator`
	- `Service Account User`
5. Return to DeliveryHub and enter the service account to assume.
6. Select **Grant Access**, then **Finish**.

## KMS-Encrypted Buckets (Additional Requirement)

If the target bucket uses CMEK/KMS encryption, also grant the DeliveryHub service account key permissions:

- `Cloud KMS CryptoKey Encrypter/Decrypter`

Apply this on the key/key ring used by the destination bucket.

## Domain-Restricted Sharing Note

If org policies restrict which external principals can be granted access, update your domain restriction policy to allow DeliveryHub’s domain before IAM assignment.

## After Setup

After destination access is configured:

- Finalize source selection in the share.
- Run a transfer.
- Validate object delivery in the configured bucket/prefix.

## Best Practices

- Use dedicated service accounts for auditable production access.
- Scope permissions to the minimum required bucket/path.
- Validate retention and lifecycle rules before first transfer.
- Test in non-production buckets before rollout.