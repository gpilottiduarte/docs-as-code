# Como gerenciar servidores LDAP/AD

O senhasegura permite que você utilize o Active Directory (AD) para gerenciamento de identidade. Se você deseja utilizar o AD com o senhasegura, siga os passos abaixo.

## Registrar um servidor LDAP/AD

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Active Directory \> Servidores**.  
3. No formulário **Servidores LDAP/AD**, clique em **Exibir ações**, representado pelos três pontos verticais no canto superior direito, e selecione **Novo** no menu suspenso.  
4. Na janela **Servidor LDAP/AD**, preencha os campos abaixo:  
   1. **Host**: digite o endereço do host LDAP.  
   2. **Porta**: digite a porta do host LDAP.  
   3. **Ativo**: indique se o servidor está ativo ou não. Por padrão, essa opção é definida como **Sim**.  
   4. **Credencial para autenticação**: selecione a credencial que será usada para autenticação no servidor LDAP no menu suspenso.  
   5. **Network connector**: selecione no menu suspenso qual conector será usado com o servidor LDAP.  
      1. Este passo adicional é utilizado quando a sua estrutura utilizar o network connector. Nesse caso, é necessário selecionar o conector no menu suspenso.  
   6. **Base DN:** insira o local inicial do diretório a partir do qual a pesquisa ou operação começará. Esse será o ponto de partida para pesquisar, adicionar, modificar ou excluir objetos no servidor LDAP.  
   7. **Formulário de conta:** selecione o tipo de formulário de conta no menu suspenso. As opções são: *DN, Username, Backslash* e *Principal.*  
      1. Geralmente, quando usamos AD a opção **Principal** é a mais utilizada.  
   8. **Formato do filtro de conta:** especifique os critérios de pesquisa para restringir os resultados. Por exemplo: `(&(objectClass=user)(sAMAccountName=johndoe))`.  
      1. Nesse caso, os campos são:  
         1. `objectClass=user`: indica que o tipo de usuário deve ser `user`.  
         2. `sAMAccountName=johndoe`: o identificador SAM (Security Account Manager) da conta de usuário deve ser `johndoe`.  
   9. **Domínio da conta:** especifique o domínio da conta. Por exemplo: `senhasegura.com`.  
   10. **Domínio da conta (Short Name):** digite o nome abreviado da conta, especificamente. Por exemplo: `SENHASEGURA`.  
   11. **Usar credencial de domínio:** indique se você deseja usar uma credencial de domínio. Por padrão, essa opção é definida como **Não.**  
   12. **Atributo Username:** esta opção é utilizada apenas quando o atributo do username é diferente do padrão. Por padrão este atributo é `sAMAccountName`.  
   13. **DN Bind (deixar em branco para usar Base DN):** digite o DN que será usado como identificador exclusivo. Por exemplo: `"CN=John Doe,OU=Users,DC=senhasegura,DC=com".`  
   14. **Member is DN?:** selecione **Sim** se o usuário for identificado por seu DN  
   15. **Bind requer DN?:** selecione **Sim** se o processo de associação precisar usar o DN. Esta configuração é necessária para o caso onde um usuário esteja em uma localização diferente do DN base.  
   16. **Grupo:** digite o grupo da conta.  
   17. **DN do grupo:** digite o DN da conta.  
   18. **Atributo do grupo (GroupAttr):** insira os atributos do grupo.  
   19. **Escopo do grupo:** insira o escopo do grupo.  
   20. **Filtro do grupo:** digite uma expressão de filtro para o grupo. Por exemplo: `(objectClass=group)` que retornará todos os objetos no servidor LDAP/AD do tipo `group`.  
   21. **Atributo do membro (MemberAttr):** insira os atributos dos membros do grupo.  
   22. **Ordem:**  
   23. **Usar SSL?:** selecione se você deseja usar o protocolo SSL. Por padrão, essa opção é definida como **Não**.  
5. Clique em **Salvar**.

## Alterar um servidor LDAP/AD

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Active Directory \> Servidores**.  
3. No formulário **Servidores LDAP/AD**, selecione o servidor que deseja editar e, na coluna **Ação** , clique em **Alterar**, representado pelo ícone de lápis e papel.

A janela **Servidor LDAP/AD** será aberta no modo de edição e você poderá modificar os atributos necessários. Em seguida, clique em **Salvar** para salvar as alterações.

## Testar a autenticação de um servidor LDAP/AD

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Active Directory \> Servidores**.  
3. No formulário **Servidores LDAP/AD**, selecione o servidor que deseja editar e, na coluna **Ação**, clique no ícone de três pontos verticais e selecione **Testar autenticação** no menu suspenso.  
4.  Na janela **Teste de autenticação LDAP**, preencha os seguintes campos:  
   1. **Base DN**: preencha o valor do Base DN. Por exemplo: `CN=Users,DC=safe password,DC=com,DC=br`.  
      1. Por padrão este campo vem preenchido com o DN base do servidor que foi selecionado anteriormente.  
      2. Se o usuário tiver alterado o valor do campo **Base DN**, para que a autenticação funcione é necessário copiar este novo valor e alterá-lo no servidor. Esse passo é importante porque, caso o valor não seja modificado na edição, o valor que será utilizado na autenticação será o valor cadastrado originalmente.  
   2. **Usuário**: preencha o nome de usuário. Por exemplo: `johndoe`.  
   3. **Senha**: preencha a senha do usuário.  
5. Clique em **Autenticar**.

Uma mensagem será exibida abaixo dos campos, indicando se a autenticação foi bem-sucedida ou não.  

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).