# Análise de comando

Este documento fornece informações sobre o dashboard **Análise de comando** que analisa os comandos auditados realizados durante as sessões no Segura.

## Pré-requisitos

* Permissão de administrador ou de auditor do sistema.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **User Behavior.**  
2. No menu lateral, selecione **Dashboard \> Análise de comando.**  
---

## Filtro de data

:::(info) (Info)

Por padrão, o filtro exibe dados dos últimos 15 dias.

:::

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Data** | Menu suspenso e seletor de data | Seleciona o período de consulta.  As opções são: <br>- **Hoje**. <br>- **Últimas 24 horas**. <br>- **Essa semana**: de segunda-feira à domingo da semana atual. <br>- **Semana passada:** de segunda-feira à domingo da semana anterior. <br>- **Esse mês**: do primeiro ao último dia do mês atual. <br>- **Mês passado**: do primeiro ao último dia do mês anterior. <br>- **Esse ano**: do primeiro ao último dia do ano atual. <br>- **Ano passado:** do primeiro ao último dia do ano anterior. <br>- **Personalizado**: seletores de data para escolher o período. |
| **Filtrar** | Botão | Filtra as informações pelo período selecionado.  |



## Gráficos XY

| Item | Descrição |
| :---- | :---- |
| **Comandos com maior severidade** | O eixo X exibe os dias e o eixo Y exibe a quantidade de comandos com maior severidade executados. |
| **Acessos com comandos detectados** | O eixo X exibe os dias e o eixo Y exibe a quantidade de acessos com comandos detectados. |

## Relatórios

### Últimos acessos com comandos detectados

Exibe os seguintes dados dos 5 últimos acessos com comandos auditados detectados:

| Item | Descrição |
| :---- | :---- |
| **Usuário** | Exibe o nome do usuário que realizou a sessão. |
| **Dispositivo** | Exibe o dispositivo em que a sessão foi iniciada. |
| **Credencial** | Exibe a credencial utilizada pelo usuário para realizar a sessão. |
| **Data** | Exibe a data e hora em que a sessão foi realizada. |
| **Risco** | Exibe o grau do risco atingido pela sessão que pode variar de 0 (zero) a 100 (cem).  |
| **Detalhes do acesso** | Abre a tela **Detalhes do acesso** com informações adicionais sobre a sessão selecionada. |

### Acessos com maior severidade

Exibe os seguintes dados dos 5 últimos acessos de maior severidade:

| Item | Descrição |
| :---- | :---- |
| **Usuário** | Exibe o nome do usuário que realizou a sessão. |
| **Dispositivo** | Exibe o dispositivo em que a sessão foi iniciada. |
| **Credencial** | Exibe a credencial utilizada pelo usuário para realizar a sessão. |
| **Data** | Exibe a data e hora em que a sessão foi realizada. |
| **Risco** | Exibe o grau do risco atingido pela sessão que pode variar de 0 (zero) a 100 (cem).  |
| **Detalhes do acesso** | Abre a tela **Detalhes do acesso** com informações adicionais sobre a sessão selecionada. |

### Maiores agressores

Exibe os seguintes dados dos usuários que realizaram mais comandos auditados durante as sessões:

| Item | Descrição |
| :---- | :---- |
| **Usuário** | Exibe o nome do usuário associado aos incidentes. |
| **Incidentes** | Exibe a quantidade total de incidentes cometidos pelo usuário. |
| **Sessões** | Exibe a quantidade de sessões realizadas pelo usuário. |
| **Com incidentes** | Exibe a porcentagem de sessões com incidentes por usuário. |

### Maiores agredidos

Exibe os seguintes dados dos dispositivos que foram alvos de mais sessões com comandos auditados:

| Item | Descrição |
| :---- | :---- |
| **Dispositivo** | Exibe o endereço de IP do dispositivo-alvo da sessão. |
| **Incidentes** | Exibe a quantidade total de incidentes por dispositivo. |
| **Sessões** | Exibe a quantidade de sessões realizadas por dispositivo. |
| **Com incidentes** | Exibe a porcentagem de sessões com incidentes por dispositivo. |
