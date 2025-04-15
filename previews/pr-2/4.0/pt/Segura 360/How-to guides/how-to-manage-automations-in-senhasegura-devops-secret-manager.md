# Como gerenciar uma automação

Dentro do Segura **DevOps Secret Manager (DSM)**, é possível cadastrar automações de forma a automatizar ações cotidianas.

## Requisitos

* Uma aplicação ou segredo previamente criado.
* Uma credencial que será usada para executar a ação de automação.
* Um dispositivo onde será executada a automação.
* Um template de execução do tipo **Secret Management Automation** para o executor desejado.

## Como cadastrar um automação no DSM

Para criar uma automação, siga os seguintes passos:

1. No Segura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **DevOps Secret Manager**.
2. No menu lateral, selecione **Automações > Automações**.
3. Na barra superior, clique em **Exibir ações**, representado pelo ícone dos três pontos verticais, e selecione **+ New** no menu suspenso.

### Janela Automação

Nessa janela você irá preencher os dados da sua automação. Os campos presentes são:

1. **Nome**: nome que irá identificar a automação dentro da instância do Segura.
2. **Ativo**: opção para escolher se a automação será cadastrada como ativa ou não. As opções são **Sim** ou **Não**. Por padrão, essa opção vem marcada como **Sim**.

#### Aba Informação

1. **Descrição**: preencha com uma descrição sobre a automação.
2. **Tags**: adicione as tags que irão identificar a automação.

#### Aba Gatilho

Em **Quando isso acontecer …** você irá definir o gatilho que irá iniciar a automação. Para isso preencha conforme as instruções abaixo:

1. Clique no ícone de adição ao lado da palavra **Gatilho** para abrir o modal **Gatilhos**.
2. No modal **Gatilhos** selecione os gatilhos (ações) que irão ser usados para iniciar a automação. Você pode escolher quantos quiser.
3. Clique em **Adicionar**.

Em **… nestas aplicações  ou Secrets …** você irá definir quais aplicações ou secrets serão afetados pelo gatilho. Para isso, preencha conforme as instruções abaixo:

1. **Aplicações**:
   1. Clique no ícone de adição ao lado da palavra **Aplicações** para abrir o modal **Aplicações**.
   2. No modal **Aplicações** selecione as aplicações que serão afetadas quando o gatilho for iniciado. Você pode escolher quantas quiser.
   3. Clique em **Adicionar**.
2. **Secrets**:
   1. Clique no ícone de adição ao lado da palavra **Secrets** para abrir o modal **Segredos**.
   2. No modal **Segredos** selecione os segredos que serão afetados quando o gatilho for iniciado. Você pode escolher quantos quiser.
   3. Clique em **Adicionar**.

#### Aba Ação

Em **Execute este template …** você irá definir o template contendo os comandos que serão executados na(s) aplicação(ões) ou secret(s) quando o gatilho foi acionado. Para isso, preencha conforme as instruções abaixo:

1. No menu suspenso **Plugin**, selecione um dos plugins que estão cadastrados no Segura.
2. No menu suspenso **Template de ativação**, selecione um dos templates para aquele plugin.
   1. Você pode adicionar um template de ativação no momento em que estiver criando uma automação, para isso clique no ícone de adição ao lado do menu suspenso **Template de ativação** para abrir a janela **Template de execução** e preencha de acordo. 

::: (error) (Importante)
Quando um template é criado usando a opção de criação no momento, este template não aparece automaticamente na lista do menu suspenso. Assim, você precisará reinserir todas as informações recarregando a página ou adicionando manualmente uma nova automação.
:::

Em **… nestes dispositivos …** você irá adicionar os dispositivos onde o template será executado. Para isso, preencha conforme as instruções abaixo:

1. Clique no ícone de adição ao lado da palavra **Dispositivo**. Essa ação adiciona dois menus suspensos logo abaixo do ícone.
2. No menu suspenso **Dispositivo**, selecione um dos dispositivos cadastrados no Segura.
3. No menu suspenso **Credencial**, selecione a credencial que será usada para autenticação no dispositivo indicado.

