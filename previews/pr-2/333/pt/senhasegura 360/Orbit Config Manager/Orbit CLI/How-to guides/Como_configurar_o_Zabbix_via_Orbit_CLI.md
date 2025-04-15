# Como configurar o Zabbix via Orbit CLI

Este documento é um guia de como configurar o **Zabbix** para monitoramento remoto via **Orbit CLI**. 


## Requisitos

* Ter acesso SSH com a conta de usuário `mt4adm`. Para informações sobre  como utilizar esse recurso, acesse a documentação [Como acessar uma sessão de administração SSH dentro do cofre senhasegura](/v3-33/docs/pt/administration-ssh-access).


## Como configurar o Zabbix via Orbit CLI


1. Inicie uma sessão SSH com o usuário `mt4adm` no servidor remoto.

2. Execute o comando `sudo orbit zabbix`.
```bash
sudo orbit zabbix
--server=172.10.10.12:10051
--listen=10.66.33.27
--lport=10050 
--tls
```
Onde:

* `--server`: define os endereços IP dos servidor(es) do Zabbix, seguido pelas portas, separados por vírgulas, exemplo: `1.1.1.1:10051,2.2.2.2:10051`. 
* `--listen`: especifica o IP do servidor senhasegura onde o Zabbix Agent aguarda por solicitações de monitoramento.

* `--lport`: define a porta padrão (10050) na qual o Zabbix Agent estará aguardando por conexões do servidor Zabbix.

* `--tls`: parâmetro opcional para criptografar a comunicação entre o agente e o servidor Zabbix. Gera uma "identity" e uma "pre-shared-key" (PSK) para autenticação e segurança.

3. Digite `Y`para confirmar. 

Após a execução do comando, você receberá a seguinte resposta:

```Shell
Done!
Zabbix TLS parameters
Identity = BABQUAGCOXknWsRJhvmu
Pre-shared key = 896ee734944dc71ff6f0a6111fb4ec25a8954e3ee0eda07f7ac582952b742eae

```
4. Execute o comando `sudo orbit zabbix --show` para confirmar que a configuração foi aplicada corretamente.

```Shell
sudo orbit zabbix --show

```
Este comando exibe informações detalhadas sobre a configuração do Zabbix. Certifique-se de revisar essas informações para confirmar que todas as configurações estão corretas.




