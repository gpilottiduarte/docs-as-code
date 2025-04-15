# Servers

This document provides information about the **Servers** report screen that displays information about the LDAP/AD provisioning servers.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Provisioning \> Active directory \> Servers.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **New** | Button | Directs to the **LDAP server** window to register a new LDAP server in Segura. |
| **Actions** | Dropdown menu | Displays the options for *Print Report, Export CSV, and Schedule Report.* |

## Search fields
| Item | Type | Description |
| :---- | :---- | :---- |
| **Host** | Text field | Filters by the host address (can be IP address or hostname) in Segura. |
| **Enabled** | Dropdown menu | Filters the registers by their activation state. The options are **Yes** and **No**. Clear the field to enable the **All** option. |

## Report fields
* **ID**: displays the server's registration code within Segura.  
* **Host**: displays the address or name of the server host.  
* **Port**: displays the port where the LDAP/AD server is listening.  
* **Username**: displays the user's username for connection to the server.  
* **DN Base**: displays the server DN Base parameters.  
* **Account canonical form**: displays the values of the Account Form. The values will be as follows:  
  * 1 - DN.
  * 2 - Username.
  * 3 - Backslash.
  * 4 - Main.
* **Account filter format**: displays the filter expression used to specify search criteria for finding user accounts or other objects in the directory. For example: `(&(objectClass=user)(sAMAccountName=johndoe))`.  
* **Use SSL**: displays whether the server uses SSL. 
* **Bind requires DN**: displays whether the server requires DN for the Bind process.  
* **Account domain name**: displays the name of the domain in which the server is registered.  
* **Account domain name short**: also known as *NetBIOS Domain Name*, is the shortened version of the domain name in a network environment that uses directory services. This field displays the short name used to log in to the Windows network. For example: `Segura`.  
* **Order**: order of servers that will be used in authentication  
* **Enabled**: displays whether the server is active or not.  
*  **Actions**:  
  * **Edit**: opens the **Servers window** in edit mode.  
  * **Test authentication**: opens the **LDAP authentication test** window.
:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Servers screen
### Domain, device and credential section
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Domain** | Dropdown menu | Yes | Domain registered in Segura. |
| **Credential for authentication** | Dropdown menu | Yes | Credential that will be used for authentication on the LDAP server. |
| **Add** | Button | Not applicable | Opens the **Domain** modal for inserting the domain and short name. |

### LDAP section
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Host** | Text field | Yes | IP or Host of the LDAP server. |
| **Port** | Text field | Yes | Port where the LDAP server will listen. |
| **DN Base** | Text field | Yes | Server DN Base. |
| **Account form** | Dropdown menu | Yes | Account form. |
| **Order** | Picker | Yes |  |
| **Enabled** | Toggle button | Yes | Indicates the status of the server in Segura. It can be **Yes** or **No**. |
| **Member is DN?** | Toggle button | Yes | Indicates whether the member will be identified by the DN. |
| **Bind requires DN?** | Toggle button | Yes | Indicates whether the Bind process will require the use of the DN. |
| **Use SSL?** | Toggle button | Yes | Indicates the use of SSL. By default, it comes as No. |
| **Network Connector** | Dropdown menu | No | Indicates the connector that will be used with the LDAP/AD server. |
| **Account filter format** | Text field | No | Account filter format. |
| **Use credential domain?** | Toggle button | Yes | Indicates whether the server should use a domain credential. |
| **Username Attribute** | Text field | No | Indicates the unique username of the account |
| **DN Bind (leave blank to use DN Base)** | Text field | No | Indicates whether the DN will be used as a unique identifier. |
| **Group** | Text field | No | Group name |
| **Group DN** | Text field | No | Indicates the DN of the group in question. |
| **Group Attribute (GroupAttr)** | Text field | No | Indicates the attributes of this group in question. |
| **Group scope** | Text field | No | Indicates the scope of this group in question. |
| **Group filter** | Text field | No | Indicates a filter expression to be used in the group in question. |
| **Member attribute (MemberAttr)** | Text field | No | Indicates which member attributes are required for the group in question. |

### Synchronization groups section
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Synchronization groups** | Dropdown menu | No | Selects the user group that will be synchronized. |
| **New** | Button | No | Opens the LDAP/AD Group modal. |
| **Add** | Button | No | Adds the group to the list of synchronization groups. |
| **Search** | Search field | No | Search for an LDAP/AD user group within the list of synchronization groups. |
| **Checkbox** | Checkbox | No | Selects the records that are being displayed on the screen. |
| **Name** | Text field | No | Group name |
| **AD QUERY** | Text field | No |  |
| **USER GROUP** | Text field | No |  |
| **DOMUM SYNCHRONIZATION** | Text field | No |  |
| **ROLES** | Text field | No |  |

## LDAP/AD Group modal

### Settings section
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Name** | Text field | Yes | Group name. |
| **Server** | Dropdown menu | No | Choose the server where the search will be performed. |
| **User Group** | Dropdown menu | No | Choose the user group that the current group will belong to. **Note**: this field is responsible for defining the groups defined for the synchronized users. |
| **Enabled** | Toggle button | No | Choose the status of the group at the time of creation. |
| **Synchronization** | Toggle button | No | *Indicates* the possibility of the group having automatic synchronization. |
| **DN** | Text field | No | Fill in the **base DN**. |
| **AD username attribute** | Text field | No | Attributes associated with the username. |
| **AD name attribute** | Dropdown menu | No | Binding the user's real name to the user's field in Active Directory. |
| **Department** | Dropdown menu | No | Choose the user's department. |
| **AD query** | Text field | No | Fill in the group search parameters. |

### Roles section
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Add** | Button | No | Opens the **Roles** modal. |
| **ROLE** | Text field | No | Name of the chosen role. |
| **BUILT-IN** | Text field | No | Indicates whether the role is one of the defaults provided by the Segura or if it is a custom role, created by a user. |
| **DESCRIPTION** | Text field | No | Description of the chosen role. |

### Domum section
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Enable synchronization** | Toggle button | No | Choose whether to enable synchronization with Segura Domum. |
| **Type** | Radio button | No | Choose which type of Segura Domum user will be allowed in the group. |
| **Vendors/Internal Group** | Dropdown menu | No | Choosing the group in Segura Domum to which the LDAP/AD group will belong. |

### Review section
The review session allows you to check the new group's information before proceeding. To save, click **Save**.

## LDAP authentication test
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Server** | Label | Not applicable | Indicates the name and port of the LDAP server being tested for authentication. |
| **Base DN** | Text field | Yes | Base DN registered on the server. |
| **User** | Text field | Yes | Username that will be used in the authentication test. |
| **Password** | Text field | Yes | Password of the user that will be used in the authentication test. |

