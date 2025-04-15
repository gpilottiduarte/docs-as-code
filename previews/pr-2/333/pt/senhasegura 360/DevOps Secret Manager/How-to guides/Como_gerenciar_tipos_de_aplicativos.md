# Como gerenciar tipos de aplicativos

## Como cadastrar um tipo de aplicativo

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelo ícone dos nove quadrados, e selecione **DevOps Secret Manager**.
2. No menu lateral, selecione **Configurações > Tipos de aplicativo**.
3. Na barra de ferramentas, na porção superior da tela de listagem, clique em **Exibir Ações**, representado pelo ícone de três pontos verticais, e selecione **+ Nova** no menu suspenso.
4. Na janela **Tipo de aplicativo**, preencha as informações:
    1. **Nome**: indique um nome para o seu tipo de aplicativo.
    2. **Ativo**: selecione se você deseja que o seu tipo de aplicativo seja criado como ativo ou não. Por padrão, será selecionado o valor **Sim**.
    3. **Descrição**: indique uma descrição para o tipo de aplicativo cadastrado. Essa descrição será útil para entender sobre o que se trata o tipo de aplicativo cadastrado.
5. Clique em **Salvar**.

## Como alterar um tipo de aplicativo

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelo ícone dos nove quadrados, e selecione **DevOps Secret Manager**.
2. No menu lateral, selecione **Configurações > Tipos de aplicativos**.
3. Na tela de listagem dos tipos de aplicativo, na coluna **Ação**, clique em **Alterar**, representado pelo ícone do lápis e papel.
4. A janela **Tipo de aplicativo** será aberta em modo de edição, modifique as informações de acordo com a sua necessidade.
5. Clique em **Salvar**.

## Como inativar um tipo de aplicativo

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelo ícone dos nove quadrados, e selecione **DevOps Secret Manager**.
2. No menu lateral, selecione **Configurações > Tipos de aplicativos**.
3. Na tela de listagem dos tipos de aplicativo, na coluna **Ação**, clique em **Alterar**, representado pelo ícone do lápis e papel.
4. A janela **Tipo de aplicativo** será aberta em modo de edição, modifique o campo **Ativo**, marcando-o como **Não**.

:::(info) (Info)
Quando inativado, o tipo de aplicativo se torna indisponível em todas as aplicações e não aparecerá mais nas aplicações que estavam cadastradas com ele anteriormente.
Note que inativar um tipo de aplicativo pode afetar as configurações dos grupos de acesso. Por exemplo, a depender da configuração realizada usuários podem perder/ganhar acesso.
:::

## Como reativar um tipo de aplicativo

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelo ícone dos nove quadrados, e selecione **DevOps Secret Manager**.
2. No menu lateral, selecione **Configurações > Tipos de aplicativos**.
3. Nos campos de busca, selecione **Não** no menu suspenso **Ativo** e clique na lupa para filtrar pelos tipos de aplicativo que estão inativos.
4. Na tela de listagem dos tipos de aplicativo, na coluna **Ação**, clique em **Alterar**, representado pelo ícone do lápis e papel.
5. A janela **Tipo de aplicativo** será aberta em modo de edição, modifique o campo **Ativo**, marcando-o como **Sim**.

:::(warning) (Importante)
O tipo de aplicativo reativado não será adicionado novamente às aplicações as quais ele estava atrelado anteriormente. Assim, se o usuário inativar um tipo de aplicativo, este perde relação com aplicação, e ao reativar, essa relação não será refeita automaticamente.
:::

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).