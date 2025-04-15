# Como trocar a senha de um usuário de domínio no AD

Neste artigo, você encontra um guia passo a passo sobre como realizar a troca de senhas para usuário de domínio no servidor Active Directory (AD).

:::(info) (**Info**)
Seguindo os passos desse tutorial, a permissão será dada **apenas para um usuário** selecionado. Para conceder a permissão para **um grupo**, acesse a documentação [Como trocar a permissão de um usuário de domínio no AD](/v3-32/docs/pt/executions-how-to-change-a-domain-users-permission-in-ad).
:::

### Requisitos

* Ser um usuário administrador ou com privilégios administrativos para realizar alterações no Active Directory.
* Ter o Active Directory User and Computers instalado.

---
## Trocar a senha

1. No servidor **Active Directory (AD)**, encontre o grupo cuja permissão você deseja editar.
    1. Clique na pasta do grupo.
2. Na lista dos usuários do grupo, localizados à direita:
    1. Escolha o usuário, clique com o botão direito, e selecione **Propriedades**.
3. Na nova janela, clique na aba **Segurança**.
    1. Selecione **Everyone**.
    2. Clique **Avançadas**.
4. Na aba **Permissões**, clique **Adicionar**.
    1. Na nova janela, clique em **Selecionar uma entidade de segurança**.
        1. Digite o usuário que terá a permissão para trocar a senha no campo **Digite o nome do objeto a ser selecionado (exemplos)**.
        2. Clique em **OK**.
    2. Role a tela até o final e clique em **Limpar tudo**.
    3. Selecione apenas **Alterar senha**, **Redefinir senha**, **Ler pwdLastSet** e **Gravar pwdLastSet**.
    4. Clique em **OK**.
5. Ao retornar à tela da aba **Permissões**:
    1. Clique em **Aplicar** e depois em **OK**.

### Confirmar a alteração

1. Vá para o **senhasegura**, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais** > **Todas**.
3. Na lista selecione a credencial que você realizou a modificação no AD.
    1. Na coluna **Ação**, clique no ícone representado pelos **três pontos verticais**, e clique em **Editar**.
    2. Na janela **Cadastro da credencial**, clique na aba **Configurações de execução**.
    3. Veja que o campo **Plugin de troca** estará com o valor de **LDAP**, e o usuário no campo **Credencial de autenticação** está registrado no AD.
4. Clique no **X** para fechar a janela.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.