# Session video

In this document, you'll find all the information about the **Session Video** report that shows the remote session information and the ability to view and download the session recording.

:::(info) (**Info**)
To be able to download the session, the parameter **Enable session video download**, needs to have the option **Yes** set. To learn more about the system parameters, access the documentation [System Parameters - Remote Session](/v3-33/docs/pam-session-proxy-settings).
:::

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, identified by the nine square, and then select **PAM Core**.
2. In the side menu, select **Access Control** > **Remote Sessions**.
3. In the list of finished remote sessions, in the **Action** column, click the **play** icon.

:::(warning) (**Attention**)
From version 3.33 onwards, the icon for viewing the session video will only be available to PAM Administrator, PAM Auditor, and System Administrator roles that have the PAM.SessionManagement.Recording permission included in their role.
:::

---
## Sections of the Video of session screen

#### Session Info tab

| **Item** | **Description** |
|---|---|
| **ID** | Identification of the session held. |
| **Start** | Session start date and time. |
| **End** | Date and time of the end of the session. |
| **Type** | The protocol used by the session. |
| **Host** | IP number of the accessed device. |
| **Username** | Username of the credential used. |
| **Error message** | Error message displayed to the user, if it occurs. |

#### User info tab
| **Item** | **Description** |
|---|---|
| **User** | Name of the user who performed the access. |
| **User IP** | IP address of the machine that performed the access. | 

#### Session tab
| **Item** | **Description** |
|---|---|
| **Size** | Displays the video file size of the session. |
| **Time** | Displays the time the session was active. |
| **View*** | When clicked, it opens the session video viewing window. |
| **Generate video for download** | When clicked, it displays a message box asking for confirmation for the video to be downloaded. When clicking Yes, a video generation message is displayed. |

:::(info) (**Info**)
* The video is downloaded by email as soon as the conversion is complete.
* If senhasegura is being used in a cluster, videos may take a few seconds or minutes to synchronize with other cluster members before the video is available.
* After receiving the email notifying you that the video has been generated, go back to the session's Video page to download the video.
:::

#### Video of session tab
| **Item** | **Description** |
|---|---|
| **Size** | The final size of the video. |
| **Time** | The final time of the video. |
| **Format** | Type of the video format. |
| **Video download** | Click to download the video. | 

:::(warning) (**Caution**)
In session videos like **Database Proxy**, it won’t be possible to view the results record when performing queries on database tables. This occurs for information security. In the log, only the success message will be recorded, in some cases with the number of rows that the query returned, or the error message in cases of failure.
:::
