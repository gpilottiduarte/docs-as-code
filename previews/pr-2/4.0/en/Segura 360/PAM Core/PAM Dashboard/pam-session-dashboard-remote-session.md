# Remote session

This document provides information about the **Remote session** dashboard screen from **PAM Core**. This dashboard will give a graphical visualization of all users' remote sessions.

:::(info) (**Info**)  
The dashboard can only be accessed by users who have administrator or system auditor permissions.  
:::

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Dashboard \> Remote Session**.

---
## Remote session

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Display period** | Date picker | Filters by the period chosen to display the data. The options are *Today, Last 24 hours, This week, Last week, This month, Last month, This year, Last year and Custom*. |

## Cards

| **Item** | **Description** |
| :---- | :---- |
| **RDP Web** | Accessed sessions of the RDP Web type. |
| **SSH/Telnet** | Accessed sessions of the SSH/Telnet type. |
| **HTTP/VNC** | Accessed sessions of the HTTP/VNC type. |
| **RDP Gate** | Accessed sessions of the RDP Gate type. |
| **Jump Server** | Accessed sessions of the Jump Server type. |
| **SQL** | Accessed sessions of the SQL type. |
| **X11** | Accessed sessions of the X11 type. |

## Graphics

| **Item** | **Description** |
| :---- | :---- |
| **Sessions** | The total number of accessed sessions divided by day. |
| **Sessions by proxy** | The total number of accessed sessions by proxy divided by day and type. |

## Lists  
### Active sessions  
Displays the number of active sessions by type, available on cards. The session information is displayed in the list.

| **Item** | **Description** |
| :---- | :---- |
| **ID** | Displays the number representing the session. |
| **User** | Displays the name of the user who accessed it. Opens the [User profile] screen. |
| **Origin IP** | Displays the address IP of the user's home machine. |
| **Credential** | Displays the username of the credential. Opens the [Credential profile] screen. |
| **Device** | Display address IP of the accessed device. Opens the [Device profile] screen. |
| **Protocol** | Displays the type of protocol used in the session. |
| **Start** | Displays the session start date and time. |
| **Time** | Displays the time the user used the session. |
| **Actions** | Displays action options for the session. The options are Magnifying glass icon opens the [Access details] screen, Eye icon opens the Livestream screen and the On/Off button drops the session. |