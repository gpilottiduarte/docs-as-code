# Como criar uma aplicação SAML com Okta

Neste artigo, você encontra um guia para criar uma aplicação SAML na ferramenta de provedor de usuários Okta.

### Recursos Suportados

* SP Initiated SSO (Through senhasegura login interface)
* IDP-Initiated SSO (Through provider interface)

* * *
## Requisitos

* [Habilitar as configurações de SSO](/v3-33/docs/pt/domum-how-to-enable-saml-for-sso-in-senhasegura) no senhasegura e no **Domum Remote Access**.
* Permitir a comunicação entre as plataformas senhasegura e Okta.
* Conta válida com permissão de administrador na Okta.
* Ao cadastrar um usuário na Okta, o identificador único desse usuário deve ser o endereço de e-mail.
* O mesmo usuário não pode ter mais de um e-mail cadastrado na Okta.
* No cenário de integração com a Okta, ao cadastrar um usuário no senhasegura, o identificador único desse usuário deve ser o endereço de e-mail. 

* * *
## Passo 1: Criar aplicação SAML
:::(Warning) (Atenção)

* A Okta pode alterar o ambiente de desenvolvimento sem aviso. Dessa forma, os passos podem mudar conforme as alterações.
* Dependendo das configurações prévias do ambiente Okta do cliente, as informações descritas aqui podem não coincidir.

:::

1. Na sua conta da Okta, acesse a área de administração.
:::(Info) (Info)
Se o seu usuário não entrar automaticamente na área de administração, clique no botão **Admin** no canto superior direito da tela.
:::
2. No menu do canto superior esquerdo, selecione **Applications > Applications**.
3. Na nova página, clique no botão **Create App Integration**.
4. Na janela **Create a new app integration**, selecione **SAML 2.0**.
5. Clique em **Next**. 
6. Na aba **General Settings**, digite o nome da aplicação no campo **App name**. Exemplo: ```MyAppExample```.
7. Clique em **Next**.
8. Na aba **Configure SAML**, preencha as informações:
    1. Na seção **SAML Settings**, complete os campos:
        1. **Single sign-on URL**: copie a URL gerada automaticamente pelo **Domum Remote Access** no campo **URL de retorno para SSO** durante a etapa de [configuração do SAML](/v3-33/docs/pt/domum-how-to-enable-saml-for-sso-in-senhasegura). Lembre-se de acrescentar ```https://``` no início. Exemplo: ```https://gyf46xzp9iee2kfwtvs4g7pcxz32r649dme8.ahs7ietu.domum.senhasegura.link/domum/sso```.
        2. **Audience URI (SP Entity ID)**: digite um nome descritivo para cadastrar a entidade na senhasegura. Exemplo: ```MyAppExample```.
        3. **Name ID format**: selecione **Email Address**.
        4. **Application username**: selecione **Email**.
        5. **Update application username on**: selecione **Create and update**.
    2. Clique em **Show Advanced Settings** e preencha os campos:
        1. **Response**: selecione **Signed**.
        2. **Assertion Signature**: selecione **Signed**.
        3. **Signature Algorithm**: selecione **RSA-SHA256**.
        4. **Digest Algorithm**: selecione **SHA-256**.
        5. **Assertion Encryption**: selecione **Unencrypted**.
        6. **Assertion Inline Hook**: selecione **None (disabled)**.
        7. **Authentication context class**: selecione **PasswordProtectedTransport**.
        8. **Honor Force Authentication**: selecione **Yes**.
        9. **SAML Issuer ID**: digite ```http://www.okta.com/${org.externalKey}```.
    3. Clique em **Next**.
9. Na aba **Feedback**, complete as informações:
    1. Em **Are you a customer or partner?**, selecione **I'm an Okta customer adding an internal app**.
    2. Em **App type**, selecione **This is an internal app that we have created**.
    3. Clique em **Finish**.

* * *
## Passo 2: Validar as informações

