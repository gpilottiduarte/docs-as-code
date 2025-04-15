# Adicionar conta de serviço

Contas de serviço são consideradas os de acesso programático, ou seja, acesso de aplicações e máquinas às contas dos provedores de clouds.

## Criar conta de serviço

Para adicionar uma conta de serviço, siga os passos:

1. Acesse **Cloud IAM \> Gerenciamento de identidade \> Contas de serviço**.  
2. Clique em **Adicionar**.  
3. No campo **Nome \***, insira o nome da conta de serviço.
    :::(Warning) (Atenção)
    Caso você seja membro de um grupo de acesso que tenha um template definido ao inserir o usuário ele deverá seguir a regra estabelecida no template.
    :::
4. No campo **Usuário responsável**, selecione qual usuário do Segura é responsável pela conta de serviço.  
5. No campo **TTL (segundos)**, insira o tempo de vida da conta de serviço e suas credenciais.  
6. (Opcional): No campo **Descrição**, insira uma descrição.  
7. (Opcional): No campo **Tags**, insira *tags*.  
8. Navegue até a aba do provedor que deseja adicionar.

:::(Info) (Info)
Você pode registrar contas da [AWS](/v4/docs/pt/add-service-account#adicionar-uma-conta-de-serviço-aws), [Azure](/v4/docs/pt/add-service-account#adicionar-uma-conta-de-serviço-azure) e [Google Cloud](/v4/docs/pt/add-service-account#adicionar-uma-conta-de-serviço-google-cloud) na mesma tela ao mesmo tempo.
:::

## Adicionar uma conta de serviço AWS

Para adicionar uma conta de serviço AWS, siga os passos: 

1. Acesse **Cloud IAM \> Configurações \> Contas**.  
2. Adicione ou edite uma conta no **Cloud IAM**.  
3. Vá para a aba **AWS**.  
4. Na seção **Contas**, selecione em quais contas esta conta de serviço deverá ser criada.  
5. Na seção **Políticas**, selecione as políticas (grupo de permissões) que esta conta de serviço deverá possuir na conta. A AWS limita em até 10 políticas por conta de serviço.  
6. Navegue para a aba **Revisão** e clique em **Salvar**.

## Adicionar uma conta de serviço Azure

Para adicionar uma conta de serviço Azure, siga os passos: 

1. Acesse **Cloud IAM \> Configurações \> Contas**.  
2. Adicione ou edite uma conta no **Cloud IAM**.  
3. Vá para a aba **Azure**.  
4. Na seção **Tipos de contas suportadas**, especifique quem pode usar a conta de serviço.  
5. Na seção **URI de redirecionamento**, insira a localização para a qual a plataforma de identidade da Microsoft redireciona o cliente de um usuário e envia tokens de segurança após a autenticação.  
6. Na seção **Permissões de API**, selecione quais permissões a conta de serviço deverá possuir.  
7. Navegue para a aba **Revisão** e clique em **Salvar**.

## Adicionar uma conta de serviço Google Cloud

Para adicionar uma conta de serviço Google Cloud, siga os passos: 

1. Acesse **Cloud IAM \> Configurações \> Contas**.  
2. Adicione ou edite uma conta no **Cloud IAM**.  
3. Vá para a aba **Google Cloud**.  
4. Na seção **Papéis da organização,** selecione quais roles (grupos de permissões), contas e organizações a conta de serviço deverá ser adicionada.  
5. Na seção **Papéis de projeto**, selecione quais roles (grupos de permissões), contas e projetos a conta de serviço deverá ser adicionada.  
6. Navegue para a aba **Revisão** e clique em **Salvar**.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).