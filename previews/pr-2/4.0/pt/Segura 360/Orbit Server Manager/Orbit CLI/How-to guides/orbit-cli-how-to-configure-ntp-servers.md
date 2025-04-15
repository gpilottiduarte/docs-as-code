# Como configurar os servidores NTP

Neste documento, você encontrará os passos de como configurar quais servidores NTP (Network Time Protocol) a instância deve consultar para manter o horário sincronizado, utilizando o comando `orbit ntp`. 
:::(Info) (Info)
A alteração de servidores NTP pode afetar o uso de tokens OTP.
:::

## Visualizar as opções do comando

1. Acesse o terminal ou prompt de comando do sistema operacional onde a instância Segura está instalada.

1. Execute o comando `orbit ntp --help` para visualizar as opções disponíveis e entender como usar o comando.
``` 
mt4adm@vmdf-giskard:~$ sudo orbit ntp --help
Usage: orbit ntp

The Network Time Protocol (NTP) management tools

Flags:
-h, --help Show context-sensitive help.

-s, --servers=SERVERS,... NTP servers list
-l, --listen-interface=STRING NTP listen interface
--force Force the command execution, never prompt

actions
--show
``` 
## Listar a configuração ativa
Execute o comando `sudo orbit ntp --show` para listar a configuração ativa.
```
mt4adm@vmdf-giskard:~$ sudo orbit ntp --show
NTP Status
Servers

a.ntp.br
b.ntp.br
Listen interface eth0

remote       refid           st t when poll reach   delay   offset  jitter
==========================================================================
*a.ntp.br    200.160.7.186    2 u   34  128  377    5.196   -0.647   0.585
+b.ntp.br    200.160.7.186    2 u    2  128  377   47.750   -3.436   8.249
Tue 09 Jun 2020 04:49:55 PM -03
``` 
## Configurar novos servidores

1. Execute o comando `orbit ntp` e você será solicitado a fornecer os servidores NTP que deseja configurar.

1. Insira os endereços dos servidores NTP desejados quando solicitado pelo comando. Você pode fornecer vários servidores separados por espaço.

1. Verifique se os servidores NTP inseridos estão corretos e confirme a ação quando solicitado.

Após confirmar a configuração, verifique se os servidores NTP foram configurados corretamente.
```
mt4adm@vmdf-giskard:~$ sudo orbit ntp
    --servers=a.ntp.br,b.ntp.br --listen-interface=eth0
Are you sure you want to proceed: y
Done!
No errors reported
``` 
