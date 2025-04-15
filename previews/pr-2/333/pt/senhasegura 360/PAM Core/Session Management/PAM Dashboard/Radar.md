# Radar

Neste artigo, você encontrará informações detalhadas sobre o dashboard **Radar** do **PAM Core - Gerenciamento de Sessão**. Este dashboard fornece uma visualização gráfica das execuções de comandos arriscados realizados por usuários.

:::(info) (**Info**)
O dashboard poderá ser acessado apenas por usuários que possuam a permissão de administrador ou de auditor do sistema.
:::

## Radar de ameaças
#### Análise online de sessões
Na tela inicial, o radar exibe as sessões e o seu monitoramento em tempo real (online).

No canto superior direito da tela, você encontra o botão **Histórico**. Ao clicar neste botão, será exibido um campo para escolher a data dos dados a serem exibidos, e um  campo com opções para o nível de ameaça. Após a escolher, aperte o ícone representado por um **funil** para filtrar os dados.

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

E pelos seguintes níveis de risco:

* **Todos**.
* **Risco alto**.
* **Risco médio**.
* **Risco baixo**.
* **Com risco**.
* **Sem risco**.

Para retornar ao monitoramento em tempo real, clique no que apresenta a palavra Online, que anteriormente apresentava a palavra Histórico.

## Lista

* **Detalhes da sessão**
    * **Usuário**: nome do usuário que realizou a sessão.
    * **Dispositivo**: o dispositivo acessado pela sessão.
    * **Credencial**: a credencial utilizada na sessão.
    * **Início**: data e hora em que a sessão foi realizada.
    * **Duração**: tempo de duração da sessão.
    * **Risco**: número que indica o nível do risco ocorrido naquela sessão. O nível pode varia de 0 (zero) a 100 (cem).
    * **Ícone de lupa**: detalhes do acesso.
        * **Usuário**: detalhes do usuário como seu nome, email e IP.
        * **Credencial**: detalhes da credencial do usuário.
        * **Acesso**: detalhes da sessão acessada pelo usuário.
        * **Últimos comandos detectados**: lista dos comandos realizados pelo usuário.