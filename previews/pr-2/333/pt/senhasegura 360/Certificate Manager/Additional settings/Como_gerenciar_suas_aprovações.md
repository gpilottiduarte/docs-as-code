# Como gerenciar suas aprovações

Este artigo explica como aprovar solicitações de outros usuários no Certificate Manager e acompanhar o status dessas solicitações.

As ações que um usuário pode aprovar para outro usuário são:

* Visualizar as senhas do certificado
* Assinar o certificado
* Renovar o certificado
* Publicar o certificado

## Requisitos

* O usuário deve ser um **Aprovador** no grupo de acesso do Certificate Manager. 
* Um Papel com as Permissões:
    * **CertificateManager.Requests.Approval.List**
    * **CertificateManager.Requests.Approval.View**
    * **CertificateManager.Requests.Approve**

:::(Warning) (Cuidado)
Caso seu usuário pertença a outros grupos de acesso com configurações mais restritas, o sistema aplicará essas regras e você não poderá ver as solicitações. Certifique-se de não estar incluído em um desses grupos.
:::
***
## Aprovar uma solicitação
Para aprovar uma solicitação, siga estes passos:

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **Certificate Manager**.
2. No menu lateral, selecione **Minhas aprovações**.
3. Localize a solicitação que será aprovada.
4. Na coluna **Ação** correspondente, clique em **Aprovar** (ícone da marca de seleção).
    :::(Info) (Info)
    Como alternativa, clique no ícone dos três pontos verticais e selecione **Detalhes**. Você encontrará o botão **Aprovar** na nova página aberta.
    :::
5. Clique **Sim** para confirmar a aprovação.
***
## Reprovar uma solicitação
Para reprovar uma solicitação, siga estes passos:

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **Certificate Manager**.
2. No menu lateral, selecione **Minhas aprovações**.
3. Localize a solicitação que será reprovada.
4. Na coluna **Ação** correspondente, clique no ícone dos três pontos verticais.
5. Selecione **Reprovar**. 
    :::(Info) (Info)
    Como alternativa, clique no ícone dos três pontos verticais e selecione **Detalhes**. Você encontrará o botão **Reprovar** na nova página aberta.
    :::
7. Clique **Sim** para confirmar a reprovação.
***
## Monitorar suas aprovações
Para monitorar as aprovações feitas e a fazer, siga estes passos: 

1. No menu lateral, selecione **Minhas aprovações**.
2. No campo de busca **Estado**, selecione entre as opções: *pendente*, *aprovada*, *reprovada*, *expirada* ou *cancelada*. 
    2.1 Utilize qualquer outro campo para delimitar ainda mais a busca.

Conforme os filtros aplicados, as aprovações aparecem na página principal da funcionalidade Minhas aprovações.
:::(Info) (Info)
Se estiver utilizando o senhasegura quando alguém solicita sua aprovação, uma mensagem pop-up aparecerá no canto inferior direito da tela.
:::
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
