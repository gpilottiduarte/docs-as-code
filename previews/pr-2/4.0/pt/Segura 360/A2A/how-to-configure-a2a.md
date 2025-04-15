# Como configurar o A2A


Boas-vindas ao **A2A**, a plataforma de gerenciamento das APIs **A2A** do Segura.

Este documento fornece um guia passo a passo para ajudar administradores de sistema a configurar o módulo **A2A** e integrar suas aplicações às APIs do Segura de maneira eficiente e segura. O **A2A** centraliza o gerenciamento de credenciais, fortalecendo a segurança e facilitando o acesso às APIs.

Embora o OAuth 2.0 seja o método de autenticação recomendado, o módulo também suporta integrações seguras com outros protocolos, como OAuth 1.0 e AWS.

## Pré-requisitos

* Permissão de administrador do sistema.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **A2A.**

---
## Adicionar aplicação

Para adicionar uma aplicação ao **A2A,** siga os passos abaixo:

1. Acesse o menu **Aplicações \> Aplicações.**  
2. Na tela **Aplicações**, clique em **Adicionar.**  
3. Na tela **Adicionar aplicação**, preencha os campos obrigatórios:  
   1. **Nome da aplicação\*:** insira um nome que identifique claramente a aplicação cliente. Exemplo: **Aplicação Financeira \- Integração ERP.**  
   2. **Utilizar assinatura OAuth\*:** escolha o método de autenticação desejado. Exemplo: **OAuth 2.0.**  
   3. **Status\*:** defina o status da aplicação como **Ativo** ou **Inativo.** Exemplo: **Ativo.**  
4. Após preencher os campos obrigatórios e, se necessário, os opcionais, clique em **Salvar**.

**Resultado**: você adicionou uma aplicação ativa ao **A2A** e pode adicionar e configurar uma autorização para obter um token de acesso e consumir as APIs **A2A**.

## Adicionar chave de autorização para a aplicação

Agora que você já adicionou uma aplicação cliente ao **A2A**, você deve adicionar uma autorização para que a sua aplicação consuma as APIs do Segura:

1. Na tela **Aplicações**, encontre a aplicação adicionada ou use os filtros de pesquisa. Exemplo: digite **Aplicação Financeira \- Integração ERP** no filtro **Nome**.   
2. No **botão Ações**, clique em **Autorizações.**  
3. Na tela **Autorização da aplicação**, clique em **Adicionar.**  
4. Na tela **Adicionar autorização**, preencha as informações:  
   :::(error) (Alerta)  
   Os campos com asterisco são obrigatórios.  
   :::  
   1. **Aba Configurações:**   
      1. **Data e Hora de expiração:** defina o período de validade da autorização. Exemplo: **30/01/2025** e **18:00** ou deixe em branco para desativação manual.  
      2. **Status\*:** selecione **Ativo** ou **Inativo** para definir o status da autorização. Exemplo: **Ativo**.  
      3. **Sistema** e **Ambiente:** escolha onde a autorização será utilizada. Exemplo: **Sistema X** e **Ambiente de testes**  
      4. Clique em **Continuar.**

   2. **Aba Segurança:**  
      1. **Recursos autorizados:** selecione os recursos que a aplicação poderá acessar utilizando a autorização. Exemplo: **PAM Core.**  
      2. **Ativar a criptografia de informações sensíveis:** ative ou desative conforme necessário para garantir a segurança das informações sensíveis. Exemplo: **Não.**  
      3. **Permissão do recurso PAM:** escolha entre **Apenas leitura** para visualizar os dados ou **Leitura e escrita** para visualizar e modificar os dados. Exemplo: **Apenas leitura.**  
         :::(warning) (Atenção)  
         Selecionar **Leitura e escrita** concede permissão para modificar os recursos. Certifique-se de que essa autorização é apropriada, pois pode apresentar riscos à segurança.  
         :::  
      4. **IPs autorizados:** insira os endereços que poderão utilizar a autorização. Digite \* (asterisco) para permitir qualquer IP. Exemplo: **192.168.1.1**  
      5. **HTTP referers**: defina as origens (URLs) que poderão realizar chamadas usando a autorização. Exemplo: **https://erp.financeiro.com.br/dashboard**  
         :::(info) (Info) 
         O **HTTP referrer** é um cabeçalho HTTP enviado pelo navegador ou cliente HTTP, que informa a URL da página de origem de uma requisição. Você pode especificar quais URLs estão autorizadas a fazer chamadas para a sua aplicação. Isso ajuda a garantir que apenas fontes confiáveis possam interagir com suas APIs.  
         :::  
      6. Clique em **Continuar.**

   3. **Aba Credencial:**  
      1. Selecione uma credencial existente ou crie uma nova. Exemplo: **Administrador local \- marksmith**  
      2. Caso você escolha criar uma nova credencial:  
         1. Selecione o **Dispositivo**.  
         2. Preencha **Nome de usuário** e **Senha** da credencial de acesso.  
      3. Clique em **Continuar.**  
   4. **Aba Dispositivos:**  
      1. Clique em **Adicionar** para escolher dispositivos vinculados à autorização.  
      2. Clique em **Continuar.**  
   5. **Aba Informações protegidas:**  
      1. Clique **Adicionar** para selecionar as informações sensíveis autorizadas para acesso.  
      2. Clique em **Continuar.**

   	:::(info) (Info)
    A partir da versão 3.26, o módulo **Informações protegidas** foi substituído pelo **MySafe.** Saiba mais em [MySafe](/v4/docs/pt/mysafe).  
    :::

   6. **Aba Revisão:**  
      1. Revise todas as configurações.  
      2. Se necessário, clique em **Voltar** para fazer alterações.  
      3. Clique em **SALVAR.**

