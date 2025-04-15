# Como Sincronizar Usuários e Grupos do Active Directory

## **Requisitos**

Para sincronizar usuários, você precisará do seguinte:

- Ser um usuário que integra o grupo Domain Admins.
-  Um Servidor de Autenticação Active Directory (AD) registrado na Segura. Consulte [Configurando a Autenticação do Active Directory](/v4/docs/pt/configure-active-directory-authentication) para obter mais detalhes.
- O nome distinto (DN) do local no AD para sincronizar os usuários.
- Um [Grupo de Usuários](/v4/docs/pt/administration-user-groups) da Segura.

* * *

::: (info) (Tempo de sincronização do grupo LDAP/AD)
Os serviços de sincronização de usuários do Segura são executados a cada **três minutos**. Os serviços verificam se algum usuário foi adicionado ou removido do seu grupo Active Directory e espelham quaisquer alterações no grupo de usuários correspondente da Segura.
:::

## Criar grupo de sincronização LDAP/AD

Cada grupo tem seu próprio conjunto de regras de sincronização e a Segura pode usar um servidor LDAP diferente para cada grupo, se necessário.

Para sincronizar seus usuários do AD e Segura:

1. Vá para **Configurações ➔ Autenticação ➔ Active Directory ➔ Sincronização de grupo**.
2. Clique no botão Ação **( ⁝ )** no canto superior direito e clique em **+ Novo grupo**.
3. Dentro do grupo **LDAP/AD**, preencha todas as informações necessárias. Para mais detalhes, consulte o grupo LDAP/AD.
    1. Na guia **Configurações**:
        - Dê um nome ao grupo.
        - Selecione o **Servidor LDAP/AD** criado nos requisitos.
        - Selecione o **Grupo de usuários** que será usado.
            :::(Warning) (Permissão de usuários)
            Certifique-se de ter um "Grupo de Acesso" e "Papel" dentro do seu "Grupo de Usuários", caso contrário, seus usuários não terão permissão.
            :::
        - Defina **Ativar** para **sim**.
        - Selecione **Sincronização** para **Ligada** para tornar a sincronização ativa.
        - Insira o DN a ser usado para pesquisar os usuários.
        - Adicione um atributo de nome de usuário do AD a ser usado do seu AD, por exemplo: “sAMAccountName”.
        - Selecione um atributo de nome AD.
        - Dê um filtro de consulta. Você pode acessar [Criando um filtro de consulta | Microsoft Learn](https://learn.microsoft.com/pt-br/windows/win32/ad/creating-a-query-filter){target="_blank"} para ajudar a criar suas próprias consultas. Por exemplo, `(&(objectClass=user)(sAMAccountName=*)(memberOf=CN=Segura,DC=mt4,DC=com,DC=br))`
        :::(warning) (Limite de palavras da consulta)
        Você pode digitar até 2.048 caracteres no campo **Filtro de consulta**.
        :::
4. (Opcional) Guia **Domum**. Use esta guia somente se estiver usando este grupo para ser usado no Domum Segura.
5. Na guia Funções:
    1. Clique no botão **+** para adicionar uma função para todos os usuários deste grupo.
6. Clique em **Salvar**.

## Teste de sincronização do grupo

Para garantir que seu grupo esteja sincronizando corretamente e coletando os usuários corretos, você pode realizar um teste de sincronização.

Siga estas etapas:

1. Na coluna Ação, localize o grupo que deseja testar.
2. Clique no botão Ação do grupo ( **⁝** ) e escolha **Teste de sincronização**.
3. Na janela **Teste de grupo LDAP/AD**, a Segura preenche os campos DN e filtro com os valores de configuração do grupo. Você pode alterar esses campos para testar sem afetar as configurações originais do grupo.
4. Clique em **Simular**.
5. Uma tabela mostrará os resultados de usuários adicionados, removidos ou inalterados.
6. Após a simulação, a Segura retorna a lista de usuários no grupo AD. Os usuários são listados como adicionados, modificados ou inalterados.

Se ocorrerem erros, consulte nosso artigo [Troubleshooting sincronização do AD](/v4/docs/pt/user-management-active-directory-troubleshooting).