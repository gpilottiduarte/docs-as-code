# Reference for Orbit commands

This article describes the commands and features available in **Orbit**.
:::(Warning) (Warning)
If you are in a cluster architecture, it is important to know that actions performed on one instance are not reflected in all other instances. For commands that may affect the cluster's operation, you need to manually execute the commands on each of the instances.
:::
:::(Warning) (Warning)
The commands below may restart essential services for the application to function, resulting in momentary unavailability. Invalid configurations can cause irreversible unavailability. You will always be alerted to the possibility of unavailability and asked if you want to proceed with the execution of the commands.
:::
## Available commands
The commands available in Orbit are accompanied by a detailed description of their functionalities.
:::(Info) (Info)
If executed without instructions, the command orbit will display its default syntax.
:::
:::(Info) (Info)
If you try to execute a command without elevation, you will receive a warning message:
**'This program must be run with root permissions!'**
:::
```
# sudo orbit --help
Usage: orbit <command>

Orbit is the senhasegura console created to provide tools for system configuration and administrative routines.

Commands:
  application           Application settings tools.
  api                   A2A settings tools.
  network               Network settings tools
  domum-gateway         Domum Gateway settings tools
  network-connector     senhasegura Network Connector settings tools
  hostname              Change the server hostname. Changing the hostname you will need reboot of the server.
  dns                   The Domain Name System (DNS) management tools
  ntp                   The Network Time Protocol (NTP) management tools
  upgrade               Upgrade the system by installing/upgrading packages
  backup                Application backup settings
  cluster               High Availability and Disaster Recovery settings tools
  sync                  Files and application directories synchronize configuration
  webssl                Webserver SSL certificates management tools
  locale                Language and locale settings
  partition             File system partitions management tools
  disk                  Disks management tools
  zabbix                Zabbix client configuration
  proxy                 Application access proxy settings
  email-oauth2-proxy    Email OAuth2 Proxy settings
  fajita                Fajita access proxy management tools
  rdpgate               RDP Gate access proxy management tools
  snmp                  Simple Network Management Protocol (SNMP) management tools
  firewall              System Firewall management tools
  shutdown              Power-off or reboot the machine safely.
  execution             Application execution process tool.
  services              Manage senhasegura services
  security              System security management tools
  version               Print version information and quit
  healthcheck           Health Check tools
  apt-fix               Reconfigure the senhasegura main repository

Flags:
  -h, --help    Show context-sensitive help.

Run "orbit <command> --help" for more information on a command.
```
### Additional help
To obtain detailed information about a specific command, use the following syntax:
orbit `--help`.

For example, to get help with the **command dns**, execute:
`orbit dns --help`.


