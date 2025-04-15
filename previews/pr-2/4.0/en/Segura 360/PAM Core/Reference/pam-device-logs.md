# Logs

This document provides information about the **Logs** report screen, where you can view the logs related to the Network Connector.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Devices.**  
2. In the side menu, select **Settings > Network Connector > Logs.**

---
## Actions menu

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV* and *Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filter by your identification code within Segura. |
| **Event** | Text field | Filters by type event. The options are: *Creation*, *List* and *Deletion*. |
| **Connector IP** | Text field | Filters by the IP address of the device registered as a Connector. |
| **Connector port** | Text field | Filters by the port that the IP is offering to the Connector service. |
| **Message** | Text field | Filters by log return message. |
| **Code** | Text field | Filters by the error code that occurred during execution. If no error occurs, the field will be blank. |
| **Date/Time** | Date picker | Filters by the selected period. |

## Report fields

* **ID**.  
* **Type**.  
* **Connector IP.**  
* **Connector Port.**  
* **Message.**  
* **Code.**  
* **Date/Time.**  
* **Actions**:  
  * **Details**: opens the **Network connector log** screen.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
### Network connector log screen

| **Item** | **Description** |
| :---- | :---- |
| **ID** | Identification code within Segura. |
| **Type** | Type of connector execution. |
| **Date/Time** | Date and time of the connector execution. |
| **Connector address** | IP address of the device registered as Connector. |
| **Connector port** | Port number that the IP is offering to the Connector service. |
| **Message** | Return message from the log. |
| **Details** | Details of the return message from the log. |