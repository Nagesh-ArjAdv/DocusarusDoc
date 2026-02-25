---
title: Setup Guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Setup Guide

<div className="hero-banner">
  <h2>⚙️ Configure Amazon S3 Write Access</h2>
</div>

<Admonition type="info" icon="🔐" title="Grant DeliveryHub Access">
DeliveryHub requires write permissions to deliver data to your S3 bucket. This guide walks through three authentication methods: Assume Role, Consumer Role, and Access Keys.
</Admonition>

---

## Prerequisites

Before you begin, ensure you have:

- AWS Administrator access to create IAM policies and roles
- The S3 bucket region where data will be delivered
- Know the bucket name and any folder path (optional)

---

## Initial Setup Steps

### Step 1: Enter Destination Details

On the Destination Setup page, provide:

**Destination Name:** A unique name for this destination (example: sales-data-destination)

**Consumer Organization Name:** Organization receiving the data (example: ABC Analytics Pvt Ltd)

**S3 Bucket:** The target bucket for data delivery (Required)

**S3 Bucket Path:** Folder path inside the bucket (Optional, defaults to bucket root, example: /reports/monthly/)

**S3 Bucket Region:** AWS region where bucket exists (Required, example: Europe London eu-west-2)

### Step 2: Choose Authentication Method

Select one of three supported authentication types.

---

## Authentication Methods

<Tabs>
  <TabItem value="assume" label="🔑 Assume Role" default>

### Option 1: Assume Role Setup

DeliveryHub gets permission to assume a role within your AWS account. This is recommended for cross-account access without sharing credentials.

**Prerequisites:** Your AWS administrator must have permissions to create IAM policies and roles.

#### Step 1.1: Create an IAM Policy

1. Log in to AWS Management Console
2. From Services dropdown, select IAM under Security, Identity & Compliance
3. Click Account Settings on left panel
4. Expand Security Token Service (STS) list, find AWS region for your bucket, and Activate if Inactive
5. Choose Policies from left navigation
6. Click Create Policy
7. Click JSON tab
8. Add JSON policy that allows deliveryhub to write to S3 bucket

**For entire bucket access:**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:GetObjectVersion",
        "s3:GetObjectAttributes",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::bucket-name/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetBucketLocation"
      ],
      "Resource": [
        "arn:aws:s3:::bucket-name"
      ]
    }
  ]
}
```

**For subfolder access within bucket:**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:GetObjectVersion",
        "s3:GetObjectAttributes",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::bucket-name/subfolder/*"
      ]
    },
    {
      "Sid": "AllowListingofSubFolder",
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetBucketLocation"
      ],
      "Resource": [
        "arn:aws:s3:::bucket-name"
      ],
      "Condition": {
        "StringLike": {
          "s3:prefix": ["subfolder/*"]
        }
      }
    }
  ]
}
```

9. Click Next: Tags
10. Optionally add tags to help identify AWS resources
11. Create a policy name (example: deliveryhub_access) and optionally add description
12. Click Create Policy

#### Step 1.2: Create an IAM Role

1. Log in to AWS Management Console
2. From Services dropdown, select IAM
3. Click Roles on left panel
4. Click Create role button
5. Under Trusted entity type, select Custom trust policy
6. Set the trust policy using the following JSON. Replace the placeholders with values found in the DeliveryHub application (Data Sources > Add Source > select Amazon S3):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "<awsDeliveryHubWriteArn>"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "<awsDeliveryHubWriteExternalId>"
        }
      }
    }
  ]
}
```

7. Click Next button
8. Find the policy created in previous section and select it
9. Click Next button
10. Enter name and description for the role
11. Click Create role button
12. Record the Role ARN value from the role summary page. You will use this to configure your destination in DeliveryHub.

#### Step 1.3: For KMS Encrypted Buckets Only

If your bucket uses KMS encryption:

1. Navigate to S3 bucket and click Properties > Default encryption section
2. Click the link for the Encryption key ARN
3. Scroll down to Key users section and click Add
4. Search for the role created for DeliveryHub. Select checkbox and click Add

  </TabItem>
  
  <TabItem value="consumer" label="👥 Consumer Role">

### Option 2: Consumer Role Setup

This approach is for scenarios where the consumer controls permissions through their own AWS account. It requires setup in both provider and consumer AWS accounts.

#### Provider Account Setup

**Step 2.1: Create an IAM Policy (Provider)**

1. Log in to AWS Management Console
2. From Services dropdown, select IAM
3. Click Account Settings on left panel
4. Expand Security Token Service (STS), activate for your region
5. Choose Policies from navigation
6. Click Create Policy
7. Click JSON tab
8. Add this policy that allows DeliveryHub to assume a role:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowAssumingRoleInConsumerAWS",
      "Effect": "Allow",
      "Action": [
        "sts:GetSessionToken",
        "sts:AssumeRole",
        "sts:GetCallerIdentity"
      ],
      "Resource": "*"
    }
  ]
}
```

