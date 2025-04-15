# Profiles

This document provides information about the **Profiles** report screen, which shows the profiles of dynamic credentials registered in Segura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Management > Dynamic credentials > Profiles.**

---
## Actions menu

| **Item**  | **Type** | **Description** |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the screen **Credential Provisioning Profile**. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV, and Schedule report.* |

## Search Fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Code** | Text field | Filters the profile by its identification code within Segura. |
| **Identifier** | Text field | Filters the profile by the name registered in Segura. |
| **Type** | Dropdown menu | Filter the profile by the types of templates registered with Segura. |
| **Status** | Dropdown menu | Filters the profile by its activation state. The options are **Enabled** and **Disabled.** Clear the field to enable the **All** option. |

## Report fields

* **ID.**  
* **Identifier.**  
* **Type.**  
* **Default TTL:** profile lifetime, in seconds.  
* **Status.**  
* **Actions:**  
  * **Edit:** open the **Credential provisioning Profile** form screen so that the necessary changes can be made.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
### Credential Provisioning Profile screen

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Identifier*** | Text field | Yes | Name of the credential provisioning profile. |
| **Status*** | Toggle Button | Yes | Activates or deactivates the status of the registered profile. |

#### Type Section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Type***| Dropdown menu | Yes | Select the dynamic provisioning type. The options are in accordance with the templates registered in Segura. |

#### Credential to execute section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Use a registered credential to access all devices** | Checkbox | No | Select to use an existing credential to access devices using the dynamic provisioning profile. |
| **Access credential registered in the system** | Dropdown menu | No | Select the access credential previously registered in PAM. **Note**: this menu is only enabled if the previous option is selected. |
| **Credential username** | Text field | No | Indicate the username of the credential that will be used to access devices through the dynamic provisioning profile. **Note**: this text field is only enabled if you don’t select the option **Use registered credentials to access all devices**. |

#### Templates section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Credential creation template*** | Dropdown menu | Yes | Select the template responsible for creating the dynamic provisioning credential. The execution template registration window opens when you click on the plus symbol. |
| **Credential removal template*** | Dropdown menu | Yes | Selects the template responsible for removing the dynamic provisioning credential. When clicking on the plus symbol, the execution template registration window opens. |
| **Roles** | Text field | No | Add the roles and groups to which the dynamic provisioning credential will be tied. Separate them with commas. |
| **Seconds** | Quantity input | No | Select the lifetime, in seconds, of the dynamic provisioning credential. The default value is 3600 seconds. |
