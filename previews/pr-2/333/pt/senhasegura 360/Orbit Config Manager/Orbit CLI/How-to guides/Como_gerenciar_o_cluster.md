# Como gerenciar o cluster

O processo completo de configuração de um cluster e checagem de status pode ser realizada com o comando `cluster`. Em adição ao processo, utilizaremos o comando `application` para iniciar instâncias e definir uma instância primária.
```  
mt4adm@vmdf-giskard:~$ sudo orbit cluster --help
Usage: orbit cluster <command>

High Availability and Disaster Recovery settings tools

Commands:
cluster config
cluster start
cluster stop
cluster restart
cluster status
cluster arbiter
cluster net-check
cluster nodename
cluster rotate-ssl

Flags:
-h, --help Show context-sensitive help.
```
## Criar o cluster
:::(Info) (Info)
Se houver dúvidas sobre a habilitação das conexões entre os nós, utilize o comando `orbit cluster net-check`, adicionando os hosts desejados para verificação. Consulte a documentação sobre as portas que precisam ser liberadas nas [Regras de Firewall](/v3-33/docs/pt/installation-firewall-rules) para mais informações.
:::
Para criar o cluster é necessário ao menos duas instâncias. Como exemplo, chamaremos as instâncias como *A* e *B*. Siga se seguinte ordem para montar o cluster.
:::(Info) (Info)
* Ative a instância A tanto em licença de ativação quanto ativação da aplicação;
* Inicie a aplicação na instância A com o comando `orbit application start`.
:::
Antes de configurar o cluster, é crucial incluir os membros do cluster na lista de permitidos (allow list) do firewall de cada instância. Por exemplo, na instância A, é necessário adicionar à allow list a instância B, e vice-versa. Para obter mais detalhes, consulte a a documentação [Como gerenciar firewalls com o Orbit CLI](/v3-33/docs/pt/orbit-cli-how-to-manage-the-firewall-with-the-orbit-cli).

Os seguintes comandos são para o `sudo orbit cluster config`:

1. O argumento `--ip` deve ser usado com o IP da instância que o comando está sendo executado.
1. Configure o cluster na instância A preenchendo o parâmetro `--ip` com o IP da instância A e o parâmetro `--nodes` com os IPs da instância A e B respectivamente.
:::(Info) (Info)
Inicie o cluster na instância A com o comando `orbit cluster start` e aguarde ao menos 1 minuto para normalização.
:::
:::(Warning) (Atenção)
Possuir um arbitrator em um cluster é crucial para resolver disputas entre nós, garantindo a estabilidade e integridade do sistema. Ele atua como um terceiro neutro em casos de falha, evitando inconsistências e mantendo a confiabilidade do ambiente. Saiba mais na documentação do [Arbitrator](/v3-33/docs/pt/arbitrator). 
:::

3. Determine a instância A como primária através do comando `orbit application primary`;
:::(Info) (Info)
Ative a instância B com a licença de ativação e mantenha a aplicação inativa;
:::

1. Configure o cluster na instância B preenchendo o parâmetro `--ip` com o IP da instância B e o parâmetro `--nodes` com os IPs da instância A e B respectivamente;
1. Inicie o cluster na instância B com o comando `orbit cluster start` e aguarde ao menos 1 minuto para normalização.

### Instância A
```
mt4adm@vmdf-giskard:~$ sudo orbit application master
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y

Application: Active
Replication: Inactive
Instance:    Primary
```
:::(Warning) (Cuidado)
Para clusters com membros em diferentes datacenters, é recomendado utilizar uma **latência alta** entre os membros.
:::
:::(Info) (Info)
É importante que os membros de um mesmo datacenter sejam configurados com o mesmo segmento. Caso haja apenas um membro em cada datacenter, deixe o campo **Segmentos de rede** em branco.
:::

```
mt4adm@vmdf-giskard:~$ sudo orbit cluster config
--ip=172.18.77.184
--nodes=172.18.77.184,172.18.77.186
--segment=0
--latency="low"

Are you sure you want to proceed: y
Done!
No errors reported
```
```
mt4adm@vmdf-giskard:~$ sudo orbit cluster start
Are you sure you want to proceed: y
Done!
No errors reported
```
### Instância B
```
mt4adm@vmdf-giskard:~$ sudo orbit cluster config
    --ip=172.18.77.186
    --nodes=172.18.77.184,172.18.77.186
    --segment=1
    --latency="low"

Are you sure you want to proceed: y
Done!
No errors reported
```
```
mt4adm@vmdf-giskard:~$ sudo orbit cluster start
Are you sure you want to proceed: y
Done!
No errors reported
```
:::(Warning) (Cuidado)
Para garantir o funcionamento adequado do cluster, é essencial manter a latência de rede entre os nós abaixo de 30ms. Além disso, para facilitar a recuperação em casos de falha, são necessárias configurações específicas de recuperação. Você pode encontrar detalhes sobre essas configurações em link para a documentação sobre [recovery](/v3-33/docs/pt/installation-data-replication-how-to-enable-recovery).
:::

## Status do cluster
Através do comando `orbit cluster status` você pode observar diversas propriedades do cluster. Como são muitas informações, não listaremos no manual todos os detalhes. Mas vamos apresentar a informação essencial para entender se o cluster está ativo e sem problemas.

Preste atenção no bloco final do status, chamado `Cluster nodes`. Neste bloco você verá quem são os membros do cluster e o timestamp de sincronização entre eles. Há também o status da instância atual que deve estar marcada como *synced*.
```
mt4adm@vmdf-giskard:~$ sudo orbit cluster status

...

============================================================

Cluster nodes

Cluster member: ID [0] - UUID [64661644-b0df-11ea-80b2-8ee23c1303c0] -
    Hostname [vmdf-giskard-3232290344] - Timestamp [1592428528]
Cluster member: ID [1] - UUID [9dff00d8-b0df-11ea-86c4-83725d654e03] -
    Hostname [vmdf-giskard-3232290348] - Timestamp [1592428528]

Cluster UUID: 64679b9f-b0df-11ea-a6e5-67ba900fecc0

vmdf-giskard details: status=synced
vmdf-giskard is primary node ?: 1

============================================================
``` 
