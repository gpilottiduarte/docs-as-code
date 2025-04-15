# IMAP/POP3 settings

This document provides information about the **IMAP configuration/POP3** report, which presents the IMAP/POP3 account settings within Segura.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Email \> IMAP Configuration / POP3**.

## Actions Menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **New** | Button | Directs to the **IMAP Configuration / POP3** window for a new IMAP/POP3 account to be registered. |
| **Actions** | Dropdown menu | Displays the options for *Print Report, Export CSV, and Schedule Report.* |

## Search Fields
:::(info) (Info)  
To view all search fields, click **More.**  
:::
| Item | Type | Description |
| :---- | :---- | :---- |
| **Name** | Text Field | Filters by the identification name of the IMAP/POP3 account. |
| **Secure connection** | Dropdown menu | Filters by the status of the secure connection of the IMAP/POP3 account. The options are **Yes** or **No**. |
| **Automatic check** | Dropdown menu | Filters according to the status of the automatic verification of the IMAP/POP3 account. The options are **Yes** or **No**. |
| **Keep copy** | Dropdown menu | Filters by the copy configuration on the IMAP/POP3 account server. The options are **Yes** or **No**. |
| **Status** | Dropdown menu | Filters by the IMAP/POP3 account status in Segura. The options are **Enabled** or **Disabled**. |

## Report Fields
* **ID:** account code in Segura.  
* **Name.**  
* **Secure connection.**  
* **Connection type:** type of connection (**SSL** or **TLS**).  
* **Protocol:** account authentication protocol (**IMAP** or **POP3**).  
* **Port:** port where the account connects to receive messages.  
* **Automatic check.**  
* **Keep a copy on the server.**  
* **Actions:**  
  * **Edit account:** opens the **IMAP Configuration / POP3** window in edit mode.  
  * **View inbox**: directs to the account inbox.
:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## IMAP Configuration / POP3
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Account Name** | Text Field | Yes | IMAP/POP3 Account Name |
| **Keep a copy on the server.** | Radio button | No | Select whether to keep a copy of the messages on the server. The options are **Yes** or **No**. |
| **Automatic check** | Radio button | No | Select whether to perform automatic verification of new messages. The options are **Yes** or **No**. |
| **Enabled** | Radio button | No | Indicates the IMAP/POP3 account status in Segura. The options are **Yes** or **No**. |
| **Address** | Text Field | Yes | IMAP/POP3 account host address |
| **Port** | Text Field | No | Port number where the IMAP/POP3 account connects to the mail server. |
| **Protocol** | Dropdown menu | Yes | Message receipt protocol. The options are **IMAP** or **POP3**. |
| **Use Network Connector** | Radio button | No | Indicates whether to use the Network Connector to connect the IMAP/POP3 account. The options are **Yes** or **No**. |
| **Network Connector** | Dropdown menu | No | Select the Network Connector that will be used to connect to the mail server. **Note**: The dropdown menu will only be enabled if you select **Yes** in the **Use Network Connector** option. |
| **Credential for authentication** | Dropdown menu | Yes | Indicate the credential that will be used for authentication on the mail server. **Note**: The credential must be previously registered in Segura. |
| **Skip certificate** | Radio button | No | Indicate whether to ignore the authentication certificate. The options are **Yes** or **No**. |
| **Use safe connection** | Radio button | No | Indicate whether to use a secure connection to the mail server. The options are **Yes** or **No**. |
| **Secure connection type** | Radio button | No | Indicate the secure connection protocol to the server. The options are **TLS** or **SSL**. |


