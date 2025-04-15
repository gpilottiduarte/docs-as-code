# Como aprovar, desaprovar ou revogar uma solicitação de acesso

Este documento fornece informações sobre o passo a passo para realizar uma aprovação, desaprovação ou revogação de uma solicitação de acesso à senha de uma credencial realizada pelo usuário.

## Requisitos

* Ser um usuário com papel de aprovador.

:::(info) (**Info**)
Se a caixa de entrada estiver configurada no Segura, os aprovadores podem responder ao e-mail com as palavras **APPROVE** ou **DISAPPROVE** para efetivar sua resposta, ou podem clicar no link descrito no e-mail.
:::

---
## Ações para uma solicitação
A tela de aprovações pode ser acessada pelo caminho:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.
2. No menu lateral, selecione **Controle de acesso** >  **Minhas aprovações de acesso**.

:::(info) (**Info**)
Por padrão, os campos **Status** e **Expirados** vêm preenchidos com os valores de **Pendente** e **Não**, respectivamente. Para visualizar todos os registros das solicitações, clique no botão **Limpar** e depois **Filtrar**.
::: 

1. Na lista, selecione qual solicitação deseja aprovar.
2. Na coluna **Ações**, clique no **botão Ações** e selecione uma das ações a seguir:

###  Visualizar uma solicitação

1. Selecione **Visualizar Solicitação**.
    1. Abre a tela [Solicitação de acesso](/v4/docs/pt/pam-session-access-request-details) com os detalhes da requisição.

###  Reprovar uma solicitação

1. Selecionar **Reprovar**.
    1. Abre a tela **Reprovar Solicitação**, com os detalhes da solicitação e uma caixa de texto para a justificativa.
    2. Clique em **Reprovar** para confirmar a ação.
2. A mensagem **"Solicitação reprovada"** será exibida confirmando a reprovação.

### Aprovar uma requisição

1. Selecione **Aprovar**.
    1. Abre a tela **Aprovar o pedido** com os detalhes da solicitação e  a possibilidade de alterar a data de início e fim do acesso.
    2. Clique em **Aprovar** para confirmar a ação.
2. A mensagem **"Solicitação aprovada"** será exibida confirmando a aprovação.

### Revogar uma requisição
:::(info) (**Info**)
Essa opção só estará disponível para solicitações anteriormente **aprovadas** e nas quais o campo **Motivo** não esteja preenchido com o valor **Outro**.
:::

1. Selecione **Revogar**.
    1. Abre a tela **Revogar solicitação**, com os detalhes da solicitação e uma caixa de texto para a justificativa.
    2. Clique em **Revogar** para confirmar a ação.
2. A mensagem **"Solicitação revogada"** será exibida confirmando a revogação.

:::(info) (**Info**)
Se a revogação ocorrer enquanto a sessão estiver ativa, o usuário recebe uma mensagem avisando que a sessão foi revogada: **"Acesso negado: O servidor de desktop remoto foi interrompido, pois a sessão em andamento foi revogada e a conexão foi encerrada. Por favor, entre em contato com o seu administrador do sistema."**
:::

Se o usuário for membro de uma Política de acesso com um modelo de aprovação de nível, o aprovador de 1º nível receberá o e-mail primeiro. Após sua aprovação, os outros aprovadores receberão o e-mail conforme a hierarquia e número de níveis definidos na configuração do grupo de acesso.

Após realizar qualquer uma dessas ações, o usuário que realizou a solicitação poderá ver a resposta acessando o relatório [Minhas solicitações de acesso](/v4/docs/pt/pam-session-my-access-requests).

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.