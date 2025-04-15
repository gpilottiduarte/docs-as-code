# Alterar senhas no Microsoft AD gerenciado pelo GCP

Este artigo explica como mudar senhas no GCP Managed Microsoft AD usando um novo template e o plugin LDAP para mudanças automáticas de senha.

## Requisitos

- O Segura deve ter acesso ao serviço de diretório gerenciado pela GCP;
- O certificado deve ser implementado no painel do GCP para o LDAPS do domínio a ser gerenciado;
- Para realizar a troca de senha, é necessário usar como credencial o usuário **setupadmin (padrão)** criado pela GCP, localizada em "**OU=Cloud Service Objects,DC=domain,DC=com**". Mais informações em: [Default Active Directory objects in Managed Microsoft AD](https://cloud.google.com/managed-microsoft-ad/docs/objects#users).

## Passos

1. Para criar um novo template, vá para **Execuções ➔ Configurações ➔ Modelo**.
2. Clique no ícone **⋮** e depois em **+ Novo**.
    1. Na janela **Template de execução**,
    2. Preencha as seguintes informações:
        - **Nome:** Escolha qualquer nome para identificar este template, por exemplo, "AD - Mudar Senha do Usuário - GCP AD MANAGED Services".
        - **Executor:** Selecione **LDAP**.
        - **Tipo de execução:** Selecione **Mudança de senha**.
        - Na seção **conteúdo**, insira o seguinte texto:
            - troque os campos com as informações necessarias como:
                - Caminho do bind
                - Caminho para find
    
        ```
        #Versão do Protocolo
        set-option LDAP_OPT_PROTOCOL_VERSION 3
        set-option LDAP_OPT_REFERRALS 0

        #Executar Bind
        #bind example "CN=senha,OU=Cloud Service Objects,DC=services,DC=com"
        bind "[seu local de bind de usuário]"

        #Localizar Entrada de Usuário
        #find path example "DC=services,DC=com"
        find "[seu local para encontrar os usuários]" (&(objectClass=user)(sAMAccountName=[#USERNAME#]))

        #Mudar Senha
        mod-replace unicodePwd "u([#NEW_PASSWORD#])"

        ```
    
3. Depois de criar o template, navegue para **PAM Core** **➔ Credenciais ➔ Todas**.
4. Encontre a credencial para a qual você deseja automatizar a troca de senha.
5. Clique no ícone **⋮** à direita da credencial e selecione **Editar**.
6. Na janela **Credencial**
    1. Vá para a guia **Configurações de execução**.
    2. Em **Configuração da troca de senha da credencial**,
    3. Habilite **Ativar troca automática**.
    4. Para **Plugin de troca**, selecione **LDAP**.
    5. Para **Template de troca**, selecione o template criado no passo 2.
7. Clique em **Salvar**.

A senha da credencial será alterada de acordo com a política de senha definida usando este template.