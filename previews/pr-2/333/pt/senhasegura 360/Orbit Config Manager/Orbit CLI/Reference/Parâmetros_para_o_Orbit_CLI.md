# Parâmetros para o Orbit CLI

Este artigo descreve os parâmetros do comando `orbit` e suas funcionalidades.

:::(warning) (Atenção)
* Caso você esteja em uma arquitetura de cluster, é importante saber que as ações realizadas em uma instância não são refletidas em todas as outras instâncias. Para os comandos que podem infligir no funcionamento do cluster, é necessário que você execute manualmente os comandos em cada uma das instâncias.
* Os comandos abaixo podem reiniciar serviços essenciais para o funcionamento da aplicação, gerando uma indisponibilidade momentânea. Configurações inválidas podem ocasionar indisponibilidades irreversíveis. Você sempre será alertado da possibilidade de indisponibilidade e questionado se deseja prosseguir com a execução dos comandos.

:::

## Comandos disponíveis
O comando `orbit`, se executado sem nenhuma instrução, irá exibir uma ajuda sobre os parâmetros disponíveis. 

Este comando exige privilégios de root. Caso você tente executar um comando sem elevação, você receberá uma mensagem de alerta:

```bash
mt4adm@vmdf-giskard:~$ orbit
This program must be run with root permissions!
```

| Parâmetro              | Descrição                                                                       |
|------------------------|---------------------------------------------------------------------------------|
| `application`            | Ferramentas de configuração de aplicação.                                       |
| `api`                    | Ferramentas de configuração de A2A.                                             |
| `network`                | Ferramentas de configuração de rede.                                            |
| `domum-gateway`          | Ferramentas de configuração do Domum Gateway.                                   |
| `network-connector`      | Ferramentas de configuração do senhasegura Network Connector.                    |
| `hostname`               | Alterar o nome do host do servidor. Alterar o hostname requer reinicialização do servidor. |
| `dns`                    | Ferramentas de gerenciamento do Sistema de Nomes de Domínio (DNS).              |
| `ntp`                    | Ferramentas de gerenciamento do Protocolo de Tempo de Rede (NTP).               |
| `upgrade`                | Atualize o sistema instalando/atualizando pacotes.                              |
| `backup`                 | Configurações de backup de aplicação.                                           |
| `cluster`                | Ferramentas de configuração de Alta Disponibilidade e Recuperação de Desastre.  |
| `sync`                   | Sincronização de arquivos e diretórios de aplicações.                           |
| `webssl`                 | Ferramentas de gerenciamento de certificados SSL do servidor web.               |
| `locale`                 | Configurações de idioma e localidade.                                           |
| `partition`              | Ferramentas de gerenciamento de partições do sistema de arquivos.               |
| `disk`                   | Ferramentas de gerenciamento de discos.                                         |
| `zabbix`                 | Configuração do cliente Zabbix.                                                 |
| `proxy`                  | Configurações de proxy de acesso à aplicação.                                   |
| `email-oauth2-proxy`     | Configurações de proxy OAuth2 para e-mail.                                      |
| `fajita`                 | Ferramentas de gerenciamento do proxy de acesso Fajita.                         |
| `rdpgate`                | Ferramentas de gerenciamento do proxy de acesso RDP Gate.                       |
| `snmp`                   | Ferramentas de gerenciamento do Protocolo Simples de Gerenciamento de Rede (SNMP). |
| `firewall`               | Ferramentas de gerenciamento do Firewall do sistema.                            |
| `shutdown`              | Desligar ou reiniciar a máquina de forma segura.                                |
| `execution`              | Ferramentas de execução de tarefas assíncronas em lote.                         |
| `services`               | Gerenciar serviços assíncronos do senhasegura.                                  |
| `security`               | Ferramentas de gerenciamento de segurança do sistema.                           |
| `version`                | Imprimir informações da versão e sair.                                          |
| `healthcheck`            | Ferramentas de verificação de saúde do sistema.                                 |
| `repository`             | Ferramentas de configuração de repositório.                                     |

O parâmetro `repository` permite que sejam passados quatro parâmetros:

| Parâmetro                        | Descrição                                           |
|----------------------------------|-----------------------------------------------------|
| `repository configure stable`      | Repositório de fontes para instalar versões estáveis. |
| `repository configure candidate`   | Repositório de fontes para instalar versões candidatas. |
| `repository configure testing`     | Repositório de fontes para instalar versões em testes. |
| `repository configure unstable`    | Repositório de fontes para instalar versões instáveis. |