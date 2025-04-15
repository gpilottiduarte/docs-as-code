# How to transfer or download a file in HTTP Web Proxy sessions

In this document, you’ll find a step-by-step guide on how to perform the file transfer via an HTTP/HTTPS Web Proxy session on senhasegura.

## Requirements

* Have a web session available.
* Have the **Enable file transfer for download?*** and **Enable file transfer for upload?*** fields set up to **Yes**. For more information on how to enable this field, access the [System Parameters - Remote Session](/v3-33/docs/pam-session-proxy-settings) document.

---
## Transfer a file
:::(warning) (**Attention**)
Before the transfer begins, the file is allocated to the available memory of the senhasegura server, and then the transfer is initiated in the session. Memory limitation and transfer limit per file may vary depending on the workstation and browser used.
:::
:::(info) (**Info**)
For Chrome and Edge browsers, the limit is 1.6 GB. For Firefox, the limit is 4 GB. In the three browsers, there is a variation of 20%, more or less, depending on the resources available on the workstation used.
:::

1. On senhasegura, in the upper-left corner, click on the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Credentials** > **All**.
3. From the list, select a session that is of the web type.
    1. Click on the **computer** icon **(Start session)**.
4. Leave the web window open.
5. Open the folder where the file to be transferred is located.
6. Drag the file into the web window.
    1. In the bottom-right corner, a confirmation message will appear.

:::(info) (**Info**)
If your session has an upload field, you can navigate to the main folder where you’ll find all the uploaded files.
:::

The transferred files will be saved in the home folder in the senhasegura remote driver. By default, the letter **G** is related to this driver.

## Downloading a file

1. On senhasegura, in the upper-left corner, click on the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Credentials** > **All**.
3. From the list, select a session that is of the web type.
    1. Click on the **computer** icon **(Start session)**.
4. In the opened web session window, look for the file you want to download.
    1. Right-click. In the window that opens, click **Save file**.
5. In the bottom-right corner a link **“Click here to Download”** will appear, when clicked, the file is downloaded to the user’s machine.
6. At the end, a confirmation message will appear in the upper-right corner.

---
## Next:
[Reference for Web sessions](/v3-33/docs/pam-session-web-sessions)
[How to register a new web session parameter](/v3-33/docs/pam-session-how-to-register-a-new-web-session-parameter)
[About Custom Configuration - Web sessions parameter](/v3-33/docs/pam-session-about-customize-settings-web-sessions-parameters)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.