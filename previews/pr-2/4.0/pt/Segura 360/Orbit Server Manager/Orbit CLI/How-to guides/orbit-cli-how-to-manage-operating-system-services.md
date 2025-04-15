# Como gerenciar os serviços do sistema operacional

Neste documento, você encontrará os passos de como gerenciar os serviços do sistema operacional.

## Gerenciar os serviços do sistema operacional
Para iniciar, parar e reiniciar os serviços do sistema operacional, você deve utilizar o comando `orbit service`.
``` 
mt4adm@vmdf-giskard:~$ sudo orbit service --help
Usage: orbit service <service> <command>

Send commands to the systemd manager

Arguments:
  <service>    The service name
  <command>    Systemd command: [start|stop|restart|status]

Flags:
  --help     Show context-sensitive help.

  --force    Force the command execution, never prompt
  --show
``` 
Como exemplo, vamos visualizar o status do **serviço SNMP**.
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
## Reiniciar um serviço
Para reiniciar um serviço basta utilizar o comando `restart`. A mesma sintaxe do exemplo pode ser utilizada para os comandos `start` e `stop`, que irão iniciar e parar serviços respectivamente.
```
mt4adm@vmdf-giskard:~$ sudo orbit service snmpd restart
            Are you sure you want to proceed: y
``` 
