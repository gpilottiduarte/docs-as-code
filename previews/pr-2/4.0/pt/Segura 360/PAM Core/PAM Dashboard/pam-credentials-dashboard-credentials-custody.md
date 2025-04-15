# Custódia de credenciais

Este documento fornece informações sobre o dashboard **Custódia de credenciais**, que permite visualizar informações sobre credenciais e suas custódias.

:::(info) (**Info**)  
O dashboard poderá ser acessado apenas por usuários que possuam a permissão de administrador ou de auditor do sistema.  
:::

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Dashboard > Custódia de credenciais.**

---
## Cards

| **Item** | **Descrição** |
| :---- | :---- |
| **Credenciais** | Exibe o número de credenciais cadastradas no Segura. |
| **Em utilização** | Exibe o número de credenciais que estão sendo utilizadas no Segura. |
| **Gerenciadas** | Exibe o número de credenciais sob custódia que são gerenciáveis. |
| **Expiradas** | Exibe o número de credenciais sob custódia que já foram expiradas. |
| **Atualizadas** | Exibe o número de credenciais sob custódia que foram atualizadas. |
| **Informações** | Exibe o número de credenciais sob custódia que possuem informações adicionais. |

## Gráficos

| **Item** | **Descrição** |
| :---- | :---- |
| **Consultas** | Exibe o período de 45 dias de consultas realizadas, com a quantidade por dia. |
| **Consultas** | Exibe o período de 12 meses de consultas realizadas, com a quantidade por meses. |

## Listas

### Credenciais mais utilizadas

Lista com as credenciais mais utilizadas pelos usuários.

| **Item** | **Descrição** |
| :---- | :---- |
| **Dispositivo** | Exibe o dispositivo que foi iniciado o acesso. |
| **Credencial** | Exibe a credencial utilizada pelo usuário para realizar o acesso. |
| **Última consulta** | Exibe a data e hora que foi realizada a última consulta. |
| **Total** | Exibe o número de visualizações realizadas pelo usuário. |

### Últimas consultas

Lista com as últimas consultas de senha realizadas.

| **Item** | **Descrição** |
| :---- | :---- |
| **Usuário** | Exibe o nome do usuário que realizou a consulta. |
| **Dispositivo** | Exibe o dispositivo que foi realizado a consulta. |
| **Credencial** | Exibe a credencial relacionada ao dispositivo. |
| **Última consulta** | Exibe a data e hora que foi realizada a última consulta. |

### Credenciais sob custódia

Lista das credenciais que estão sob custódia de algum usuário do Segura.

| **Item** | **Descrição** |
| :---- | :---- |
| **Código** | Exibe o código de identificação dentro do Segura. |
| **Usuário** | Exibe o nome do usuário que possui a custódia. |
| **Tipo de credencial** | Exibe o tipo da credencial utilizada. |
| **Dispositivo** | Exibe o dispositivo relacionado à credencial. |
| **Credencial** | Exibe a credencial que está sob custódia. |
| **Informação adicional** | Exibe informações extras sobre a custódia da credencial. |
| **Última troca** | Exibe a data e hora que foi realizada a última troca. |
| **Data de expiração** | Data e hora da expiração da custódia. |
| **Última consulta** | Exibe a data e hora que foi realizada a última consulta. |
| **Início da consulta** | Data e hora do início da consulta da senha da credencial. |
| **Duração** | Tempo de duração da custódia. |
| **Lupa** | Abre a tela de *Detalhes do acesso*. |

--- 
### Tela Detalhes do acesso

| Item | Descrição |
| :---- | :---- |
| **Usuário** | Exibe os dados nome, email e endereço IP do usuário. |
| **Credencial** | Exibe os dados nome de usuário, endereço IP, tipo do protocolo e porta usada pela credencial. |
| **Consulta** | Exibe os detalhes da sessão acessada pelo usuário. Os dados são o endereço IP da máquina de acesso, a duração da sessão e dispositivo acessado com o endereço IP, protocolo e porta. |
| **Últimos eventos de consulta** | Exibe os dados das últimas consultas realizadas na credencial. |