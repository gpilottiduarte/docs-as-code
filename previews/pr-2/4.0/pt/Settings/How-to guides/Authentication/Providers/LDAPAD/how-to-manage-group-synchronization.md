# Como gerenciar a sincronização de grupos

Essa funcionalidade permite adicionar, modificar ou remover usuários no Segura com base nos grupos do Active Directory (AD). Por exemplo, se houver um grupo de Recursos Humanos (RH) no AD que esteja sincronizado com o Segura; a adição de um novo funcionário a esse grupo criará automaticamente um usuário no Segura com o perfil de acesso correspondente. Por outro lado, se um funcionário for desligado e removido do grupo no AD, esse usuário será inativado no Segura. Esse recurso facilita o trabalho do administrador, que pode gerenciar tudo diretamente do AD.

Para realizar a sincronização de grupos LDAP/AD no Segura, siga os passos abaixo.

## Criar novo grupo LDAP/AD

Para criar um novo grupo LDAP/AD no Segura, faça o seguinte:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Provisionamento \> Active Directory \> Sincronização de grupos**.  
3. No formulário **Servidores**, clique no botão **Novo grupo**.

## Tela Grupo LDAP/AD

Ao clicar em **Novo Grupo**, a tela **Grupo LDAP/AD** será exibida. Preencha as informações do seu grupo de acordo com o mostrado abaixo.

### Aba Configurações

1. **Nome**: preencha com o nome do seu grupo. Por exemplo: `Grupo_01`.  
2. **Servidor**: no menu suspenso, selecione o servidor para o grupo. Este servidor deve ter sido cadastrado anteriormente.  
3. **Grupos de usuários**: no menu suspenso, selecione o grupo de usuários ao qual esse grupo pertence. Este grupo deverá ter sido cadastrado anteriormente.  
   1. Você pode adicionar um novo grupo clicando no botão **Novo** ao lado do menu suspenso.
4. **Ativo**: indique o status do grupo no momento da criação. Por padrão esta opção vem como **Sim**.  
5. **Sincronização**: indique se este grupo será sincronizado, de acordo com um intervalo de tempo, com o AD. Por padrão esta opção vem marcada como **Desligada**.  
6. **DN**: indique o parâmetro DN deste grupo. Por exemplo: `CN=Users, DC=example,DC=com`.  
7. **Atributo usuário do AD**: indique qual o atributo será o *username* do usuário.  
8. **Atributo nome de usuário do AD**: no menu suspenso, selecione o atributo no AD que será responsável pelo nome real do usuário no Segura. As opções são: *Nome, Display Name* e *Nome do Usuário*.  
9. **Departamento**: no menu suspenso, indique qual o departamento que esse grupo faz parte. Este departamento deve ter sido cadastrado anteriormente.  
10. **Busca do AD**: a busca AD refere-se ao processo de localização e recuperação de informações armazenadas no AD. Isso pode incluir a busca por usuários, grupos, computadores, unidades organizacionais (OUs) e outros objetos do diretório. Por exemplo: `(&(objectCategory=person)(objectClass=user)(memberOf=CN=Sales,OU=Groups,DC=example,DC=com)).`

    :::(info) (Info)
    Para maiores informações, acesse este [Cheat Sheet de filtros do LDAP](https://cheatography.com/pamymaf/cheat-sheets/ldap-filters/).
    :::

### Aba Papéis

1. Para adicionar papéis ao grupo de usuários, clique no botão **Adicionar**.   
2. O modal **Papéis** será aberto.  
3. No modal **Papéis**, selecione os papéis que você deseja adicionar ao grupo.  
4. Clique em **Adicionar** para adicionar os papéis ou em **Cancelar** para cancelar a operação.

### Aba Domum

1. **Ativar sincronização**: selecione se você deseja habilitar a sincronização dos grupos com o Segura Domum.  
2. **Tipo**: selecione o tipo de usuário que irá compor este grupo no Segura Domum. Por padrão esta opção vem marcada como **Usuários completos**.  
3. **Fornecedores/Grupo interno**: no menu suspenso, selecione o grupo que você deseja que este grupo faça parte no Segura Domum.

## Alterar um grupo LDAP/AD

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Provisionamento \> Active Directory \> Sincronização de grupos**.    
3. No relatório **Sincronização de grupos LDAP/AD**, identifique o grupo que você deseja alterar, clique no botão **Ações** e selecione **Alterar grupo**.

A janela **Grupo LDAP/AD** será aberta em modo edição. Altere as configurações que você deseja e as salve.

## Testar a sincronização do grupo LDAP/AD

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Provisionamento \> Active Directory \> Sincronização de grupos**.    
3. No relatório **Sincronização de grupos LDAP/AD**, identifique o grupo que você deseja alterar, clique no botão **Ações** e selecione **Teste de sincronização.**  
4. Na janela **Simulação da sincronização de grupo LDAP/AD** preencha os seguintes campos:  
   1. **DN**: preencha com os parâmetros de DN do grupo.  
   2. **Raw View**: ao selecionar esta opção, o log de sincronização será mostrado em formato de texto plano. Por padrão esta opção vem desmarcada.  
   3. **Filtro de usuário**: preencha com os parâmetros de filtragem de usuários do grupo.  
      1. Os campos **DN** e **Filtro de usuário** vêm preenchidos de acordo com os valores cadastrados no grupo.  
5. Clique no botão **Simular**.

Logo abaixo da caixa de texto para **Filtro de usuário** será mostrada uma mensagem indicando a saída do comando de sincronização. 

Se você **não** marcou a opção **Raw View**, a mensagem será mostrada em forma de uma tabela. Por exemplo:

| Usuário | Nome do usuário | Operação |
| ----- | ----- | ----- |
| `johndoe` | John Doe | `User 'johndoe' will be preserved` |
| `janedoe` | Jane Doe | `User 'janedoe' will be preserved` |

Contudo, se você marcou a opção **Raw View**, essa saída será mostrada sem tratamento. Por exemplo: `[0] => [mensagem] => Error performing group synchronization example: 0x51 Can't contact LDAP server: ldap://ad.example.com.br:38889`  

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).