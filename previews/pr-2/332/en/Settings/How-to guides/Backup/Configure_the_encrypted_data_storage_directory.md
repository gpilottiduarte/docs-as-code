## Configure the encrypted data storage directory

Before creating the **Master Key**, it is necessary to configure the export location of the encrypted data. Remember that this directory must be known to the parties' guardians.

CautionThis step is unnecessary if you are configuring a senhasegura SaaS instance. Go to step **[Generate remote ceremony from the master key](/v3-32/docs/master-key-ceremony)**.

Within the module and menu **Settings ➔ Backup ➔ Servers**, you will access the records of the directory where senhasegura internally forwards the backup.

1. Create a new record via the **New** report action button
2. Choose how the backup will be stored
3. Fill in your directory

CautionIf you choose **Local Directory**, keep the default data and click **Save**.

4. Fill in the **Host**, **Port**, and the **Credential for authentication**
5. Click **Save**

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28256%29.png)Backup server registration 

  


This directory is the same directory where the database and session files backup was configured. The **Master Key** files are forwarded to this same directory and automatically directed to the remote directory configured in the backup step.

