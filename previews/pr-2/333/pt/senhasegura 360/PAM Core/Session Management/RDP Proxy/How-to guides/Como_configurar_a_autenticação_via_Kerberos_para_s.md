# Como configurar a autenticação via Kerberos para sessões RDP no senhasegura

Neste artigo, você encontra um guia passo a passo sobre como realizar a configuração para que as sessões RDP Proxy e RDP via Web Proxy sejam autenticadas pelo protocolo Kerberos.

:::(error) (**Importante**)
Os passos deste tutorial devem ser realizados no **senhasegura**.
:::

### Requisitos

* Ser um usuário com permissão de administrador no senhasegura.

---
:::(warning) (**Atenção**)
O passo a seguir deve ser realizado somente após a realização dos passos descritos no documento [Como configurar a autenticação via Kerberos para sessões RDP no Windows Server](/v3-33/docs/pt/pam-session-how-to-configure-kerberos-authentication-for-rdp-sessions-on-windows-server).
:::

## Configurar a autenticação Kerberos

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Parâmetros do sistema** > **Parâmetros do sistema**.
3. Na tela, clique na aba **Segurança**.
    1. No parâmetro **Modo de segurança RDP***, escolha a opção **TLS (recomendado)**.
4. No canto inferior direito, clique em **Salvar**.

Após essa configuração será possível iniciar sessões por RDP via Web Proxy ou sessões RDP Gate, tendo sua autenticação feita pelo protocolo Kerberos.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.