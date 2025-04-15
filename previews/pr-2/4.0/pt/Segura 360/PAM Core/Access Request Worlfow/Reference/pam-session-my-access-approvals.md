# Minhas aprovações de acesso

Este documento fornece as informações sobre a tela do relatório **Minhas aprovações de acesso**, que exibe todas as aprovações e desaprovações concedidas às solicitações de acesso feitas por outros usuários.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Controle de acesso > Minhas aprovações de acesso**.

---
## Menu de ações

| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as solicitações por seu código de identificação dentro do Segura. |
| **Credencial** | Campo de texto | Filtra as solicitações através da credencial que o usuário está solicitando o acesso. |
| **Hostname** | Campo de texto | Filtra as solicitações através do nome do computador no qual o usuário quer acessar. |
| **Solicitante** | Campo de texto | Filtra as solicitações através do nome do usuário que realizou a solicitação. |
| **Operação** | Campo de texto | Filtra as solicitações através do tipo de operação solicitada. |
| **Justificativa** | Campo de texto | Filtra as solicitações através do motivo pelo qual o usuário precisa do acesso solicitado. |
| **Motivo** | Menu suspenso | Filtra as solicitações através da razão pela qual o usuário precisa do acesso. As opções são *Alteração*, *Device with no connectivity*, *Incident*, e *Outro*. |
| **Código de governança** | Campo de texto | Filtra as solicitações através do código de identificação para softwares ITSM (*IT Service Management*). |
| **Data de solicitação** | Campo de texto | Filtra as solicitações através da data e hora da solicitação. |
| **Estado** | Menu suspenso | Filtra as solicitações através do status. As opções são *Aprovada*, *Cancelada*, *Revogada*, *Pendente*, e *Reprovada*. |
| **Expirados** | Menu suspenso | Filtra as solicitações com base se a solicitação expirou. As opções são **Sim** e **Não**. |

## Campos do relatório

* **Código.**  
* **Data da solicitação.**  
* **Solicitante.**  
* **Credencial.**  
* **Hostname.**  
* **Operação.**  
* **Código de governança.**  
* **Motivo.**  
* **Justificativa.**  
* **Início do acesso:** data e hora de quando o acesso pode ser realizado.  
* **Fim do acesso:** data e hora limite do acesso.  
* **Estado.**  
* **Ações:**  
  * **Visualizar solicitação**: abre a tela [Solicitação de Acesso](/v4/docs/pt/pam-session-access-request-details) com detalhes da solicitação.  
  * **Reprovar**: abre a tela **Reprovar Solicitação**. Insira uma justificativa, e clique em **Reprovar** para reprovar a solicitação.  
  * **Aprovar**: abre a tela **Aprovar o pedido**. Se necessário, mude o início e fim do acesso e clique em **Aprovar** para aprovar a solicitação.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
### Tela Reprovar Solicitação

| **Item** | **Descrição** |
| :---- | :---- |
| **Credencial** | Credencial que o usuário está solicitando o acesso. |
| **Solicitado em** | Data e hora da solicitação. |
| **Acesso Desejado** | Tipo de acesso solicitado pelo usuário. |
| **Justificativa** | Motivo pelo qual o usuário precisa do acesso solicitado. |
| **Justificativa*** | Justificativa para explicar a resposta dada pelo reprovador. |

---
### Tela Aprovar o pedido

| **Item** | **Descrição** |
| :---- | :---- |
| **Credencial** | Credencial que o usuário está solicitando o acesso. |
| **Solicitado em** | Data e hora da solicitação. |
| **Acesso Desejado** | Tipo de acesso solicitado pelo usuário. |
| **Justificativa** | Motivo pelo qual o usuário precisa do acesso solicitado. |
| **Início Acesso*** | Data de início do acesso. |
| **Fim Acesso*** | Fim do acesso. |