# Como conectar um tenant do Azure

Neste artigo, você aprenderá a conectar **Cloud Entitlements** aos tenants da Microsoft Azure.

## Requisitos

Antes de prosseguir, certifique-se de que você atende aos seguintes requisitos:

- Crie um aplicativo Azure com as seguintes permissões de API:
    - `Application.Read.All`
    - `Directory.Read.All`
    - `AuditLog.Real.All`
    - `Group.Read.All`
    - `RoleManagement.Read.Directory`
    - `User.Read.All`
    - `UserAuthenticationMethod.Read.All`

:::(Info) (Info)
Certifique-se de usar permissões de aplicativo em vez de permissões delegadas.
:::

- Conceda o consentimento do administrador para as permissões da API que você atribuiu ao registro do aplicativo.
- Certifique-se de que o tenant tenha uma subscrição ativa.
- Adicione a aplicação como *leitor* da subscrição.
- Crie um segredo do cliente no menu **Certificados e segredos** do seu aplicativo.

---

## Conectar um tenant da Azure

Para conectar um tenant da Azure aos **Cloud Entitlements**, siga estas etapas:

1. Navegue para o menu à esquerda dentro dos **Cloud Entitlements**.
2. Clique em **Configuração** para abrir o menu suspenso.
3. No menu suspenso, selecione **Microsoft Azure**.
4. Clique no botão **+ Conectar** no canto superior direito da tela.
5. Insira um **Nome** para identificar seu tenant da Azure nos **Cloud Entitlements**.
6. Insira o **ID do tenant**.
7. Insira o **Valor secreto**.

:::(Info) (Info)
O **Valor secreto** não será visível após conectar-se com o tenant.
:::

8. Insira o **ID da Aplicação**.
9. Se necessário, atribua etiquetas para o projeto. Separe cada etiqueta usando a tecla **Enter**.

:::(Info) (Info)
Não é possível usar diferentes registros de aplicativos que pertencem ao mesmo tenant, pois isso causaria duplicidade.
:::

10. Clique em **Salvar**.

Se a conexão for bem-sucedida, seu tenant da Azure aparecerá na lista de contas conectadas.

:::(Error) (Importante)
Se a conexão não for bem-sucedida, confira as permissões de API, a função e o segredo do cliente. Você não pode usar o segredo de um tenant que já está conectado aos **Cloud Entitlements**.
:::

Para fazer quaisquer alterações necessárias, clique no botão **Ações**, representado por três pontos verticais, e clique em **Editar**.

Além disso, você pode ativar ou desativar o tenant, ligando ou desligando o **Status switch**.
