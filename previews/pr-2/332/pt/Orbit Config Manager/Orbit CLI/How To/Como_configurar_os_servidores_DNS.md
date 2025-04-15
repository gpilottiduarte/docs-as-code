# Como configurar os servidores DNS

Este artigo descreve como configurar os servidores DNS que uma instância irá consultar usando o comando `orbit dns`.

## Comando orbit dns
O comando `orbit dns` fornece ferramentas para gerenciamento do sistema DNS.

```mt4adm@vmdf-giskard:~$ sudo orbit dns --help
Usage: orbit dns

The Domain Name System (DNS) management tools

Flags:
      --help                   Show context-sensitive help.
	-h

  -s, --servers=SERVERS,...    Domain servers list
      --search=SEARCH,...      The domain search list
  -d, --domain=STRING          Domain name
      --force                  Force the command execution, never prompt
      --show
```
## Visualizar a configuração atual do DNS
Para listar os servidores DNS ativos, utilize o argumento `--show`.
```
mt4adm@vmdf-giskard:~$ sudo orbit dns --show
DNS configuration
DNS Servers:
    - 172.17.182.193
Domain: mshome.net
Search:
    - mshome.net
```
## Configurar servidores DNS
Para configurar a lista de servidores DNS e outras opções, utilize os argumentos disponíveis. Os servidores DNS serão aplicados imediatamente. Por exemplo:
```
mt4adm@vmdf-giskard:~$ sudo orbit dns
    --servers=172.17.182.10,172.17.182.11
    --search=mshome.net
    --domain=mshome.net
Are you sure you want to proceed: y
Done!
No errors reported
```
