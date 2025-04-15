# Como conectar um projeto do Google Cloud Platform

Neste artigo, você aprenderá como conectar **Cloud Entitlements** aos seus projetos do Google Cloud Platform (GCP).

## Requisitos

- Criar um **Papel** com as seguintes funções:
    - `iam.serviceAccountKeys.list`
    - `iam.serviceAccounts.list`
    - `iam.roles.list`
    - `iam.roles.get`
    - `resourcemanager.organizations.getIamPolicy`
    - `resourcemanager.projects.getIamPolicy`
    - `resourcemanager.projects.list`
- Ativar as seguintes APIs GCP:
    - Resource Manager.
    - Identity and Access Management (IAM)
    - Cloud Assets.
- Criar uma **Conta de serviço** com o papel necessário e registrá-la como **Principal** no IAM da organização.
- Provisionar uma **Chave** para a **Conta de serviço**.

---

## Configurar uma conta de serviço com permissões de nível organizacional na Google Cloud Platform

Antes de conectar seu projeto GCP ao **Cloud Entitlements**, você precisa configurar uma conta de serviço com permissões de nível organizacional. Para isso, siga os passos:

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

---

## Conectar um projeto do Google Cloud Platform

Para conectar seu projeto GCP ao **Cloud Entitlements**, siga estas etapas:

1. Vá para o menu à esquerda de **Cloud Entitlements**.
2. Clique em **Configuração** para abrir o menu suspenso.
3. Selecione **Google Cloud Platform**.
4. No canto superior direito, clique em **+ Conectar**.
5. Insira um **Nome** para identificar seu projeto dentro do **Cloud Entitlements**.
6. Insira a **ID do Projeto**.
7. Se necessário, atribua etiquetas para o projeto. Separe cada etiqueta usando a tecla **Enter**.
8. Faça o upload do **arquivo JSON** da chave da conta de serviço do seu projeto GCP.
9. Clique em **Salvar**.

Se a conexão for bem-sucedida, seu projeto GCP aparecerá na lista de projetos conectados.

::: (Error) (Importante)
Se a conexão não for bem-sucedida, confira a ID do projeto, as funções atribuídas e se as APIs necessárias foram ativadas. Você não pode usar um ID de um projeto que já está conectado ao **Cloud Entitlements**.
:::

Para fazer quaisquer alterações necessárias, clique no botão **Ações**, representado por três pontos verticais, e clique em **Editar**.

Além disso, você pode ativar ou desativar o projeto, ligando ou desligando o **Status switch**.