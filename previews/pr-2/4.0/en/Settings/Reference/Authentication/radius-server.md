# RADIUS servers

This document provides information about the **Servers** report screen that displays information about the Radius servers registered in Segura.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Authentication \> Radius \> Servers.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **New** | Button | Directs to the **Servers** window. |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the server's identification code in Segura. |
| **Hostname** | Text field | Filters by the server hostname. |
| **Port** | Text field | Filters by the server listening port. |
| **Status** | Dropdown menu | Filters the registers by their activation state. The options are **Enabled** and **Disabled.** Clear the field to enable the **All** option. |

## Report fields
* **ID**  
* **Hostname.**  
* **Port**  
* **Timeout:** system timeout time, in seconds.  
* **Max Attempts:** maximum number of attempts to log in to the **RADIUS** server.  
* **Actions**  
  * **Edit:** opens the **Servers** window in edit mode.  
  * **Test authentication:** opens the **RADIUS authentication test** window.

## Servers
In this section, you'll find all the information about the **Servers.**
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Hostname** | Text field | Yes | Server IP address. |
| **Port** | Text field | No | Port where the server listens. |
| **Enabled** | Radio button | No | Server status. It can be **Yes** or **No**. |
| **Secret key** | Text field | No | Server secret key. **Note**: if the *secret key* is not changed, the current value of the field will be maintained. |
| **Timeout (s)** | Text field | Yes | Server *timeout* time. |
| **Max Attempts** | Text field | Yes | Maximum number of login attempts. |

## Radius authentication test
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Server** | Label | No | Indicates the IP address or hostname of the server next to the port. |
| **Username** | Text field | Yes | Username for the authentication test. |
| **Password** | Text field | Yes | Password of the user for the authentication test. |

