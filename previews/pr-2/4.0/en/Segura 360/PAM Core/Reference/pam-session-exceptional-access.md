# Exceptional access

This document provides information about the **Exceptional access** report screen, with access requests made by users.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**. 
2. In the side menu, select **Audit > Sessions > Exceptional access**.

---
## Actions menu

| **Item**  | **Type** | **Description** |
| :---- | :---- | :---- |
| **Dropdown menu** | Dropdown menu | Displays the options *Print report, Export CSV and Schedule report.* |

## Search Fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Field the request by its identification code within Segura |
| **User** | Text field | Field the requests by the name of the user who made the request. |
| **Credential username** | Text field | Field the username used to access the credential. |
| **Device** | Text field | Field the device being requested to access. |
| **Access type** | Dropdown menu | Filter the request by the type of access to be performed. The options are *Remote session* or *Password view*. Use the text box to enter the desired information. Clear the field to enable the option **All.** |
| **Type** | Dropdown menu | Filter by type of the user who made the request. The options are: *Domain user*, *Local administrator* or *Local user*. Use the text box to enter the desired information. Clear the field to enable the option **All.** |
| **Expired** | Dropdown menu | Filter by the deadline, whether the request has already expired or not. The options are **Yes** and **No**. Clear the field to enable the option **All.** |
| **Revoked** | Dropdown menu | Filter by the status of whether the request has already had the order revoked or not. The options ​​are **Yes** and **No**. Clear the field to enable the option **All.** |

## Report fields

* **ID.**  
* **Type.**  
* **Credential username.**  
* **Device.**  
* **Access type.**  
* **Expired.**  
* **Revoked.**  
* **Start date.**  
* **End date.**  
* **Actions:** when clicking the button **Actions** from each record, the user accesses, depending on their permissions, the following options:  
  * **Details**: open the **Exceptional Access Details** screen.  
  * **Edit**: open the **Exceptional access** screen, which contains request details, and where it’s possible to edit the beginning and end of the access restriction.   
  * **Revoke**: the button that opens a confirmation pop-up with options **Yes** and **No**.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
### Details screen  
#### Details section

| **Item** | **Description** |
| :---- | :---- |
| **User** | Displays the name of the user who requested access. |
| **Device** | Displays which device access is being requested. |
| **Credential** | Displays the credentials related to the device. |
| **Type** | Displays the type of user requested access. |
| **Provided by** | Displays the name of the user who requested access. |
| **Provided in** | Displays the date and time of the request. |

#### Permissions section

| **Item** | **Description** |
| :---- | :---- |
| **Start session** | Displays the information whether this permission was granted or not. |
| **View password** | Displays the information whether this permission was granted or not. |

#### Limitation access section

| **Item** | **Description** |
| :---- | :---- |
| **Start date** | Displays the date and time of the start of the restriction. |
| **End date** | Displays the date and time of the end of the restriction. |

---
### Exceptional access screen  
#### Access limitation

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Start** | Date and time picker | Opens a calendar to enter the start date of the restriction period. Next to it is a field that opens a time selector to select the start time of the restriction. |
| **End** | Date and time picker | Opens a calendar to enter the end date of the restriction period. Next to it, is a field that opens a time selector to select the end time of the restriction. |