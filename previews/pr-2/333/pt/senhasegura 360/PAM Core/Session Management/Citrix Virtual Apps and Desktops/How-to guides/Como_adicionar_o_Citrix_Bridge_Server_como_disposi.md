# Como adicionar o Citrix Bridge Server como dispositivo

Neste documento, você encontra um guia passo a passo sobre como adicionar o Citrix Bridge Server como um dispositivo senhasegura.

## Requisitos

* Possuir o Citrix Server Bridge instalado. O servidor pode ser instalado de duas formas diferentes, via [Docker Container](/v3-33/docs/pt/pam-session-how-to-install-citrix-bridge-server-using-docker-container) ou [Extended Services OVA](/v3-33/docs/pt/pam-session-how-to-install-citrix-bridge-server-using-senhasegura-extended-services-ova).

---
## Adicionar o Citrix como dispositivo

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Dispositivos**.
2. No menu lateral selecione **Dispositivos**.
3. No canto superior direito, clique no ícone de três pontos verticais e clique em **+ Novo**.
4. Na janela Cadastro do dispositivo, na aba Informações preencha os campos obrigatórios.
    :::(info) (**Info**)
    Para saber mais detalhes de como preencher estes campos, acesse os documentos de [Dispositivos](/v3-33/docs/pt/devices).
    :::
5. Na aba **Conectividade**, no campo **Conectividade** selecione **RDP**.
    1. O campo **Porta** será preenchido com o valor de **3389** automaticamente.
    2. Clique em **Adicionar**.
    3. Na lista de **Conectividade** que será apresentada clique em **Testar**.
6. Clique em **Salvar**.

Após esses passos um novo dispositivo está configurado como Citrix Server Bridge e pronto para o uso.

---
### Próximos passos
[Como adicionar um RemoteApp para o Citrix Bridge Server](/v3-33/docs/pt/pam-session-how-to-add-a-remoteapp-to-citrix-bridge-server)
[Como cadastrar uma credencial do Citrix Bridge Server](/v3-33/docs/pt/pam-session-how-to-add-citrix-bridge-server-credential)
[Como acessar um desktop ou aplicativo Citrix](/v3-33/docs/pt/pam-session-how-to-access-a-citrix-desktop-or-application)

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.