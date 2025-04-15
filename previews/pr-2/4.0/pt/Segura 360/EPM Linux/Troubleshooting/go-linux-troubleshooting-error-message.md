# Mensagens de erro ao gravar uma sessão

Durante o processo de gravação de sessão, podem ocorrer as seguintes mensagens de erro devido aos requisitos que precisam ser atendidos. Veja como lidar com os possíveis cenários ao cadastrar uma política com o parâmetro de gravação habilitado.

## Mensagem 01 - SIGNUSR: 1008: Certificate inactive
**Certificado inativo:** este erro ocorre quando a workstation foi inativada na plataforma Segura.

### Solução

1. Acesse a plataforma Segura.
2. Acesse o menu **EPM➔Geral➔Workstations.**
3. Filtre o campo **Estado** com a opção **Inativo.**
4. Clique em **Filtrar.**
5. Encontre a workstation que deseja ativar.
6. No menu **Ação**, clique em **⁝**
7. Selecione **Autorizar.**
8. Escolha **Sim** para confirmar.
***
## Mensagem 02 - SIGNUSR:  1011: Local user inactive 
**Usuário local inativo:** este erro ocorre quando o usuário do EPM Linux está inativo.

### Solução

1. Acesse a plataforma Segura.
2. Acesse o menu **EPM➔Geral➔Usuários.**
3. Filtre o campo **Estado** com a opção **Revogado.**
4. Clique em **Filtrar.**
5. Encontre o usuário n que deseja ativar.
6. No menu **Ação**, clique em **⁝** 
7. Selecione **Autorizar.**
8. Escolha **Sim** para confirmar.
***
## Mensagem 03 - SIGNUSR: 1013: Local user does not exist on server 
**O usuário local não existe no servidor:** este erro ocorre quando não existe um usuário com o mesmo username na plataforma Segura.

### Solução

1. Acesse a plataforma Segura.
2. **[Crie um usuário](https://docs.Segura.io/v4/docs/pt/cloud-iam-add-user)** com o mesmo nome de usuário.
***
## Mensagem 04 - SIGNUSR: 1014: User pending approval location 
**Usuário local pedente de aprovação:** este erro ocorre quando o usuário existe na plataforma Segura e na workstation com o EPM Linux instalado, mas ainda não foi aprovado pelo administrador.

### Solução

1. Acesse a plataforma Segura.
2. Acesse o menu **EPM➔Geral➔Usuários.**
3. Filtre o campo **Estado** com a opção **Pendente.**
4. Clique em **Filtrar.**
5. Encontre o usuário que deseja autorizar.
6. No menu **Ação**, clique em **⁝** 
7. Selecione **Autorizar.**
8. Escolha **Sim** para confirmar.
***
## Mensagem 05 - SIGNUSR:  1017: User inactive Segura 
**Usuário Segura inativo:** este erro ocorre quando o usuário da plataforma Segura relacionado ao EPM Linux está inativo. Os usuários devem estar ativos, inclusive o usuário root.

### Solução:

1. Acesse a plataforma Segura.
2. Verificar se os usuários estão ativos em **Configurações➔Gestão de usuários➔Usuários.**
3. Filtre o campo **Ativo** com a opção **Não.**
4. Clique em **Filtrar.**
4. Encontre o usuário que precisa ativar.
5. No menu **Ação**, clique em **Editar.** 
6. No campo **Estado** marque como **Ativo.**
9. Clique em **Salvar.**

* * *
## Comunidade Segura
Para saber mais sobre este assunto, veja os artigos criados sobre o [EPM.](https://community.Segura.io/search?q=GO%20Endpoint%20Manager%20tags%3Apt_BR)

Se precisar de mais assistência, pergunte no [Segura Community](https://community.Segura.io/). Lá, você pode contar com a ajuda dos outros usuários e dos nossos especialistas do Segura para obter uma resposta.