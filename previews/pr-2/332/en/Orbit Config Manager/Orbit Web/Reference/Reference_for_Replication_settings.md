# Reference for Replication settings

# Replication Settings

In this document, you will find all the information about the **Replication Settings** menu of the **Orbit Web** interface.

## Access Path

1. In senhasegura, at the top left corner, click on the **Grid Menu**, represented by the nine squares, and select **Orbit Config Manager**.

1. In the side menu, select **Replication > Settings**.

### Replication Settings

| **Item**                   | **Description**                                                                                                 |
|----------------------------|---------------------------------------------------------------------------------------------------------------|
| **Operation Mode**         | Must be chosen between **Standalone**, **Cluster**, **External Cluster**, and **Enable Replication**.         |
| **Synchronizers**          | Enable or disable the option to synchronize files.                                                             |
| **Sync Timeout (seconds)** | Specify in seconds the maximum number of seconds to retry an update on the synchronization table.             |

### Cluster Members

| **Item**                    | **Description**                                                                                               |
|-----------------------------|-------------------------------------------------------------------------------------------------------------|
| **Primary Member**          | Field to add the primary member of the cluster.                                                              |
| **Additional Member 1**     | Field to add additional member 1 of the cluster.                                                             |
| **Additional Member 2**     | Field to add additional member 2 of the cluster.                                                             |
| **Additional Member 3**     | Field to add additional member 3 of the cluster.                                                             |
| **Additional Member 4**     | Field to add additional member 4 of the cluster.                                                             |
| **Additional Member 5**     | Field to add additional member 5 of the cluster.                                                             |
| **Arbitration Member**      | Field to add the arbitration member of the cluster.                                                          |
| **Members in Different Datacenters** | Enable this field if the cluster members are in different datacenters.                                 |
| **Latency between Members** | Choose between **Low**, **Medium**, and **High**, being Low: 0-10ms, Medium: 10-30ms, and High: > 30ms.     |
| **Network Segment**         | This field must be filled with a number between **1** and **9**. Nodes from the same datacenter must be configured with the same segment. Leave blank if there is only one node in each datacenter. |
| **Recovery Screen Display Message** | Customizable message for display on the recovery screen.                                           |
| **Save**                    | Button to save the changes.                                                                                   |
