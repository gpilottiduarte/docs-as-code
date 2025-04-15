# Users

This document provides information about the **Users** report screen, which displays information about user review and certification in senhasegura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Access control \> Review and certification \> Users.**

## Actions Menu

| Item | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options for *Print Report, Export CSV, and Schedule Report.* |

## Search Fields

:::(info) (Info)  
To view all search fields, click **More.**  
:::

| Item | Type | Description |
| :---- | :---- | :---- |
| **Code** | Text field | Filters users by their identification code within senhasegura. |
| **Name** | Text field | Filters users by their name within senhasegura. |
| **Username** | Text field | Filters by the username within senhasegura. |
| **Reviewer** | Text field | Filters users by the name of their reviewer within senhasegura. |
| **Last Review** | Date picker | Filters users by the period in which they were last reviewed within senhasegura. |
| **Next review** | Date picker | Filters users by the period for the next review  within senhasegura. |
| **Status** | Dropdown menu | Filters users by their review state. The options are *Reviewed, Pending Review, or Pending Approval. Clear* the field to enable the **All** option. |
| **Approver** | Text field | Filters users by the name of the registration approver within senhasegura. |
| **Approval status** | Dropdown menu | Filters users by their *review state. The options are Pending, Approved, Rejected, Expired, or* Cancelled. Clear the field to enable the **All** option. |

## Report Fields

* **Code**  
* **Name**  
* **Username**  
* **Email: user's email.**  
* **Reviewer**  
* **Last Review**  
* **Next review**  
* **Status**  
* **Approver**  
* **Approval status.**  
* **Actions:**  
  * **Review and certificate**: directs to the **Review and Certificate** screen.  
  * **Certification history**: directs to the **User review and certification history** screen.

By default, the report displays 30 records per screen. To go to the next screen, click on the forward buttons at the end of the  
report.

## Review and Certificate screen

This section provides information about the user review.

### Actions Menu

| Item | Type | Description |
| :---- | :---- | :---- |
| **Eye button** | Button | By positioning the cursor over this button, detailed information about the user who created the record and the last user who modified it is displayed. |

### Settings tab

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Name** | Text field | Yes | User's name in senhasegura |
| **Username** | Text field | Yes | User's username in senhasegura |
| **Department** | Dropdown menu | No | User's department in senhasegura |
| **E-mail** | Text field | No | User's e-mail address in senhasegura |
| **Phone** | Text field | No | User's phone number in senhasegura. It's informed in the XX-XX-XXXXXXXX `pattern`. |
| **Status** | Radio button | No | Sets the state of the user. The options are **Yes** or **No**. |
| **Ignore multi-factor authentication?** | Radio button | No | Sets if the MFA authentication will be ignored by this user. The options are **Yes** or **No**. |
| **User Groups.** | Text field | No | Defines the user groups to which the user belongs. |

### Roles tab

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Role** | Text field | No | User's role in senhasegura |
| **Built-in** | Text field | No | Indicates if the role is one of the default roles of senhasegura. |
| **Description** | Text field | No | Role description. |

### Access policies tab

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Policy** | Text field | No | Name of the access policy. |
| **Module** | Text field | No | Module to which the access policy applies. |
| **Description** | Text field | No | Description of the access policy. |
| **Devices** | Button | No | Open the **Devices** modal, which displays all devices that are part of the access policy. |

:::(warning) (Caution)  
Users in more than one access policy of the same module may have different settings than expected. 
:::

### Justification tab

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Justification** | Text field | Yes | Field for the reviewer to describe the justification for their decision about the user. |

## User review and certification history screen

This screen shares the same search and report fields available in the Users screen. However, it has specific functionalities: when selecting the **Details** option, the system directs to the **Certification history** screen, which contains the following fields:

### General tab

#### User information section

| Item | Type | Description |
| :---- | :---- | :---- |
| **Name** | Text field | Indicates the user's name. |
| **Username** | Text field | Indicates the user's username. |
| **E-mail** | Text field | Indicates the user's e-mail address. |
| **Telephone** | Text field | Indicates the user's phone number. |
| **Department** | Text field | Indicates the user's department. |
| **Ignore multi-factor authentication?** | Text field | Indicates if the user will ignore multi-factor authentication. |

#### Review and certification details section

| Item | Type | Description |
| :---- | :---- | :---- |
| **Reviewer** | Text field | Indicates the reviewer's name for that user record. |
| **Review date** | Text field | Indicates the date when the revision was made. Displayed in the `DD/MM/YYYY HH:MM:SS` pattern. |
| **Status** | Text field | Indicates the status of the user's registration. |
| **Review justification** | Text field | Displays the justification text as written by the reviewer. |

### Roles tab

| Item | Type | Description |
| :---- | :---- | :---- |
| **Role** | Text field | User's role in senhasegura |
| **Built-in** | Text field | Indicates if the role is one of the default roles of senhasegura. |
| **Description** | Text field | Role description. |
| **Action** | Text field | Indicates the action that was performed by the reviewer in relation to the roles. |

### Access Policy tab

| Item | Type | Description |
| :---- | :---- | :---- |
| **Access policy** | Text field | Name of the access policy. |
| **Module** | Text field | Module to which the access policy applies. |
| **Description** | Text field | Description of the access policy. |
| **Devices** | Button | Open the **Devices** modal, which displays all devices that are part of the access policy. |
| **Action** | Text field | Indicates the action that was performed by the reviewer in relation to the access policy. |

## Devices Modal

Common to **Certification History** and **Review and Certificate** reports. Accessible by clicking the **Devices** button on the **Access Policies tab**.

| Item | Type | Description |
| :---- | :---- | :---- |
| **Search** | Text field | Filters the devices according to the entered text. |
| **Device** | Text field | Device name |
| **Management** | Text field | Device hostname or IP address. |
| **Type** | Text field | Device type |
| **Vendor** | Text field | Device manufacturer |
| **Model** | Text field | Device model |
