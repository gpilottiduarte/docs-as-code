# Como solicitar um acesso

Este documento fornece informações sobre o passo a passo para realizar uma requisição de acesso à senha de uma credencial.

## Requisitar o acesso
Existem dois tipo de solicitações de acesso e essa escolha é feita pelo administrador durante a configuração de Políticas de acesso:

* **Requer justificativa para visualizar uma senha**:  usuário solicita o acesso, escreve a justificativa e o acesso é concedido de imediato. Os aprovadores apenas receberão um email com a justificativa dada pelo usuário, mas nenhuma ação é necessária.
* **Requer aprovação para visualizar uma senha**: o usuário solicita o acesso, escreve sua justificativa, mas só poderá acessar após a solicitação passar por aprovação. Neste caso, o aprovador precisa realizar uma ação para que o usuário consiga acessar a sessão.

:::(info) (**Info**)
Caso precise de aprovação, acesse o documento [Como aprovar, desaprovar ou revogar uma requisição de acesso](/v4/docs/pt/pam-session-how-to-approve-disapprove-or-revoke-an-access-request), para saber como realizar essa ação.
:::

Para solicitar qualquer um dos tipos de acesso, siga os passos abaixo:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.
2. No menu lateral selecione **Credenciais** >  **Todas credenciais**.
3. Na lista, selecione a credencial à qual deseja solicitar o acesso.
4. Na coluna **Ações**, clique no **botão Ações** e selecione **Visualizar**.
5. Na tela que se abre, chamada **Justificar**, preencha os campos obrigatórios, identificados com o asterisco:
    1. **Justificativa***: descreva o porquê necessita do acesso.
    2. **Motivo***: escolha dentre as opções, o motivo para o acesso.
    3. **Governance Code** 
    4. **Início Acesso***
    5. **Fim Acesso***
    :::(info) (**Info**)
    Os campos **início** e **fim** do acesso só estarão disponíveis para a opção **Requer aprovação para visualizar uma senha**. 
    O campo **Fim Acesso** não pode ter o valor maior do que **1 (uma)** hora do que foi escolhido no campo **Início Acesso**.
    :::
6. Clique em **Salvar**.

Se for uma solicitação com a configuração de **Requer justificativa para visualizar uma senha**, o usuário conseguirá ter o acesso imediato e um email com a justificativa dada pelo usuário será enviado ao aprovador, somente para que o mesmo esteja ciente do acesso.

Para os casos de **Requer aprovação para visualizar uma senha**, a mensagem **"Solicitação Enviada. Você precisa de uma aprovação para visualizar a senha dessa credencial. Foi enviada uma solicitação aos aprovadores será exibida"**. E o acesso só será possível após a ação do aprovador.

:::(info) (**Info**)
Caso o usuário tente selecionar **Visualizar** novamente e a aprovação ainda não tenha sido realizada, a mensagem **“Acesso Negado. A solicitação de acesso ainda não foi aprovada.”** será exibida.
:::

Para acompanhar o status de suas solicitações, acesse o relatório [Minhas solicitações de acesso](/v4/docs/pt/pam-session-my-access-requests).

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.