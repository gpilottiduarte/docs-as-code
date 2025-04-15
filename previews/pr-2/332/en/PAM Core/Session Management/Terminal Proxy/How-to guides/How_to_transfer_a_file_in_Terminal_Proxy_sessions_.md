# How to transfer a file in Terminal Proxy sessions using SCP

In this document, you’ll find a step-by-step guide on how to perform file transfer using SCP command in remote Terminal Proxy sessions.

## Requirements

* Terminal Proxy type credential active.

---
## Transfer via SCP
To transfer a file using SCP from a workstation to a destination server, two steps are required.

1. In the first step, the file is uploaded to senhasegura using the user's terminal proxy.
2. Second step, the user must connect to senhasegura Terminal Proxy to upload the same file to a destination server.
3. To use the `scp` command, use the syntax below, replacing the strings with:

**String**|**Description**
|---|---|
`file_name`|File to be transferred.
`senhasegura_vault`|Hostname or IP address of the senhasegura vault.
`senhasegura_user`|User of the senhasegura vault.
`file_destination`|Location where the file should be transferred.

1. Open the **command prompt** application of your preference.
2. Enter the following command line to **upload** a file to the senhasegura vault:
    1. `scp file_name senhasegura_user@senhasegura_vault:~`
    2. Type your password.
    3. Press the **Enter** key to start.
3. Enter the following command to **download** a file from the senhasegura vault to the requestor's workstation:
    1. `scp senhasegura_user@senhasegura_vault:file_name file_destination`
    2. Type your password.
    3. Press the **Enter** key to start.

:::(warning) (**Attention**)
The SCP syntax doesn’t support Multihop connection string, so these two steps become mandatory. Use SFTP transfer for a better experience.
:::

The senhasegura Terminal Proxy also offers another type of file transfer via SFTP, to find out how to perform this, access the [How to transfer a file in Terminal Proxy sessions using SFTP](/v3-32/docs/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-sftp) document.

---
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.