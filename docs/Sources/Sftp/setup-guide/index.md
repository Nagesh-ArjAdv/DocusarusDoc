---
title: SFTP Setup Guide
---

import Admonition from '@theme/Admonition';

# Setup Guide

This guide describes the steps for a provider to grant DeliveryHub access to an SFTP server to use as a data source.

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Prerequisites</span>

To configure DeliveryHub access to your SFTP server:

- You must have **administrative access** to manage user accounts and permissions on the SFTP server
- You must have a **working SFTP server** already set up for your organization
- Note: This feature is in **public preview** — test thoroughly before production use

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Setup Overview</span>

DeliveryHub requires an SFTP user account with appropriate permissions to access your directories and files. You have three options:

1. **Create a dedicated user for DeliveryHub** (recommended)
2. **Use an existing SFTP user** with proper permissions
3. **Authenticate via SSH keys** (most secure)

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Option 1: Create a Dedicated SFTP User for DeliveryHub</span>

Creating a dedicated user ensures secure access and limits DeliveryHub's permissions to only required files.

### <span style={{color: 'var(--ifm-color-primary)'}}>Step 1: Create an SFTP User</span>

1. Log into your SFTP server with administrative privileges
2. Create a new user specifically for DeliveryHub (e.g., `deliveryhub-user`)
3. Assign the user:
   - A unique username
   - A strong password
   - A home directory or specify the directories where DeliveryHub will access files
4. Ensure the user has restricted access to only the directories required for DeliveryHub operations

### <span style={{color: 'var(--ifm-color-primary)'}}>Step 2: Set Permissions</span>

1. Grant **read permissions** to the directories and files that DeliveryHub needs to access
2. Include the ability to:
   - List directory contents
   - Download files
3. **Verify access** by testing the user's ability to log in and access the specified directories and files

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Option 2: Use an Existing SFTP User</span>

If you prefer to use an existing user account, ensure:

- The user has **read permissions** to the required directories
- You have the **login credentials** available
- The user's access is **restricted to only necessary** files and directories

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Option 3: SSH Key Authentication (Most Secure)</span>

SSH key authentication is the most secure method. Follow these steps:

1. In the DeliveryHub UI, go to **Data sources** → **Add Source**
2. Select **SFTP** as the source type and enter your SFTP host and optional starting directory
3. Choose **SSH Key** for authentication
4. Click **Save** — DeliveryHub will generate a unique username and public SSH key
5. Copy the **Public SSH Key** displayed in the DeliveryHub UI
6. Your SFTP administrator must add this public key to the server's `~/.ssh/authorized_keys` file for the DeliveryHub user
7. Return to DeliveryHub and complete the source connection setup
8. DeliveryHub will now automatically authenticate using the SSH key

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Complete DeliveryHub Configuration</span>

Once you've set up your SFTP user with appropriate permissions:

1. In DeliveryHub, go to **Data sources** and click **Add Source**
2. Enter a descriptive name for your SFTP source (e.g., "Company SFTP Server")
3. Select **SFTP** as the source type and click **Continue**
4. Enter your SFTP server details:
   - **Host** — The IP address or domain name of your SFTP server
   - **Port** — SFTP port (default: 22, though confirm with your admin)
   - **Path** — The directory path where DeliveryHub will read files (optional; defaults to user's home directory)
   - **Username** — The username of the SFTP account
   - **Authentication** — Choose:
     - **Password** — Enter the user's password
     - **SSH Key** — Use the key-based method (if pre-configured)
5. Click **Test Connection** to verify access
6. Click **Save** to complete the setup

---

## <span style={{color: 'var(--ifm-color-primary)'}}>After Configuration</span>

Once your SFTP source is successfully configured, you can:

- Add it to a **Share**
- Choose **Destinations** for your data
- Create **Transfers** to start delivering your data

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Best Practices</span>

- **Use Dedicated User** — Always create a dedicated SFTP user for DeliveryHub rather than sharing credentials
- **Prefer SSH Keys** — SSH key authentication is more secure than password authentication
- **Restrict Permissions** — Grant only read access to the specific directories DeliveryHub needs
- **Monitor Usage** — Enable SFTP server audit logs to track DeliveryHub's access patterns
- **Test Performance** — With the 1 GB file size limit and concurrent transfer settings, test your setup to ensure it meets your throughput requirements

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Troubleshooting</span>

**"Connection refused" or "Host unreachable"**
- Verify the SFTP host address and port number
- Check that your firewall allows outbound connections to the SFTP server
- Ensure the SFTP server is running and accessible

**"Permission denied" error**
- Verify the user account has read permissions to the source directory
- Check that the directory path is correct
- Confirm the user can log in manually via SSH/SFTP client

**"File size limit exceeded"**
- Remember the 1 GB file size limit per file in the public preview
- If you have larger files, split them or reach out for guidance

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Related Resources</span>

- [SFTP Overview](/docs/Sources/Sftp) — Features and limitations
- [What is a Hubhouse Table](/docs/hubhouse/what-is-a-hubhouse-table) — Learn about Hubhouse Tables
- [What are Data Products](/docs/hubhouse/what-are-data-products) — Build and deliver data products
