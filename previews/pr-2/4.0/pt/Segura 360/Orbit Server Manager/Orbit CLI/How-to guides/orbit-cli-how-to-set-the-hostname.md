# Como definir o hostname

Neste documento, você encontrará os passos de como definir o hostname no Segura.

## Visualizar as opções do comando

O comando `orbit hostname` permite trabalhar o hostname do sistema operacional desta instância do Segura.
```  
mt4adm@vmdf-giskard:~$ sudo orbit hostname --help
Usage: orbit hostname [<hostname>]

Change the server hostname. Changing the hostname you will need reboot
of the server.

Arguments:
[<hostname>]    Setting the server hostname

Flags:
  --help      Show context-sensitive help.

  --reboot    Reboot the machine
  --force     Force the command execution, never prompt
  --show
``` 

## Definir um novo hostname
Você pode determinar um novo hostname fornecendo o novo hostname como último argumento, conforme descrito na ajuda do comando.
``` 
mt4adm@vmdf-giskard:~$ sudo orbit hostname vmdf-giskard
Are you sure you want to proceed: y
Done!
No errors reported
``` 
:::(Info) (Info)
Após executar o comando para aplicar o novo hostname à instância, por favor, reinicie o servidor utilizando o parâmetro `--reboot`.
:::


