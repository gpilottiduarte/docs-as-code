# How to update a cluster

::: (error) (Important)
If you’re using a version prior to 3.33 and wish to update Segura to version 3.33 or later, please refer to the article [How to update versions prior to 3.33](/v4/docs/how-to-update-Segura-in-stages).
:::
::: (error) (Important)
If you use Zabbix, it will be necessary to reconfigure it after updating Segura to version 3.30 via Orbit Command Line Interface (CLI). For instructions on how to configure Zabbix via Orbit CLI, refer to the article [How to configure Zabbix via Orbit CLI](/v4/docs/orbit-cli-how-to-configure-zabbix-via-orbit-cli).
:::

In this article, you’ll learn how to update a Segura in a clustered environment. 


## Requirements

* **Firewall Rules:** Ensure your firewall settings allow communication with the Segura repositories. Detailed [firewall rules](/v4/docs/installation-firewall-rules) can be found in the documentation.
* **Cluster Synchronization:** All cluster members must be synchronized.
* **Server Time:** Verify that the server's time is correctly set.
* **(Situational) Arbitrator:** If your environment includes an Arbitrator, remove it from the cluster.
* **Snapshot:** Take a system snapshot before proceeding with the update.
* **Updating Sequentially:** For versions that are at least two releases old, update sequentially as instructed in this [article](/v4/docs/how-to-update-Segura-in-stages).
* **New Segura Repository**: Learn how to set up the [new Segura repository](/v4/docs/installation-how-to-change-Segura-to-use-the-new-repository).

:::(error) (Application unavailable during update)
When Segura initiates the update process, all features will be unavailable until all nodes in the cluster have been fully updated.
:::

:::(Warning) (Caution)
Before updating Segura, always take a snapshot in your hypervisor and [backup using the Orbit CLI](/v4/docs/orbit-cli-how-to-configure-backup).
:::

:::(Warning) (Caution)
If you use the Segura Arbitrator, remove it from the cluster before updating Segura. [Learn more in our documentation](/v4/docs/arbitrator-remove-arbitrator).
:::

* * *

## Take a snapshot

:::(Error) (Important)
* In clustered environments, always take snapshots in reverse order, starting from the last member towards the primary member.
* Always take snapshots of all Segura instances separately.
* Turn off one instance at a time, take the snapshot, turn it back on, and validate that it has resynchronized before proceeding to the next instance.
:::

Snapshots should be taken only when Segura instances are offline. This ensures the ability to revert to a previous version if necessary.

1. To shut down a Segura instance, use the following command:
    ```bash
    sudo orbit shutdown
    ```
2.Once the instance is completely shut down, take a snapshot in the hypervisor.   
3. Then, start the Segura instance and update the application after taking snapshots of all instances in the cluster.

* * *

## How to update a cluster

:::(Info) (Download update packages for later installation)
As an option, you can download update packages to install at a later time. [Download update packages for later installation](/v4/docs/orbit-cli-how-to-update-the-platform#download-update-packages-to-install-later)
:::

1. In the Segura platform, go to **Orbit Server Manager > Replication > Status** and check the status of each member. All members must be **ON** and synchronized.

2. In the Segura platform, go to **Settings > Execution processes**, and turn the following items **OFF**:
    * Expired password.
    * Expired operation cancellation. 
    * Operation executor.
    * Operation executor: Retry.
3. Take snapshots of each cluster member. 
    :::(Error) (Important)
    Remember to take snapshots in reverse order, from the last member to the first.
    :::
4. [Start an SSH session as an administrator user of Segura.](/v4/docs/administration-ssh-access)
5. Run the following command:
    ```bash
    apt-get update
    ```
6. Run the following command:
    ```bash
    apt-get install orbit-cli
    ```
7. Run the following command to update Segura to the latest version:
    ```bash
    orbit update
    ```
8. After updating Segura, restart the system to ensure all changes have been applied correctly:
    ```bash
    orbit shutdown -r
    ```
    :::(Error) (Important)
    When updating Segura in a clustered environment, do not update the members as standalone entities. Be sure to update each cluster member individually, starting with the primary member and proceeding sequentially to the other members. For example, update the Primary Member, then update Member 2, and finally, update Member 3. 

    **Not following these steps during the update can harm the cluster.**

    :::

9. Apply steps **5 to 8 to all the other cluster members**.
10. Return to **Orbit Server Manager > Replication > Status**, and check the status of each member to confirm that they are **ON** and synchronized.


* * *

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).
