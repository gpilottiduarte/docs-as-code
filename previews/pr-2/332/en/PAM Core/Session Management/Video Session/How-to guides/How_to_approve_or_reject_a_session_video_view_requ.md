# How to approve or reject a session video view request

In this document, you’ll find a step-by-step guide on how to approve or reject a remote session video viewing request made by the user.

## Requirements

* To access the approval screen, the approver must have at least a PAM Operator, PAM Administrator, or System Administrator profile.

---
## Register an approver
To add an approver, follow the steps below:

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, choose **System Parameters** > **Approvers**.
3. Click the **View Actions** icon, represented by the three vertical dots, and select the option **+ New**.
4. Add the following information:
    1. In **Module**, select the PAM module that the approving user will have access to.
    2. In **Approvers**, select the approving users you want to register.
5. Click **Save**.

## Approve a request
For the approval to view session videos in the senhasegura system, access  **Settings** > **System Parameters** > **Remote Session**, on the option **Enable approval for session videos?*** set as **Yes**.

1. On senhasegura, in the top left corner, click on the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. On the side menu, select **Access Control** > **Session video requests** > **My session video appovals**.
3. In the list, choose the session you want, and, in the **Action** column, click on, **Approve**, represented by the **check** sign.
4. In the confirmation box, click **Yes** to perform the action.

The system will display an approval confirmation message. Now, the user will have access to view the video.

## Reject a request

1. On senhasegura, in the upper-left corner, click on the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Access Control** > **Session video requests** > **My session video appovals**.
3. In the list, choose the session you want, and in the **Action** column, click on the three vertical dots icon.
4. In the drop-down menu, select **Reject**, represented by **X**.
5. In the confirmation box, click **Yes** to perform the action.

A reject confirmation message will be displayed by the system. Now, the user won’t have access to view the video. However, a new request screen will be displayed, allowing you to request the video viewing again.

These two actions can also be performed via the **Request details**, accessed through the column **Action**. To do that, click on the icon represented by the three vertical dots and click on the **magnifying glass**. In the window that opens, in the bottom right corner, choose between the options **Approve** or **Reject**.

---
### Next:
[My session video approvals](/v3-32/docs/pam-session-my-session-video-approvals)
[Requests](/v3-32/docs/pam-session-requests-video)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.