# How to manage operating system services

In this document, you’ll find the steps on how to manage operating system services.

## Manage operating system services
To start, stop, and restart operating system services, you should use the `orbit service` command.
``` 
mt4adm@vmdf-giskard:~$ sudo orbit service --help
Usage: orbit service <service> <command>

Send commands to the systemd manager

Arguments:
 <service> The service name
 <command> Systemd command: [start|stop|restart|status]

Flags:
 --help Show context-sensitive help.
 --force Force the command execution, never prompt
 --show
``` 

For example, let's view the status of the **SNMP service**.
``` 
mt4adm@vmdf-giskard:~$ sudo orbit service snmpd status
● snmpd.service - Simple Network Management Protocol (SNMP) Daemon.
 Loaded: loaded (/lib/systemd/system/snmpd.service; enabled; vendor
 preset: enabled)
 Active: active (running) since Fri 2020-06-12 21:18:21 CEST; 41min ago
 Process: 11119 ExecStartPre=/bin/mkdir -p /var/run/agentx (code=exited,
 status=0/SUCCESS)
 Main PID: 11120 (snmpd)
 Tasks: 1 (limit: 3489)
 Memory: 7.7M
 CGroup: /system.slice/snmpd.service
 └─11120 /usr/sbin/snmpd -Lsd -Lf /dev/null -u Debian-snmp -g
 Debian-snmp -I -smux mteTrigger mteTriggerConf -f -p /run/snmpd.pid
``` 
## Restart a service
To restart a service, use the `restart` command. The same syntax as the example can be used for the `start` and `stop` commands, which will start and stop services respectively.
``` 
mt4adm@vmdf-giskard:~$ sudo orbit service snmpd restart
Are you sure you want to proceed: y
``` 
