# Como cadastrar uma credencial do Citrix Bridge Server

Neste documento, você encontra um guia passo a passo sobre como cadastrar uma credencial para o Citrix Bridge Server no Segura.

## Requisitos

* A credencial deve estar no Active Directory (AD).
* O RemoteApp para o aplicativo já deve estar cadastrado e configurado. Para realizar esse passo acesse o documento [Como adicionar um RemoteApp para o Citrix Bridge Server](/v4/docs/pt/pam-session-how-to-add-a-remoteapp-to-citrix-bridge-server).

---
## Cadastrar a credencial do Citrix

1. No Segura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral selecione **Credenciais** > **Todos**.
3. Na tela do relatório, no canto superior direito clique no ícone de três pontos verticais e selecione **+ Novo**.
4. Na aba **Informações**, preencha os campos obrigatórios.
    :::(info) (**Info**)
    Para saber mais detalhes de como preencher estes campos, acesse os documentos de [Credenciais](/v4/docs/pt/pam-credentials).
    :::
5. Clique na aba **Configurações da sessão**.
    1. Na seção **Configurações de aplicativo remoto**, clique no ícone de **adição** ao lado do campo **Macro de automação (RemoteApp)**.
    2. No **menu suspenso** que será disponibilizado, escolha o cadastro do RemoteApp com o Citrix realizado anteriormente.
6. Clique em **Salvar**.


Após esses passos a credencial está configurada e pronta para o uso.

---
### Próximos passos
[Como acessar um desktop ou aplicativo Citrix](/v4/docs/pt/pam-session-how-to-access-a-citrix-desktop-or-application)

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.