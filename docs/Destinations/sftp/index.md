---
id: destinations-sftp-index
title: SFTP
description: Configure SFTP as a destination in DeliveryHub and grant secure file access to approved users.
---

# SFTP

<div className="hero-image">
  <img src="\img\deliveryhub-sftp-destination.png" alt="DeliveryHub Platform" />
</div>
Secure File Transfer Protocol (SFTP) is a supported destination in DeliveryHub for controlled, file-based data delivery.

Use SFTP when consumers need straightforward access through standard SFTP clients and existing operational workflows.

## DeliveryHub-Managed SFTP

DeliveryHub supports a managed SFTP destination model that simplifies setup and operations while keeping access control explicit.

With this model, you can:
- Grant access to approved users or client identities.
- Distribute connection details to consumers securely.
- Support common SFTP clients and automation scripts.

Continue with setup:

- [DeliveryHub-managed SFTP setup guide](./deliveryhub-managed%20SFTP%20setup%20guide)

## Recommended Operational Practices

- Use dedicated credentials per consumer when possible.
- Rotate credentials regularly and revoke unused access promptly.
- Restrict permissions to required directories only.
- Log access activity and monitor transfer failures.
