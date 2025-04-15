# Como alterar a senha no FreeIPA com LDAPS

Este artigo é um guia passo a passo sobre como alterar senhas no FreeIPA com LDAPS. O artigo explica como criar um novo modelo e configurar alterações automáticas de senha e também aborda uma limitação no FreeIPA, onde novas senhas expiram, e fornece uma solução para evitar esse problema.

## Requisitos
- Usuário do FreeIPA para alterar suas credenciais com permissões mínimas - **ipausers** (FreeIPA versão 4.6.8 API_Version: 2.237).
- Credencial usada para o FreeIPA


:::(Warning) (Devido às limitações definidas pelo FreeIPA)
a única maneira de definir a credencial para alterar a senha é usar a própria credencial. Isso é necessário para evitar a expiração da credencial após a mudança de senha. Você pode saber mais sobre senhas expiradas visitando a documentação oficial em [New Passwords Expired - FreeIPA](https://www.freeipa.org/page/New_Passwords_Expired) (em inglês).
:::


## Passos

1. Navegue até **Executions ➔ Configurações➔ Modelo**.
2. Clique no ícone ⋮, identificado pelo três pontos verticais, e então selecione **+ Novo** para criar um novo modelo.
3. Na janela **Template de execução**, preencha as seguintes informações:
&nbsp;3.1. Em **Nome** escolha qualquer nome para identificar este modelo, por exemplo, “FreeIPA with Own Password”.
&nbsp;3.2. Em **Executor** selecione **LDAP**.
&nbsp;3.3. Em **Tipo de Execução** selecione Troca de Senha.
&nbsp;3.4. Em **Conteúdo**, adicione o seguinte:

        ```
        # Protocol Version
        set-option LDAP_OPT_PROTOCOL_VERSION 3
        set-option LDAP_OPT_REFERRALS 0

        # BIND (use the path that users are registered in the FreeIPA directory)
        bind "uid=[#USERNAME#],cn=users,cn=accounts,DC=domain,DC=com"

        # FIND 
        find "DC=domain,DC=com" (&(objectClass=person)(uid=[#USERNAME#]))

        # MOD-REPLACE
        mod-replace userPassword "[#NEW_PASSWORD#]"
        ```

4. Depois de criar o modelo, navegue até  **PAM Core ➔ Credenciais ➔ Todas**.
5. Encontre a credencial para a qual deseja automatizar as alterações de senha.
6. Clique no ícone ⋮, identificado pelo três pontos verticais localizado à direita da credencial e depois clique em **Editar**.
7. Com a janela **Cadastro de credencial** aberta, selecione a guia **Configurações de execução**.
&nbsp;7.1 Vá até **Configuração da troca de senha de credencial**.
&nbsp;7.2. Ative a opção **Troca automática**.
&nbsp;7.3 Em **Plugin de troca** selecione **LDAP**.
&nbsp;7.4 Em **Template de troca** selecione o modelo criado no passo 2.
&nbsp;7.5 Clique em **Salvar**.

A senha da credencial agora será alterada de acordo com a política de senha definida.