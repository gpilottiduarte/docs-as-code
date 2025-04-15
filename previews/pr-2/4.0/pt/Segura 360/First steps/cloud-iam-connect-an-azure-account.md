# Como conectar uma conta Azure

:::(Internal) (Private notes)
O conteúdo desta página foi formatado mas não foi atualizado junto do GAP devido ao [bug de integração](https://mt4.atlassian.net/browse/SSGR-3305). 
:::

Para gerenciar usuários, contas, credenciais e máquinas virtuais, é necessário configurar uma conta do Azure para integrar com o Segura.

:::(Info) (Info)
**Cloud IAM** solicita apenas as permissões necessárias para evitar privilégios excessivos.  
:::

## Criando uma aplicação Azure

1. [Acesse a plataforma Azure](https://portal.azure.com/).  
2. Faça *login* na sua conta Azure.  
3. Localize o serviço **Microsoft Entra ID**.  
4. No menu lateral, clique em **Gerenciar** > **Registros de aplicativo**.  
5. Clique em **Novo Registro**.  
6. No campo **Nome***, insira um nome para a aplicação.  
7. Selecione quais tipos de conta podem usar o aplicativo ou acessar a API.  
8. (Opcional) Selecione o URI de redirecionamento para receber a resposta de autenticação.  
9. Clique em **Registrar**.

## Criando um segredo do cliente

1. Selecione uma aplicação Azure.  
2. No menu lateral, clique em **Gerenciar** > **Certificados e segredos**.  
3. Clique em **Novo segredo de cliente.**  
4. No campo **Descrição**, insira uma descrição para o segredo do cliente.  
5. No campo **Expira em**, selecione quando o segredo do cliente será expirado.  
6. Clique em **Adicionar**.

:::(Error) (Alerta)
Copie o campo **Valor** do segredo do cliente imediatamente após sua criação. Certifique-se de salvar o segredo quando criado antes de sair da página, caso contrário, você terá que criar outro segredo.
:::

## Selecionando permissões de API

1. Selecione uma aplicação Azure.  
2. No menu lateral, clique em **Gerenciar** \> **Permissões de APIs**.  
3. Clique em **Adicionar uma permissão**.  
4. Selecione **Microsoft Graph**.  
5. Selecione as seguintes permissões:  
   - Permissões delegadas  
       - ```Directory.AccessAsUser.All```
   - Permissões de aplicações  
       - ```Application.ReadWrite.All```
       - ```AppRoleAssignment.ReadWrite.All```
       - ```Directory.Read.All```
       - ```Directory.ReadWrite.All```
       - ```Organization.Read.All```
       - ```Organization.ReadWrite.All```
       - ```RoleManagement.ReadWrite.Directory```
       - ```User.ManageIdentities.All```
       - ```User.ReadWrite.All```
6. Clique em **Conceder consentimento do administrador para [Nome do diretório]**, e clique em **Sim**.

## Cadastrando uma conta Azure

Para cadastrar uma conta Azure, siga os seguintes passos:

1. Acesse o **Cloud IAM**.  
2. No menu esquerdo, acesse **Configurações** > **Contas**.  
3. No botão **Ações**, clique em **Adicionar conta**.  
4. No campo **Nome***, insira um nome para a conta.  
5. No campo **Ativo***, selecione **Sim** ou **Não**.  
6. No campo **Providers***, selecione **Azure**.  
7. (Opcional) No campo **Descrição**, insira uma descrição para a conta.  
8. (Opcional) No campo **Tags**, insira tags para identificar a conta.  
9. Vá até a aba **Azure**.  
10. No campo **Diretório (tenant) ID***, insira o ID do diretório obtido em [Criando uma aplicação Azure](/v4/docs/pt/cloud-iam-connect-an-azure-account#criando-uma-aplicação-azure).  
11. No campo **Application (Client ID)***, insira o ID do aplicativo obtido em [Criando uma aplicação Azure](/v4/docs/pt/cloud-iam-connect-an-azure-account#criando-uma-aplicação-azure).  
12. No campo **Valor do segredo do cliente***, insira o segredo do cliente obtido em [Criando um segredo do cliente](/v4/docs/pt/cloud-iam-connect-an-azure-account#criando-um-segredo-do-cliente).
13. Na seção **IAM**, selecione as permissões desejadas.  
14. Clique em **Confirmar**.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).
