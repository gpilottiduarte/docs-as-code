# Segregated parameters registration

This document provides information about the **Segregated Parameters** form screen, whether by groups, by credential, by device or by origin.

When creating a segregated parameterization, regardless of type, you can choose between **System default**, which will maintain what was configured in System Parameters - Global, and the options **Yes** and **No**, which will override what was chosen globally for that specific type of segregation.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Access control \> Segregated parameters.**  
   1. **New segregation for groups.**  
   2. **New segregation for devices.**  
   3. **New segregation for credentials.**  
   4. **New segregation for origin.**

or

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **System Parameters \> Segregated.**  
   1. **New segregation for groups.**  
   2. **New segregation for devices.**  
   3. **New segregation for credentials.**  
   4. **New segregation for origin.**

---
## General tab

This section provides information that is common in any type of segregated parameter that is being created, whether by group, by credential, by device or by origin.

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Name*** | Text field | Yes | Identification name of the registered parameter. |
| **Status*** | Radio button | Yes | Activates or inactivate the parameter status. The options are **Enabled** and **Disabled**. |

## Remote Session tab

This section provides information that is common in any type of segregated parameter that is being created, be it by group, by credential, by device or by origin.

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Enable use of personal credentials?*** | Radio button | Yes | Enables the user to start remote sessions using personal credentials. The options are **System default**, **Yes** and **No**. |
| **Enable file transfer for Download?*** | Radio button | Yes | Enables file transfers between the target device and source workstation. The options are **System default**, **Yes** and **No**. |
| **Enable file transfer for Upload?*** | Radio button | Yes | Enables file transfers between the source workstation and the target device. The options are **System default**, **Yes** and **No**. |
| **Enable use of Ctrl+Alt+Del?*** | Radio button | Yes | Allows the operator user to access the device's advanced controls in graphical RDP sessions by using the `crtl+alt+del` key combination. The options are **System default**, **Yes** and **No**. |
| **Enable copy and paste?*** | Radio button | Yes | Enables the permission to copy and paste from the clipboard to the target device and vice versa. The options are **System default**, **Yes** and **No**. |
| **Ignore certificate errors?*** | Radio button | Yes | Indicates whether invalid certificates on RDP connections should be ignored. The options are **System default**, **Yes** and **No**. |
| **Enable SUDO automation in Linux sessions?*** | Radio button | Yes | Enables the use of the \`SUDO\` command by the user to automate the process of privilege elevation. The options are **System default**, **Yes** and **No**. |
| **Enable triggers for file transfer?*** | Radio button | Yes | Enables the permission to have an evaluation by external plugins in file transfer. The demand for these plugins should be forwarded to our Commercial team. The options are **System default**, **Yes** and **No**. |
| **Enable RAIL for RDP?*** | Radio button | Yes | Enables the **Rails over RDP** Microsoft® technology. If enabled, the RemoteApp connection will improve the usability. The options are **System default**, **Yes** and **No**. |
| **Enable wallpaper in RDP sessions?*** | Radio button | Yes | Determines whether the RDP session wallpaper will be presented during the session. The options are **System default**, **Yes** and **No**. |
| **SSH terminal type** | Radio button | No | Indicates the terminal type that will be used in SSH and TELNET sessions. The options are **System default**, **Linux** and **Xterm**. |
| **Include hostname in local login in RDP sessions?*** | Radio button | Yes | The system includes the machine’s hostname to log in. The options are **System default**, **Yes** and **No**. |
| **Convert /r/n to /n on SSH sessions when using the browser?*** | Radio button | Yes | Determines whether the standard Microsoft®Windows end-of-line characters (\r\n) will be replaced for Unix format (\r) when copying and pasting text in Segura Web Proxy sessions with SSH protocol. The options are **System default**, **Yes** and **No**. |
| **Color depth** | Dropdown menu | No | Allows the user to choose a color depth between **8** and **32** bits range for VNC HTTP sessions, according to the desired performance. The options are **8 bits, 16 bits, 24 and 32 bits.** |
| **RDP drive letter*** | Dropdown menu | Yes | A letter that represents the created remote disk unit. Users can choose among the **D** and **Z** letters range. The system default is the letter G. |
| **Keyboard Layout*** | Dropdown menu | Yes | Indicates which keyboard layout will be used during the session. Choose among one of the **21** available options. |
| **Session text language (OCR)*** | Dropdown menu | Yes | Indicates which language will be used during the session. Choose among one of the **15** available options. |
| **Number of simultaneous user sessions (zero indicates unlimited)*** | Quantity input | Yes | Indicates how many simultaneous proxy sessions a user can execute. Can be **0** until **99**. |
| **Enable support for SSH domain credentials?*** | Radio button | Yes | Enables access permission with domain credentials for SSH connections. The options are **System default**, **Yes** and **No**. |
| **Mask for connection string when using SSH domain credentials** | Text field | No | After the field above is enabled, the text box will be available to insert the string mask related to the connection. This field must be filled in with the values user, domain, and separator. Example: `user@domain or domain\user`. |
| **Connection banner** | Text field | No | A message presented to the user when starting a proxy session. |

## Recording tab

This section provides information that is common in any type of segregated parameter that is being created, whether by group, by credential, by device or by origin.

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Enable user input recording?*** | Radio button | Yes | This attribute, unlike the text indexing settings, indicates whether the entries will be recorded separately in the session and will not be visible in the report that aggregates all the texts from all the sessions. The options are **System default**, **Yes** and **No**. |
| **Enable session recording?*** | Radio button | Yes | Determines whether the session video will be recorded. This video is an optimized binary copy of the protocol that has been carried over. Make sure to distinguish with the exported MP4 file. The options are **System default**, **Yes** and **No**. |
| **Indexing session texts?*** | Radio button | Yes | Indicates whether session texts should be indexed. This parameter should be used with the following two others. The options are **System default**, **Yes** and **No**. |
| **Enable input text index import?*** | Radio button | Yes | Determines if the operator user's input texts should be indexed. Therefore, it regulates whether any written material, including text placed into mask fields, is allowed. The options are **System default**, **Yes** and **No**. |
| **Enable output text index import?*** | Radio button | Yes | Determines whether output texts presented on screen to the user should be indexed. It’s worth remembering that the text typed by the user will also be recorded if it’s an output. The options are **System default**, **Yes** and **No**. |
| **Enable livestream in real time?*** | Radio button | Yes | Allows the administrator to do livestream monitoring on the proxy session. The options are **System default**, **Yes** and **No**. |
| **Enable use of macro in session?*** | Radio button | Yes | Enables recording sessions that use macro scripts. The options are **System default**, **Yes** and **No.** |
| **Enable the download of the session video?*** | Radio button | Yes | Only users with the proper permissions can request the video session download if this parameter is enabled. The options are **System default**, **Yes** and **No**. |

## Security tab

This section provides information that is common in any type of segregated parameter that is being created, whether by group, by credential, by device or by origin.

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Force multi-factor authentication to view password?*** | Radio button | Yes | Forces the multifactor authentication to view a password. The options are **System default**, **Yes** and **No**. |
| **Force multi-factor authentication to start a session?*** | Radio button | Yes | Forces the user to use the 2FA token to start proxy sessions. The options are **System default**, **Yes** and **No**. |
| **Ignore the 'Trust this computer' option to view password?*** | Radio button | Yes | Indicates if the checkbox displayed when logging into the Segura environment should be ignored for examining passwords. The options are **System default**, **Yes** and **No**. |
| **Ignore the 'Trust this computer' option to start a session?*** | Radio button | Yes | Indicates whether the checkbox displayed when logging into the Segura environment should be ignored when starting a session. The options are **System default**, **Yes** and **No**. |
| **Force secure connection (SSL) on password change executions?*** | Radio button | Yes | Forces the use of a secure connection *(Secure Sockets Layer*) during the password changes. The options are **System default**, **Yes** and **No**. |
| **Enable password change after session opening?*** | Radio button | Yes | Determines whether Segura will change the password right after the proxy session starts. The options are **System default**, **Yes** and **No**. |
| **Force certificate authentication for the RDP Proxy?*** | Radio button | Yes | Forces a session to be authenticated by a digital certificate when connecting through RDP Proxy. The options are **System default**, **Yes** and **No**. |
| **Force certificate authentication for the SSH/Telnet Proxy?*** | Radio button | Yes | Forces a session to be authenticated by a digital certificate when connecting through SSH/Telnet Proxy. The options are **System default**, **Yes** and **No**. |
| **Session idle time*** | Quantity input and Dropdown Menu | Yes | Defines the idle session duration that will trigger an automatic disconnection. You can select a duration between Minutes, Hours, and Days. The number can be 0 to 60 |
| **RDP safe mode*** | Dropdown menu | Yes | Indicates the security level of target RDP connections. Can be *Automatic*, *RDP*, *NLA*, or *TLS*. By default, **Automatic** is set. With this setting, the client and server will determine the level of security. Since it functions as a bridge, the client in this scenario is the Segura platform. To adjust the security level of incoming connections to Segura, refer to the RDP Proxy documents. |
| **Enable IP filters with permission to start session** | Checkbox | No | Enables a filter based on the IP address that controls the IP address that has permission to start proxy sessions. |
| **Allowed IPs to start session** | Text field | No | If **Enable IP filters with permission to start session** is active, you can determine a list of IPs, individual or at intervals, that will be allowed to start a proxy session. |

---
## Groups tab

This section provides information that is exclusively for the parameter segregated by group.

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Access policies** | Text field | No | Search for the group in the list of included groups. |
| **Add** | Button | No | Opens the Segura groups screen, so they can be included. |
| **Policies table** | Table | No | Data from each added group containing *checkbox fields*, *ID, Name*, *Type* and *Parameter*. |

---
## Devices tab

This section provides information that is exclusively for the parameter segregated by device.

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Devices** | Text field | No | Search for the device in the list of included devices. |
| **Add** | Button | No | Opens the Segura devices screen, so they can be included. |
| **Device table** | Table | No | Data from each added device containing *the checkbox fields, ID*, *Device name*, *Management*, *Site*, *Product*, *Type*, *Vendor* and  *Parameter.* |

---
## Credential tab

This section provides information that is exclusively for the parameter segregated by credential.

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Credentials** | Text field | No | Search for the credential in the list of included credentials. |
| **Add** | Button | No | Opens the Segura credentials screen, so they can be included. |
| **Credentials table** | Table | No | Data for each added credential containing *the checkbox fields, ID*, *Credential type*, *Username*, *Device*, *Product*, *Vendor*, *Site* and *Parameter.* |

---
## Origins tab

This section provides information that is exclusively for the parameter segregated by origin.

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Search** | Text field | No | Search for the IP number in the list of included IPs. |
| **Add** | Button | No | Opens an additional line in the table listing so that the IP number can be included. |
| **Origins table** | Table | No | Data for each added IP number containing *checkbox fields* and *Origin.* |

---
## Review tab

This section is common in registrations of any type of segregated parameter. It contains the information that was added in the previous steps so that it can be analyzed, and if any changes are needed, they can be made before completing the registration.