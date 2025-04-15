# Como configurar Grupos de acesso

Este artigo explica como configurar **Grupos de acesso** para uso no Certificate Manager.

## Criar grupo de acesso
Para criar um novo grupo, siga estes passos:

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **Certificate Manager**.
2. No menu lateral, selecione **Configurações** e, em seguida, **Grupos de acesso**.
3. No canto superior direito, clique em **Exibir ações** (o ícone dos três pontos verticais).
4. Selecione **Novo**; isso abrirá o formulário **Cadastro de grupo de acesso**.
    1. Em **Nome do grupo de acesso**, insira o nome do grupo.
    2. Em **Ativo**, mantenha como **Sim**.
    3. Se necessário, adicione outra **Descrição** sobre o grupo.

### Aba Configurações
#### Seção Configurações de download

1. Defina os itens que os usuários do grupo podem baixar ou não.
    1. Em **Usuário pode fazer o download da request?**, marque **Sim** ou **Não**.
    2. Em **Usuário pode fazer o download da chave?**, marque **Sim** ou **Não**.
    3. Em **Usuário pode fazer o download do certificado?**, marque **Sim** ou **Não**.

#### Seção Senhas dos Certificados
1. Defina as configurações de senha.
    1. Em **Usuário pode visualizar as senhas do certificado**, marque a caixa de seleção para permitir que os usuários visualizem as senhas.
    2. Em **Requer justificativa para visualizar senha do certificado**, marque a caixa de seleção para exigir que os usuários escrevam uma justificativa antes de visualizar as senhas.
    3. Em **Requer aprovação para visualizar uma senha**, marque a caixa de seleção para exigir que um aprovador autorize a visualização de senhas.
    4. Em **Aprovações necessárias para visualizar**, defina o número de aprovações necessárias para autorizar a visualização. Aprovadores diferentes devem autorizar a solicitação.
    5. Em **Reprovações necessárias para cancelar**, defina a quantidade de negações que, quando somadas, cancelam a solicitação. Aprovadores diferentes devem negar a solicitação.
    6. Em **Aprovação em níveis**, marque a caixa de seleção para definir que as aprovações acontecerão em níveis.
    7. Em **Parte da senha que será visualizada**, selecione entre as opções de visualização: **senha completa**, somente a **1ª parte da senha** ou somente a **2ª parte da senha**.

#### Seção Assinatura e renovação do certificado
1. Defina as configurações de assinatura.
    1. Em **Requer justificativa para assinatura**, marque a caixa de seleção para exigir que os usuários escrevam uma justificativa antes de assinar certificados.
    2. Em **Requer aprovação para assinatura**, marque a caixa de seleção para exigir que um aprovador autorize a assinatura de certificados.
    3. Em **Aprovação em níveis**, marque a caixa de seleção para definir que as aprovações acontecerão em níveis.
    4. Em **Aprovações necessárias para assinar**, defina o número de aprovações necessárias para autorizar a assinatura. Aprovadores diferentes devem autorizar a solicitação.
    5. Em **Reprovações necessárias para cancelar**, defina a quantidade de negações que, quando somadas, cancelam a solicitação. Aprovadores diferentes devem negar a solicitação.

#### Seção Publicação do certificado
1. Defina as configurações de publicação.
    1. Em **Requer justificativa para publicação**, marque a caixa de seleção para exigir que os usuários escrevam uma justificativa antes de publicar certificados.
    2. Em **Requer aprovação para publicação**, marque a caixa de seleção para exigir que um aprovador autorize a publicação de certificados.
    3. Em **Aprovação em níveis**, marque a caixa de seleção para definir que as aprovações acontecerão em níveis.
    4. Em **Aprovações necessárias para publicar**, defina o número de aprovações necessárias para autorizar a publicação. Aprovadores diferentes devem autorizar a solicitação.
    5. Em **Reprovações necessárias para cancelar**, defina a quantidade de negações que, quando somadas, cancelam a solicitação. Aprovadores diferentes devem negar a solicitação.

#### Seção Configurações de aprovações
1. Defina outras configurações de aprovações.
    1. Em **Obrigatório especificar código de governança ao justificar?**, marque **Sim** ou **Não** para definir que o usuário deve adicionar um código ao justificar. O código tem a finalidade de rastrear e controlar as ações dos usuários.
    2. Em **Sempre adicionar o gestor do usuário aos aprovadores?**, marque **Sim** ou **Não** para definir que o gestor dos usuários do grupo de acesso em questão estará sempre entre os aprovadores.

### Aba Critérios
Você pode definir condições adicionais para permitir que o grupo execute ações. Por exemplo, ao preencher o campo Organização, você restringe que apenas os usuários do grupo que também fazem parte dessa organização possam realizar ações.   
1. Preencha os campos **CA**, **Organização**, **DNS** ou **Tags** conforme o seu cenário e necessidades.  
2. Em **Autoridades permitidas**, marque todas as autoridades que podem assinar os certificados. Você deve ter autoridades registradas.

### Aba Usuários
1. Acrescente todos os usuários integrantes do grupo de acesso. 
    1. Clique no ícone do sinal de soma, ao lado da palavra **Usuários**.
    2. Na janela **Usuários do Sistema**, localize os usuários desejados. Utilize os campos de busca, ou a barra de rolagem.
    3. Marque a caixa à esquerda ao lado do nome de usuário.
    4. Clique em **Adicionar**. 

:::(Warning) (Atenção)
Quando um usuário pertence a vários grupos de acesso, o sistema aplicará as configurações do grupo mais restritivo.
:::

### Aba Aprovadores
:::(Warning) (Atenção)
Para se tornar um aprovador, o usuário deve ter o perfil **Certificates Approver**.  
:::
1. Acrescente todos os usuários aprovadores do grupo de acesso. 
    1. Clique no ícone do sinal de soma, ao lado da palavra **Aprovadores**.
    2. Na janela **Aprovadores**, localize os usuários desejados. Utilize os campos de busca, ou a barra de rolagem.
    3. Marque a caixa à esquerda ao lado do nome de usuário.
    4. Clique em **Adicionar**. 
2. Clique em **Salvar** para confirmar as configurações.
***
## Editar grupo de acesso
Para editar um grupo, siga estes passos:

1. Na página principal de **Grupos de acesso**, localize o grupo desejado.
2. Na coluna **Ação**, clique em **Alterar** (ícone do lápis).
3. Atualize o formulário.
4. Clique em **Salvar** para confirmar as alterações.

:::(Info) (Info)
O ícone da seta em sentido anti-horário atualiza a tela.
:::
***
## Clonar grupo de acesso
A clonagem serve para copiar todas as configurações de um grupo existente, agilizando o processo de criação.

Para clonar um grupo, siga estes passos:

1. Na página principal de **Grupos de acesso**, localize o grupo desejado.
2. Na coluna **Ação**, clique em **Exibir ações** (ícone dos três pontos verticais).
3. Selecione **Clonar**.
4. Clique em **Sim** para confirmar a clonagem.

O novo grupo aparecerá listado na página principal de **Grupos de acesso** com a palavra cópia entre parênteses. 
***
## Inativar grupo de acesso
Para inativar um grupo, siga estes passos:

1. Na página principal de **Grupos de acesso**, localize o grupo desejado.
2. Na coluna **Ação**, clique em **Alterar** (ícone do lápis).
3. Em **Ativo**, selecione **Não**.
4. Clique em **Salvar** para confirmar.

O grupo desaparecerá da lista da página principal porque o campo de pesquisa **Ativo** está definido como **Sim** por padrão. Selecione **Não** se quiser encontrar o grupo inativado.
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).