# SSH keys registration

This document provides information about the **SSH key registration** form screen, where it’s possible to register SSH keys to be used to start sessions on Segura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Credentials > SSH Keys > SSH Keys > Add.**

---
## Information Tab

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Key name*** | Text field | Yes | Identification name to track details, views, and other appearances on Segura. |
| **Status*** | Toggle button | Yes | SSH key status, options are **Active** and **Inactive**. |
| **Tags** | Text field | No | Identifier for the SSH key. |
| **SSH key owner** | Dropdown menu | No | Name of the user who will own the key. The options are in accordance with the users registered with Segura. |

:::(info) (**Info**)  
If the **SSH key owner** field is filled in, the SSH key is the exclusive property of this user. Only this user can access and modify the key, view their password, and use it in proxy sessions.  
:::

## Key data tab

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Username*** | Text field | Yes | The username associated with the SSH key. |
| **Set current password** | Toggle button | No | Enables the Password field and allows you to define a new password. |
| **Password** | Text field | No | SSH key password. 256 character limit. |
| **Generate** | Button | No | Generates a random password as per the Password Policy. |
| **Private Key*** | Text field | Yes | A private key will be kept in Segura. |
| **Public Key*** | Text field | Yes | RSA public key, generated in the terminal using the command `ssh-keygen -t RSA -m PEM`. |

## Devices tab

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Main device*** | Dropdown menu | Yes | Select the device associated with the SSH key. |
| **Register new device** | Button | No | Open the window to register a new device. |
| **Devices** | Text field | No | Search the device record in the table. |
| **Add/Remove selected** | Button | No | Opens the window with the list of devices registered with a secure password. If a table record is selected, you can delete it. |
| **Device table** | Table | No | List of devices added to the key, the fields are *check box*, *ID*, *Device name*, *Management*, *Type*, *Vendor* and *Product*. |

## Session Settings tab

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Use own credential to connect** | Toggle button | No | Select to use the same key to authenticate to the target device. |
| **Authentication credential** | Dropdown menu | No | If you don’t use your own SSH key, select which credential will be used to connect to the device. |
| **Authentication Device** | Dropdown menu | No | Select which device will be used for session authentication. |
| **Automation macro (RemoteApp)** | Table | No | Add RemoteApp macros linked to the credential and available to proxy users. |
| **Restrict access to remote application only** | Toggle button | No | Select this option to use the credential only in RemoteApp proxy sessions. This option makes it impossible to use a proxy session that provides the device's desktop or terminal, as it does not prevent the password from being made available to the user. |

## Key renewal tab

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Enable automatic change** | Toggle button | No | Active to enable automatic credential switching. |
| **Set a password when renew the key*** | Toggle button | Yes | Activate to set a password when auto-renewal is turned on. |
| **Use the key itself to connect** | Toggle button | No | Active to use the key that is currently being created/edited. |
| **Credential or SSH key for authentication** | Dropdown menu | No | Choose the device that contains the authentication key from the drop-down menu. This option is only available if the option **Use your own key to connect** is disabled. |

## Review tab  
This section provides summary information about the choices made in the previous steps. The information is grouped by each tab respectively.