# Aba aprovadores

Neste documento você encontrará todas as informações sobre a aba de **Aprovadores** da tela de cadastro de um novo grupo de acesso, nesta seção serão adicionados todos os usuários que irão exercer o papel de aprovadores para as solicitações realizadas pelo grupo de acesso.

:::(info) (**Info**)
Para saber como fazer o cadastro de um grupo de acesso, acesse o documento [Como cadastrar um grupo de acesso](/v3-33/docs/pt/pam-session-how-to-add-an-access-group).
:::

### Caminho para acesso

1. Na senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Configurações** > **Acesso** > **Grupos de acesso** > **+ Novo**.

---
## Cadastro de grupo de acesso - Aprovadores

* **Aprovadores**: Ao clicar no ícone de adição, a janela com os usuários da plataforma será aberta para seleção e adição.

:::(warning) (**Atenção**)
Para que um usuário aprovador tenha acesso ao fluxo de aprovação, é necessário que o mesmo tenha o perfil mínimo de PAM Operator.
:::
#### Lista de aprovadores selecionados

* **Código**: número do código de cadastro do usuário.
* **Nome**: nome do usuário.
* **Nome do usuário**: nome utilizado pelo usuário para realizar o login.
* **E-mail**: e-mail do usuário.
* **Tipo de criação**: qual o tipo de criação que foi realizado no cadastro do usuário.
* **Departamento**: qual o departamento que o usuário pertence.
* **Adicionado por**: nome do usuário que realizou o cadastro do usuário.
* **Adicionado em**: data que foi realizado o cadastro do usuário.
* **Nível**: menu com os possíveis níveis de aprovação, valores são de 1 a 3.

Ao selecionar um aprovador, o campo **nível** da lista apresenta um menu com as opções de **Nível 1**, **Nível 2** e **Nível 3**. Essa configuração determina a sequência de chamadas para aprovação da operação, permitindo a aplicação de uma hierarquia.

Por exemplo, podemos ter um grupo de acesso com três níveis de autorização. Os aprovadores configurados como **Nível 1** serão os primeiros a receber o pedido de acesso.

Os aprovadores de **Nível 2** e **3** só serão notificados após os aprovadores de primeiro nível concederem o acesso, se não o fizerem, então o acesso será negado, sem que os outros níveis sejam notificados.

Da mesma forma, se o aprovador de **Nível 1** conceder o acesso, mas o aprovador de **Nível 2** rejeitar o pedido de acesso, o aprovador de **Nível 3** não será notificado.

É importante lembrar que se você registrar mais de um aprovador para o mesmo nível, o primeiro aprovador daquele nível que conceder o acesso já resultará em uma notificação para o nível seguinte, tornando assim o processo mais rápido.
