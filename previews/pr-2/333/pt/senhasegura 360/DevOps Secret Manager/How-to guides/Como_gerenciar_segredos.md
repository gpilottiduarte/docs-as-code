# Como gerenciar segredos

## Cadastrar um segredo

Para cadastrar um segredo, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **DevOps Secret Manager**.
2. No menu lateral, seelcione **Gestão de Segredos > Segredos**.
3. Na barra superior, clique no botão **Exibir ações**, representado pelos três pontos verticais, e selecione **+ Novo segredo** no menu suspenso.

Na janela **Configuração da secret**, preencha os dados do seu segredo, de acordo com as instruções abaixo:

### Na aba Configurações:

1. **Nome**: nome da secret para gestão dentro do senhasegura.
2. **Identidade**: identificador do segredo. É através deste identificador que as aplicações conseguiram encontrar o arquivo ou variável que será criado.
3. **Ativo**: indica se o segredo está disponível para ser utilizado pelas aplicações. Por padrão está marcado como **Sim**.
4. **Ambiente**: ambiente do segredo.
5. **Engine**: engine a ser utilizada. A engine padrão é Generic.
6. **Data de expiração**: data em que o segredo será automaticamente inativado.
7. **Tags**: definidas pelo usuário para segregação de dados e filtros internos.
8. **Descrição**: descrição de uso do segredo.

### Na aba Credenciais em nuvem:

1. Clique no botão representado pelo símbolo de soma, ao lado da palavra **Credenciais**, para adicionar uma credencial em nuvem.
2. No modal **Credenciais**, selecione as credenciais em nuvem que farão parte do segredo e clique em **Adicionar**.

:::(info) (Info)
Estas credenciais são as oriundas do Cloud IAM.
:::

### Na aba Credenciais:

1. Clique no botão representado pelo símbolo de soma, ao lado da palavra **Credenciais**, para adicionar uma credencial.
2. No modal **Credenciais**, selecione as credenciais que farão parte do segredo e clique em **Adicionar**.

:::(info) (Info)
Estas credenciais são as oriundas do PAM Core.
:::

### Na aba Credenciais efêmeras:

1. Clique no botão representado pelo símbolo de soma, ao lado da palavra **Credenciais**, para adicionar uma credencial efêmera.
2. No modal **Credenciais efêmeras**, selecione as credenciais efêmeras que farão parte do segredo e clique em **Adicionar**.

### Na aba Chave/Valor:

1. Clique no botão representado pelo símbolo de soma, ao lado das palavras **Chave/Valor**, para adicionar um par chave/valor.
2. Ao clicar no botão de soma, dois campos aparecem na listagem abaixo:
   1. **Chave**: preencha com o valor do nome da chave.
   2. **Valor**: preencha com o valor da chave.

### Na aba Auto-renovação:

Nessa aba, você deverá estipular um tempo para renovação de segredo para:

1. **Credenciais**.
2. **Credenciais efêmeras.**
3. **Credenciais em nuvem.**

Você gerencia esses intervalos de tempo através dos parâmetros: **Ativo e Renovar a cada x minutos.**

Com tudo pronto, clique em **Salvar**.

### Importante
* Quando a informação expira ela é deletada. Contudo, algumas informações, como as chaves de acesso, não poderão ser recuperadas.
* Apenas os usuários que fazem parte do grupo de acesso PAM Core ou Cloud IAM, podem adicionar credenciais cloud e credenciais para cadastro de um segredo.
* As Credenciais em nuvem são gerenciadas pelo módulo Cloud IAM.
* As Credenciais são gerenciadas pelo PAM Core. Para obter mais informações sobre como criar e gerenciar credenciais, consulte a documentação sobre credenciais.
* As **Credenciais efêmeras** são provisionadas pelo senhasegura diretamente no destino por meio do **Provisionamento Dinâmico**. Após a rotação da credencial, o **DSM** não excluirá as informações antigas de **Credenciais em nuvem** e **Credenciais Efêmeras**.

## Visualizar um segredo

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **DevOps Secret Manager**.
2. No menu lateral, selecione **Gestão de segredos > Segredos**.
3. Na listagem, identifique o segredo que você deseja visualizar e, na coluna **Ação**, clique no ícone representado pelos três pontos verticais e selecione **Detalhes** no menu suspenso.

