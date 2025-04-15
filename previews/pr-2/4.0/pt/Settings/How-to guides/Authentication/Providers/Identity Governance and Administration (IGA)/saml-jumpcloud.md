# Como integrar o JumpCloud

Esse tutorial apresenta um guia sobre como integrar o Segura e a JumpCloud, para utilizar o SAML como protocolo de autenticação. A integração é configurada de forma paralela, alternando a inclusão de informações entre os ambientes até a conclusão do processo.

## Requisitos

* [Perfil Administrador na conta JumpCloud](https://jumpcloud.com/support/add-users-to-admin-portal).
* [Grupo de usuários na conta JumpCloud](https://jumpcloud.com/support/get-started-user-groups#creating-user-groups) com todos os usuários que acessarão o Segura via Jumpcloud.  

## Criar a aplicação no JumpCloud

1. Na barra lateral esquerda do JumpCloud, localize a seção **User Authentication**.
2. Selecione **SSO**.
3. Clique em **Add New Application**.
4. No campo de busca, procure por **SAML**.
5. Em **Custom SAML App**, clique em **configure**.

### Na aba General Info
1. Preencha o campo **Display Label** com o nome de sua aplicação.

### Na aba SSO
Preencha as informações:

1. **IdP Entity ID**: identificador único.
2. **SP Entity ID**: `SENHASEGURA_SERVICE_PROVIDER`
3. **ACS URLs**: `https://sua_url/flow/saml/auth/assert`
4. **SAMLSubject NameID**: selecione a informação que os usuários utilizarão para logar.
5. **SAMLSubject NameID Format**: selecione uma das opções SAML 2.0, correspondente ao campo anterior.
6. **Signature Algorithm**: selecione **RSA-SHA256**.
7. **Default RelayState**: deixe em branco.
8. **Login URL**: `https://sua_url/flow/saml/auth/assert`
9. **IDP URL**: troque o nome que vem por padrão por outra identificação.

### Na aba User Groups

1. Selecione o grupo que acessará a aplicação e clique em **activate**. 
2. Uma mensagem de confirmação da nova conexão SSO aparece. 
3. Clique em **continue** para concluir o processo.

Em caso de sucesso, a aplicação aparece listada na página **Configured Applications**. 

:::(Info) (Info)
Na mensagem pop-up que aparece no canto superior direito em azul, clique para baixar o certificado. Essa informação será necessária posteriormente.
:::
:::(Warning) (Atenção)
Mantenha o Jumpcloud aberto para as próximas configurações.
:::
***
## Habilitar o provedor SAML no Segura

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Provedores**.
3. Localize o provedor SAML, clique no botão **Ações** e selecione **Ativar**.

## Registrar provedor SAML no Segura

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> SAML > Provedores**.
3. Clique no botão **Adicionar**.
4. Na tela **Registro de provedor SAML**:
    1. **Tipo**: selecione **SAML provider**.
    2. **Ativo**: mantenha como **Sim**.
    3. **ID da entidade**: preencha com o mesmo nome inserido no campo **Display Label**. 
    4. **URL de metadados do provider SAML**: preencha com o URL. 
        4.1 Encontre essa informação na aba **SSO** do Jumpcloud. Clique no botão **Copy Metadata URL** para copiar.
    5. **Domínio ou IP público para URL de redirecionamento**: preencha com a URL do Segura ou domínio.
    6. Seção **Configuração se URLs:**
        1. **URL de redirecionamento (Redirect URL)**: preenchimento automático.
        2. **SSO Logout URL (Sign-out URL)**: preencha com a URL. 
            1. Encontre essa informação na aba **SSO** do Jumpcloud. Copie a informação do campo **IDP URL**.
        3. **Tipo de Redirect Binding**: selecione **POST**.
    7. Seção **SAML de segurança**:
        1. Baixe o certificado do provedor e copie o conteúdo.
            :::(Info) (Info)
            Caso você não tenha salvado a informação do certificado, dentro do JumpCloud vá ao menu lateral esquerdo da aplicação que você criou, clique em **IDP Certificate Valid**, e após, selecione **Download certificate**.
            :::
        2. **Certificado (formato PEM)**: cole o conteúdo do certificado.
3. Clique em **Salvar**.

O sistema exibe uma mensagem de sucesso e o provedor aparece listado na página inicial.
***
## Acessar o Segura via Jumpcloud

1. Na tela inicial da plataforma Segura, clique em **Sign in with SSO**.
2. Clique em **SAML Provider**. Você será redirecionado a tela de autenticação do Jumpcloud para adicionar suas credenciais.
3. Após a autenticação, clique na aplicação Segura para acessar o cofre.
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).