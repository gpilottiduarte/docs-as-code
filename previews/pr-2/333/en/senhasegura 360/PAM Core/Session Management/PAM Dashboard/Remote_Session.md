# Remote Session

In this article, you’ll find all the information about the **Remote Session** dashboard from **PAM Core - Session Management**. This dashboard will give a graphical visualization of all users' remote sessions.

:::(info) (**Info**)
The dashboard can only be accessed by a system administrator or system auditor user.
:::

## Remote session

In the upper right corner, you’ll find the field that represents the period of the displayed data. Choose the period and click on the **funnel** icon to filter the data.

The date can be filtered by:

* **Today**.
* **Last 24 hours**.
* **This week**.
* **Last week**.
* **This month**.
* **Last month**.
* **This year**.
* **Last year**.
* **Select the date**: choose the specific date.

## Cards

|**Item**|**Description**|
|---|---|
**RDP Web**|Accessed sessions of the RDP Web type.
**SSH/Telnet**|Accessed sessions of the SSH/Telnet type.
**HTTP/VNC**|Accessed sessions of the HTTP/VNC type.
**RDP Gate**|Accessed sessions of the RDP Gate type.
**Jump Server**|Accessed sessions of the Jump Server type.
**SQL**|Accessed sessions of the SQL type.
**X11**|Accessed sessions of the X11 type.

## Graphics

**Item**|**Description**
|---|---|
**Sessions**|The total number of accessed sessions divided per day.
**Sessions by proxy**|The total number of accessed sessions by proxy divided per day and type.


## List

* **Active sessions**: shows the number of active sessions at the moment of searching, divided by type:
    * **ID**: the number that represents the session.
    * **User**: the name of the user that performs the session.
    * **Origin IP**: the originating IP address associated with the user.
    * **Credential**: the user’s credential.
    * **Device**: the IP number representing the accessed device.
    * **Protocol**: the accessed protocol type.
    * **Start**: the date and time when the session started.
    * **Time**: the duration of a session.
    * **Magnifying glass**: access details.
        * **User**: includes user details like name, e-mail, and IP number.
        * **Credential**: used credential details.
        * **Access**: some access details (IP number, time, protocol, and port).
        * **Last detected commands**: a list of performed commands during a session.