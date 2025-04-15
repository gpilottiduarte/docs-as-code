# Como gerenciar usuários

A criação e gestão de usuário são cruciais para a administração de sistemas de segurança, uma vez que permite o controle granular de acessos e ações, autenticação e autorização de cada pessoa usuária, auditoria e gerenciamento de identidades. Essas práticas não apenas ajudam a proteger dados sensíveis contra acessos não autorizados, mas também garantem que cada usuário possa acessar apenas as informações e ferramentas necessárias para suas tarefas específicas.

## Requisitos
- Estar registrado/habilitado com o papel de PAM operator ou System administrator no senhasegura.

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Gestão de usuários > Usuários**.

## Criar usuário

1. No relatório **Usuários**, na barra superior, clique em **Exibir ações**, representado pelo ícone dos três pontos verticais e, no menu suspenso, selecione **Novo**.
2. Na janela **Usuário**, preencha os campos conforme indicado.

### Aba Configurações
Nesta aba você deverá inserir as configurações gerais do usuário.

1. **Nome**: nome do usuário. Por exemplo `Teste`.
2. **Nome do usuário**: username do usuário. Por exemplo: `senhasegurateste`.
3. **Senha**: preencha com uma senha provisória, pois o usuário será obrigado a mudar a senha no seu primeiro acesso.
    1. É possível também deixar sem senha definida ou gerar uma senha. Para gerar uma senha, marque a caixa de seleção **Definir senha atual** e clique na opção **Gerar uma senha**. Para exibir a senha, preenchida ou gerada, marque a caixa de seleção **Exibir senha.**

:::(info) (Info)
Caso o usuário não defina uma senha, o senhasegura irá gerar uma senha que será enviada por email
:::

4. **Departamento**: no menu suspenso, escolha o departamento ao qual o usuário pertence.
5. **E-mail**: preencha com o endereço de email do usuário.

:::(warning) (Importante)
Se o usuário que você deseja cadastrar já é um usuário do senhasegura Domum, não será possível cadastrá-lo com o mesmo email utilizado para acesso ao Domum. Caso tente realizar esse cadastro, uma mensagem irá alertá-lo: **“Já existe um usuário do Domum com o e-mail `teste@senhasegura.com`. Use outro e-mail.”**
:::

6. **Telefone**: preencha com o número de telefone do usuário. Utilize o formato `55-11-12345678`.
7. **Estado**: indique o status que o usuário será criado. Pode ser **Ativo** ou **Inativo**.
8. Na seção **Grupos de usuários**, indique qual o grupo de usuários que esse usuário irá integrar. Para isso, clique no ícone de soma ao lado da palavra **Adicionar** e escolha o grupo de usuários no menu suspenso.
    1. É possível adicionar mais de um grupo de usuários a cada usuário. Para maiores informações, acesse o documento sobre **Grupos de Usuários**.

### Aba Papéis
Nesta aba, você deverá adicionar os papéis do usuário.

1. Clique no ícone de soma ao lado da palavra **Papéis** para abrir o modal **Papéis**.
2.  No modal **Papéis**, selecione o papel que será adicionado ao usuário.
    1. É possível selecionar mais de um papel.
3. Clique em **Adicionar**.

### Aba Grupos de acesso
Nesta aba, você deverá indicar os **Grupos de acesso** dos quais o usuário fará parte. Para isso, marque a caixa de seleção para cada grupo que deseja inserir o usuário.

Para finalizar a criação do usuário, clique em **Salvar**.

### Inativar um usuário
É possível inativar um usuário no senhasegura. Essa ação apenas impede o acesso do usuário à plataforma, mantendo todos os seus dados intactos. Para inativar um usuário, siga os passos abaixo:

1. No relatório **Usuários**, identifique aquele que você deseja inativar e, na coluna **Ação**, clique em **Alterar**, representado pelo ícone de lápis e papel.
2. A janela **Usuário** será aberta em modo de edição.
3. No campo **Estado**, selecione a opção **Inativo**.
4. Clique em **Salvar**.

### Reativar um usuário
Uma vez que um usuário é inativado, é possível reativá-lo, restaurando seu  acesso e dados. Para reativar um usuário, siga os passos abaixo:

1. No relatório **Usuários**, na barra superior, localize o filtro **Ativo** e selecione **Não** 
2. Clique em **Filtrar**.
3. No relatório de usuários inativos, identifique aquele que você deseja reativar e, na coluna **Ação**, clique em **Alterar**, representado pelo ícone de lápis e papel.
4. A janela **Usuário** será aberta em modo de edição.
5. No campo Estado, selecione **Ativo**.
6. Clique em **Salvar**.

:::(info) (Info)
O usuário que foi reativado voltará a aparecer no sistema como ativo. Note que a coluna **Data de desativação** ficará em branco mesmo que este usuário tenha sofrido alguma desativação anteriormente.
:::

### Esquecer um usuário
A ação de esquecer um usuário mascara todos os seus dados pessoais, impossibilitando que sejam acessados por qualquer outro usuário.

:::(error) (Attention)
Essa ação é irreversível.
:::

Para esquecer um usuário, siga os passos abaixo:

1. No menu lateral, selecione **Gestão de usuários**.
2. No relatório **Usuários**, identifique aquele que você deseja esquecer e, na coluna **Ação**, clique no ícone dos três pontos verticais e selecione **Esquecer usuário** no menu suspenso.
3. No modal de confirmação, leia atentamente as informações e clique em **Sim**.


## Acessar histórico do usuário
É possível visualizar ou imprimir um relatório com todo o histórico do usuário. Este tipo de ação é essencial para auditorias e controle interno. Para acessar o histórico de um usuário, siga os passos abaixo:

1. No relatório **Usuários**, identifique aquele cujo histórico você deseja acessar Na coluna **Ação**, clique no ícone dos três pontos verticais e selecione **Histórico**.
2. Ajanela **Histórico do Usuário** exibetodas as informações e ações do usuário.
    1. Quando você clica em **Histórico**, a janela **Histórico do Usuário** abre e automaticamente apresenta a tela de impressão. Para visualizar o relatório, apenas cancele a operação de impressão.

## Alterar um usuário
É possível alterar os dados de um usuário já cadastrado no senhasegura. Esse tipo de ação é útil quando uma informação de contato ou acesso precisar ser modificada, por exemplo. Para alterar as configurações de um usuário, siga os passos abaixo:

1. No relatório **Usuários**, identifique aquele cujas informações  deseja alterar
2. Na coluna **Ação**, clique em **Alterar**, representado pelo ícone de lápis e papel.
3. A janela **Usuário** será aberta em modo de edição.
4. Altere os dados necessários e clique em **Salvar**.

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
