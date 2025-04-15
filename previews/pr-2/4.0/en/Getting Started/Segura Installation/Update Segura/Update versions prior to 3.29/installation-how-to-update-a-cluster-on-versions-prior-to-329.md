# How to update a cluster on versions prior to 3.29


Customers who have a cluster environment with versions prior to 3.29 of Segura and wish to update to version 3.29 or later must follow the instructions provided in this article.

## Requirements

* All cluster members must be synchronized.
* [Firewall rules](/v4/docs/installation-firewall-rules) must allow communication through port 443 to establish a connection with the Segura repository (only for online updates). 
* The server time for each cluster member must be correctly set.
* The Arbitrator must be removed from the cluster (only for environments with an Arbitrator).
* Take snapshots of each cluster member before the update.


:::(Warning) (Application unavailability during update)
When Segura initiates the update process, it will be unavailable until the activity is complete.
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

```Shell
sudo orbit shutdown
```
2.Once the instance is completely shut down, take a snapshot in the hypervisor.   
3. Then, start the Segura instance and update the application after taking snapshots of all instances in the cluster.



* * *

## How to update a cluster on versions prior to 3.29

:::(Warning) (Caution)
Before updating Segura, always take a snapshot in your hypervisor and [backup using the Orbit CLI](/v4/docs/orbit-cli-how-to-configure-backup).

:::
:::(Warning) (Caution)
If you use the Segura Arbitrator, remove it from the cluster before updating Segura. [Learn more in our documentation](/v4/docs/arbitrator-remove-arbitrator).

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




5. Execute the following command to update the operating system to the latest Debian version:


```Shell
apt-get update
```
5.1.  The following command should be entered twice, as shown:


 
```Shell
apt-get install orbit-cli
apt-get install orbit-cli
```
6. To update the kernel, use the following command:
```Shell
orbit update
```
7. After the update, restart the system to load the new kernel version:
```Shell
orbit shutdown -r
```
8. Execute the following command to update Segura to the latest version:
```Shell
orbit update
```
9. After updating Segura, restart the system once again to ensure all changes have been applied correctly:


```Shell
orbit shutdown -r
```
:::(Error) (Important)
When updating Segura in a clustered environment, do not update the members as standalone entities. Be sure to update each cluster member individually, starting with the primary member and proceeding sequentially to the other members. For example, update the Primary Member, then update Member 2, and finally, update Member 3. 

**Not following these steps during the update can harm the cluster.**

:::

10. Apply steps **5 to 9 to all the other cluster members**.
11. Go back to **Settings > Execution processes** and re-enable the items:



* Expired password.
* Expired operation cancellation.
* Operation executor.
* Operation executor: Retry.

12. Return to **Orbit Server Manager > Replication > Status**, and check the status of each member to confirm that they are **ON** and synchronized.



* * *

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).