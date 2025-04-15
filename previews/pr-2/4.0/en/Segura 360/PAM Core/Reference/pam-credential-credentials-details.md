# Credentials details

This document provides information about the **Credential Details** report screen, where you can access detailed information about the credential and the events that occurred.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Credentials > All credentials.**  
3. In the list of credentials presented in the report, in the column **Actions**, click the button and select the option **Details.**

---
## Details Section
#### General Card

| **Item** | **Description** |
| :---- | :---- |
| **Username** | Credential username. |
| **Type** | Credential type. |
| **Expiration** | Date and time the credential will expire. |
| **Created in** | Date and time the credential was created. |
| **Change** | Date and time the credential was changed. |
| **View** | Date and time the password view occurred on the credential. |
| **Note** | Text with observations about the credential. |

#### Card Change settings

| **Item** | **Description** |
| :---- | :---- |
| **Setting** | Type of password change configuration. |
| **Automatic change** | Indicates whether there is an automatic change configured for the credential. |
| **Template** | Template that will be used to change the password. |
| **User** | Name of the user who requested the exchange. |
| **Status control** | Indicates whether credential status control is enabled. |
| **Activation template** | Indicates which template will be used in activation. |
| **Disabling template** | Indicates which template will be used for inactivation. |

#### Device Card

| **Item** | **Description** |
| :---- | :---- |
| **Hostname** | Device name. |
| **Management IP** | Device IP number. |
| **Vendor** | Device vendor name. |
| **Type** | Device type. |
| **Product** | Device model. |
| **Connectivity** | Device connectivity type. |

#### Card Policy

| **Item** | **Description** |
| :---- | :---- |
| **Name** | Name of the password policy related to the credential. |
| **Password strength** | Credential password strength level. |
| **Expiration period** | Password policy expiration time. |
| **View expiration** | View expiration time. |
| **Simultaneous View** | Indicates whether the policy allows simultaneous viewing of the password. |
| **Simultaneous session** | Indicates whether the policy grants access to sessions simultaneously. |

## Cards

| **Item** | **Description** |
| :---- | :---- |
| **Period with greater use** | Displays the period of the day that had the highest use of the credential. |
| **Parent credential** | Displays the existence of the parent credential. |
| **Total views** | Displays the total number of queries performed on the credential. |
| **Total access** | Displays the total number of accesses made with the credential. |
| **Session duration (average)** | Displays the average time of sessions accessed with the credential in seconds. |
| **Devices** | Displays the number of devices that use the credential. |

## Graphics

| **Item** | **Description** |
| :---- | :---- |
| **Users by access group** | Displays the number of users divided by their access group that have access to the credential. |
| **Users with access** | Displays the number of Segura users who have and do not have access to the credential. |

## Timeline

| **Item** | **Description** |
| :---- | :---- |
| **Events** | Displays a timeline with all actions performed on the credential, divided by date and displays the action and which user performed them. |

## Lists  
#### Last hits

| **Item** | **Description** |
| :---- | :---- |
| **User** | Name of the user who last accessed the credential. Clicking on the name opens the User profile screen. |
| **Date** | Date and time the access was made. |
| **Score** | Displays the score assigned to the access performed. |
| **Magnifying glass** | Open the Access details screen. |

#### Users with custody

| **Item** | **Description** |
| :---- | :---- |
| **ID** | Identification number in Segura. |
| **User** | Name of the user who had custody of the credential. Clicking on the name opens the User profile screen. |
| **Last view** | Date and time of the last credential consultation. |
| **Begin of custody** | Date and time when credential custody begins. |
| **Duration** | Length of time the credential was in custody. |