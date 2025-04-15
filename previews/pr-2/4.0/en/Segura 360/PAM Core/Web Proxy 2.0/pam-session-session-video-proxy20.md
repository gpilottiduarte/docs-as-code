# Session video - Proxy 2.0

This document provides information about the **Session video** report screen, which displays the remote session information and allows viewing and downloading of the session recording.

To download the session, enable the parameter **Enable session video download**. More information in [System Parameters - Remote Session](/v4/docs/pam-session-proxy-settings).

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**. 
2. In the side menu, select **Audit  > Sessions > Remote sessions.**  
3. In the list, locate the desired session, click the **Actions button**, and select **Video of session**.

---
## Session info section

| **Item** | **Description** |
| :---- | :---- |
| **ID** | Displays the unique identification hash of the session held. |
| **Start** | Displays the session start date and time. |
| **End** | Displays the session end date and time. |
| **Type** | Displays the protocol used by the session. |
| **Host** | Displays the IP address of the accessed device. |
| **Username** | Displays the username of the credential used. |
| **Error message** | Displays the error message displayed to the user, if applicable. |

## User info section

| **Item** | **Description** |
| :---- | :---- |
| **User** | Displays the name of the user who performed the access. |
| **User IP** | Displays the IP address of the machine that performed the access. |

## Vulnerability analysis
???

## Session section

| **Item** | **Description** |
| :---- | :---- |
| **Size** | Displays the video file size, in B, KB, MB, or GB, of the session. |
| **Time** | Displays the duration of the active session. |
| **Video*** | Displays the button that opens the video of the session held. |
| **Generate video for download** | Displays the button that opens a screen informing of the generation of the video for download. |

:::(warning) (**Attention**)
*The **Video** function for sessions that are used via the Proxy 2.0 will have a new viewing browser where it will be possible to access the heat map via the video timeline as well as the keystroke log. Also, all the audio available during the session will have been recorded and will be played along with the video display. To find out more about this function, access the About Session Videos - Heatmap and audio in session video document.
:::

:::(info) (**Info**)  
The video download is available via email once the conversion is complete.  
:::  

:::(info) (**Info**)  
If Segura is being used in a cluster, videos may take a few seconds or minutes to synchronize with other cluster members before they’re available.  
:::  

---
After receiving the video generation email, go back to the **Video of session** screen to download the video.

## Video of session section

| **Item** | **Description** |
| :---- | :---- |
| **Size** | Displays the final size, in KB, B, MB, or GB, of the video. |
| **Time** | Displays the total duration of the video. |
| **Format** | Displays the generated video format. |
| **Video download** | Displays the button to download the video. |

:::(warning) (**Caution**)  
In session videos like **Database Proxy**, it won’t be possible to view the results record when performing queries on database tables. This occurs for information security. In the log, only the success message will be recorded, in some cases with the number of rows that the query returned, or the error message in cases of failure.  
:::
