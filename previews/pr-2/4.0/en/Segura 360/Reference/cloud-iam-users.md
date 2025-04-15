# Users

This document provides information about the **Users** page, which allows you to provision users for all your integrated Cloud Service Providers (CSPs) and import existing users into Segura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Cloud IAM**.  
2. In the side menu, select **Cloud IAM** \> **Users**.

## Actions menu

| Item | Type | Description |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the **User** screen. |
| **Actions** | Dropdown menu | Show the options to *Import Azure users, Reprocess accounts,* *Print report, Export CSV and Schedule report.* |

## Search fields

| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters users by their identification code within Segura. |
| **Username** | Text field | Filters users by the user name. |
| **Account** | Dropdown menu | Filters users by the Segura account that owns the user. |
| **Provider** | Dropdown menu | Filters users by one of the three available providers. Available options are: *AWS*, *Google Cloud Platform*, and *Azure*. |
| **Tag** | Text field | Filters users by their tags, which can be assigned when creating or editing an account. |
| **Creation date** | Date picker | Filters users by selecting a range of dates when the user was created. |
| **Status** | Dropdown menu | Filters the users by their provisioning status. Available options are: *Pending*, *Provisioned*, *Provisioning*, *Unprovisioning*, *Unprovisioned*, and *Imported*. |
| **Enabled** | Dropdown menu | Filters users by their activation status. Available options are **Yes** and **No**. |
| **Deleted**  | Dropdown menu | Filters by deleted users. Available options are **Yes** and **No**. |

## Report fields

- **ID.**  
- **Username.**  
- **Provider.**  
- **Tags.**  
- **Creation date.**  
- **TTL**: Defines when the user will expire. The time-to-live (TTL) starts to count from its creation, and upon expiration, the user will be automatically deleted from the provider. If no value is added, the user won’t expire. The range of values is: 300 (5 minutes) to 86400 (24 hours).  
- **Status.**  
- **Enabled.**  
- **Deleted.**

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Reprocess accounts

The **Reprocess accounts** button starts a manual synchronization process with the connected **AWS** or **Google Cloud Provider** accounts. Although this process is automatic, it can be triggered manually by clicking this button.

For Azure accounts, you must manually import Azure users in the [Actions menu](/v4/docs/cloud-iam-users#actions-menu).

## User screen

This section provides information about the **User** screen.

### Settings

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **User \*** | Dropdown menu | Yes | User to be created. |
| **User responsible** | Dropdown menu | No | Field to select for which providers the user will be created. |
| **TTL (seconds)** | Quantity input | No | Defines when the user will expire. The time-to-live (TTL) starts to count from its creation, and upon expiration, the user will be automatically deleted from the provider. If no value is added, the user won’t expire. The range of values is: 300 (5 minutes) to 86400 (24 hours). |
| **Description** | Text field | No | Description of the user. |
| **Tags** | Text field | No | Tags associated with the user to help identify the user easily. |

