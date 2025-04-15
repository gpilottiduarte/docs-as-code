# Como gerenciar notificações

O Segura possibilita o envio de relatórios por e-mail, assim como a programação destes. Isso permite que você programe o envio, por exemplo, do relatório de sessões remotas para alguns usuários. Estes usuários receberão os relatórios no momento em que forem enviadas essas notificações, desta forma ficarão sempre atualizados sobre as novas sessões remotas realizadas durante o período.

## Requisitos

* Para utilizar a opção de envio de notificações via SMS, é necessário ter a integração com o Zenvia devidamente configurada.   
  * Sem essa configuração, não serão enviadas as notificações por SMS. Para saber como configurar a integração com o Zenvia, acesse o documento Integração com serviço de SMS.  
* Para notificações via e-mail, certifique-se de que haja um e-mail padrão configurado corretamente.  
* Você pode consultar mais informações sobre como integrar o serviço do Zenvia ao Segura acessando o documento de [Integração com serviço de SMS](/v4/docs/pt/administration-integration-with-sms-service).

## Cadastrar uma nova notificação

1. No Segura, na barra de navegação, passe o mouse sobre o Menu de produtos e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações > Notificações globais**.  
3. No relatório **Notificações globais**, serão apresentadas as notificações que estão cadastradas no Segura.  
4. Para criar uma nova notificação, clique no botão **Adicionar**.  
5. Na tela **Cadastrar nova notificação**:  
   1. **Nome**: um nome para a nova notificação.  
   2. **E-mail**: enviar a notificação por e-mail.
   3. **Tela**: envia a notificação para a tela do usuário.
   4. **SMS**: envia a notificação via SMS.
   5. **Enviar notificações apenas para contatos que possuem acesso às credenciais ou dispositivos**: enviar notificação apenas para os usuários que tem acesso às credenciais ou dispositivos do Segura.
6. Na aba **Notificação**:
    1. Clique no botão **Adicionar** para abrir o modal **Notificações**. 
    2. Selecione as notificações que deseja enviar.
    3. Clique em **Adicionar**.
        1. Perceba que agora a notificação desejada aparecerá dentro do campo de notificações.
7. Na aba **Contato**: 
    1. Clique em **Adicionar** para abrir o modal **Contatos**. 
    2. Selecione os contatos que receberão as notificações. 
    3. Clique em **Adicionar**.
8. Na aba revisão, clique em **Salvar**.

:::(warning) (Atenção!)
Para utilizar a opção de envio de notificações via SMS, é necessário ter a integração com o Zenvia devidamente configurada. Sem essa configuração, não serão enviadas as notificações por SMS. Para saber como configurar a integração com o Zenvia, acesse o documento [Integração com serviço de SMS](/v4/docs/pt/administration-integration-with-sms-service).
:::

## Como alterar uma notificação

1. No Segura, na barra de navegação, passe o mouse sobre o Menu de produtos e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações > Notificações globais**.  
3. No relatório **Notificações globais**, identifique a notificação que você deseja alterar, clique no botão **Ações** e selecione **Editar**.
5. A janela **Cadastrar notificação** será aberta em modo de edição.  
6. Altere as informações necessárias e clique em salve-as.

## Como inativar uma notificação

1. No Segura, na barra de navegação, passe o mouse sobre o Menu de produtos e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações > Notificações globais**.  
3. No relatório **Notificações globais**, identifique a notificação que você deseja alterar, clique no botão **Ações** e selecione **Desativar**.  
5. No modal de confirmação, clique em **Sim**.

## Como reativar uma notificação

1. No Segura, na barra de navegação, passe o mouse sobre o Menu de produtos e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações > Notificações globais**.  
3. No relatório **Notificações globais**, serão apresentadas as notificações que estão cadastradas no Segura.  
4. No menu de busca, na barra superior, clique no menu suspenso **Ativo** e selecione a opção **Não**.  
5. Clique em **Filtrar**.  
6. A listagem irá filtrar as notificações cadastradas que estão inativadas. Elas serão mostradas com o texto na cor vermelha.  
7. Identifique a notificação que deseja reativar, clique no botão Ações e selecione **Ativar**.  
8. No modal de confirmação, clique em **Sim**.

## Como customizar uma notificação

Alguns dos textos que constam nos modelos de notificações usados pelo Segura podem ser modificados de acordo com a sua necessidade. Para realizar esse tipo de alteração, siga os passos abaixo:

1. No Segura, na barra de navegação, passe o mouse sobre o Menu de produtos e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações > Personalização de texto**.
3. No relatório **Cadastro de texto de notificações**, serão apresentadas as notificações que estão cadastradas no Segura e suas informações.
4. Clique no botão **Ações** e selecione **Alterar texto**.  
5. Você será direcionado para a tela **Cadastro de texto de notificações**.

### Alterar o texto de uma notificação

Na tela **Cadastro de texto de notificações** você tem as seguintes opções:

