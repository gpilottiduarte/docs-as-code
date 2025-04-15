# Templates

This document provides information about the **Templates** report screen, where you can find all the registered templates.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Management > Credentials > Templates.**

or

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Executions**.  
2. In the side menu, select **Templates control > Templates.**

---
## Actions menu

| **Item**  | **Type** | **Description** |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the **Execution template** screen. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV,* and *Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filter the templates by their identification code inside from Segura. |
| **Executor** | Dropdown menu | Filter the templates by executor types. The available options are in accordance with the executors approved by Segura. Use the text field to enter the desired information. Clear the field to enable the **All** option. |
| **Type** | Dropdown menu | Filters the templates by the types of execution performed by the template. The options are in accordance with the executions carried out by Segura. Use the text field to enter the desired information. Clear the field to enable the **All** option. |
| **Template** | Dropdown menu | Filter the templates by registration name. |
| **Status** | Dropdown menu | Filter the templates by their activation status. The options are **Enabled** and **Disabled.** Clear the field to enable the option **All**. |

## Report fields

* **ID.**  
* **Executor.**  
* **Type.**  
* **Template.**  
* **Status.**  
* **Version:** registered version number.  
* **Last change:** date and time of the last change made to the template.  
* **Actions:**  
  * **Edit**: opens the **Execution template** screen so that the necessary changes can be made. 
  * **Clone**: replicates the already registered template.  
  * **Template change history**: open the **Templates** screen with information about the changes already made to the template.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
### Execution template  
:::(info) (**Info**)  
Segura provides a series of templates to be used as models, making it possible to make the necessary changes. Access the [GitHub](https://github.com/Segura/execution-templates) of Segura to access the template library.  
:::

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Name*** | Text field | Yes | Template registration name. |
| **Status** | Radio button | No | Activates or deactivates the status of the template. |
| **View TAGs** | Button | No | Opens the pop-up window with a list and explanation of the possible TAGs for building the template. |
| **Executor*** | Dropdown menu | Yes | The template executor type. The options are in accordance with the executors approved by Segura. |
| **Execution type*** | Dropdown menu | Yes | The type of execution that will be used in the template. The options are in accordance with the executions carried out by Segura. |
| **Playbook** | Dropdown menu | No | Set of instructions (a template) to be executed on a target device or group of devices. This option will only be available when the executor is Ansible. |
| **Inventory** | Dropdown menu | No | Defines which target devices or groups of devices the playbook will run. This option will only be available when the executor is Ansible. |
| **Content** | Text field | No | Text with the content to be executed by the template. |

#### List of TAGs to build your template

* **[#USERNAME#]**: Credential username.  
* **[#NEW_PASSWORD#]**: New password.  
* **[#CURRENT_PASSWORD#]**: Current password.  
* **[#AUTH_USER#]**: Credential username for authentication.  
* **[#AUTH_PASSWORD#]**: Credential password for authentication.  
* **[#AUTH_DOMAIN#]**: Credential domain for authentication.  
* **[#ADD_INFO#]**: Additional credential information.  
* **[#IP#]**: Device IP.  
* **[#HOSTNAME#]**: Device hostname.  
* **[#DOMAIN#]**: Credential domain.  
* **[#SERVER_PATH#]**: Server path.  
* **[#CONNECT_IP#]**: IP used to connect (Can be replaced by Network Connector).  
* **[#CONNECT_PORT#]**: Port used to connect (Can be replaced by Network Connector).

#### Template change history - Template

| **Item** | **Description** |
| :---- | :---- |
| **ID** | Identification code of the registered template. |
| **Executor** | The executor registered in the template. |
| **Template** | Type of registered template. |
| **Version** | Template version. |
| **History date** | Date and time of template execution. |
| **Actions** | Open the **Template details** screen. |

#### Template details

| **Item** | **Description** |
| :---- | :---- |
| **ID** | Identification code of the registered template. |
| **Executor** | The executor registered in the template. |
| **Type** | Template execution type. |
| **Name** | Template name. |
| **Version** | The version of the template. |
| **Last change** | Date and time of last change. |
| **Content** | The execution content of the template. |
