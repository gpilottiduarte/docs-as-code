# How to transfer a file over RDP Web Proxy sessions

In this document, you’ll find a step-by-step guide on how to perform the file transfer via an RDP Web Proxy session on senhasegura.

## Requirements

* Have a RDP Web Proxy session available.
* Have the **Enable file transfer for download?*** and **Enable file transfer for upload?*** fields set up to **Yes**. For more information on how to enable this field, access the [System Parameters - Remote Session](/v3-33/docs/pam-session-proxy-settings) document.

---
## Access the session

1. On senhasegura, in the upper-left corner, click on the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Credentials** > **All**.
3. From the list, select a session that is of the web type.
4. Click on the **computer** icon **(Start session)**.

When starting an RDP Web session and the parameter **Enable file transfer** is enabled, the Web Proxy will make a mapped drive available in the target session, the **G (by default)** driver is mapped and named by **senhasegura**.

:::(info) (**Info**)
If the **G** letter is already being used on your machine for another driver, access the [How to configure a remote session (proxy)](/v3-33/docs/pam-session-configure-remote-session-proxy) document, to find out how to make the change.
:::

Through this mapped drive, the user will have access to the files loaded at the destination and will transfer the files from the connected device for download to the workstation.

### To upload

1. Drag a file from the source workstation to the browser window hosting the session.
2. A progress bar for this upload will appear in the bottom-right corner of the session.
3. At the end of the transfer, this file will be available in the root folder of the G driver.

### To download

1. Copy a file from the target device to the folder `G:\Download`.
2. A download window in the bottom-right corner of the browser, and a message will appear in the window when the file has been transferred.

---
### Next:
[Web sessions](/v3-33/docs/pam-session-web-sessions)
[How to register a new web session parameter](/v3-33/docs/pam-session-how-to-register-a-new-web-session-parameter)
[About Custom Configuration - Web sessions parameter](/v3-33/docs/pam-session-about-customize-settings-web-sessions-parameters)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.