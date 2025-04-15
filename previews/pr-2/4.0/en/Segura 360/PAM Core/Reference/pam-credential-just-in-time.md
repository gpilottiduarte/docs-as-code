# Just in time

This document provides information about the **Just in time** report screen, which displays the list of JIT credentials registered in Segura and available for use.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Credentials > Just in time.**

---
## Actions menu

| **Item**  | **Type** | **Description** |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV and Schedule report.* |

## Search Fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters credentials by their identification code within Segura. |
| **Device** | Text field | Filters by the device registered with Segura to which the credential is linked. |
| **Username** | Text field | Filters by the username of the credential registered in Segura. |
| **Credential type** | Dropdown menu | Filters by credential type. The options are: *Domain user*, *Local administrator* and *Local User*. |
| **Additional information** | Text field | Filters by additional information that has been registered with the credential. |
| **Device type** | Dropdown menu | Filters according to device type. |
| **Product** | Text field | Filters according to the device model to which the credential is linked. |
| **Vendor** | Dropdown menu | Filters by the manufacturer of the device that the credential is linked to. |
| **Domain** | Dropdown menu | Filters by credential domain. |
| **Site** | Dropdown menu | Filter by the website that is registered with Segura. |
| **Connectivity** | Dropdown menu | Filters according to the connectivity protocol that the credential has. |
| **Credential Tags** | Text field | Filters according to the tags that are linked to the credential. |
| **Device Tags** | Text field | Filters according to the tags that are linked to the device. |
| **Identifier** | Text field | filters according to the password identification for access via web service. |
| **Status** | Dropdown menu | Filters credentials by their activation state. The options are **Enabled** and **Disabled**. Clear the field to enable the option **All**. |
| **Last use** | Date picker | Select the last date the credential was used. This date will serve as the start date of the filter range. |
| **Password set?** | Dropdown menu | Filters according to the completion status of the credential's Password field. The options are **Yes** and **No.** Clear the field to enable the option **All**. |

## Report fields

* **Device name:** indicates the device name in Segura followed by the IP address or hostname, when applicable, for example: `Debian10 (127.0.0.1)`.  
  * The device name is followed by some information about the device, in the order: Device type | Device Model | Device website | Device code, for example: `Server | Ubuntu | Location | 100`.  
    :::(info) (**Info**)  
    Note that the device name is clickable. By clicking on the device name you will be directed to the Device Registration window. For more information about this window, access the reference on devices or the document on how to add a device to Segura.  
    :::  
* **ID.**  
* **Type.**  
* **Username.**  
* **Additional:** refers to additional information. This field is filled in when registering a new credential, more specifically in the **Additional information** field of the credential registration form.  
* **Domain.**  
* **Tags.**  
* **Last view.**  
* **Session status.**  
* **Actions:**  
  * **Start session:** start the remote session.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::  