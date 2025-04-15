# Como gerenciar grupos de acesso

## Criar um grupo de acesso

:::(info) (Info)
Os usuários sincronizados terão suas permissões substituídas se a sincronização estiver ativada. Verifique seus grupos de sincronização para alterações.
:::

Para criar um grupo de acesso no DevOps Secret Manager, siga as instruções abaixo:

1. No Segura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **DevOps Secret Manager**.
2. No menu lateral, selecione **Controle de Acesso > Grupos de acesso.**
3. Você será direcionado para a página com a listagem de todos os grupos cadastrados no Segura.
4. Na barra superior clique em **Exibir Ações**, representado pelo ícone dos três pontos verticais, e selecione **Novo Grupo.**

Na janela **Cadastro de grupo de acesso**, preencha conforme a seguir:

1. **Nome do grupo de acesso**: preencha com um nome para o grupo de acesso. Este será o nome que irá identificar o grupo de acesso no Segura.
2. **Ativo**: selecione se você deseja que o grupo seja criado já ativo ou não. Por padrão vem preenchido como Sim.
3. **Descrição**: informe uma breve descrição sobre o grupo de acesso.

### Aba Configurações

1. Na seção **Configuração de visualização de secrets**, preencha as seguintes informações:
   1. **Usuários podem visualizar secrets**: caixa de seleção, marque para permitir que os usuário sejam capazes de visualizar os secrets cadastrados no Segura.
   2. **Requer justificativa:** caixa de seleção, marque para exigir que o usuário justifique a visualização de um secret cadastrado.
   3. **Requer aprovação:** caixa de seleção, marque para exigir que a visualização do secret necessite de uma aprovação. Esta aprovação precisa ser feita por um usuário com o papel de usuário aprovador.
   4. **Aprovações necessárias:** indique a quantidade de aprovações necessárias para o usuário poder visualizar o secret. Por padrão o valor é **1**.
   5. **Reprovações necessárias**  **para cancelar:** indique a quantidade de reprovações para cancelar a solicitação do usuário. Por padrão o valor é **1**.
   6. **Aprovação em níveis:** caixa de seleção, indique se deseja que o usuário necessite de aprovações de diferentes níveis.
   7. **Obrigatório especificar código de governança ao justificar?**: marque se você deseja que o usuário precise de um código de governança preenchido no pedido de justificativa. Por padrão é marcado como **Não**.
   8. Sempre adicionar o gestor do usuário aos aprovadores?: indique se você deseja adicionar automaticamente o gestor do usuário ao grupo de aprovadores da justificativa dele. Por padrão é marcado como Não.
      1. **Nota**: o responsável pelo departamento é o gestor do usuário.

### Aba Critérios

1. Na seção **Aplicação** , preencha com as seguintes informações:
   1. **Nome das aplicações**: indique quais aplicações que este grupo de acesso terá permissão. Os nomes devem ser separados por vírgula.
   2. **Tags das aplicações:** indique quais tags da aplicação que este grupo de acesso terá permissão. As tags devem ser separadas por vírgula.
   3. **Line of business**: caixa de seleção com as linhas de negócio as quais aplicações indicadas fazem parte.
      1. Atente-se para o seguinte comportamento dos grupos de acesso: ao configurar as opções de filtragem para `Vazio` em **Line of business** e **Tipo**, os usuários membros do grupo de acesso visualizarão exclusivamente aplicações que não possuem dados nesses campos. Assim, selecionar a opção `Vazio` resultará na exibição de aplicações com campos **Line of business** e **Tipos** não preenchidos. Por outro lado, se a opção `Vazio` não for selecionada, as aplicações com esses campos vazios não aparecerão nos resultados.
   4. **Tipo**: caixa de seleção com os tipos de aplicações as quais as aplicações indicadas fazem parte.

:::(info) (Info)
Você pode utilizar o coringa `[#username#]` que será substituído pelo nome do usuário durante o processamento dos acessos
:::

