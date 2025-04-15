# Users review and certification

This document provides information about the **Users** review and certification report screen, which displays information about user review and certification in senhasegura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Product Menu** and select **Reports**.  
2. On the side menu, select **Review and certification \> Users review and certification.**

## Actions menu

| Item | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the *Print Report, Export CSV, and Schedule Report options.* |

## Search fields

:::(info) (Info)  
To display all search fields, click **More.**  
:::

| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters users by their identification code within Segura. |
| **Name** | Text field | Filters users by their name within Segura. |
| **Username** | Text field | Filters users by their username within Segura. |
| **Reviewer** | Text field | Filters users by the name of their reviewer within Segura. |
| **Last review** | Date field | Filters users by the period in which they were last reviewed within Segura. |
| **Next Review** | Date field | Filters users by the period for the next revision within Segura. |
| **Status** | Dropdown menu | Filters users by their review status. Options are Approved, *Reviewed, Pending Review, Pending Approval, or Failed*. Clear the field to enable the **All** option. |
| **Approver** | Text field | Filters users by the name of the registration approver within Segura. |
| **Approval status** | Dropdown menu | Filters users by their approval status. Options are Approved, *Reviewed, Pending Review, Pending Approval, or Failed*. Clear the field to enable the **All** option. |

## Report fields

* **ID**  
* **Name**  
* **Username**  
* **Owners**  
* **Reviewer**  
* **Last review**  
* **Next review**  
* **Status**  
* **Approver**  
* **Approval status**  
* **Actions**  
  * **Details:** directs to the **Review and Certificate** screen.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report. 
:::

## Review and certificate screen

If a user has already been reviewed, you can access the review details by clicking **Details** on the **Actions** button in the **User Review and Certification** report.

### General tab

#### User information section

| Item | Type | Description |
| :---- | :---- | :---- |
| **Name** | Text field | Indicates the user's name. |
| **Username** | Text field | Indicate the user's username. |
| **E-mail** | Text field | Indicate the user's Email Address. |
| **Telephone** | Text field | Indicates the user's phone number. |
| **Department** | Text field | Indicates the user's department. |
| **Ignore two factor authentication?** | Text field | Indicates if the user will bypass multi-factor authentication. |
| **User group** | Text field | Indicates the user's user group. |

#### Review and certification details section

| Item | Type | Description |
| :---- | :---- | :---- |
| **Reviewer** | Text field | Indicates the name of the reviewer for that user record. |
| **Review date** | Text field | Indicates the date the revision was made. Displayed in format `DD/MM/YYYY HH:MM:SS`. |
| **Status** | Text field | Indicates the status of the user's registration. |
| **Review justification** | Text field | Displays the justification text as written by the reviewer. |

### Roles tab

| Item | Type | Description |
| :---- | :---- | :---- |
| **Role** | Text field | User's role in Segura. |
| **Built-in** | Text field | Indicates if the role is one of the default Segura roles. |
| **Description** | Text field | Description of the role |

### Access policy tab

| Item | Type | Description |
| :---- | :---- | :---- |
| **Access policies** | Text field | Access policy's name. |
| **Module** | Text field | Module to which the access policy applies. |
| **Description** | Text field | Description of the access policy. |
| **Devices** | Button | Opens the **Devices** modal, which displays all devices that are part of the access policy. |

### Devices modal

| Item | Type | Description |
| :---- | :---- | :---- |
| **Search** | Text field | Filters the devices according to the entered text. |
| **Device name** | Text field | Device name |
| **Management** | Text field | Device's hostname or IP address. |
| **Type** | Text field | Device type. |
| **Vendor** | Text field | Device's vendor. |
| **Model** | Text field | Device's model. |
