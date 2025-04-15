# Como adicionar o provedor SAML no senhasegura

Para finalizar a disponibilização de SSO para usuários remotos no **Domum Remote Access**, o último passo é adicionar o provedor SAML no senhasegura. Neste artigo, você encontra um passo a passo para essa tarefa.

:::(Info) (Info)
Esta documentação foi desenvolvida com a Okta. Os passos podem variar e requerer adaptações para uso em outros provedores.
:::

* * *
## Passo 1: Colete informações

1. Na sua conta da Okta, acesse a área de administração.
:::(Info) (Info)
Se o seu usuário não entrar automaticamente na área de administração, clique no botão **Admin** no canto superior direito da tela.
:::
2. No menu do canto superior esquerdo, selecione **Applications > Applications**.
3. Localize a aplicação SAML que você acabou de criar.
4. Clique na aplicação.
5. Na aba **Sign On**, localize o campo **Metadata details**.
    1. Copie a URL exibida para utilizar no próximo passo.
6. Ainda na aba **Sign On**, clique em **More details**.
7. Localize o campo **Sign on URL**.
    1. Copie a URL exibida para utilizar no próximo passo.

:::(Info) (Info)
Para facilitar a configuração na senhasegura, deixe sua aplicação da Okta aberta nesta tela.
:::

* * *
## Passo 2: Escolha o ambiente para cadastrar o provedor SAML
O senhasegura possibilita dois tipos de ambientes para o cadastro de provedor SAML:

* **Provedor SAML no ambiente do Domum Remote Access**: acesso SSO para usuários internos e usuários terceiros via **Domum**.
* **Provedor SAML em ambiente local**: acesso SSO somente para usuários internos via rede local. Esta opção é adequada para usuários internos que já estão na rede corporativa.

:::(Warning) (Cuidado)
Você pode disponibilizar o cadastro dos dois ambientes para usuários internos. Contudo, nesse cenário, é preciso criar no provedor Okta uma aplicação para cada ambiente. O sistema não aceitará o cadastro da mesma aplicação para ambiente **Local** e ambiente **Domum Remote Access**. 
:::

* * *
## Passo 3: Adicione o provedor SAML para acesso via Domum

:::(Info) (Info)
Este provisionamento serve tanto para usuários internos quanto para terceiros.
:::

