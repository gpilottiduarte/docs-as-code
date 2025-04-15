# Replication settings

This document provides information about the **Replication Settings** form.

## **Path to Access**

1. On Segura, in the navigation bar, hover over the **Product Menu** and select **Orbit Server Manager**.  
2. In the side menu, select **Settings \> Replication \> Settings**.

## **Replication Settings**

:::(Info) (Info)
If replication is not enabled, please enable it to proceed.  
:::

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Operation mode** | Toggle button | Yes | Defines the replication operation mode. |
| **Enable replication** | Toggle button | No | Defines whether replication will be enabled. |
| **Synchronizers** | Toggle button | No | Defines whether synchronizers are enabled. |
| **Sync Timeout (seconds)** | Quantity input | Yes | Maximum time in seconds for member synchronization. |

### **Cluster members**

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Primary member** | Text field | Yes | Defines the primary member of the cluster. |
|  **Additional members** | Text field | No | List of additional members in the cluster. |
| **Arbiter member** | Text field | No | Defines the arbiter member responsible for tie-breaking. |

### **Advanced Replication Settings**

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Members are in different datacenters** | Toggle button | No | Indicates whether the cluster members are distributed across different datacenters. |
| **Latency between nodes** | Dropdown menu | Yes | Select the latency between members. The options are *Low (0-10ms)*, *Medium (10-30ms),* or *High (\>30ms)*. |
| **Network segment** | Text field | No | Defines the network segment for nodes in the same datacenters. |
| **Recovery screen display message** | Text field | No | Custom message displayed on the recovery screen. |

:::(info) (Info)  
After configuring replication, it will be necessary to restart the database service on your Segura instance.  
:::