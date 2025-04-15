# Minhas solicitações de acesso

Este documento fornece informações sobre a tela do relatório **Minhas solicitações de acesso**, que exibe suas próprias solicitações.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Controle de acesso > Minhas solicitações de acesso**

---
## Menu de ações

| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as solicitações por seu código de identificação dentro do Segura. |
| **Operação** | Campo de texto | Filtra as solicitações por seu tipo de operação. Para este caso, o tipo sempre será “Solicitação da execução do comando”. |
| **Credencial** | Campo de texto | Filtra as solicitações através da credencial que o usuário está solicitando o acesso. |
| **Hostname** | Campo de texto | Filtra as solicitações através do nome do computador no qual o usuário quer acessar. |
| **Justificativa** | Campo de texto | Filtra as solicitações através do motivo pelo qual o usuário precisa do acesso solicitado. |
| **Motivo** | Menu suspenso | Filtra as solicitações através da razão pela qual o usuário precisa do acesso. As opções são exibidas de acordo com os motivos cadastrados no Segura. |
| **Código de governança** | Campo de texto | Filtra as solicitações através do código de identificação para softwares ITSM (*IT Service Management*). |
| **Data de solicitação** | Campo de texto | Filtra as solicitações através da data e hora da solicitação. |
| **Estado** | Menu suspenso | Filtra as solicitações através do status. As opções são *Aprovada*, *Cancelada*, *Revogada*, *Pendente*, e *Reprovada*. |
| **Expirados** | Menu suspenso | Filtra as solicitações com base se a solicitação expirou. As opções são **Sim** e **Não**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código.**  
* **Data da solicitação.**  
* **Solicitante:** o usuário que fez a solicitação.  
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
  * **Cancelar solicitação**: cancela a solicitação, na janela que se abre clique em **Sim** para confirmar a ação. 

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::
