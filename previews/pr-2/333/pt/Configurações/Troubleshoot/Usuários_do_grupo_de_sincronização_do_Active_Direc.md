# Usuários do grupo de sincronização do Active Directory não estão recebendo nenhuma permissão

**Cenário**

Após a atualização de uma versão antiga para a versão 3.28, os usuários sincronizados do Active Directory não têm permissão para visualizar senhas ou iniciar sessões que são definidas por qualquer grupo de acesso.

**Causa**

O processo de "Sincronização de grupos LDAP/AD" agora requer uma entidade de "Grupo de Usuários" em vez de "Grupos de Acesso". Essa entidade de "Grupo de Usuários" conterá os "Grupos de Acesso" aos quais os usuários sincronizados pertencerão.

**Solução**

Para resolver esse problema, siga estas etapas:

1. Crie uma entidade de "Grupo de Usuários". Para saber como criar uma, [clique aqui](/v3-33/docs/pt/administration-user-groups).
2. Vá para **Menu Principal → Configurações → Autenticação → Active Directory → Sincronização de Grupos**.
3. Encontre o grupo que deseja corrigir.
4. Na coluna Ação, clique em **Editar Grupo**.
5. No campo **Grupo de Usuários**, selecione a entidade "Grupo de Usuários" que você criou na etapa 1.
6. Clique em **Salvar**.

Agora, todos os usuários dentro do "Grupo de Usuários" receberão as permissões definidas nesse grupo.