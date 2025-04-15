# How to configure SNMP monitoring

Use the `orbit snmp` command to configure the server that will receive the MIB reading from Segura.

```shell
mt4adm@vmdf-giskard:~$ sudo orbit snmp --help
Usage: orbit snmp

Simple Network Management Protocol (SNMP) management tools

Flags:
 -h, --help                Show context-sensitive help.

 -c, --community=STRING
 -u, --username=STRING     SNMPv3 username
 -s, --server=STRING       Listen server ip address
 -a, --allowed-ips=ALLOWED-IPS,...
                           Allowed servers to query SNMP
 -v, --version=2
     --force               Force the command execution, never prompt
     --show
```
:::(Warning) (**Attention**)
 The following arguments are mandatory:

- **community:** `-c`  
- **server:*** `-s`  
- **allowed-ips:** `-a`  
- **version:** `-v`
- In addition to these arguments for **SNMPv3** it is mandatory to insert **username:** `-u` 
:::

To configure the list of allowed servers, use the arguments as in the example. The `–server` argument must be filled with the IP of the Segura interface. The `–allowed-ips` argument is filled with the list of servers that can read SNMP.

### **Configure SNMPv2**

```shell
mt4adm@vmdf-giskard:~$ sudo orbit snmp -c public -s 192.168.86.86 -a 192.168.86.73 -v 2

? Are you sure you want to proceed? [y/N] y
Done!
No errors reported
```

To list the current configuration, use the `–show` argument.


```shell
mt4adm@vmdf-giskard:~$ sudo orbit snmp --show

SNMP informations
SNMP Listen address = 192.168.86.86
Community public
Allowed IPs
192.168.86.73

SNMPv3 username = N/A
SNMPv3 authentication pass (SHA) = N/A
SNMPv3 encryption pass (AES) = N/A
SNMPv3 level = authpriv
```

### **Configure SNMPv3**


```shell
mt4adm@vmdf-giskard:~$ sudo orbit snmp -c public -s 192.168.86.86 -a 192.168.86.73 -v 3 -u mymonitor

? Are you sure you want to proceed? [y/N] y
Done!
Run 'orbit snmp --show' to view authentication and encryption settings
Example: snmpwalk -v 3 -u mymonitor -a SHA -A iRYRWHXhMHlY -x AES -X jWSqOdVtXwyz -l authPriv 192.168.86.86
```

To list the current configuration, use the `–show` argument.


```shell
mt4adm@vmdf-giskard:~$ sudo orbit snmp --show
SNMP informations
SNMP Listen address = 192.168.86.86
Community
Allowed IPs
192.168.86.73

SNMPv3 username = mymonitor
SNMPv3 authentication pass (SHA) = iRYRWHXhMHlY
SNMPv3 encryption pass (AES) = jWSqOdVtXwyz
SNMPv3 level = authpriv
mt4adm@vmdf-giskard:~$
```

