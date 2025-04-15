# How to change senhasegura to use the new repository

This document provides guidance on updating the senhasegura to use a new repository. This update is necessary to ensure that your system receives future updates.

::: (error) (Important)
After changing senhasegura to use the new repository, If you’re using a version prior to 3.33 and wish to update senhasegura to version 3.33 or later, please refer to the article [How to update versions prior to 3.33](/v3-32/docs/how-to-update-senhasegura-in-stages).
:::

## Requirements

- Secure Shell (SSH) client  
- Administrator credentials for the senhasegura server  
- The script "aptfix" file from senhasegura, you can get from the [file link](https://downloads.senhasegura.io/d/other/aptfix)

:::(Warning) (Attention)
Starting from **August 19, 2024**, all updates will utilize the new senhasegura repository. The old repository will no longer be available after this date.  
:::

## Path to access

To configure the use of the new repository, first, start an [SSH admin session](https://docs.senhasegura.io/v3-32/docs/administration-ssh-access) on your senhasegura server.

## Steps to Update

1. Download the file “aptfix”.  
    ```bash
    wget https://downloads.senhasegura.io/d/other/aptfix
    ```
2. Start an SSH [admin session](/v3-32/docs/administration-ssh-access)  
3. Transfer the file to the senhasegura server using SSH and administrator credentials.  
4. **Execute the script** with `sudo` in any directory, using the following command.  
    ```bash
    sudo chmod +x aptfix
    ```
    ```bash
    sudo ./aptfix
    ```
5. Wait for the script to complete.  
6. Once complete, **run** the commands:
    ```bash
    sudo apt update
    ```
    ```bash
    sudo apt install orbit-cli
    ```
:::(warning) (Attention)
If the repository setup needs to be updated, the platform will indicate what to do next.
:::

7. Once done, to update the senhasegura solution, follow our documentation that best suits your needs:

    - [Update senhasegura online](/v3-32/docs/installation-how-to-update-senhasegura-online).
    - [Update senhasegura offline](/v3-32/docs/installation-how-to-update-senhasegura-offline).
    - [How to update senhasegura in a cluster](/v3-32/docs/installation-how-to-update-cluster).
    - **If you’re using a version prior to 3.33**, please refer to the article [How to update versions prior to 3.33](/v3-32/docs/how-to-update-senhasegura-in-stages).

* * *

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