**Resultado**: você adicionou e configurou uma autorização para a aplicação cliente que irá consumir as APIs **A2A** e pode obter um token de acesso.

## Autenticar a aplicação usando o OAuth 2.0 

Após adicionar uma aplicação e configurar sua autorização, você pode obter as chaves de acesso necessárias para autenticar a aplicação e consumir as APIs do Segura.

Saiba mais sobre outros métodos de autenticação em [Como autenticar uma aplicação no A2A](/v4/docs/pt/how-to-authenticate-an-application-in-a2a).

1. Na tela **Autorizações**, encontre a aplicação adicionada ou use os filtros de pesquisa. Exemplo: digite **Aplicação Financeira \- Integração ERP** no filtro **Nome**.   
2. No **botão Ações**, clique em **Visualizar**.  
3. Nos campos **Client ID** e **Client Secret**, clique em **Exibir**.
4. Copie as chaves de acesso e guarde-as em um local seguro.
5. Solicite um **Access Token** utilizando o endpoint:

```json
POST /iso/oauth2/token
```

Corpo da requisição:

```json
{ 
"grant_type": "client_credentials", 
"client_id": "seu_client_id", 
"client_secret": "seu_client_secret" 
}
```

A resposta inclui:

```json
{
  "access_token": "seu_access_token",
  "token_type": "Bearer",
  "refresh_token": "seu_refresh_token",
  "expires_in": 3600
}

```

5. Use o `access_token` nas chamadas às APIs:

```json
Authorization: Bearer <seu_access_token>
```

Armazene o token de forma segura e utilize-o em todas as requisições subsequentes. Em caso de expiração, solicite um novo `access_token` conforme descrito acima. 

**Resultado**: sua aplicação está autenticada usando o método OAuth 2.0 e pode consumir as APIs **A2A** com segurança.

---
### Próximos passos

Explore também: 

* **Outras funcionalidades:**  
  * Como gerenciar aplicações.  
  * Como gerenciar autorizações.  
* **APIs A2A disponíveis**:  
  * [PAM Core](/v4/docs/pt/api-a2a-pam-core): gerenciamento de identidades e permissões.  
  * [Certificate Manager](/v4/docs/pt/a2a-api-certificate-manager): gerenciamento de certificados.  
  * [Usuários relacionados](/v4/docs/pt/api-a2a-related-users): gerenciamento de usuários e permissões.  
  * [Dashboards](/v4/docs/pt/api-dashboards): acesso a dashboards e métricas.  
  * Sistema: gerenciamento de Agents do Network Connector.  
* **Outras APIs Segura:**  
  * [DevOps Secret Manager](/v4/docs/pt/a2a-api-dsm): gerenciamento de segredos para pipelines de DevOps.  
  * [MySafe](/v4/docs/pt/api-mysafe): gerenciamento de senhas e outros itens corporativos pessoais e de equipe.  
  * [SCIM](/v4/docs/pt/scim-api): provisionamento e gerenciamento de identidade de usuários.  
* **Boas práticas:**  
  * Consulte nosso guia sobre [Boas práticas de uso](/v4/docs/pt/a2a-best-practices-for-use) que inclui recomendações sobre segurança, uso de tokens e autorização.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).
