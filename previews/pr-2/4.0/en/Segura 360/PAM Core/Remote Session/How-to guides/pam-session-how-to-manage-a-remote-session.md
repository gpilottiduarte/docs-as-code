# How to manage a remote session

This document provides a step-by-step guide on what the functions on the **Remote Sessions** screen are and how to use them to manage the session that has been carried out.

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Audit** > **Sessions** > **Remote sessions**.
3. In the list, choose the desired session, and in the **Action column**, click the on corresponding action to perform.

---
### Live Stream
:::(warning) (**Attention**)  
From version 3.33 onwards, the option for viewing the session's Live Stream will only be available to PAM Administrator, PAM Auditor, and System Administrator roles that have the **PAM.SessionManagement.Livestream** permission.
:::

1. Click **Live Stream**.
    1. A screen will open, and you'll be able to watch the session in progress in real-time.

:::(info) (**Info**)
During the session, it's possible to block the user's interactivity. To learn how to perform this action, access the [How to block a user during a session](/v4/docs/pam-session-how-to-block-a-user-during-a-session) document.
:::

---
### Drop a session

1. Click **Drop Session**.
    1. A confirmation box will open; click **Yes** to confirm the action.
2. The **Interrupt Session** window will open with a success message, confirming the interruption.
    :::(info) (**Info**)  
    Once you have clicked **Yes** and confirmed the action, the message **"You have been disconnected"** will be displayed by the session to the user.
    :::

---
### Session logs

1. Click **Session Logs**.
    1. The [Session logs] screen will open with the session information.
    :::(info) (**Info**)
    This feature is only available for sessions already completed.
    :::

---
### Video of session
:::(warning) (**Attention**)
From version 3.33 onwards, the option for viewing the recorded video of the session will only be available to PAM Administrator, PAM Auditor, and System Administrator roles that have the **PAM.SessionManagement.Recording** permission.
:::

1. Click **Video of session**
    1. The [Session video] screen will open with session information and the button to view the session recording or download the video.
    :::(info) (**Info**)  
    This feature is only available for sessions already completed.  
    :::  

---
### Prevent Purge

1. Click **Prevent Purge**.
    1. The **Prevent session purge** screen will open to insert a text with the description/reason why the purge won't be possible in this session.
    2. Click **Prevent Purge** to send the justification.

---
### Configuring auditors

1. Click **Configure Auditors**.
    1. The **Session auditors settings** screen will open, allowing you to add the users who will be auditors for this specific session.
    2. Click **Add**.
        1. In the dropdown menu, select the desired user to be the auditor.
    3. To add more, click **Add** again.
    4. Click **Save**.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.