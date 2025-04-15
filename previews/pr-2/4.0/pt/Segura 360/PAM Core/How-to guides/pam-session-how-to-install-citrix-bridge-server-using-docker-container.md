# Como instalar Citrix Bridge Server utilizando o Docker container

Neste documento, você encontra um guia passo a passo sobre como realizar a instalação do Citrix Bridge Server via docker, que é responsável pela comunicação com o Citrix Virtual Apps e Desktops através de um protocolo [HDX](https://www.citrix.com/pt-br){target=`_blank`} exclusivo da Citrix.

## Requisitos

* Linux com [Docker](https://docs.docker.com/engine/install/){target=`_blank`}.
* Módulo [Fuse](https://www.kernel.org/doc/html/latest/filesystems/fuse.html){target=`_blank`} para transferir arquivos.
* Porta RDP (3389) aberta.
* Conexão de rede com o servidor Citrix Virtual Apps e Desktops.
* Conexão de rede com o servidor onde os aplicativos são executados.
* Possuir o Citrix Proxy container Segura já instalado.

---
## Instalar via Docker container

1. Realize o download do [Citrix VAD Proxy](https://d.Segura.io/Segura-citrix-receiver-bridge){target=`_blank`} para obter o arquivo `.tar.gz`.
2. Abra o aplicativo de prompt de comando de sua preferência para descompactar o arquivo.
    1. Digite `tar -zxvf docker-image_0.9.5-8.tar.gz`.
    2. Aperte a tecla **Enter**.
    3. A mensagem `x xrdp-citrix-Segura-image_0.9.5-8.tar.gz` será exibida confirmando que a imagem foi gerada.
3. Importe a imagem do container, digite:
    1. `sudo docker load -i xrdp-citrix-Segura-image_0.9.5-8.tar.gz`
4. Inicie o container, digite:
    ```bash
    sudo docker run -d \
            --net host \
            --name xrdp-citrix-Segura-image_0.9.5-8 \
            --device /dev/fuse \
            --cap-add SYS_ADMIN
    xrdp-citrix-Segura-image:0.9.5-8
    ```
5. Faça a validação, digite:
    1. `sudo docker ps`

Este é o resultado esperado após a realização destes passos:

```bash
CONTAINER ID   IMAGE                                   COMMAND       CREATED         STATUS         PORTS     NAMES
c679f44df088   xrdp-citrix-Segura-image:0.9.5-8   "/start.sh"   7 minutes ago   Up 7 minutes             xrdp-citrix-Segura-image_0.9.5-8
```

Caso a transferência de arquivos e a opção de copiar e colar não funcione, inicie o container adicionando o comando `--privileged`.

```bash
sudo docker rm -f xrdp-citrix-Segura-image_0.9.5-8

sudo docker run -d \
    --net host \
    --name xrdp-citrix-Segura-image_0.9.5-8 \
    --device /dev/fuse \
    --cap-add SYS_ADMIN --privileged xrdp-citrix-Segura-image:0.9.5-8
```

O Citrix Server também pode ser instalado e configurado utilizando o Extended Service OVA Segura, para saber como realizar essa instalação acesse o documento [Como instalar Citrix Bridge Server utilizando Extended Services OVA Segura](/v4/docs/pt/pam-session-how-to-install-citrix-bridge-server-using-Segura-extended-services-ova).

---
### Próximos passos
[Como adicionar o Citrix Bridge Server como dispositivo](/v4/docs/pt/pam-session-how-to-add-citrix-bridge-server-as-a-device)
[Como adicionar um RemoteApp para o Citrix Bridge Server](/v4/docs/pt/pam-session-how-to-add-a-remoteapp-to-citrix-bridge-server)
[Como cadastrar uma credencial do Citrix Bridge Server](/v4/docs/pt/pam-session-how-to-add-citrix-bridge-server-credential)
[Como acessar um desktop ou aplicativo Citrix](/v4/docs/pt/pam-session-how-to-access-a-citrix-desktop-or-application)

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.