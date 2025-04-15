# Como conectar uma organização da Google Cloud Platform

Neste documento, você irá aprender como conectar uma organização da Google Cloud Platform (GCP), incluindo todos os seus projetos, ao **Cloud Entitlements**.

## Requisitos

- Uma organização GCP.  
- Uma Conta de serviço com as seguintes permissões:  
    - iam.serviceAccountKeys.list  
    - iam.serviceAccounts.list  
    - iam.roles.get  
    - iam.roles.list  
    - resourcemanager.folders.get  
    - resourcemanager.folders.list  
    - resourcemanager.organizations.get  
    - resourcemanager.organizations.getIamPolicy  
    - resourcemanager.projects.get  
    - resourcemanager.projects.getIamPolicy  
    - resourcemanager.projects.list  
- Uma Chave provisionada para a Conta de serviço.  
- As seguintes APIs GCP ativadas:
    - *Resource Manager*.  
    - *Identity and Access Management (IAM)*.  
    - *Cloud Assets*.

## Configurar uma conta de serviço com permissões de nível organizacional na Google Cloud Platform

Antes de conectar sua organização GCP ao **Cloud Entitlements**, você precisa configurar uma conta de serviço com permissões de nível organizacional. Para isso, siga os passos a seguir:

1. Acesse o **Console GCP**.  
2. Na barra superior, clique em **Selecione o projeto,** e selecione a sua organização GCP.  
3. No menu lateral, clique em **IAM e administrador \>** **Papéis**.  
4. Clique em **Criar papel**, adicione as permissões necessárias e clique em **Adicionar**.  
5. Clique em **Criar**.  
6. No menu lateral,clique em **IAM**.  
7. Em **Visualizar por principais**, clique em **Conceder acesso** para adicionar uma conta de serviço como principal.  
8. Adicione o endereço de email da conta de serviço no campo **Novos principais**.

:::(Info) (Info)
Como organização, você pode selecionar contas de serviço criadas dentro de projetos. Se necessário, você pode criar uma nova conta de serviço em **IAM & Admin \> Contas de serviço \> Criar conta de serviço**. Certifique-se de ter um projeto selecionado, caso contrário você não poderá criar uma conta de serviço.
:::

8. Na seção **Atribuir papéis**, selecione o papel **Personalizado \> Custom Role**.  
9. Clique em **Salvar**.  
10. Vá para **Contas de serviço** e selecione a conta de serviço selecionada como principal.  
11. Clique em **Ações \> Gerenciar chaves**.  
12. Crie e baixe uma nova chave no formato .json.

## Conectar uma organização da Google Cloud Platform

Para conectar sua organização GCP aos **Cloud Entitlements**, siga estas etapas:

1. Acesse o **Cloud Entitlements**.  
2. No menu lateral, clique em **Configuração** e selecione **Google Cloud Platform**.  
3. No canto superior direito, clique em **\+ Conectar**.  
4. Selecione a opção **Organização**.  
5. No campo **Nome\***, insira um nome para identificar sua organização Google Cloud.  
6. No campo **ID da organização\***, insira o **ID da organização**.

:::(Info) (Info)
Você pode encontrar o ID da organização no Console GCP, clicando em **Selecione o projeto \> Todos** na barra superior.
:::

7. No campo **Etiquetas**, insira etiquetas para identificar sua organização.  
8. Faça o *upload* do arquivo ```.json``` da chave da conta de serviço.  
9. Clique em **Salvar**.

Se conectado com sucesso, sua organização GCP aparecerá na lista de organizações conectadas. Caso contrário, confira o ID da organização, as funções atribuídas e as APIs ativadas. Note que você não pode conectar uma organização que já está conectada ao **Cloud Entitlements**.

Para fazer quaisquer alterações necessárias, clique no botão **Ações**, representado por três pontos verticais, e clique em **Editar**.

Além disso, você pode ativar ou desativar a conta alternando o **Status switch**.