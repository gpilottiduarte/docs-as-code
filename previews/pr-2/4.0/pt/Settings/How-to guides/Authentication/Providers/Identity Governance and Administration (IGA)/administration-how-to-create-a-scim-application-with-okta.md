# Como criar uma aplicação SCIM com a Okta

Neste artigo, você encontra um tutorial para criar uma aplicação SCIM na ferramenta de provedor de usuários Okta.

## Recursos Suportados

- Criar Usuários
- Atualizar Atributos do Usuário
- Desativar Usuários
- Importar Usuários
- Importar Grupos 
- Group push

* * *
## Requisitos

* Ferramenta Postman ou equivalente para [geração manual de token de acesso](/v4/docs/pt/administration-how-to-manually-create-an-activation-token).
* Permitir a comunicação entre as plataformas Segura e Okta.
* Uma conta válida com permissão de administrador na Okta.
* Um grupo com usuários [já criado na Okta](https://help.okta.com/asa/en-us/Content/Topics/Adv_Server_Access/docs/setup/create-a-group.htm#:~:text=Open%20the%20Advanced%20Server%20Access%20dashboard.%20Click%20Groups.,the%20group.%20See%20Team%20roles.%20Click%20Create%20Group.){target="_blank"}.
* O identificador único do usuário cadastrado na Okta deve ser o endereço de e-mail.
* Os usuários cadastrados na Okta não podem ter mais de um e-mail. 

## Criar aplicação SCIM

:::(Warning) (**Atenção**)
* A Okta pode alterar o ambiente de desenvolvimento sem aviso. Dessa forma, os passos podem mudar conforme as alterações.
* Dependendo das configurações prévias do ambiente Okta do cliente, as informações descritas no passo a passo podem não coincidir.
:::

1. Na sua conta da Okta, acesse a área de administração. Se o seu usuário não entrar automaticamente na área de administração, clique no botão **Admin** no canto superior direito da tela.
5. No menu do canto superior esquerdo, selecione **Applications > Applications**.
6. Na nova página, clique no botão **Create App Integration**.
7. Na janela **Create a new app integration**, selecione **SWA - Secure Web Authentication**.
8. Clique em **Next**. 
9. Você verá duas seções na página **Create SWA Integration**. Na seção **General App Settings**, preencha as informações.
    6.1. **App name**: digite um nome descritivo.
    6.2. **App´s login page URL**: complete com o endereço para o servidor Segura. Exemplo: ```https://mysenhasegura.exemple.com```.
    6.3. Clique em **Show Advanced Settings**.
    6.4. Complete o campo **Redirect URL** com a URL digitada no campo **App´s login page URL** e adicione ```/flow/auth/signin``` no final. Exemplo:  ```https://mysenhasegura.exemple.com/flow/auth/signin```.
    6.5. Deixe as caixas de texto **Do not display application icon to users** e **This is an internal application** em branco.
10. Na seção **How will your users sign in?**, complete as informações.
    7.1. Em **Who sets the credentials?**, selecione **Administrator sets username, password is the same as user's Okta password**.
    7.2. Em **Application username**, selecione **Custom**. Em seguida, no campo **Enter a custom rule**, digite ```user.login```
    7.3. Em **Update application username on**, selecione **Create and update**.
11. Clique em **Finish**.
***

## Autenticar a aplicação SCIM

1. Após criar a aplicação no passo anterior, na tela inicial da **Application**, selecione a aba General.
2. Na seção **App Settings**, clique no botão **Edit**.
3. Localize o campo **Provisioning** e marque **SCIM**.
4. Clique em **Save**. 
5. Vá para a aba **Provisioning**.
6. Na coluna da esquerda, em **Settings**, localize **Integration**. Clique no botão **Edit** e complete as informações.
    6.1. No campo **SCIM connector base URL**, preencha com a URL de login Segura (a mesma URL do campo **App Login Page URL**) e adicione ```/iso/scim/v2``` no final.  Exemplo: ```https://mysenhasegura.exemple.com/iso/scim/v2```.
    6.2. No campo **Unique identifier field for users**, digite o texto simples ```email```.
    6.3. Em **Supported provisioning actions**, marque as caixas **Push New Users**, **Push Profile Updates** e **Push Groups**.
    6.4. Em **Authentication Mode**, selecione **HTTP Header**.
    6.5. Em **Authorization**, complete com o [Access Token gerado manualmente pelo Postman](/v4/docs/pt/administration-how-to-manually-create-an-activation-token).
    6.6. Clique **Test connector**.
    6.7. Clique **Save**.

## Provisionar a aplicação SCIM

1. Ainda na tela da sua aplicação, permaneça na aba **Provisioning**.
2. Na coluna da esquerda, em **Settings**, selecione **To App**.
3. No campo **Provisioning to App**, clique no botão **Edit**.
    3.1. Em **Create Users** marque **Enable**.
    3.2. Em **Update User Attributes** marque **Enable**.
    3.3. Em **Deactivate Users** marque **Enable**.
    3.4. Deixe **Sync Password** em branco.
4. Clique em **Save**.
5. Na coluna da esquerda, em **Settings**, selecione **To Okta**.
6. Na seção **Import Safeguard**, clique no botão **Edit**.
    6.1. Em **App unassignment safeguard** selecione **Enabled**.
    6.2. Selecione **20** antes do texto **is the threshold for unassignments from any app**.
    6.3. Em **Org-wide unassignment safeguard** selecione **Enabled**.
    6.4. Selecione **20** antes do texto **is the threshold for unassignments from any**.
7. Clique em **Save**.
***

## Associar um grupo à aplicação SCIM

1. No menu lateral esquerdo da plataforma Okta, selecione **Directory > Groups**.
2. Em **Group name**, clique sobre o nome do grupo que você deseja associar à sua aplicação.
3. Na aba **Applications**, clique no botão **Assign applications**.
4. Localize na lista o nome da aplicação SCIM que você criou e clique em **Assign**.
5. Na janela **Assign Applications to (Nome do grupo que será associado à aplicação)**.
6. Clique **Save and Go Back**.
7. Clique em **Done**.
***

## Ativar o grupo na aplicação

1. No menu lateral esquerdo da plataforma Okta, selecione **Applications > Applications**.
2. Clique na aplicação que você criou.
3. Na tela inicial da sua aplicação, selecione a aba **Push Groups**.
4. Localize o botão **Push Groups** e selecione **+ Find groups by name**.
5. Digite o nome do grupo que você vai ativar no campo **Enter a group to push**.
6. Clique em **Save**.
7. Aguarde a finalização do pushing.
8. Na coluna **Push Status**, à direita, você verá a confirmação **Active** em verde.

Sua aplicação SCIM está configurada na Okta. Os grupos ativados na aplicação aparecerão na plataforma Segura.

* Se você criou um grupo de **Fornecedores**, consulte a lista em **Grid Menu > Domum Remote Access > Settings > Vendor**.
* Se você criou um **Grupo de usuários internos**, consulte a lista em: 
    * **Grid Menu > Settings > User Management > Users para usuários**.
    * **Grid Menu > Domum > Settings > Internal Users > Group para grupos**.
