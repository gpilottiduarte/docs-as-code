# Como aprovar requisições do tipo bulk actions

## Requisitos

- Para que um usuário possa ser um usuário aprovador, ele deve ter os seguintes privilégios: System Administrator, PAM Administrator e PAM operator.

:::(warning) (Cuidado)
O usuário deve realizar alterações somente nos dispositivos que possui acesso.
:::

## Como adicionar um novo usuário aprovador

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelos nove quadrados, e selecione **Configurações.**
2. No menu lateral, selecione **Parâmetros do sistema > Aprovadores**.
3. Na barra superior, clique em Exibir ações, identificado pelos três pontos verticais, e selecione **+ Novo**.
4. No formulário Aprovadores, preencha os seguintes campos:
    1. **Módulo**: selecione o módulo que o aprovador terá acesso.
    2. **Aprovadores**: clique em “+”, -identificado pelo ícone de soma ao lado da palavra **Aprovadores.**
    3. **No modal Aprovadores selecione aqueles usuários que você deseja cadastrar como aprovadores e clique em Adicionar.**
5. Clique em **Salvar**.

## Como aprovar uma solicitação de “Bulk Action”

:::(Info) (Info)
Para que uma solicitação seja aprovada, o usuário em questão deve ter o papel de usuário aprovador.
:::

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelos nove quadrados, e selecione **Relatórios.**
2. No menu lateral, selecione **Eventos > Operações em lote**.
3. Na lista que foi carregada, identifique a operação que deseja analisar.
4. Na coluna **Ação** você tem duas opções:
    1. **Detalhes da solicitação**: identificado pelo ícone da carteira de identidade. Direciona para formulário **Detalhes da solicitação**. Nesse formulário o usuário aprovador pode **Aprovar** ou **Reprovar** a solicitação.
    2. **Tarefas**: identificado pelo ícone do arquivo. Direciona para o formulário **Tarefas de operação em lote**. Nesse formulário é possível visualizar detalhes da tarefa. Para isso, na coluna **Ação**, clique em **Tarefas**, identificado pelo ícone de lupa,

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).