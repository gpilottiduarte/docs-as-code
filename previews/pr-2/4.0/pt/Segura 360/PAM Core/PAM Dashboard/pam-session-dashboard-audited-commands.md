# Comandos auditados

Este documento fornece informações sobre o dashboard **Comandos auditados**, que permite mapear os comandos, os acessos mais arriscados e quem são os usuários e dispositivos mais afetados.

:::(info) (**Info**)  
O dashboard poderá ser acessado apenas por usuários que possuam a permissão de administrador ou de auditor do sistema.  
:::

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Dashboard > Comandos auditados.**

---
## Análise de Comandos

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Período de exibição** | Seletor de data | Filtra pelo período escolhido para exibição dos dados. As opções são *Hoje, Últimas 24 horas, Essa semana, Semana passada, Esse mês, Mês passado, Esse ano, Ano passado e Personalizado*. |

## Gráficos

| **Item** | **Descrição** |
| :---- | :---- |
| **Comandos com maior severidade** | Exibe a quantidade de comandos com maior severidade que foram executados, separados por data. |
| **Acessos com comando detectados** | Exibe a quantidade de acessos a sessões com comandos detectados, separados por data. |

## Listas  

### Últimos acessos com comandos detectados**  
Lista com os 5 últimos acessos que tiverem comandos detectados.

| **Item** | **Descrição** |
| :---- | :---- |
| **Usuário** | Exibe o nome do usuário que realizou o acesso. |
| **Dispositivo** | Exibe o dispositivo que foi iniciado o acesso. |
| **Credencial** | Exibe a credencial utilizada pelo usuário para realizar o acesso. |
| **Data** | Exibe a data e hora que foi realizado o acesso. |
| **Risco** | Exibe o grau do risco atingido pelo acesso. O número pode variar de 0 (zero) a 100 (cem). |
| **Lupa** | Abre a tela de **Detalhes do acesso**. |

### Acessos com maior severidade  
Lista com os 5 últimos acessos de maior severidade.

| **Item** | **Descrição** |
| :---- | :---- |
| **Usuário** | Exibe o nome do usuário que realizou o acesso. |
| **Dispositivo** | Exibe o dispositivo que foi iniciado o acesso. |
| **Credencial** | Exibe a credencial utilizada pelo usuário para realizar o acesso. |
| **Data** | Exibe a data e hora que foi realizado o acesso. |
| **Risco** | Exibe o grau do risco atingido pelo acesso. O número pode variar de 0 (zero) a 100 (cem). |
| **Lupa** | Abre a tela de **Detalhes do acesso**. |

### Maiores agressores  
Lista com os usuários considerados os maiores agressores.

| **Item** | **Descrição** |
| :---- | :---- |
| **Usuário** | Exibe o nome do usuário que realizou o acesso. |
| **Incidentes** | Exibe a quantidade de incidentes que ocorreram. |
| **Sessões** | Exibe a quantidade de sessões acessadas pelo usuário. |
| **Com incidentes** | Exibe a porcentagem das sessões em que ocorreram incidentes. |

### Maiores agredidos  
Lista com os dispositivos mais agredidos.

| **Item** | **Descrição** |
| :---- | :---- |
| **Dispositivo** | Exibe o endereço IP do dispositivo acessado. |
| **Incidentes** | Exibe a quantidade de incidentes que ocorreram. |
| **Sessões** | Exibe a quantidade de vezes que o dispositivo foi acessado. |
| **Com incidentes** | Exibe a porcentagem das sessões que ocorreram incidentes. |

---
### Tela Detalhes do acesso

| **Item** | **Descrição** |
| :---- | :---- |
| **Usuário** | Exibe os dados nome, email e endereço IP do usuário. |
| **Credencial** | Exibe os dados nome de usuário, endereço IP, tipo do protocolo e porta usada pela credencial. |
| **Acesso** | Exibe os detalhes da sessão acessada pelo usuário. Os dados são o endereço IP da máquina de acesso, a duração da sessão e dispositivo acessado com o endereço IP, protocolo e porta. |
| **Últimos comandos detectados** | Exibe a lista dos comandos realizados pelo usuário, contendo os campos *Comando, Ação durante a sessão, Comando, Data do evento, Período que foi executado, grau de criticidade, risco e opção de visualizar o vídeo da sessão*. |

---  
Ao clicar nos itens **Usuário**, **Dispositivo** e **Credencial** das listas presentes no dashboard as seguintes telas de detalhes são apresentadas: 

### Tela perfil do usuário

| **Item** | **Descrição** |
| :---- | :---- |
| **Usuário** | Exibe os dados nome, email, endereço IP, última sessão e tempo sem acessar do usuário. |
| **Cards** | Exibe as informações de Período de maior uso, Total de consultas, Consultas por dia, Total de acessos, Duração média e Tempo de gravação. |
| **Acessos** | Exibe um gráfico com os acessos feitos nos últimos 45 dias, informando os acessos com risco. |
| **Consultas** | Exibe um gráfico com as consultas feitas nos últimos 45 dias, informando as consultas com risco. |
| **Últimos acessos** | Exibe uma lista dos últimos acessos do usuário contendo os campos Dispositivo, Credencial, Data, Score e Detalhes do acesso. |
| **Últimas consultas** | Exibe informações da últimas consultas  realizada pelo usuário. |

### Tela perfil do dispositivo

| **Item** | **Descrição** |
| :---- | :---- |
| **Dispositivo**  | Exibe o endereço IP do dispositivo acessado. |
| **Cards** | Exibe as informações de Período de maior uso, Total de acessos, Acessos por dia, Duração média. |
| **Acessos** | Exibe um gráfico com os acessos feitos nos últimos 45 dias, informando os acessos com risco. |
| **Acessos de maior risco** | Exibe uma lista de acessos naquele dispositivo que foram de maior risco, contendo os campos Usuário, Credencial, Data, Score e Detalhes do acesso. |
| **Últimos acessos** | Exibe uma lista de usuários e credenciais usadas que realizaram os últimos acessos a este dispositivo, contendo os campos Usuário, Credencial, Data, Score e Detalhes do acesso. |

### Tela perfil da credencial

| **Item** | **Descrição** |
| :---- | :---- |
| **Credencial** | Exibe os dados de nome de usuário e endereço IP da credencial. |
| **Cards** | Exibe as informações de Período de maior uso, Total de acessos, Acessos por dia e Duração média. |
| **Acessos** | Exibe um gráfico com os acessos feitos nos últimos 45 dias, informando os acessos com risco. |
| **Acessos de maior risco** | Exibe uma lista de usuários que utilizaram a credencial em sessões de maior risco, contendo os campos Usuário, Data, Score e Detalhes do acesso. |
| **Últimos acessos** | Exibe uma lista de usuários que realizaram os últimos acessos com esta credencial, contendo os campos Usuário, Data, Score e Detalhes do acesso. |