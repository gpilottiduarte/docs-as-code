# How to update Segura online

::: (error) (Important)
If you’re using a version prior to 3.33 and wish to update Segura to version 3.33 or later, please refer to the article [How to update versions prior to 3.33](/v4/docs/how-to-update-Segura-in-stages).
:::

::: (error) (Important)
If you use Zabbix, it will be necessary to reconfigure it after updating Segura to version 3.30 via Orbit Command Line Interface (CLI). For instructions on how to configure Zabbix via Orbit CLI, refer to the article [How to configure Zabbix via Orbit CLI](/v4/docs/orbit-cli-how-to-configure-zabbix-via-orbit-cli).
:::

In this article, you’ll find a guide on how to update Segura online. 

## Requirements

* **Firewall Rules:** Ensure your firewall settings allow communication with the Segura repositories. Detailed [firewall rules](/v4/docs/installation-firewall-rules) can be found in the documentation.
* **Server Time:** Verify that the server's time is correctly set.
* **(Situational) Arbitrator:** If your environment includes an Arbitrator, remove it from the cluster.
* **Snapshot:** Take a system snapshot before proceeding with the update.
* **Updating Sequentially:** For versions that are at least two releases old, update sequentially as instructed in this [article](/v4/docs/how-to-update-Segura-in-stages).
* **New Segura Repository**: Learn how to set up the [new Segura repository](/v4/docs/installation-how-to-change-Segura-to-use-the-new-repository).

:::(error) (Application unavailable during update)
When Segura initiates the update process, all features will be unavailable until all nodes in the cluster have been fully updated.
:::

:::(Warning) (Caution)
Before updating Segura, always run a snapshot on your hypervisor and [backup using the Orbit CLI](/v4/docs/orbit-cli-how-to-configure-backup).
:::

:::(Warning) (Caution)
If you use the Segura Arbitrator, remove it from the cluster before updating Segura. [Learn more in our documentation](/v4/docs/arbitrator-remove-arbitrator).
:::

* * *

## Take a snapshot

Snapshots should be taken only when Segura instances are offline. This ensures the ability to revert to a previous version if necessary.

1. You can shut down a Segura instance using the following command:
    ```bash
    sudo orbit shutdown
    ```
2. Once the instance is completely shut down, take a snapshot in the hypervisor. 
3. Reboot your Segura instance and update the application.

* * *

## How to update Segura online

:::(Info) (Download update packages for later installation)
As an option, you can download update packages to install at a later time. [Download update packages for later installation](/v4/docs/orbit-cli-how-to-update-the-platform#download-update-packages-to-install-later)
:::

1. In the Segura platform, go to **Settings > Execution processes**, and turn the following items **OFF**:

    * Expired password.
    * Expired operation cancellation. 
    * Operation executor.
    * Operation executor: Retry.

2. Take a snapshot. 
3. [Start an SSH session using Segura’s administrative user.](https://docs.Segura.io/v4/docs/en/administration-ssh-access) 

4. Run the following command:
    ```bash
    apt-get update
    ```
5. Run the following command:  
    ```bash
    apt-get install orbit-cli
    ```
6. Run the command below to update Segura to the newest version:
    ```bash
    orbit update
    ```
7. After the update, restart the system to ensure that all changes were correctly applied. Use the following command:
    ```bash
    orbit shutdown -r
    ```

* * *

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).

