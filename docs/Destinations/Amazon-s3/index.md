---
id: index
title: Amazon S3
---

# Amazon S3

<div className="hero-image">
  <img src="\img\deliveryhub-s3-destination.png" alt="DeliveryHub Platform" />
</div>

Amazon S3, an object storage service offered by Amazon Web Services (AWS), is one of many delivery destinations that **Deliveryhub** supports. Deliveryhub has very flexible support for S3 Buckets, including control over:

- Bucket region
- Whether the bucket is created and managed by Deliveryhub, or is an external bucket managed by you or a partner
- Access control

---

## Deliveryhub-managed Amazon S3 bucket

A convenient way to deliver data to S3 buckets is to use a **Deliveryhub-managed bucket**. These are buckets, created and managed by Deliveryhub, in an AWS account also created and managed by Deliveryhub. Once created, simply grant ARNs access to the data.

👉 Learn more in the [Deliveryhub-managed S3 bucket setup guide](./deliveryhub-managed-s3-bucket-setup-guide)

---

## External Amazon S3 bucket

For greater flexibility and control, Deliveryhub can deliver files to buckets on third-party AWS accounts.

👉 Learn more in the [External S3 bucket setup guide](./external-s3-bucket-setup-guide)

---

## Accessing data

Once your data has been shared to the destination, learn how to access it in your Amazon S3 bucket.

👉 Learn more in [Accessing data in Amazon S3](./accessing-data-in-amazon-s3)