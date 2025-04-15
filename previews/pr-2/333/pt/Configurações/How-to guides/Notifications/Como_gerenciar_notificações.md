# Como gerenciar notificações

O senhasegura possibilita o envio de relatórios por e-mail, assim como a programação destes. Isso permite que você programe o envio, por exemplo, do relatório de sessões remotas para alguns usuários. Estes usuários receberão os relatórios no momento em que forem enviadas essas notificações, desta forma ficarão sempre atualizados sobre as novas sessões remotas realizadas durante o período.

## Requisitos

* Para utilizar a opção de envio de notificações via SMS, é necessário ter a integração com o Zenvia devidamente configurada.   
  * Sem essa configuração, não serão enviadas as notificações por SMS. Para saber como configurar a integração com o Zenvia, acesse o documento Integração com serviço de SMS.  
* Para notificações via e-mail, certifique-se de que haja um e-mail padrão configurado corretamente.  
* Você pode consultar mais informações sobre como integrar o serviço do Zenvia ao senhasegura acessando o documento de [Integração com serviço de SMS](/v3-33/docs/pt/administration-integration-with-sms-service).

## Cadastrar uma nova notificação

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações \> Configurações**.  
3. Na listagem **Cadastro de notificações**, serão apresentadas as notificações que estão cadastradas no senhasegura.  
4. Para criar uma nova notificação, na barra superior, clique em **Exibir ações**, representado pelo ícone dos três pontos verticais, e selecione **Nova notificação** no menu suspenso.  
5. Na janela **Cadastrar nova notificação** preencha os seguintes campos:  
   1. **Nome**: um nome para a nova notificação.  
      1. Do lado do campo Nome selecione os meios que você deseja utilizar para enviar a notificação. As opções são: *E-mail, Tela* e *SMS*. Você deve selecionar uma ou mais destas opções.  
      2. Note que também é possível escolher se a notificação será enviada apenas para contatos que possuem acesso às credenciais ou dispositivos.  
   2. Na aba **Notificação**, clique no sinal de adição do lado da palavra **Notificações** para abrir o modal **Notificações**. Neste, selecione as notificações que deseja enviar. Perceba que agora a notificação desejada aparecerá dentro do campo de notificações.  
   3. Na aba **Contato**, clique no sinal de adição do lado da palavra Contatos para abrir o modal Contatos. Neste, selecione os contatos que receberão as notificações.  
6. Clique em **Salvar**.

:::(warning) (Atenção!)
Para utilizar a opção de envio de notificações via SMS, é necessário ter a integração com o Zenvia devidamente configurada. Sem essa configuração, não serão enviadas as notificações por SMS. Para saber como configurar a integração com o Zenvia, acesse o documento [Integração com serviço de SMS](/v3-33/docs/pt/administration-integration-with-sms-service).
:::

## Como alterar uma notificação

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações \> Configurações**.  
3. Na listagem **Cadastro de notificações**, serão apresentadas as notificações que estão cadastradas no senhasegura.  
4. Na coluna **Ação**, clique em **Alterar**, representado pelo ícone do lápis e papel.  
5. A janela **Cadastrar** notificação será aberta em modo de edição.  
6. Altere as informações necessárias e clique em **Salvar**.

## Como inativar uma notificação

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações \> Configurações**.  
3. Na listagem **Cadastro de notificações**, serão apresentadas as notificações que estão cadastradas no senhasegura.  
4. Identifique a notificação que deseja inativar e, na coluna **Ação**, clique no ícone representado pelos três pontos verticais e selecione **Inativar configuração**.  
5. No modal de confirmação, clique em **Sim**.

## Como reativar uma notificação

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações \> Configurações**.  
3. Na listagem **Cadastro de notificações**, serão apresentadas as notificações que estão cadastradas no senhasegura.  
4. No menu de busca, na barra superior, clique no menu suspenso **Ativo** e selecione a opção **Não**.  
5. Clique em **Filtrar**.  
6. A listagem irá filtrar as notificações cadastradas que estão inativadas. Elas serão mostradas com o texto na cor vermelha.  
7. Identifique a notificação que deseja reativar e, na coluna **Ação**, clique no ícone representado pelos três pontos verticais e selecione **Ativar configuração**.  
8. No modal de confirmação, clique em **Sim**.

## Como customizar uma notificação

Alguns dos textos que constam nos modelos de notificações usados pelo senhasegura podem ser modificados de acordo com a sua necessidade. Para realizar esse tipo de alteração, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações \> Textos**  
3. No relatório **Tipos de notificações** identifique a notificação que deseja customizar.  
4. Na coluna **Ação** clique **Alterar texto**, representado pelo ícone do lápis e papel.  
5. A janela **Cadastro de texto de notificações** será aberta.

### Alterar o texto de uma notificação

Na janela **Cadastro de texto de notificações** você tem as seguintes opções:

1. **Tipo de texto**: informa o nome do tipo de notificação que está sendo alterada. Por exemplo: `Solicitação Criada: Aprovador`  
2. **Ativo**: selecione se você deseja que o novo texto seja utilizado. Por padrão é marcado como Sim.  
3. **Assunto**: expressão para o assunto do e-mail que será mandado na notificação. Por exemplo: `Access request - [#DEVICE_HOSTNAME#] ([#DEVICE_IP#])`  
4. **Texto do E-mail**: editor de texto rico que permite a edição do texto padrão do E-mail de notificação.

Este texto deverá conter as tags do E-mail.

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

As TAGs utilizadas no senhasegura são:

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