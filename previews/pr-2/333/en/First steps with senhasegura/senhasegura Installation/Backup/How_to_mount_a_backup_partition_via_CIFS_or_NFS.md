# How to mount a backup partition via CIFS or NFS

In this article, you’ll find instructions on how to mount a backup partition via CIFS or NFS

## Requirements

* The backup server must be configured with a shared folder.
* [Firewall rules](/v3-33/docs/installation-firewall-rules) must be open between the backup and senhasegura's server.
* Credentials must have `write` permission. 

:::(warning) (Secrets Backup Location)

Always ensure backups are saved in a different location to protect sensitive information and maintain business continuity.
For senhasegura with the crypto appliance, backups should not be stored on the appliance itself because:

1. **Single Point of Failure**: If the appliance fails, you could lose both the data and the backup.
2. **Limited Recovery Options**: In the event of a hardware or software malfunction, having backups on an external device ensures that you have multiple avenues for data recovery.
3. **Best Practices**: Store backups in a separate, secure location to comply with data protection standards and ensure availability.

:::

## How to mount a backup partition via CIFS or NFS

To mount a backup partition via CIFS or NFS, follow these steps:


1. On the upper left corner of the screen, click the **Grid Menu**, identified by the nine squares, and select **Orbit Config Manager**. 
2. From the menu, select **Settings > Backup**. 
3. Set the **Mount a remote partition?** parameter to **Yes**.
4. Under **How will the how to send the backup files?** select **Mounting a remote partition (via CIFS or NFS)**.
5. Click **Add remote partition**. This will open a new window.
6. Populate the **Remote host** and **Remote path** fields with the details of the server that will store the backup. For example:

* **Remote host**: `myserver.com` or `10.10.1.5`.
* **Remote path**: `/files/backup/senhasegura`.

::: (info) (Info) 
For Windows servers, verify the network path of the folder.
:::
		
7. Select the protocol:
* **Samba (CIFS)**: requires a user with enough privilege to write files in the directory specified in the **Remote path**. Otherwise, senhasegura won’t be able to mount the partition or create the backup. **Optional**: add a domain if your host server requires it.
* **Network File System (NFS)**: if you choose an NFS mount, don't forget to add senhasegura's IP address to the settings of your Remote NFS Host. Otherwise, senhasegura won’t be able to mount the partition or create the backup.


::: (warning) (Caution)
Don’t use passwords that contain the characters `\`, `&`, and `!` in remote partition mappings.
:::

Upon completing the steps, the system will generate a file named `write_test`, indicating that the partition has write permissions.
