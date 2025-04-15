In senhasegura, tasks that require processing large amounts of information are performed asynchronously.

The triggers initiating processing vary according to the information being worked on. They are usually divided into two types. Tasks performed through scheduling and tasks conducted through a system event. Robots can be understood as services.



---

## Robots

Accessing the menu **Settings ➔ Execution Processes,** you will have access to the main panel of all robots.

You can change the number of instances of a robot at the field ***Simulate(***Simult.***).***

Robots are kept on hold until the subsequent execution is configured through the execution interval and the start and end time of execution. You can configure the execution range of some robots.

CautionChanging any interval of execution, the number of instances, or switching its status can cause the unavailability of data.

Syslog will notice any changes.

### Notifications

* **Password change report:** Notify configured users about occurred password changes;
* **CPU and Memory Monitor:** Notify configured users about system monitor warnings;
* **Disk space monitors:** Notify configured users about disk usage warnings;
* **Expiration notification:** Information Notify configured users about passwords and certificates close to expiration;

### Session gateway

* **Session finalizer:** Register the end time of proxy sessions that finished out of ordinary circumstances;
* **Failed session finalizer:** Register the end time of proxy sessions that have not even occurred. Network, password, or firewall issues denied the connection;
* **Session gateway:** log converter Convert all user events into a readable format at the session log;
* **Session gateway:** video generator Needs user request. Convert the entire session video into an MP4 file;
* **Session texts indexer:** Dumps all texts exposed into the session into the database. Users can filter desired information by looking into all recorded sessions;
* **SocketServer Monitor:** Keeps the proxy server socket's alive;
* **Session gateway:** log processing Convert all user events into a readable format at the session log;
* **Session gateway:** input log Convert user inputs into a readable form at the session log;
* **Session gateway:** connection status Update the proxy sessions dashboard;
* **NSS settings synchronizer:** Update the senhasegura NSS (Name Service Switch);

### Discovery and scan

* **Credential discovery:** Run configured discoveries looking for credentials;
* **Access logs synchronizer:** Identify suspect's logins into registered devices;
* **Discovery consolidator:** Update all discoveries status and reports;
* **Device discovery:** Run configured discoveries looking for devices;

### Access control

* **Reply to email request:** Process the configured inbox looking for authorization responses;
* **Access groups processing:** Process all access groups compiling granted user access;
* **LDAP/AD Synchronization:** Syncs user's accounts with the configured LDAP/AD server;

### Data purge

* **Data archiver:** Archive expired database data. It can configure control date;
* **Warehouse conciliation:** Checks if virtual data and physical data are compliance;
* **Warehouse purge:** Delete expired database data. It can configure control date;

InfoIn cases where the purge should not be performed in a session, see the ***Proxy Manual*** in the sections "*Actions at the end of a session*" and "*Logs for a session*."

### User provisioning

* **Account discovery:** Update senhasegura account's with configured AD account changes;

### Mail

* **Email collector:** Process all configured email inboxes;
* **Email sender:** Send all queued emails;

### System monitors

* **Primary key monitor:** Monitors the database primary key and warning if its value is close to reaching;
* **Backup monitor:** Monitors if the database is configured and running and if the backup files are updated;
* **Schedule monitor:** Monitors if all scheduled tasks are running and if there is no late task;

### User Behavior

* **User Behavior: View:** Consolidate users make all recent password request;
* **User Behavior: History View:** Consolidate users make all password request;
* **User Behavior: Session:** Consolidate users make all recent proxy session;
* **User Behavior: History Session:** Consolidate users make all proxy session;

### Risk analysis

* **Command audit:** Score all configured audited commands that occur in a proxy session;

### Certificates

* **Certificate expiration:** Notify and act under certificates next to expire;

### Backup jobs

* **Backup Export:** Exports the last backup to configured remote directory;
* **Credentials backup:** Run backup tasks for credentials;
* **Secrets backup:** Run backup tasks for protected information;

### Task Manager

* **Daily Data:** Update reports and dashboard data;
* **Executor:** Execute scheduled tasks;



---

## Operations

In **Devices ➔ Batch Import.**

* **Batch import processing:** Process the uploaded spreadsheet for devices and credentials import;
* **Connectivity test:** Test all devices registered connections;
* **Password reconciliation:** Check if the recorded password is the same password applied to the target. Valid only with Windows RPC and SSH.;
* **Operation executor:** Batch operator executor. Execute tasks ordered by Change Password, Certificate, and Discovery modules.;
* **Operation executor:** Retry Retry failures registered by the Operation Executor;
* **Expired operation cancellation:** Looks for queued operations that expired the execution time, canceling them;
* **Expired password:** Request password change task's to the Operation Executor when the password has expired;



---

## Reports

The menu **Settings ➔ Services ➔ Robots and tasks** have auxiliary reports to see the execution status.

* **Tasks:** Shows the registered tasks triggered by other modules and their status;
* **Process:** Shows started processes. A process can be a scheduled one or a task\-based;
* **In execution:** Shows started robot instances.
