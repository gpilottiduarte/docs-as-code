# Como cadastrar um grupo de acesso limitado

Neste documento, você encontra um guia passo a passo para cadastrar um grupo de acesso limitado no Domum.


## Cadastrar grupo de acesso limitado

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Domum Remote Access**.
2. No menu lateral, selecione **Controle de acesso** > **Grupo de acesso limitado**.
3. Na janela do relatório, clique no menu **Exibir ações**, representado pelo ícone dos três pontos verticais e selecione **+ Novo**.
4. Na janela **Cadastro de grupo de acesso** que se abre, preencha os dados:
    1. **Nome do grupo de acesso***: digite o nome do grupo de acesso.
    2. **Ativo***: selecione o status do grupo. As opções são **Sim** e **Não**.
    3. **Descrição**: digite uma descrição para o grupo criado.
        :::(warning) (**Atenção**)
        Essas políticas são aplicadas no momento de requisição de acesso para usuários limitados e elas não tem efeito após o link ser enviado ao usuário.
        :::
    4. Aba **Configurações**.
        1. Em **Configurações da visualização de senha**, marque as opções desejadas:
            1. Caixa de seleção **Usuários podem visualizar uma senha**: permite que os usuários visualizem a senha. Ao selecionar esta opção, a opção **Requer aprovação para visualizar** uma será habilitada.
            2. Caixa de seleção **Requer aprovação para visualizar uma senha**: essa opção só estará disponível se a opção Usuários podem visualizar uma senha for selecionada. Neste caso, use os menus suspensos definir o número de **Aprovações necessárias para visualizar** e o número de **Reprovações necessárias para cancelar**.
            3. Caixa de seleção **Aprovação em níveis**:  defina se as aprovações serão acionados em níveis. Na aba **Aprovadores**, defina a hierarquia dos aprovadores.
        2. Em **Configurações da sessão remota**, marque as opções desejadas:
            1. Caixa de seleção **Usuários podem iniciar sessão**: permite que os usuários iniciem uma sessão proxy usando as credenciais permitidas por esse grupo de acesso. Ao selecionar esta opção, a opção **Requer aprovação para iniciar sessão** será habilitada.
            2. Caixa de seleção **Requer aprovação para iniciar sessão**: essa opção só estará disponível se a opção **Usuários podem iniciar sessão** for selecionada. Neste caso, defina o número de **Aprovações necessárias** e o número de **Reprovações necessárias para cancelar**.
            3. Caixa de seleção **Aprovação em níveis**: defina se as aprovações serão acionados em níveis. Na aba **Aprovadores**, defina a hierarquia dos aprovadores.
        3. Em **Configurações da solicitação de acesso**, escolha **Sim** ou **Não** para as opções:
            1. **Obrigatório especificar código de governança ao justificar?**: para obrigar o usuário a digitar um código ITSM no momento da justificativa.
            2. **Usuários Limitados podem solicitar seus próprios acessos?***: para permitir que um usuário limitado solicite o acesso.
            :::(info) (**Info**)
            Tenha em mente seu fluxo de aprovação antes de habilitar esta opção.
            * **Usuários Limitados** só podem solicitar acesso às credenciais às quais tiveram acesso anterior.
            * **Usuários Limitados** precisam de pelo menos um acesso ativo para poder solicitar novo acesso.
            :::
        4. Na aba **Aprovadores**:
            1. Clique no ícone de **adição** e selecione os usuários que serão os aprovadores das solicitações de senhas e sessões habilitadas na aba **Configurações**.
            2. Os aprovadores adicionados estarão listados na tabela. Caso a opção **Aprovação em níveis** estiver habilitada, defina o nível que cada aprovador atuará na coluna **Nível**.
            :::(warning) (**Atenção**)
            Para que o usuário aprovador tenha acesso à tela de aprovação de fluxo, é necessário que ele tenha o perfil mínimo de PAM Operator.
            :::
5. Clique em **Salvar**.

Uma mensagem de confirmação será exibida e o grupo de acesso será exibido na lista do relatório.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.