# Central de monitoramento

O dashboard em **Domum Remote Access > Dashboards > Central de monitoramento** apresenta uma visão geral do uso do Domum por fornecedores e usuários terceiros, grupos de funcionários e usuários internos.

Você encontra na Central de monitoramento:

* **Notificação de status do gateway**: o ícone de broadcast, acima do campo **Acessos em andamento**, mostra a comunicação entre a plataforma senhasegura e o serviço do gateway. 
    * Ao clicar no ícone, você acessa [o relatório de verificação de integridade do Domum](/v3-33/docs/pt/domum-health-check).
    * As cores do ícone indicam o status da comunicação.
        * **Verde**: a comunicação está estabelecida no momento e sem falhas nas últimas 12h. 
        * **Cinza**: serviço não configurado. 
        * **Amarelo**: a comunicação está estabelecida no momento, com falhas nas últimas 12h. 
        * **Vermelho**: a comunicação está indisponível.
* **Filtro**: seleciona informações de um fornecedor ou grupo de usuários internos específico.
* **Acessos em andamento**: indica a quantidade de acessos via Domum no momento da visualização do dashboard. 
    * Ao clicar no texto, você chega ao [relatório de acessos](/v3-33/docs/pt/domum-access-report).
* **Fornecedores**: indica a quantidade de fornecedores cadastrados no senhasegura.
    *  Ao clicar no texto, você acessa o [relatório de fornecedores](/v3-33/docs/pt/domum-settings-vendors).
* **Terceiros**: indica a quantidade de usuários terceiros cadastrados no senhasegura. 
    * Ao clicar no texto, você acessa o [relatório de usuários terceiros](/v3-33/docs/pt/domum-dashboard-third-party-users).
* **Acessos liberados**: indica a quantidade de acessos liberados, contando usuários terceiros e usuários internos.
* **Grupos de funcionários**: indica a quantidade de grupos de usuários internos que já possuem acesso ao senhasegura. 
    * Ao clicar no texto, você acessa o [relatório de grupos de usuários internos](/v3-33/docs/pt/domum-dashboard-internal-users-groups).
* **Usuários internos**: indica a quantidade de usuários internos que possuem acesso ao Domum.
* **Radar de risco**: exibe a origem de acessos suspeitos no mapa.
    * Você pode utilizar a barra de busca para digitar o nome do local que deseja consultar.
* **Acessos autorizados**: exibe a relação entre quantidade de acessos e horários permitidos de cada fornecedor nas últimas 12 horas.
* **Sessões ativas**: exibe a relação de sessões remotas em andamento no momento da visualização do dashboard. Elas são classificadas pelos protocolos usados para acessar e gerenciar recursos de rede:
    * **RDP Web**: quantidade de sessões RDP web em andamento.
    * **SSH/Telnet**: quantidade de sessões SSH/Telnet em andamento.
    * **HTTP VNC**: quantidade de sessões HTTP VNC em andamento.
    * **SQL**: quantidade de sessões SQL em andamento.

:::(info) (**Info**)
Caso exista uma sessão ativa suspeita, a mesma poderá ser derrubada. Na lista **Sessões ativas** encontre a sessão que deseja e clique no ícone de **liga/desliga**, na caixa de confirmação clique em **Sim**. A sessão será derrubada e o usuário será desconectado.
:::

* * *
Você ainda tem dúvidas? Entre em contato com a [comunidade senhasegura](https://community.senhasegura.io/){target="_blank"}.