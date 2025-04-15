senhasegura log rotates, and senhasegura data purge has, by default, some particular database tables that turn by period. senhasegura Support Team uses many of these tables for diagnostic and troubleshooting steps, which does not affect the client's operation. The only table interacting with client operation is the Email sent and Email received records. The client's SMTP and POP3 provider can index all of those data. See below the rotated entities and their period.

Log date purgeBy default, system logs are kept in senhasegura, without a purge period. For backup, the retention of logs and secrets will follow the rules of the policy applied at each backup location used.  


For example, the information for an external backup may have a retention of more than 2 years.



---

  


## Asynchronous tasks requests

All operational and log tables used by ***Orbini Asynchronous Tasks*** are rotated. The module which requested the operation will keep all operation records. These purged data does not have any client operation detail or sensitive data.

* ***Orbini Assync PIDs:*** Records are rotated on the 7th day. It contains the execution timestamp and its internal PID used;
* ***Orbini Assync Logger:*** Records are rotated on the 15th day. It contains the process info and error messages;
* ***Orbini Assync Tasks:*** Records are rotated on the 30th day. It contains execution requests provided by the client's modules;
* ***Orbini User Notification:*** Records are rotated on the 30th day. It contains system messages sent to users;
* ***Device Connectivity Tests:*** Records are rotated on the 30th day. It contains registered devices connection test based on registered connections protocol;
* ***LDAP Sync Logs:*** Records are rotated on the 30th day. Orbini LDAP Synchronizer uses it for diagnosing and troubleshooting;
* ***Orbini WebService A2A Requests:*** Records are rotated on the 30th day. It contains all client's requests to WebService A2A ;
* ***Orbini Events:*** Records are rotated on the 30th day. It contains the data interaction timestamp log of the user. Please, do not confuse this table with data events from each module. This table is used only for framework purposes;
* ***Orbini Changed Data:*** Records are rotated on the 30th day. It contains the data interaction timestamp log of the user. Please, do not confuse this table with data auditing from each module. This table is used only for framework purposes;
* ***Orbini SMTP Emails:*** Records are rotated on the 180th day. It contains all emails sent by senhasegura. These emails can have sensitive information or module\-specific information. The client's SMTP server can retrieve the same data;
* ***Orbini POP3 Emails:*** Records are rotated on the 180th day. It contains all emails received by the senhasegura configured account. These emails can have sensitive information or module\-specific information. The client's SMTP server can retrieve the same data;
* ***Orbini User Actions:*** Records are rotated on the 300th day. It contains All user data interaction and login/logout logs;

## Session dump data purge

All proxy sessions are recorded in their raw protocol format and stored inside senhasegura data storage. This data can also be copied to the client backup repository during the backup procedure.

These data will consume something next to the network traffic during a proxy session. There is no magic number to determine the size of a session raw replay file.

At that time, the client will decide if the session should be kept or can be purged by the senhasegura automatic purge process.

By default, senhasegura is configured with 90 days of session storage. So if a session occurred more than 90 days ago, it would be automatically purged.

This report contains a list of session files stored in senhasegura:

In **Settings****→****Services → Storage files**, we can view information about the Storage files:

* **ID:** is the file identifier.
* **Name:** is the generated name for the file.
* **Type:** is the type of file extension.
* **Account:** this account is not editable by the standard user, and the account report does not allow the creation of new accounts.
* **Upload:** date and time it took place.
* **Purged:** whether it was purged or not.
* **Status:** whether this data is active in the system or not.
* **Path:** the path that this file is on the system.

## Prevent session purge

At the **Remote session**'s report, accessed by **PAM Core ➔ Credentials ➔ Access control ➔ Remote sessions** menu, the administrator can prevent the session purge by clicking on ***Prevent purge*** action on the desired session record;

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1668001001038.png)

### Change purge interval

At the **Settings ➔ System parameters ➔ System parameters** menu, go to the ***Remote session*** section and change the ***Days for purge*** field. You can change this field defining a new purge period from 1 day to 1000 days;

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1668021607280.png)

### Disable purge service

The administrator can also inactivate all purge services at **Settings ➔ Execution process** menu, and disable ***Data archiver*** and ***Warehouse purge*** services;

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1668020984062.png)

  