1. Acesse a plataforma senhasegura.
2. No canto superior esquerdo, clique em **Grid Menu**, indicado pela caixa de nove quadrados, e selecione **Configurações**.
3. No menu lateral, acesse **Autenticação > SAML > Provedores**. 
4. No canto superior direito, clique no ícone de três pontos verticais (**Exibir Ações**) e selecione **+ Novo provider**.
5. Na janela de cadastramento, complete as informações na aba **Informações principais**:
    1. No campo **Tipo***, selecione **Okta**.
    2. Em **Ativo***, marque **Sim**.
    3. Em **Ambiente***, marque **Domum Remote Access**.
    4. Em **ID da entidade***, digite o nome cadastrado na aba **General Settings** na [etapa de criação da aplicação](/v3-33/docs/pt/domum-how-to-create-a-saml-application-with-okta). Exemplo: ```MyAppExample```.
    5. Em **URL de metadados do provider SAML***, cole o valor gerado automaticamente pela Okta no campo **Metadata details**. Você obteve esse valor na etapa [Colete informações](/v3-33/docs/pt/domum-how-to-add-the-saml-provider-to-senhasegura#passo-1-colete-informações). Exemplo: ```https://trial-3650301.okta.com/app/exk6r8qx6pDaZv6IP697/sso/saml/metadata```.
    6. Em **Domínio ou IP público para URL de redirecionamento***, digite a URL padrão do senhasegura. Exemplo: ```https://mysenhasegura.com```. 
    :::(Warning) (Cuidado)
    Não insira a barra à direita no final da URL.
    :::
    7. O sistema preencherá automaticamente o campo **URL de redirecionamento (Redirect URL)*.**
    8. Em **SSO URL de login (Sign-in URL)*** , cole o valor gerado automaticamente pela Okta no campo **Sign on URL**. Você obteve esse valor na etapa [Colete informações](/v3-33/docs/pt/domum-how-to-add-the-saml-provider-to-senhasegura#passo-1-colete-informações) Exemplo: ```https://trial-3650301.okta.com/app/trial-3650301_testesso1_1/exk6r8qx6pDaZv6IP697/sso/saml```.
    9. Em **SSO URL de logout (Sign-out URL)**, digite a URL da aplicação Okta. Exemplo:  ```https://trial-3650301.okta.com/```.
    10. Em **Tipo de Redirect Binding**, selecione **REDIRECT**.
6. Ainda na janela de cadastramento, preencha a aba **SAML de segurança**:
    1. Faça o download do certificado do provedor e copie seu conteúdo.
    2. Em **Certificado (formato PEM)**: cole o conteúdo do certificado.
    :::(Info) (Info)
    Se você não salvou as informações do certificado, elas podem ser encontradas na área de administração do Okta.
    :::
7. Clique em **Salvar**.

Uma janela pop-up exibirá uma mensagem de confirmação indicando a conclusão do processo. O provedor SAML que você acabou de cadastrar aparece no relatório de **Provedores SAML**, identificado na coluna **Ambiente** como **Domum Remote Access**.

O **Domum Remote Access** já consegue oferecer o login por SSO para usuários internos e usuários terceiros e o provedor de acesso se encarregará da autenticação.

* * *
## Passo 4: Adicione o provedor SAML para acesso via rede local 

:::(Info) (Info)
Este provisionamento serve apenas para usuários internos.
:::

1. Acesse a plataforma senhasegura.
2. No canto superior esquerdo, clique em **Grid Menu**, indicado pela caixa de nove quadrados, e selecione **Configurações**.
3. No menu lateral, acesse **Autenticação > SAML > Provedores**. 
4. No canto superior direito, clique no ícone de três pontos verticais (**Exibir Ações**) e selecione **+ Novo provider**.
5. Na janela de cadastramento, complete as informações na aba **Informações principais**:
    1. No campo **Tipo***, selecione **Okta**.
    2. Em **Ativo***, marque **Sim**.
    3. Em **Ambiente***, marque **Local**.
    4. Em **ID da entidade***, digite o nome cadastrado na aba **General Settings** na [etapa de criação da aplicação](/v3-33/docs/pt/domum-how-to-create-a-saml-application-with-okta). Exemplo: ```MyAppExample```.
    5. Em **URL de metadados do provider SAML***, cole o valor gerado automaticamente pela Okta no campo **Metadata details**. Você obteve esse valor na etapa [Colete informações](/v3-33/docs/pt/domum-how-to-add-the-saml-provider-to-senhasegura#passo-1-colete-informações) . Exemplo: ```https://trial-3650301.okta.com/app/exk6r8qx6pDaZv6IP697/sso/saml/metadata```.
    6. Em **Domínio ou IP público para URL de redirecionamento***, digite a URL padrão do senhasegura. Exemplo: ```https://mysenhasegura.com```. 
    :::(Warning) (Cuidado)
   Não insira a barra à direita no final da URL.
    :::
    7. O sistema preencherá automaticamente o campo **URL de redirecionamento (Redirect URL)*.**
    8. Em **SSO URL de login (Sign-in URL)*,** cole o valor gerado automaticamente pela Okta no campo Sign on URL. Você obteve esse valor na etapa [Colete informações](/v3-33/docs/pt/domum-how-to-add-the-saml-provider-to-senhasegura#passo-1-colete-informações). Exemplo: ```https://trial-3650301.okta.com/app/trial-3650301_testesso1_1/exk6r8qx6pDaZv6IP697/sso/saml```.
    9. Em **SSO URL de logout (Sign-out URL)**, digite a URL da aplicação Okta. Exemplo:  ```https://trial-3650301.okta.com/```.
    10. Em **Tipo de Redirect Binding**, selecione **REDIRECT**.
6. Clique em **Salvar**.

Uma janela pop-up exibirá uma mensagem de confirmação indicando a conclusão do processo. O provedor SAML que você acabou de cadastrar aparece no relatório de **Provedores SAML**, identificado na coluna **Ambiente** como **Local**.

O senhasegura já consegue oferecer o login por SSO para usuários internos, e o provedor de acesso se encarregará da autenticação.

* * *
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).

