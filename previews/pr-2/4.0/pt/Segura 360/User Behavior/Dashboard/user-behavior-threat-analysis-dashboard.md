# Análise de ameaças

Este documento fornece informações sobre o dashboard **Análise de ameaças** que é dividido em duas seções que exibem gráficos para identificar e mitigar ameaças no ambiente PAM.

* **Ameaças em acessos**: analisa o uso de comandos auditados durante sessões.  
* **Ameaças em custódias**: analisa os riscos associados à proteção de credenciais privilegiadas. 

## Pré-requisitos

* Permissão de administrador ou de auditor do sistema.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **User Behavior.**  
2. No menu lateral, selecione **Dashboard \> Análise de ameaças.**
---
   

## Filtro de data

:::(info) (Info)

Por padrão, o filtro exibe dados dos últimos 15 dias.

:::

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Data** | Menu suspenso e seletor de data | Seleciona o período de consulta.  As opções são: <br>- **Hoje**. <br>- **Últimas 24 horas**. <br>- **Essa semana**: de segunda-feira à domingo da semana atual. <br>- **Semana passada:** de segunda-feira à domingo da semana anterior. <br>- **Esse mês**: do primeiro ao último dia do mês atual. <br>- **Mês passado**: do primeiro ao último dia do mês anterior. <br>- **Esse ano**: do primeiro ao último dia do ano atual. <br>- **Ano passado:** do primeiro ao último dia do ano anterior. <br>- **Personalizado**: seletores de data para escolher o período. |
| **Filtrar** | Botão | Filtra as informações pelo período selecionado.  |

## Ameaças em acessos

Esta seção exibe gráficos e relatórios de acessos que apresentaram algum tipo de ameaça e possibilita que administradores do sistema monitorem os comandos auditados em sessões, facilitando a identificação de comportamentos suspeitos e anômalos.

### Gráficos XY

| Item | Descrição |
| :---- | :---- |
| **Score** | O eixo X exibe os dias e o eixo Y exibe a pontuação de risco atribuída às sessões monitoradas, com base no comportamento do usuário e no uso de comandos auditados ou fora do padrão.  |
| **Totais** | O eixo X exibe os dias e o eixo Y exibe o número total de ameaças detectadas em sessões auditadas e seus níveis de criticidade (Baixo, Médio, Alto), permitindo uma visão geral da quantidade de eventos suspeitos.  |

### Relatórios

#### Maior risco 
Exibe os seguintes dados das sessões que apresentam o maior risco:

| Item | Descrição |
| :---- | :---- |
| **Usuário** | Exibe o nome do usuário que realizou a sessão. |
| **Dispositivo** | Exibe o dispositivo em que a sessão foi iniciada. |
| **Credencial** | Exibe a credencial utilizada pelo usuário para realizar a sessão. |
| **Data** | Exibe a data e hora em que a sessão foi realizada. |
| **Score** | Exibe o grau do risco atingido pela sessão que pode variar de 0 (zero) a 100 (cem).  |
| **Detalhes do acesso** | Abre a tela **Detalhes do acesso** com informações adicionais sobre a sessão selecionada. |

 #### Últimos com risco 
Exibe os seguintes dados das sessões mais recentes com riscos detectados:

| Item | Descrição |
| :---- | :---- |
| **Usuário** | Exibe o nome do usuário que realizou a sessão. |
| **Dispositivo** | Exibe o dispositivo em que a sessão foi iniciada. |
| **Credencial** | Exibe a credencial utilizada pelo usuário para realizar a sessão. |
| **Data** | Exibe a data e hora em que a sessão foi realizada. |
| **Risco** | Exibe o grau do risco atingido pela sessão que pode variar de 0 (zero) a 100 (cem). |
| **Detalhes do acesso** | Abre a tela **Detalhes do acesso** com informações adicionais sobre a sessão selecionada. |

## Ameaças em custódias

Esta seção exibe gráficos e relatórios de ameaças relacionadas ao uso e proteção das credenciais em custódia, ou seja, o armazenamento e controle de credenciais privilegiadas no ambiente PAM.

### Gráficos XY

| Item | Descrição |
| :---- | :---- |
| **Score** | O eixo X exibe os dias e o eixo Y exibe a pontuação de risco geral das custódias monitoradas por dia, com base no comportamento dos usuários e no acesso a essas credenciais.  |
| **Totais** | O eixo X exibe os dias e o eixo Y exibe apresenta o número total de ameaças detectadas relacionadas às custódias e e seus níveis de criticidade (Baixo, Médio, Alto), fornecendo uma visão geral do volume de eventos de risco associados às credenciais protegidas. |


###  Relatórios

#### Maior risco 
Exibe dados das custódias que apresentam o maior nível de risco, com os seguintes detalhes sobre as credenciais mais vulneráveis ou expostas:

| Item | Descrição |
| :---- | :---- |
| **Usuário** | Exibe o nome do usuário que visualizou a credencial. |
| **Dispositivo** | Exibe o dispositivo utilizado para visualizar a credencial. |
| **Credencial** | Exibe a credencial usada. |
| **Data** | Exibe a data e hora em que a visualização ocorreu.  |
| **Score** | Exibe o grau do risco atingido pela visualização que pode variar de 0 (zero) a 100 (cem).  |
| **Detalhes do acesso** | Abre a tela **Detalhes da consulta** com informações adicionais sobre a sessão selecionada. |

#### Últimos com risco
Exibe os seguintes dados das ameaças mais recentes relacionadas às custódias, destacando os eventos que requerem atenção imediata.

| Item | Descrição |
| :---- | :---- |
| **Usuário** | Exibe o nome do usuário que visualizou a credencial. |
| **Dispositivo** | Exibe o dispositivo utilizado para visualizar a credencial. |
| **Credencial** | Exibe a credencial usada. |
| **Data** | Exibe a data e hora em que a visualização ocorreu.  |
| **Score** | Exibe o grau do risco atingido pela visualização  que pode variar de 0 (zero) a 100 (cem).  |
| **Detalhes do acesso** | Abre a tela **Detalhes da consulta** com informações adicionais sobre a sessão selecionada. |
