---
id: index
title: Google Cloud Storage
description: Configure Google Cloud Storage destinations in DeliveryHub using either DeliveryHub-managed or external buckets.
---

# Google Cloud Storage

<div className="hero-image">
  <img src="\img\deliveryhub-gcs-destination.png" alt="DeliveryHub Platform" />
</div>
Google Cloud Storage (GCS) is a supported destination in DeliveryHub for secure, scalable file delivery.

DeliveryHub supports two destination models:
- **DeliveryHub-managed bucket**: Fastest onboarding with infrastructure managed by DeliveryHub.
- **External-managed bucket**: Full control in your own or partner-managed GCP project.

Both models support region selection and controlled access for approved Google principals.

## Choose Your Destination Model

### DeliveryHub-Managed GCS Bucket

Use this model when you want a streamlined setup with DeliveryHub managing the destination bucket lifecycle.

Typical access granted for approved principals includes:
- `storage.objects.get` (read object data/metadata)
- `storage.objects.list` (list objects)
- `storage.buckets.get` (read bucket metadata)

Continue with setup:

- [DeliveryHub-managed bucket setup guide](./deliveryhub-managed%20bucket%20setup%20guide)

### External-Managed GCS Bucket

Use this model when your organization requires full ownership of bucket configuration, policy, and operations.

Continue with setup:

- [External-managed bucket setup guide](./External-managed%20bucket%20setup%20guide)

## Accessing Delivered Data

After destination configuration and successful transfers, use the access guide for retrieval and operational workflows.

- [Accessing data in Google Cloud Storage](./accessing-data-in-google-cloud-storage)

## Operational Recommendations

- Prefer least-privilege IAM roles for data consumers.
- Review principal access periodically.
- Align bucket location with data residency and performance needs.
- Standardize naming conventions for buckets and transfer paths.