# How to block a user during a session

This document provides information about a step-by-step process on how to block a user during a remote session.

## Requirements
* Be an admin user.

---
## Block user
:::(info) (**Info**)
It isn’t possible for users to block themselves during a session. This action can be performed only by an admin user during a Live Stream.
:::

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Audit** > **Sessions** > **Remote session**.
3. Choose the user you want to block on the list.
4. At the **Actions** column, click on the **Actions button** and select Live Stream.
5. A window with the live session will be opened.
    1. In the upper right corner, click on **Hold on!** button.
    2. A message box will be displayed in the bottom left corner of the user’s session with the message: **Session interaction revoked**.

:::(warning) (**Caution**)
The blocked user will be prevented from interacting only in the session they were blocked, making it possible to interact in other sessions or start a session different from the one it was blocked.
:::

After this action, the user can’t interact in the session. If there is a new attempt to log in, the following error message will be displayed: **“Error. User has been prevented to start sessions by (block author’s name) on (block date and time)”**. Until the unblock, the user won’t be able to access the remote session.

:::(info) (**Info**)
The interactivity can be released in the Live Stream window during the session or at the Users with session block report.
:::

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.