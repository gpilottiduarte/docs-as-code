# Como configurar um acesso excepcional

Neste documento, você aprenderá como configurar um acesso excepcional no senhasegura.

## Requisitos

* Ter permissão de PAM operator no senhasegura
* Estar cadastrado na lista de usuários permitidos

---
## Configurar o acesso excepcional

Para configurar o acesso excepcional para uma credencial, siga estas etapas:

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, identificado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais > Todas**.
3. Na seção **Ações**, clique no ícone de três pontos verticais e selecione a opção **Acesso excepcional**.
4. Na seção **Restrições de acesso**, adicione as seguintes informações:
    4.1. No campo **Início**, adicione a data e hora de início do acesso.
    4.2. No campo **Duração**, adicione o período de validade do acesso.
    4.3. No campo **Usuários permitidos**, adicione o(s) usuário(s) que serão beneficiados com o acesso.
5. Ao adicionar o usuário, defina as seguintes opções:
    5.1. Selecione **Iniciar sessão** para garantir que o usuário inicie a sessão com a credencial disponibilizada.
    5.2. Selecione **Visualizar senha** para garantir que o usuário visualize a senha da credencial disponibilizada.
6. Clique em **Adicionar** para salvar os usuários do sistema.
7. Clique no botão **Salvar**.

***

## Próximos passos
[Como gerenciar um acesso excepcional](/v3-33/docs/pt/pam-session-how-to-manage-exceptional-access)


Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io).