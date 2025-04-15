# Textos de notificações

Este documento fornece informações sobre o relatório **Cadastro de texto de notificações,** que exibe informações sobre a customização das notificações em texto no Segura. Essas notificações incluem a customização dos textos de e-mail e as suas TAGs disponíveis.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações \> Personalização de texto.**

## Menu de ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos do relatório
* **Código:** código da notificação.  
* **Tipo:** tipo da notificação.  
* **Assunto:** string com o assunto da notificação.  
* **Ações:**  
  * **Alterar texto**: abre a janela **Cadastro de texto de notificações** em modo de edição.  
    * Caso você não tenha configurado nenhum texto, a opção estará nomeada como **Configurar Texto**.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Tela Cadastro de texto de notificações
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Tipo de texto** | Menu suspenso | Sim | Informa o tipo de texto da notificação. Como o texto é cadastrado no Segura, esse menu suspenso é desabilitado. |
| **Ativo** | Botão de opção | Não | Define o estado da notificação. As opções são **Sim** e **Não**. |
| **Visualizar TAGs** | Botão | Não se aplica | Direciona para o modal **TAGs** que contém todas as `TAGs` que podem ser utilizadas no texto da notificação. |
| **Assunto** | Campo de texto | Sim | Preencha com o texto da criação da string que será utilizada como assunto do e-mail de notificação. Aceita `TAGs`. |
| **Texto do E-mail** | Campo de texto | Sim | Preencha com o texto que será enviado no corpo do e-mail da notificação. Aceita `TAGs`. |

## Listagem das TAGs disponíveis
Ao clicar no botão **Visualizar TAGs** , você será direcionado ao modal de TAGs, que contém todas as TAGs disponíveis no Segura.

* `[#REQUEST_CODE#]` : código da solicitação no formato S000000.
* `[#REQUEST_STATUS#]` : status da solicitação.
* `[#REQUESTER#]` : usuário que está solicitando acesso à senha.
* `[#REQUEST_DATE#]` : data da solicitação.
* `[#APPROVER#]` : nome do aprovador que receberá o email pedido.
* `[#ANSWERED_BY#]` : nome do aprovador que respondeu ao pedido.
* `[#ANSWER_DATE#]` : data em que a solicitação foi respondida pelo aprovador.
* `[#ACTION#]` : ação solicitada.
* `[#ACTION_LIST#]` : ação solicitada em formato de lista.
* `[#ACTION_LIST_SYSLOG#]` : ação solicitada em formato de lista usando o template de syslog.
* `[#URL_APPROVE#]` : URL para aprovar acesso à senha.
* `[#LINK_APPROVE#]` : link para aprovar acesso à senha.
* `[#URL_REJECT#]` : URL para rejeitar acesso à senha.
* `[#LINK_REJECT#]` : link para rejeitar acesso à senha.
* `[#DEVICE_HOSTNAME#]` : hostname do dispositivo.
* `[#DEVICE_IP#]` : IP do dispositivo.
* `[#CREDENTIAL_USERNAME#]` : nome de usuário da credencial.
* `[#CREDENTIAL_TYPE#]` : tipo da credencial.
* `[#REASON#]` : motivo especificado.
* `[#JUSTIFICATION#]`: motivo especificado pelo solicitante.
* `[#GOVERNANCE_ID#]` : ID da governança.
* `[#START_DATETIME#]` : data e hora de início do período de acesso solicitado no formato 19/12/2024 12:38:30 .
* `[#END_DATETIME#]` : data e hora de término do período de acesso solicitado no formato 19/12/2024 12:38:30 .
* `[#START_DATETIME_STR#]` : data e hora de início do período de acesso solicitado no formato quinta, 19 de dezembro 12:38 .
* `[#END_DATETIME_STR#]` : data e hora de término do período de acesso solicitado no formato quinta, 19 de dezembro 12:38 .
* `[#START_DATE#]` : data de início do período de acesso solicitado no formato 19/12/24 .
* `[#END_DATE#]` : data de término do período de acesso solicitado no formato 19/12/24 .
* `[#START_TIME#]` : hora de início do período de acesso solicitado no formato 12:38 .
* `[#END_TIME#]` : hora de término do período de acesso solicitado no formato 12:38 .
* `[#CREDENTIAL#]` : credencial envolvida na solicitação.
* `[#RESPONSIBLE#]` : nome do responsável pelo certificado.
* `[#CERT_ENVIRONMENTS#]` : ambientes do certificado separados por vírgula.
* `[#CERT_SYSTEMS#]` : sistemas do certificado separados por vírgula.
* `[#CERT_TAGS#]` : tags do certificado separados por vírgula.
* `[#CERT_DESC#]` : descrição do certificado.
* `[#COMMONNAME#]` : nome comum do certificado.
* `[#ISSUED_BY#]` : informações do emissor do certificado.
* `[#VALIDITY_INIT#]` : data de início da validade do certificado.
* `[#VALIDITY_END#]` : data de vencimento do certificado.