Na janela **Secret** você poderá visualizar todas as informações do segredo.

## Visualizar as versões de um segredo

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu,** representado pelos nove quadrados, e selecione **DevOps Secret Manager.**
2. No menu lateral, selecione **Gestão de segredos > Segredos.**
3. Na listagem, identifique o segredo que você deseja visualizar e, na coluna **Ação**, clique no ícone representado pelos três pontos verticais e selecione **Visualizar versões** no menu suspenso.

Na janela **Secret history** você poderá visualizar as informações e versões do segredo através dos seguintes campos:

1. **Nome**: nome do segredo.
2. **Engine**: engine do segredo. Padrão: Generic.
3. **Identidade**: identidade do segredo.
4. Na seção **Versões**:
   1. **Versão**: número da versão do segredo.
   2. **Data**: data e hora em que esta versão do segredo foi criada.
   3. **Ações**:
      1. **Visualizar**: representado pelo ícone de lupa, abre o formulário de visualização de segredos.
      2. **Compare**: representado pelo ícone duas setas em sentido oposto, abre a janela **Comparação de versões**.

## Editar um segredo

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **DevOps Secret Manager**.
2. No menu lateral, selecione **Gestão de segredos > Segredos**.
3. Na listagem, identifique o segredo que você deseja visualizar e, na coluna **Ação** selecione **Atualização**, representada pelo ícone do lápis e papel.
4. Na janela **Configuração da secret**, altere as informações que você precisa alterar e clique em **Salvar**.

:::(info) (Info)
O formulário de edição de segredos é o mesmo formulário que temos no cadastro de segredos.
:::

## Comparar duas versões de um segredo

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **DevOps Secret Manager**.
2. No menu lateral, selecione **Gestão de segredos > Segredos**.
3. Na listagem, identifique o segredo que você deseja visualizar e, na coluna **Ação**, clique no ícone representado pelos três pontos verticais e selecione **Visualizar versões** no menu suspenso.
4. Na janela **Secret history** clique em **Compare**, representado pelo ícone duas setas em sentido oposto.

### Na janela Comparação de versões.

1. No menu suspenso **From**, selecione a versão inicial que você deseja usar para comparação.
2. No menu suspenso **To**, selecione a versão que vai ser comparada com a versão selecionada em **From**.
3. Não é possível comparar uma versão menor com uma versão maior, ou seja, o número da versão em **From** deve ser sempre maior do que o número da versão em **To**.
4. Depois de selecionadas as versões a serem comparadas, clique em **Compare**.

As alterações serão mostradas de acordo com os campos que foram alterados. A visualização das mudanças entre as versões segue o padrão que temos nos programas de *DIFF*, com as inclusões sendo mostradas em verde e as exclusões sendo mostradas em vermelho.

## Mudar chaves de acesso de um segredo

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **DevOps Secret Manager.**
2. No menu lateral, selecione **Gestão de segredos > Segredos**.
3. Na listagem, identifique o segredo que você deseja visualizar e, na coluna **Ação**, clique no ícone representado pelos três pontos verticais e selecione **Rotacionar chaves de acesso** no menu suspenso.

Uma janela pop-up irá indicar que o processo de rotacionamento de chaves de acesso daquele segredo está em andamento. O processo é feito de forma automática.

## Visualizar histórico de erros de um segredo

É possível visualizar o histórico de erros de um segredo acessando **Grid Menu > DevOps Secret Manager > Gestão de Segredos > Segredos**.

Para visualizar o histórico de erros, selecione um segredo na listagem e, na coluna **Ação**, clique no ícone representado pelos três pontos verticais, e selecione a opção de **Visualizar histórico de erros**.

:::(warning) (Cuidado)
* A opção para visualizar o histórico de erros será mostrada somente quando ocorrer um erro no segredo.
* Para visualizar os segredos, você precisa fazer parte de um grupo de acesso que tenha permissão para gerenciar segredos, caso contrário, você poderá registrar um segredo, mas não poderá visualizá-lo nos filtros e nos dashboards.
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).