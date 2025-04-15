# How to register an application credential

When you [register a credential](/v4/docs/pam-how-to-set-up-a-credential-in-Segura), it's possible to determine whether this credential will have access to the target device's entire system or only to specific applications within the device. To do this, you must indicate which applications will be accessed by this credential.

## How to edit an existing credential

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Credentials > All credentials**.
3. Select the credential you want to edited and in the bottom-right corner, click on **Edit**
4. At the Credential screen, select the **Session settings** tab.
5. In the **Remote application settings** subsection, check **Restrict access to the remote application only**.
6. In the **Automation Macro (RemoteApp)** option, click in **Add**.
7. In the **RemoteApp** column, select the application the credential will access, for example, **CMD + Command**. After, on the **Connectivity** column, select the type of connection protocol that will be used, for example, **RDP**.
    1. If necessary, you can add as many applications as you need.
8. Click **Save**.

From now on, whenever this credential is used, it’ll only have access to the application indicated.

## How to view credentials by application

When you register a credential with restricted access to remote applications, it will be displayed in the **Application** section of the Segura platform.

To view these credentials:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Credentials > Application**.

The list page will show all credentials with limited access to applications, separated by access device.

## Possible actions

The credentials listed can perform actions, the main one being automatic login. This is possible through the use of a previously registered credential. To log in, search for your credential and click on **Start Section**, in the **Action** column

***

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).
