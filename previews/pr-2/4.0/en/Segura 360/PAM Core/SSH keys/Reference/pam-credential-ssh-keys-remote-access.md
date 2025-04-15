# SSH Keys: remote access

This document provides information about the **SSH Keys: Remote Access** report screen, which displays the list of SSH keys registered with Segura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Credentials > SSH Keys > Remote Access.**

---
## Actions menu

| **Item**  | **Type** | **Description** |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV,* and *Schedule report.* |

## Search Fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Device code** | Text field | Filters the SSH key by its identification code within Segura. |
| **Device** | Text field | Filters by the device registered with Segura to which the SSH key is linked. |
| **Username** | Text field | Filters by the username of the SSH key registered with Segura. |
| **Key name** | Text field | Filters by the SSH key registration name. |
| **Device type** | Dropdown menu | Filters according to device type. |
| **Vendor** | Text field | Filters according to the device manufacturer. |
| **Product** | Text field | Filters according to the device model to which the SSH key is linked. |
| **Site** | Dropdown menu | Filter by the website that is registered with Segura. |
| **Status** | Dropdown menu | Filters SSH keys by their activation state. The options are **Enabled** and **Disabled**. Clear the field to enable the option **All**. |

## Report fields

* **SSH key name.**  
* **ID.**  
* **Device.**  
* **Device type.**  
* **Vendor.**  
* **Product.**  
* **Site.**  
* **Actions:**  
  * **View password:** open the **View SSH key** screen.  
  * **Start session:** start the remote session using the SSH key.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
### View SSH key screen

| **Item** | **Description** |
| :---- | :---- |
| **Requester** | Information of the user who requested to view the credential details, with the name and registration email. |
| **Device** | The device where the credential is related. |
| **Protocol** | The protocol used by the device. |
| **Password** | SSH key password with shortcut buttons to *View password*, *Copy password,* and *Spell password*. |
| **Private key** | Private key with shortcut buttons to *Show key*, *Copy key* and *Download key*. |
| **Public key** | Displays the text of the registered public key. |

:::(info) (**Info**)  
Warning boxes are displayed along with the credential username information. One warning informs that when copying the password, it becomes available in the clipboard and can be accessed by other programs, and the other warns whether the password is valid or not. Auto switch setting.  
:::