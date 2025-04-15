# Credentials pool

This document provides information about the **Credentials pool** report screen, which shows the sets of shared credentials (pool) registered in Segura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Management > Credentials > Credentials pool.**

---
## Actions menu

| **Item**  | **Type** | **Description** |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the **Credentials pool** registration screen. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV and Schedule report.* |

## Search Fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters the credential pool by its identification code within Segura. |
| **Name** | Text field | Filters the credential pool by the name registered in Segura. |
| **Status** | Dropdown menu | Filters the credential pool by its activation state. The options are **Enabled** and **Disabled.** Clear the field to enable the **All** option. |

## Report fields

* **ID.**  
* **Name.**  
* **Enabled**  
* **Actions:**  
  * **Edit:** open the **Credentials pool** form screen so that the necessary changes can be made.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
## Credentials pool registration screen

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Identification name*** | Text field | Yes | Credential pool name. |
| **Status*** | Button *toggle* | Yes | Activates or deactivates the status of the registered credential pool. |
| **Search** | Text box | No | Performs a search among the credentials added to the table. |
| **Add/Remove selected** | Button | No | Opens the window of available credentials registered in Segura. |
| **Credentials table** | Table | No | Data for each member of the credential pool containing *checkbox fields*, *ID, Credential Type, Username, Device* and *Device type.* |