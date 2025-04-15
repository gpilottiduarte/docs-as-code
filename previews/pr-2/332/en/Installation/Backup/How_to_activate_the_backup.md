# How to activate the backup

In this article, you’ll find instructions on how to activate the [backup options](/v3-32/docs/installation-backup-overview) supported by senhasegura. 

::: (error) (Important)
The system backup is, by default, activated
:::

## How to activate the backup of secrets

### Requirements

* You must have completed the [Master key ceremony](/v3-32/docs/master-key-ceremony).
:::(Error) (Important )
For the backup of passwords and credentials in senhasegura, it is necessary that all parts of the master key are generated. Each participant must keep their part. The secrets will not be backed up until this master key ceremony is finished.
:::

To activate the backup of secrets, follow these steps:

1. On the upper left corner of the screen, click the **Grid Menu**, identified by the nine squares, and select **Settings**. 
2. Go to **Backup > Servers**. 
3. On the upper right corner of the screen, click the three vertical dots icon, and select **+New**. This will open a pop-up window.
4. At the new window, set the parameter **Enabled*** to **Yes**.
5. Select the **Mode*** and enter the **Directory path***.
6. Click **Save**. 

## How to activate the session file backup

1. On the upper left corner of the screen, click the **Grid Menu**, identified by the nine squares, and select **Orbit Config Manager**. 
2. Go to **Backup > Servers**.
3. Set the **Enable session file backup?** parameter to **Yes**.
4. Click **Save**. 
