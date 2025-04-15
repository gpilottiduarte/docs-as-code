# Network Connector

This document provides information about the **Network Connector** report, which displays information about the network connector in Segura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Devices**.  
2. In the side menu, select **Settings \> Network Connector \> Connectors.**

Or:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select the option **System Parameters \>** **Network Connector**.

## Actions Menu

| Item | Type | Description |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the **New network connector** screen. |
| **Actions** | Dropdown menu | Displays the options for *Print Report, Export CSV, and Schedule Report.* |

## Search fields

:::(info) (Info)  
To view all search fields, click **More.**  
:::

| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the connector identification code. |
| **Name** | Text field | Filters by the user-defined name at the time of connector creation. |
| **IP** | Text field | Filters by device's IP address registered as connector. |
| **Port** | Text field | Filters by the connector port. |
| **Registration Date** | Date picker | Filters the registers by the period in which they were registered.  |
| **Last change** | Date picker | Filters the registers by the period in which they were changed. It will only show the connectors that have had some change in this time interval. |
| **Status** | Dropdown menu | Filters the registers by their activation state. The options are **Enabled** or **Disabled**. Clear the field to enable the **All** option. |

## Report fields

* **ID**  
* **Name**  
* **IP**  
* **Port**.  
* **Registration Date**  
* **Last change**  
* **Status**  
* **Actions**  
  * **Details**: directs to the **Connectors** screen, which displays the connector details.  
  * **Edit**: directs to the **Update Network Connector** screen.

:::(info) (Info)
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.
:::

## New Network Connector/Update Network Connector screen

### General tab

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Name** | Text field | Yes | **Network Connector** identifier name. |
| **Enabled** | Radio Button | Yes | Enables or disables the **Network Connector** status. |

### Authentication tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **IP** | Text field | Yes | **Network Connector Server** IP address. |
| **Port** | Text field | Yes |  **Network Connector Server** connection port. |
| **Username** | Text field | Yes | Username for authentication. |
| **Password** | Text field | Yes | Password for authentication. |

### Agents tab

| Item | Type | Description |
| :---- | :---- | :---- |
| **Add** | Button | Inserts a new, blank entry at the end of the listing. |
| **Name** | Text field | Name of the agent. |
| **Checkbox** | Checkbox | Selects all records displayed on the screen. |

## Connectors screen

| field | Type | Description |
| ----- | ----- | ----- |
| **Name** | Text field | **Network Connector** identifier name. |
| **Address** | Text field | **Network Connector** server IP address. |
| **Enabled** | Text field | Enables or disables the **Network Connector** status. |

### Agents

| Item | Type | Description |
| :---- | :---- | :---- |
| **Name** | Text field | **Name of the agent.** |
| **Port** | Text field | Port of the agent. |
| **Fingerprint** | Text field | Identifies digital for server health verification. It's presented as a series of asterisks for safety reasons.  |
