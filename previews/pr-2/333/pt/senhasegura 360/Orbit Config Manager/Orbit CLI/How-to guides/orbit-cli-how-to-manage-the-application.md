AtençãoÉ possível acessar os logs da aplicação, previamente armazenados em arquivos e indexados no Elasticsearch, diretamente do segundo cluster. Esses relatórios contêm cerca de 10\.000 registros.

Você pode gerenciar o estado da aplicação do senhasegura da instância com o comando `orbit application`.


```
mt4adm@vmdf-giskard:~$ sudo orbit application --help
Usage: orbit application [<command>]

Application settings tools.

Arguments:
[<command>]    Control the application services status:
  [start|stop|restart|status|primary|version]

Flags:
    --help       Show context-sensitive help.

    --version    Show the application components versions
    --force      Force the command execution, never prompt
    --show

```
* ***start:*** Ativa a instância para uso dos usuários.
* ***stop:*** Inativa a instância para uso dos usuários.
* ***restart:*** Reinicia os serviços utilizados para distribuir a aplicação Web, com exceção do banco de dados, sistemas proxy e serviços iniciados pelo Cron.
* ***status:*** Exibe o status desta instância.
* ***primary:*** Define esta instância como Primária em um cenário de cluster.
* ***version:*** Exibe a versão instalada da plataforma Orbini e senhasegura .

## Status da aplicação

O comando `orbit application status` apresenta o status de cada função primária da instância. Sendo:

* ***Application:*** Status da instância quanto sua ativação. *Active* para disponível ao uso dos usuários e *Inactive* para indisponível ao uso dos usuários;
* ***Replication:*** Status da replicação/cluster desta instância. *Active* para indicar que é membro de cluster e *Inactive*para indicar que não faz parte de um cluster;
* ***Instance:*** Papel da instância no cluster. *Primary*para instância principal, *Secondary*para instância de apoio;


```
mt4adm@vmdf-giskard:~$ sudo orbit application status

Application: Active
Replication: Inactive
Instance:    Primary

```
## Inativar o uso da instância

O comando `orbit application stop` inativa a aplicação para uso dos usuários. Essa ação não afeta a ativação de licença e nem a execução dos robôs na instância.

Essa ação é equivalente a ativação da instância no menu **Orbit Config Manager \> Settings \> Application**.


```
mt4adm@vmdf-giskard:~$ sudo orbit application stop
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y

Application: Inactive
Replication: Inactive
Instance:    Primary

```
## Ativar o uso da instância

O comando `orbit application start` ativa a aplicação para uso dos usuários. Essa ação não afeta a ativação de licença e nem a execução dos robôs na instância.

Essa ação é equivalente a ativação da instância no menu **Orbit Config Manager \> Settings \> Application**.


```
mt4adm@vmdf-giskard:~$ sudo orbit application start
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y

Application: Active
Replication: Inactive
Instance:    Primary

```
## Definir a instância como primária

O comando `orbit application master` configura a instância como instância Primária. Caso a instância estiver inativa, será automáticamente ativada e elevada a Primária.

AtençãoA instância Primária é responsável pela execução de serviços únicos que não são executados nas demais instâncias do Cluster.

InfoEste comando é utilizado apenas para ambiente em modo cluster.InfoEssa funcionalidade também está disponível na tela do **Orbit Config Manager**(se a instância não for a master, um botão estará disponível para assumir essa posição). Para mais detalhes, consulte a documentação de [Como criar um cluster](/v3-33/docs/pt/installation-data-replication-how-to-create-a-cluster).
```
mt4adm@vmdf-giskard:~$ sudo orbit application master
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y

Application: Active
Replication: Inactive
Instance:    Primary

```
## Reiniciar os serviços da aplicação

O comando `orbit application restart` reinicia os serviços utilizados para distribuir a aplicação Web, com exceção do banco de dados, sistemas proxy e serviços iniciados pelo Cron. Basicamente reinicia apenas os serviços utilizados pelo Webserver.


```
mt4adm@vmdf-giskard:/home/mt4adm## sudo orbit application restart
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y█

Application: Active
Replication: Inactive
Instance:    Primary

```
## Obter a versão instalada

O comando `orbit application version` apresenta a versão da plataforma senhasegura e framework **Orbini**. Seu funcionamento é semelhante ao comando `orbit version`, descrito anteriormente.


```
mt4adm@vmdf-giskard:~$ sudo orbit application version
Applications
Orbini           5.10.13.27
senhasegura      3.2.0.1

```
