# Como instalar Citrix Bridge Server utilizando Extended Services com Segura OVA

Neste documento, você encontra um guia passo a passo sobre como realizar a instalação do Citrix Bridge Server, via Extended Services OVA, que é responsável pela comunicação com o Citrix Virtual Apps e Desktops através de um protocolo [HDX](https://www.citrix.com/pt-br){target=`_blank`} exclusivo da Citrix.

## Requisitos

* Hypervisor com suporte OVA.
* 4 GB de RAM.
* 4 vCPUs.
* 100 GB de HD.
* Conexão de rede com o servidor Citrix Virtual Apps e Desktops.
* Conexão de rede com o servidor onde os aplicativos são executados.

---
## Instalar via Extended Services OVA senhasegura

1. Faça o download do Extended Services OVA senhasegura.
    :::(info) (**Info**)
    Certifique-se de que as checksums do arquivo OVA que você recebeu correspondam aos seguintes hashes:
    md5sum: `5E8E264B58E5A80BE816920A3BBF54F5`
    sha256sum: `808CB8BAAE65CEB2BF7A7BD277E2601D00A5424CA9AD2AD73C2E5B08625F4FE`
    :::
2. Importe o OVA para o seu hypervisor.
3. Acesse a [Solução PAM](https://suporte.senhasegura.com.br/){target=`_blank`} para obter a credencial de login.
4. Uma vez logado, configure a rede usando o seguinte comando:
    1. Digite: `nmtui`.
5. Verifique se o contêiner está funcionando corretamente, digite:
    1. `sudo docker ps`.

Este é o resultado esperado após a realização destes passos:
```bash
CONTAINER ID   IMAGE                                   COMMAND       CREATED         STATUS         PORTS     NAMES
c679f44df088   xrdp-citrix-senhasegura-image:0.9.5-8   "/start.sh"   7 minutes ago   Up 7 minutes             xrdp-citrix-senhasegura-image_0.9.5-8
```

O Citrix Server também pode ser instalado e configurado utilizando o **Docker container**, para saber como realizar essa instalação acesse o documento [Como instalar Citrix Bridge Server utilizando o Docker container](/v4/docs/pt/pam-session-how-to-install-citrix-bridge-server-using-docker-container).

---
### Próximos passos
[Como adicionar o Citrix Bridge Server como dispositivo](/v4/docs/pt/pam-session-how-to-add-citrix-bridge-server-as-a-device)
[Como adicionar um RemoteApp para o Citrix Bridge Server](/v4/docs/pt/pam-session-how-to-add-a-remoteapp-to-citrix-bridge-server)
[Como cadastrar uma credencial do Citrix Bridge Server](/v4/docs/pt/pam-session-how-to-add-citrix-bridge-server-credential)
[Como acessar um desktop ou aplicativo Citrix](/v4/docs/pt/pam-session-how-to-access-a-citrix-desktop-or-application)

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.