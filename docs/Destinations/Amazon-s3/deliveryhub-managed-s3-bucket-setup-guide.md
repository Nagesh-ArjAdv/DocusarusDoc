---
id: deliveryhub-managed-s3-bucket-setup-guide
title: Deliveryhub managed s3 bucket setup guide 
---

Deliveryhub can deliver data to a Deliveryhub-managed AWS S3 bucket. This provides a fast and easy way to deliver data, making it easy to grant access to third-party AWS accounts. Deliveryhub supports setting up Amazon S3 as a destination for both Transfers and Hubhouse Fulfillments. This allows you to deliver data to your consumer's bucket, with optional support for using a Deliveryhub-managed path, and optionally use the `requester pays` feature.

---

## Prerequisites

- For Data Fulfillment in Hubhouse, this feature must be enabled in your environment.
- For Deliveryhub transfers, configuring a destination requires a share to have been created.
- Deliveryhub requires an ARN to be provided to grant access to the data in the Deliveryhub-managed destination. To learn more about ARNs and how to find them, please visit [Account Access Identifiers in AWS](https://aws.amazon.com).

---

## Set up instructions via a Share in Deliveryhub Transfers

1. On the share page, click the box **Pick Destination**.

2. Select **Amazon S3** and specify the region for your destination bucket(s). Keep the **"Deliveryhub-managed bucket"** option selected. Configure `Requester pays` preferences, then click **Continue**.

:::note
- When the **Requester pays** toggle is enabled, the destination consumer is billed for request and data transfer costs instead of your organization. Learn more about [Requester Pays in AWS ↗](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html)
- This setting can't be changed after data has been shared. To update it, please archive the current share and create a new one.
:::

3. Enter your ARN and click **Grant Access**. For information on the ARNs Deliveryhub accepts, and where your customer can find them, see our documentation about [AWS Account Access Identifiers](#).

4. You've now successfully set up access.

After setting up the destination in a Share, and picking a source, you can get started and create a data transfer to share data with your consumers.

---

## Set up instructions via Data Consumers in Hubhouse

1. When setting up a new Data Consumer, enter the details and scroll down.
2. Choose **Amazon S3** and the region of your target destination bucket(s). Press **Continue**.
3. Enter your ARN and click **Save access details**. For information on the ARNs Deliveryhub accepts, and where your customer can find them, see our documentation about [AWS Account Access Identifiers](#).
4. You've now successfully set up access.

After setting up the destination, you can get started and fulfill Data Products with your Data Consumer.

---

## Permissions granted

Deliveryhub grants the following permissions to any ARN that is granted access to the data in the share:

| Permission | Description |
|---|---|
| `s3:GetObject` | Retrieves objects from Amazon S3 |
| `s3:GetObjectAttributes` | Retrieves all the metadata from an object without returning the object itself |
| `s3:GetObjectVersion` | Retrieves a specific version of the object |
| `s3:ListBucket` | Allows the user to use the Amazon S3 GET Bucket (List Objects) operation |
| `s3:GetObjectTagging` | Returns the tag set of an object |

To learn more about ARNs used within Deliveryhub, please visit: [Account Access Identifiers in AWS](#).