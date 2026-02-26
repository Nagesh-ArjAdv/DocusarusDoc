---
id: index
title: Snowflake Setup Guide
---

# Setup Guide

This guide walks a Provider through everything needed to configure DeliveryHub access to a Snowflake account, enabling it as a fully operational data source within DeliveryHub.

## Prerequisites

Before you begin, ensure the following requirement is met:

- You must have access to the **`ACCOUNTADMIN`** role in your Snowflake account. This elevated privilege is required to grant DeliveryHub the permissions it needs to securely read and transfer your data.

:::tip
If you do not have `ACCOUNTADMIN` access, work with your Snowflake account administrator before proceeding.
:::

## Step 1: Grant Access to Your Snowflake Account

DeliveryHub offers two flexible modes for connecting your Snowflake account as a source, designed to accommodate different organizational security and infrastructure requirements:

| Setup Mode | Best For |
|---|---|
| **Standard** | Teams looking for a fast, guided configuration with minimal manual steps |
| **Advanced** | Teams with custom security policies or specific infrastructure requirements who need full control over the setup script |

To get started, follow these steps in the DeliveryHub app:

1. Navigate to **Data Sources** in the left-hand navigation panel.
2. Select **Snowflake** as your source type, then choose the **cloud provider** and **region** that match your Snowflake account. Click **Continue** to proceed.
3. Select your preferred setup mode — **Standard** or **Advanced** — and follow the on-screen instructions to execute the generated script, or tailor it to fit your organization's specific needs.

:::info
Both setup modes generate a Snowflake script that provisions the necessary roles, permissions, and objects required by DeliveryHub. The Advanced mode gives you full visibility into each command so you can review and modify it before execution.
:::

## Option 1: Standard Setup

The Standard setup is the quickest and most straightforward way to connect your Snowflake account as a source in DeliveryHub. It involves running a single, auto-generated script in your Snowflake account that handles all the necessary configuration automatically — no manual provisioning required.

### What the Script Does

When executed, the setup script performs the following actions in your Snowflake account:

#### Identity & Access
- **Creates a dedicated user** for DeliveryHub to authenticate with your Snowflake account.
- **Creates a role** assigned to that user, following the principle of least privilege — DeliveryHub only gets access to what it needs.
- **Grants the role** the ability to:
  - Create integrations
  - Create warehouses

#### Authentication
- **Creates a security integration** for secure authentication, assigned to the DeliveryHub role.

#### Database & Infrastructure
- **Creates a dedicated database** for DeliveryHub to use as its operational workspace within your Snowflake account.

#### Data Access via Stored Procedure
- **Creates a stored procedure** used to grant DeliveryHub access to the specific databases it needs to read from. DeliveryHub supports access to **multiple databases within a single source**, giving you flexibility over what data you expose.

  When the stored procedure is called, you specify which databases DeliveryHub should have access to. It then automatically:
  - Grants the DeliveryHub role **usage on all current and future schemas**, and **select access on all current and future tables and views** within those databases.
  - **Enables change tracking** on all tables and views in those databases. DeliveryHub leverages change tracking to perform efficient, incremental data extracts — minimizing load on your Snowflake account and ensuring faster, more reliable transfers.

:::info Why Change Tracking?
Change tracking allows DeliveryHub to identify and extract only the rows that have been added or modified since the last transfer, rather than scanning entire tables. This results in significantly faster syncs and lower compute costs on your Snowflake account.
:::

:::tip Running the Script
You must execute this script using a Snowflake session with the **`ACCOUNTADMIN`** role active. If your session is using a different role, switch to `ACCOUNTADMIN` before proceeding to ensure the script has the privileges it needs to complete successfully.
:::

## Option 2: Advanced Setup

The Advanced setup is designed for Snowflake account administrators who require **full control over DeliveryHub's access and infrastructure footprint** within their Snowflake environment. Rather than delegating infrastructure creation to DeliveryHub, the Advanced setup puts you in the driver's seat — you create and manage all required infrastructure yourself, then explicitly grant DeliveryHub access to it.

This approach is ideal for organizations with strict security policies, infrastructure-as-code workflows, or teams that need to review and approve every permission granted before it takes effect.

### Setup Script Options

DeliveryHub provides a ready-to-use setup script, accessible directly from the source setup page in the DeliveryHub app. The script is available in two formats to fit your team's preferred workflow:

| Format | Best For |
|---|---|
| **SQL** | Teams who prefer running scripts directly in Snowflake's query editor or via the Snowflake CLI |
| **Terraform** | Teams managing cloud infrastructure as code, with full auditability and version control |

