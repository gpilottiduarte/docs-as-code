# View and download the session video

In this document, you'll find all the information about the Session Video report that shows the remote session information and the ability to view and download the session recording.

:::(info) (**Info**)
To be able to download the session, the parameter **Enable session video download**, needs to have the option **Yes** set. To learn more about the system parameters, access the documentation [System Parameters - Remote Session](/v3-32/docs/pam-session-proxy-settings).
:::

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, identified by the nine square, and then select **PAM Core**.
2. In the side menu, select **Access Control** > **Remote Sessions**.
3. In the list of finished remote sessions, in the **Action** column, click the **play** icon.

---
## Fields of the Video of session screen

* **Session Info** tab
    * **ID**: identification of the session held.
    * **Start**: session start date and time.
    * **End**: date and time of the end of the session.
    * **Type**: The protocol used by the session.
    * **Host**: IP number of the accessed device.
    * **Username**: username of the credential used.
    * **Error message**: error message displayed to the user, if it occurs.
* **User info** tab
    * **User**: name of the user who performed the access.
    * **User IP**: IP number of the machine that performed the access.
* **Session** tab
    * **Size**: displays the video file size of the session.
    * **Time**: displays the time the session was active.
    * **View**: when clicked, it opens the session video viewing window.
    * **Generate video for download**: when clicked, it displays a message box asking for confirmation for the video to be downloaded. When clicking Yes, a video generation message is displayed.
    :::(info) (**Info**)
    The video download is available via email once the conversion is complete.
    :::
    :::(info) (**Info**)
    If senhasegura is being used in a cluster, videos may take a few seconds or minutes to synchronize with other cluster members before the video is available.
    :::

After receiving the video generation email, go back to the Video of session page to download the video.

* **Video of session** tab
    * **Size**: the final size of the video.
    * **Time**: the final time of the video.
    * **Format**: type of the video format.
    * **Video download**: click to download the video.

:::(warning) (**Caution**)
In session videos like Database Proxy, it won’t be possible to view the results record when performing queries on database tables. This occurs for information security. In the log, only the success message will be recorded, in some cases with the number of rows that the query returned, or the error message in cases of failure.
:::