# User posture - Dashboard

Este documento fornece informações sobre o dashboard **User posture** que exibe o perfil do usuário, comportamento de acesso, sessões realizadas, sites acessados, e a avaliação contínua de risco com base nas interações do usuário.  

## Pré-requisitos

* Permissão de administrador ou de auditor do sistema.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **User Behavior.**  
2. No menu lateral, selecione **Dashboard \> User posture.**
---
##  Filtro de usuário

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Usuário** | Menu suspenso | Seleciona o usuário desejado. |
| **Filtrar** | Botão | Filtra as informações pelo usuário selecionado.  |

## Perfil do usuário

*Card* com as seguintes informações sobre o usuário:

| Item | Descrição |
| :---- | :---- |
| **Status** | Indica se o usuário usuário está **Online** ou **Offline** no Segura. |
| **Avatar** | Exibe o avatar do usuário. |
| **Nome** | Exibe o nome de identificação do usuário. |
| **Endereço de IP** | Exibe o último endereço IP utilizado pelo usuário para acessar o Segura. |
| **Último acesso** | Exibe a data e hora do último acesso realizado pelo usuário. |

## User Behavior

*Card* com as seguintes informações sobre os acessos feitos pelo usuário:

| Item | Descrição |
| :---- | :---- |
| **Período de maior uso** | Exibe o período do dia de maior uso por parte do usuário. As opções são *Manhã, Tarde* e *Noite.*  |
| **Total de logins** | Exibe o número total de logins feitos pelo usuário. Abre a tela **Controle de acesso**.  |
| **Tempo de gravação** | Exibe o tempo total de gravação de todas as sessões realizadas pelo usuário. |
| **Duração média** | Exibe a duração média de cada sessão realizada pelo usuário. |
| **Localizações** | Exibe o número de localizações de onde os acessos foram realizados. Abre a tela **Acesso por localização**. Disponível para acessos realizados através do **Domum Remote Access.**  |

## Sessões

*Card* com o número de sessões remotas realizadas pelo usuário.  
Abre a tela **Sessões remotas**.

## Sites

Gráfico de pizza com a quantidade de sessões realizadas de acordo com o site do dispositivo.  
Abre a tela **Sessões remotas** e exibe as sessões filtradas pelo site selecionado.

## Evolução da avaliação

Gráfico XY com o histórico da avaliação de um usuário com base em seu comportamento nos últimos 45 dias.

O eixo X exibe os dias de acesso e o eixo Y exibe a pontuação do usuário por dia.  
**Nota:** quanto maior a pontuação, mais confiável é o usuário.

## Tipo de dispositivo

Gráfico de pizza com a quantidade de sessões por tipo de dispositivo.   
Abre a tela **Sessões remotas** com informações sobre as sessões correspondentes aos tipos de dispositivos escolhidos.

## Criticidade de dispositivo

Gráfico de pizza com a quantidade de sessões agrupadas por criticidade do dispositivo.   
As opções de criticidade são *Alta, Média, Baixa* e *Não definido.*   
Abre a tela **Sessões remotas** com informações sobre as sessões correspondentes à criticidade selecionada.

## Criticidade da credencial

Gráfico de pizza com a quantidade de sessões agrupadas por criticidade da credencial.   
As opções de criticidade são *Alta, Média, Baixa* e *Não definido.* Abre a tela **Sessões remotas** com as informações sobre as sessões correspondentes à criticidade selecionada.

## Sessões de alto risco

Relatório com as seguintes informações sobre as sessões de alto risco realizadas pelo usuário.  
O **ícone de link externo** abre a tela **Sessões com risco.**

| Item | Descrição |
| :---- | :---- |
| **Dispositivo** | Exibe o endereço do dispositivo em que a sessão foi realizada. Abre a tela **Device access profile.**  |
| **Credencial** | Exibe a credencial utilizada na sessão de alto risco. Abre a tela **Credential access profile**.  |
| **Data** | Exibe a data e hora em que a sessão foi realizada.  |
| **Duração**  | Exibe a duração da sessão de alto risco. |
| **Score** | Exibe a pontuação da sessão de alto risco. Abre um *pop-up* com informações sobre os motivos da pontuação.  |
| **Detalhes do acesso** | Abre a tela **Detalhes do acesso.** |
| **Vídeo da sessão** | Abre a tela **Vídeo da sessão.** |

## Eventos suspeitos

Relatório com as seguintes informações das sessões com eventos considerados suspeitos:

| Item | Descrição |
| :---- | :---- |
| **Detalhe** | Exibe o tipo de evento suspeito.  |
| **Data** | Exibe a data e hora em que o evento foi registrado.  |
| **Detalhes do acesso/Detalhes da consulta** | Abre a tela **Detalhes do acesso** para eventos do tipo sessão ou a tela **Detalhes da consulta** para eventos do tipo consulta de credenciais.  |
| **Vídeo da sessão** | Abre a tela **Vídeo da sessão** ou a tela **Justificativa** caso o parâmetro **Ativar fluxo de aprovação para vídeos da sessão\*** esteja habilitado. Disponível para eventos do tipo sessão. |