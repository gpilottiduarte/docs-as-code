# How to install Citrix Bridge Server using senhasegura Extended Services OVA

In this document, you’ll find a step-by-step guide on how to perform the installation of Citrix Bridge Server, via Extended Services OVA, which is responsible for communicating with Citrix Virtual Apps and Desktops through an HDX protocol exclusive to Citrix.

## Requirements

* Hypervisor with OVA support.
* 4GB of RAM.
* 4 vCPUs.
* 100 GB HD.
* Network connection to the Citrix Virtual Apps and Desktops server.
* Network connection to the server where applications run.

---
## Install via senhasegura Extended Services OVA

1. Download the senhasegura Extendend Services OVA.
    :::(info) (**Info**)
    Make sure the checksums of the OVA file you received match the following hashes:
    md5sum: `5E8E264B58E5A80BE816920A3BBF54F5`
    sha256sum: `808CB8BAAE65CEB2BF7A7BD277E2601D00A5424CA9AD2AD73C2E5B08625F4FE`
    :::
2. Import the OVA into your hypervisor.
3. Access [PAM Solution](https://suporte.senhasegura.com.br/){target=`_blank`} to obtain the login credential.
4. Once logged in, configure the network using the following command:
    1. Type: `nmtui`.
5. Verify that the container is working correctly, type:
    1. `sudo docker ps`.

This is the expected result after performing these steps:
```
CONTAINER ID   IMAGE                                   COMMAND       CREATED         STATUS         PORTS     NAMES
c679f44df088   xrdp-citrix-senhasegura-image:0.9.5-8   "/start.sh"   7 minutes ago   Up 7 minutes             
xrdp-citrix-senhasegura-image_0.9.5-8
```


Citrix Server can also be installed and configured using the Docker container, to find out how to perform this installation, access the [How to install Citrix Bridge Server using Docker container](/v3-32/docs/pam-session-how-to-install-citrix-bridge-server-using-docker-container) document.

---
## Next:
[How to add Citrix Bridge Server as a device](/v3-32/docs/how-to-add-citrix-bridge-server-as-a-device)
[How to add a RemoteApp to Citrix Bridge Server](/v3-32/docs/how-to-add-a-remoteapp-to-citrix-bridge-server)
[How to add Citrix Bridge Server credential](/v3-32/docs/how-to-add-citrix-bridge-server-credential)
[How to access a Citrix desktop or application](/v3-32/docs/how-to-access-a-citrix-desktop-or-application)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.