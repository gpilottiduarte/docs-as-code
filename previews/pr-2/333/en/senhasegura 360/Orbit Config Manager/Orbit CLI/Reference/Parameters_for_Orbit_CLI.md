# Parameters for Orbit CLI

PThis article describes the parameters of the orbit command and its functionality.

:::(warning) (Attention)
* In case you're in a cluster architecture, it's important to know that actions taken in one instance aren't reflected in all the other instances. For commands that may affect the operation of the cluster, you must manually execute the commands on each instance.
* The commands below can restart services that are essential for the application to function, causing a momentary outage. Invalid configurations can cause irreversible unavailability. You'll always be alerted to the possibility of unavailability and asked if you want to proceed with executing the commands.
:::

## Available commands
The `orbit` command, if executed without instructions, will display the help about the available parameters. 

This command requires root privileges. In case you try to execute a command without elevation, you will receive a warning message:

```bash
mt4adm@vmdf-giskard:~$ orbit
This program must be run with root permissions!
```

| Parameter            | Description                                                  |
|----------------------|--------------------------------------------------------------|
| `application`      | Application settings tools.                                  |
| `api`                  | A2A settings tools.                                          |
| `network`              | Network settings tools.                                      |
| `domum-gateway`        | Domum Gateway settings tools.                                |
| `network-connector`    | senhasegura Network Connector settings tools.                |
| `hostname`             | Change the server hostname. Need to reboot server after.     |
| `dns`                  | The Domain Name System (DNS) management tools.               |
| `ntp`                  | The Network Time Protocol (NTP) management tools.            |
| `upgrade`              | Upgrade the system by installing/upgrading packages.         |
| `backup`               | Application backup settings.                                 |
| `cluster`              | High Availability and Disaster Recovery settings tools.      |
| `sync`                 | Files and application directories synchronize configuration. |
| `webssl`               | Webserver SSL certificates management tools.                 |
| `locale`               | Language and locale settings                                 |
| `partition`            | File system partitions management tools.                     |
| `disk`                 | Disks management tools.                                      |
| `zabbix`               | Zabbix client configuration.                                 |
| `proxy`                | Application access proxy settings.                           |
| `email-oauth2-proxy`   | Email OAuth2 Proxy settings.                                 |
| `fajita`               | Fajita access proxy management tools.                        |
| `rdpgate`              | RDP Gate access proxy management tools.                      |
| `snmp`                 | Simple Network Management Protocol (SNMP) management tools.  |
| `firewall`             | System Firewall management tools.                            |
| `shutdown`             | Power off or reboot the machine safely.                      |
| `execution`            | Asynchronous task batch execution tool.                      |
| `services`             | Manage senhasegura asynchronous services.                    |
| `security`             | System security management tools.                            |
| `version`              | Print version information and quit.                          |
| `healthcheck`          | Health Check tools.                                          |
| `repository`           | Repository settings tools.                                   |

O parâmetro `repository` permite que sejam passados quatro parâmetros:

| Parameter                         | Description                                               |
|-----------------------------------|---------------------------------------------------------|
| `repository configure stable`       | Source repository for installing stable versions.       |
| `repository configure candidate`    | Source repository for installing candidate versions.    |
| `repository configure testing`      | Source repository for installing test versions.         |
| `repository creature unstable`      | Source repository for installing unstable versions.     |