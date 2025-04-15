# How to update a cluster

::: (error) (Important)
If you’re using a version prior to 3.29 and wish to update senhasegura to version 3.29 or later, refer to the article [How to update a cluster on versions prior to 3.29](/v3-32/docs/installation-how-to-update-a-cluster-on-versions-prior-to-329).
:::
::: (error) (Important)
If you use Zabbix, it will be necessary to reconfigure it after updating senhasegura to version 3.30 via Orbit Command Line Interface (CLI). For instructions on how to configure Zabbix via Orbit CLI, refer to the article [How to configure Zabbix via Orbit CLI](/v3-32/docs/orbit-cli-how-to-configure-zabbix-via-orbit-cli).
:::

In this article, you’ll learn how to update a senhasegura in a clustered environment. 


## Requirements

* All cluster members must be synchronized.
* [Firewall rules](/v3-32/docs/installation-firewall-requirements) must allow communication through port 443 to establish a connection with the senhasegura repository (only for online updates). 
* The server time for each cluster member must be correctly set.
* The Arbitrator must be removed from the cluster (only for environments with an Arbitrator).
* Take snapshots of each cluster member before the update.


:::(Warning) (Application unavailability during update)
When senhasegura initiates the update process, it will be unavailable until the activity is complete.
:::

* * *

## Take a snapshot

:::(Error) (Important)

* In clustered environments, always take snapshots in reverse order, starting from the last member towards the primary member.
* Always take snapshots of all senhasegura instances separately.
* Turn off one instance at a time, take the snapshot, turn it back on, and validate that it has resynchronized before proceeding to the next instance.


:::

Snapshots should be taken only when senhasegura instances are offline. This ensures the ability to revert to a previous version if necessary.



1. To shut down a senhasegura instance, use the following command:

```Shell
sudo orbit shutdown
```
2.Once the instance is completely shut down, take a snapshot in the hypervisor.   
3. Then, start the senhasegura instance and update the application after taking snapshots of all instances in the cluster.



* * *

## How to update a cluster

:::(Warning) (Caution)
Before updating senhasegura, always take a snapshot in your hypervisor and [backup using the Orbit CLI](/v3-32/docs/orbit-cli-set-up-backup-schedule).

:::
:::(Warning) (Caution)
If you use the senhasegura Arbitrator, remove it from the cluster before updating senhasegura. [Learn more in our documentation](/v3-32/docs/arbitrator-remove-arbitrator).

:::

1.In the senhasegura platform, go to **Orbit Config Manager > Replication > Status** and check the status of each member. All members must be **ON** and synchronized.


2. In the senhasegura platform, go to **Settings > Execution processes**, and turn the following items **OFF**:



* Expired password.
* Expired operation cancellation. 
* Operation executor.
* Operation executor: Retry.


3. Take snapshots of each cluster member. 

:::(Error) (Important)
Remember to take snapshots in reverse order, from the last member to the first.
:::
4. [Start an SSH session as an administrator user of senhasegura.](/v3-32/docs/administration-ssh-access)




5. Run the following command:


```Shell
apt-get update
```
6. Run the following command:


 
```Shell
apt-get install orbit-cli
```

7. Run the following command to update senhasegura to the latest version:
```Shell
orbit update
```
8. After updating senhasegura, restart the system to ensure all changes have been applied correctly:


```Shell
orbit shutdown -r
```
:::(Error) (Important)
When updating Senhasegura in a clustered environment, do not update the members as standalone entities. Be sure to update each cluster member individually, starting with the primary member and proceeding sequentially to the other members. For example, update the Primary Member, then update Member 2, and finally, update Member 3. 

**Not following these steps during the update can harm the cluster.**

:::

9. Apply steps **5 to 8 to all the other cluster members**.
10. Go back to **Settings > Execution processes** and re-enable the items:



* Expired password.
* Expired operation cancellation.
* Operation executor.
* Operation executor: Retry.

11. Return to **Orbit Config Manager > Replication > Status**, and check the status of each member to confirm that they are **ON** and synchronized.



* * *

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
