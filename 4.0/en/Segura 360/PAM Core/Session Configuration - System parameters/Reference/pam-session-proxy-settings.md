# System parameters - Remote Session

This document provides information about the **System parameters** form screen, which refers to the parametrization of proxy sessions, on the **Remote session** tab.

:::(warning) (**Caution**)  
Some features in older versions of Segura are no longer present in this documentation. We suggest that you avoid changing parameters that aren’t in this document.  
:::

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **System Parameters > Global > Remote session**.

:::(warning) (**Attention**)  
All fields are set with a default value, as recommended by Segura. However, you can customize your session according to your needs.  
:::

---
## Remote session tab**

### General section  
:::(error) (**Important**)  
The **Enable file transfer** parameter underwent a **beta** update and was divided into two parameters: **Enable file transfer for download** and **Enable file transfer for upload**. Currently, If you select **Yes** for either of these parameters, both download and upload functions will be **enabled**. To completely **deactivate** file transfer, select **No** for **both** parameters.  
:::

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Enable livestream in real time?*** | Radio button | Yes | Allows the administrator to do livestream monitoring on the proxy session. Default option: **Yes**. |
| **Enable RemoteApp in session?*** | Radio button | Yes | Enables recording session that uses **RemoteApp**. Default option: **Yes**. |
| **Number of simultaneous user sessions (zero indicates unlimited)*** | Quantity input | Yes | Indicates how many simultaneous proxy sessions a user can execute. It can range from **0** to **99**. Default option: **0 (unlimited)**. |
| **Enable file transfer for download?*** | Radio button | Yes | Enables file transfers between the target device and source workstation. Default option: **Yes**. |
| **Enable file transfer for upload?*** | Radio button | Yes | Enables file transfers between the source workstation and the target device. Default option: **Yes**. |
| **Enable copy and paste?*** | Radio button | Yes | Enables the permission to copy and paste from the clipboard to the target device and vice versa. Default option: **Yes**. |
| **Enable use of personal credentials?*** | Radio button | Yes | Enables the user to start remote sessions using personal credentials. Default option: **No**. |
| **Enable triggers for file transfers?*** | Radio button | Yes | Enables the permission to have an evaluation by external plugins in file transfer. The demand for these plugins should be forwarded to our Commercial team. Default option: **No**. |
| **Enable download for local access?*** | Radio button | Yes | Enables the RDP file extension or the BAT file running PuTTY1 to be generated by Segura and downloaded by user operators, facilitating access to a credential. Default option: **No**. |
| **Users can change PuTTY installation directory?*** | Radio button | Yes | Allow user operators to change the binary location directory when  downloading. Users can choose a new location from the user preferences menu if enabled. Default option: **No**. |
| **Enable support for SSH domain credentials?** | Radio button | Yes | Enables access permission with domain credentials for SSH connections. Default option: **No**. |
| **Mask for connection string when using SSH domain credentials** | Text field | Yes | After the field above is enabled, the text box will be available to insert the string mask related to the connection. This field must be filled in with the values user, domain, and separator. Example: user@domain or domain\\user. |
| **Segura server IPv6 interface*** | Text field | Yes | Segura Server IPv6 network interface name. Default option: **eth0**. |
| **PuTTY installation path*** | Text field | Yes | The path where the **PuTTY** binary will be found in operators' workstations. |
| **Keyboard Layout*** | Dropdown menu | Yes | Indicates which keyboard layout will be used during the session. Choose among one of the **21** available options. |
| **Session text language (OCR)***  | Dropdown menu | Yes | Indicates which language will be used during the session. Choose among one of the **15** available options. |
| **Connection banner** | Text field | No | A message that will be presented to users when starting a proxy session. |

### Web Proxy section

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Convert /r/n to /n on SSH sessions when using the browser?*** | Radio button | Yes | Enables the standard Microsoft®Windows end-of-line characters (\\r\\n) to be replaced by Unix format (\\r) when copying and pasting text in Segura Web Proxy sessions with SSH protocol. Default option: **No**. |
| **Color depth** | Dropdown menu | No | Allows users to choose a color depth between **8** and **32** bits range for VNC HTTP sessions, according to the desired performance. Default option: **16 bits**. |

### Terminal Proxy section

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Enable SUDO automation in Linux sessions?*** | Radio button | Yes | Enables the use of the \`SUDO\` command by the user to automate the process of privilege elevation Default option: **Yes**. |
| **SSH terminal type*** | Radio button | Yes | Indicates the terminal type that will be used in SSH and Telnet sessions Default option: **Linux**. |

### RDP Proxy section

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Ignore certificate errors?*** | Radio button | Yes | Indicates whether invalid certificates on RDP connections should be ignored. Default option: **Yes**. |
| **RDP drive letter*** | Dropdown menu | Yes | A letter that represents the created remote disk unit. Users can choose between the **D** and **Z** letters range.  Default option: **G**. |
| **Enable Ctrl+Alt+Del?*** | Radio button | Yes | Allows the operator user to access the device's advanced controls in graphical RDP sessions by using the \`crtl+alt+del\` key combination. Default option: **Yes**. |
| **Enable RAIL over RDP?*** | Radio button | Yes | Enable the **Rails over RDP** Microsoft® technology. If enabled, the RemoteApp connection will improve the usability. Default option: **No**. |
| **Enable wallpaper in RDP sessions?*** | Radio button | Yes | Enables the RDP session wallpaper to be presented during the session. Default option: **No**. |
| **Include hostname in local login in RDP sessions?*** | Radio button | Yes | The system includes the machine’s hostname to log in. Default option: **No**. |

### Recording section

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Indexing session texts?*** | Radio button | Yes | Indicates whether session texts should be indexed. This parameter should be used with the following two parameters. Default option: **No**. |
| **Enable input text index import?*** | Radio button | Yes | Determines if the operator user's input texts should be indexed. Therefore, it regulates whether any written material, including text placed into mask fields, is allowed. Default option: **No**. |
| **Enable output text index import?*** | Radio button | Yes | Enables output texts presented on screen to the user to be indexed. It’s worth remembering that the text typed by the user will also be recorded if it’s an output. Default option: **No**. |
| **Enable user input recording?*** | Radio button | Yes | This attribute, unlike the text indexing settings, indicates whether the entries will be recorded separately in the session and will not be visible in the report that aggregates all the texts from all the sessions. Default option: **Yes**. |
| **Enable session recording?*** | Radio button | Yes | Enables the session video to be recorded. This video is an optimized binary copy of the protocol that has been carried over. Make sure to distinguish the exported MP4 file. Default option: **Yes**. |
| **Enable session purge?*** | Radio button | Yes | Enables the platform to automatically discard videos of sessions that have reached a specific expiration date. Default option: **No**. |
| **Days for purge*** | Quantity input | Yes | Indicates how many days the video should be stored. It can range from **0** to **1000** days. Default option: **90 days**. |
| **Web session image quality*** | Quantity input | Yes | Indicates the quality level of the image for web sessions. It can range from  **10** to **100**. Default option: **100**. |
| **Number of video frames (fps)*** | Quantity input | Yes | Indicates the frame video amount and sets the fps for video record in sessions.  It can range from **2** to **24** fps. Default option: **15 fps**. |
| **Web session image type*** | Radio button | Yes | Indicates the image type in the web session. Choose between **PNG** or **JPEG**. Default option: **PNG**. |
| **Enable the download of the session video?*** | Radio button | Yes | Only users with the proper permissions can request the video session download if this parameter is enabled.Default option: **No**. |