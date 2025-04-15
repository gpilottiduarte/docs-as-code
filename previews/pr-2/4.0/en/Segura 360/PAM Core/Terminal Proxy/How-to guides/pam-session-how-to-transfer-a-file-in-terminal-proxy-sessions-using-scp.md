# How to transfer a file in Terminal Proxy sessions using SCP

This document provides information about a step-by-step guide on how to transfer files using the SCP command in remote Terminal Proxy sessions.

## Requirements

* Any SSH client tool
* Any SCP tool

---
## File Transfer via SCP
To transfer a file from a workstation to a destination server, follow these two steps:

1. Upload the file to Segura using terminal proxy.
2. Connect to Segura Terminal Proxy and upload the same file to the destination device.

### SCP Command Syntax

Below is the some syntax for the scp command. Replace the placeholders with your specific information:
**String**|**Description**
|---|---|
`file_name`|File to be transferred.
`senhasegura_vault`|Hostname or IP address of the Segura PAM.
`senhasegura_user`|Credential of the Segura PAM.
`path_file`|The directory location where the file to be transferred is.
`path_file_destination`| The directory location where the file should be transferred.
`credential`|Credential username.
`device`|Hostname or IP address from the device.

### Transfer file to your Segura home directory
1. Open your preferred SCP tool.
2. Enter the following command to upload a file to the Segura termial. Use `~` to transfer the file to your home directory in Segura:
    ```bash
    scp file_name senhasegura_user@senhasegura_vault:~
    ```
3. Type your password.
4. Press **Enter** to start the upload.

### Transfer file from Segura Home directory to a device
1. Log into Segura Terminal Proxy using an SSH tool:
    1. Execute:
        ```bash
        ssh senhasegura_user@senhasegura_vault
        ```
    3. Type your password
    4. Press **Enter** to access Terminal Proxy.
    5. Once inside Terminal Proxy, transfer the file to the desired device:
        ```bash
        scp file_name device_credential@device:path_file_destination\
        ```
    5. Press **Enter** to start the transfer.

:::(warning) (**Attention**)
The SCP syntax doesn’t support Multihop connection string, so these two steps become mandatory. Use SFTP transfer for a better experience.
:::

The Segura Terminal Proxy also supports file transfers via SFTP. For more information, refer to the [How to transfer a file in Terminal Proxy sessions using SFTP](/v4/docs/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-sftp) document.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.