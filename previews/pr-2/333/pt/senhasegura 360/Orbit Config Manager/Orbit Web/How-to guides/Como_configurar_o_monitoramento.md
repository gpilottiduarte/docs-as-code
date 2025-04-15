# Como configurar o monitoramento

Nesta documentação, descreveremos apenas o hardware, sistema operacional e serviços de monitoramento que podem ser consultados através do protocolo **SNMP** e do agente **[Zabbix](https://www.zabbix.com/)**. Além disso, também abordaremos as mensagens **SYSLOG** que podem ser encaminhadas para sistemas **SIEM** e e-mails de notificação disparados pelo **Orbit**.
:::(Info) (Info)
Algumas notificações são enviadas via **e-mail** ou **SMS** para usuários configurados.
:::
:::(Warning) (Atenção)
Não permitimos a instalação de agentes de monitoramento não aprovados pela senhasegura. Apenas as ferramentas descritas neste documento são aprovadas para uso.
:::

## Monitoramento através do Zabbix
:::(Info) (Info)
A versão instalada do **Agente Zabbix** é a **4.0**. Se precisar instalar uma versão superior, entre em contato com nossa equipe de suporte.
:::
Por padrão, o serviço do **Agente Zabbix** estará inativo na instância. Para ativá-lo, acesse o menu **Orbit Config Manager > Servidor > Serviços**, localize o serviço do **Agente Zabbix** e clique na ação **Iniciar**.

Para configurar o **Servidor Zabbix** que receberá os dados:

1. Vá para o menu **Orbit Config Manager > Configurações > Aplicativo**.
2. Preencha os campos **IP do Servidor** e **Porta de Conexão do Servidor** com os dados do servidor de destino.
3. Se desejar, você pode adicionar até 3 servidores, basta preencher o IP do servidor e a porta de conexão para o servidor.
4. Preencha o campo **IP de Escuta** com o IP da interface de acesso da instância.
5. Mantenha a **Porta de Escuta** com a **porta 10050**.

:::(Warning) (Atenção)
Para configurar um acesso usando TLS, utilize a [Linha de Comando do Orbit](/v3-33/docs/pt/orbit-cli-about-the-orbit-cli) para que os dados de **Identity** e **Pre-shared key** sejam apresentados.
:::

## Monitoramento através do SNMP
A instância oferece suporte ao **SNMPv2** e, a partir da versão 3.8, há suporte para **SNMPv3** configurado apenas por Linha de Comando do Orbit. Consulte a documentação da [Linha de Comando do Orbit](/v3-33/docs/pt/orbit-cli-about-the-orbit-cli) para mais detalhes.

Através da interface web do **Orbit**, é possível configurar os servidores permitidos para leitura e a comunidade SNMP, através do menu **Orbit Config Manager > Servidor > Configurações**.

:::(Info) (Info)
O serviço **SNMP** será reiniciado a cada alteração.
:::

## Monitoramento através do SYSLOG (SIEM)
A senhasegura é compatível com as ferramentas **SIEM** mais usadas no mercado e oferece suporte para a transmissão de mensagens nos formatos **CEF**, **Syslog (RFC 5424)** e **Sensage**.

Para configurar, acesse o menu **Orbit Config Manager > Configurações > Aplicativo > SYSLOG** e preencha os seguintes campos:

* **Formato da Mensagem:** Refere-se ao formato selecionado da mensagem a ser enviada, que pode ser **CEF**, **Syslog (RFC 5424)** ou **Sensage**.
* **Plugin de Notificação:** Usado apenas em casos de projetos de customização pagos. Mantenha este campo com seu valor padrão. Não é recomendado manipular este controle sem a supervisão da equipe de suporte.
* **Protocolo de Envio de Mensagem:** Escolha entre **TCP** ou **UDP**.
* **Network Connector:** Refere-se ao conector de rede para enviar a mensagem.
* **Usar Network Connector:** Indica se o conector de rede selecionado será utilizado na configuração de envio de mensagem **Syslog**.
:::(Info) (Info)
O envio de mensagens **Syslog** para o **SIEM** via conector de rede só é possível ao utilizar o protocolo TCP. UDP não é suportado.
:::
* **Servidores para Envio de Mensagem:** Uma lista de servidores IPv4, separados por vírgulas, que receberão as mensagens.

## Alertas e Incidentes do Orbit
Alguns alertas são específicos para módulos e recursos da senhasegura. Esses alertas são monitorados pelo **Orbit** e encaminhados para determinados usuários dependendo de sua criticidade.

Para configurar os destinatários para receber esses alertas, vá para o menu **Orbit Config Manager > Configurações > Aplicativo** e adicione os e-mails no campo **E-mail de Notificação**. Os incidentes pendentes de solução serão apresentados no menu **Orbit Config Manager > Aplicativo > Incidentes**.

:::(Info) (Info)
Os e-mails serão enviados sempre que o incidente for criado ou atualizado. Apenas os tipos e eventos **LOG_EMERG**, **LOG_ALERT**, **LOG_CRIT** e **LOG_ERR** serão notificados.
:::
:::(Warning) (Atenção)
Incidentes do tipo **LOG_CRIT** geram o envio de e-mail para todos os usuários logados no momento e também serão ecoados para usuários que estiverem logados em SSH na instância senhasegura. Usuários que estiverem em sessões de proxy através do Proxy da Web senhasegura ou Proxy Terminal senhasegura não receberão essas notificações ecoadas.
:::

### Ativação da aplicação
*The activation key is required to use the application. The access to your application will be blocked in DAYS.*

#### Prioridade
**LOG_ALERT**

#### Resolução

* Entre em contato com nossa equipe de suporte para renovar a licença de sua aplicação.
* * *

### Serviço Mysql
*Mysql service failed: MESSAGE*

#### Prioridade
**LOG_ALERT**

#### Resolução

* Se você estiver executando um ambiente de cluster senhasegura, primeiro assuma o próximo nó como Primário.
* Se você estiver executando em um esquema DR, habilite a instância DR como primária.
* Após normalizar o ambiente, isole a instância problemática e inicie uma recuperação do banco de dados espelhando a nova instância primária.
* * *
### Cluster DB
*Database Cluster failed: MESSAGE*

#### Prioridade
**LOG_ALERT**

#### Resolução

* Primeiro assuma o próximo nó como Primário.
* Após normalizar o ambiente, isole a instância problemática e inicie uma recuperação do banco de dados espelhando a nova instância primária.
* * *

### Saúde da replicação do cluster
*The node cannot apply write-sets as quickly as it receives them: AVG_VALUE*
*The node flow control was paused to a long time: FLOWCONTROLVALUE*
*Replication throttling or network throughput issues: AVGQUEUEVALUE*

#### Prioridade
**LOG_ERR**

#### Resolução

* A latência de rede deve ser configurada. Na configuração do cluster **Orbit**, defina que os nós estão em data centers diferentes.
* * *

### Problemas de replicação do cluster
*Node is not synced: STATUS*

#### Prioridade
**LOG_ERR**

#### Resolução

* Verifique se o nó pode alcançar os outros membros do cluster e reconfigure o nó problemático.
* * *

### Alerta de aumento da chave primária do banco de dados
*Database Primary key increase alert: Table TABLE_NAME*

#### Prioridade
**LOG_ALERT**

### Resolução

* Execute o procedimento **Primary key maintenance** localizado na solução PAM da senhasegura.
* * *

### Problema na partição remota
*Your remote partition has a problem! Please check your mounted partitions.*

#### Prioridade
**LOG_ALERT**

#### Resolução

* Verifique se o dispositivo de destino pode ser alcançado pela instância da senhasegura.
* Verifique se a credencial usada para autenticação está habilitada e tem a permissão correta para acessar o dispositivo.
* Verifique se o dispositivo de destino suporta o protocolo configurado.
* * *

### Uso de Inodes
*Inodes block usage problem: DETAIL*

#### Prioridade
**LOG_ALERT**

#### Resolução

* Execute o procedimento de manutenção de INODE localizado na solução PAM da senhasegura.
* * *

### Uso de disco
*Disk space usage problem: DETAILS*

#### Prioridade
**LOG_ALERT**

#### Resolução

* Anexe um novo disco virtual à instância e execute o redimensionamento de partição.
* * *

### Replicação de arquivos
*Replication interval is too long! Last sync: TIME*
*Replication error! Pack: ID*

#### Prioridade
**LOG_ALERT**

#### Resolução

* Falha na replicação de arquivos de sessão. Execute o **rsync** manualmente conforme descrito em **Force files resync** em senhasegura **PAM Solution**.
* * *

### Versão do aplicativo
*Application version is different between nodes: DETAILS*

#### Prioridade
**LOG_ALERT**

**Resolução**

* Execute `orbit upgrade` em todas as instâncias.
* * *

### Reinicialização do sistema necessária
*One or more processes require a full reboot.*

#### Prioridade
**LOG_ALERT**

#### Resolução

* Execute a reinicialização do sistema. Em um ambiente de cluster, você deve reiniciar uma instância por vez, dando o tempo certo para que o cluster identifique cada saída e entrada do cluster.
* * *

### Chave mestra não definida
*Master key not set. It is not possible to create a backup of your credentials.*

#### Prioridade
**LOG_ALERT**

#### Resolução

* Realize a** Cerimônia da Chave Mestra**.
* * *

### Guardião da chave mestra inativo
*Master key guardian inactive. You have inactive guardians in the system, redo the master key process.*

#### Prioridade
**LOG_ALERT**

#### Resolução

* Verifique se o guardião fez login errado e desativou seu usuário. Se não for o caso, refaça o processo da chave mestra.
* * *

### Alerta de serviço de proxy
*Proxy Service not running: DETAILS*

#### Prioridade
**LOG_ALERT**

#### Resolução

* Reinicie o serviço usando o comando `orbit service`. Se o problema continuar, reinicie a instância.
* * *

### Conta de e-mail padrão
*E-mail Account is not set up*

#### Prioridade
LOG_ERR

#### Resolução

* Registre uma conta **SMTP**.
* * *

### Sistema sem configurações iniciais de chave
*System without initial key settings. Run the system setup wizard to resolve this issue.*

#### Prioridade
**LOG_ALERT**

#### Resolução

* Este erro deve aparecer apenas em instâncias não configuradas. Execute as etapas de implantação para resolver o incidente.
* * *

### Chave do sistema ausente ou corrompida
*System key is missing or corrupted. Contact system administrator immediately.*

#### Prioridade
**LOG_ALERT**

#### Resolução

* A chave do sistema, gerada na fase de implantação, não é encontrada. Isso pode ocorrer quando um backup muito antigo é restaurado com um software senhasegura atualizado. Chame nossa equipe de suporte.
* * *

### Senha padrão do sistema não alterada
*The system default user account password must be changed. Use the command 'orbit security password' to change it.*

#### Prioridade
**LOG_ALERT**

#### Resolução

* Execute `orbit security password` para alterar a senha padrão.
* * *

### Ajuste de configuração do servidor não aplicado
*The server configuration tuning is different from the minimum required.*

#### Prioridade
**LOG_WARNING**

#### Resolução

* Verifique se o hipervisor alterou o perfil de hardware da máquina virtual. Após dar a configuração de hardware correta à instância, execute o ajuste novamente.
* * *

### Processo de expansão de disco recomendado
*The size of your data partition is dangerously small. Please expand your disk capacity or add a new disk.*
*The size of your audit log partition is dangerously small. Please expand your disk capacity or add a new disk.*

#### Prioridade
**LOG_WARNING**

#### Resolução

* Anexe um novo disco virtual à instância e execute o redimensionamento de partição descrito na seção orbit-disk-resize deste manual.
* * *

### Notificação do Orbit
*Error to sent e-mail alerts: DETAILS*

#### Prioridade
**LOG_WARNING**

#### Resolução

* Verifique se a conta SMTP configurada tem a configuração correta de rede, segurança e autenticação.
* * *

### Erro no Backup da aplicação
*Remote Server SERVER: DETAILS*

#### Prioridade
**LOG_ALERT**

#### Resolução

* Verifique se o dispositivo de destino pode ser alcançado pela instância da senhasegura.
* Verifique se a credencial usada para autenticação está habilitada e tem a permissão correta para acessar o dispositivo.
* * *

### Agente do Network Connector indisponível
*The network connector agent has primary unavailable. AGENT, PORT. .*
*The network connector agent has secondary unavailable. AGENT, PORT. *

#### Prioridade
**LOG_ALERT**

#### Resolução

* Ative o conector de rede.

## Logs
O **Orbit Web** agenda várias operações assíncronas de configurações que serão aplicadas no servidor da instância. Essas operações geram logs de execução (logs não detalhados) que podem ser acompanhados nos seguintes relatórios.

* **Aplicativo:** Todos os logs da camada de aplicativo da senhasegura, incluindo operações de usuário e operações do **Orbit**. Alertas também aparecerão nesses logs.
* **API**: Solicitações **WebService A2A**. Nenhum dado sensível será exibido.
* **Operações:** Acessando o menu **Orbit Config Manager > Logs > Operações**, você poderá ver todas as operações do **Orbit** que foram solicitadas, data/hora e solicitação:
    * Definições de configurações de **Hostname**, **NTP**, **DNS**, **SNMP** e **Gateway**.
    * Definições do **Zabbix** e **Syslog**.
    * Definições de **Backup**, **partição remota** e **Cluster**.
* **Execução de Tarefas:** Acessando o menu **Orbit Config Manager > Logs > Execução de Tarefas**, você pode acompanhar a execução dessas operações. Ou seja, o momento da mudança de estado da operação de tempos em tempos.
* **Replicação**: Status e logs do **nó do Cluster**.
* **Backup**: Definição e logs de execução de **Backup**.
* **Banco de Dados**: Operações e logs de erro do **MariaDB**.
* **Servidor Web**: Logs de acesso e erro do **NGINX**.
:::(Info) (Info)
Neste mesmo menu, você terá acesso a outros logs de serviço do sistema operacional. Use apenas para diagnóstico.
:::