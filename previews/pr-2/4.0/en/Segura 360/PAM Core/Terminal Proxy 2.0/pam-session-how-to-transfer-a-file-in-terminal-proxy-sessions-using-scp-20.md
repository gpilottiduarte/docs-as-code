# How to transfer a file in Terminal Proxy sessions using SCP 2.0

This document provides information about a step-by-step guide on how to perform file transfer using SCP command in remote Terminal Proxy sessions.

## Requirements

* Terminal Proxy type credential active.

---
## Transfer via SCP  
To transfer a file using SCP from a workstation to a destination server, two steps are required.

1. In the first step, the file is uploaded to Segura using the user's terminal proxy.  
2. Second step, the user must connect to Segura Terminal Proxy to upload the same file to a destination server.

To use the `scp` command, use the syntax below, replacing the strings with:

| **String** | **Description** |
| :---- | :---- |
| **file\_name** | File to be transferred. |
| **Segura\_vault** | Hostname or IP address of the Segura vault. |
| **Segura\_user** | User of the Segura vault. |
| **path\_file** | The location where the file to be transferred is. |
| **path\_file\_destination** | The location where the file should be transferred. |
| **credential** | Credential username. |
| **device\_ip** | IP address from the device. |

## Access using Proxy 2.0  
Using Proxy 2.0 when transferring files via the Terminal Proxy in which the accessed device has **more than one** type of registered connectivity, the user will have to inform the protocol that will be used and the port to make the connection.

1. Open the application **command prompt** of your preference.  
2. Enter the following command line to **upload** from a file to the Segura instance:  
   1. `scp file_name senhasegura_user[credential@ip_device{ssh.22}]@senhasegura_vault:path_file`  
3. If you are using the **multi-tenant**, the tenant name must be entered after the Segura user:  
   1. `scp file_name senhasegura_user%tenant_name[credential@ip_device{ssh.22}]@senhasegura_vault:path_file`  
4. Enter your **password**.  
5. Press the **Enter** key to start the upload.  
6. Enter the following command to **download** a file from the Segura instance to the requestor's workstation:  
   1. `scp senhasegura_user[credential@ip_device{ssh.22}]@senhasegura_vault:path_file path_file_destination`  
7. If you are using the **multi-tenant**, the tenant name must be entered after the Segura user:  
   1. `scp senhasegura_user%tenant_name[credential@ip_device{ssh.22}]@senhasegura_vault:path_file path_destination_file`  
8. Enter your **password**.  
9. Press the **Enter** key to start the download.

:::(warning) (**Attention**)  
The SCP syntax doesn’t support Multihop connection string, so these two steps become mandatory. Use SFTP transfer for a better experience.  
:::

The Segura Terminal Proxy also offers another type of file transfer via SFTP, to find out how to perform this, access the [How to transfer a file in Terminal Proxy sessions using SFTP 2.0](/v4/docs/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-sftp-20) document.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.