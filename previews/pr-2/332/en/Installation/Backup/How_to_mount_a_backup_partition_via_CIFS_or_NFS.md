# How to mount a backup partition via CIFS or NFS

In this article, you’ll find instructions on how to mount a backup partition via CIFS or NFS

## Requirements

* The backup server must be configured with a shared folder.
* [Firewall rules](/v3-32/docs/installation-firewall-requirements) must be open between the backup and senhasegura's server.
* Credentials must have `write` permission. 

{{snippet.Secrets Backup Location}}

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
