---
title: SFTP
---

import Admonition from '@theme/Admonition';

# SFTP (Secure File Transfer Protocol)

<div className="hero-image">
  <img src="\img\data-source-flow-sftp.svg" alt="DeliveryHub Platform" />
</div>

<div className="hero-banner">
  <h2>Ingest Data from SFTP Servers into DeliveryHub</h2>
  <p className="hero-sub">Secure file transfer for legacy and modern infrastructure.</p>
</div>

<Admonition type="warning" icon="🚀" title="Public Preview">
SFTP support in DeliveryHub is currently in **public preview**. This feature is actively being refined and may not be suitable for all production workloads. We welcome feedback to help improve the experience.
</Admonition>

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Why SFTP with DeliveryHub?</span>

SFTP is ideal for secure file transfer from legacy systems, on-premise servers, and hybrid infrastructure:

<div className="feature-grid">
  <div className="feature-item">
    <span className="feature-icon">🔒</span>
    <div>
      <strong>Enterprise-Grade Security</strong>
      <p>SSH-based encryption and key authentication for secure, auditable data transfer.</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">🏛️</span>
    <div>
      <strong>Legacy System Connect</strong>
      <p>Integrate with on-premise, mainframe, and hybrid environments that rely on SFTP.</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">📁</span>
    <div>
      <strong>File-Based Integration</strong>
      <p>Pull structured files (CSV, Parquet, JSON) from SFTP servers directly into Hubhouse.</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">⚙️</span>
    <div>
      <strong>Flexible Scheduling</strong>
      <p>Ingest on demand or on a schedule with automatic retry and error handling.</p>
    </div>
  </div>
</div>

---

## <span style={{color: 'var(--ifm-color-primary)'}}>DeliveryHub SFTP User</span>

DeliveryHub accesses your SFTP server using a dedicated user account. We recommend creating a dedicated SFTP user for DeliveryHub with appropriate read permissions for your source directories and files.

**Best Practice:**
- Create a dedicated SFTP user (e.g., `deliveryhub-user`)
- Restrict the user's home directory to source data folders only
- Use SSH key authentication (preferably) or SSH password authentication

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Required Permissions</span>

The SFTP account provided to DeliveryHub must have:

- **Read Permissions** — Ability to list and download files from the source directories
- **Directory Listing** — Permission to traverse and enumerate folder structures
- **No Write Access** — (Recommended) Account should be read-only for security

Example permissions for Linux/Unix SFTP:

```bash
# Grant read permission on source directory
chmod 550 /path/to/sftp/data
# or for more restrictive access
chmod 500 /path/to/sftp/data
```

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Known Limitations</span>

⚠️ Be aware of these current limitations in the public preview:

- **File Size Limit** — Maximum 1 GB per file
- **Throughput** — Optimize SFTP server parameters (concurrency, connection timeout, bandwidth) for your intended DeliveryHub workflow
- **General SFTP Constraints** — Network latency, firewall rules, and server configuration can impact performance
- **Concurrent Transfers** — Test concurrency limits on your SFTP server to avoid timeouts or drops

For large-scale production workloads, we recommend testing performance and adjusting server parameters accordingly.

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Setup Path</span>

1. **Create a dedicated SFTP user** on your server with read-only access to your data
2. **Configure the SFTP server** (ensure it supports SSH key or password authentication)
3. **Set up the source in DeliveryHub** (see setup guide for step-by-step instructions)

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Related Resources</span>

- [SFTP Setup Guide](/docs/Sources/Sftp/setup-guide) — Step-by-step configuration
- [What is a Hubhouse Table](/docs/hubhouse/what-is-a-hubhouse-table) — Learn about Hubhouse Tables
- [What are Data Products](/docs/hubhouse/what-are-data-products) — Build and deliver data products
