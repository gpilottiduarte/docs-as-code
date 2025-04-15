# Tuning System

This document provides information about the **Server configuration tuning** report, which presents details regarding server certificates.

## Path to Access

1. On Segura, in the navigation bar, hover over the **Product Menu** and select **Orbit Server Manager**.  
2. In the side menu, select **Server \> Tuning System**.

## Server configuration tuning

This form allows the adjustment of critical server performance settings, including connection limits and resource usage for the database, web server, and clusters.

### General Configuration

| Item | Type | Description |
| ----- | ----- | ----- |
| **System use profile** | Dropdown menu | Selects the default usage profile to adjust settings according to the scenario. The options are: *Normal*, *High*, or *Very High*. |

### Database

| Item | Type | Description |
| ----- | ----- | ----- |
| **Current** | Text field | The current limit of simultaneous connections is allowed in the database. |
| **Conexões (max\_connections)** | Text field | Maximum limit of simultaneous connections allowed in the database. |
| **Current** | \* | The current value of the InnoDB buffer size for performance optimization. |
| **InnoDB buffer** | Text field | Size of the InnoDB storage engine buffer for performance optimization. |

### Web server

| Item | Type | Description |
| ----- | ----- | ----- |
| **Current** | Text field | Current value for the number of processes configured for the web server. |
| **Processes** | Text field | Number of processes configured for the web server. |
| **Current** | Text field | Current value for the limit of child processes used to manage simultaneous connections on the web server. |
| **Child processes** | Text field | Limit of child processes used to manage simultaneous connections on the web server. |

### Database cluster

| Item | Type | Description |
| ----- | ----- | ----- |
| **Current** | Text field | Current value for the number of threads configured to optimize performance in database clusters. |
| **Threads** | Text field | Number of threads configured to optimize performance in database clusters. |

