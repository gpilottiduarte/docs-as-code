# Como gerenciar as configurações de API

Você pode gerenciar o DevOps Secret Manager através da sua API. Para utilizar a API do DSM, você precisa autorizar as credenciais que deseja utilizar, para isso, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelo ícone de nove quadrados, e selecione **DevOps Secret Manager.**
2. No menu lateral, selecione **Controle de acesso > Configurações de API.**
3. O relatório que será aberto conterá todas as credenciais e aplicações com acesso à API do DSM.

### Aba Credenciais

1. **A2A Aplicação**:
   1. Clique no botão representado pelo símbolo de soma ao lado da palavra **A2A Aplicação.**
   2. No menu suspenso, selecione a aplicação que você deseja permitir o acesso (perceba que as aplicações que aparecem nesse menu são as mesmas aplicações que você cadastrou no módulo **A2A**).
      1. Você só pode incluir uma aplicação por vez.
      2. Para deletar uma aplicação, clique no ícone de lixeira no lado esquerdo do menu suspenso.
2. **Credenciais**:
3. Clique no botão representado pelo símbolo de soma ao lado da palavra **Credenciais**.
4. No modal **Credenciais**, selecione as credenciais que você deseja que tenham acesso à API do DSM e clique em **Adicionar**. Para sair do modal, clique em **Cancelar**.

:::(info) (Info)
* Credenciais PAM criadas a partir das **aplicações A2A** definidas no campo **A2A Aplicação** serão liberadas para gerenciamento nas APIs do DSM.
* Credenciais definidas no campo **Credenciais** serão liberadas para gerenciamento nas APIs do DSM
:::

### Aba Credenciais em nuvem

1. Clique no botão representado pelo símbolo de soma ao lado da palavra **Usuário/Conta de serviço**.
2. Um menu suspenso aparecerá. Clique no menu suspenso e escolha a credencial em nuvem que você deseja permitir o acesso à API do DSM.
   1. É possível adicionar mais de uma credencial em nuvem, para isso clique no botão representado pelo símbolo de soma e escolha outra credencial no novo menu suspenso.
   2. Para apagar uma credencial, clique no ícone de lixeira do lado direito da credencial em nuvem escolhida e selecione **Sim** no modal de confirmação.
3. Clique em **Salvar**.

:::(info) (Info)
Credenciais em nuvem pertencentes aos usuários definidos no campo **Usuário/Conta de serviço** estarão disponíveis para gerenciamento nas APIs de DSM.
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).