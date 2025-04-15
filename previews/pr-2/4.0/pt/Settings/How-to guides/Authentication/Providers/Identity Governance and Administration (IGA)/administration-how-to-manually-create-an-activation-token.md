# Como criar manualmente um token de ativação

A integração entre a plataforma Segura e a Okta é feita por um token gerado manualmente.  Neste artigo, você encontra um guia passo a passo para gerar esse token na ferramenta Postman.

:::(info) (**Info**)
Esta documentação foi desenvolvida com o Postman. Os passos podem variar e requerer adaptações para uso em outras ferramentas.
:::
***
## Requisitos

* [Provedor de IGA adicionado ao Segura](/v4/docs/pt/administration-how-to-add-an-iga-provider-to-Segura).
***

## Coletar informações 

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Provisionamento > Gerenciamento de identidade (IGA) > Provedores**.
3. Na lista de relatórios, localize o provedor de terceiros que você deseja integrar, clique no botão **Ações** e selecione **Detalhes do provider**.
5. A janela **Provedor de Identity Manager** fornecerá parte das informações necessárias para gerar o token de integração:
    5.1. **Base URL**: copie a URL para usar no passo seguinte.
    5.2. **Token URL**: copie a URL para usar no passo seguinte.
    5.3. **ID do Cliente**: clique no ícone de olho para consultar e copie a informação.
    5.4. **Client Secret**: clique no ícone de olho para consultar e copie a informação.

:::(Warning) (Cuidado)
Certifique-se de coletar os dados do provedor relacionado especificamente ao tipo de grupo que você vai provisionar: **usuários internos** ou **usuários terceiros**. A escolha correta garante que, no momento do *push* de grupos da Okta para o Segura, os grupos apareçam nos menus correspondentes.
:::
***

## Criar token de acesso manualmente 

1. Abra o Postman.
2. No menu lateral esquerdo, clique em **Collections** e depois em **+ Create new collection**.
3. Digite o nome da nova coleção.
4. Na aba **Variables**, crie as variáveis da coleção:
    4.1. Crie a variável ```Segura_url```
    4.2. Crie a variável ```scim_base_url```
    4.3. Crie a variável ```tokenUrl```
    4.4. Crie a variável ```scim_client_id```
    4.5. Crie a variável ```scim_client_secret```
5. Ainda na aba **Variables**, preencha o campo **Initial values** das variáveis criadas:
    5.1. Em ```Segura_url``` digite o endereço do servidor Segura que será integrado à Okta.
    5.2. Em ```scim_base_url``` cole a informação coletada no passo 1 no campo **Base URL**.
    5.3. Em ```tokenUrl``` cole a informação coletada no passo 1 no campo **Token URL**.
    5.4. Em ```scim_client_id``` cole a informação coletada no passo 1 no campo **ID do Cliente**.
    5.5. Em ```scim_client_secret``` cole a informação coletada no passo 1 no campo **Client Secret**.
6. Salve as alterações.
7. Na aba **Authorization**, complete as informações:
    7.1. Em **Type** selecione **OAuth 2.0**.
    7.2. Em **Add auth data to** selecione **Request Headers**
    7.3. Em **Header Prefix** complete com ```Bearer```
    7.4. Em **Token Name** preencha com um nome descritivo.
    7.5. Em **Grant Type** selecione **Client Credentials**
    7.6. Em **Access Token URL** digite ```{{tokenUrl}}```
    7.7. Em **Client ID** digite ```{{scim_client_id}}```
    7.8. Em **Client Secret** digite ```{{scim_client_secret}}```
    7.9. Em **Client Authentication** selecione **Send as Basic Auth header**.
8. Clique em **Clear cookies**.
9. Clique em **Get New Access Token**.
10. Na janela que indica a autenticação completa, clique em **Proceed**.
11. Copie o texto do campo **Access token**.
12. Clique em **Use token**. 

Você receberá uma mensagem de confirmação no canto inferior direito da tela com o texto **Token added**. Este token será colado na [tela de autenticação da aplicação SCIM da Okta.](/v4/docs/pt/administration-how-to-create-a-scim-application-with-okta)
***

Você ainda tem dúvidas? Entre em contato com a  [Comunidade Segura](https://community.Segura.io/){target="_blank"}.