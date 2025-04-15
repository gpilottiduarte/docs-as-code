# Como gerenciar repositórios com o Orbit CLI

Gerenciar repositórios com o **Orbit CLI** é essencial para desenvolver e manter a segurança no controle de acesso a informações privilegiadas. Este artigo abordará as principais funcionalidades sobre como utilizar o orbit-cli para gerenciar seus repositórios de forma segura e eficiente.

:::(error) (Cuidado)
Com a atualização para versão 3.33, o comando `orbit apt-fix --force` será deprecado e se tornará obsoleto. Você deverá utilizar apenas o comando `orbit repository <command>` para gerenciar os repositórios.
:::

## Requisitos
- Ter perfil de administrador no Segura.
- Acesso via SSH à instância do Segura.

## Configurar os repositórios
É possível configurar quatro tipos de repositórios via linha de comando com o orbit-cli:
- **Stable**: repositório estável, para configurá-lo digite `orbit repository configure stable`.
- **Candidate**: repositório com os pacotes que estão em vias de subir para o repositório stable, para configurá-lo digite `orbit repository configure candidate`.

Uma vez determinado qual será o repositório que será atualizado, você deverá definir qual a localização do bucket deste repositório. As opções serão mostradas de forma semelhante ao exemplo abaixo:
```bash
Choose a bucket location:
  ▸ São Paulo
    Doha
    Iowa
    Sydney
    Warsaw
```
Você deverá selecionar a localização do bucket utilizando as teclas de seta do seu teclado. Quando tiver selecionado a localização correta, pressione `ENTER`. Você precisará confirmar a configuração e a localização para que o Orbit realize a atualização:

```bash
Are you sure you want to proceed [y/N]: 
```

Digite `y` para prosseguir ou `n` para interromper o processo. A opção padrão é `N` (interromper).

Em caso de sucesso, o terminal exibirá o processo inteiro, de forma semelhante ao exemplo abaixo:

```bash
Duration: 584.799995ms
 (Reading database ... 218835 files and directories currently installed.)
 Preparing to unpack /tmp/apt-fix.deb ...
 Unpacking apt-fix (1.0.0-1) over (1.0.0-1) ...
 Setting up apt-fix (1.0.0-1) ...
 Adding mt4 repository key... Cleaning apt cache...
 Registering ca certificate...
 Updating certificates in /etc/ssl/certs...
 0 added, 0 removed; done.
 Running hooks in /etc/ca-certificates/update.d...

 updates of cacerts keystore disabled.
 done.

Duration: 2.508328033s

Duration: 3.124261ms
 Ign:1 https://deb.senhasegura.com/stable-sp bookworm InRelease
 Ign:2 https://deb.senhasegura.com/stable-sp bookworm-updates InRelease
 Ign:3 https://deb.senhasegura.com/stable-sp bookworm-security InRelease
 Ign:1 https://deb.senhasegura.com/stable-sp bookworm InRelease
 Ign:2 https://deb.senhasegura.com/stable-sp bookworm-updates InRelease
 Ign:3 https://deb.senhasegura.com/stable-sp bookworm-security InRelease
 Ign:1 https://deb.senhasegura.com/stable-sp bookworm InRelease
 Ign:2 https://deb.senhasegura.com/stable-sp bookworm-updates InRelease
 Ign:3 https://deb.senhasegura.com/stable-sp bookworm-security InRelease
 Reading package lists...
 Building dependency tree...
 Reading state information...
 All packages are up to date.
 ```
 
 Você ainda poderá acessar a ajuda através do terminal, para isso digite `orbit –help ou orbit repository --help`.

:::(info) (Info)
Para todas as quatro opções de repositórios, teremos o mesmo fluxo de atuação.
:::

:::(error) (Cuidado)
Ao rodar o comando e escolher a localização, pode ocorrer um erro de certificado. Nesses casos, acesse o documento [Como alterar o Segura para usar novo repositório.](/v4/docs/pt/installation-how-to-change-Segura-to-use-the-new-repository) para solucionar o problema. É essencial seguir as instruções contidas neste documento, caso contrário, o comando `apt get update` retornará um erro de *handshake*.
:::

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).