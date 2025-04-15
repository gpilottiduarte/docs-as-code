# Como gerenciar servidores LDAP/AD

O cadastro de um servidor Active Directory (AD) no Segura é um procedimento essencial para integrar e gerenciar eficientemente a infraestrutura de TI de uma organização. O Active Directory é uma solução amplamente utilizada para o gerenciamento de identidade e acesso em redes corporativas, permitindo centralizar a autenticação e autorização de usuários e dispositivos. 

Neste documento, você encontrará as informações para gerenciar servidores do tipo Active Directory no Segura.

## Requisitos

* Ter papel de *PAM administrator*.

## Cadastrar/Alterar um novo servidor AD

1. No Segura, na barra de navegação, passe o mouse sobre o Menu de produtos e selecione **Configurações**.  
2. No menu lateral, acesse **Provisionamento \> Active Directory \> Servidores**.
3. No formulário **Servidores,** você verá uma listagem com todos os servidores cadastrados na sua instância do Segura. Para cadastrar um novo servidor, clique em **Adicionar** e siga os passos na tela.

### Aba Domínio, dispositivo e credencial

1. No menu suspenso **Domínio**, selecione o domínio do seu servidor AD.  
2. No menu suspenso **Credencial para autenticação**, selecione a credencial que será usada para autenticação no servidor AD.  
3. Clique em **Continuar**.

:::(warning) (Atenção)  
Tanto o domínio como a credencial devem ser cadastrados antes do servidor AD.  
:::

### Aba LDAP

1. No campo **Host**, preencha com o nome do host do servidor AD.  
2. No campo **Porta**, preencha com o número da porta onde o servidor AD está escutando.  
3. No campo **DN Base**, preencha com o *Distinguished Name Base* do seu servidor AD. Este campo é o ponto de partida a partir do qual o sistema irá realizar a busca por objetos no diretório e irá definir o escopo para buscas LDAP dentro da hierarquia do AD. Por exemplo, para o domínio `example.com` o **DN Base** será `DC=example,DC=com`.  
4. No menu suspenso **Formulário de conta**, selecione o formulário de conta que você deseja utilizar para esse servidor. Esse formulário permite aos administradores configurar e padronizar contas de usuário com as informações e permissões corretas para o ambiente do AD. Geralmente, quando usamos AD, a opção **Principal** é a mais utilizada.

:::(warning) (Atenção)  
O formulário de conta deve ser cadastrado antes.  
:::

5. No seletor **Ordem**, selecione a ordem de servidores em que a autenticação será realizada.

   :::(info) (Info)  
   A ordem de configuração dos servidores define a sequência de autenticação no Segura. Quando múltiplos servidores são configurados, o sistema tentará autenticar o usuário seguindo a ordem estabelecida, percorrendo cada servidor até que a autenticação seja bem-sucedida. Por exemplo, se os servidores A, B e C estiverem configurados nessa ordem, e um usuário existir apenas no servidor C, o Segura iniciará a tentativa de autenticação no servidor A, prosseguirá para o B e, por fim, completará a autenticação no servidor C.
   :::

6. Na opção **Ativo**, ative o interruptor para que o servidor seja cadastrado no Segura já ativo. Por padrão, essa opção está ativada.  
7. Na opção **Membro é DN?** ative o botão toggle se o usuário for identificado por seu DN  
8. Na opção **Bind requer DN?** ative o botão toggle se o processo de associação precisar usar o DN. Esta configuração é necessária para o caso em que um usuário esteja em uma localização diferente do DN base.  
9. Na opção **Usar SSL?** ative o botão toggle se você deseja usar o protocolo SSL. Por padrão, essa opção está desativada.  
10. No menu suspenso **Network connector,** selecione qual conector será usado com o servidor LDAP. Este passo adicional é utilizado quando a sua estrutura utiliza o network connector. Nesse caso, é necessário selecionar o conector no menu suspenso.  
11. Na opção **Formato do filtro de conta,** especifique os critérios de pesquisa para restringir os resultados dos objetos. Por exemplo: `(&(objectClass=user)(sAMAccountName=johndoe)).`  
    1. Nesse caso, os campos são:  
       1. `objectClass=user`: indica que o tipo de usuário deve ser *user*.  
       2. `sAMAccountName=johndoe`: o identificador SAM (*Security Account Manager*) da conta de usuário deve ser `johndoe`.  
12. Na opção **Usar domínio de credencial**, ative o botão toggle se você deseja usar uma credencial de domínio. Por padrão, essa opção está desativada.  
13. Utilize a opção **Atributo de username** apenas quando o atributo do username for diferente do padrão. Por padrão, este atributo é `sAMAccountName`.  
14. Na opção **DN Bind (deixar em branco para utilizar o DN Base)**, preencha com o DN que será usado como identificador exclusivo. Por exemplo: `CN=John Doe,OU=Users,DC=Segura,DC=com`.  
15. Na opção **Grupo** digite o grupo da conta.  
16. Na opção **DN do grupo** digite o DN da conta.  
17. Na opção **Atributo do grupo (GroupAttr),** preencha com os atributos do grupo.  
18. Na opção **Escopo do grupo**, preencha com o escopo do grupo.  
19. Na opção **Filtro do grupo**, digite uma expressão de filtro para o grupo. Por exemplo: `(objectClass=group)` que retornará todos os objetos no servidor LDAP/AD do tipo group.  
20. Na opção **Atributo do membro (MemberAttr)**, insira os atributos dos membros do grupo.  
21. Clique em **Continuar**.

Ao final do processo, revise as informações do seu servidor AD e, caso tudo esteja correto, clique em **Salvar**.

## Testar a autenticação de um servidor LDAP/AD

1. No relatório **Servidores LDAP/AD**, identifique o servidor que deseja testar a autenticação e, na coluna **Ações**, selecione a opção **Testar autenticação** no menu suspenso **Ações**.  
2. No formulário **Teste de autenticação LDAP**, preencha os seguintes campos:  
   1. Na opção **Base DN**, preencha o valor da **Base DN**. Por exemplo: `CN=Users,DC=Segura,DC=com,DC=br`.  
      1. Por padrão, este campo vem preenchido com o DN base do servidor que foi selecionado anteriormente.  
      2. Se o usuário tiver alterado o valor do campo **Base DN**, para que a autenticação funcione, é necessário copiar este novo valor e alterá-lo no servidor. Esse passo é importante porque, caso o valor não seja modificado na edição, o valor que será utilizado na autenticação será o valor cadastrado originalmente.  
3. Na opção **Usuário**, preencha o nome de usuário. Por exemplo: `johndoe`.  
4. Na opção **Senha**, preencha a senha do usuário.  
5. Clique em **Autenticar**.

Uma mensagem será exibida abaixo dos campos, indicando se a autenticação foi bem-sucedida ou não.