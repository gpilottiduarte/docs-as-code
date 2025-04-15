# Como criar manualmente um token de ativação

A integração entre a plataforma senhasegura e a Okta é feita por um token gerado manualmente.  Neste artigo, você encontra um guia passo a passo para gerar esse token na ferramenta Postman.

:::(info) (**Info**)
Esta documentação foi desenvolvida com o Postman. Os passos podem variar e requerer adaptações para uso em outras ferramentas.
:::
***
## Requisitos

* [Provedor de IGA adicionado ao senhasegura](/v3-33/docs/pt/administration-how-to-add-an-iga-provider-to-senhasegura).
***

### Passo 1: Coletar informações 

1. Acesse a plataforma senhasegura.
2. No canto superior esquerdo, clique em **Grid Menu**, indicado pela caixa de nove quadrados, e selecione **Configurações**.
3. No menu lateral, acesse **Autenticação > Gerenciamento de identidade (IGA) > Provedores**.
3. Na lista de relatórios, localize o provedor de terceiros que você deseja integrar.
4. Na coluna da direita, no menu de ação ⁝, selecione o ícone de lupa (**Detalhes do Provider**).
5. A janela **Provedor de Identity Manager** fornecerá parte das informações necessárias para gerar o token de integração:
    5.1. **Base URL**: copie a URL para usar no passo seguinte.
    5.2. **Token URL**: copie a URL para usar no passo seguinte.
    5.3. **ID do Cliente**: clique no ícone de olho para consultar e copie a informação.
    5.4. **Client Secret**: clique no ícone de olho para consultar e copie a informação.

:::(Warning) (Cuidado)
Certifique-se de coletar os dados do provedor relacionado especificamente ao tipo de grupo que você vai provisionar: **usuários internos** ou **usuários terceiros**. A escolha correta garante que, no momento do *push* de grupos da Okta para o senhasegura, os grupos apareçam nos menus correspondentes.
:::
***

### Passo 2: Criar token de acesso manualmente 

1. Abra o Postman.
2. No menu lateral esquerdo, clique em **Collections** e depois em **+ Create new collection**.
3. Digite o nome da nova coleção.
4. Na aba **Variables**, crie as variáveis da coleção:
    4.1. Crie a variável ```senhasegura_url```
    4.2. Crie a variável ```scim_base_url```
    4.3. Crie a variável ```tokenUrl```
    4.4. Crie a variável ```scim_client_id```
    4.5. Crie a variável ```scim_client_secret```
5. Ainda na aba **Variables**, preencha o campo **Initial values** das variáveis criadas:
    5.1. Em ```senhasegura_url``` digite o endereço do servidor senhasegura que será integrado à Okta.
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

Você receberá uma mensagem de confirmação no canto inferior direito da tela com o texto **Token added**. Este token será colado na [tela de autenticação da aplicação SCIM da Okta.](/v3-33/docs/pt/administration-how-to-create-a-scim-application-with-okta)
***

Você ainda tem dúvidas? Entre em contato com a  [Comunidade senhasegura](https://community.senhasegura.io/){target="_blank"}.