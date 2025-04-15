# LDAP/AD servers

In this document you'll find a reference guide for the LDAP/AD servers on senhasegura.

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu,** represented by the nine squares, and select **Settings.**  
2. On the side menu, select **Authentication \> Active Directory \> Servers.**

## Top bar

| Item  | Description |
| :---- | :---- |
| **Show filters** | Represented by the magnifying glass icon. Displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon. Refreshes the page. |
| **View actions** | Represented by the three vertical dots icon. Displays the possible actions for the page. |
| **New** | Open the **LDAP Server** window. |
| **Print report** | Represented by the printer icon. It opens a new page for printing the report. |
| **Export CSV** | Represented by the sheet of paper icon, downloads the report. |
| **Schedule report** | Represented by the clock icon. It opens the window for scheduling the report. |

## Search fields

When you click on **Show filters**, a series of fields are displayed. These are used to refine your search results. They are:

| Item | Description |
| :---- | :---- |
| **Host** | Filters by the host of the LDAP/AD server. |
| **Enabled** | Filters by LDAP/AD server status. Can be or. |

In addition to these options, you have two buttons: **Filter**, which applies the parameters passed into the fields, and **Clear**, which clears all the parameters.

## Report fields

In the server list, you have the following fields:

* **ID:** displays the server's registration code within senhasegura.  
* **Host:** displays the server's address or hostname.  
* **Port:** displays the port on which the LDAP/AD server listens**.**  
* **Username:** displays the user name for connecting to the server.  
* **Base DN:** displays the server's Base DN parameters.  
* **Account canonical form:** displays a specific representation of a user account's username or path in the directory. For example, `senhasegura.com/Users/John Doe`.  
* **Account filter format:** displays the filter expression used to specify search criteria for locating user accounts or other objects in the directory. For example: `(&(objectClass=user)(sAMAccountName=johndoe))`.  
* **Use SSL:** displays whether the server uses SSL.  
* **Bind requires DN:** displays whether the server requires DN for the bind process.  
* **Account domain name:** displays the domain name in which the server is registered.  
* **Short account domain name:** also known as NetBIOS Domain Name, is the shortened version of the domain name in a network environment that uses directory services. This field displays the short name used to log into the Windows network. For example: `SENHASEGURA\johndoe.`  
* **Ordem:**  
* **Enabled:** displays whether the server is active or not.  
* In the **Action** column, you have two options:  
  * **Change:** opens the LDAP Server window in edit mode.  
  * **Test authentication:** opens the LDAP connection test window.

## LDAP server window

When you click on **New** or **Edit**, the **LDAP Server** window will open. This window contains the following fields:

| Item | Description |
| :---- | :---- |
| **Host** | LDAP server host. |
| **Port** | Port where the LDAP server will listen. |
| **Enabled** | Radio button to indicate the status of the server in senhasegura. It can be **Yes** or **No**. |
| **Credential for authentication** | Drop-down menu for choosing the credential that will be used to authenticate to the LDAP/AD server. |
| **Network connector** | Drop-down menu for choosing the connector used with the LDAP/AD server. |
| **DN Base** | Server DN base. |
| **Account form** | Account form. |
| **Account filter format** | Account filter format. |
| **Account domain** | Name of the domain to which the account belongs. |
| **Account domain (Short name)** | Short name for the domain to which the account belongs. |
| **Use credential domain?** | Radio button to indicate whether the server should use a domain credential. |
| **Username attribute** | Indicates the account's unique username |
| **DN bind (leave blank to use DN Base)** | Indicates whether the DN will be used as a unique identifier. |
| **Member is DN?** | Radio button to indicate whether the member will be identified by DN. |
| **Bind requires DN?** | Radio button to indicate whether the Bind process will require DN. |
| **Group** | Indicates the name of the group to which the server belongs. |
| **Group DN** | Indicates the DN of the group in question. |
| **Group attribute (GroupAttr)** | Indicates the attributes of the group in question. |
| **Group scope** | Indicates the scope of the group in question. |
| **Group filter** | Indicates a filter expression to be used in the group in question. |
| **Member attribute (MemberAttr)** | Indicates which member attributes are required for the group in question. |
| **Order** |  |
| **Use SSL?** | Radio button to indicate the use of SSL. By default, it is set to No. |

## Authentication test window

By clicking on the three vertical dots in the **Action** column and selecting the **Test authentication** option, the **LDAP authentication test** window will open with the following fields:

| Item | Description |
| :---- | :---- |
| **Server** `example.com:8080` | Label indicating the name and port of the LDAP server being tested for authentication. |
| **Base DN** | Base DN parameters do connect to the server in question. |
| **User** | Field for entering the user’s username used in the authentication test. |
| **Password** | Field for entering the user's password that will be used in the authentication test. |

