---
id: index
title: Azure blob storage
---
Azure Blob Storage is a scalable object storage service provided by Azure and is one of the supported delivery destinations in DeliveryHub.

<div className="hero-image">
  <img src="\img\azure.png"/>
</div>

DeliveryHub securely transfers data to a **DeliveryHub-managed Azure Blob Storage destination** and grants access permissions to the Azure application(s) configured within the destination settings of a share. These permissions allow authorized applications to read and copy delivered data from the managed container.

---

## Permissions Granted

DeliveryHub grants the following permissions to Azure applications that are authorized to access shared data:

**Storage Blob Data Reader**  
Allows reading and listing Azure Storage containers and blobs.

**Storage Blob Delegator**  
Allows generating a user delegation key that can be used to create a Shared Access Signature (SAS) for secure container or blob access using Azure AD credentials.

---

## Authorization

To access data delivered to the DeliveryHub-managed container, DeliveryHub must grant read access to an Azure application. You can configure one of the following application types:

- **DeliveryHub-managed application**
- **Consumer-managed application**

For more information about Azure application identifiers, refer to the documentation:  
**Account Access Identifiers in Azure**

---

## DeliveryHub-managed Application

DeliveryHub provides a managed Azure service principal that can be used to access delivered data.

Key capabilities:

- Supports creation of up to **100 client secrets**
- Allows listing container contents
- Enables generation of Shared Access Tokens (SAS)
- Supports secure data copying to your own Azure container

For setup instructions, refer to the **DeliveryHub-managed destination setup guide**.

---

## Consumer-managed Application

You may also use your own Azure application to access delivered data.

Requirements:

- Provide the Azure **Application (Client) ID**
- DeliveryHub grants access to the managed destination container within DeliveryHub’s Azure AD tenant

Capabilities:

- List container contents
- Generate Shared Access Tokens (SAS)
- Copy data to your own Azure environment

For setup instructions, refer to the **Consumer-managed destination setup guide**.

---

## Accessing Data

Once data delivery is complete, you can access it directly from Azure Blob Storage using the authorized application credentials.

For detailed instructions, see:  
**Accessing data in Azure Blob Storage**