:::info Tailored to Your Deployment
The Terraform script is generated **specifically for your DeliveryHub deployment and the specific source being configured** — it is not a generic template. This means the values, resource names, and configurations are pre-populated to match your environment out of the box.
:::

### Steps

1. **Select Advanced Setup** on the source setup page in the DeliveryHub app.
2. **Review the generated script.** Use DeliveryHub's default values as-is, or adapt and replace them to align with your organization's naming conventions, security requirements, or infrastructure standards.
3. **Run the script** in your Snowflake account using a session with the **`ACCOUNTADMIN`** role active, or hand it off to your infrastructure team for review and execution.

:::tip Adapting the Script
The generated script is fully editable. You can rename roles, users, warehouses, and databases to match your internal conventions — just ensure that whatever values you use are accurately reflected back in the DeliveryHub app during setup so DeliveryHub can locate and connect to the correct resources.
:::

:::warning
Modifying the **permissions** granted within the script (rather than just resource names) may result in DeliveryHub being unable to access your data or perform transfers correctly. Review any permission changes carefully before executing.
:::

## Step 2: Finish DeliveryHub Configuration

Once you have successfully run the setup script for your chosen mode, return to the DeliveryHub app to complete the source configuration. The information required at this stage will vary depending on whether you chose Standard or Advanced setup.

---

### Option 1: Standard Setup

After running the script, provide the following details in the DeliveryHub app:

#### 1. Snowflake Account Identifiers

Enter your **Snowflake Organization name**, **Account name** (formatted as `org_name.account_name`), and **Account locator**.

:::warning
All values must be entered in **UPPERCASE**.
:::

You can retrieve all three values instantly by running the following query in your Snowflake account:
```sql
SELECT 
  CURRENT_ORGANIZATION_NAME() || '.' || CURRENT_ACCOUNT_NAME() AS "ORG.ACCOUNT",
  CURRENT_ACCOUNT() AS LOCATOR;
```

:::tip
Not sure where to find these in Snowflake? [Learn how to access your Snowflake account identifiers ↗](#)
:::

#### 2. Warehouse Compute Sizing

Choose the **Snowflake Warehouse size** DeliveryHub should use for two distinct loading scenarios:

| Loading Type | Description |
|---|---|
| **Incremental Loading** | Ongoing, regular syncs that extract only new or changed data since the last transfer |
| **Backfill Loading** | Full historical data loads, typically larger in scope and compute demand |

:::info
In Standard setup, DeliveryHub pre-populates these values with sensible defaults. You can accept the defaults or adjust them based on your data volume and performance requirements. [Learn more about choosing the right scaling strategy for your use case ↗](#)
:::

#### 3. Save Your Configuration

Once all fields are filled in, click **Save** to complete the source setup.

---

### Option 2: Advanced Setup

After running the script, provide the following details in the DeliveryHub app:

#### 1. Snowflake Account Identifiers

Enter your **Snowflake Organization name**, **Account name** (formatted as `org_name.account_name`), and **Account locator**.

:::tip
Not sure where to find these? [Learn how to access your Snowflake account identifiers ↗](#)
:::

#### 2. Storage Integration Details

Run the SQL command provided on-screen in your Snowflake account to retrieve the values for the following required fields:

| Field | Description |
|---|---|
| **Snowflake Storage Integration IAM User Role** | The IAM role ARN that Snowflake assumes to access cloud storage on DeliveryHub's behalf |
| **Snowflake Storage Integration AWS External ID** | A unique identifier used to secure the trust relationship between Snowflake and AWS |

Then confirm the following values are correctly reflected:

| Field | Description |
|---|---|
| **Snowflake Storage Integration AWS Role ARN** | The AWS Role ARN associated with your Snowflake storage integration |
| **Snowflake Storage Allowed Locations** | The cloud storage paths that Snowflake is permitted to read from and write to |

:::warning
Double-check that the confirmed values match exactly what was provisioned in your script. Mismatches here can cause authentication failures or prevent DeliveryHub from accessing your data.
:::

#### 3. Save Your Configuration

Once all fields are filled in and verified, click **Save** to complete the source setup.

---

## You're All Set!

With your Snowflake source successfully configured, you're ready to unlock the full power of DeliveryHub. From here, you can:

- **Add the source to a Share** to begin securely distributing data to your consumers.
- **Start syncing HubHouse Tables** and defining **Data Products** to power your data delivery workflows.