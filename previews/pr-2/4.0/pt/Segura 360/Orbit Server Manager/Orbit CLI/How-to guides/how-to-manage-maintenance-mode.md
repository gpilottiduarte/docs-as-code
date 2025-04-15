# Como gerenciar o modo de manutenção

O modo de manutenção do **Orbit CLI** permite que o sistema pare de processar as tarefas geradas pelos agendamentos automáticos da aplicação enquanto ainda processa as tarefas adicionadas diretamente na fila do NATS.

## Parâmetro de ajuda

O `help` do modo de manutenção pode ser acessado usando o comando `sudo` `orbit app maintenance`, que retorna os parâmetros disponíveis.

```shell
$ sudo orbit app maintenance -h

Usage: orbit app maintenance <command>

Application maintenance mode control

Commands:
 app maintenance enable     Enable maintenance mode
 app maintenance disable    Disable maintenance mode

Flags:
 -h, --help    Show context-sensitive help.
```

## Habilitar o modo de manutenção

Para habilitar o modo de manutenção, execute o seguinte comando:

```shell
sudo orbit app maintenance enable
```

Isso colocará a aplicação no modo de manutenção, impedindo que ela processe as tarefas geradas pelos agendamentos automáticos.

## Desabilitar o modo de manutenção

Para desabilitar o modo de manutenção e retornar a aplicação ao funcionamento normal, execute o seguinte comando:

```shell
sudo orbit app maintenance disable
```

## Verificar o status do modo de manutenção

O status da aplicação pode ser verificado usando o comando `sudo orbit app status`, que inclui um campo `Maintenance` para indicar se o modo de manutenção está ativo.

```shell
$ sudo orbit app status 
Application: Active 
Replication: Inactive 
Instance: Primary 
Maintenance: Yes 
Main: Yes
```

***
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).
