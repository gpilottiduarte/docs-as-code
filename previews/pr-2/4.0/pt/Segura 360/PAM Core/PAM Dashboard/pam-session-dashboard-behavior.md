# User Behavior

Neste artigo, você vai encontrar todas as informações sobre o dashboard **User Behavior** do **PAM Core - Gerenciamento de Sessão**, que fornece uma análise do comportamento dos usuários ativos no Segura.

:::(info) (**Info**)
O dashboard poderá ser acessado apenas por usuários que possuam a permissão de administrador ou de auditor do sistema.
:::

## Análise de Comportamento

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

## Gráficos

**Item**|**Descrição**
|---|---|
**Acessos**|Gráfico de progressão diária que mostra a quantidade de acessos com algum grau de risco realizados no Segura.
**Consultas**|Gráfico de progressão diária que mostra a quantidade de visualizações de senha com algum grau de risco realizadas no Segura.

## Listas

* **Acessos de maior risco**: lista dos acessos com maior risco, nas datas mais recentes. O grau de risco é calculado conforme os parâmetros configurados.
    * **Usuário**: nome do usuário que realizou o acesso.
    * **Dispositivo**: dispositivo em que o acesso foi iniciado.
    * **Credencial**: credencial utilizada pelo usuário para realizar o acesso.
    * **Data**: data e hora que o acesso foi realizado.
    * **Risco**: grau do risco atingido pelo acesso. O número pode variar de 0 (zero) a 100 (cem).
    * **Ícone de lupa**: detalhes do acesso. 
        * **Usuário**: detalhes do usuário como seu nome, email e IP.
        * **Credencial**: detalhes da credencial do usuário (IP, procotolo e porta).
        * **Acesso**: detalhes da sessão acessada pelo usuário.
        * **Últimos comandos detectados**: lista dos comandos realizados pelo usuário.
* **Consultas de maior risco**: lista das visualizações de senha com maior risco, nas datas mais recentes. O grau de risco é calculado conforme os parâmetros configurados.
    * **Usuário**.
    * **Dispositivo**.
    * **Credencial**.
    * **Data**.
    * **Risco**.
    * **Ícone de lupa**: detalhes da consulta.
        * **Usuário**: detalhes do usuário como seu nome, email e IP.
        * **Credencial**: detalhes da credencial do usuário, o IP do dispositivo, protocolo e porta.
        * **Consulta**: IP do usuário, tipo de consulta, data e hora da consulta e IP do dispositivo acessado.
        * **Últimos eventos da consulta**:
            * **Usuário**.
            * **Dispositivo**.
            * **Credencial**.
            * **Data**.
            * **Risco**.
* **Últimos acessos com risco**: lista com os últimos 5 acessos, incluindo acessos sem nenhum risco detectado. Os comportamentos considerados de risco são: acesso em destino incomum, acesso de origem incomum, acesso de credencial incomum, acesso em horário incomum, acesso com duração incomum.
    * **Usuário**.
    * **Dispositivo**.
    * **Credencial**.
    * **Data**.
    * **Risco**.
    * **Ícone de lupa**: Detalhes do acesso.
        * **Usuário**.
        * **Credencial**.
        * **Acesso**.
        * **Últimos comandos detectados**.
* **Últimas consultas com risco**: lista com as últimas 5 visualizações, incluindo visualizações sem nenhum risco detectado. Os comportamentos considerados de risco são: visualização de origem incomum, visualização de credencial incomum, visualização em horário incomum, alteração de senha incomum.
    * **Usuário**.
    * **Dispositivo**.
    * **Credencial**.
    * **Data**.
    * **Risco**.
    * **Ícone de lupa**: Detalhes da consulta.