# Como conectar um tenant do Azure

Este documento fornece informações sobre como conectar *tenants* da Microsoft Azure ao **Cloud Entitlements**.

:::(Info) (Info)
Não é possível usar diferentes registros de aplicativos que pertencem ao mesmo *tenant*, pois isso causaria duplicidade.
:::

## Pré-requisitos

- Aplicativo Azure com as seguintes permissões de API:  
    - Se o modo de integração desejado for **Leitura**:  
        - `Application.Read.All`  
        - `AuditLog.Read.All`  
        - `Directory.Read.All`  
        - `Group.Read.All`  
        - `RoleManagement.Read.Directory`  
        - `User.Read.All`  
        - `UserAuthenticationMethod.Read.All`  
    - Se o modo de integração desejado for **Leitura e Escrita**:  
        - `Application.Read.All`  
        - `Application.ReadWrite.All`  
        - `AppRoleAssignment.ReadWrite.All`  
        -  `AuditLog.Read.All`  
        - `Directory.Read.All`  
        - `Group.Read.All`  
        - `RoleManagement.Read.Directory`  
        - `RoleManagement.ReadWrite.Directory`
        - `UserAuthenticationMethod.Read.All`  
        - `User.Read.All`  
            
        Certifique-se de usar permissões de aplicativo em vez de permissões delegadas.
- Conceder consentimento do administrador para a aplicação.  
- Um *tenant* Azure com uma assinatura ativa.  
- Aplicação com função de **Leitor** e **Administrador de controle de acesso baseado em função**.
- O segredo do cliente para a aplicação.

## Conectar um tenant da Azure

Para conectar um *tenant* da Azure ao **Cloud Entitlements**, veja os passos a seguir: 

1. Acesse a plataforma **Cloud Security**.  
2. Acesse o produto **Cloud Entitlements**.  
3. No menu **Cloud Entitlements**, clique em **Configurações \> Microsoft Azure**.  
4. Clique em **\+ Conectar**.  
5. Selecione o modo de integração.  
6. No campo **Nome \***, insira um nome para a sua conta.  
7. No campo **ID do tenant \***, insira o ID do *tenant*.  
8. No campo **Valor secreto \***, insira o valor do segredo do cliente.
    :::(Info) (Info)
    O **Valor secreto** não será visível após conectar-se com o *tenant*.
    :::
9. No campo **ID da aplicação \***, insira o ID da aplicação.  
10. (Opcional): No campo **Etiquetas**, insira etiquetas para a conta. Separe cada etiqueta apertando a tecla `Enter`.  
11. Clique em **Salvar**.

Se a conexão for bem-sucedida, seu *tenant* da Azure aparecerá na lista de contas conectadas. Se a conexão não for bem-sucedida, confira as permissões de API, a função e o segredo do cliente. Você não pode usar o segredo de um *tenant* que já está conectado aos **Cloud Entitlements**.

Para fazer as alterações necessárias, clique em **Ação \> Editar**. Além disso, você pode ativar ou desativar a conta ligando ou desligando o botão **Status**.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).