# Adicionar conta

Para gerenciar usuários, contas, credenciais e máquinas virtuais no **Cloud IAM** você deve criar uma conta para integrar a plataforma Segura com os Provedores de Serviços em Nuvem.

:::(Info) (Info)
Para evitar excesso de privilégios, o **Cloud IAM** requer somente as permissões necessárias para a integração com os provedores.
:::

## Adicionar uma conta

Para adicionar uma conta, siga os passos:

1. Acesse **Cloud IAM \> Configurações \> Contas**.  
2. Clique em **Adicionar**.  
3. Na aba **Configurações**, insira um nome.  
4. Selecione se a conta estará ativa ou não.  
5. (Opcional): Insira uma descrição.  
6. (Opcional): Insira etiquetas.  
7. Navegue para a aba do provedor que deseja cadastrar.

:::(Info) (Info)
Você pode registrar contas da [AWS](/v4/docs/pt/add-account#adicionar-uma-conta-aws), [Azure](/v4/docs/pt/add-account#adicionar-uma-conta-azure) e [Google Cloud](/v4/docs/pt/add-account#adicionar-uma-conta-google-cloud) na mesma tela ao mesmo tempo.
:::

## Adicionar uma conta AWS

Para adicionar uma conta AWS, siga os passos: 

1. Acesse **Cloud IAM \> Configurações \> Contas**.  
2. Adicione ou edite uma conta no **Cloud IAM**.  
3. Vá para a aba **AWS**.  
4. Clique em **Visualizar JSON** para ver as permissões necessárias.  
5. Preencha o campo **Chave de acesso** com o ID da chave de acesso da AWS.
    :::(Info) (Info)
    Para aprender como gerar as **chaves de acesso da AWS** vá para a seção [Configurar AWS](/v4/docs/pt/add-account#configurar-aws) deste documento.  
    :::
6. Preencha o campo **Segredo da chave de acesso** com a secret da chave de acesso da AWS.  
7. Escolha a região padrão da conta AWS.  
8. Na seção **IAM**, marque as caixas de seleção de acordo com as permissões que deseja.  
9. Navegue para a aba **Revisão** e clique em **Salvar**.

## Adicionar uma conta Azure

Para adicionar uma conta Azure, siga os passos: 

1. Acesse **Cloud IAM \> Configurações \> Contas**.  
2. Adicione ou edite uma conta no **Cloud IAM**.  
3. Vá para a aba **Azure**.  
4. No campo **Diretório (tenant) ID**, insira o diretório (tenant) ID.  
5. No campo ***Application (Client ID)***, insira a aplicação (client ID).  
6. No campo **Valor segredo do cliente**, insira o valor de segredo.
    :::(Info) (Info)
    Para aprender como gerar o **valor de segredo do cliente,** vá para a seção [Configurar Azure](/v4/docs/pt/add-account#configurar-azure) deste documento.
    :::
7. Selecione um grupo de acesso.  
8. Clique em **Confirmar**.  
9. Navegue para a aba **Revisão** e clique em **Salvar**.

## Adicionar uma conta Google Cloud

Para adicionar uma conta Google Cloud, siga os passos: 

1. Acesse **Cloud IAM \> Configurações \> Contas**.  
2. Adicione ou edite uma conta no **Cloud IAM**.  
3. Vá para a aba **Google Cloud**.  
4. Clique em ***Choose File***, e selecione o arquivo com a chave de acesso da conta Google Cloud.
    :::(Info) (Info)
    Para aprender como gerar a chave de acesso do Google Cloud, vá para a seção [Configurar Google Cloud](/v4/docs/pt/add-account#configurar-google-cloud) deste documento.
    :::
5. Navegue para a aba **Revisão** e clique em **Salvar**.

## Configurar provedores

Para integrar o Cloud IAM com a AWS, Azure e Google Cloud você deve realizar as seguintes configurações para cada um dos provedores.

### Configurar AWS

Para integrar o **Cloud IAM** com a AWS você deve gerar uma chave de acesso na AWS.

#### Gerar chave de acesso AWS

Para gerar uma chave de acesso da AWS, siga os passos:

1. Vá para a aba de cadastro de conta AWS no **Cloud IAM**, clique em **Visualizar JSON** e copie as permissões.  
2. Faça login na [Amazon Web Services](https://console.aws.amazon.com).  
3. Clique em **Identity and Access Management (IAM)**.  
4. No menu lateral esquerdo, clique em **Políticas**.  
5. Clique em **Criar política,** selecione a aba **JSON** e cole no campo as permissões copiadas no passo 1..
    :::(Error) (Alerta)
    As chaves de acesso devem ser criadas para um usuário que possua as mesmas permissões descritas no arquivo `.json`.
    :::
6. Clique em ***Next: Tags***.  
7. (Opcional): Insira etiquetas.   
8. Clique em ***Next: Review***.  
9. Defina um nome para a política e clique em **Criar política**.  
10. No menu lateral esquerdo, selecione **Usuários** e clique em **Adicionar usuário**.  
11. Em **Especificar detalhes do usuário,** defina o nome do usuário e clique em **Próximo**.  
12. Em **Definir permissões**, selecione **Anexar políticas diretamente** e selecione a política que você criou no passo 8.  
13. Retorne a tela de **Usuários** e selecione o usuário desejado.  
14. Vá para a aba **Credenciais de segurança** e clique em **Criar chaves de acesso**.  
15. Copie os valores **Access key ID** e **Secret access key**.

### Configurar Google Cloud

Para integrar o **Cloud IAM** com o Google Cloud você deve realizar as seguintes ações:

#### Criar uma role

Para criar uma role no Google Cloud, siga os passos:

1. Acesse a sua [conta Google Cloud](http://console.cloud.google.com).  
2. No campo de seleção do projeto, escolha **Organization** e clique em **Roles**, no menu lateral.  
3. Clique no botão **Create role** e preencha os campos:  
   1. *Title* com o nome da role que você deseja criar.  
   2. Clique no botão ***Add permissions*** e adicione as seguintes permissões:  
      * `iam.roles.list`  
      * `iam.serviceAccountKeys.create`  
      * `iam.serviceAccountKeys.delete`  
      * `iam.serviceAccountKeys.get`  
      * `iam.serviceAccountKeys.list`  
      * `iam.serviceAccounts.create`  
      * `iam.serviceAccounts.delete`  
      * `iam.serviceAccounts.get`  
      * `iam.serviceAccounts.list`  
      * `iam.serviceAccounts.update`  
      * `resourcemanager.projects.get`  
      * `resourcemanager.projects.getIamPolicy`  
      * `resourcemanager.projects.setIamPolicy`  
      * `resourcemanager.organizations.get`  
      * `resourcemanager.organizations.getIamPolicy`  
      * `resourcemanager.organizations.setIamPolicy`  
      * `resourcemanager.projects.list`  
   3. Clique no botão **Create**.

#### Criar uma conta de serviço

Para criar um conta de serviço no Google Cloud, siga os passos

1. Escolha um projeto existente ou crie um novo.  
2. No menu de navegação, escolha a opção **IAM & Admin, Service Accounts**.  
3. Clique em **Create service account**.  
4. Preencha o campo **Service account name*** e clique em **Create***.  
5. Clique em **Done**.

#### Criar chave de acesso Google Cloud

1. No menu **Service Accounts**, clique na conta de serviço que você criou.  
2. Clique no botão **Add key** e selecione a opção **Create new key**.  
3. Selecione a opção **JSON** e clique no botão **Create**.  
4. Salve a chave em local seguro.

#### Habilitar APIs

1. Vá para **APIs & Services \> Library** menu.  
2. Localize as APIs listadas abaixo e clique no botão **Enable**.  
   1. *Cloud Resource Manager API*  
   2. *Cloud Asset API*  
   3. *Identity and Access Management (IAM) API*

#### Adicionar conta de serviço na Organização

1. No menu lateral, selecione o serviço **IAM**.  
2. No topo da página, clique no botão **Add**.  
3. No campo **New members**, insira o endereço da conta de serviço criada.  
4. No campo **Select a role**, selecione uma role criada anteriormente.  
5. Clique em **Save***.

### Configurar Azure

Para integrar o **Cloud IAM** com a Azure você deve realizar as seguintes ações:

#### Criar uma conta de serviço

1. Acesse sua [conta Azure](https://portal.azure.com).  
2. Localize o serviço **Active Directory do Azure**.  
3. No menu lateral esquerdo, clique em **Registro de Aplicativo**.  
4. Selecione **Novo Registro**.  
5. Preencha os campos **Nome, Tipo de conta com suporte** e **URI de redirecionamento**.  
6. Clique em **Registrar**.

#### Criar um valor de segredo do cliente

1. Selecione uma aplicação Azure.  
2. No menu lateral esquerdo, selecione **Certificados e segredos**.  
3. Clique em **Novo segredo de cliente**.  
4. Insira uma descrição e tempo de expiração do segredo.  
5. Copie o valor do segredo.

#### Selecionar permissões de API

1. Na Azure, selecione:  
   1. No menu localizado na lateral esquerda, clique em **Permissões de API**.  
   2. Selecione o **Microsoft Graph**.  
   3. As permissões requisitadas são:  
      1. ***Directory Role***:  
         1. Global Administrator  
         2. Tenant root group role  
         3. Owner  
      2. ***API permissions:***  
         1. *Delegated*:  
            1. `Directory.AccessAsUser.All`  
         2. *Application*:  
            1. `Application.ReadWrite.All`  
            2. `AppRoleAssignment.ReadWrite.All`  
            3. `Directory.Read.All`  
            4. `Directory.ReadWrite.All`  
            5. `Organization.ReadWrite.All`  
            6. `RoleManagement.ReadWrite.Directory`  
            7. `User.ManageIdentities.All`  
            8. `User.ReadWrite.All`

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).

