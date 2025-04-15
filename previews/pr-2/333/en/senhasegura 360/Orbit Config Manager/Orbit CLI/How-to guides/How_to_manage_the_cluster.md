# How to manage the cluster

The entire process of configuring a cluster and checking its status can be performed using the `cluster` command. In addition to the process, we will use the `application` command to start instances and define a primary instance. 
```
mt4adm@vmdf-giskard:~$ sudo orbit cluster --help
Usage: orbit cluster <command>

High Availability and Disaster Recovery settings tools

Commands:
cluster config
cluster start
cluster stop
cluster restart
cluster status
cluster arbiter
cluster net-check
cluster nodename
cluster rotate-ssl

Flags:
-h, --help Show context-sensitive help.
``` 
## Create the cluster
:::(Info) (Info)
If there are doubts about enabling connections between the nodes, use the `orbit cluster net-check` command, adding the desired hosts for verification. Consult the documentation on the ports that need to be opened in the [Firewall Rules](/v3-33/docs/installation-firewall-rules) for more information.
:::

To create the cluster, at least two instances are required. For example, we will call the instances *A* and *B*. Follow the following order to set up the cluster.

:::(Info) (Info)
* Activate instance A for both activation license and application activation.
* Start the application on instance A with the `orbit application start` command.
:::


Before configuring the cluster, it is crucial to include the cluster members in the allow list of the firewall of each instance. For example, on instance A, it is necessary to add instance B to the allow list, and vice versa. For more details, For more details, access the [How to Manage the firewall with the Orbit CLI](/v3-33/docs/orbit-cli-how-to-manage-the-firewall)  document.

The following commands are for `sudo orbit cluster config`:

1. The `--ip` argument should be used with the IP of the instance the command is being executed on;
2. Configure the cluster on instance A by filling the `--ip` parameter with the IP of instance A and the `--nodes` parameter with the IPs of instances A and B respectively;

:::(Info) (Info)
Start the cluster on instance A with the 'orbit cluster start' command and wait at least 1 minute for normalization.
:::
:::(Warning) (Attention)
Having an arbitrator in a cluster is crucial for resolving disputes between nodes, ensuring system stability and integrity. It acts as a neutral third party in case of failure, avoiding inconsistencies and maintaining environment reliability. Learn more about the configuration and importance of the arbitrator at [Arbitrator](https://docs.senhasegura.io/v3-33/docs/arbitrator) documentation.
:::
3. Designate instance A as primary through the `orbit application primary` command.
:::(Info) (Info)
Activate instance B with the activation license and keep the application inactive.
:::

4. Configure the cluster on instance B by filling the `--ip` parameter with the IP of instance B and the `--nodes` parameter with the IPs of instances A and B respectively;

1. Start the cluster on instance B with the `orbit cluster start` command and wait at least 1 minute for normalization.

### Instance A
``` 
mt4adm@vmdf-giskard:~$ sudo orbit application master
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y

Application: Active
Replication: Inactive
Instance: Primary
``` 
:::(Warning) (Caution)
For clusters with members in different data centers, it is recommended to use **high latency** between the members.
:::
:::(Info) (Info)
Members from the same data center should be configured with the same segment. If a data center has only one member, you can leave the **Network Segments** field empty.
:::
```
mt4adm@vmdf-giskard:~$ sudo orbit cluster config
--ip=172.18.77.184
--nodes=172.18.77.184,172.18.77.186
--segment=0
--latency="low"

Are you sure you want to proceed: y
Done!
No errors reported
``` 
```
mt4adm@vmdf-giskard:~$ sudo orbit cluster start
Are you sure you want to proceed: y
Done!
No errors reported
``` 
### Instance B
``` 
mt4adm@vmdf-giskard:~$ sudo orbit cluster config
    --ip=172.18.77.186
    --nodes=172.18.77.184,172.18.77.186
    --segment=1
    --latency="low"

Are you sure you want to proceed: y
Done!
No errors reported
```
```
mt4adm@vmdf-giskard:~$ sudo orbit cluster start
Are you sure you want to proceed: y
Done!
No errors reported
``` 
:::(Warning) (Caution)
To ensure proper cluster operation, it is essential to maintain network latency between nodes below 30ms. Additionally, specific recovery settings are required to facilitate recovery in case of failure. You can find details on these settings at the [recovery documentation ](/v3-33/docs/installation-data-replication-how-to-enable-recovery).
:::

## Cluster Status
Through the `orbit cluster status` command, you can observe various properties of the cluster. Since there is a lot of information, we will not list all the details in the manual. But we will present the essential information to understand if the cluster is active and without problems.

Pay attention to the final block of the status, called `Cluster nodes`. In this block, you will see who the cluster members are and the synchronization timestamp between them. There is also the status of the current instance which should be marked as *synced*.
``` 
mt4adm@vmdf-giskard:~$ sudo orbit cluster status

...

============================================================

Cluster nodes

Cluster member: ID [0] - UUID [64661644-b0df-11ea-80b2-8ee23c1303c0] -
    Hostname [vmdf-giskard-3232290344] - Timestamp [1592428528]
Cluster member: ID [1] - UUID [9dff00d8-b0df-11ea-86c4-83725d654e03] -
    Hostname [vmdf-giskard-3232290348] - Timestamp [1592428528]

Cluster UUID: 64679b9f-b0df-11ea-a6e5-67ba900fecc0

vmdf-giskard details: status=synced
vmdf-giskard is primary node ?: 1

============================================================"
``` 
