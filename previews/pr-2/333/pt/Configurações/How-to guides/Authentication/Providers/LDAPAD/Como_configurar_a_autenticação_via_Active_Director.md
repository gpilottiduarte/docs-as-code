# Como configurar a autenticação via Active Directory

Aprenda como configurar a autenticação via Active Directory, seguindo os passos descritos neste artigo.

## Requisitos

* Ser um usuário que integra o grupo de Domain Admins.
* [Habilitar o Active Directory (LDAP)](/v3-33/docs/pt/user-management-enable-authentication-providers) na lista de provedores de autenticação.
* [ Criar um dispositivo AD Server](/v3-33/docs/pt/pam-devices-management) com LDAP no senhasegura.
* [Criar um usuário AD](/v3-33/docs/pt/pam-credentials) cujas credenciais podem ser usadas para consultar usuários no mesmo domínio.
* Integrar um Windows Server Active Directory (AD) com LDAP.
:::(info) (Info)
Por motivos de segurança, o LDAP Active Directory é definido como o provedor de autenticação padrão quando definido. Não há fallback para os usuários que utilizam a autenticação local.
:::

* * *
## Configurar a autenticação via Active Directory
Para configurar a autenticação no senhasegura via Active Directory, siga estas etapas:

1. No canto superior esquerdo, clique no **Grid Menu**, representado pelo ícone dos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Autenticação > Active Directory > Servidores**.
3. No canto superior direito, clique em **Exibir ações**, representado pelos três pontos verticais.
4. Selecione **Novo**.
5. Preencha o formulário **[Servidor LDAP](/v3-33/docs/pt/authentication-ad-server-ldap)**. 
    5.1 **Host**: preencha com o nome do host ou IP do servidor AD.
    5.2 **Porta**: preencha com o número da porta de comunicação LDAP.
    5.3 **Ativo**: mantenha como **Sim**.
    5.4 **Credencial para autenticação**: selecione a credencial que será utilizada para realizar a autenticação do usuário no servidor e a sincronização de usuários entre os servidores.
    5.5**DN Base**: preencha com a base que servirá para as consultas LDAP.
    5.6 **Formulário da conta**: selecione o formato para realização das consultas.
    5.7 **Domínio da conta**: preencha com o nome de domínio da conta do servidor LDAP utilizado.
    5.8 **Domínio da conta (Short Name)**: preencha com a abreviação do nome de domínio da conta do servidor LDAP utilizado.
    5.9 **Ordem**: defina a prioridade do servidor. Quanto menor o número, maior a prioridade do servidor.
    5.10 **Usar SSL?**: indique se a autenticação usará a conexão SSL ou não. Se usar conexão SSL, certifique-se de adicionar a porta correta.
    5.11 **Member is DN?**: indique se o objeto é DN ou não.
    5.12 **Bind requer DN?**: indique se a autenticação precisará do Bind-DN para autenticar e conectar ao servidor.
6. Clique em **Salvar**. 

O servidor aparece listado na página inicial Servidores LDAP/AD. 

É possível realizar edições nas informações registradas. Para isso, localize o servidor em questão e clique em **Alterar**, ícone identificado pelo lápis e papel para efetuar as mudanças.

:::(Info) (Info)
É possível registrar vários servidores do Active Directory no senhasegura, definindo uma ordem de prioridade para eles. O senhasegura utiliza essa ordem para autenticar os usuários, tentando primeiro fazer login no servidor de maior prioridade. Se a primeira tentativa de autenticação falhar, o sistema passa para o próximo servidor na lista e assim por diante. Se todos os servidores AD registrados falharem no processo de login, o usuário receberá uma notificação informando que o senhasegura não conseguiu autenticar o acesso.
:::
***
## Testar a autenticação
:::(Warning) (Cuidado)
Confirme que o provedor LDAP está habilitado em **Configurações > Autenticação > Provedores**. Essa ação é necessária para executar o teste de autenticação a seguir.
:::
1. Na coluna **Ação**, localize o servidor salvo e clique em **Exibir ações**, representado pelos três pontos verticais.
2. Selecione **Testar a autenticação**.
3. Preencha o formulário **Teste de autenticação LDAP** com as informações: Base DN, Usuário e Senha.
4. Clique em **Autenticar**.

Em caso de sucesso, uma mensagem de autenticação é exibida na tela, indicando que o servidor está pronto para uso.
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).



