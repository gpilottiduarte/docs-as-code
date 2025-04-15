# Como conectar uma conta da AWS

Neste artigo, você irá aprender como conectar **Cloud Entitlements** às suas contas do Amazon Web Services (AWS).

## Requisito

A chave de acesso do usuário deve ter a política `IAMReadOnlyAccess` anexada.

---

## Conectar uma conta AWS

Para conectar sua conta AWS ao **Cloud Entitlements**, siga estas etapas:

1. Vá para o menu esquerdo **Cloud Entitlements**.
2. Clique em **Configuração** para abrir um menu suspenso.
3. Selecione **Amazon Web Services**.
4. No canto superior direito, clique em **+ Conectar**.
5. Insira um **Nome** para identificar sua conta AWS dentro do Cloud Entitlements.
6. Insira a **Chave de Acesso** da sua conta AWS.
7. Insira a **Chave de Acesso Secreta** da sua conta AWS.
8. Se necessário, atribua etiquetas para a conta. Separe cada etiqueta usando a tecla **Enter**.
9. Clique no botão **Conectar**.

Se conectado com sucesso, sua conta AWS aparece na lista de contas conectadas.

:::(Error) (Importante)
Em caso de conexão mal sucedida, confira as chaves de acesso e se a política necessária foi adicionada. Note que você não pode usar uma chave de acesso de usuário de uma conta que já está conectada ao **Cloud Entitlements**.
:::

Para fazer quaisquer alterações necessárias, clique no botão **Ações**, representado por três pontos verticais, e clique em **Editar**.

Além disso, você pode ativar ou desativar a conta alternando o **Status switch**.