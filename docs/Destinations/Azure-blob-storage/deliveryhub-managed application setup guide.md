---
id: deliveryhub-managed-application-setup-guide
title: DeliveryHub managed application setup guide
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

This guide explains how to configure DeliveryHub to grant access to data delivered to Azure Blob Storage.

Data is written to a **DeliveryHub-managed Azure Blob Storage destination**, and access is granted to Azure application(s) configured within that destination.

To enable secure access, DeliveryHub automatically generates:

- An Azure Service Principal  
- One or more client secrets  

These credentials can be used to authenticate via Azure CLI and securely retrieve delivered data from the destination container.

This method is recommended for:

- Teams without an existing Azure application  
- Consumers who want a simple, secure access workflow  
- Fast onboarding with minimal configuration  

---

## Prerequisites

<Admonition type="info" title="Environment requirement">
For managed destination workflows in DeliveryHub, this feature must be enabled in your environment.
</Admonition>

<Admonition type="info" title="Transfers requirement">
A Share must be created before configuring a destination.
</Admonition>

---

## Setup via Share in DeliveryHub Transfers

1. Navigate to the Share page  
2. Click **Pick Destination**  
3. Select **Azure Blob Storage**  
4. Choose your region and click **Continue**

---

## Configure Access Method

<Tabs>
<TabItem value="managed" label="DeliveryHub-managed application" default>

1. Click **Generate** to create a Service Principal  
2. Use generated credentials to access delivered data  
3. Create up to **100 client secrets** using the **"+"** button  
4. To rename a client secret:
   - Click the ellipsis menu  
   - Select **Edit**  
   - Enter a name (max 80 characters)  
5. Click **Finish**  

Access is now successfully configured.

</TabItem>

<TabItem value="consumer" label="Consumer-managed application">

Refer to the **Consumer-managed destination setup guide** for configuration steps.

</TabItem>
</Tabs>

---

## Start Data Delivery

After configuring the destination and selecting a source, you can create a transfer and begin sharing data with consumers.

---

## Setup via managed destination workflow in DeliveryHub

1. Create a new Data Consumer  
2. Enter required details  
3. Select **Azure Blob Storage**  
4. Choose destination region  
5. Click **Continue**

---

## Generate Access Credentials

1. Click **Generate secret** to create a Service Principal  
2. Create up to **100 client secrets**

Access is now successfully configured.

---

## Next Steps

After destination setup is complete, you can begin delivering data for the configured consumer using DeliveryHub.