# Reference for Application backup settings

In this document, you will find all the information about the **Backup** menu of the **Orbit Web** interface.

:::(info) (Info)
Backup will be performed automatically, without interrupting the solution.
:::

## Access Path

1. In senhasegura, at the top left corner, click on the **Grid Menu**, represented by the nine squares, and select **Orbit Config Manager**.
1. In the side menu, select **Settings >** **Backup**.

### Application Backup Settings
| Item                            | Description                                                                                                                      |
|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| **Enable application backup?** | By enabling this option, backups of data, logs, and configuration files will be executed. Make sure there is enough space in the storage system. |
| **Enable sessions file backup?** | By enabling this option, session files will also be included in the backup.                                        |
| **Backup directory**         | Directory where the backup service will store the generated files.                                                          |
| **Filename prefix**  | Files will be named with the prefix shown in this field.                                                                 |
| **File backup mode**  | Files will be synchronized via RSYNC.                                                                                      |
| **RSYNC mode directory**     | Directory where the files will be synchronized via RSYNC.                                                                       |
| **Total of backups**            | Number of backups.                                                                                                             |
| **Mount a remote partition?** | By enabling this option, through the configured backup file sending mode, files will be transferred to external storage. |
| **Save**                      | Button to save the configurations.                                                                                            |
