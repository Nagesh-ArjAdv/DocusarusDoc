---
id: accessing-data-in-google-cloud-storage
title: Accessing Data in Google Cloud Storage
description: Access data transfers delivered by DeliveryHub to Google Cloud Storage using web console, gcloud, or gsutil.
---

# Accessing Data in Google Cloud Storage

This guide explains how to access data delivered to a Google Cloud Storage (GCS) destination through DeliveryHub.

You can consume data using:
- GCP Web Console
- `gcloud storage` commands
- `gsutil` commands

## Prerequisites

Before consuming data, confirm the following:

- A transfer has completed to the GCS destination.
- Access has been configured for the principal that will read data.
- For managed destination workflows, at least one delivery must have completed to the destination.
- GCP CLI tools are installed if using command-line access.

If **Requester Pays** is enabled on the destination:
- The consuming principal needs `Service Usage Consumer`.
- The billing project used in commands must have billing enabled.

## Access Data from a Share

1. Open **Shares** in DeliveryHub.
2. Select the share you want to access.
3. After transfer completion, select **Access Data**.
4. Copy the bucket URI and any access details shown.

---

## Option 1: Access via Web Console

1. In the **Access Data** dialog, open the **Web Console** tab.
2. Select the provided link to open the destination path in GCP Console.
3. Sign in with the same principal that was granted access.

Use this path for quick validation, browsing, and ad hoc downloads.

---

## Option 2: Access via Command Line

### Step 1: Authenticate

For user credentials:

```bash
gcloud auth login
```

For service account credentials:

```bash
gcloud auth activate-service-account <service-account-email> --key-file=<path-to-private-key-file>
```

### Step 2: List, Copy, and Sync (gcloud)

List recursively:

```bash
gcloud storage ls -r <storage-bucket-uri>
```

Copy recursively:

```bash
gcloud storage cp -r <storage-bucket-uri> <your-bucket/path>
```

If Requester Pays is enabled, add billing project:

```bash
gcloud storage ls -r <storage-bucket-uri> --billing-project=<your-billing-project-id>
gcloud storage cp -r <storage-bucket-uri> <your-bucket/path> --billing-project=<your-billing-project-id>
```

> Add `--billing-project` only when Requester Pays is enabled. Including it otherwise can fail depending on project configuration.

### Step 3: List, Copy, and Sync (gsutil)

List recursively:

```bash
gsutil ls -r <storage-bucket-uri>
```

Copy recursively:

```bash
gsutil cp -r <storage-bucket-uri> <your-bucket/path>
```

Sync changes:

```bash
gsutil rsync -r <storage-bucket-uri> <your-bucket/path>
```

If Requester Pays is enabled, include billing project with `-u`:

```bash
gsutil -u <your-billing-project-id> ls -r <storage-bucket-uri>
gsutil -u <your-billing-project-id> cp -r <storage-bucket-uri> <your-bucket/path>
gsutil -u <your-billing-project-id> rsync -r <storage-bucket-uri> <your-bucket/path>
```

## Managed destination workflow notes

When consuming via a managed destination workflow:

- Open the relevant consumer or managed destination entry and select **Access Data**.
- Share the provided access path details with the consumer securely.
- Expect discrete object paths for delivered datasets rather than one single shared path.

## Troubleshooting

- **Permission denied**: verify the exact principal has destination access.
- **Requester Pays errors**: add billing project flags and confirm billing is enabled.
- **No objects visible**: verify transfer status and URI path/prefix.
- **Service account auth failures**: validate key file path and key rotation status.

## Security Best Practices

- Prefer service accounts for automation and scheduled consumption.
- Use least-privilege IAM and review membership regularly.
- Rotate keys and secrets on a defined schedule.
- Log and audit data-access operations in Cloud Audit Logs.