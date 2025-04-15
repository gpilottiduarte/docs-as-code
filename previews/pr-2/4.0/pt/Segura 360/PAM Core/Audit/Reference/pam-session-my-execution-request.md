# Minhas solicitações de execução

Este documento fornece informações sobre a tela do relatório **Minhas solicitações de execução**, que exibe informações sobre as solicitações de execução de comandos bloqueados.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Controle de acesso > Comandos auditados > Minhas solicitações de execução.**

---
## Menu de ações

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as solicitações por seu código de identificação dentro do Segura. |
| **Operação** | Campo de texto | Filtra as solicitações por seu tipo de operação. Para este caso, o tipo sempre será “Solicitação da execução do comando”. |
| **Grupo de acesso** | Campo de texto | Filtra as solicitações através do grupo que o usuário pertence. |
| **Solicitante** | Campo de texto | Filtra as solicitações através do nome do usuário que está realizando a solicitação. |
| **Data de solicitação** | Campo de texto | Filtra as solicitações através da data e hora da solicitação. |
| **Status** | Menu suspenso | Filtra as solicitações através do tipo de solicitação. As opções são *Pendente*, *Aprovada, Reprovada* e *Expirada*. Utilize o campo de texto para digitar a informação desejada. Limpe o campo para habilitar a opção **Todos**. |
| **Governança** | Campo de texto | Filtra as solicitações através do código de identificação para softwares ITSM (*IT Service Management*). |
| **Motivo** | Campo de texto | Filtra as solicitações através da razão pela qual o usuário precisa executar o comando solicitado. |

## Campos do relatório

* **Código.**  
* **Operação.**  
* **Grupo de acesso.**  
* **Solicitante.**  
* **Solicitada em:**  
* **Estado.**  
* **Validade:** data e hora que a solicitação será expirada.  
* **Governança.**  
* **Motivo.**  
* **Ações:**  
  * **Detalhes:** abre a tela [Detalhes da requisição](/v4/docs/pt/pam-session-request-details-for-audited-commands) com todas as informações sobre a requisição.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::