Ao final, clique em **Salvar** para concluir o cadastro da automação.

## Como atualizar uma automação no DSM

Caso você queira atualizar uma automação, siga os seguintes passos:

1. No Segura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **DevOps Secret Manager.**
2. No menu lateral, selecione **Automações > Automações.**
3. Na listagem que aparece na página principal, selecione aquela automação que deseja atualizar e, na coluna **Ação**, clique no ícone representado pelos três pontos verticais, para abrir um menu menu suspenso
4. No menu suspenso, selecione a opção **Atualização**.
5. A janela **Automação** abrirá em modo de edição, contendo os mesmo campos do passo de cadastro. Basta alterar o que você deseja e clicar em **Salvar**.

::: (info) (Info)
No canto inferior direito da janela Automação, você verá um ícone representado por olho, onde, ao passo o mouse por cima é possível visualizar algumas informações de acesso – o nome e o nome de usuário do criador da automação, e o último usuário, com nome e nome de usuário, que alterou a automação.
:::

## Como visualizar detalhes de uma automação no DSM

Na janela **Automação**, quando aberta no modo de visualização de detalhes, você pode analisar diversas informações sobre a automação. Para isso, siga os passos abaixo:

1. No Segura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **DevOps Secret Manager.**
2. No menu lateral, selecione **Automações > Automações**.
3. Na listagem que aparece na página principal, selecione aquela automação que deseja visualizar os detalhes e, na coluna **Ação**, clique em **Detalhes**, representado pelo ícone de lupa.
4. Na janela **Automação**, você terá os seguintes campos:
   1. **Código**: contendo o código da automação dentro do Segura.
   2. **Nome**: contendo o nome da automação.
   3. **Data de criação**: data de criação da automação.
   4. **Última execução:** última vez que a automação foi executada.
   5. **Ativo**: estado da automação.
   6. **Descrição**: breve descrição sobre a automação.
   7. **Tags**: tags que ajudam a categorizar a automação.
   8. **Gatilhos**: as ações que serão responsáveis por ativar os templates.
   9. **Aplicações**: aplicações que serão afetadas pelo template.
   10. **Segredos**: segredos que serão afetados pelo template.
   11. **Plugin**: plugin utilizado na automação.
   12. **Template**: nome do template que realizará a ação quando o gatilho for ativado.
   13. **Dispositivo (credencial):** endereço do dispositivo e a credencial que será executada na autenticação.

## Como excluir uma automação no DSM

Para excluir uma automação, siga os passos abaixo:

1. No Segura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **DevOps Secret Manager**.
2. No menu lateral, selecione **Automações > Automações.**
3. Na listagem que aparece na página principal, selecione aquela automação que deseja excluir e, na coluna **Ação**, clique no ícone representado pelos três pontos.
4. No menu suspenso, selecione **Excluir**.

Uma janela apresentará uma mensagem de que a exclusão daquela automação foi bem sucedida.

::: (warning) (Cuidado)
A exclusão de uma automação não possui nenhum passo intermediário; assim, ao clicar em Excluir a automação será excluída sem que seja necessária a confirmação da exclusão.
:::

## Como ativar uma automação no DSM

Para ativar uma automação, que por qualquer motivo esteja com o seu status como **Não** no campo Ativo, siga os seguintes passos:

1. No Segura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **DevOps Secret Manager.**
2. No menu lateral, selecione **Automações > Automações.**
3. Na página de listagem, na barra superior, selecione a opção **Não** no menu suspenso **Ativo** e clique em **Filtrar**.
4. Na listagem, identifique a automação que você deseja ativar e clique, na coluna **Ação**, no ícone representado pelos três pontos verticais;
5. No menu suspenso, selecione **Atualizar**.
6. A janela **Automação** será aberta em modo de edição.
7. No campo **Ativo**, marque a opção **Sim**.
8. Clique em **Salvar**.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).