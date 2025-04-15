# Como configurar interfaces de rede

Neste documento, você encontrará instruções sobre os procedimentos para configurar a interface de rede primária do senhasegura, essencial para acessar a interface web, proxies e serviços da web.
:::(Warning) (Atenção)
Esta funcionalidade substitui a necessidade de login localhost com o usuário orbit.
:::
## Comando de configuração
:::(Warning) (Atenção)
Ao configurar a interface de rede, o servidor precisará ser reiniciado para que as configurações entrem em vigor.
:::

1. Acesse o terminal ou prompt de comando do sistema operacional onde o senhasegura está instalada.

1. Execute o comando `sudo orbit network` para acessar uma série de opções para configurar a interface de rede desejada.
```
mt4adm@vmdf-giskard:~$ sudo orbit network 
Usage: orbit network

Network settings tools

Flags:
-h, --help Show context-sensitive help.

-i, --interface=STRING
-a, --address=STRING
-m, --netmask=STRING
-g, --gateway=STRING
--force Force the command execution, never prompt

actions
--show
```
## Listar a configuração atual

1. Execute o comando `sudo orbit network --show` para exibir informações importantes, como o endereço IP, a máscara de sub-rede e o gateway.

```
mt4adm@vmdf-giskard:~$ sudo orbit network --show
Networking interface status
============================================================================
Interface eth0
MAC Address = 00:15:5d:3e:73:1c
MTU = 1500
Type = ether
IPv4
     Address = 172.17.182.204
     Broadcast = 172.17.182.207
     Gateway =
============================================================================
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Ifac
0.0.0.0         172.17.182.193  0.0.0.0         UG    0      0        0 eth0
172.17.182.192  0.0.0.0         255.255.255.240 U     0      0        0 eth0
============================================================================
```
## Configurar a interface com DHCP

1. Execute o comando `sudo orbit network` para configurar a interface com DHCP.
```
mt4adm@vmdf-giskard:~$ sudo orbit network
Use the arrow keys to navigate: ↓ ↑ → ←
? Choose an interface to configure:
▸ eth0


? Network settings:
static
▸ dhcp


? Are you sure you want to proceed? [y/N] y
Done!
No errors reported
```
:::(Warning) (Atenção)
Se o IP do senhasegura estiver configurado como DHCP, a configuração do DNS pode não funcionar corretamente, especialmente nas OVAs. Nesses casos, para garantir uma resolução adequada de DNS e evitar possíveis problemas, é necessário configurar um IP estático.
:::
## Configurar a interface com IP Estático
Execute o comando `sudo orbit network` para configurar um IP estático. 
```
mt4adm@vmdf-giskard:~$ sudo orbit network
Use the arrow keys to navigate: ↓ ↑ → ←
? Choose an interface to configure:
▸ eth0
? Network settings:
▸ static
dhcp
✔ IP Address: 172.17.182.204
Netmask: 255.255.255.240
Gateway: 172.17.182.193
? Are you sure you want to proceed? [y/N]
Done!
No errors reported
```
## Fornecer detalhes de configuração como argumentos na linha de comando
Para reduzir a interação durante a configuração da interface de rede, é possível fornecer os detalhes da configuração como argumentos diretamente na linha de comando. 
```
mt4adm@vmdf-giskard:~$ sudo orbit network \
 --interface=eth0 \
 --address=172.17.182.204 \
 --netmask=255.255.255.240 \
 --gateway=172.17.182.193
 ```
Este comando configura a interface especificada (eth0) com o endereço IP, máscara de sub-rede e gateway fornecidos.

Ao executar este comando, pode ser que haja alguma interação adicional para confirmar a ação.

Por exemplo, escolher o tipo de configuração de rede (estática ou DHCP) e confirmar se deseja prosseguir com as configurações fornecidas.

Após confirmar, o sistema aplicará as configurações especificadas e você verá a mensagem de conclusão:
```
Done!
No errors reported
``` 
Assim, a interface de rede estará configurada conforme as especificações fornecidas.

## Reiniciar o servidor
Para aplicar as configurações após configurar a interface de rede, é necessário reiniciar o servidor. 

1. Execute o comando `shutdown --reboot`. 
``` 
mt4adm@vmdf-giskard:~$ sudo orbit network --reboot
Use the arrow keys to navigate: ↓ ↑ → ←
? Choose an interface to configure:
▸ eth0
? Network settings:
static
▸ dhcp
? Are you sure you want to proceed? [y/N] y
Done!
No errors reported
Stopping database service...
``` 


