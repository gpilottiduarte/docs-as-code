# How to add Citrix Bridge Server credential

In this document, you’ll find a step-by-step guide on how to register a credential for the Citrix Bridge Server in senhasegura.

## Requirements

* The credential must be in Active Directory (AD).
* The RemoteApp for the application must already be registered and configured. To perform this step, access the [How to add a RemoteApp to Citrix Bridge Server](/v3-33/docs/pam-session-how-to-add-a-remoteapp-to-citrix-bridge-server) document.

---
## Add Citrix credential

1. On senhasegura, in the upper-left corner, click on the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Credentials** > **All**.
3. On the report screen, in the upper-right corner, click on the three vertical dots icon and select **+ New**.
4. In the **Information** tab, fill in the required fields.
    :::(info) (**Info**)
    To find out more details on how to fill in these fields, access the [Credentials](/v3-33/docs/pam-credentials) documents.
    :::
5. Click on the **Session Settings** tab.
    1. In the **Remote Application Settings** section, click the **addition** icon next to the **Automation macro (RemoteApp)** field.
    2. In the drop-down menu that will be available, choose the RemoteApp registered with Citrix previously added.
6. Click **Save**.


After these steps, the credential is configured and ready to use.

---
### Next:
[How to access a Citrix desktop or application](/v3-33/docs/pam-session-how-to-access-a-citrix-desktop-or-application)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.