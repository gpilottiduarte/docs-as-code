# Como configurar a autenticação via Kerberos para sessões RDP no senhasegura

Este documento fornece informações sobre o passo a passo para realizar a configuração para que as sessões RDP Proxy e RDP via Web Proxy sejam autenticadas pelo protocolo Kerberos.

:::(error) (**Importante**)
Os passos deste tutorial devem ser realizados no **Segura**.
:::

### Requisitos

* Ser um usuário com permissão de administrador no Segura.

---
:::(warning) (**Atenção**)
O passo a seguir deve ser realizado somente após a realização dos passos descritos no documento [Como configurar a autenticação via Kerberos para sessões RDP no Windows Server](/v4/docs/pt/pam-session-how-to-configure-kerberos-authentication-for-rdp-sessions-on-windows-server).
:::

## Configurar a autenticação Kerberos

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.
2. No menu lateral, selecione **Parâmetros do sistema** > **Global**.
3. Na tela, clique na aba **Segurança**.
    1. No parâmetro **Modo de segurança RDP***, escolha a opção **TLS (recomendado)**.
4. No canto inferior direito, clique em **Salvar**.

Após essa configuração será possível iniciar sessões por RDP via Web Proxy ou sessões RDP Gate, tendo sua autenticação feita pelo protocolo Kerberos.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.