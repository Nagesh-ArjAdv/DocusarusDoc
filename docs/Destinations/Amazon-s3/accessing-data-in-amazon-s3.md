---
id: accessing-data-in-amazon-s3
title: Accessing data in Amazon S3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

This guide covers how to retrieve data that has been delivered to a DeliveryHub-managed Amazon S3 destination. The examples below demonstrate how consumers can interact with that data through the AWS CLI — including browsing, downloading, or syncing files into a consumer-owned S3 bucket.

The CLI is not the only option. Any Amazon S3-compatible client can be used to access data programmatically or as part of a production pipeline, provided the consumer's AWS account has been granted the appropriate access.

---

## Prerequisites

Ensure the following before attempting to access a data transfer:

- **DeliveryHub Transfers** — The data transfer must have completed, and the consuming identity must have been granted access in DeliveryHub. See the [Amazon S3 destination guide](/docs/Destinations/Amazon-s3/deliveryhub-managed-s3-bucket-setup-guide) for setup instructions.
- **Managed destination workflows** — At least one managed delivery must have completed to the destination.
- **AWS CLI** — If using command-line access, the AWS CLI must be installed on your machine.

<Admonition type="note" title="IAM Policy Requirements">
The consumer's IAM policy must include permissions to list and read from the S3 bucket. If the policy explicitly scopes resources, both the destination bucket ARN and the access point ARN must be included. At minimum, the following permissions are required:

- `s3:GetObject` — Allows reading objects from the bucket.
- `s3:ListBucket` — Allows listing objects within the bucket.
- `s3:GetBucketLocation` — Identifies the AWS region of the bucket.

[How to find the destination bucket ARN in Amazon S3 ↗](https://aws.amazon.com)
</Admonition>

**Sample IAM Policy:**

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowListBucketAndGetLocation",
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket",
                "s3:GetBucketLocation"
            ],
            "Resource": [
                "{S3_BUCKET_ARN}",
                "{ACCESS_POINT_ARN}"
            ]
        },
        {
            "Sid": "AllowGetObject",
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:GetObjectAttributes",
                "s3:GetObjectVersion",
                "s3:GetObjectTagging"
            ],
            "Resource": [
                "{S3_BUCKET_ARN}/*",
                "{ACCESS_POINT_ARN}/object/*"
            ]
        }
    ]
}
```

The bucket and access point ARNs are available in the share UI under **Access Data → Advanced**.

---

## Accessing a Transfer via DeliveryHub Transfers

1. Go to the Shares list page and open the relevant share.
2. After a data transfer completes, click **Access Data**.
3. Use the copy icon to retrieve the access details and share them with your data consumer.

<Tabs>
  <TabItem value="webconsole" label="Web Console" default>

### Accessing via Web Console

The web console option lets consumers browse and download files directly through the AWS Management Console.

1. In the access dialog, select the **Web Console** tab.
2. Copy the AWS Web Console link and send it to the consumer. If they are not already signed in, they will be prompted to log in.

  </TabItem>
  <TabItem value="cli" label="Command Line (CLI)">

### Accessing via Command Line

DeliveryHub provides ready-to-use CLI commands for listing, copying, and syncing data from the managed bucket. These are scoped to the consumer's specific access path.

<Admonition type="tip">
If any S3 URI (including the DeliveryHub URL or your bucket path) contains spaces, wrap it in single quotes (`' '`).
</Admonition>

#### Step 1: Authenticate with the CLI

Run `aws configure` and provide your credentials when prompted. Make sure the default region matches the region of the DeliveryHub share.

```shell
aws configure
AWS Access Key ID [********************]:
AWS Secret Access Key [********************]:
Default region name [us-east-1]:
Default output format [json]:
```

#### Step 2: List available files

Use `aws s3 ls` to view the contents of the transfer. See the [AWS CLI documentation ↗](https://aws.amazon.com/cli/) for full reference.

```shell
# Basic listing
aws s3 ls <DeliveryHub URL> --request-payer requester

# Detailed listing with sizes and summary
aws s3 ls <DeliveryHub URL> --recursive --human-readable --summarize --request-payer requester
```

Available flags:
- `--recursive` — Applies the command to all nested files and directories.
- `--human-readable` — Shows file sizes in a readable format (KB, MB, etc.).
- `--summarize` — Prints a summary of total object count and size.

#### Step 3: Copy files to your bucket

Use `aws s3 cp` to download specific files or the entire transfer. See the [AWS CLI documentation ↗](https://aws.amazon.com/cli/) for full reference.

<Admonition type="note">
The destination bucket must be in the same AWS region as the DeliveryHub-managed bucket. Attempting a cross-region copy will result in an `Access Denied` error.
</Admonition>

```shell
# Copy a single file
aws s3 cp <DeliveryHub URL>/<path-to-file> s3://<your-bucket-or-path> --request-payer requester

# Copy all files recursively
aws s3 cp <DeliveryHub URL> s3://<your-bucket-or-path> --recursive --request-payer requester
```

<Admonition type="note">
The `--request-payer requester` flag is only needed when **Requester Pays** was enabled during destination setup. Including it unnecessarily will cause a `403` error. Contact your administrator if you are unsure.
</Admonition>

#### Step 4: Sync files to your bucket

Use `aws s3 sync` to transfer only new or updated files, avoiding redundant downloads. See the [AWS CLI documentation ↗](https://aws.amazon.com/cli/) for full reference.

```shell
aws s3 sync <DeliveryHub URL> s3://<your-bucket-or-path> --request-payer requester
```

<Admonition type="note">
The `--request-payer requester` flag is only needed when **Requester Pays** was enabled during destination setup. Including it unnecessarily will cause a `403` error. Contact your administrator if you are unsure.
</Admonition>

  </TabItem>
</Tabs>

---

## Accessing data via managed destination workflows

1. Navigate to the managed destination workflow entry and select the relevant consumer record.
2. Once delivery has completed, click **Access Data**.
3. Use the copy icon to share the access details with the consumer. The CLI steps from the Transfers section above also apply here.

<Admonition type="note">
When using managed destination workflows, DeliveryHub may generate individual paths for each delivered dataset rather than pointing to a single shared bucket location.
</Admonition>