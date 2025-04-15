# How to configure authentication via Kerberos for RDP sessions in senhasegura

In this document, you’ll find a step-by-step guide on how to configure an RDP Proxy and RDP via Web Proxy sessions to be authenticated using the Kerberos protocol.

:::(error) (**Important**)
The steps in this tutorial must be performed in senhasegura.
:::

### Requirements

* Be a user with administrator permissions on senhasegura.

---
:::(warning) (**Attention**)
The following step must be carried out only after completing the steps described in the [How to configure Kerberos authentication for RDP sessions on Windows Server](/v3-32/docs/pam-session-how-to-configure-kerberos-authentication-for-rdp-sessions-on-windows-server) document.
:::

## Configure Kerberos authentication

1. On senhasegura, in the upper left corner, click on the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **System parameters** > **System parameters**.
3. On the screen, click on the **Security** tab.
    1. In the **RDP safe mode*** parameter, choose the **TLS (recommended)** option.
4. In the bottom right corner, click **Save**.

After this configuration, it will be possible to start RDP sessions via Web Proxy or RDP Gate sessions using the Kerberos protocol to authenticate it.

---
Do you still have questions? Reach out to the [senhasegura community](https://community.senhasegura.io/){target=`_blank`}.