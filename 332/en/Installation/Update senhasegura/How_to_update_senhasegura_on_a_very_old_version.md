# How to update senhasegura on a very old version

senhasegura runs under the Linux operating system. With each new version of the operating system, senhasegura receives updates. If you are using a very old version and need to update to the newest version, you will need to perform the update process more than once, until you reach the newest version. 

## Update sequence
If you are using version 3.13 of senhasegura, you should update following this sequence of versions:

- 3.13 to 3.14.
- 3.14 to 3.28.
- 3.28 to 3.32.
- 3.32 to 3.33.

## Requirements
- SSH access to the server where senhasegura is installed.
- Permission to execute commands with elevated privileges (sudo).
- senhasegura installed with active license.

## Update example
Assume that you are upgrading an environment that is on version 3.13 of senhasegura and intend to upgrade to version 3.33. To perform this upgrade, follow the steps below:

For each upgrade, you must update the Linux repositories, install `orbit-cli`, and force the upgrade to the new `orbit-cli` package using the `--force` flag.

### Versions update

```bash
sudo apt-get update #Repositories update
sudo apt-get install orbit-cli #Orbit CLI instalation
sudo orbit upgrade --force #Update the version
```

Repeat the commands above until you reach the most up-to-date version.

:::(error) (Attention!)
It’s essential that you perform the updates as shown in the **Update sequence** until you reach the most up-to-date version.
:::

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
