# How to request to view a session video

In this document, you’ll find a step-by-step guide on how to request to view a video of a remote session.

For users who do not have permission to PAM Operator in senhasegura, you’ll need to provide a justification to access a session video. This process will need approval and will then be released for viewing.


:::(info) (**Info**)
This request is necessary when the **Enable approval for session videos?** field is enabled.
:::

## Request viewing
:::(warning) (**Attention**)
From version 3.33 onwards, the icon for viewing the recorded video (play icon) or Live Stream (eye icon) of the session will only be available to PAM Administrator, PAM Auditor, and System Administrator roles that have the **PAM.SessionManagement.Recording** permission for recording and the **PAM.SessionManagement.Livestream** permission for Live Stream.
:::

1. On senhasegura, in the upper left corner, click on the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Access Control** > **Remote Sessions**.
3. On the list, choose the session you want, and, in the **Action** column, click on the **Session video**, represented by the **play** icon.
4. In the **Justification** window, fill in the necessary fields:
    1. In **Justification**, justify why you want to view the session video.
    2. In **Reason**, select the reason you want to view the session video.
    3. In **Governance Code**, add the generated code to your ticket system if it’s used by the company.
    4. In **Start access**, add access start date.
    5. In **Access end**, add the access validity period.
5. Click **Save**.

A confirmation message will be displayed by the system, and the request will be sent to the approving user. The preview will only be available when the approver accepts the request.

:::(warning) (**Attention**)
The user **can’t** approve the request itself.
:::

---
### Next:
[My session video requests](/v3-33/docs/pam-session-my-session-video-requests)
[Requests](/v3-33/docs/pam-session-requests-video)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.