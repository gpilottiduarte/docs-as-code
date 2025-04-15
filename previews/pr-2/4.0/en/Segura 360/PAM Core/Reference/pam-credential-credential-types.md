# Credential types

This document provides information about the **Credential types** report screen, which displays information about all credential types and allows you to manage them.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Management > Credential > Credential types**.

---
## Actions menu

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the **Credential types** screen to register new types. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV,* and *Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters the credentials type by their identification code within Segura. |
| **Name** | Text field | Filters the credentials type by the credential type name. |
| **Local user?** | Dropdown menu | Filter the credentials type by the local user status, allowing you to select only credentials linked to local or external users. The options are **Yes** and **No**. Clear the field to enable the **All** option. **Note**: local users are those who cannot log in to domains. |
| **Status** | Dropdown menu | Filters the credentials type by their activation status. The options are **Enabled** and **Disabled.** Clear the field to enable the **All** option. |

## Report fields

* **ID.**  
* **Name**.  
* **Local user?.**  
* **Status.**  
* **Actions:**  
  * **Edit:** opens the **Credential types** registration screen in edit mode.  
  * **Disable:** opens a confirmation pop-up for inactivating the credential type with the **Yes** and **No** options.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
### Credential types registration screen

This section provides information about the **Credential types** registration screen which allows you to add or edit credential types.

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Name*** | Text field | Yes | Credential type identifier name. |
| **Local user?*** | Toggle button | Yes | Activates or inactivates the creation of a credential type linked only to a local user. |
| **Enabled** | Toggle button | Yes | Activates or inactivates the credential type. |
