# How to configure Kerberos authentication for RDP sessions on Windows Server

In this document, you’ll find a step-by-step guide on how to configure an RDP Proxy and RDP via Web Proxy sessions to be authenticated through Kerberos protocol.

:::(error) (**Important**)
The steps in this tutorial must be performed on a **Windows Server** machine.
:::

## Requirements

* Be a user with administrator permissions.
* Have a domain configured for these settings to be applied.

---
To use the Kerberos protocol to authenticate sessions, you must first perform the following steps.

## Step 1: Edit local group policy

1. On the original machine, in the **Windows search bar**, type **Local Group Policy Editor**.
2. Click on the result to open the window. 
3. With the editor open, in the left side menu, click on the expansion arrow from the **Computer Configuration** option.
4. Click the expansion arrow from the **Windows Settings** option.
5. Click the expansion arrow from the **Security Settings** option.
6. Click the expansion arrow from the **Local Policies** option.
7. Click on the **Security options** folder to display a screen on the right. Proceed with the configuration as follows: 
    1. In **Network Security: Allow Local System to use computer identity for NTLM**: the value must be set as **Not defined**.
    2. In **Network security: LAN Manager authentication level**: double click. In the window that opens, choose the **Send NTLMv2 response only. Decline LM and NTLM** option and click **OK**.
    3. In **Network Security: LDAP client signing requirements**: double click. In the window that opens, choose the **Negotiate signing** option and click **OK**.
    4. In **Network Security: Restrict NTLM: Add remote server exceptions for NTLM authentication**: the value must be set as **Not defined**.
    5. In **Network security: Restrict NTLM: Add server exceptions in this domain**: the value must be set as **Not defined**.
    6. In **Network Security: Restrict NTLM: Audit Incoming NTLM Traffic**: double click. In the window that opens, choose the **Enable auditing for domain accounts** options and click **OK**.
    7. In **Network Security: Restrict NTLM: Audit NTLM authentication in this domain**: double click. In the window that opens, choose the **Enable for domain accounts to domain servers** option and click **OK**.
    8. In **Network Security: Restrict NTLM: Incoming NTLM Traffic**: double click. In the window that opens, choose the **Deny all accounts** option and click **OK**.
    9. In **Network security: Restrict NTLM: NTLM authentication in this domain**: double click. In the window that opens, choose the **Deny all** option and click **OK**.
    10. In **Network Security: Restrict NTLM: Outgoing NTLM traffic to remote servers**: double click. In the window that opens, choose the **Deny all** option and click **OK**.
8. Close the window.

## Step 2: Server Manager

1. At **Windows Server**, search for the **Server Manager** application and open it.
2. In the upper right corner, click **Tools**.
    1. In the drop-down menu, click **Active Directory Users and Computers**.
3. In the window that opens in the left menu, look for the option where users are registered and click on the arrow to expand the options.
    1. Click on the **Users** option.
4. In the list of users presented, right-click on the user to be configured.
    1. On the drop-down menu, click on the **Properties** option.
5. In the window that opens, click on the **Account** tab.
    1. In the **Account options** section, select the following options.
        i. **This account supports Kerberos AES 128 bit encryption**.
        ii. **This account supports Kerberos AES 256 bit encryption**.
    2. Click **Apply**.
6. Click on the **Member Of** tab.
    1. Click **Add**.
    2. In the **Select Groups** window, click **Advanced**.
    3. The window will expand, on the **Name** field, type **Protected Users** and click **Find Now**.
    4. On the **Search results** list, select the result with the name of **Protected Users** and click **OK**.
    5. The selected name should appear in the **Enter the object names to select** field.
    6. Click **OK**.
7. Returning to the properties screen on the **Member Of** tab, click **Apply**, and then **OK**.

## Step 3: Control Panel

1. In the Windows **search bar**, type **Control Panel**.
2. Click on the result to open the window. 
3. In the opened window, click on **System and Security**.
4. In the options available in **System**, click on **Allow remote access**.
5. In the **System Properties** window, click on the **Remote tab**.
    1. In the **Remote Desktop** section, deactivate the **Allow connections only from computers running Remote Desktop with Network Level Authentication (recommended)** option.
    2. Click **Apply**.
    3. Click **OK**.
6. Close the opened windows.

After this configuration, it’s mandatory to configure remote sessions in senhasegura. To find out how to perform this action, access the [How to configure authentication via Kerberos for RDP sessions in senhasegura](/v3-33/docs/pam-session-how-to-configure-authentication-via-kerberos-for-rdp-sessions-in-senhasegura) document.

---

Do you still have questions? Reach out to the [senhasegura community](https://community.senhasegura.io/){target=`_blank`}.