# Como aprovar, desaprovar ou revogar uma solicitação de acesso

Neste documento, você encontra um guia passo a passo sobre como realizar uma aprovação, desaprovação ou revogação de uma solicitação de acesso à senha de uma credencial realizada pelo usuário.

## Requisitos

* Ser um usuário com papel de aprovador.

:::(info) (**Info**)
Se a caixa de entrada estiver configurada no senhasegura, os aprovadores podem responder ao e-mail com as palavras APPROVE ou DISAPPROVE para efetivar sua resposta, ou podem clicar no link descrito no e-mail.
:::

## Caminho para acesso
O relatório de aprovações pode ser acessado por dois caminhos:

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Controle de acesso** >  **Minhas aprovações**.

ou

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Desktop**.
2. No menu lateral, selecione **Página Inicial**.
3. Na seção **Solicitações**, clique em **Aprovações**.

:::(info) (**Info**)
Por padrão, os campos **Estado** e **Expirados** vêm preenchidos com os valores de **Pendente** e **Não**, respectivamente. Para visualizar todos os registros das solicitações, clique no botão **Limpar** e depois **Filtrar**.
::: 

---
## Possíveis ações em uma requisição

1. Na lista, selecione qual solicitação deseja aprovar.
2. Na coluna **Ação**, clique no ícone de três pontos verticais e selecione uma das ações a seguir:

###  Reprovar uma requisição

1. Clique no ícone representado pelo **X** para reprovar a solicitação. Uma tela para a justificativa da reprovação será aberta, com os detalhes da solicitação e uma caixa de texto para a justificativa.
2. Clique em **Reprovar**.
3. Na caixa de confirmação, clique em **Sim** para confirmar a ação.
4. A mensagem **"Sucesso. Solicitação reprovada"** será exibida confirmando a reprovação.

### Aprovar uma requisição

1. Clique no ícone **check** para aprovar a solicitação. Uma tela com os detalhes do pedido para aprovação será aberta e o aprovador poderá alterar a data de início e fim do acesso.
2. Clique em **Aprovar**.
3. A mensagem **"Sucesso. Solicitação aprovada"** será exibida confirmando a aprovação.

### Revogar uma requisição
:::(info) (**Info**)
Essa opção só estará disponível para solicitações anteriormente aprovadas e nas quais o campo **Motivo** não esteja preenchido com o valor **Outro**.
:::

1. Clique no ícone representado pelo **X** para revogar a solicitação. Uma tela para a justificativa da revogação será aberta, com os detalhes da solicitação e uma caixa de texto para a justificativa.
2. Clique em **Revogar**.
3. A mensagem **"Sucesso. Solicitação revogada"** será exibida confirmando a revogação.

:::(info) (**Info**)
Se a revogação ocorrer enquanto a sessão estiver ativa, o usuário recebe uma mensagem avisando que a sessão foi revogada: **"Acesso negado: O servidor de desktop remoto foi interrompido, pois a sessão em andamento foi revogada e a conexão foi encerrada. Por favor, entre em contato com o seu administrador do sistema."**
:::

:::(info) (**Info**)
Se o usuário for membro de um Grupo de acesso com um modelo de aprovação de nível, o aprovador de 1º nível receberá o e-mail primeiro. Após sua aprovação, os outros aprovadores receberão o e-mail conforme a hierarquia e número de níveis definidos na configuração do grupo de acesso.
:::
Após realizar qualquer uma dessas ações, o usuário que realizou a solicitação poderá ver a resposta acessando o relatório [Minhas solicitações](/v3-33/docs/pt/pam-session-my-requests).

---
## Próximos passos:
[Solicitações](/v3-33/docs/pt/pam-session-requests)

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.