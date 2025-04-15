# New Network Connector

This document provides information about the **New Network Connector** form screen, where you can add and configure connectors.

## **Path to access**

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Devices.**  
2. In the side menu, select **Settings \> Network Connector \> Connectors**   
3. On the report screen, click on the menu **Actions \> Add.**

:::(info) (**Info**)  
When editing an existing record, the **Update Network Connector** screen will be displayed. The content of this screen matches exactly what is described in this document.  
:::

### **General tab**

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Name\*** | Text field | Yes | Network Connector identification name. |
| **Enabled** | Option button | No | Registration activation status. The options are **Yes** and **No**. |

### **Authentication tab**

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **IP\*** | Text field | Yes | IP address for the connector server. |
| **Port\*** | Text field | Yes | Port for the connector server. |
| **Username\*** | Text field | Yes | Username for the connector server. |
| **Password\*** | Text field | Yes | Password for the connector server user. |

:::(info) (**Info**)  
Agent ports must be within the range 30000-30999.  
:::

### **Agents tab**

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Add/Remove selected** | Button | No | Adds a row to the table. |
| **Agents** | Table | No | List of added agents. Contains the *Name* field. |

**Review Tab**  
This section contains the information that was added in the previous steps, so that it can be analyzed and, if any changes are needed, be made before completing the registration. The information is grouped by each tab respectively.