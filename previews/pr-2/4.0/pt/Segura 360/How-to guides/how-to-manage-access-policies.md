# Como gerenciar políticas de acesso

Este documento fornece informações sobre como gerenciar políticas de acesso. Políticas de acesso estabelecem diretrizes fundamentais para garantir a segurança e o controle adequado dos recursos, sistemas e informações dentro do **DevOps Secret Manager**, compondo uma parte fundamental da segurança das suas secrets.

## Criar uma política de acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **DevOps Secret Manager**.  
2. No menu lateral, selecione **Controle de acesso \> Políticas de acesso.**  
3. Na tela **Políticas de acesso** clique no botão de ações e selecione **Adicionar** no menu suspenso.

Você será direcionado para a tela **Adicionar política de acesso**, onde deverá preencher os seguintes campos:

### Aba Geral

1. **Nome da política de acesso**: define um nome para a sua nova política de acesso.  
2. **Status**: defina se a política de acesso estará ativa ou inativa.  
3. **Descrição**: defina uma descrição para a sua nova política de acesso.  
4. Clique em **Continuar**.

### Aba Usuários

:::(warning) (Atenção)  
Usuários que estão inseridos em mais de uma política de acesso terão as configurações aplicadas da política mais restritiva.  
:::

1. Clique em **Adicionar** para abrir o modal **Usuários**.  
2. Selecione os usuários que você deseja adicionar à nova política de acesso.  
   1. Você pode filtrar os usuários utilizando o campo de busca.  
   2. Você pode selecionar mais de um usuário ao mesmo tempo.  
3. Clique em **Adicionar**.  
4. Os usuários aparecerão na tabela **Usuários**.   
5. Verifique os dados e clique em **Continuar**.

### Aba Secrets

1. **Usuários podem visualizar secrets**: selecione para que os usuários desta nova política de acesso sejam capazes de visualizar os *secrets* já cadastrados na aplicação.  
2. **Requer justificativa**: selecione para que os usuários desta nova política de acesso precisam enviar uma justificativa para acessar ou visualizar os *secrets*.  
3. **Requer aprovação**: selecione para que os usuários desta nova política de acesso, além de precisarem enviar uma justificativa para acessar ou visualizar os *secrets*, precisem também de uma aprovação de um usuário aprovador.  
4. **Aprovações necessárias**: indique quantas aprovações são necessárias para que o usuários desta nova política de acesso possa interagir com a *secret*.  
5. **Reprovações necessárias**: indique quantas reprovações são necessárias para que o usuário desta nova política de acesso seja impedido de interagir com a *secret*.  
6. **Aprovação em níveis**: indique se o usuário desta nova política de acesso necessitará de uma aprovação em níveis para interagir com a *secret*.  
7. Clique em **Continuar**.

### Aba Aprovadores

:::(warning) (Atenção)  
O usuário aprovador deve ter no mínimo o perfil de Operador PAM para ter acesso à tela de aprovação de fluxo  
:::

1. Clique em **Adicionar** para abrir o modal **Usuários**.  
2. Selecione os usuários que você deseja adicionar como aprovadores dessa nova política de acesso.  
   1. Você pode filtrar os usuários utilizando o campo de busca.  
   2. Você pode selecionar mais de um usuário ao mesmo tempo.  
3. Clique em **Adicionar**.  
4. Os usuários aparecerão na tabela **Usuários**.  
5. Na tabela **Usuários**, selecione o nível de cada usuário aprovador através do menu suspenso **Nível**.  
   1. Um usuário aprovador pode ser de nível 1, 2 ou 3\.  
   2. Um usuário pode ter apenas apenas um nível.  
   3. Cada nível pode ter mais de um usuário cadastrado.  
6. **Obrigatório especificar código de governança ao justificar?**: indique se um código de governança será obrigatório em toda a justificativa dessa nova política de acesso.  
7. **Sempre adicionar o gestor do usuário aos aprovadores?:** indique se o gestor do usuário sempre será um usuário aprovador dessa nova política de acesso.  
8. Verifique os dados e clique em **Continuar**.

### Aba Filters

Nesta sessão você irá determinar os filtros da sua nova política de acesso.

#### Aplicação

1. **Line of business**: caixa de seleção com as linhas de negócio as quais aplicações indicadas fazem parte.  
2. **Application types**: caixa de seleção com os tipos de aplicações dos quais as aplicações indicadas fazem parte.  
3. **Nome das aplicações**: indique quais aplicações que esta política de acesso terá permissão. Os nomes devem ser separados por vírgula.  
4. **Tags das aplicações**: indique quais *tags* da aplicação que esta política de acesso terá permissão. As *tags* devem ser separadas por vírgula.

:::(error) (Atenção)  
Ao configurar as opções de filtragem para **Vazio** em **Line of business** e **Application Types**, os usuários membros da política de acesso visualizarão exclusivamente aplicações que não possuem dados nesses campos. Assim, selecionar a opção **Vazio** resultará na exibição de aplicações com campos **Line of business** e **Tipos** não preenchidos. Por outro lado, se a opção **Vazio** não for selecionada, as aplicações com esses campos vazios não aparecerão nos resultados.  
:::

#### Autorizações

:::(info) (Info)  
Serão concedidos acessos apenas a autorização que pertençam a aplicações concedidas pelas regras de aplicação desta política de acesso.  
:::

1. **Sistemas**: indique os sistemas que esta política de acesso terá permissão. Os nomes dos sistemas devem estar separados por vírgula.  
2. **Ambientes**: indique os ambientes que esta política de acesso terá permissão. Os nomes dos ambientes devem estar separados por vírgulas.  
3. Clique em **Continuar.**

### Aba Critérios

:::(info) (Info)  
Você pode utilizar o coringa `[#username#]` que será substituído pelo nome do usuário durante o processamento dos acessos.  
:::

1. **Nome das secrets**: indique quais *secrets* esta política de acesso terá permissão. Os nomes devem ser separados por vírgula.  
2. **Ambientes das secrets:** indique os ambientes das *secrets* que esta política de acesso terá permissão. Os nomes dos ambientes devem estar separados por vírgulas.  
3. **Tags das secrets**: indique quais as *tags* das *secrets* que esta política de acesso terá permissão. As *tags* devem ser separadas por vírgula.  
4. Clique em **Continuar**.

:::(warning) (Atenção)  
Serão concedidos acessos apenas a *secrets* que:

* Não possuam nenhuma autorização.
* Pertencem à autorização concedida pelas regras de autorização desta política de acesso.

:::

### Aba Revisão

Revise atentamente as informações da sua nova política de acesso. Caso tudo esteja correto, clique em **Salvar**. Qualquer informação pode ser corrigida clicando em **Voltar** ou navegando pelo sistema de abas na parte superior do formulário.