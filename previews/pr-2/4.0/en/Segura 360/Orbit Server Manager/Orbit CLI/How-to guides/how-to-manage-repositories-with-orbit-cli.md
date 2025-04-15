# How to manage repositories with Orbit CLI

Managing repositories with **Orbit CLI** is essential for developing and maintaining security in controlling access to privileged information. This article will cover the main features of using orbit-cli to manage repositories securely and efficiently.

:::(error) (Caution)
With the update to version 3.33, the `orbit apt-fix --force` command will be deprecated and become obsolete. You should only use the `orbit repository <command>` command to manage the repositories.
:::

## Requirements
- Have an administrator profile on senhasegura.
- SSH access to the senhasegura instance.

## Configure the repositories
You can configure four types of repositories via the command line with orbit-cli:
1. **Stable**: stable repository, to configure it, type `orbit repository configure stable`.
2. **Candidate**: repository with packages that are in the process of being uploaded to the stable repository, to configure it, type `orbit repository configure candidate`.

Once you have determined which repository will be updated, you must define the location of this repository's bucket. The options will be shown similarly to the example below:

```bash
Choose a bucket location:
  ▸ São Paulo
    Doha
    Iowa
    Sydney
    Warsaw
```
You must select the location of the bucket using the arrow keys on your keyboard. When you have selected the correct location, press `ENTER`. You'll need to confirm the configuration and location for Orbit to perform the update:

```bash
Are you sure you want to proceed [y/N]:
```
Type `y` to continue or `n` to stop the process. The default option is `N` (stop).

If successful, the terminal will display the entire process, similar to the example below:

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
You can also access the help through the terminal by typing `orbit –help ou orbit repository --help`. 

:::(info) (Info)
For all four response options, we'll have the same flow of action.
:::

:::(error) (Caution)
When running the command and choosing the location, a certificate error may occur. In such cases, go to the document [How to change senhasegura to use the new repository](/v4/docs/installation-how-to-change-senhasegura-to-use-the-new-repository) to solve the problem. It is essential to follow the instructions in this document, otherwise the `apt get update` command will return a handshake error.
:::


***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).