# How to configure a session for use with RemoteApp

In this document, you’ll find a step-by-step guide on how to access a **RemoteApp** on senhasegura.

## Requirements

* Have RemoteApp registered.
* Be a user with the role of system administrator, pam administrator or pam operator.

---
## Access the session

1. On senhasegura, in the upper-left corner, click on the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Credentials** > **All**.
3. From the list of credentials displayed on the screen, choose the credential that will have **RemoteApp** access.
    1. Click on the three vertical dots icon and click on the **Edit** option.
    2. In the **Credential** registration window, click on the **Session settings** tab.
    3. In the **Remote Application settings** section.
        1. Click on the **addition** icon so that the box with options is available.
        2. Choose a macro on the **RemoteApp** field and a type on the **Connectivity** field.
    4. Click **Save**.
4. Back on the home screen, click on the **computer** icon to start the session and select the macro that was created.
 
For more information about this section or [registering a credential](/v3-32/docs/pam-how-to-set-up-a-credential-in-senhasegura), access the [Credentials](/v3-32/docs/pam-credentials) document.

---
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.