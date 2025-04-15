# Como gerenciar provedores SAML

Você pode adicionar ou remover provedores de SAML no Segura. Para isso, siga os passos abaixo.

## Cadastrar novo provider

Para adicionar um novo provider, siga os passos abaixo:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> SAML > Provedores**.
3. No relatório **Provedores**, clique no botão **Adicionar**.
4. Na janela **Registro de provedor SAML**, preencha os seguintes campos:

### Aba Informações principais

1. **Tipo**: selecione seu provedor SAML no menu suspenso. Caso ele não esteja listado, selecione a opção SAML provider.
2. **Ativo**: selecione **Sim**.
3. **Ambiente**: para dar acesso aos usuários do Segura Domum, selecione **Domum Remote Access**; para dar acesso a usuários locais apenas, selecione **Local**.
4. **ID da entidade**: `ClientId` ou `EntityId` da aplicação SAML.
5. **URL de metadados do provider SAML**: indique a URL que irá gerenciar os metadados SAML.
6. **Domínio ou IP público para URL de redirecionamento**: indique o domínio ou IP público do Segura.
7. **URL de redirecionamento (Redirect URL)**: campo meramente informativo para ser usado no SAML.
8. **Comentários**: preencha com qualquer comentário ou observação que seja pertinente.
9. Na seção **Configuração de URLs**:
   1. **SSO URL de login (Sign-in URL):** indique a URL usada para realizar login.
   2. **SSO URL de logout (Sign-out URL)**: indique a URL usada para realizar o logout.
   3. **Tipo de Redirect Binding**: escolha no menu suspenso o tipo de *Redirect Bind*. As opções são **REDIRECT** ou **POST**.
10. Na seção **SAML de segurança**:
    1. **Certificado (formato `.pem`)**: campo de texto para que você cole o conteúdo do certificado `.pem`.

:::(info) (Info)
Todas as configurações mencionadas neste guia devem corresponder exatamente às configurações presentes no IDP (*Identity Provider* ou Provedor de Identidade) para assegurar o funcionamento adequado do SAML. Em caso de discrepâncias, a autenticação falhará.
:::

Clique em **Salvar** em qualquer uma das abas.

## Atualizar provider

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> SAML > Provedores**.
3. Identifique o registro que deseja atualizar, clique no botão **Ações** e selecione **Editar**.
4. A janela **Registro de provedor SAML** abrirá em modo de edição.
5. Edite as informações necessárias e clique em **Salvar**.

## Excluir provider

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> SAML > Provedores**.
3. Identifique o registro que deseja atualizar, clique no botão **Ações** e selecione **Desativar**.
4. No modal de confirmação, clique em **Sim**.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).