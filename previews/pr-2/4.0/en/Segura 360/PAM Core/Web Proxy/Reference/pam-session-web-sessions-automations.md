# Web sessions automations

This document provides information about the **Web sessions automations** report screen, which shows a list of all web session parameters created in the **PAM Core** module.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu**, and select **PAM Core**.  
2. In the side menu, select **Settings > Sessions > Web sessions automations**.

---
## Search fields

| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters web sessions by the number that identifies the order in which the parameters were registered. |
| **Product** | Text field | Filters web sessions by the session's target device. |
| **Login Url** | Text field | Filters web sessions by the login page URL of the site to be used. |
| **HTTP Auth Realm** | Text field | Filters web sessions by the HTTP authentication used, if required by the site. |
| **Firefox legacy** | Dropdown menu | Filters web sessions by the option to use an older version of the Firefox browser. The options are **Yes** and **No**. Clear the field to enable the **All** option. |
| **Ignore certificate error** | Dropdown menu | Filters web sessions by the option to ignore certificate errors, if applicable. The options are **Yes** and **No**. Clear the field to enable the **All** option. |

## Report fields

* **ID.**  
* **Product.**  
* **Login Url.**  
* **HTTP Auth Realm.**  
* **Firefox legacy.**  
* **Ignore certificate error.**  
* **Actions:**  
  * **Edit:** open the **Web session parameters** screen to make the necessary changes.  
  * **Clone:** make an exact copy of the record to be cloned, on the confirmation screen, click **Yes** to confirm the action.  
  * **Disable:** disable the registration, on the confirmation screen, click **Yes** to confirm the action.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
## Web sessions parameters

This section provides information about the **Web session parameters** form screen which allows you to add and edit the web session parameters.

:::(info) (**Info**)  
The **Use Firefox legacy** parameter will only be effective if the browser used is **Firefox**. If a different browser is used, this parameter won’t have an effect.  
:::

| Item | Type | Required | Descrição |
| :---- | :---- | :---- | :---- |
| **Device product*** | Dropdown menu | Yes | Displays the options for devices to be accessed by the session.  |
| **Use Firefox legacy*** | Toggle button | Yes | Enables or disables the option to use an older version of the Firefox browser. |
| **Ignore certificate error*** | Toggle button | Yes | Enables or disables the option to ignore possible certificate errors when accessing the session. |
| **Login Url** | Text field | No | Allows entering the URL address to be accessed. |
| **HTTP Auth Realm** | Text field | No | Allows entering HTTP authentication, if applicable. |
| **Add/Remove selected** | Button | No | Adds a new row or removes a row from the **Customized settings** table. |
| **Customized settings** | Table | No | Displays and allows configuration of each parameter. The columns are *Wait (MS), Action, Field, Value, Attempts,* and *Interval (MS)*. **Note**: refer to the field descriptions in **Customized settings** section below. |

For each action added to the table, there’s a configuration for completing this pattern. More information in [About Custom settings of web session parameters].
