# How to configure the monitoring

In this documentation we will only describe the hardware, operating system and monitoring services that can be queried through the **SNMP** protocol and the **[Zabbix](https://www.zabbix.com/)** agent. In addition to **SYSLOG** messages that can be forwarded to **SIEM** systems and notification emails triggered by **Orbit**.
:::(Info) (Info)
Some notifications are sent via **email** or **SMS** to configured users.
:::
:::(Warning) (Attention)
We don't allow the installation of monitoring agents not approved by the Segura . Only the tools described in this document are approved for use.
:::

## Monitoring through Zabbix
:::(Info) (Info)
The installed version of **Zabbix Agent** is **4.0**. If you need to install a higher version, please contact our support team. 
:::
By default, the **Zabbix Agent** service will be inactive on the instance. To activate it, access the menu **Orbit Server Manager > Server > Services**, locate the **Zabbix Agent** service and click on the **Start action**.

To configure the **Zabbix Server** that will receive the data:

1. Go to menu **Orbit Server Manager > Settings > Application**.
2. Fill in the **Server IP** and **Server Connection Port** fields with the destination server data
3. If you want, you can add up to 3 servers, just fill in the server IP and the connection port to the server.
4. Fill in the **Listen IP** field with the instance access interface IP.
5. Finally, keep **Listen Port** with **port 10050**.

:::(Warning) (Caution)
To set up an access using TLS, use the [Orbit Command Line](/v4/docs/orbit-cli-about-the-orbit-cli) so that the data **Identity** and **Pre-shared key** be presented.
:::

## Monitoring through SNMP
The instance has support for **SNMPv2** and from version 3.8 there is support for **SNMPv3** configured only by Orbit Command Line. See the [Orbit Command Line](/v4/docs/orbit-cli-about-the-orbit-cli) documentation for more details.

Through the **Orbit Web** interface, it is possible to configure the servers allowed to read and the community, through the menu **Orbit Server Manager > Server > Settings**.

:::(Info) (Info)
The **SNMP** service will be restarted with each change.
:::

## Monitoring through SYSLOG (SIEM)
The Segura is compatible with the most used **SIEM** tools in the market and offers support for the transmission of messages in **CEF**, **Syslog (RFC 5424)**, and **Sensage** formats. 

To configure access the menu **Orbit Server Manager > Settings > Application > Syslog** configuration and fill the following fields:

* **Message format:** Refers to the selected format of the message to be sent, which can be **CEF**, **Syslog (RFC 5424**), or **Sensage**.
* **Notification plugin:** Used only in cases of paid customization projects. Keep this field at its default value. It is not recommended to manipulate this control without the supervision of the Support team.
* **Message sending protocol:** Choose between **TCP** or **UDP**.
* **Network Connector:** Refers to the network connector to send the message.
* **Use network connector:** Indicates if the network connector selected will be utilized in the **Syslog** message-sending configuration.
:::(Info) (Info)
Sending syslog messages to the **SIEM** via network connector is only possible when using the TCP protocol. UDP is not supported.
:::
* **Servers for message sending:** A list of IPv4 servers, separated by commas, that will receive the messages.

## Orbit alerts and incidents
Some alerts are specific to modules and features of Segura . These alerts are monitored by **Orbit** and forwarded to certain users depending on their criticality. 

To configure the recipients to receive these alerts, go to the menu **Orbit Server Manager** > **Settings** > **Applications** and add the emails in the field **Notification e-mail**. The pending solution incidents will be presented in the menu **Orbit Server Manager > Application > Incidents**.

:::(Info) (Info)
The emails will be sent whenever the incident is created or updated. Only the types and event **LOG_EMERG**, **LOG_ALERT**, **LOG_CRIT** and **LOG_ERR** will be notified.
:::
:::(Warning) (Caution)
Incidents of the type **LOG_CRIT** generate email sending to all users logged in at the moment and will also be echoed to users who are logged in SSH in the instance Segura. Users who are in proxy sessions through the Segura Web Proxy or Segura Terminal Proxy will not receive these echoed notifications.
:::

### Application activation
*The activation key is required to use the application. The access to your application will be blocked in DAYS.*

#### Priority
**LOG_ALERT**

#### Resolution

* Get in touch with our support team to renew your application license.
* * *

### Mysql Service
*Mysql service failed: MESSAGE*

#### Priority
**LOG_ALERT**

#### Resolution

* If you are running a Segura cluster environment, first at all assume the next node as Primary.
* If you are running into a DR schema, enable the DR instance as primary.
* After normalize the environment, isolate the problematic instance and start a database recovery mirroring the new primary instance.
* * *

### DB Cluster
*Database Cluster failed: MESSAGE*

#### Priority
**LOG_ALERT**

#### Resolution

* First at all assume the next node as Primary.
* After normalize the environment, isolate the problematic instance and start a database recovery mirroring the new primary instance.
* * *

### Cluster Replication Health
*The node cannot apply write-sets as quickly as it receives them: AVGVALUE*
*The node flow control was paused to a long time: FLOWCONTROLVALUE*
*Replication throttling or network throughput issues: AVGQUEUE_VALUE*

#### Priority
**LOG_ERR**

#### Resolution

* Network latency should be configured. At the **Orbit** cluster configuration set that nodes are in different data centers.
* * *

### Cluster Replication Issues
*Node is not synced: STATUS*

#### Priority
**LOG_ERR**

#### Resolution

* Checkup if the node can reach the others cluster members and reconfigure the problematic node.
* * *

### Database Primary key increase alert
*Database Primary key increase alert: Table TABLE_NAME*

### Priority
**LOG_ALERT**

### Resolution

* Execute the Primary key maintenance procedure located at Segura **PAM Solution**.
* * *

### Remote partition problem
*Your remote partition has a problem! Please check your mounted partitions.*

#### Priority
**LOG_ALERT**

#### Resolution

* Check if the target device can be reached by the Segura instance.
* Check if the credential used to authenticate is enabled and has the right permission to access the device.
* Check if the target device support the configured protocol.
* * *

### Inodes usage
*Inodes block usage problem: DETAIL*

#### Priority
**LOG_ALERT**

#### Resolution

* Execute the **INODE** maintenance procedure located at Segura **PAM Solution**.
* * *

### Disk Usage
*Disk space usage problem: DETAILS*

#### Priority
**LOG_ALERT**

#### Resolution

* Attach a new virtual disk to the instance and execute the partition resizing.
* * *

### Files Replication
*Replication interval is too long! Last sync: TIME*
*Replication error! Pack: ID*

#### Priority
**LOG_ALERT**

#### Resolution

* Session files replication failure. Execute the **rsync** manually as described at **Force files resync** procedure at Segura **PAM Solution**.
* * *

### Application version
*Application version is different between nodes: DETAILS*

#### Priority
**LOG_ALERT**

**Resolution**

* Execute `orbit upgrade` into all instances.
* * *

### System restart required
*One or more processes require a full reboot.*

#### Priority
**LOG_ALERT**

#### Resolution

* Execute the system reboot. Into a cluster environment you should reboot one instance by time given the right time to the cluster identify every cluster leave and entrance.
* * *

### Master key not set
*Master key not set. It is not possible to create a backup of your credentials.*

#### Priority
**LOG_ALERT**

#### Resolution

* Perform the Master Key ceremony.
* * *

### Master key guardian inactive
*Master key guardian inactive. You have inactive guardians in the system, redo the master key process.*

#### Priority
**LOG_ALERT**

#### Resolution

* Check if the guardian made wrong its login and disabled its user. If it is not the case, redo the master key process.
* * *

### Proxy Service alert
*Proxy Service not running: DETAILS*

#### Priority
**LOG_ALERT**

#### Resolution

* Restart the service using `orbit service` command. If the problem continue, restart the instance.
* * *

### Default E-mail Account
*E-mail Account is not set up*

#### Priority
LOG_ERR

#### Resolution
* Register an **SMTP** account.
* * *

### System without initial key settings
*System without initial key settings. Run the system setup wizard to resolve this issue.*

#### Priority
**LOG_ALERT**

#### Resolution

* This error should appears only into not configured instances. Execute the deployment steps to solve the incident.
* * *

### System key is missing or corrupted
*System key is missing or corrupted. Contact system administrator immediately.*

#### Priority
**LOG_ALERT**

#### Resolution

* The system key, generated into deployment stage, is not found. It can occurs when an really old backup is restored with an updated Segura software. Call our support team.
* * *

### Default password not changed
*The system default user account password must be changed. Use the command 'orbit security password' to change it.*

#### Priority
**LOG_ALERT**

#### Resolution

* Execute `orbit security password` to change the default password.
* * *

### Server configuration tuning not applied
*The server configuration tuning is different from the minimum required.*

#### Priority
**LOG_WARNING**

#### Resolution

* Check if the hypervisor changed the virtual machine hardware profile. After given the right hardware configuration to to the instance, perform the tuning again.
* * *

### Disk expansion process is recommended
*The size of your data partition is dangerously small. Please expand your disk capacity or add a new disk.*
*The size of your audit log partition is dangerously small. Please expand your disk capacity or add a new disk.*

#### Priority
**LOG_WARNING**

#### Resolution
* Attach a new virtual disk to the instance and execute the partition.
* * *

### Orbit Notify
*Error to sent e-mail alerts: DETAILS*

#### Priority
**LOG_WARNING**

#### Resolution
* Check if the configured **SMTP** account has the right network, security and authentication configuration.
* * *

### Application backup error
*Remote Server SERVER: DETAILS*

#### Priority
**LOG_ALERT**

#### Resolution
* Check if the target device can be reached by the Segura instance.
* Check if the credential used to authenticate is enabled and has the right permission to access the device.
* * *

### Network connector agent unavailable
*The network connector agent has primary unavailable. AGENT, PORT.*
*The network connector agent has secondary unavailable. AGENT, PORT.*

#### Priority
**LOG_ALERT**

#### Resolution
* Activate the **network connector**.

## Logs
The **Orbit Web** schedules several asynchronous operations of settings that will be applied on the instance server. These operations generate execution logs (not detail logs) that can be followed in the following reports.

* **Application:** All Segura application layer logs, including user operations and **Orbit** operations. Alerts also will appears into this logs.
* **API**: **WebService A2A** requests. No sensitive data will be displayed.
* **Operations:** Accessed by the **Orbit Server Manager > Logs > Operations** menu, you will be able to see all **Orbit** operations that have been requested, date/time and request:
    * **Hostname**, **NTP**, **DNS**, **SNMP** and **Gateway** settings definitions.
    * **Zabbix** and **Syslog** definitions.
    * **Backup**, **remote partition** and **Cluster** definitions.
* **Task execution:** Accessed by the **Orbit Server Manager > Logs > Task execution** menu, you can follow the execution of these operations. That is, the moment of change of state of the operation from time to time.
* **Replication**: **Cluster node** status and logs.
* **Backup**: **Backup** definition and execute logs.
* **Database**: **MariaDB** operationa and error log.
* **Web server**: **NGINX** access and error log.
:::(Info) (Info)
In this same menu you'll have access to other service logs of the operating system. Use only for diagnosis.
:::
