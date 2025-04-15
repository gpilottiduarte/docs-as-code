# How to transfer a file over RDP Web Proxy sessions

This document provides information about a step-by-step guide on how to perform the file transfer via an RDP Web Proxy session on Segura.

## Requirements

* Have a RDP Web Proxy session available.
* Have the **Enable file transfer for download?*** and **Enable file transfer for upload?*** fields set up to **Yes**. For more information on how to enable this field, access the [System Parameters - Remote Session](/v4/docs/pam-session-proxy-settings) document.

---
## Access the session

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Credentials** > **All credentials**.
3. From the list, select a session that is of the web type.
4. Click on **Start session**.

When starting an RDP Web session and the parameter **Enable file transfer** is enabled, the Web Proxy will make a mapped drive available in the target session, the **G (by default)** driver is mapped and named by **Segura**.

:::(info) (**Info**)
If the **G** letter is already being used on your machine for another driver, access the [How to configure a remote session (proxy)](/v4/docs/pam-session-configure-remote-session-proxy) document, to find out how to make the change.
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
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.