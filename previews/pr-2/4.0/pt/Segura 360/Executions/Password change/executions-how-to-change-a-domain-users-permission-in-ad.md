# Como trocar a permissão de um usuário de domínio no AD

Neste artigo, você encontra um guia passo a passo sobre como realizar a troca de permissão para usuário de domínio no servidor Active Directory (AD).

:::(info) (**Info**)
Seguindo os passos desse tutorial, a permissão será dada para **todo o grupo de usuários** inseridos na pasta selecionada. Para conceder a permissão apenas para **um usuário**, acesse a documentação [Como trocar a senha de um usuário de domínio no AD](/v4/docs/pt/executions-how-to-change-a-domain-users-password-in-ad).
:::

### Requisitos

* Ser um usuário administrador ou com privilégios administrativos para realizar alterações no Active Directory.
* Ter o Active Directory User and Computers instalado.

---
## Trocar a permissão

1. No servidor **Active Directory (AD)**, encontre o grupo cuja permissão você deseja editar. 
    1. Clique com o botão direito e escolha a opção **Delegar controle**.
2. Na janela **Usuários ou Grupos**, clique em **Adicionar**.
3. No campo **Digite os nomes  de objeto a serem selecionados (exemplos)**.
    1. Digite o usuário que terá a permissão de trocar a senha.
4. Clique em **OK**.
5. De volta à tela **Usuários ou Grupos**, clique em **Avançar**.
    1. Na lista, selecione **Redefinir senhas de usuários e forçar alteração no próximo logon**.
6. Clique em **Avançar**.
7. Clique em **Concluir**.

### Confirmar a alteração

1. Vá para o **Segura**, o canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais** > **Todas**.
3. Na lista selecione, a credencial que você realizou a modificação no AD.
    1. Na coluna **Ação**, clique no ícone representado pelos **três pontos verticais** e clique em **Editar**.
    2. Na janela **Cadastro da credencial** que se abre, clique na aba **Configurações de execução**.
    3. Veja que o campo **Plugin de troca** estará com o valor de **LDAP**, e o usuário no campo **Credencial de autenticação** está registrado no AD.
4. Clique no **X** para fechar a janela.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.