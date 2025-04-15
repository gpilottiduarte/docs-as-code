# Credentials

This document provides information about the **Credentials** screen report, which displays all existing credentials for accounts connected to Segura and allows you to create new credentials for all Cloud Service Providers (CSPs) connected to your account.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Cloud IAM**.  
2. In the side menu, select **Identity management \> Credentials**.

## Actions menu

| Item | Type | Description |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the [Credential](/v4/docs/cloud-iam-credentials#credential) screen. |
| **Actions** | Dropdown menu | Displays the options: *Import Azure credentials*, *Reprocess accounts*, *Print report, Export CSV,* and *Schedule report.* |

## **Search fields**

| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters the credentials by their identification code. |
| **Credential** | Text field | Filters the credentials by their name. |
| **Account** | Dropdown menu | Filters the credentials by the account connected to it. The options are all the accounts registered in **Cloud IAM**. |
| **User/Service account** | Dropdown menu | Filters the credentials by the user or service account connected to it. The options are all the users and service accounts registered in **Cloud IAM**. |
| **Tag** | Text field | Filters the credentials by their tags. |
| **Creation date** | Date picker | Filters the credentials by their creation date. |
| **Status** | Dropdown menu | Filters the credentials by their status. The options are: **Enabled** or **Disabled**. |
| **Deleted** | Dropdown menu | Filter credentials based on whether they have been deleted or not. The options are: **Yes** or **No**. |
| **Provider**  | Dropdown menu | Filters the credentials by their provider. The options are: *AWS*, *Azure*, and *Google Cloud*. |

## Report fields

- **ID**.  
- **Credential**.  
- **Provider**.  
- **Account**.  
- **Tags**.  
- **Creation date**.  
- **TTL (seconds)**: the lifetime of the credential.   
- **Status**.  
- **Deleted**.  
- **Actions**:  
    - **Add new key**: opens the [Credential](/v4/docs/cloud-iam-credentials#credential) screen with the **Provider**, **Account**, and **User/Service account** fields already set.  
    - **Details**: opens the [Credential](/v4/docs/cloud-iam-credentials#credential1) screen.  
    - **Delete**: displays a pop-up asking if the user wants to delete the credential.

## Credential

This section provides information about the **Credential** screen.

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Provider \*** | Dropdown menu | Yes | Provider of the credential. The options are: *AWS*, *Google Cloud*, and *Azure*. |
| **Account \*** | Dropdown menu | Yes | Account in which the credential will be created. The options are all the accounts registered in **Cloud IAM**. |
| **User/Service account \*** | Dropdown menu | Yes | User or service account in which the credential will be created. The options are all the users or service accounts registered in **Cloud IAM**. |
| **TTL (seconds)** | Quantity input | No | The lifetime of the credential. The time-to-live (TTL) starts to count from its creation, and upon expiration, the credential will be automatically deleted from the provider. |
| **Environment** | Dropdown menu | No | Environment the credential is created in. |
| **System** | Dropdown menu | No | System configured as a system parameter in Segura. |
| **Description** | Text field | No | Description of the credential. |
| **Tags**  | Text field | No | Tags associated with the credential. |

## Credential

| Item | Description |
| :---- | :---- |
| **Account** | Account in which the credential will be created. |
| **User** | User or service account in which the credential will be created. |
| **System** | System configured. |
| **Environment** | Environment of the credential. |
| **TTL** | The lifetime of the credential. |
| **Enabled** | Status of the credential. |
| **Deleted** | Displays whether the credential is deleted or not. |
| **Description** | Description of the credential. |
| **Tags** | Tags of the credential. |
| **Access Key ID** | Access key ID of the credential. |
| **Secret Access Key** | Secret access key of the credential. |