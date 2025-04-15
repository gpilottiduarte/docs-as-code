Executors of senhasegura represent *protocols*, *systems connectivity,* and the ability to interact natively.

Executions will run only when the target artifact (e.g. credential to be changed) is configured with an executor and a template. Every **Template** belongs to only one **Executor**.

Every executor can interact with a system. senhasegura abstraction layer enables our development team to create new executors to reach protocols, cloud providers, APIs, website interfaces, OS commands, etc.

  




---

## Web environments

CautionThe instructions in an execution template can not contain any human interaction, like an MFA, during the execution or may not work as intended.  
For example, if an execution template changes a user password and it requires any Multifactor Authentication, the operation to change the password will not work.



| Executor | Description |
| --- | --- |
| **cURL** | Executor for requests to simple web pages. Pages without JavaScript environment or HTML events. You can use this executor for legacy systems based on pure HTML4 architecture |
| **HTTP** | Executor for requests to complex web pages where more interactivity using JavaScript elements and event triggers are required |
| **Selenium** | Selenium is a web application automation solution created to support teams during automated tests, simulating a user |



---

## Miscellaneous protocols



| Executor | Description |
| --- | --- |
| **LDAP** | Interactivity with navigations and operations on LDAP servers |
| **SSH** | Execution of commands through an SSH connection |
| **SSH Legacy** | Command execution via SSH connection from legacy devices and old SSH versions |
| **Telnet** | Execution of commands through a Telnet connection |



---

## Windows environments



| Executor | Description |
| --- | --- |
| **Windows RM** | Interactivity with Windows devices through Windows RM |
| **Windows RPC** | Interactivity with Windows devices through Windows RPC. It is even possible to execute commands via PowerShell |



---

## Databases

Infosenhasegura can interact with a great number of databases. Its implementation can be requested from our Sales or Support team if needed. By default, senhasegura comes with only these four major database vendors installed.



| Executor | Description |
| --- | --- |
| **MySQL** | Execution of commands in a MySQL database |
| **Oracle** | Execution of commands in an Oracle database |
| **PostgreSQL** | Execution of commands in PostgreSQL database |
| **SQL Server** | Execution of commands in SQL Server database |
| **MongoDB** | Execution of commands in a MongoDB database |
| **Cassandra** | Execution of commands in a Cassandra database |
| **Elasticsearch** | Execution of commands in an Elasticsearch database |



---

## Specific products and binaries



| Executor | Description |
| --- | --- |
| **Tk Expect** | Binary interactivity on the remote device via SSH, Telnet, SQL\*Plus, or TDS (Tabular Data Stream) connections. Perfect for interacting on command line applications where the interface needs to be interpreted |
| **VMWare ESXi** | Changing passwords using the VMWare ESXi client |
| **x3270: IBM Terminal Emulator** | x3270 opens a telnet connection to an IBM host in an X window. It implements RFCs 2355 (TN3270E), 1576 (TN3270\), and 1646 (LU name selection) and supports IND$FILE file transfer. The window created by x3270 can use its font for displaying characters, so it is a relatively accurate representation of an IBM 3278 or 3279\. It is similar to tn3270(1\) except that it is X\-based, not curses\-based |
| **IBM 3270 Terminal** | s3270 opens a telnet connection to an IBM host, then allows a script to control the host login session. It is derived from x3270(1\), an X\-windows IBM 3270 emulator. It implements RFCs 2355 (TN3270E), 1576 (TN3270\), and 1646 (LU name selection) and supports IND$FILE file transfer |

  