1. **Tipo de texto**: informa o nome do tipo de notificação que está sendo alterada. Por exemplo: `Solicitação Criada: Aprovador`  
2. **Ativo**: selecione se você deseja que o novo texto seja utilizado. Por padrão é marcado como Sim.  
3. **Assunto**: expressão para o assunto do e-mail que será mandado na notificação. Por exemplo: `Access request - [#DEVICE_HOSTNAME#] ([#DEVICE_IP#])` 
4. **Texto do E-mail**: editor de texto rico que permite a edição do texto padrão do E-mail de notificação.

Este texto deverá conter as tags do E-mail, conforme mostrado no exemplo:

```
Hello [#APPROVER#],

The user [#REQUESTER#] requested [#ACTION#] of the user [#CREDENTIAL_USERNAME#] on the device [#DEVICE_HOSTNAME#] ([#DEVICE_IP#]).
[#ACTION_LIST#]

Reason: [#REASON#]
Code Governance: [#GOVERNANCE_ID#]
Justification: [#JUSTIFICATION#]
Period: [#START_TIME#] to [#END_TIME#]

To approve access to the system or click one of the links below:
[#LINK_APPROVE#] [#LINK_REJECT#]

Or reply to this email with one of the words:
APPROVE
REJECT
```

5. Clique em **Salvar**.

### TAGs

Uma porção essencial para confecção dos textos dos e-mails de notificação são as TAGs. Elas servem como placeholders para determinadas informações do usuário que irá receber o relatório/notificação. 

As TAGs utilizadas no Segura são:

* `[#REQUEST_CODE#]`: request code no formato S000000.  
* `[#REQUEST_STATUS#]`: status da solicitação.  
* `[#REQUESTER#]`: usuário que está solicitando acesso à senha.  
* `[#REQUEST_DATE#]`: data da solicitação.  
* `[#APPROVER#]`: nome do aprovador que receberá o e-mail com o pedido.  
* `[#ANSWERED_BY#]`: nome do aprovador que respondeu ao pedido.  
* `[#ANSWER_DATE#]`: data em que a solicitação foi respondida pelo aprovador.  
* `[#ACTION#]`: ação requisitada.  
* `[#ACTION_LIST#]`: ação requisitada, apresentada em formato de lista.  
* `[#ACTION_LIST_SYSLOG#`\]: ação solicitada, apresentada em formato de lista e utilizando o template de `syslog.`  
* `[#URL_APPROVE#]`: URL para aprovar o acesso à senha.  
* `[#LINK_APPROVE#]`: link para aprovar o acesso à senha.  
* `[#URL_REJECT#]`: URL para rejeitar o acesso à senha.  
* `[#LINK_REJECT#]`: link para rejeitar o acesso à senha.  
* `[#DEVICE_HOSTNAME#]`: hostname do dispositivo.  
* `[#DEVICE_IP#]`: endereço de IP do dispositivo.  
* `[#CREDENTIAL_USERNAME#]`: nome de usuário da credencial.  
* `[#CREDENTIAL_TYPE#]`: tipo da credencial.  
* `[#REASON#]`: razão especificada.  
* `[#JUSTIFICATION#]`: justificativa da requisição.  
* `[#GOVERNANCE_ID#]`: código de governança.  
* `[#START_DATETIME#]`: data e hora de início do período de acesso solicitado, no formato `DD/MM/AAAA HH:MM:SS.`  
* `[#END_DATETIME#]`: data e hora do final do período de acesso solicitado, no formato `DD/MM/AAAA HH:MM:SS.`  
* `[#START_DATETIME_STR#]`: data e hora de início do período de acesso solicitado no formato se string: `quarta, 08 de maio 15:45`.  
* `[#END_DATETIME_STR#]`: data e hora do final do período de acesso solicitado no formato se string: `quarta, 08 de maio 15:45`.  
* `[#START_DATE#]`: data de início do período de acesso solicitado, no formato `DD/MM/AA`.  
* `[#END_DATE#]`: data do final do período de acesso solicitado, no formato `DD/MM/AA`.  
* `[#START_TIME#]`: hora de início do período de acesso solicitado, no formato `HH:MM.`  
* `[#END_TIME#]`: hora do final do período de acesso solicitado, no formato `HH:MM.`  
* `[#CREDENTIAL#]`: credencial envolvida na solicitação.  
* `[#RESPONSIBLE#]`: nome do responsável pelo certificado.  
* `[#CERT_ENVIRONMENTS#]`: ambientes do certificado separados por vírgula.  
* `[#CERT_SYSTEMS#]`: sistemas do certificado separados por vírgula.  
* `[#CERT_TAGS#]`: tags do certificado separados por vírgula.  
* `[#CERT_DESC#]`: descrição do certificado.  
* `[#COMMONNAME#]`: nome comum do certificado.  
* `[#ISSUED_BY#]`: informações do emissor do certificado.  
* `[#VALIDITY_INIT#]`: data de início da validade do certificado.  
* `[#VALIDITY_END#]`: data de vencimento do certificado.