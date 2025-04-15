# How to register an application credential

When you [register a credential](/v3-33/docs/pam-how-to-set-up-a-credential-in-senhasegura), it's possible to determine whether this credential will have access to the target device's entire system or only to specific applications within the device. To do this, you must indicate which applications will be accessed by this credential.

## How to edit an existing credential

1. In the top left corner, click the **Grid Menu**, identified by the nine squares, and select **PAM Core.**
2. On the side menu, select **Credentials > All**.
3. On the credentials list screen, select the credential you want to edited. In the **Action** column, click on the three vertical dots icon and choose **Edit**.
4. In the pop-up window that opens, select the **Session settings** tab.
5. In the **Remote application configuration** subsection, check **Restrict access to the remote application only**.
6. In the **Automation Macro (RemoteApp)** option, click the icon represented by the sum symbol.
7. In the **RemoteApp** column, select the application the credential will access, for example, **CMD + Command**. After, on the **Connectivity** column, select the type of connection protocol that will be used, for example, **RDP**.
    1. If necessary, you can add as many applications as you need.
8. Click **Save**.

From now on, whenever this credential is used, it’ll only have access to the application indicated.

## How to view credentials by application

When you register a credential with restricted access to remote applications, it will be displayed in the **Application** section of the senhasegura platform.

To view these credentials:

1. In the top left corner, click the **Grid Menu**, identified by the nine squares, and select **PAM Core**.
2. On the side menu, select **Credentials > Application**.

The list page will show all credentials with limited access to applications, separated by access device.

## Possible actions

The credentials listed can perform actions, the main one being automatic login. This is possible through the use of a previously registered credential. To log in, search for your credential and click on **Start Section**, identified by the computer icon in the **Action** column

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
