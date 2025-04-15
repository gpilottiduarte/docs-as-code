# Connectors

This document provides information about the **Network Connector** report screen, where you can add and configure network connectors.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Devices.**  
2. In the side menu, select **Settings > Network Connector > Connectors.**

---
## Actions menu

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the [New Network Connector](/v4/docs/new-network-connector) screen. |
| **Actions** | Dropdown menu | Displays the options, *Print report, Export CSV* and *Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filters the connectors by their identification code within Segura. |
| **Name** | Text field | Filters by network connector name. |
| **IP** | Text field | Filters by the IP address of the network connector. |
| **Brings** | Text field | Filter by the number port of the network connector. |
| **Registration date** | Date picker | Filters by the network connector registration date. |
| **Last change** | Date picker | Filters by the date of the last change. |
| **Status** | Dropdown menu | Filters connectors by their activation state. The options are **Enabled** and **Disabled**. Clear the field to enable the option **All**. |

## Report fields

* **ID**.  
* **Name**.  
* **IP.**  
* **Port.**  
* **Registration date.**  
* **Last change.**  
* **Status**.  
* **Actions**:  
  * **Details**: open the **Connectors Details** screen.  
  * **Edit**: opens the [Update Network connector](/v4/docs/new-network-connector) screen.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
### Connectors Details  
This screen displays detailed information about the selected network connector.

#### General Section

| **Item** | **Description** |
| :---- | :---- |
| **Name** | Displays the registered name for the connector. |
| **Address** | Displays the registered IP address for the connector. |
| **Enabled** | Displays whether the connector is active. The options are **Yes** and **No**. |

#### Agents Section

| **Item** | **Description** |
| :---- | :---- |
| **Name** | Displays the registered name of the agent. |
| **Port** | Displays the registered port number for the agent. |
| **Fingerprint** | Displays the registered fingerprint for the agent. |