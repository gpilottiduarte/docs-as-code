# Como configurar o monitoramento SNMP

Utilize o comando `orbit snmp` para configurar o servidor que irá receber a leitura das MIBs do Segura.

```Text
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
:::(Warning) (**Atenção**)
 Os seguintes argumentos são obrigatórios:

* ***community:*** `-c`  
* ***server:*** `-s`  
* ***allowed-ips:*** `-a`  
* ***version:*** `-v`
:::
:::(Warning) (**Atenção**)
Além desses argumentos para o ***SNMPv3*** é obrigatório inserir ***username:*** `-u`
:::


Para configurar a lista de servidores permitidos, utilize os argumentos conforme o exemplo. O argumento `–server` deve ser preenchido com o IP da interface Segura. O argumento `–allowed-ips` é preenchido com a lista de servidores que podem realizar a leitura SNMP.

### **Configurar SNMPv2**


```Text
mt4adm@vmdf-giskard:~$ sudo orbit snmp -c public -s 192.168.86.86 -a 192.168.86.73 -v 2

? Are you sure you want to proceed? [y/N] y█
Done!
No errors reported
```

Para listar a configuração atual, utilize o argumento `–show`.


```Text
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

### **Configurar SNMPv3**


```Text
mt4adm@vmdf-giskard:~$ sudo orbit snmp -c public -s 192.168.86.86 -a 192.168.86.73 -v 3 -u mymonitor

? Are you sure you want to proceed? [y/N] y█
Done!
Run 'orbit snmp --show' to view authentication and encryption settings
Example: snmpwalk -v 3 -u mymonitor -a SHA -A iRYRWHXhMHlY -x AES -X jWSqOdVtXwyz -l authPriv 192.168.86.86
```

Para listar a configuração atual, utilize o argumento `–show`.

```Text
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

