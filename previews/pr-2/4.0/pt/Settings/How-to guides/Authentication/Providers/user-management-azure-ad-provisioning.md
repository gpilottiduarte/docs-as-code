# Azure AD Provisioning

Este artigo é um guia do processo de criação de um provedor de autenticação em Segura utilizando o Azure Provisioning.

## Pré-requisitos

- Acesso à plataforma Segura
- Uma conta Azure AD com permissão para criar aplicativos e configurar Provisioning
- Use uma ferramenta de aplicativo (como o aplicativo Postman) para obter tokens de autorização.
- Familiaridade com o portal e protocolos do Azure AD

## Configure o Provisionamento do Azure com a Segura

1. No Segura acesse **Configurações  > Provisionamento > Gerenciamento de Identidade (IGA) > Provedores**. 
2. Clique no botão **Adicionar**. 
3. Configure com qualquer nome e descrição, mas certifique-se de estar definido **Protocolo SCIM** e com opção **Usuários de Terceiros** marcada como **Não**.
4. Em **Autenticação**, insira a configuração de acesso à API onde o token para uso do SCIM será obtido. O método de autenticação precisa ser OAuth 2.0.
5. Depois de salvar a integração, ela aparecerá na lista de **Provedores**. 
6. Clique no botão **Ações** e selecione **Detalhes do provider**. 
7. A tela **Registrar Provedor de Gerenciamento de Identidade** será exibida.
8. A **URL base** na tela é usada para configuração no Azure Provisioning. A **URL do token** serve para obter o token de autorização em conjunto com as informações de `client_id` e do `client_secret`. 
9. Para obter o token de autorização, pode-se usar o aplicativo Postman ou utilizar o seguinte comando em cURL:

```shell
curl --insecure -d "grant_type=client_credentials&client_id=<CLIENT_ID>&client_secret=<CLIENT_SECRET>&ttl=60" "https://<DNS_senhasegura>/iso/oauth2/token" -s --show-error -X POST
```

:::(Warning) (Token com tempo limitado)
Como o Segura utiliza OAuth e ainda não está na galeria de apps suportada pela Microsoft, o token gerado só é válido por **uma hora**. Assim que o tempo estimado finalizar, repita o processo.
:::

## Crie um Aplicativo no Azure AD

1. Para usar o Azure Provisioning, é necessário criar um aplicativo no Azure AD em Aplicativo Empresarial. Ao criá-lo, selecione "Criar seu próprio aplicativo" na Galeria do Azure AD;
2. E então selecione "Integrar qualquer outro aplicativo que você não encontra na galeria (Non-gallery)". Um aplicativo será criado e mostrado na lista.
3. Em seguida, acesse o aplicativo e acesse o menu **Provisionamento**.

## Configure o Provisionamento no Azure AD

1. Para configurar o **Provisionamento**, serão usadas a URL obtida no Provedor SCIM criado no Segura e também o token de autorização gerado pelo Postman.
2. Depois de inserir as informações, teste a conexão. 
3. Os mapeamentos serão liberados, onde os campos de Grupos e Usuários passados pelo Azure para o Segura serão definidos. Atualmente, o Azure não pode mapear os esquemas usados pelo SCIM no lado do Segura, então é necessário configurá-lo manualmente.
4. No Provisionamento de Grupos do Azure Active Directory, ele será configurado da seguinte forma;

    - Enabled - yes
    - Target Object Actions
    - Create - checked
    - Update - checked
    - Delete - checked
    - Azure Active Directory Attribute
    - displayName
    - objectld
    - members
    - displayName

4. O atributo `accessGroup` na coluna customappsso não existe no Azure AD, então é necessário criá-lo indo para **Mostrar opções avançadas** na seção abaixo em **Editar lista de atributos para customappsso**. Dentro de **Editar Lista de Atributos**, defina-o com as seguintes regras:

    | Name | Primary Key? | Required? | Multi-Value | Exact case? |
    | --- | --- | --- | --- | --- |
    | id | yes | yes | no | no |
    | externalld | no | no | no | no |
    | displayName | no | yes | no | no |
    | members | no | no | yes | no |
    | accessGroup | no | no | no | no |

5. Depois de editar os atributos, volte para a tela de atributos associados e clique em Adicionar Nova Associação e, dentro de "Editar Atributo", adicione de acordo com a configuração abaixo:
    - Mapping type: Direct
    - Source attribute: displayName
    - Target attribute: accessGroup
    - Match objects using this attribute: No
    - Apply this mapping: Always
 
6. Depois disso, basta salvar as configurações e voltar para a tela de configuração de provisionamento (onde a conexão foi testada).
7. Agora os campos de usuário devem ser definidos acessando "Provisionamento de Usuários do Azure Active Directory". O mesmo processo de associação de novos campos será realizado aqui.
8. Depois de adicionar todos os campos, salve e volte para a tela de configuração de provisionamento, onde a conexão é testada.
9. Uma última opção será habilitada, que pode ser configurada como desejado.
10. Depois disso, alterne para usar "ON" em "Status de Provisionamento".
11. Para Provisionar usuários e grupos, eles devem ser associados ao provisionamento, na tela principal em "Usuários e grupos" do Azure.
12. Clique em Adicionar usuário/grupo e selecione o Grupo/Usuário desejado.
13. Nesta janela, há também o "Papel". Este papel será associado na Segura como permissão do usuário. A premissa é que ambos tenham o mesmo nome.
14. Depois disso, basta salvar as configurações e voltar para a tela de configuração de provisionamento (onde a conexão foi testada).
15. Uma última opção será habilitada, que pode ser configurada como desejado.
16. Depois disso, alterne para usar "ON" em "Status de Provisionamento".
17. Para Provisionar usuários e grupos, eles devem ser associados ao provisionamento, na tela principal em "Usuários e grupos" do Azure.
18. Clique em Adicionar usuário/grupo e selecione o Grupo/Usuário desejado.
19. Nesta janela, há também o "Papel". Este papel será associado na Segura como permissão do usuário. A premissa é que ambos tenham o mesmo nome.
20. Depois de configurar tudo corretamente, o provedor de autenticação na Segura utilizando o Azure Provisioning estará pronto para uso.