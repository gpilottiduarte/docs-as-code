# Como conectar uma organização da Google Cloud Platform

Neste artigo, você irá aprender como conectar uma organização da Google Cloud Platform (GCP), incluindo todos os seus projetos, ao **Cloud Entitlements**.

## Requisitos

- Criar um **Papel** com as seguintes funções:
    - `iam.serviceAccountKeys.list`
    - `iam.serviceAccounts.list`
    - `iam.roles.list`
    - `iam.roles.get`
    - `resourcemanager.organizations.getIamPolicy`
    - `resourcemanager.projects.getIamPolicy`
    - `resourcemanager.projects.list`
    - `resourcemanager.projects.get`
    - `resourcemanager.organizations.get`
- Ativar as seguintes APIs GCP:
    - Resource Manager.
    - Identity and Access Management (IAM)
    - Cloud Assets.
- Criar uma **Conta de serviço** com o papel necessário e registrá-la como **Principal** no IAM da organização.
- Provisionar uma **Chave** para a **Conta de serviço**.

## Configurar uma conta de serviço com permissões de nível organizacional na Google Cloud Platform

Antes de conectar sua organização GCP ao **Cloud Entitlements**, você precisa configurar uma conta de serviço com permissões de nível organizacional. Para isso, siga os passos:

1. Acesse o **Console GCP**.
2. Clique no **Dropdown de projetos** e mude para a sua **Organização GCP**.
3. Vá para **IAM & Admin > Papéis**.
4. Clique em **Criar papel** com as permissões necessárias.
5. Clique em **Salvar**.
6. Navegue até **IAM**.
7. Em **Permissões**, clique em **Permitir acesso** para adicionar uma conta de serviço como principal.

:::(Info) (Info)
Como organização, você pode selecionar contas de serviço criadas dentro de projetos. Se necessário, você pode criar uma nova conta de serviço em **IAM & Admin > Contas de serviço > Criar conta de serviço**.
:::

1. Cole o **E-mail da conta de serviço** e selecione o **Papel personalizado**.
2. Clique em **Salvar**.
3. Vá para **Contas de serviço** e selecione a conta de serviço selecionada como principal.
4. Clique em **Ações** > **Gerenciar chaves**.
5. Crie e baixe uma nova chave em **Formato JSON**.

## Conectar uma organização da Google Cloud Platform

Para conectar sua organização GCP aos **Cloud Entitlements**, siga estas etapas:

1. Vá para o menu esquerdo do **Cloud Entitlements**.
2. Clique em **Configuração** para abrir um menu suspenso.
3. Selecione **Google Cloud Platform**.
4. No canto superior direito, clique em **+ Conectar**.
5. Selecione a opção **Organização**.
6. Insira um **Nome** para identificar sua organização GCP dentro do **Cloud Entitlements**.
7. Insira seu **ID da Organização**.

:::(Info) (Info)
Você pode encontrar o ID da organização no Console GCP, clicando no **Seletor de projetos** > **Todos**.
:::

8 Faça o upload do **Arquivo JSON** da chave da Conta de serviço.
9 Clique em **Salvar**.

Se conectado com sucesso, sua organização GCP aparecerá na lista de organizações conectadas.

:::(Error) (Important)
Em caso de conexão mal sucedida, confira o ID da organização, as funções atribuídas e as APIs ativadas. Note que você não pode conectar uma organização que já está conectada ao **Cloud Entitlements**.
:::

Para fazer quaisquer alterações necessárias, clique no botão **Ações**, representado por três pontos verticais, e clique em **Editar**.

Além disso, você pode ativar ou desativar a conta alternando o **Status switch**.