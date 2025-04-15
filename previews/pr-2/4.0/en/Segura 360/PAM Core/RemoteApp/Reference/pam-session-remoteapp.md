# RemoteApp

This document provides information about the **RemoteApp** report screen, which lists the RemoteApp scripts registered.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Management > Sessions > RemoteApp.**

---
## Actions menu

| Item  | Type | Description |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the **RemoteApp registration** screen. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV,* and *Schedule report.* |

## Search Fields

| Item | Type | Description |
| :---- | :---- | :---- |
| **Name** | Text field | Filters RemoteApps by the registered identification name. |
| **Application path** | Text field | Filters records by the location of the application to be run. |
| **Parameters** | Text field | Filters by the masks that will be used by the application. |
| **Macro** | Text field | Filters records by actions that will be performed. |
| **Tags** | Text field | Filter records by registered tags for identification. |
| **Status** | Dropdown menu | Filters registered records by their activation status. The options are **Enabled** and **Disabled.** Clear the field to enable the option **All**. |

## Report fields

* **ID.**  
* **Name.**  
* **Type.**  
* **Application path.**  
* **Parameters.**  
* **Tags.**  
* **Complementary**: indicates whether or not a complementary macro exists.  
* **ID.**  
* **Enabled.**  
* **New**: date and time the record was created.  
* **Author**: user who created the RemoteApp script.  
* **Actions:**  
  * **Add companion macro:** open the **RemoteApp registration** screen so that the complementary macro is included.  
  * **Edit**: open **RemoteApp registration** screen to make the necessary changes.  
  * **Clone:** make an exact copy of the record to be cloned, on the confirmation screen, click **Yes** to confirm the action.  
  * **Disable:** disable the registration, on the confirmation screen, click **Yes** to confirm the action.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
### RemoteApp registration screen

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Name*** | Text field | Yes | Identification name of the script to be registered. |
| **Status** | Button *toggle* | No | Activate or inactivate the status of the RemoteApp script. |
| **Tags (comma separated)** | Text field | No | Words to identify the RemoteApp script. |
| **Application path** | Text field | No | Path of the application to be run. |
| **Parameters** | Text field | No | Masks that can be used. To find out which masks are possible, access the document *About Masks for RemoteApp*. |
| **Script** | Text field | No | Preview of how the script will execute with the actions that were selected and their values. |
| **Actions** | Button | No | Set of possible actions that can be part of the script. |
| **Properties** | Text field | No | Properties of each included action. The available options will vary depending on the action that was chosen in the **Actions** field. |
| **Description** | Text field | No | General information about RemoteApp registration. |