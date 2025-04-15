# How to block a user during a session

This document will guide you through a step-by-step process on how to block a user during a remote session.

### Requirements
* Be an admin user.

---
## Block user
:::(info) (**Info**)
It isn’t possible for users to block themselves during a session. This action can be performed only by an admin user during a Live Stream.
:::

1. On senhasegura, in the upper left corner, click **Grid Menu**, identified by the nine squares icon, and then select **PAM Core**.
2. In the side menu, select **Access control** >  **Remote session**.
3. Choose the user you want to block on the list.
4. At the **Action** column, click on the Live Stream, represented by an **eye** icon.
5. A window with the live session will be opened.
6. In the upper right corner, click on **Hold on!** button.
7. A message box will be displayed in the bottom left corner of the user’s session with the message: **Session interaction revoked**.

:::(warning) (**Caution**)
The blocked user will be prevented from interacting only in the session they were blocked, making it possible to interact in other sessions or start a session different from the one it was blocked.
:::

After this action, the user can’t interact in the session. If there is a new attempt to log in, the following error message will be displayed: **“Error. User has been prevented to start sessions by (block author’s name) on (block date and time)”**. Until the unblock, the user won’t be able to access the remote session.

:::(info) (**Info**)
The interactivity can be released in the Live Stream window during the session or at the Users with session block report.
:::

---
## Next:
[User with session block](/v3-32/docs/pam-session-users-with-session-block)
[How to unblock a user](/v3-32/docs/pam-session-how-to-unblock-a-user)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.