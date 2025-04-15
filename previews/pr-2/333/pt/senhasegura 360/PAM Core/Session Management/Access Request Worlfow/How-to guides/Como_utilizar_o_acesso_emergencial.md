# Como utilizar o acesso emergencial

Neste documento, você encontra um guia passo a passo sobre como utilizar o acesso emergencial à senha de uma credencial.

É um caso especial em que o usuário pode pular o processo de aprovação se houver a necessidade de uso emergencial imediato da credencial. 
Quando o grupo de acesso permite que o solicitante faça uso deste recurso, será apresentada uma tela de acesso de emergência logo após o pedido de acesso.

:::(info) (**Info**)
Assim que o usuário pedir o acesso de emergência, o senhasegura enviará a todos os aprovadores as informações que o usuário teve acesso com antecedência. O pedido de acesso será marcado com o **uso de acesso emergencial**.
:::

---
## Solicitar o acesso emergencial

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral selecione **Credenciais** >  **Todas**.
3. Na lista, selecione a credencial à qual deseja solicitar o acesso.
4. Na coluna **Ação**, clique no ícone representado pela **chave**.
5. Na tela **Justificar**, preencha os campos obrigatórios, identificados com o asterisco:
    1. **Justificativa***: descreva o porquê necessita do acesso.
    2. **Motivo***: escolha dentre as opções, o motivo para o acesso.
    3. **Governance Code**
    4. **Início Acesso***
    5. **Fim Acesso***
    :::(info) (**Info**)
    Os campos **Início** e **Fim** do acesso só estarão disponíveis para a opção Requer aprovação para visualizar uma senha. 
    O campo **Fim Acesso** não pode ter o valor maior do que **1 (uma)** hora do que foi escolhido no campo **Início Acesso**.
    :::
6. Clique em **Justificar**.
7. A mensagem **"Solicitação Enviada. Você precisa de uma aprovação para visualizar a senha dessa credencial. Foi enviada uma solicitação aos aprovadores"** será exibida.
8. Clique no botão **Utilizar acesso emergencial**.
9. Na tela **Acesso emergencial**, escreva uma justificativa para utilizar o acesso emergencial.
10. Clique em **Utilizar Acesso Emergencial**.
11. A tela de **Exibição e transferência de senha segura** irá se abrir com o acesso para a visualização da senha.

O acesso ficará disponível pelo tempo estipulado nos campos **Início Acesso** e **Fim Acesso**, ou até que este acesso seja revogado pelo usuário aprovador.

Para acompanhar o status de suas solicitações, acesse o relatório Minhas solicitações.

---
## Próximos passos:
[Minhas solicitações](/v3-33/docs/pt/pam-session-my-requests)
[Solicitações](/v3-33/docs/pt/pam-session-requests)

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.