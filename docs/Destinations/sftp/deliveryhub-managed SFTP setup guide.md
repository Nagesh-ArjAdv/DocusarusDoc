---
id: deliveryhub-managed-sftp-setup-guide
title: DeliveryHub-managed SFTP setup guide
description: Configure a DeliveryHub-managed SFTP destination and grant secure SSH key-based access to consumers.
---

# DeliveryHub-managed SFTP setup guide

This guide explains how to configure DeliveryHub to grant access to data delivered to an SFTP destination.

In this setup, data is delivered to a **DeliveryHub-managed SFTP destination**, and access is granted to the users you add during destination configuration.

## Prerequisites

Before setup, confirm:

- SFTP is enabled in your DeliveryHub environment.
- A share has been created in DeliveryHub.
- You have a public/private SSH key pair for each consumer identity that requires access.

> If your organization needs a specific SFTP backend deployment model, coordinate with your DeliveryHub account team before setup.

## Setup Instructions

1. Open the share in DeliveryHub.
2. Select **Pick Destination**.
3. Choose **SFTP**.
4. Keep **DeliveryHub-managed SFTP** selected, then continue.
5. Enter:
	- A human-readable label (used to generate the destination username)
	- The public key from the SSH key pair
6. Select **Add**.
7. Review the generated username for the consumer.
8. Select **Finish** to complete destination setup.

## Credentials to Share with Consumers

To enable consumer access, share the following securely:

- SFTP host
- Generated username
- Consumer private key (managed by the consumer; never transmit over insecure channels)

## After Setup

After destination setup:

- Complete source selection in the share.
- Run a transfer.
- Validate file availability using an SFTP client.

## Access Management

- Add separate identities/labels for each consumer for traceability.
- Remove access promptly when no longer needed.
- Rotate keys regularly according to your security policy.

## Operational Best Practices

- Use key-based authentication only (avoid password-based access where possible).
- Store private keys in approved secret management tools.
- Restrict credential sharing to designated operational contacts.
- Monitor access logs and transfer outcomes for anomalies.
