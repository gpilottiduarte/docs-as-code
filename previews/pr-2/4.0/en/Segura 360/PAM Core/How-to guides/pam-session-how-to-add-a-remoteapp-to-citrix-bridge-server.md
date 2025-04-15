# How to add a RemoteApp to Citrix Bridge Server

In this document, you’ll find a step-by-step guide on how to add a RemoteApp to be used with Citrix Bridge Server.

## Requirements

* Address of URL do Citrix Store XenApp Services.
* Name of Citrix Studio Applications.

:::(info) (**Info**)
The application name must be as it appears in Citrix Studio applications. The Citrix application is the one installed on the Windows server that will be used.
:::

---
## Register RemoteApp for Citrix

1. On Segura, in the upper left corner, click on the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu select **Settings** > **Access** > **RemoteApp**.
3. On the report screen, in the upper right corner, click on the three vertical dots icon and select **+ New**.
4. In the **RemoteApp** registration window, fill in the fields:
    1. **Name***: choose a name for this RemoteApp registration.
    2. **Type***: choose the *User simulation* type.
    3. **Enable**: select *Yes*.
    4. **Application path**: enter the Citrix address.
    5. **Parameters**: if desired, enter the parameters.
    6. **Macro***: configure the macro with the script to be executed.
5. Click **Save**.

After these steps, you need to register the credential to be used with this RemoteApp.

---
### Next
[How to register a Citrix Bridge Server credential](/v4/docs/pam-session-how-to-add-a-remoteapp-to-citrix-bridge-server)
[How to access a Citrix desktop or application](/v4/docs/pam-session-how-to-access-a-citrix-desktop-or-application)

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.