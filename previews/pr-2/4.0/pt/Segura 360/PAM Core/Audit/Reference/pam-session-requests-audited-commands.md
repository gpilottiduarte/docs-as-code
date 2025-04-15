# Requisições - Comandos auditados

Este documento fornece informações sobre a tela do relátorio **Solicitação da execução do comando**, estão disponíveis todas as requisições, independente do estado que se encontrem.

## Caminho para acesso

1. Na plataforma Segura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.  
2. No menu lateral, selecione **Controle de acesso > Comandos auditados > Requisições**.

---
## Menu de ações

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as requisições por seu código de identificação dentro do Segura. |
| **Operação** | Campo de texto | Filtra as requisições por seu tipo de operação. Para este caso, o tipo sempre será “Solicitação da execução do comando”. |
| **Grupo de acesso** | Campo de texto | Filtra as requisições através do grupo que o usuário pertence. |
| **Solicitante** | Campo de texto | Filtra as requisições através do nome do usuário que está realizando a requisição. |
| **Data de solicitação** | Campo de texto | Filtra as requisições através da data e hora da requisição. |
| **Estado** | Menu suspenso | Filtra as requisições através do tipo de requisição. As opções são *Pendente*, *Aprovada, Reprovada* e *Expirada*. Utilize o campo de texto para digitar a informação desejada. Limpe o campo para habilitar a opção **Todos**. |
| **Governança** | Campo de texto | Filtra as requisições através do código de identificação para softwares ITSM (*IT Service Management*). |
| **Motivo** | Campo de texto | Filtra as requisições através da razão pela qual o usuário precisa executar o comando solicitado. |

## Campos do relatório

* **Código.**  
* **Operação.**  
* **Grupo de acesso.**  
* **Solicitante.**  
* **Solicitada em:** data em que a requisição foi feita.  
* **Status.**  
* **Validade:** data e hora que a solicitação será expirada.  
* **Governança.**  
* **Motivo.**  
* **Ações:**  
  * **Detalhes:** abre a janela [Detalhes da requisição](/v4/docs/pt/pam-session-request-details-for-audited-commands) com todas as informações sobre a requisição.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::