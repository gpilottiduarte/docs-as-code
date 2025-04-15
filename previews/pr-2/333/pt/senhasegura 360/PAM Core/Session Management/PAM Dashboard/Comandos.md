# Comandos

Neste artigo, você encontrará todas as informações sobre o dashboard **Comandos** do **PAM Core - Gerenciamento de Sessão**. Que permite mapear os comandos, os acessos mais arriscados e quem são os usuários e dispositivos mais afetados.

:::(info) (**Info**)
O dashboard poderá ser acessado apenas por usuários que possuam a permissão de administrador ou de auditor do sistema.
:::

## Análise de Comandos

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
**Comandos com maior severidade**|Gráfico que exibe a quantidade de comandos com maior severidade que foram executados 
**Acessos com comando detectados**|Gráfico que exibe a quantidade de acessos com comandos detectados.

## Lista

* **Últimos acessos com comandos detectados**: lista com os 5 últimos acessos que tiverem comandos detectados.
    * **Usuário**: nome do usuário que realizou o acesso.
    * **Dispositivo**: dispositivo que foi iniciado o acesso.
    * **Credencial**: credencial utilizada pelo usuário para realizar o acesso.
    * **Data**: data e hora que foi realizado o acesso.
    * **Risco**: grau do risco atingido pelo acesso. O número pode variar de 0 (zero) a 100 (cem).
    * **Ícone de lupa**: detalhes do acesso. 
        * **Usuário**: detalhes do usuário como seu nome, email e IP.
        * **Credencial**: detalhes da credencial do usuário (IP, protocolo e porta).
        * **Acesso**: detalhes da sessão acessada pelo usuário.
        * **Últimos comandos detectados**: lista dos comandos realizados pelo usuário.
* **Acessos com maior severidade**: lista com os 5 últimos acessos de maior severidade.
    * **Usuário**
    * **Dispositivo**
    * **Credencial**
    * **Data**
    * **Risco**
    * **Ícone de lupa**: detalhes do acesso.
* **Maiores agressores**: lista com os usuários considerados os maiores agressores.
    * **Usuário**: nome do usuário que realizou o acesso.
    * **Incidentes**: quantidade de incidentes que ocorreram.
    * **Sessões**: quantidade de sessões acessadas pelo usuário.
    * **Com incidentes**: porcentagem das sessões em que ocorreram incidentes.
* **Maiores agredidos**: lista com os dispositivos mais agredidos.
    * **Dispositivo**: IP do dispositivo acessado.
    * **Incidentes**: quantidade de incidentes que ocorreram.
    * **Sessões**: quantidade de vezes que o dispositivo foi acessado.
    * **Com incidentes**: porcentagem das sessões que ocorreram incidentes.