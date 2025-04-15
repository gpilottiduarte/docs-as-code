# Análise de comportamento - Dashboard

Este documento fornece informações sobre o dashboard **Análise de comportamento** que analisa os comportamentos dos usuários ao interagirem com os recursos do Segura.

## Pré-requisitos

* Permissão de administrador ou de auditor do sistema.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **User Behavior.**  
2. No menu lateral, selecione **Dashboard \> Análise de comportamento.**

## Filtro de data

:::(info) (Info)

Por padrão, o filtro exibe dados dos últimos 15 dias.

:::

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Data** | Menu suspenso e seletor de data | Seleciona o período de consulta.  As opções são: <br>- **Hoje**. <br>- **Últimas 24 horas**. <br>- **Essa semana**: de segunda-feira à domingo da semana atual. <br>- **Semana passada:** de segunda-feira à domingo da semana anterior. <br>- **Esse mês**: do primeiro ao último dia do mês atual. <br>- **Mês passado**: do primeiro ao último dia do mês anterior. <br>- **Esse ano**: do primeiro ao último dia do ano atual. <br>- **Ano passado:** do primeiro ao último dia do ano anterior. <br>- **Personalizado**: seletores de data para escolher o período.  |
| **Filtrar** | Botão | Filtra as informações pelo período selecionado.  |

## Gráficos XY

| Item | Descrição |
| :---- | :---- |
| **Sessões** | O eixo X exibe os dias e o eixo Y mostra a quantidade de sessões com algum grau de risco (linhas) e a quantidade total de sessões realizadas no Segura (barras).  |
| **Consultas** | O eixo X exibe os dias e o eixo Y mostra a quantidade de visualizações de credencial com algum grau de risco (linhas) e a quantidade total de visualizações feitas no Segura (barras).  |

## Relatórios

### 5 principais sessões com risco

Exibe os seguintes dados das 5 sessões que apresentaram maior risco nas datas selecionadas no filtro.

| Item | Descrição |
| :---- | :---- |
| **Usuário**  | Exibe o nome do usuário que realizou a sessão. |
| **Dispositivo** | Exibe o endereço do dispositivo em que a sessão foi realizada. Abre a tela **Device access profile.**  |
| **Credencial** | Exibe a credencial utilizada na sessão de alto risco. Abre a tela **Credential access profile**.  |
| **Data** | Exibe a data e hora em que a sessão foi realizada.  |
| **Duração**  | Exibe a duração da sessão de alto risco. |
| **Risco** | Exibe a pontuação da sessão de alto risco que pode variar de 0 (zero) a 100 (cem).  |
| **Detalhes do acesso** | Abre a tela **Detalhes do acesso** com informações adicionais sobre a sessão. |

### 5 principais consultas com risco  

Exibe os seguintes dados das 5 visualizações de senha que apresentaram maior risco nas datas selecionadas no filtro:

| Item | Descrição |
| :---- | :---- |
| **Usuário**  | Exibe o nome do usuário que visualizou a credencial. |
| **Dispositivo** | Exibe o dispositivo associado à credencial visualizada. Abre a tela **Device view profile.**  |
| **Credencial** | Exibe a credencial usada na sessão de alto risco. Abre a tela **Perfil de visualização da credencial**.  |
| **Data** | Exibe a data e hora em que a credencial foi visualizada  |
| **Duração**  | Exibe a duração da sessão de alto risco. |
| **Risco** | Exibe o grau do risco atingido pela visualização que pode variar de 0 (zero) a 100 (cem).   |
| **Detalhes do acesso** | Abre a tela **Detalhes da consulta** com informações adicionais sobre a visualização de credencial selecionada. |

### Últimas 5 sessões com risco

Exibe os seguintes dados das últimas 5 sessões com algum risco detectado nas datas selecionadas no filtro.