9. Create policy name (example: deliveryhub_access) and optional description
10. Click Create Policy

**Step 2.2: Create an IAM Role (Provider)**

1. Log in to AWS Management Console
2. From Services dropdown, select IAM
3. Click Roles on left panel
4. Click Create role button
5. Under Trusted entity type, select Custom trust policy
6. Set trust policy using JSON (replace placeholders with DeliveryHub values from app):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "<awsDeliveryHubWriteArn>"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "<awsDeliveryHubWriteExternalId>"
        }
      }
    }
  ]
}
```

7. Click Next button
8. Find and select the policy created in previous step
9. Click Next button
10. Enter role name and description
11. Click Create role button
12. Record the Role ARN value. Provider will give this to Consumer.

#### Consumer Account Setup

**Step 2.3: Create an IAM Policy (Consumer)**

1. Log in to AWS Management Console
2. From Services dropdown, select IAM
3. Click Account Settings on left panel
4. Expand Security Token Service (STS), activate for your region
5. Choose Policies from navigation
6. Click Create Policy
7. Click JSON tab
8. Add JSON policy that allows DeliveryHub to write to the S3 bucket (see Assume Role examples for entire bucket or subfolder options)
9. Create policy name and optional description
10. Click Create Policy

**Step 2.4: Create an IAM Role (Consumer)**

1. Log in to AWS Management Console
2. From Services dropdown, select IAM
3. Click Roles on left panel
4. Click Create role button
5. Under Trusted entity type, select Custom trust policy
6. Set trust policy using JSON. Replace the placeholder with the Provider Role ARN provided:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "<awsProviderWriteArn>"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "<awsDeliveryHubWriteExternalId>"
        }
      }
    }
  ]
}
```

7. Click Next button
8. Find and select policy created in Step 2.3
9. Click Next button
10. Enter role name and description
11. Click Create role button
12. Record the Role ARN. Consumer provides this to Provider for DeliveryHub configuration.

  </TabItem>
  
  <TabItem value="accesskey" label="🔐 Access Key">

### Option 3: Access Key Authentication

This is the simplest method using static AWS credentials. The consumer must create an IAM user with S3 write permissions.

**Prerequisites:** Data consumer must have permissions to create Access key for IAM user in AWS account where external bucket lives.

#### Step 3.1: Create IAM User (AWS Account)

1. Log in to AWS Management Console and navigate to IAM Users section
2. Click Create user
3. Enter username for DeliveryHub access

#### Step 3.2: Attach S3 Permissions (AWS Account)

The user needs an attached IAM policy that includes all permissions for your bucket. Create inline policy:

**For entire bucket access:**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:GetObjectVersion",
        "s3:GetObjectAttributes",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::bucket-name/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetBucketLocation"
      ],
      "Resource": [
        "arn:aws:s3:::bucket-name"
      ]
    }
  ]
}
```

**For subfolder access:**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:GetObjectVersion",
        "s3:GetObjectAttributes",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::bucket-name/subfolder/*"
      ]
    },
    {
      "Sid": "AllowListingofSubFolder",
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetBucketLocation"
      ],
      "Resource": [
        "arn:aws:s3:::bucket-name"
      ],
      "Condition": {
        "StringLike": {
          "s3:prefix": ["subfolder/*"]
        }
      }
    }
  ]
}
```

#### Step 3.3: Generate Access Key (AWS Account)

1. Log in to AWS Management Console and navigate to IAM Users section
2. Select the user you want to grant access to external bucket
3. Select Security credentials tab on Users IAM page
4. Scroll down to Access keys section
5. Click Create access key button
6. Securely store the Access Key ID and Secret Access Key

#### Step 3.4: Enter Access Key in DeliveryHub

Enter the Access Key ID and Secret Access Key in the relevant text boxes under the S3 Authentication section of the Destination Setup page.

  </TabItem>
</Tabs>

---

## Important Notes

**Connection Test:** When testing connection to S3 destination, DeliveryHub writes a temporary file called `_CONNECTION_TEST`, then immediately deletes it. If you choose not to give `s3:DeleteObject` permissions, you will need to manually delete this temporary file from your bucket or subfolder.

**KMS Encryption:** If your bucket uses KMS encryption, ensure the DeliveryHub role has access to encryption keys in KMS console.

**AWS GovCloud:** S3 destinations in AWS GovCloud are currently not supported.

---

## Completion

After entering all required fields and credentials, click OK. You will be redirected to your destination confirmation page, indicating successful setup. You can now proceed to create data transfers and share data with your consumers.

---

## Related Resources

- [Amazon S3 as a Source](/docs/Sources/Amazon-s3) - Overview and features
- [What is a Hubhouse Table](/docs/hubhouse/what-is-a-hubhouse-table) - Learn about Hubhouse Tables
- [Data Products Guide](/docs/hubhouse/what-are-data-products) - Create data products from your tables
