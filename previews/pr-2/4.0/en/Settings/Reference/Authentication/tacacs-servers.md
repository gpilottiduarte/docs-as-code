# TACACS servers

This document provides information about the **Servers** report screen, which displays information about the Tacacs servers.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Authentication \> Tacacs \> Server.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **New** | Button | Directs to the **Servers** screen to register a new Tacacs server**.** |
| **Actions** | Dropdown menu | Displays the options for *Print Report, Export CSV, and Schedule Report.* |

## Search fields
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text Field | Filters by the server's identification code in Segura. |
| **Hostname** | Text Field | Filters by the server hostname. |
| **Port** | Text Field | Filters by the server listening port. |
| **Status** | Dropdown menu | Filters the registers by their activation state. The options are **Enabled** and **Disabled**. Clear the field to enable the **All** option. |

## Report fields
* **ID**  
* **Hostname.**  
* **Port**  
* **Timeout:** system timeout time. Shown in seconds.  
* **Max Attempts:** maximum number of attempts to log in to the Tacacs **server.**  
* **Actions**  
  * **Edit:** opens the **Servers** window in edit mode.  
  * **Test authentication:** opens the **Tacacs authentication test window**.
:::(info) (Info)
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.
:::

## Servers
In this section, you'll find all the information about the **Servers.**
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Hostname** | Text Field | Yes | Server IP address. |
| **Port** | Text Field | No | Port where the server listens. |
| **Enabled** | Radio button | No | Server status. It can be **Yes** or **No**. |
| **Secret key** | Text Field | No | Server secret key. **Note**: if the *secret key* is not changed, the current value of the field will be maintained. |
| **Timeout (s)** | Text Field | Yes | Server *timeout* time. |
| **Max Attempts** | Text Field | Yes | Maximum number of login attempts. |

## TACACS authentication test
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Server** | Label | Not applicable | Indicates the IP address or hostname of the server next to the port. |
| **Username** | Text Field | Yes | Username for the authentication test. |
| **Password** | Text Field | Yes | Password of the user for  the authentication test. |