2. Na seção **Autorizações**, preencha com as seguintes informações:
   1. **Sistemas**: indique os sistemas que este grupo de acesso terá permissão. Os nomes dos sistemas devem estar separados por vírgula.
   2. **Ambientes**: indique os ambientes que este grupo de acesso terá permissão. Os nomes dos ambientes devem estar separados por vírgulas.

:::(info) (Info)
Serão concedidos acessos apenas a autorização que pertençam a aplicações concedidas pelas regras de aplicação deste grupo de acesso.
:::

3. Na seção **Segredos**, preencha com as seguintes informações:
   1. **Nome das secrets:** indique os segredos que o grupo de acesso terá permissão. Os segredos devem ser separados por vírgula.
   2. **Ambientes da secret:** indique os ambientes que os segredos terão permissão. Os nomes dos ambientes dos segredos devem ser separados por vírgula.
   3. **Tags da secrets (comma-separated):** indique quais tags da secret que este grupo de acesso terá permissão. As tags devem ser separadas por vírgula.

:::(info) (Info)
Serão concedidos acessos apenas a secrets que:
* Não pertençam a nenhuma autorização.
* Pertençam a autorização concedida pelas regras de autorização deste grupo de acesso.
:::

### Aba Usuários

Para adicionar um usuário ao grupo de acesso, clique no ícone de soma ao lado da palavra **Usuários**. Assim você irá abrir o modal **Usuários** do sistema que mostrará uma listagem de todos os usuários que estão cadastrados no Segura. Escolha os usuários que farão parte do grupo de acesso selecionando a caixa de seleção ao lado do nome do usuário e clique em **Adicionar**.

:::(info) (Info)
Usuários que estão inseridos em mais de um grupo de acesso terão as configurações aplicadas do grupo mais restritivo.
:::

### Aba Aprovadores

Para adicionar um usuário  aprovador ao grupo de acesso, clique no ícone de soma ao lado da palavra **Aprovadores**. Assim você irá abrir o modal **Aprovadores** que mostrará uma listagem de todos os usuários que estão cadastrados no Segura. Escolha os usuários que farão parte do grupo de usuários aprovadores selecionando o caixa de seleção ao lado do nome do usuário e clique em Adicionar.

:::(warning) (Cuidado)
Para que o usuário aprovador tenha acesso à tela de aprovação de fluxo, é necessário que ele tenha o perfil mínimo PAM Operator.
:::

Para finalizar a criação do grupo de acesso, clique em **Salvar**.

## Atualizar um grupo de acesso

Para atualizar um grupo de acesso já cadastrado no Segura, siga os passos abaixo:

1. No Segura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **DevOps Secret Manager.**
2. No menu lateral, selecione **Controle de Acesso > Grupos de acesso.**
3. Você será direcionado para a página com a listagem de todos os grupos cadastrados no Segura.
4. Identifique o grupo de acesso que você deseja atualizar e, na coluna **Ação**, clique em **Atualização**, representado pelo ícone do lápis e papel.

A janela de **Cadastro de grupos de acesso** abrirá em modo de edição e você poderá editar os dados do grupo de acesso.

## Reprocessar os grupos de acesso

Eventualmente, as informações do grupo podem não estar visíveis para os usuários ou exibidas incorretamente devido a problemas de configuração. O recurso **Reprocessar grupos** pode reprocessar todas as informações do grupo nesses casos. Assim, se alguma informação não estiver visível para você, pode ser devido a algum problema de processamento inicial, que pode ser corrigido executando um reprocessamento.

Para utilizar esse recurso, siga os passos abaixo:

1. No Segura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **DevOps Secret Manager.**
2. No menu lateral, selecione **Controle de acesso > Grupos de acesso.**
3. Na listagem dos grupos, no canto inferior direito, clique em **Reprocessar os grupos.**
4. No modal **Confirmação** clique em **Sim**.
5. Uma janela com a mensagem de sucesso irá aparecer após o reprocessamento ter sido concluído.

:::(error) (Alerta)
Ao reprocessar os grupos alguns usuários podem perder acesso às entidades do DSM.
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).