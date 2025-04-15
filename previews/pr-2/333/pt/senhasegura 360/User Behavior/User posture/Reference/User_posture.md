# User posture

Neste documento, você vai encontrar todas as informações sobre a tela **User posture** que exibe dashboards com informações sobre um determinado usuário de acordo com as suas interações com os recursos senhasegura.

## **Caminho para acesso**

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **User Behavior.**  
2. No menu lateral, selecione **User posture.**

---

## **Dashboard Perfil do usuário**

Dashboard que exibe informações gerais sobre o usuário.

| Item | Descrição |
| ---- | ---- |
| **Status** | Localizado no canto superior esquerdo do dashboard, exibe o status do usuário. As opções possíveis são **Online** e **Offline.** |
| **Foto** | Localizado no centro do dashboard, exibe uma foto do usuário ou um ícone de pessoa caso o usuário não tenha adicionado uma foto. |
| **Nome** | Abaixo da foto ou do ícone de pessoa, exibe o nome do usuário. |
| **Endereço de IP** | Representado pelo ícone de computador, exibe o endereço de IP do usuário. |
| **Último acesso** | Representado pelo ícone de relógio, exibe a data e hora do último acesso realizado pelo usuário. Formatos: `DD/MM/AAAA` e `HH:MM:SS`. |

## **Dashboard User Behavior**

Dashboard que exibe informações gerais sobre os acessos feitos pelo usuário.

| Item | Descrição |
| ---- | ---- |
| **Período de maior uso** | Representado pelo ícone de sol, exibe o período do dia de maior uso por parte do usuário. As opções possíveis são *Manhã, Tarde* e *Noite.* |
| **Total de logins** | Representado pelo ícone de cadeado, exibe o número total de logins feitos pelo usuário. Ao clicar sobre esse item, a tela **[Controle de acesso](/v3-33/docs/pt/pam-session-system-parameters-access-control)** é aberta. |
| **Tempo de gravação** | Representado pelo ícone da câmera, exibe o tempo de gravação da sessão em horas e minutos. Esse valor é a soma das gravações de todas as sessões realizadas pelo usuário. |
| **Duração média** | Representado pelo ícone de relógio, exibe a duração média de cada sessão. |
| **Localizações** | Representado pelo ícone de pin de localização, exibe o número de localizações de onde partiram os acessos feitos. Ao clicar sobre esse item, a tela **Acesso por localização** é aberta. <br>**Nota:** esse item é preenchido somente para acessos realizados através do **Domum Remote Access.** |

## **Dashboard Sessões**

Dashboard que exibe o número de sessões remotas realizadas pelo usuário.  
Ao clicar sobre esse dashboard, a tela **[Sessões remotas](/v3-33/docs/pt/pam-session-remote-session)** é aberta.

## **Dashboard Sites**

Dashboard que exibe um gráfico de  pizza com a quantidade de sessões realizadas em cada site, ou seja, em cada localização geográfica do dispositivo.  
Ao clicar sobre esse dashboard, a tela **[Sessões remotas](/v3-33/docs/pt/pam-session-remote-session)** é aberta.

## **Dashboard Evolução da avaliação**

Dashboard que exibe um gráfico XY com o histórico da avaliação de um usuário com base em seu comportamento.

