# How to perform remote access with SSH key via web proxy

This document introduces you to the steps required to remotely access a device on senhasegura via a web proxy and using an SSH key.

## Requirements

To start a session with SSH keys, the following requirements must be met:

- Valid access credentials.
- Have senhasegura user permission.
- Belong to an access group with permission to use credentials and devices to make remote sessions.

## Remote access with SSH key via web proxy

### Configuring the device using senhasegura

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Credentials > All**.
3. In the **Access credentials** report, identify the device and credential used to configure remote access.
4. Once you have identified the device and credential, in the **Action** column, click **Start session**, represented by the computer icon. You’ll be connected to the device using this credential.

:::(info) (Info)
To perform this procedure directly on the device, connect SSH with the command `ssh user@servidor`.
:::

You must perform the following operations on the device:

1. Create an SSH key with the command `ssh-keygen -t RSA -m PEM`.
2. Copy both the public key values and the newly created private key.
3. While still on the device, you must copy the public SSH key to the device. To do this, run the command `ssh-copy-id localhost`. You can test the connection using the command `ssh -i .ssh/id_rsa localhost`.
4. If you don't copy the SSH key using the ssh-copy-id command, you won't be able to start a remote session.

On senhasegura, register an SSH key. To do this, follow the steps below:

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **SSH Keys > SSH Keys**.
3. In the top bar, click on **Show actions**, represented by the three vertical dots, and select **New**.
4. In the **SSH key registration** window, fill in the fields:
    1. On the **Information** tab:
        1. **Username (key owner)**: fill in the user who owns the key. This user must exist on the device used previously.
        2. **Device**: indicate on which device the key was generated.
        3. **Key name**: name of the SSH key. For example, id_rsa.
        4. **Status**: select **Active**.
    2. In the **Key Data** tab:
        1. **Private Key:** paste the value of the private key you copied earlier. **Note**: when copying the key, don't forget to copy its entire contents, from `Begin` to `End RSA PRIVATE KEY`.
        2. **Public Key**: paste the value of the public key you created earlier. **Note**: this key has the extension `.pub`.
            1. If the key has a password, click **Set current password** and add the key's password in the **Password** field.
    3. In the **Devices** tab:
        1. **Devices**: click on the sum icon to open the **Device’s** modal.
        2. In the **Devices** modal, check the devices you want to access the SSH key.
            1. **Note**: The public key must be published on the devices selected in the modal
5. Click **Save**.

### Start a remote session with an SSH key

Having successfully completed the previous steps, you will now be able to start a remote session with your SSH key, by following the steps below:

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **SSH Keys > SSH Keys**.
3. In the **SSH Keys** report, identify the SSH key you want to use.
4. In the **Action** column, click the three vertical dots and select **Log in with a key**.
5. In the **SSH Keys: Remote Access** window, identify the device you want to access with the SSH key and click **Log In**, represented by the computer icon.
6. You’ll be connected to the device using the SSH key you registered.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).