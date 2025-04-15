# Logs and data purge

The **log rotation** and **data purging** mechanisms in Segura have predefined database tables that are rotated periodically. Many of these tables are used by the Segura support team for diagnostics and troubleshooting, with no impact on customer operations. The only table that directly interacts with customer operations is related to sent emails and received records, which can be indexed by the customer's SMTP and POP3 provider.  

## Log Retention Period  

* By default, system logs are retained in Segura indefinitely. Backup retention follows the policies applied to the backup location used, which may vary—for instance, exceeding 2 years in cases of external backup.  

## Asynchronous Task Requests  

All operational and logging tables used by **Orbini Asynchronous Tasks** are rotated. The module that initiated the operation will retain its records; however, the purged data does not contain sensitive information or operational details of the customer.  

| Entity | Rotation Period | Description |
| :---- | :---- | :---- |
| **Orbini Assync PIDs** | 7 days | Stores the execution timestamp and internal PID used. |
| **Orbini Assync Logger** | 15 days | Stores process information and error messages. |
| **Orbini Assync Tasks** | 30 days | Contains execution requests made by customer modules. |
| **Orbini User Notification** | 30 days | Stores system messages sent to users. |
| **Device Connectivity Tests** | 30 days | Logs device connection tests based on the registered protocol. |
| **LDAP Sync Logs** | 30 days | Used by **Orbini LDAP Synchronizer** for diagnostics and troubleshooting. |
| **Orbini WebService A2A Requests** | 30 days | Stores all client requests for **WebService A2A**. |
| **Orbini Events** | 30 days | Logs user data interaction timestamps. |
| **Orbini Changed Data** | 30 days | Logs timestamps of user data interactions. |
| **Orbini SMTP Emails** | 180 days | Stores all emails sent by Segura, including sensitive information or module-specific details. These emails can also be retrieved through the customer’s SMTP server. |
| **Orbini POP3 Emails** | 180 days | Stores all emails received by the configured Segura account. These emails may contain sensitive information or module-specific details and can also be retrieved through the customer’s SMTP server. |
| **Orbini User Actions** | 300 days | Stores records of user interactions, including login/logout events. |

## Data Purging Sessions  

All proxy sessions are logged in raw format and stored in the Segura database. These data files can be copied to the customer's backup repository during the backup process.  

* The storage of these files consumes space proportional to network traffic during the proxy session. There is no fixed value for the size of replay files.  
* By default, Segura is configured to store sessions for **90 days**. Sessions older than 90 days are automatically purged.  

## Session File Report  

A report of stored files can be accessed via: **Products Menu > Settings > Services > Warehouse Files.**  

| Field | Description |
| :---- | :---- |
| **Code** | File identifier. |
| **Name** | Generated name of the file. |
| **Type** | File extension. |
| **Account** | Non-editable by standard users; report does not allow new account creation. |
| **Upload** | Date and time when the upload occurred. |
| **Purged** | Indicates whether the file has been purged. |
| **Status** | Whether the file is active in the system. |
| **Path** | Path where the file is stored in the system. |

## Preventing Session Purging  

In the **Remote Sessions** report, administrators can prevent the purging of a specific session by navigating to **Products Menu** > **PAM Core > Credentials > Access Control > Remote Sessions** and selecting the **Prevent Purge** action for the desired session record.  

## Defining the Purge Interval  

To set the data purge interval, go to **Products Menu** > **Settings > System Parameters > Global.** In the **Remote Session** section, modify the **Number of Days for Purge** field (value must be between 1 and 1000 days).