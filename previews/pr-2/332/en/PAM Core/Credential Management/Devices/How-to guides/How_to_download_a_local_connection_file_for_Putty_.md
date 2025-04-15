# How to download a local connection file for Putty and Remote Desktop

You can use a local file to make the SSH connection via Putty or an RDP connection via Remote Desktop on Windows.

## How to enable the download files connection option

First, you need to enable the option to make a local connection. To do this, follow the steps below:

1. In the top left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **System parameters**.
3. On the **System Parameters** screen, select the **Remote Session** option from the submenu on the left side.
4. In the **General** section, enable the option **Enable download for local access?.**
5. Click **Save**.

## How to download the local connection file

To download the local connection file, follow the steps below:

1. In the top left corner, click the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Credentials > All**.
3. In the list of credentials, select the one you want to use for the local connection.
4. In case it's a **Linux machine** you want to connect to:
    1. In the **Action** column, click the icon identified by the three vertical dots and select **Putty** from the drop-down menu.
    2. The connection file will be downloaded. This file will have a `.bat` extension, indicating that it’s a batch file.
5. In case it is a **Windows machine** you want to connect to:
    1. In the **Action** column, click the icon identified by the three vertical dots and select **Remote Desktop** from the drop-down menu.
    2. The connection file will be downloaded. This file will have an `.RDP` extension, indicating that it’s a Remote Desktop connection file.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).