# Sessões Remotas

Neste artigo, você encontrará todas as informações sobre o dashboard **Sessões Remotas** do **PAM Core - Gerenciamento de Sessão**. Esse dashboard fornece uma visualização gráfica e detalhada das sessões remotas utilizadas pelos usuários.

:::(info) (**Info**)
O dashboard poderá ser acessado apenas por usuários que possuam a permissão de administrador ou de auditor do sistema.
:::

## Sessões Remotas

No canto superior direito, está o campo com o período que os dados exibidos se referem. Após a escolha, aperte o ícone representado por um **funil** para filtrar os dados. 

Os dados exibidos podem ser filtrados pelos períodos de:

* **Hoje**.
* **Últimas 24 horas**.
* **Esta semana**.
* **Última semana**.
* **Este mês**.
* **Último mês**.
* **Este ano**.
* **Último ano**.
* **Selecione as datas**: personalização do período de pesquisa.

## Cards

**Item**|**Descrição**
|---|---|
**RDP Web**|Quantidade de sessões acessadas do tipo RDP Web.
**SSH/Telnet**|Quantidade de sessões acessadas do tipo SSH/Telnet.
**HTTP/VNC**|Quantidade de sessões acessadas do tipo HTTP/VNC.
**RDP Gate**|Quantidade de sessões acessadas do tipo RDP Gate.
**Jump Server**|Quantidade de sessões acessadas do tipo Jump Server.
**SQL**|Quantidade de sessões acessadas do tipo SQL.
**X11**|Quantidade de sessões acessadas do tipo X11.

## Gráficos

**Item**|**Descrição**
|---|---|
**Sessões**|Gráfico com a quantidade total de todas as sessões acessadas, divididas por dias.
**Sessões por proxy**|Gráfico com a quantidade total das sessões por proxy acessadas, divididas por dia e por tipo.


## Lista

* **Sessões ativas**: exibe o número de sessões ativas no momento da pesquisa, divididas por tipo.
    * **Código**: número que representa a sessão.
    * **Usuário**: nome do usuário que realizou o acesso.
    * **IP de origem**: IP da máquina de origem do usuário.
    * **Credencial**: credencial referente ao usuário.
    * **Dispositivo**: número de IP que representa o dispositivo acessado.
    * **Protocolo**: qual o tipo de protocolo acessado.
    * **Início**: data e hora do início da sessão.
    * **Tempo**: tempo que o usuário utilizou a sessão.
    * **Ícone de lupa**: detalhes do acesso.
        * **Usuário**: detalhes do usuário como seu nome, email e IP.
        * **Credencial**: detalhes da credencial do usuário.
        * **Acesso**: detalhes da sessão acessada pelo usuário.
        * **Últimos comandos detectados**: lista dos comandos realizados pelo usuário.