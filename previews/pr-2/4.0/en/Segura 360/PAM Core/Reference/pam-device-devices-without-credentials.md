# Devices without credentials

This document provides information about the **Devices without credentials** report screen, which displays registered devices without credentials.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core.**  
2. In the side menu, select **Devices > Devices without credentials.**

or

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Devices**.  
2. In the side menu, select **Devices without credentials.**

---
## Actions menu

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the [Device registration](/v4/docs/pam-device-device-registration) screen. |
| **Actions** | Dropdown menu | Displays the options, *Print report, Export CSV* and *Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters the imports by their identification code within Segura. |
| **Name** | Text field  | Filters by the name of the device registered with Segura.  |
| **Management** | Text field | Filters by network address, hostname or IP address so that Segura connects to this device. |
| **Type** | Dropdown menu | Filter by the type of registered device. |
| **Vendor** | Dropdown menu | Filters by the device manufacturer chosen by the user. |
| **Product** | Text field | Filters by the model chosen by the user. |
| **Site** | Dropdown menu | Filters by the device access location. |
| **Connectivity** | Dropdown menu | Filters by the type of connection associated with the device. |
| **Domains** | Text field | Filters by domains registered by the user. |
| **Tags** | Text field | Filters by device identification tags. |
| **Connectable** | Dropdown menu | Filters by device connection status. The options are **Yes** and **No**. Clear the field to enable the option **All**. |
| **Status** | Dropdown menu | Filters devices by their connection state, whether they are connected or not. The options are **Enabled** and **Disabled**. Clear the field to enable the option **All**. |

## Report fields

* **ID**.  
* **Name**.  
* **Management**.  
* **Type**.  
* **Vendor**.  
* **Product.**  
* **Site.**  
* **Connectivity:** displays whether the device is connectable. The options are *Connectable* and *Not connectable*.  
* **Domain.**  
* **Tags.**  
* **Status.**  
* **Actions:**  
  * **Edit:** open the [Device registration](/v4/docs/pam-device-device-registration)  screen, so that the necessary changes can be made.  
  * **Clone:** creates an identical copy of the record being cloned.  
  * **View:** open the [Access credentials](/v4/docs/pam-credential-all-credentials) screen.  
  * **Disable:** disable the device, in the pop-up click **Yes** to confirm the action.  
  * **Add credential:** open the [Credential registration](/v4/docs/pam-credential-credentials-registration) screen to register a credential for this device.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

