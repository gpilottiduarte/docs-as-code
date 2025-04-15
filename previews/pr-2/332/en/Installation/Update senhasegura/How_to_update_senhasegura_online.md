# How to update senhasegura online

::: (error) (Important)
If you’re using a version prior to 3.29 and wish to update senhasegura to version 3.29 or later, please refer to the article [How to update versions prior to 3.29].
:::

::: (error) (Important)
If you use Zabbix, it will be necessary to reconfigure it after updating senhasegura to version 3.30 via Orbit Command Line Interface (CLI). For instructions on how to configure Zabbix via Orbit CLI, refer to the article [How to configure Zabbix via Orbit CLI](/v3-32/docs/orbit-cli-how-to-configure-zabbix-via-orbit-cli).
:::

In this article, you’ll find a guide on how to update senhasegura online. 

## Requirements

* **Firewall Rules:** Ensure that your firewall rules permit communication with the senhasegura repositories. You can find detailed information in the documentation [firewall rules](/v3-32/docs/installation-firewall-requirements).
* **Server Time**: Make sure the server time is correctly set.
* **(Situational) Arbitrator**: If your environment includes an Arbitrator, remove it from the cluster.
* **Snapshot**: Take a snapshot of your system before proceeding with the update.

:::(Warning) (Application unavailable during update)
When senhasegura initiates the update process, it will be unavailable until the activity is complete.
:::

* * *

## Take a snapshot

Snapshots should be taken only when senhasegura instances are offline. This ensures the ability to revert to a previous version if necessary.

1. You can shut down a senhasegura instance using the following command:
```Shell
sudo orbit shutdown
```
2. Once the instance is completely shut down, take a snapshot in the hypervisor. 
3. Reboot your senhasegura instance and update the application.

* * *

## How to update senhasegura online

:::(Warning) (Caution)
Before updating senhasegura, always run a snapshot on your hypervisor and [backup using the Orbit CLI](/v3-32/docs/orbit-cli-set-up-backup-schedule).
:::

:::(Warning) (Caution)
If you use the senhasegura Arbitrator, remove it from the cluster before updating senhasegura. [Learn more in our documentation](/v3-32/docs/arbitrator-remove-arbitrator).
:::

1. In the senhasegura platform, go to **Settings > Execution processes**, and turn the following items **OFF**:


* Expired password.
* Expired operation cancellation. 
* Operation executor.
* Operation executor: Retry.


2. Take a snapshot. 
3. [Start an SSH session using senhasegura’s administrative user.](https://docs.senhasegura.io/v3-32/docs/en/administration-ssh-access) 



4. Run the following command:
```Shell
apt-get update
```
5. Run the following command:  
 
```Shell
apt-get install orbit-cli
```

6. Run the command below to update senhasegura to the newest version:
```Shell
orbit update
```
7. After the update, restart the system to ensure that all changes were correctly applied. Use the following command:
```Shell
orbit shutdown -r
```
8. Return to **Settings > Execution processes** and enable the following items that were turned off in step 1:

* Expired password.
* Expired operation cancellation.
* Operation executor.
* Operation executor: Retry.


* * *

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).

