# Todas solicitações de acesso

Este documento fornece informações sobre a tela do relatório **Todas solicitações de acesso**, que exibe as solicitações de todos os usuários do Segura, independente do estado que elas se encontrem.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Controle de acesso > Todas solicitações de acesso**.

---
## Menu de ações

| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as solicitações por seu código de identificação dentro do Segura. |
| **Solicitante** | Campo de texto | Filtra pelo nome do usuário que realizou a solicitação. |
| **Operação** | Campo de texto | Filtra as solicitações por seu tipo de operação. Para este caso, o tipo sempre será “Solicitação da execução do comando”. |
| **Grupo** | Campo de texto | Filtra as solicitações através do grupo em que o usuário pertence. |
| **Estado** | Menu suspenso | Filtra as solicitações através do estado da solicitação. As opções são *Aprovada*, *Cancelada*, *Revogada*, *Pendente*, e *Reprovada*. |
| **Dispositivo** | Campo de texto | Filtra as solicitações através do dispositivo em que o acesso está sendo solicitado. |
| **Motivo** | Menu suspenso | Filtra as solicitações através da razão pela qual o usuário precisa do acesso. As opções são exibidas conforme os motivos cadastrados no Segura. |
| **Acesso emergencial** | Menu suspenso | Filtra as solicitações com base se o acesso solicitado foi um caso emergencial ou não. As opções são **Sim** e **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Código de governança** | Campo de texto | Filtra as solicitações através do código de identificação para softwares ITSM (*IT Service Management*). |
| **Justificativa** | Campo de texto | Filtra as solicitações através do motivo pelo qual o usuário precisa do acesso solicitado. |
| **Data de solicitação** | Campo de texto | Filtra as solicitações através da data e hora da solicitação. |
| **Expirados** | Menu suspenso | Filtra as solicitações com base se a solicitação expirou. As opções são **Sim** e **Não**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código.**  
* **Grupo.**   
* **Operação.**  
* **Solicitante.**  
* **Data da solicitação.**  
* **Validade:** data e hora até quando o acesso será possível de realizar.  
* **Estado.**  
* **Justificativa.**  
* **Motivo.**  
* **Acesso emergencial.**  
* **Código de governança.**  
* **Ações:**  
  * **Visualizar solicitação:** abre a tela [Solicitação de Acesso](/v4/docs/pt/pam-session-access-request-details) com detalhes da solicitação.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::