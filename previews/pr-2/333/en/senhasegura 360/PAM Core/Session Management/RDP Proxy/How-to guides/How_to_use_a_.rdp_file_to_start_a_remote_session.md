# How to use a .rdp file to start a remote session

In this document, you'll find a step-by-step guide on how to make a connection using a `.rdp` file.

:::(warning) (**Attention**)
The`.rdp` file is of single use and has a time of 30 seconds to be accessed after being downloaded. After the first use or time, the downloaded file can’t be used to start the session and will have to be downloaded again.
:::

---
### Requirements

* A credential with RDP-type connectivity.
* The parameter **Enable download for local access?** must be selected as **Yes**. To learn how to enable this parameter, access the [System parameters - Remote Session](/v3-33/docs/pam-session-proxy-settings) document.

---
## Download the .rdp file

1. On senhasegura, in the upper left corner, click the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Credentials** > **All**.
3. On the **Access credentials** screen, in the Connectivity search field, choose the **RDP** option.
4. Click **Filter**.
5. On the list of credentials presented, choose the credential from which you want to download the `.rdp` file.
    1. In the **Action** column, click the icon represented by three vertical dots and select the Remote Desktop option.
    2. The download of the `.rdp` file will begin.
    :::(info) (**Info**)
    The `.rdp` file will be saved in the computer's default Download folder.
    :::

## Use the .rdp file
After downloading the file, it can be opened using the Download icon, represented by an arrow pointing downwards, located at the top of the browser screen, or by accessing the Download folder where the file is saved.

1. Click on the `.rdp` file to open.
2. In the **Remote Desktop Connection** window, click **Connect**.
3. In the warning message, click **Yes**.
4. The window with the remote session will open.
    1. If there is a greeting message, click **OK** to close and access the session.

After these steps, the session will be started and ready for use.
:::(warning) (**Attention**)
If the file has already been used or the period of use (30 seconds) has expired, when connecting, the system will display the error message **“Invalid user or password”**.
:::

---
Do you still have questions? Reach out to the [senhasegura community](https://community.senhasegura.io/).