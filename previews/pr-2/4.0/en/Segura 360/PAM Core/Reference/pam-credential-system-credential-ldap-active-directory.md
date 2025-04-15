# System parameters - LDAP/Active directory

This document provides information about the **System parameters** screen, from the **LDAP / Active Directory** tab, which refers to the parameters for LDAP/Active Directory servers in Segura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **System Parameters > Global > LDAP / Active Directory**.

or

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Management > Credentials > Domain**.

:::(warning) (**Attention**)  
All fields are filled with a default value, recommended for the Segura. However, you can make modifications as needed.  
::: 

---
## LDAP / Active Directory tab

#### LDAP service settings section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Disable users with no group when synchronizing?*** | Radio button | Yes | Option so that all users without a group are inactivated in LDAP/AD synchronization. Default option: **Yes**. |
| **Use a vault credential on authentication?*** | Radio button | Yes | If you choose the option Yes, the server field will use a credential in the vault. If you choose the option No, the screen will display a username field and a password field. Default option: **Yes**. |

#### Login options section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Update username when logging in?*** | Radio button | Yes | Option so that the user name is updated after login. Default option: **Yes**. |
| **Update contact e-mail when logging in?*** | Radio button | Yes | Option so that the user's email address is updated after login. Default option: **Yes**. |
| **Update local password when logging in?*** | Radio button | Yes | Option so that the user's local password is updated after login. Default option: **Yes**. |
| **Enable local user when logging in?*** | Radio button | Yes | Option for the local user to be activated after logon. Default option: **Yes**. |
| **Block login when user is disabled?*** | Radio button | Yes | Option so that users who are inactive in the system have their login blocked in Segura. Default option: **Yes**. |

#### Mobile app section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Search** | Text field | No | Search for domains added to the list. |
| **Add** | Button | No | Adds a line for a new domain to be added. |
| **Domain’s list** | Text field | No | List with added domains, containing the *Domain* and *Domain (short name)* fields. |

:::(info) (**Info**)  
Domains associated with devices and credentials won’t be deleted.  
:::