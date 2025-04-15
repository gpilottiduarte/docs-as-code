# Como configurar uma sessão para usar com RemoteApp

Neste documento, você encontra um guia passo a passo sobre como acessar um RemoteApp no senhasegura.

## Requisitos

* Ter o RemoteApp cadastrado.
* Ser um usuário com o papel de system administrator, pam administrator ou pam operator.

---
## Acessar a sessão

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral selecione **Credenciais** > **Todas**.
3. Na lista de credenciais apresentada na tela escolha a credencial que irá possuir o acesso de RemoteApp.
    1. Clique no ícone representado pelos três pontos verticais e clique na opção **Editar**.
    2. Na janela **Cadastro da credencial**, clique na aba **Configurações da sessão**.
    3. Na seção **Configuração de aplicativo remoto**.
        1. Clique no símbolo de **adição** para que a caixa com opções seja disponibilizada.
        2. Selecione um macro **RemoteApp** e o tipo de **Conectividade**.
    4. Clique em **Salvar**.
4. De volta à tela inicial, clique no ícone representado pelo **computador** para iniciar a sessão e selecione a macro que foi criada.

 
Para saber mais informações sobre esta seção ou sobre o [cadastro de uma credencial](/v3-33/docs/pt/pam-how-to-set-up-a-credential-in-senhasegura) em geral, acesse a documentação de [Credenciais](/v3-33/docs/pt/pam-credentials).

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.