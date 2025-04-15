# How to create a cluster

In this article, you’ll find instructions on how to create a cluster in Segura.


:::(error) (Important)
Before setting up a cluster, always make sure to [back up](/v4/docs/installation-backup-overview) and take a snapshot of the instance to ensure a recovery option in case of failure.
:::

:::(Warning) (Caution)
During the configuration, it’s possible that the Segura instance you are configuring may experience periods of unavailability.
:::

:::(Info) (Info)
Data replication with an external cluster is in an experimental phase. If you need to use this feature, contact our support team.
:::

## Requirements

To create a cluster, you must  meet the following requirements:

* Download the Segura application from the [PAM Solution Center](https://suporte.Segura.com.br/en/support/login) in the **Virtual Appliances** section.
* Change the default password of the application.
* Configure the [Hostname](/v4/docs/installation-how-to-set-up-the-network-and-change-the-hostname) of the application.
* Configure the [Network](/v4/docs/installation-how-to-set-up-the-network-and-change-the-hostname).
* Configure the [NTP Server](/v4/docs/orbit-cli-how-to-configure-ntp-servers).
* Configure the [DNS](/v4/docs/orbit-cli-how-to-configure-dns).


## How to create a cluster
To create a cluster, follow these steps: 
:::(Info) (Info)
By following these steps, you can create a new cluster or add members to an existing cluster.
:::

1.  Go to **Orbit Server Manager > Replication > Settings**.
2.  In the **Operation Mode**, select **Cluster**.
3.  Click the **Activate replication** button.
4. Activate the **File Synchronizers**.
5. Set the **Sync Timeout** in seconds. The default value for Sync Timeout is 15 seconds, but you can customize this interval as needed.
6. Add the **IPs of the cluster members**.
:::(Warning) (Caution)
  Make sure to add the IPs in the same order on all cluster members.
 :::
7. If the members are in different data centers, enable the **Members are in different data centers** option.
:::(Warning) (Caution)
For clusters with members in different data centers, it is recommended to use **high latency** between the members.
::: 
8. Define the **Network Segments** with a number between 1 and 9.
:::(Info) (Info)
Members from the same data center should be configured with the same segment. If a data center has only one member, you can leave the **Network Segments** field empty.
:::
 
9. Define a **Message to display on the recovery screen** in case of failure.
10. Click **Save**.
11. Click **Yes** to confirm that you want to change your database settings and restart the service.
12. If this is the primary instance, click **Assume as Primary**.
:::(Warning) (Caution)
Configure only one member as the primary. In case of failure, configure another member to assume the primary role.
:::

13. Verify if the status indicates that the system has already been restored and that the cluster member was created successfully.
:::(error) (Important)
Before starting the configuration of the next cluster members, wait for the restoration of the configured instance, as the application's database will be restarted and updated with the new settings. Access **Orbit Server Manager > Replication > Status** to verify if the cluster creation is completed. If yes, proceed to the next instance.
 :::

14. Repeat the process with the next cluster members.

After configuring the first member and the following ones, they will have their system restarted and the database updated, being added to the cluster with the same password as the primary member of the cluster.
:::(error) (Important)
All cluster members will share the database information from the primary member.
:::

For additional information about the cluster architecture, refer to the article on [Cluster Architecture](/v4/docs/installation-architecture-high-availability-and-disaster-recovery).

* * *
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target="_blank"}.