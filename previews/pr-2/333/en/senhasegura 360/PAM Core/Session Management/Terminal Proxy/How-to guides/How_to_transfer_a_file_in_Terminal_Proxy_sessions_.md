# How to transfer a file in Terminal Proxy sessions using SCP

This document provides a step-by-step guide on how to transfer files using the SCP command in remote Terminal Proxy sessions.

## Requirements

* Any SSH client tool
* Any SCP tool

---
## File Transfer via SCP
To transfer a file from a workstation to a destination server, follow these two steps:

1. Upload the file to senhasegura using terminal proxy.
2. Connect to senhasegura Terminal Proxy and upload the same file to the destination device.

#### SCP Command Syntax

Below is some syntax for the scp command. Replace the strings with your specific information:
**String**|**Description**
|---|---|
`file_name`|File to be transferred.
`senhasegura_vault`|Hostname or IP address of the senhasegura PAM.
`senhasegura_user`|Credential of the senhasegura PAM.
`path_file`|The directory location where the file to be transferred is.
`path_file_destination`| The directory location where the file should be transferred.
`credential`|Credential username.
`device`|Hostname or IP address from the device.

#### Transfer file to your senhasegura home directory
1. Open your preferred SCP tool.
2. Enter the following command to upload a file to the senhasegura termial. Use `~` to transfer the file to your home directory in senhasegura:
    ```bash
    scp file_name senhasegura_user@senhasegura_vault:~
    ```
3. Type your password.
4. Press **Enter** to start the upload.

#### Transfer file from senhasegura Home directory to a device
1. Log into senhasegura Terminal Proxy using an SSH tool:
    1. Execute:
        ```bash
        ssh senhasegura_user@senhasegura_vault
        ```
    3. Type your password.
    4. Press **Enter** to access Terminal Proxy.
    5. Once inside Terminal Proxy, transfer the file to the desired device:
        ```bash
        scp file_name device_credential@device:path_file_destination\
        ```
    5. Press **Enter** to start the transfer.

:::(warning) (**Attention**)
Proxy 1.0 doesn’t support Multihop connection strings with SCP, so the above two steps are mandatory. For a better experience, consider using SFTP transfer.
:::

---

### Additional Transfer Option

The senhasegura Terminal Proxy also supports file transfers via SFTP. For more information, refer to the [How to transfer a file in Terminal Proxy sessions using SFTP](/v3-33/docs/how-to-transfer-a-file-in-terminal-proxy-sessions-using-sftp-2) document.

---
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.