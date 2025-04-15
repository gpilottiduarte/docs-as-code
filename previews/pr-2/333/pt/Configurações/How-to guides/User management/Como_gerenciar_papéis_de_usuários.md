# Como gerenciar papéis de usuários

Na gestão de usuários, a definição de papéis é um passo essencial para manter o ambiente organizado. Os papéis facilitam a rotina de gerenciamento de usuários, criando um conjunto pré-determinado de regras que se aplicam a todos os usuários que estiverem inseridos naquele determinado conjunto de papéis. No senhasegura, você pode definir diversos papéis, além de utilizar aqueles que já tem configurados.

## Requisitos

* Ter privilégios de *System Administrator*.

## Cadastrar novo papel

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Gestão de usuários \> Papéis**.  
3. No relatório **Papéis**, na barra superior, clique em **Exibir ações**, representado pelos três pontos verticais, e selecione **Novo** no menu suspenso.  
4. Na janela **Papéis**, preencha os seguintes campos:  
   1. Na aba **Configurações**:  
      1. **Nome**: preencha com um nome para o papel que será cadastrado.  
      2. **Ativo**: selecione Sim para criar o papel ativo no senhasegura.  
      3. **Descrição**: preencha com uma descrição que auxilie na identificação do papel.  
   2. Na aba **Permissões**:  
      1. Adicione uma permissão ao papel. Para isso, clique no símbolo de soma ao lado da palavra **Permissão**.  
      2. No modal **Permissão**, selecione as permissões que deseja adicionar ao papel. 
      
      :::(info) (Info) 
      Note que é possível filtrar as permissões utilizando as opções na barra superior. 
      :::
      
      4. Clique em **Adicionar**.  
   3. Na aba **Usuários**:  
      1. Adicione um usuário ao papel. Para isso, clique no símbolo de soma ao lado da palavra **Usuários**.  
      2. No modal **Usuários do Sistema**, selecione os usuários que deseja adicionar ao papel. Note que é possível filtrar os usuários utilizando as opções na barra superior.  
      3. Clique em **Adicionar**.  
5. Clique em **Salvar**.

## Visualizar detalhes de um papel

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Gestão de usuários \> Papéis**.  
3. No relatório **Papéis**, identifique o papel que você deseja visualizar os detalhes e, na coluna **Ação**, clique em **Detalhes**, representado pelo ícone de lupa.

A janela **Detalhes do papel** será aberta, exibindo todos os detalhes do papel em questão.

## Alterar um papel

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Gestão de usuários \> Papéis**.  
3. No relatório **Papéis**, identifique o papel que você deseja visualizar os detalhes e, na coluna **Ação**, clique nos três pontos verticais e selecione **Alterar**, representado pelo ícone do lápis e papel, no menu suspenso.

A janela **Papéis** será aberta em modo de edição. Altere as informações necessárias e clique em **Salvar**.

:::(info) (Info)
Os papéis *built-in* são imutáveis, razão pela qual os campos aparecem como protegidos.
:::

## Excluir um papel

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Gestão de usuários \> Papéis**.  
3. No relatório **Papéis**, identifique o papel que você deseja visualizar os detalhes e, na coluna **Ação**, clique nos três pontos verticais e selecione **Excluir**, representado pelo ícone da lixeira, no menu suspenso.  
4. No modal de confirmação, selecione **Sim**.

:::(info) (Info)
Perceba que nenhum papel é excluído da instância, ele fica inativado.
:::

## Reativar um papel

Uma vez que os papéis não são excluídos da instância, é possível reativá-los. Para isso, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Gestão de usuários \> Papéis**.  
3. Na barra superior, selecione **Não** no menu suspenso **Ativo** e clique em **Filtrar**. Essa ação filtrará os papéis inativos na instância.  
4. No relatório **Papéis**, identifique o papel que você deseja reativar e, na coluna **Ação**, clique nos três pontos verticais e selecione **Alterar**, representado pelo ícone do lápis e papel, no menu suspenso.  
5. Na janela **Papéis**, na aba Configurações, selecione **Sim** na opção **Ativo**.  
6. Clique em **Salvar**.

## Clonar um papel

Em algumas situações, pode ser interessante clonar um papel para fins específicos. Para clonar um papel na instância, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Gestão de usuários \> Papéis**.  
3. No relatório **Papéis**, identifique o papel que você deseja clonar e, na coluna **Ação**, clique nos três pontos verticais e selecione **Clonar**, representado pelas duas folhas de papel, no menu suspenso.

O papel será clonado sem intervenção do usuário. O papel clonar pode ser identificado pelo sufixo `(copied from #)` no seu nome. Onde `#` indica qual o ID do papel original.  

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).