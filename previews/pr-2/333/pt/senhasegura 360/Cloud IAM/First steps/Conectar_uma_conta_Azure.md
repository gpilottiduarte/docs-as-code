# Conectar uma conta Azure

:::(Internal) (Private notes)
O conteúdo desta página foi formatado mas não foi atualizado junto do GAP devido ao [bug de integração](https://mt4.atlassian.net/browse/SSGR-3305). 
:::

Para gerenciar usuários, contas, credenciais e máquinas virtuais, é necessário configurar uma conta do Azure para integrar com o senhasegura.

:::(Info) (Info)
 **Cloud IAM** solicita apenas as permissões necessárias para evitar privilégios excessivos.
:::

## Configurar a Azure

1. Acesse sua conta em https://portal.azure.com/;
2. Localize o serviço **Active Directory do Azure**;
3. No menu lateral esquerdo, clique em **Registro de Aplicativo**;
4. Selecione **Novo Registro**;
5. Preencha os campos **Nome, Tipo de conta com suporte** e **URI de redirecionamento**;
6. Para finalizar, clique em **Registrar**.

### Criar um Valor de segredo do cliente

1. Selecione uma **aplicação** no Azure;
2. No menu lateral esquerdo, selecione **Certificados e segredos**;
3. Clique em **Novo segredo de Cliente**
4. Insira uma **descrição** e tempo de **expiração** da secret;
5. Copie o **Valor** da Secret.

### Selecionar permissões de API

1. No Azure, selecione:
    1. No menu localizado na lateral esquerda, clique em **Permissões de API;**
    2. Selecione o **Microsoft Graph**;
    3. As permissões requisitadas são:
        - **Directory role:**
            - Global administrator
            - Tenant root group role:
            - Owner
        - **API permissions:**
            - Delegated:
                - `Directory.AccessAsUser.All`
            - Application:
                - `Application.ReadWrite.All`
                - `AppRoleAssignment.ReadWrite.All`
                - `Directory.Read.All`
                - `Directory.ReadWrite.All`
                - `Organization.ReadWrite.All`
                - `RoleManagement.ReadWrite.Directory`
                - `User.ManageIdentities.All`
                - `User.ReadWrite.All`

### Cadastrar uma conta Azure

Para cadastrar uma conta Azure, acesse **Cloud IAM** > **Configurações** > **Contas** e siga os passos:

1. Clique no ícone de **Exibir ações** e selecione **Adicionar conta**.
2. Na aba **Configurações**, defina um **Nome**.
3. Selecione **Sim** ou **Não** para **Ativo**.
4. Selecione o item **Azure**.
5. Vá para a aba **Azure**.
6. Preencha os campos de **Diretório (tenant) ID**.
7. Preencha os campos **Application (Client ID)** e **Valor de segredo do cliente**.
8. Selecione um grupo de acesso.
9. Para finalizar, clique em **Confirmar**.
