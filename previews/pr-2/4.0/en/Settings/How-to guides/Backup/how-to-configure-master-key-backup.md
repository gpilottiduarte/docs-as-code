# How to manage the Master Key backup directory

Before creating the master key, it's necessary to configure the export location for the encrypted data.

## Configure storage directory for encrypted data

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. On the side menu, select **Backup > Servers**.
3. Click the **Add** button.  
4. In the **Backup Server** screen, fill in the data:  
   1. **Mode**: choose the backup mode from the drop-down menu. The options are *Local Directory* or *SSH \- Rsync*.  
      1. Keep the default settings for the local directory.
      2. For SSH-Rsync, see the instructions below.  
   2. **Enabled**: select **Yes** for the server to be accessible right after creation.  
   3. **Directory path**: indicate the backup directory path on the server. For example: `/srv/backup_remoto/secrets`.  
5. Click **Save**.

### SSH-Rsync Mode

If you choose the **SSH-Rsync** mode, you should additionally fill in this data:

1. **Directory path**: indicate the backup directory path on the server. For example: `/srv/backup_remoto/secrets`. 
2 **Host**: IP address or domain of the backup server host.  
3 **Port**: port number that the backup server will be listening on.  
4 **Credential for authentication**: select from the drop-down menu the credential that will authenticate on the backup server.  
   1. This credential should have already been registered in Segura.  
5 Click **Save**. 

:::(info) (Info)  
This directory is the same directory where the credential backup was configured.  
:::

## How to change the storage directory for encrypted data

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. On the side menu, select **Backup > Servers**.
3. In the **Backup Servers** report, identify the directory you want to change, click the **Actions** button, and select **Edit**.  
4. The **Backup Server** screen will open in edit mode, edit the information you want and click **Save**.

## How to deactivate a storage directory for encrypted data

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. On the side menu, select **Backup > Servers**.
3. In the **Backup Servers** report, identify the directory you want to change, click the **Actions** button, and select **Edit**.  
4. The **Backup Server** screen will open in edit mode.
5. In **Enabled**, select **No** and click **Save**.

## How to reactivate a storage directory for encrypted data

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. On the side menu, select **Backup > Servers**.
3. In the **Backup Servers** report, identify the directory you want to change, click the **Actions** button, and select **Edit**.  
4. The **Backup Server** screen will open in edit mode.
5. In **Enabled**, select **Yes** and click **Save**.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).