| Item | Descrição |
| :---- | :---- |
| **Eixo X** | Eixo que exibe os dias de acesso. Formato `DD/MM`. |
| **Eixo Y** | Eixo que exibe a pontuação do usuário em um dia específico. <br>**Nota:** quanto maior a pontuação, mais confiável é o usuário. |
| **Rating events** | Localizado no canto superior esquerdo do dashboard e representado pelo ícone de **olho**, abre o relatório **Rating events**. <br>**Nota**: só é possível ver os registros referente ao usuário logado. |
| **Zoom in/Zoom out** | Localizados no canto superior direito do dashboard e representados pelos ícones de soma e subtração, realizam o *zoom-in* e o *zoom-out* dos dados exibidos no gráfico. |
| **Selection zoom** | Representado pelo ícone de lupa, possibilita a seleção de um trecho do gráfico e realiza o *zoom-in* do trecho selecionado. |
| **Panning** | Representado pelo ícone de mão, possibilita movimentar o gráfico. |
| **Reset zoom** | Representado pelo ícone de casa, retorna o gráfico para sua posição inicial. |
| **Menu** | Representado pelo ícone das três barras verticais, abre um menu suspenso em que é possível escolher um formato para download do gráfico. As opções disponíveis são *Download SVG, Download PNG* e *Download CSV.* |

## **Dashboard Tipo de dispositivo**

Dashboard que exibe um gráfico de pizza com a quantidade de sessões que o usuário realizou em cada tipo de dispositivo. Ao clicar no gráfico, a tela **[Sessões remotas](/v3-33/docs/pt/pam-session-remote-session)** é aberta exibindo apenas as sessões para os tipos de dispositivos escolhidos.

## **Dashboard Criticidade de dispositivo**

Dashboard que exibe um gráfico de pizza com a quantidade de sessões agrupadas por criticidade do dispositivo. Ao clicar no gráfico, a tela **[Sessões remotas](/v3-33/docs/pt/pam-session-remote-session)** é aberta exibindo apenas as sessões para as criticidades de dispositivos escolhidos.

## **Dashboard Criticidade da credencial**

Dashboard que exibe um gráfico de pizza com a quantidade de sessões agrupadas por criticidade da credencial. Ao clicar no gráfico, a tela **[Sessões remotas](/v3-33/docs/pt/pam-session-remote-session)** é aberta exibindo apenas as sessões para a criticidade da credencial escolhida.

## **Dashboard Sessões de alto risco**

Dashboard que exibe um relatório com as sessões de alto risco realizadas pelo usuário.  
O ícone de link externo abre a tela **[Sessões com risco](/v3-33/docs/pt/sessions-with-risk)**.

| Item | Descrição |
| ---- | ---- |
| **Dispositivo** | Coluna que exibe o endereço de IP do dispositivo em que a sessão foi realizada. Ao clicar sobre o endereço de IP desejado, a tela **Device access profile** é aberta. |
| **Credencial** | Coluna que exibe a credencial utilizada na sessão de alto risco. Ao clicar sobre o nome da credencial desejada, a tela **Credential access profile** é aberta. |
| **Data** | Coluna que exibe a data e hora em que a sessão foi realizada.  Formatos: `DD/MM/AAAA` e `HH:MM:SS`. |
| **Duração** | Coluna que exibe a duração da sessão de alto risco.  Formato:  `HH:MM:SS`. |
| **Score** | Coluna que exibe a pontuação da sessão de alto risco. Ao clicar sobre o número exibido, uma tela pop-up com informações sobre os motivos da pontuação é aberta. |
| **Ícone da lupa** | Abre a tela **Detalhes do acesso**.  |
| **Vídeo da sessão** | Representado pelo ícone de play, abre a tela **[Vídeo da sessão](/v3-33/docs/pt/pam-session-view-and-download-the-session-video-2)**.|

## **Dashboard Eventos suspeitos**

Dashboard que exibe um relatório com as sessões em que houve eventos considerados suspeitos.

| Item | Descrição |
| :---- | :---- |
| **Detail** | Coluna que exibe o tipo de evento suspeito. |
| **Data** | Coluna que exibe a data e hora em que o evento foi registrado.  Formatos: `DD/MM/AAAA` e `HH:MM:SS`. |
| **Ícone da lupa** | Abre a tela **Detalhes do acesso.**  |
| **Vídeo da sessão** | Representado pelo ícone de play, abre a tela **[Vídeo da sessão](/v3-33/docs/pt/pam-session-view-and-download-the-session-video-2)**. |
