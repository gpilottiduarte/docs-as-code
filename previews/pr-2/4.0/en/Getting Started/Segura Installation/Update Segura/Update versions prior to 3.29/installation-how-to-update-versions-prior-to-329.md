# How to update online versions prior to 3.29

Customers with versions prior to 3.29 of Segura who wish to update to version 3.29 or later must follow the instructions provided in this article.

## Requirements


* Your [firewall rules](/v4/docs/installation-firewall-rules) must allow communication with Segura repositories.
* Set the correct server time.
* The Arbitrator must be removed from the cluster (only for environments with an Arbitrator).
* Take a snapshot before the update.

:::(Warning) (Application unavailable during update)
When Segura initiates the update process, it will be unavailable until the activity is complete.
:::

* * *

## Take a snapshot

Snapshots should be taken only when Segura instances are offline. This ensures the ability to revert to a previous version if necessary.

1. You can shut down a Segura instance using the following command:
```Shell
sudo orbit shutdown
```
2. Once the instance is completely shut down, take a snapshot in the hypervisor. 
3. Reboot your Segura instance and update the application.

* * *

## How to update versions prior to 3.29


:::(Warning) (Caution)
Before updating Segura, always run a snapshot on your hypervisor and [backup using the Orbit CLI](/v4/docs/orbit-cli-how-to-configure-backup).
:::

:::(Warning) (Caution)
If you use the Segura Arbitrator, remove it from the cluster before updating Segura. [Learn more in our documentation](/v4/docs/arbitrator-remove-arbitrator).
:::

1. In the Segura platform, go to **Settings > Execution processes**, and turn the following items **OFF**:


* Expired password.
* Expired operation cancellation. 
* Operation executor.
* Operation executor: Retry.


2. Take a snapshot. 
3. [Start an SSH session using Segura’s administrative user.](https://docs.Segura.io/v4/docs/en/administration-ssh-access) 



4. Run the following commands to update the operating system to the latest Debian version:
```Shell
apt-get update
```
4.1. Enter the following code twice as shown below:
 
```Shell
apt-get install orbit-cli
apt-get install orbit-cli
```
5. To update the kernel, use the following command:
```Shell
orbit update
```
6. After the update, restart the system to load the new kernel version:
```Shell
orbit shutdown -r
```
7. Run the command below to update Segura to the newest version:
```Shell
orbit update
```
8. After the second update, restart the system one more time to ensure that all changes were correctly applied. Use the following command:
```Shell
orbit shutdown -r
```
9. Return to **Settings > Execution processes** and enable the following items that were turned off in step 1:

* Expired password.
* Expired operation cancellation.
* Operation executor.
* Operation executor: Retry.

* * *

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).
