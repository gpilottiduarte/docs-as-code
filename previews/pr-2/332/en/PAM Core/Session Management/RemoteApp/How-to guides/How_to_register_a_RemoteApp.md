# How to register a RemoteApp

In this document, you’ll find a step-by-step guide on how to configure a **RemoteApp** on senhasegura.

## Requirements

* Be a user with the role of a system administrator, pam administrator or pam operator.

---
## Register RemoteApp

1. On senhasegura, in the upper-left corner, click on the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Settings** > **Access** > **RemoteApp**.
3. On the report screen, in the upper right corner, click on the three vertical dots icon and select **+ New**.
4. In the **RemoteApp** registration window fill in the fields:
    1. **Name***: choose a name for this RemoteApp registration.
    2. **Type***: choose the authentication type, *App Authentication*, *Web Authentication* or *User simulation*.
    3. **Tags (separated by ,)**: if you wish, create tags to identify the registration.
    4. **Enabled**: select *Yes* or *No*.
    5. **Application path**: type the path of the application to run.
    6. **Parameters**: enter the parameters.
    7. **Macro***: place the macro that will be executed.
    8. **Description**: if desired, enter a description.
5. Click **Save**.

After these steps, RemoteApp registration and configuration will be completed and ready for use.

---
### Next:
[How to configure a session for use with RemoteApp](/v3-32/docs/pam-session-how-to-configure-a-session-for-use-with-remoteapp)
[RemoteApp](/v3-32/docs/pam-session-remoteapp)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.