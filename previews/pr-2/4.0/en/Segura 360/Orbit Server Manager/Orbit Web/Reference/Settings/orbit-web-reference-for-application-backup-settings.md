# Application backup settings

This document provides information about the **Application Backup Settings** form.

## **Path to access**

1. On Segura, in the navigation bar, hover over the **Product Menu** and select  **Orbit Server Manager**.
2. In the side menu, select **Settings \> Backup**.

## **Actions menu**

| Item | Type | Description |
| :---- | :---- | :---- |
| **Edit** | Button | Directs to the **Application Backup Settings** screen. |

### **Backup**

| Item | Type | Description |
| ----- | ----- | ----- |
| **Application backup status** | Text field | Displays the current status of the application backup. |
| **Session backup status** | Text field | Displays the current status of the session backup. |
| **File backup mode** | Text field | Defines the file backup mode used. |
| **Server** | Text field | Specifies the address of the configured backup server. |
| **Path** | Text field | Specifies the destination path for the backup on the configured server. |

## **Application backup settings**

| Item | Type | Required | Description |
| ----- | ----- | :---- | ----- |
| **Enable application backup?** | Toggle button | No | Enables or disables the application backup status. |
| **Enable sessions file backup?** | Toggle button | No | Enables or disables the session-related files backup status. |
| **How will backup files be sent?** | Dropdown menu | Yes | Selects the method for sending backup files. The options are *Send to a remote Linux server (via RSYNC)* or *Mounting a remote partition (via CIFS or NFS)*. |

