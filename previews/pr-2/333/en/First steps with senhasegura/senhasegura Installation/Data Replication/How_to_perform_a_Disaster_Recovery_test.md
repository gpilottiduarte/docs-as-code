# How to perform a Disaster Recovery test

In this article, you’ll find a step-by-step guide on how to conduct a Disaster Recovery (DR) test by executing a manual failover.

::: (error) (Important)
To successfully conduct this test, the **Primary** member must be abruptly shut down.

:::

## Requirements

* Two senhasegura instances must be available.
* Instances must be in the same cluster and operating correctly. For more information on cluster settings, refer to the article [How to create a cluster](/v3-33/docs/installation-data-replication-how-to-create-a-cluster).
* Take a snapshot of the instances.

This test is intended for two instances as cluster members. Before starting, check the following tags at the bottom of each member:

#### Member A (Primary)

* **Application**: Production and Enabled.

* **Replication**: Primary.

#### Member B (Secondary - contingency)

* **Application**: Contingency and Disabled.

* **Replication**: Non-primary.

## Step 1: Take snapshots

Before conducting the test, it’s crucial to take a snapshot of the instances as a precaution since abrupt shutdowns can cause damage.

::: (error) (Important)
Always take snapshots in reverse order of the cluster. In this case, first take a snapshot of **Member B** and then of **Member A**.
:::

To take a snapshot, follow these steps:

1. Access the instance.
2. Run the following command to shut it down:
```Shell
sudo orbit shutdown

```
3. When the instance is completely shut down, take the snapshot in the hypervisor.
4. Then, restart the instance and verify if the operation has been restored.

## Step 2: Validate the cluster

1. Access **Orbit Config Manager > Replication > Elasticsearch**.
2. In the **Data search cluster** and the **Cluster members** tables, check if the cluster size corresponds to **2**.

## Step 3: Configure the Recovery

1. On **Member B**, access **Orbit Config Manager > Settings > Recovery**.
2. Enter the **allowed origin IPs to perform system recovery**. 

:::(warning) (Caution)
Make sure not to use *Wildcards* (*).

:::
::: (info) (Info)
This list will make the **Assume as Primary** button visible to users.
:::

:::(warning) (Caution)
When using subnet masks, adopt the CIDR notation, for example, `192.168.1.0/24`.
:::

## Step 4: Execute the Disaster Recovery Test

1. Force an abrupt shutdown on **Member A**.
::: (warning) (Caution)
Ensure it’s an abrupt shutdown; otherwise, the cluster will detect the deactivation, and **Member B** will not display the **Recovery** page.
:::
2. Once **Member A** is inactive due to unexpected behavior, **Member B** will enter a *split brain*, blocking any database changes until manual instructions. 
3. Then, the **Recovery** page will be displayed on the web application.
4. Click **Assume as Primary**.
5. Confirm by clicking **Yes**. This will set **Member B** as the new **Primary** member. This process may take a few minutes.
::: (info) (Info)
Ensure the button appears; otherwise, refer to [How to enable Recovery](/v3-33/docs/installation-data-replication-how-to-enable-recovery) to ensure IPs are configured correctly.
:::
6. Once the Orbit Web interface is available on **Member B**, check if the tag indicates that this instance is now the **Primary** member.
7. To access other senhasegura modules, you need to enable the application. Go to **Orbit > Settings > Application**, and toggle the **Enable application** button to the active position.
8. Click **Save**. 
:::(info)(Info)
If the green color is displayed, then the application is activated.
:::
9.  Log out and log in again to access other modules.

After these steps, all senhasegura functionalities will be available and operational on the DR **Member B**.

## Step 5: Recover the Primary Member

1. Activate **Member A** and wait for synchronization with the other cluster database. This may take a few minutes.

::: (info) (Info)
**Member A** will identify the issue, and **Member B**, currently **Primary**, will automatically synchronize new information between members.
:::
2. After synchronization, the login page will be displayed on the main web application interface.
3. Log in to **Member A's** web application and click **Assume as Primary** to restore it as the **Primary** member.
4. On **Member B**, go to **Orbit Config Manager > Settings > Application**, and toggle the **Enable application** button to the inactive position.
5. Click **Save**. 
:::(info) (Info)
Make sure the green color is not displayed.
:::

## Step 5.1 (alternative): Recover the Primary Member via SSH

1. Initiate an SSH session on **Member A** using port **59022** with the user `mt4adm`. 
2. Run the command `sudo orbit application status` to check the following information:
```Shell
 sudo orbit application status

Application: Active
Replication: Active
Instance:    Cluster
Primary:     memberB
Main:        No

```
3. Then, execute the command `sudo orbit application primary` to set **Member A** as **Primary**:
```Shell
sudo orbit application primary

Application: Active
Replication: Active
Instance:    Cluster
Primary:     memberA
Main:        Yes

```
