# Como configurar uma credencial JIT no senhasegura

A plataforma do senhasegura oferece a possibilidade de utilizar credenciais Just-In-Time (JIT). Esta é uma configuração utilizada para gerenciar o tempo de utilização de serviços, como quando uma conta é criada, ativada ou necessita que permissões específicas adicionadas durante um período para execução de ações.

:::(Info) (Info)
Note que após esse acesso, a conta é excluída, inativada ou removida.
:::

A configuração de acesso JIT é feita no momento em que você cadastra ou edita uma credencial. Caso você esteja cadastrando uma credencial, acesse a documentação sobre [Como configurar uma credencial no senhasegura](https://docs.senhasegura.io/v3-33/docs/pt/pam-how-to-set-up-a-credential-in-senhasegura). Caso você esteja editando uma credencial, siga os passos abaixo:

1. No canto superior esquerdo da plataforma senhasegura, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais > Todas**.
3. Na listagem de credenciais, localize a credencial que você editar e, na coluna **Ação**, clique no ícone representado pelos três ícones verticais e selecione, no menu suspenso, a opção **Editar**.

:::(Info) (Info)
Antes de cadastrar uma credencial do tipo JIT, você precisa primeiro realizar a configuração dos templates de **criação/exclusão** e **ativação/desativação** dos sistemas que as credenciais irão utilizar. Esses templates serão configurados nas credenciais e depois utilizados no momento de inicialização da sessão proxy. Para maiores informações sobre como configurar templates de execução, acesse a documentação sobre [Templates](https://docs.senhasegura.io/v3-33/docs/pt/executions-templates-home).

**Os plugins não podem ser cadastrados pelo usuário.**
:::

Em ambos os modos, o formulário de **Cadastro da credencial** abrirá. No formulário, acesse a aba **Configurações JIT** e preencha os campos a seguir:

1. **Configuração de Just In Time**: selecione o campo **Ativo**.
2. No menu suspenso **Tipo de Just In Time**, selecione uma das duas opções:
    1. **Criação e Exclusão**: a credencial JIT será criada ao solicitar a inicialização da sessão Proxy, e será excluída ao término da sessão. A criação e remoção de uma credencial JIT é um privilégio previamente definido que possibilita criar uma credencial com um período especificado, que será excluída automaticamente após esse período.
    2. **Ativação e Inativação**: a credencial JIT será ativada ao solicitar a inicialização da sessão Proxy, e será inativada ao término da sessão.
3. Na seção **Configuração de autenticação** marque a opção **Utilizar a própria credencial para conectar** se você deseja utilizar a credencial em questão para conexão. Caso contrário, desmarque a opção e indique uma credencial para realizar a autenticação no menu suspenso **Credencial de autenticação**.

De acordo com o **Tipo de Just In Time** que você escolheu, uma das duas seções será habilitada.

Caso você tenha selecionado **Criação e exclusão de credencial**, preencha os campos a seguir:

1. No menu suspenso, **Plugin de criação de credencial**, selecione um dos plugins cadastrados.
2. No menu suspenso, **Template de criação de credencial**, selecione um dos templates cadastrados.
3. No menu suspenso, **Plugin de remoção de credenciais**, selecione um dos plugins cadastrados.
4. No menu suspenso, **Template de remoção de credencial**, selecione um dos templates cadastrados.

Caso você tenha selecionado **Habilitar/Desabilitar a credencial**, preencha os campos a seguir:

1. No menu suspenso, **Plugin de habilitação de credencial**, selecione um dos plugins cadastrados.
2. No menu suspenso, **Template de habilitação de credencial**, selecione um dos templates cadastrados.
3. No menu suspenso, **Plugin de desativação de credenciais**, selecione um dos plugins cadastrados.
4. No menu suspenso, **Template de desativação de credencial**, selecione um dos templates cadastrados.

Ao final, clique em **Salvar**.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).