1. Na página da aplicação que você acabou de criar, selecione a aba **General**.
2. Valide as informações.
    1. **Application label**: deve estar com o nome cadastrado na aba **General Settings** durante a [etapa de criação da aplicação](/v3-33/docs/pt/domum-how-to-create-a-saml-application-with-okta#passo-1-criar-aplicação-saml). Exemplo: ```MyAppExample```.
    2. **Provisioning**: deve estar marcado como **None**. 
    3. Em **SAML Settings**, siga validando as informações:
        1. **Single sign-on URL**: deve estar com a URL gerada automaticamente pelo **Domum Remote Access**. Lembre-se de acrescentar ```https://``` no início. Exemplo: ```https://gyf46xzp9iee2kfwtvs4g7pcxz32r649dme8.ahs7ietu.domum.senhasegura.link/domum/sso```.
        2. **Recipient URL**: deve estar com a URL gerada automaticamente pelo **Domum Remote Access**. Lembre-se de acrescentar ```https://``` no início. Exemplo: ```https://gyf46xzp9iee2kfwtvs4g7pcxz32r649dme8.ahs7ietu.domum.senhasegura.link/domum/sso```.
        3. **Destination URL**: deve estar com a URL gerada automaticamente pelo **Domum Remote Access**. Lembre-se de acrescentar ```https://``` no início. Exemplo: ```https://gyf46xzp9iee2kfwtvs4g7pcxz32r649dme8.ahs7ietu.domum.senhasegura.link/domum/sso```.
        4. **Audience Restriction**: deve estar com o nome descritivo cadastrado para a entidade na senhasegura na [etapa de criação da aplicação](/v3-33/docs/pt/domum-how-to-create-a-saml-application-with-okta#passo-1-criar-aplicação-saml). Exemplo: ```MyAppExample```.
        5. **Name ID Format**: deve estar **Email Address**.
        6. **Response**: deve estar **Signed**.
        7. **Assertion Signature**: deve estar **Signed**.
        8. **Signature Algorithm**: deve estar **RSA-SHA256**.
        9. **Digest Algorithm**: deve estar **SHA-256**.
        10. **Assertion Encryption**: deve estar **Unencrypted**.
        11. **SAML Single Logout**: deve estar **Disabled**.
        12. **SAML Signed Request**: deve estar **Disabled**.
        13. **authnContextClassRef**: deve estar **PasswordProtectedTransport**.
        14. **Honor Force Authentication**: deve estar **Yes**.
        15. **Assertion Inline Hook**: deve estar **None (disabled)**.
        16. **SAML Issuer ID**: deve estar ```http://www.okta.com/${org.externalKey}```.
3. Vá para a aba **Sign On** e valide as informações na seção **Credentials Details**:
    1. **Application username format**: deve estar **Email**. 
    2. **Update application username on**: deve estar **Create and update**.

* * *
## Passo 3: Adicionar grupos ou pessoas

1. Na página da sua aplicação, selecione a aba **Assignments**.
2. Para adicionar grupos, localize o botão **Assign** e selecione **Assign to Groups**.
    1. Localize na lista que aparece o grupo que você quer associar.
    2. Clique em **Assign**.
    3. Clique em **Done**.
3. Para adicionar pessoas, localize o botão **Assign** e selecione **Assign to People**.
4. Escolha na lista o usuário que você quer associar.
5. Clique em **Assign**.
:::(Warning) (Cuidado)

* É importante lembrar que o username deve ser o email. 
* Além disso, o usuário remoto precisa ter o mesmo e-mail cadastrado na Okta e na plataforma senhasegura. Você encontra os e-mails em:
    * **Grid Menu > Domum Remote Access > Settings  > Third-party users** (para usuários terceiros).
    * **Grid Menu > Settings > User Management > Users** (para usuários internos).

:::
6. Clique **Save and Go Back**.
7. Clique em **Done**.

Sua aplicação SAML está configurada na Okta. Você utilizará informações da aplicação para adicionar esse provedor SAML no senhasegura.

* * *

### Problemas Conhecidos/Solução de Problemas
N/A

* * *

### Próximos passos

* [Como adicionar o provedor SAML no senhasegura](/v3-33/docs/pt/domum-how-to-add-the-saml-provider-to-senhasegura)

* * *
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