| Item | Descrição |
| :---- | :---- |
| **Usuário**  | Exibe o nome do usuário que realizou a sessão. |
| **Dispositivo** | Exibe o endereço do dispositivo em que a sessão foi realizada. Abre a tela **Device access profile.**  |
| **Credencial** | Exibe a credencial utilizada na sessão de alto risco. Abre a tela **Credential access profile**.  |
| **Data** | Exibe a data e hora em que a sessão foi realizada.  |
| **Duração**  | Exibe a duração da sessão de alto risco. |
| **Risco** | Exibe a pontuação da sessão de alto risco que pode variar de 0 (zero) a 100 (cem).  |
| **Detalhes do acesso** | Abre a tela **Detalhes do acesso** com informações adicionais sobre a sessão. |

### Últimas 5 consultas com risco

Exibe os seguintes dados das últimas 5 visualizações de senha com algum risco detectado  nas datas selecionadas no filtro:

| Item | Descrição |
| :---- | :---- |
| **Usuário**  | Exibe o nome do usuário que visualizou a credencial. |
| **Dispositivo** | Exibe o dispositivo associado à credencial visualizada. Abre a tela **Device view profile.**  |
| **Credencial** | Exibe a credencial usada na sessão de alto risco. Abre a tela **Perfil de visualização da credencial**.  |
| **Data** | Exibe a data e hora em que a credencial foi visualizada  |
| **Duração**  | Exibe a duração da sessão de alto risco. |
| **Risco** | Exibe o grau do risco atingido pela visualização que pode variar de 0 (zero) a 100 (cem). |
| **Detalhes do acesso** | Abre a tela **Detalhes da consulta** com informações adicionais sobre a visualização de credencial selecionada. |

## Tela Detalhes do acesso

A tela **Detalhes do acesso** exibe as seguintes informações sobre a sessão selecionada: 

| Item | Descrição |
| :---- | :---- |
| **Usuário** | Exibe detalhes do usuário como seu nome, email e endereço de IP. Ao clicar sobre o nome do usuário, a tela **Perfil do usuário** é aberta, |
| **Credencial** | Exibe a credencial utilizada, o endereço de IP do dispositivo, protocolo utilizado e porta. Ao clicar sobre a credencial, a tela **Credential access profile** é aberta. |
| **Acesso** | Exibe detalhes da sessão acessada pelo usuário como dispositivo de origem, duração da sessão, data e hora de início e fim da sessão, dispositivo de destino, protocolo e porta. |
| **Últimos comandos detectados** | Exibe uma lista dos comandos auditados realizados pelo usuário durante a sessão contendo *Comando, Ação durante a sessão, Comando digitado, Data do evento, Executado em, Criticidade, Risco* e *Vídeo da sessão***.** |

##  Tela Detalhes da consulta 

A tela **Detalhes da consulta** exibe as seguintes informações sobre a consulta de credencial selecionada.

| Item | Descrição |
| :---- | :---- |
| **Usuário** | Exibe detalhes do usuário como seu nome pessoal, email e endereço de IP. Ao clicar sobre o nome do usuário, a tela **Perfil do usuário** é aberta. |
| **Credencial** | Exibe a credencial utilizada, o endereço de IP do dispositivo, protocolo utilizado e porta. Ao clicar sobre a credencial, a tela **Perfil de visualização da credencial** é aberta. |
| **Consulta** | Exibe IP do usuário, data e hora da consulta e IP do dispositivo acessado. |
| **Últimos eventos de consulta** | Exibe um relatório com os últimos eventos realizados na consulta contendo *Usuário, Dispositivo, Credencial, Data* e *Risco*.  |

## Tela perfil do usuário

A tela **Perfil do usuário** exibe as seguintes informações o usuário selecionado:

| Item | Descrição |
| :---- | :---- |
| **Usuário** | Exibe o *Nome, Email, Endereço IP, Última sessão e Tempo sem acessar* do usuário. |
| **Cards** | Exibem as informações *Período de maior uso, Total de consultas, Consultas por dia, Total de acessos, Duração média* e *Tempo de gravação*. |
| **Acessos** | Exibe um gráfico com os acessos feitos nos últimos 45 dias, informando os acessos com risco. |
| **Consultas** | Exibe um gráfico com as consultas feitas nos últimos 45 dias, informando as consultas com risco. |
| **Últimos acessos** | Exibe uma lista dos últimos acessos do usuário contendo os campos *Dispositivo, Credencial, Data, Score* e *Detalhes do acesso*. |
| **Últimas consultas** | Exibe informações da últimas consultas realizada pelo usuário. |

## Tela Credential access profile

A tela **Credential access profile** exibe as seguintes informações sobre a credencial usada para acessar uma sessão:

| Item | Descrição |
| :---- | :---- |
| **Credencial** | Exibe informações sobre a credencial. |
| **Cards** | Exibem as informações *Período de maior uso, Total de consultas, Acessos por dia* e *Duração média*.  |
| **Acesso** | Exibe IP do usuário, data e hora do acesso e IP do dispositivo acessado. |
| **Acessos de maior risco** | Exibe uma lista com as credenciais acessadas que apresentaram maior risco. |
| **Últimos acessos** | Exibe uma lista de acessos com essa credencial contendo os campos *Usuário, Data, Score* e *Detalhes do acesso.* |

## Tela Perfil de visualização da credencial

A tela **Perfil de visualização da Credencial** exibe as seguintes informações sobre a credencial selecionada:

| Item | Descrição |
| :---- | :---- |
| **Credencial** | Exibe o *Nome, Dispositivo, Expiração* e *Última consulta* da credencial.  |
| **Cards** | Exibem as informações Período de maior uso, Total de consultas e Os usuários com a custódia  |
| **Consultas** | Exibe IP do usuário, data e hora da consulta e IP do dispositivo acessado. |
| **Os usuários com a custódia** | Exibe informações dos usuários com a custódia como *Código, Usuário, Última consulta, Início da custódia* e *Duração*.  |
| **Consultas de maior risco** | Exibe consultas feitas com essa credencial que apresentaram maior risco. |
| **Últimas visualizações** | Exibe uma lista das consultas mais recentes com essa credencial. |

## Tela Device access profile

A tela **Device access profile** exibe informações sobre o dispositivo acessado selecionado. 

| Item | Descrição |
| :---- | :---- |
| **Dispositivo** | Exibe o endereço IP do dispositivo acessado. |
| **Cards** | Exibem as informações *Período de maior uso, Total de acessos, Acessos por dia* e *Duração média.* |
| **Acessos** | Exibe IP do usuário, data e hora da consulta e IP do dispositivo acessado. |
| **Acessos de maior risco** | Exibe um gráfico com acessos realizados nos últimos 45 dias, informando acessos de risco. |
| **Últimos acessos** | Exibe uma lista de acessos a esse dispositivo que apresentaram maior risco, contendo os campos *Usuário, Credencial, Data, Score* e *Detalhes do acesso.* |
| **Últimas visualizações** | Exibe uma lista de usuários e credenciais que realizaram os acessos mais recentes a esse dispositivo, contendo os campos *Usuário, Credencial, Data, Score* e *Detalhes do acesso.* |

##  Tela Device view profile  
A tela **Device view profile** exibe informações sobre o dispositivo vinculado à consulta de credencial selecionada.  

| Item | Descrição |
| :---- | :---- |
| **Dispositivo** | Exibe informações sobre o dispositivo que armazena a credencial visualizada. |
| **Cards** | Exibem as informações *Período de maior uso, Total de consultas* e *Consultas por dia*. |
| **Consultas** | Exibe um gráfico com as consultas a credenciais desse dispositivo, informando as consultas com risco por dia. |
| **Consultas de maior risco** | Exibe uma lista com consultas de credencial desse dispositivo que apresentaram maior risco. |
| **Últimas consultas** | Exibe uma lista com as últimas consultas de credencial desse dispositivo. |
