# How to remotely access devices on Segura with SSH keys via web proxy

This document provides a comprehensive guide for establishing secure remote access to devices in Segura using SSH key authentication via web proxy.

## Prerequisites

Before initiating an SSH key-based session, ensure the following requirements are satisfied:

1. Valid user authentication credentials.
2. Appropriate Segura user permissions.
3. Membership in an access group with requisite permissions for:
   - Credential utilization.
   - Device access.
   - Remote session establishment.

## SSH key generation and configuration

Execute the following procedures on the target device:

1. Generate an SSH key pair with the specified encryption parameters:
   
   ```shell
   ssh-keygen -t RSA -m PEM
   ```
   
2. Extract and preserve both components:
   - Public key value.
   - Private key value.

3. Deploy the public SSH key to the local authentication directory:
   
   ```shell
   ssh-copy-id localhost
   ```

4. Validate key functionality with the verification command:
   
   ```shell
   ssh -i .ssh/id_rsa localhost
   ```

:::(error) (Alert)
Failure to properly execute the `ssh-copy-id` command will result in remote session initialization failure.
:::

## SSH key registration in Segura

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Credentials > SSH > SSH Keys**
3. In the **SSH keys** report click the **Add** button.
4. In the **SSH Key registration** screen:
    1. In the **Information** tab:
        1. **Key name**: Assign a descriptive identifier (e.g., `id_rsa`).
        2. **Status**: select the status of the SSH key.
        3. Tags: insert tags to identify the SSH key.
        4. **SSH key owner**: specify the authorized key owner (must exist on the target device).
    2. In the **Key data** tab:
        1. **Username**: enter the SSH key username.
        2. **Private Key**: insert the complete private key value.
        3. **Public Key**: insert the complete public key value.
        4. For password-protected keys:
            1. Select **Set current password**.
            2. Enter the key's password in the designated field.
            3. You can generate a password for thh SSH key, to do this, click the **Generate** button.
            4. To **show/hide** the password, click the eye button on the password field.
   1. In the **Devices** tab:
       1. **Main device**: select the main device that this SSH key will access.
           1. To registwer a new device, click the **Register new device** button.
       2. To add a new device, which is already registered on Segura, click the **Add** button to open the **Devices** modal.
       3. On the **Devices** modal, select the devices you want to associate with the SSH key and click **Add**.
5. On the **Review** tab, click **Save**.

:::(error) (Alert)
The public key must be properly deployed on all selected devices.
:::

## Remote session with registered SSH keys

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Credentials > SSH > SSH Keys**.
3. In the **SSH Keys** report, identify the appropriate SSH key.
4. Click the **Actions** button and select **Start session with a key**
5. In the **SSH Keys: Remote Access** report:
   1. Locate the target device for SSH key authentication and Select **Start session**.
5. The connection to the specified device will be established using the registered SSH key.

***

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/)