---
id: deliveryhub-managed-gcs-bucket-setup-guide
title: DeliveryHub-Managed GCS Bucket Setup Guide
description: Configure a DeliveryHub-managed Google Cloud Storage destination and grant access to approved Google principals.
---

# DeliveryHub-Managed GCS Bucket Setup Guide

Use this guide to configure a **DeliveryHub-managed** Google Cloud Storage (GCS) destination and grant consumer access to delivered data.

In this model, DeliveryHub provisions and manages the destination bucket infrastructure, while you control which Google principals can access data.

## Prerequisites

Before setup, confirm the following:

- For Transfers: a share has been created.
- For managed destination workflows: the feature is enabled in your environment.
- You have one or more Google principals ready for access configuration:
	- Google Account
	- Google Group
	- Service Account
- You know the target GCS region for the destination.

## Permissions Granted

DeliveryHub-managed bucket access is read-oriented for approved principals and typically includes:

- `storage.objects.get`
- `storage.objects.list`
- `storage.buckets.get`

These permissions support object discovery and retrieval workflows.

## Setup via Share (Transfers)

1. Open the share in DeliveryHub.
2. Select **Pick Destination**.
3. Choose **Google Cloud Storage**.
4. Select destination region.
5. Keep **DeliveryHub-managed bucket** selected.
6. Configure **Requester Pays** preference.
7. Continue to access setup.
8. In **Principal type**, choose one:
	 - Google Account
	 - Google Group
	 - Service Account
9. Enter the principal email.
10. Select **Grant Access**.
11. Select **Finish**.

You can now proceed with source selection and transfer execution.

## Requester Pays Guidance

When **Requester Pays** is enabled, request and transfer charges are billed to the consuming project instead of your organization.

Important behavior:
- This setting is effectively immutable for an active share.
- To change it, archive the share and create a new one with the desired setting.

## Setup via managed destination workflow

1. Create or open a Data Consumer record.
2. Choose **Google Cloud Storage** as destination.
3. Select the destination region.
4. Choose principal type (Google Account, Group, or Service Account).
5. Enter principal email and save access credentials.
6. Complete setup and begin delivering data through the managed destination workflow.

## Revoking Access

To revoke access, remove or revoke the principal from destination access settings in DeliveryHub.

## Best Practices

- Use service accounts for production automation.
- Grant access to groups where possible to simplify lifecycle management.
- Periodically review principal membership and remove stale identities.
- Standardize destination naming and regional policies across shares.