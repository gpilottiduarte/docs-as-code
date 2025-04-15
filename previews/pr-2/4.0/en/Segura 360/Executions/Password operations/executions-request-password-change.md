# Request password change

This document provides information about the report **Request password change**, which displays only information about credentials with the password change configuration enabled.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Credentials > Request password change.**

or

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Executions**.  
2. In the side menu, select **Password operations > Request password change.**

---
## Actions menu

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV,* and *Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters the request by their identification code within Segura. |
| **Device** | Text field | Filters the request by device name. |
| **Username** | Text field | Filters the request by the credentials’ username. |
| **Credential type** | Dropdown menu | Filters the request by the type of the credential. The options are: *Domain user, Local administrator, Local User* and *SSH key*. |
| **Site** | Dropdown menu | Filters the request by the device’s website |
| **Device type** | Dropdown menu | Filters the request by device type. |
| **Vendor** | Dropdown menu | Filters the request by the device vendor. |
| **Product** | Text field | Filters the request by the chosen vendor's product. |
| **Parent credential** | Text field | Filters the request by the credential which is considered the “parent” credential. |
| **Last exchange status** | Text field | Filters the request by the status of the last password change carried out. The options are: *Scheduled, Waiting approval, Canceled, Successfully completed, In execution, Error* and *Expired*. |

## Report fields

* **Checkbox:** check or uncheck a record of the list.  
* **ID.**  
* **Credential type.**  
* **Username.**  
* **Device.**  
* **Device type.**  
* **Product.**  
* **Site.**  
* **Template**: the template that will be used to perform the exchange.  
* **Parent credential.**  
* **Expiration date**: date and time when this request will expire.  
* **Last change**: date and time of the password change performed.  
* **Action:**  
  * **Details:** opens the **Credential details** screen.

When a register from the list is checked the **Actions menu** will change to **Request password change** and then the request can be made.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
### Credential details screen

#### General information section

| **Item** | **Description** |
| :---- | :---- |
| **View password** | Opens the **View credential** screen. |
| **Start a session** | Opens the window with the session. |
| **Type** | Type of credential associated with the device. |
| **Username** | Username of the credential that was used. |
| **Expiration** | Request expiration date and time. |
| **Change** | Date and time of the request change. |
| **View** | Date and time of the request consultation. |
| **Created in** | Date and time the credential was created. |
| **Tags** | Identifier for credential segregation. |
| **Observation** | Additional credential notes. |

#### Device section

| **Item** | **Description** |
| :---- | :---- |
| **Hostname** | Device hostname. |
| **Management IP** | Device IP address. |
| **Vendor** | The device manufacturer. |
| **Type** | The device type. |
| **Product** | The device model. |
| **Connectivity** | The device protocol. |

#### Policy section

| **Item** | **Description** |
| :---- | :---- |
| **Name** | Name of the policy that was applied to the credential. |
| **Password Strength** | Password strength applied to the credential. |
| **Expiration period** | The time that the password will expire if there is no view. |
| **View expiration** | The time that the expiration will occur after making a query. |
| **Simultaneous view** | Inform whether the credential has simultaneous viewing. |
| **Simultaneous session** | Informs whether the credential has a simultaneous session. |

#### Change settings section

| **Item** | **Description** |
| :---- | :---- |
| **Setting** | The configuration used to perform the exchange. |
| **Automatic change** | Informs whether the request has an automatic password change. |
| **Change plugin** | The chosen plugin to connect and perform the swap on the device. |
| **Template** | The template will be executed by the executor plugin. |
| **User** | Informs which password option is used by the user. |
| **Status control** | Informs whether the request has control of the status information in the request. |
| **Activation template** | The chosen template to perform the activation. |
| **Disabling template** | The chosen template to perform the inactivation. |

#### Groups with access to password section

| **Item** | **Description** |
| :---- | :---- |
| **Group** | Name of the group with access to credential. |
| **Part password** | Tells which part of the password is possible for the group. |

#### Last 10 operations section

| **Item** | **Description** |
| :---- | :---- |
| **Date** | Date and time of the operation. |
| **Action** | Type of action performed in the operation. |
| **User** | Name of the user who performed the operation. |
| **Reason** | The reason given by the user. |
| **Justification** | The justification the user gives. |

#### Last 5 changes Section

| **Item** | **Description** |
| :---- | :---- |
| **Status** | Operation status. |
| **Scheduled date** | Date and time scheduled for the operation. |
| **Execution date** | Date and time of execution. |
| **Attempts** | Number of attempts made. |
| **View attempts** | Link to screen [Operation Details](/v4/docs/executions-all-operations#operations-details-screen). | 