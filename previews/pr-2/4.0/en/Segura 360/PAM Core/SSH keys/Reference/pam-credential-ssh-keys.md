# SSH keys

This document provides information about the **SSH keys** report screen, which displays the list of SSH keys registered with Segura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Credentials > SSH Keys > SSH Keys.**

---
## Actions menu

| **Item**  | **Type** | **Description** |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the SSH key registration screen. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV* and *Schedule report.* |

## Search Fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filtra a chave SSH by your identification code within Segura. |
| **Device** | Text field | Filters by the device registered with Segura to which the SSH key is linked. |
| **Username** | Text field | Filters by the username of the SSH key registered with Segura. |
| **Key name** | Text field | Filters by the SSH key registration name. |
| **Device type** | Dropdown menu | Filters according to device type. |
| **Product** | Text field | Filters according to the device model to which the SSH key is linked. |
| **Site** | Dropdown menu | Filter by the website that is registered with Segura. |
| **Credential Tags** | Text field | Filters according to the tags that are linked to the SSH key. |
| **Device tags** | Text field | Filters according to the tags that are linked to the device. |
| **Status** | Dropdown menu | Filters SSH keys by their activation state. The options are **Enabled** and **Disabled**. Clear the field to enable the option **All**. |
| **Last use** | Date picker | Select the last date the SSH key was used. This date will serve as the start date of the filter range. |

## Report fields

* **Device name:** indicates the device name in Segura followed by the IP address or hostname, when applicable, for example: `Debian10 (127.0.0.1)`.  
  * The device name is followed by some information about the device, in the order: Device type | Device Model | Device website | Device code, for example: `Server | Ubuntu | Location | 100`.  
    :::(info) (Info)  
    Note that the device name is clickable. By clicking on the device name you will be directed to the Device Registration window. For more information about this window, access the reference on devices or the document on how to add a device to Segura.  
    :::  
* **ID.**  
* **Username.**  
* **Key name.**  
* **Tags.**  
* **Last view.**  
* **Session status.**  
* **Actions:**  
  * **Start session with key:** start the remote session using the SSH key.  
  * **Show key:** open the **View SSH key** screen.  
  * **Edit:** open the [SSH key registration](/v4/docs/pam-credential-ssh-keys-registration) screen.  
  * **Details:** open the [SSH keys details](/v4/docs/pam-credential-ssh-keys-details) screen.  
  * **History:** open to fabric **SSH key history**.  
  * **Disable:** disable SSH key registration, in the pop-up window click **Yes** to confirm the action.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
#### View SSH Key screen

| **Item** | **Description** |
| :---- | :---- |
| **Requester** | Information of the user who requested to view the credential details, with the name and registration email. |
| **Device** | The device where the credential is related. |
| **Protocol** | The protocol used by the device. |
| **Password** | SSH key password with shortcut buttons to *View password*, *Copy password* and *Spell password*. |
| **Private key** | Private key with shortcut buttons to *Show key*, *Copy key* and *Download key*. |
| **Public key** | Displays the text of the registered public key. |

:::(info) (**Info**)  
Warning boxes are displayed along with the credential username information. One warning informs that when copying the password, it becomes available in the clipboard and can be accessed by other programs, and the other warns whether the password is valid or not. Auto switch setting.  
:::

---
#### SSH Key history Screen

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **History date** | Date picker | Select the search period for actions performed on the SSH key. |

* **ID:** identification code within Segura.  
* **Device:** device registered with Segura to which the credential is linked.  
* **Username:** SSH key username.  
* **Origin:** the type of action that was performed on the SSH key.  
* **History date:** date and time the action occurred.  
* **Current:** indicator whether that record is the most current action performed on the SSH key. The information can be **Yes** or **-**.  
* **Actions:**  
  * **View:** open to fabric **View SSH key**.