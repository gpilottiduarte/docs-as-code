# High Availability and Disaster Recovery

The architecture of senhasegura is designed to ensure effective High Availability (HA) and Disaster Recovery (DR) in case of failures.


:::(info) (Info)
There are three different deployment options:

* [PAM Crypto Appliances](/v3-32/docs/crypto-appliance-overview) in on-premises data centers. 
* [PAM Virtual Appliances](/v3-32/docs/installation-virtual-appliances) in on-premises data centers. 
* [PAM Virtual Appliances](/v3-32/docs/installation-virtual-appliances) on a Cloud Service Provider(CSP).
:::

## Principles of High Availability

* **Elimination of Single Points of Failure (SPOF)**: redundancies are incorporated to maintain continuous operation even in the event of a component failure.
* **Reliable switchover**: redundant systems should be able to switch between components without data loss or performance impact.
* **Real-time failure detection**: if the above two principles are observed, any failures will probably go unnoticed by users. However, maintenance teams must still be able to detect failures as soon as they occur.

## Replication technologies
The architecture employs various layers of replication to ensure data accessibility across instances:

| Layer                        | Description                                                                                                  |
|------------------------------|--------------------------------------------------------------------------------------------------------------|
| **Native database replication** | The [MariaDB Galera Cluster](https://mariadb.com/kb/en/what-is-mariadb-galera-cluster/){target=`_blank`} is used for replicating databases, providing support for high-latency networks (up to 30ms latency). |
| **File system replication using Rsync** | All senhasegura instances synchronize their files with other cluster members.                        |
| **Kernel layer replication***    | The PAM Crypto Appliance deployment model includes a Distributed Replicated Block Device (DRBD) for kernel layer replication.    |

*Only available for PAM Crypto Appliances

## Architectures

There are four scenarios for the Disaster Recovery architecture. You can have two Virtual Appliances, two PAM Crypto Appliances (with DRBD), a hybrid system, or an on-premise system. You can find more information about these scenarios in the table below.

| Scenario           | Description                                                                                                         
|-----|---|
| **Two PAM Virtual Appliances**      |  Failover is executed manually, with automatic synchronous replication.        In case of failure, the backup environment provides read-only access until the failover is complete.             |
| **Two PAM Crypto Appliances (Using DRBD)**        | Devices connect via a **crossover cable directly connected between a crypto appliance without any network devices intermediating the connection** and use a heartbeat connection to detect failures. When necessary, the standby device takes over the primary function automatically within up to 120 seconds. If the PAM Crypto Appliance was shut down due to a temporary failure, it will restore the primary device function. However, if the problem was caused by faulty hardware, you will have to manually reassign the primary device.                  |
|**Hybrid: combined PAM Crypto Appliance and Virtual Appliance** | Failover is executed manually, with automatic synchronous replication.  In case of failure, the backup environment will provide read-only access to the data until the user or Load Balancer completes the failover. |
| **Combined on-premise and cloud instances**        | Failover is executed manually, with automatic synchronous replication.  In case of failure, the backup environment provides read-only access until the failover is complete.      |

{{snippet.Important Requirement cluster}}

## Scenarios

::: (info) (Info)
In the scenario descriptions, each member represents an instance in senhasegura.
:::

### Two members without an arbitrator
| Scenario                 | Type        | Application status        | Failover     | Automatic resync   |
|--------------------------|-------------|----------------------------|--------------|---------------------|
| **1**                        | Member 2 Fails. | Available (Member 1).    | Automatic.    | Available .         |
| **2**                        | Member 1 Fails. | Available (Member 2).    | Manual.       | Available.          |
| **3**                        | Connection Failure (between sites). | Available (Member 1). | Automatic. | Available. |
| **4**                        | Members 1 and 2 Fail.| Not available.      | Not available. | Not available.   |

#### Examples

**Scenario 1 - Member 2 fails**

* **Application status**: the application continues to run on the first member.
* **Failover**: automatic.
* **Unavailable members recovery**: automatically performed when the instance is rebooted or regains connectivity.

**Scenario 2 - Member 1 fails**

* **Application status**: the application continues to run on the second member.
* **Failover**: manual.
* **Unavailable members recovery**: automatically performed when the instance is rebooted or regains connectivity.

**Scenario 3 - Connection failure between sites**

* **Application status**: the application continues to run on the first member.
* **Failover**: automatic
* **Unavailable members recovery**: automatically performed when the instance is rebooted or regains connectivity.


**Scenario 4 - Members 1 and 2 fail**

* **Application status**: application is unavailable.
* **Failover**: not available.
* **Member failure recovery**: contact senhasegura's support team to restore the members.
* If all members fail simultaneously, use the master key and credential backup procedure.

### Two members with an arbitrator

| Scenario                 | Type                           | Application status                                   | Failover     | Automatic resync   |
|--------------------------|--------------------------------|-------------------------------------------------------|--------------|---------------------|
| **1**                        | Member 2 fails.                 | Available (Member 1).                                 | Automatic.    | Available.          |
| **2**                        | Member 1 fails.                 | Available (Member 2).                                 | Automatic.    | Available.          |
| **3**                        | Connection failure between sites with members. | Available on the member with connectivity to the arbitrator. | Automatic. | Available. |
| **4**                        | Members 1 and 2 fail.           | Not available.                                        | Not available. | Not available.   |
| **5**                        | Arbitrator fails.               | Available on both members.                            | Automatic.    | Available.          |
| **6** | Arbitrator and any other member fails. | Available on the functional member. | Manual. | Available on the functional member.

#### Examples

**Scenario 1 - Member 2 fails**

* **Application status**: the application continues to run on the first member.
* **Failover**: automatic
* **Member failure recovery**: automatically performed when the instance is rebooted or regains connectivity.


**Scenario 2 - Member 1 fails**

* **Application status**: the application continues to run on the second member.
* **Failover**: automatic.
* **Member failure recovery**: automatically performed when the instance is rebooted or regains connectivity.


**Scenario 3 - Connection failure between sites with members**

* **Application status**: the application continues to run on the member that is connected to  the arbitrator. 
* **Failover**: automatic
* **Member failure recovery**: automatically performed when the instance is rebooted or regains connectivity.

**Scenario 4 - Members 1 and 2 fail**

* **Application status**: the application is unavailable.
* **Failover**: not available
* **Member failure recovery**: contact senhasegura's support team to restore the members. 
* If all members fail simultaneously, use the master key and credential backup procedure.

 **Scenario 5 - Arbitrator fails**
* **Application status**: the application is available on both members.
* **Failover**: automatic
* **Member failure recovery**: automatically performed when the instance is rebooted or regains connectivity.

**Scenario 6 - Arbitrator and any other member fails**

* **Application status**: available on the functional member.
* **Failover**: manual.
* **Member Failure Recovery**: automatically performed when the instance is rebooted or regains connectivity.


### Three Members

| Scenario | Type                              | Application status                             | Failover                              | Automatic resync   |
|----------|-----------------------------------|--------------------------------------------------|---------------------------------------|---------------------|
| **1**        | Member 2 fails.                    | Available (Members 1 and 3).                    | Automatic                             | Available.          |
| **2**        | Member 1 fails.                    | Available (Members 2 and 3).                    | Automatic.                             | Available.          |
| **3**        | Member 3 fails.                    | Available (Members 1 and 2).                    | Automatic.                             | Available.          |
| **4**        | Connection failure with one member. | Available (All the other members).               | Automatic.                             | Available.          |
| **5**        | Connection failure between all members. | Available (Member 1.                         | Manual                                | Not available.      |
| **6**        | All Members fail.                   | Not available.                                   | Not available.                         | Not available.      |

#### Examples
**Scenario 1 - Member 2 fails**

* **Application status**: the application continues to run on members 1 and 3.
* **Failover**: automatic
* **Member failure recovery**: automatically performed when the instance is rebooted or regains connectivity.

 **Scenario 2 - Member 1 fails**
* **Application status**: the application continues to run on members 2 and 3
* **Failover**: automatic
* **Member failure recovery**: automatically performed when the instance is rebooted or regains connectivity.


**Scenario 3 - Member 3 fails**

* **Application status**: the application continues to run on members 1 and 2.
* **Failover**: automatic.
* **Member failure recovery**: automatically performed when the instance is rebooted or regains connectivity.

**Scenario 4 - Connection failure with one member**

* **Application status**: the application continues to run on the members still connected to the cluster.
* **Failover**: automatic.
* **Member failure recovery**: automatically performed when the instance is rebooted or regains connectivity.

**Scenario 5 - Connection failure between all members**

* **Application status**: the application continues to run on the first member.
* **Failover**: manual.
* **Member failure recovery**: automatically performed when the instance is rebooted or regains connectivity.

**Scenario 6 - All members fail**

* **Application status**: the application becomes unavailable.
* **Failover**: not available. 
* **Member failure recovery**: contact senhasegura's support team to restore the members. 
* If all members fail simultaneously, use the master key and credential backup procedure.

* * *

## Disaster recovery 
Disaster Recovery (DR) is a structured set of policies and procedures designed to recover data or restore the senhasegura infrastructure in situations involving natural or logical disasters. DR provides clients with the capability to reconfigure senhasegura resources, utilizing an alternative environment when the recovery of the primary environment becomes impractical.

Data integrity during DR is directly impacted by the quality and speed of the connection, as well as the amount of data present in the cluster. If any of these variables fail to meet specific requirements, it can result in data loss, deactivation of the production environment, and activation of the DR environment.




::: (error) (Important)
Manual intervention is required in case of hardware-related failures to restart and recover the system.
:::

## Hot-Spare Resources
senhasegura instances come equipped with hot-spare resources for maintaining high availability, including continuous monitoring and administrative URLs for supervising the operational status of each instance.

The use of these hot-spare features allows an automatic capability to switch between instances, ensuring that, in case of failure, workloads are efficiently redirected to operational instances

## Internal Load Balancer
When implementing senhasegura, you have the flexibility to choose between using a proprietary load-balancer software or integrating senhasegura's native load balancer into your clustered environment.
