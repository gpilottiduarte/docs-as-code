# How to install Citrix Bridge Server using Docker container

In this document, you’ll find a step-by-step guide on how to perform the installation of Citrix Bridge Server via docker, which is responsible for communicating with Citrix Virtual Apps and Desktops through an [HDX](https://www.citrix.com/pt-br){target=`_blank`} protocol exclusive to Citrix.

## Requirements

* Linux with [Docker](https://docs.docker.com/engine/install/){target=`_blank`}.
* [Fuse](https://www.kernel.org/doc/html/latest/filesystems/fuse.html){target=`_blank`} module to transfer files.
* RDP port (3389) open.
* Network connection to the Citrix Virtual Apps and Desktops server.
* Network connection to the server where applications run.
* Have the senhasegura Citrix Proxy container already installed.

---
## Install via Docker container

1. Download the [Citrix VAD Proxy](https://d.senhasegura.io/senhasegura-citrix-receiver-bridge){target=`_blank`} to get the `.tar.gz` file.
2. Open the **command prompt** application of your preference to unzip the file.
    1. Type `tar -zxvf docker-image_0.9.5-8.tar.gz`.
    2. Press the **Enter** key.
    3. The message `x xrdp-citrix-senhasegura-image_0.9.5-8.tar.gz` will be displayed, confirming that the image was generated.
3. Import the container image, type:
    1. `sudo docker load -i xrdp-citrix-senhasegura-image_0.9.5-8.tar.gz`
4. Start the container, type:
    ```
    sudo docker run -d \
        --net host \
        --name xrdp-citrix-senhasegura-image_0.9.5-8 
        --device /dev/fuse \
        --cap-add SYS_ADMIN
    xrdp-citrix-senhasegura-image:0.9.5-8
    ```
5. Perform the validation, type:
    1. `sudo docker ps`

This is the expected result after performing these steps:

```
CONTAINER ID   IMAGE                                   COMMAND       CREATED         STATUS         PORTS     NAMES
c679f44df088   xrdp-citrix-senhasegura-image:0.9.5-8   "/start.sh"   7 minutes ago   Up 7 minutes             xrdp-citrix-senhasegura-image_0.9.5-8
```

If file transfer and copy and paste don’t work, start the container by adding the command `--privileged`.

```
sudo docker rm -f xrdp-citrix-senhasegura-image_0.9.5-8

sudo docker run -d \
    --net host \
    --name xrdp-citrix-senhasegura-image_0.9.5-8 \
    --device /dev/fuse \
    --cap-add SYS_ADMIN --privileged xrdp-citrix-senhasegura-image:0.9.5-8
```

Citrix Server can also be installed and configured using the senhasegura Extended Service OVA, to find out how to perform this installation, access the How to install Citrix Bridge Server using senhasegura Extended Services OVA document.

---
### Next
[How to add Citrix Bridge Server as a device](/v4/docs/pam-session-how-to-add-citrix-bridge-server-as-a-device)
[How to add a RemoteApp to Citrix Bridge Server](/v4/docs/pam-session-how-to-add-a-remoteapp-to-citrix-bridge-server)
[How to add Citrix Bridge Server credential](/v4/docs/pam-session-how-to-add-citrix-bridge-server-credential)
[How to access a Citrix desktop or application](/v4/docs/pam-session-how-to-access-a-citrix-desktop-or-application)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.