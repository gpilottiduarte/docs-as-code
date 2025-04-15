# Como gerenciar uma aplicação

## Requisitos

* Registrar as suas aplicações de forma que estas tenham acesso aos secrets do DSM.

## Cadastrar uma aplicação no DevOps Secret Manager

Para cadastrar uma aplicação nova, siga os passos abaixo:

1. No senhagura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados , e selecione **DevOps Secret Manager.**
2. No menu lateral, selecione **Aplicações > Aplicações.**
3. Na tela principal, estarão listadas todas as aplicações que foram cadastradas no Segura. Para registrar uma nova aplicação, clique em **Exibir ações**, representado pelos três pontos verticais, e selecione **+ Nova** no menu suspenso.

Na janela **Configuração da aplicação**, preencha conforme os passos a seguir:

1. Na aba **Configurações**:
   1. **Nome da aplicação**: indique um nome para identificar a aplicação.
   2. **Método de autenticação**: no menu suspenso, selecione o método desejado.
   3. **Linha de negócios**: no menu suspenso selecione a linha de negócios daquela aplicação. Você pode cadastrar novas linhas de negócios dentro da instância do Segura.
   4. **Tipo de aplicação**: no menu suspenso selecione o tipo de aplicação que está sendo cadastrada. Você pode cadastrar novos tipos de aplicação dentro do Segura.
   5. **Ativo**: caixa de seleção para definir o estado da aplicação. Por padrão, a caixa de seleção é marcada como Sim.
   6. **Tags**: nessa opção você adicionar tags à sua aplicação. Elas devem ser separadas por vírgulas.
   7. **Descrição**: campo de texto para que você preencha uma descrição da aplicação.
   8. **Amazon AWS ARNs**: clique no botão identificado pelo símbolo de soma ao lado e preencha com o ARN da Amazon AWS do recurso que será registrado junto à aplicação.
2. Na aba **Provisionamento automático**, na opção **Provisionamento automático de secrets**, selecione de acordo com a opção desejada: **Ativo** ou **Inativo**.
3. Clique em **Salvar**.

:::(info) (Info)
AWS ARN refere-se aos identificadores únicos dos recursos da AWS.
:::

## Alterar uma aplicação cadastrada no DevOps Secret Manager

Para alterar uma aplicação que já está cadastrada no DSM, acesse a listagem de aplicações através do caminho **Grid Menu > DevOps Secret Manager > Aplicações > Aplicações.**

Na listagem, identifique a aplicação que você deseja alterar. Para isso, siga os passos abaixo:

1. Na coluna **Ação**, clique no ícone dos três pontos verticais e, no menu suspenso, selecione a opção **Alterar**.
2. Na janela de **Configuração da aplicação**, faça as alterações necessárias.
3. Clique em **Salvar**.

## Visualizar uma aplicação cadastrada no DevOps secret Manager

Para visualizar uma aplicação que já está cadastrada no DSM, acesse a listagem de aplicações através do caminho **Grid Menu > DevOps Secret Manager > Aplicações > Aplicações.**

Na listagem, identifique a aplicação que você deseja alterar. Para isso, siga os passos abaixo:

1. Na coluna **Ação**, clique no ícone dos três pontos verticais e, no menu suspenso, selecione a opção **Visualizar**.
2. Será aberta a janela de **Configuração da aplicação** em modo de visualização.

Nessa janela é possível visualizar as informações referentes à aplicação, são elas:

1. **Método de autenticação**: método de autenticação cadastrado junto da aplicação.
2. **Aplicação**: nome da aplicação.
3. **Client ID**: identificação do client. Deve ser uma string nesse padrão: `5e1983dc2023e5caab985aa73cd7144006221333d`.
4. **Client Secret**: secret do cliente. Para visualizar, clique no ícone de olho.
5. **System**: sistema do cliente.
6. **Environment**: ambiente do aplicação

## Visualizar as autorizações de uma aplicação

Para visualizar as autorizações de uma aplicação que já está cadastrada no DSM, acesse a listagem de aplicações através do caminho **Grid Menu > DevOps Secret Manager > Aplicações > Aplicações**.

Na listagem, identifique a aplicação que você deseja visualizar. Para isso, siga os passos abaixo:

1. Na coluna **Ação**, clique em **Autorizações**, representado pelo ícone de chave.
2. Em **Autorizações por aplicação**, veja uma  listagem com todas as autorizações que esta aplicação possui.

## Gerenciar o provisionamento automático de secrets

Ao cadastrar uma nova aplicação, é possível determinar se essa aplicação terá um provisionamento automático dos secrets guardados no DSM.

## Requisitos

* Perfis de provisionamento cadastrados.

Para gerenciar o provisionamento dinâmico de secrets, siga os passos abaixo:

1. Na janela de **Configuração da aplicação**, na aba **Provisionamento automático**, marque a opção **Sim** no campo **Provisionamento automático** para secrets.
2. **Provisionamento Dinâmico**:
   1. **Perfil de provisionamento em cloud**.
      1. Clique no ícone de soma para abrir o campo **Profile** abaixo do nome.
         1. No menu suspenso, selecione um dos perfis criados anteriormente.
   2. **Perfil de provisionamento de credencial.**
      1. Clique no ícone de soma para abrir os seguintes campos:
         1. **Dispositivos**: no menu suspenso, selecione o dispositivo da credencial.
         2. **Perfil de provisionamento**: no menu suspenso, selecione o perfil criado anteriormente.
3. Clique em **Salvar**.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).