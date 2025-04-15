# Como integrar o JumpCloud

Esse tutorial apresenta um guia sobre como integrar o senhasegura e a JumpCloud, para utilizar o SAML como protocolo de autenticação. A integração é configurada de forma paralela, alternando a inclusão de informações entre os ambientes até a conclusão do processo.

## Requisitos

* [Perfil Administrador na conta JumpCloud](https://jumpcloud.com/support/add-users-to-admin-portal).
* [Grupo de usuários na conta JumpCloud](https://jumpcloud.com/support/get-started-user-groups#creating-user-groups) com todos os usuários que acessarão o senhasegura via Jumpcloud.  

## Passo 1: Criar a aplicação no JumpCloud

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
## Passo 2: Habilitar o provedor SAML no senhasegura

1. No canto superior esquerdo da plataforma senhasegura, clique no **Grid Menu ⁝⁝⁝**, indicado pela caixa de nove quadrados, e selecione **Configurações**.
2. Selecione **Autenticação ➔ Provedores**.
3. Na lista de provedores, localize a opção **SAML**.
4. Na coluna **Ativo**, confirme que a opção encontra-se habilitada. 
    4.1 Se necessário, clique em **Ativar**, ícone identificado pelo sinal de correto (✓).
***
## Passo 3: Criar provedor SAML no senhasegura

1. No canto superior esquerdo da plataforma senhasegura, clique no **Grid Menu ⁝⁝⁝**, indicado pela caixa de nove quadrados, e selecione **Configurações**. 
2. Selecione **Configurações ➔ Autenticação ➔ SAML ➔ Provedores**.
3. No canto superior direito, clique em **Exibir ações**, ícone identificado por três pontos verticais (⁝).
4. Selecione **Novo provider**.

### Na aba Informações principais
Preencha as informações:

1. **Tipo**: selecione **SAML provider**.
2. **Ativo**: mantenha como **Sim**.
3. **ID da entidade**: preencha com o mesmo nome inserido no campo **Display Label**. 
4. **URL de metadados do provider SAML**: preencha com o URL. 
    4.1 Encontre essa informação na aba **SSO** do Jumpcloud. Clique no botão **Copy Metadata URL** para copiar.
5. **Domínio ou IP público para URL de redirecionamento**: preencha com a URL do senhasegura ou domínio.
6. **URL de redirecionamento (Redirect URL)**: preenchimento automático.
7. **SSO Logout URL (Sign-out URL)**: preencha com a URL. 
    7.1 Encontre essa informação na aba **SSO** do Jumpcloud. Copie a informação do campo **IDP URL**.
8. **Tipo de Redirect Binding**: selecione **POST**.

### Na aba SAML de segurança

Preencha as informações:
1. Baixe o certificado do provedor e copie o conteúdo.
    :::(Info) (Info)
    Caso você não tenha salvado a informação do certificado, dentro do JumpCloud vá ao menu lateral esquerdo da aplicação que você criou, clique em **IDP Certificate Valid**, e após, selecione **Download certificate**.
    :::
2. **Certificado (formato PEM)**: cole o conteúdo do certificado.
3. Clique em **Salvar**.

O sistema exibe uma mensagem de sucesso e o provedor aparece listado na página inicial.
***
## Passo 4: Acessar o senhasegura via Jumpcloud

1. Na tela inicial da plataforma senhasegura, clique em **Sign in with SSO**.
2. Clique em **SAML Provider**. Você será redirecionado a tela de autenticação do Jumpcloud para adicionar suas credenciais.
3. Após a autenticação, clique na aplicação senhasegura para acessar o cofre.
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).