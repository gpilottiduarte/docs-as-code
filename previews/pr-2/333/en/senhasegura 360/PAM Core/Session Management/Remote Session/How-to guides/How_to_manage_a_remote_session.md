# How to manage a remote session

In this document you’ll find a step-by-step guide on what the functions on the **Remote Sessions** screen are and how to use them to manage the session that has been carried out.

1. In the senhasegura platform, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. On the side menu, select **Access Control** > **Remote Sessions**.
3. In the list, choose the desired session, and in the **Action column**, click the corresponding icon to perform the desired action.

### Live Stream
:::(warning) (**Attention**)  
From version 3.33 onwards, the icon for viewing the session's Live Stream (**eye icon**) will only be available to PAM Administrator, PAM Auditor, and System Administrator roles that have the **PAM.SessionManagement.Livestream** permission.
:::

1. Click **Live Stream**, represented by the **eye** icon.
    1. A window will open, and you'll be able to watch the session in progress in real-time.


:::(info) (**Info**)
During the session, it's possible to block the user's interactivity. To learn how to perform this action, access the [How to block a user during a session](/v3-33/docs/pam-session-how-to-block-a-user-during-a-session) document.
:::

### Drop a session

1. Click **Drop Session**, represented by the **on/off** icon.
    1. A confirmation box will open; click Yes to confirm the action.
2. The **Interrupt Session** window will open with a success message, confirming the interruption.
    :::(info) (**Info**)  
    Once you have clicked Yes and confirmed the action, the message **"You have been disconnected"** will be displayed by the session to the user.
    :::

### Session logs

1. Click **Session Logs**, represented by the **horizontal bars** icon.
    1. The Session logs window will open with the session information.
    :::(info) (**Info**)
    This feature is only available for sessions already completed.
    :::

### Session video
:::(warning) (**Attention**)
From version 3.33 onwards, the icon for viewing the recorded video (play icon) of the session will only be available to PAM Administrator, PAM Auditor, and System Administrator roles that have the **PAM.SessionManagement.Recording** permission.
:::

1. Click **Session Video**, represented by the **play** icon.
    1. The **Session Video** window will open with session information and the button to view the session recording or download the video.
    :::(info) (**Info**)  
    This feature is only available for sessions already completed.  
    :::  

### Prevent Purge

1. Click **Prevent Purge**, represented by the **prohibited** icon.
    1. The **Prevent session purge** window will open to insert a text with the description/reason why the purge won't be possible in this session.
    2. Click **Prevent Purge** to send the justification.

### Configuring auditors

1. Click **Configure Auditors**, represented by the **key** icon.
    1. The **Session Auditors Configuration** window will open, allowing you to add the users who will be auditors for this specific session.
    2. Click the **add** icon next to the **Add a new auditor** text.
        1. In the dropdown menu, select the desired option to be the auditor.
    3. To add more, click the **add** icon again.
    4. Click **Save**.

---
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.