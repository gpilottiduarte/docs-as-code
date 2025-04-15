# Registros de API

Este documento fornece informações sobre o relatório **Registros de API**, que exibe informações sobre os logs das requisições à API do Segura.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Serviços \> API \> Logs.**

## Menu de Ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Client ID** | Campo de texto | Filtra pela identificação do cliente no Segura. |
| **Cliente** | Campo de texto | Filtra pelo nome do usuário ou nome de usuário do cliente que está utilizando o recurso de API. |
| **ID da autorização** | Campo de texto | Filtra pelo número de identificação da autorização. |
| **Autorização** | Campo de texto | Filtra pelo nome da autorização |
| **IP** | Campo de texto | Filtra pelo endereço de IP que usou a autorização. |
| **Recurso** | Campo de texto | Filtra pelo nome técnico do recurso utilizado. |
| **Status** | Campo de texto | Filtra pelo código do status da operação. |
| **Erro** | Menu suspenso | Filtra os registros pelo registro de erro. As opções são **Sim** ou **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Data/Hora** | Campo de data | Filtra os registros pelo período em que foram utilizados. |

## Campos do relatório
* **Código**: código do log no Segura.  
* **Client ID.**  
* **Cliente**.  
* **ID da autorização.**  
* **Autorização**.  
* **IP.**  
* **Recurso**.  
* **Evento**: evento utilizado na chamada da API.  
* **Método**: método utilizado na chamada da API.  
* **Status**.  
* **URL**: URL utilizada na chamada da API.  
* **Server**: nome do servidor.  
* **Erro**.  
* **Tempo**: duração da chamada da API.  
* **Data/Hora**: mostra a data e a hora da chamada de API. Apresentada no formato DD/MM/AAAA HH:MM.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::  
