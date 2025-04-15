# Remote Session

In this document, you'll find all the information about the **Remote Session** page, which shows the information and possible actions of sessions that have been carried out or are in progress.

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, identified by the nine square, and then select **PAM Core**.
2. In the side menu, select **Access Control** > **Remote Sessions**.

## Top bar
| **Item** | **Description** |
|---|---|
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the Schedule report form. | 

## Search Fields
| **Item** | **Description** |
|---|---|
| **ID** | Identification number of the order in which the sessions were held. |
| **Session ID** | Session’s identification code. |
| **Credential** | Credential’s username. |
| **Device** | Device used in the session. |
| **User** | Name of the user who made the access. |
| **Origin IP** | IP address who made the session. |
| **Protocol** | Type of session protocol. |
| **Proxy** | Type of proxy for the session. The options are *Database Proxy*, *RDP Proxy*, *senhasegura.go*, *SSH Tunneling*, *Terminal Proxy*, and *Web Proxy*. |
| **Session start** | Start date for searching the records. |
| **until** | End date for searching the records. |
| **Reason** | When approval is required for a session, a reason is assigned to this request. The options listed in this field may vary according to the reasons you enter. |
| **Justification** | Justification given when the request was made. |
| **Governance ID** | Governance identification number. |
| **Prevent Purge** | Whether or not the session was purged, the options are **Yes** and **No**. | 


## Report fields

* **ID**  
* **User**  
* **Origin IP**  
* **Credential**  
* **Device**  
* **Protocol**  
* **Proxy**  
* **Session ID**  
* **Start**  
* **End**  
* **Time**  
* **Prevent purge**  
* **Request**: whether the session was carried out via a request or not.  
* **Action** 
    * **Live Stream**: **eye** icon, will be present in the sessions that are taking place at that moment, and it's possible to view them live. This icon is visible to users with the roles of PAM administrator, PAM auditor, or System administrator who have the specific permission **PAM.SessionManagement.Livestream**.
    * **Terminate session**: **on/off** icon, only present in the sessions that are taking place at that moment, allowing the session to be terminated.
    * **Session Logs**: **horizontal bar** icon, opens the [**Session Logs**](/v3-33/docs/pam-session-session-logs) window with information about the session that took place.
    * **Session Video**: **play** icon, opens the [**Session Videos**](/v3-33/docs/pam-session-view-and-download-the-session-video) window with information about the session and the buttons for viewing the video or downloading it. This icon is visible to users with the roles of PAM Administrator, PAM auditor, or System administrator who have the specific permission **PAM.SessionManagement.Recording**. 
    * **Three vertical dots** contain additional actions for recording, such as:
        * **Prevent purge**: opens the **Prevent purge of session** window, to enter the description/reason why the purge of this record will be prevented.
        * **Configure auditors**: opens the **Configuration of session auditors** window, so that users can be added to audit that specific record.

:::(info) (**Info**)
The report displays 30 records per screen. To go to the next screen, click the next buttons at the end of the report.
:::
