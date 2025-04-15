# How to manage the Master Key backup directory

Before creating the master key, it's necessary to configure the export location for the encrypted data.

## Configure storage directory for encrypted data

1. On senhasegura, in the upper left corner, click **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Backup \> Servers**.  
3. In the **Backup Servers** report, click on **View actions**, represented by three vertical dots, and select **New** from the dropdown menu.  
4. In the **Backup Server** window, fill in the data:  
   1. **Mode**: choose the backup mode from the drop-down menu. The options are *Local Directory* or *SSH \- Rsync*.  
      1. Keep the default settings for the local directory.
      2. For SSH-Rsync, see the instructions below.  
   2. **Enabled**: select **Yes** for the server to be accessible right after creation.  
   3. **Directory path**: indicate the backup directory path on the server. For example: `/srv/backup_remoto/secrets`.  
5. Click **Save**.

### SSH-Rsync Mode

If you choose the **SSH-Rsync** mode, you should additionally fill in this data:

1. **Host**: IP address or domain of the backup server host.  
2. **Port**: port number that the backup server will be listening on.  
3. **Credential for authentication**: select from the drop-down menu the credential that will authenticate on the backup server.  
   1. This credential should have already been registered in senhasegura.  
4. Click **Save**. 

:::(info) (Info)  
This directory is the same directory where the credential backup was configured.  
:::

## How to change the storage directory for encrypted data

1. In senhasegura, in the upper left corner, click on **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Backup \> Servers**.  
3. In the **Backup Servers** report, identify the directory you want to change and, in the **Action** column, click on **Edit**, represented by the pencil and paper icon.  
4. The **Backup Server** window will open in edit mode, edit the information you want and click **Save**.

## How to deactivate a storage directory for encrypted data

1. In senhasegura, in the upper left corner, click on **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Backup \> Servers**.  
3. In the **Backup Servers** report, identify the directory you want to change and, in the **Action** column, click on **Edit**, represented by the pencil and paper icon.  
4. The **Backup Server** window will open in edit mode.  
5. In **Enabled**, select **No** and click **Save**.

## How to reactivate a storage directory for encrypted data

1. In senhasegura, in the upper left corner, click on **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Backup \> Servers**.  
3. In the **Backup Servers** report, in the top bar, select **No** in the **Enabled** drop-down menu to filter inactive servers in senhasegura.  
4. Identify the server you want to reactivate and, in the **Action** column, click on **Edit**, represented by the pencil and paper icon.  
5. The **Backup Server** window will open in edit mode.  
6. In **Enabled**, select **Yes** and click **Save**.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).