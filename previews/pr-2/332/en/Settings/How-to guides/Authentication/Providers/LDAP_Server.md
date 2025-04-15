# LDAP Server

This article provides detailed information about the fields present when creating a new **LDAP server** form, located through **Settings > Authentication > Active Directory > Servers**.

|Item|Description|
|-|-|
|**Host**|The address of the LDAP server you want to connect to. [We recommend using the IP address](/v3-32/docs/user-management-active-directory-authentication-tips#query-dns-for-ldap-address). E.g., 192.168.20.20|
|**Port**|It identifies the communication channel through which the LDAP server will receive requests. E.g., 389 - default port for non-secure LDAP connections.|
|**Enabled**|It specifies whether the server is enabled for use or not.|
|**Credential for authentication**|The credential responsible for authentication queries. It displays a dropdown menu with the credentials registered in the PAM Core module.|
|**Network connector**|It allows senhasegura to connect to an isolated network LDAP server for centralized authentication and user management. It overrides the general network connector configuration set in Devices. E.g., 192.168.0.2 - IP address of the Network Connector server.|
|**DN Base**|The starting point for performing searches in the LDAP directory. E.g., dc=senhasegura,dc=com|
|**Account form**|The format to be followed when entering information about the user's account on the LDAP server. It displays a dropdown menu with the options: DN, Username, Backslash, or Principal.|
|**Account filter format**|**Username:** username=maryflinn **Backslash:** domain and username separated by a backslash. E.g., domain\user **Principal:** domain and username separated by an at symbol. E.g., user@domain.net **DN:** dn=cn=maryflinn|
|**Username attribute**|Uniquely identifies a user in the LDAP directory. E.g., uid|
|**Account domain**|The primary domain to which the user's account belongs. E.g., senhasegura.com|
|**Account domain (Short name)**|The short or abbreviated version of the primary domain. E.g., senhasegura|
|**Use Credential Domain?**|Determines whether the domain to be used will be the authentication credential or the Account Domain field. This function is for synchronizing users who are part of an Active Directory (AD) group.|
|**Group**|A set of related users who share similar permissions and privileges. E.g., managers| 
|**Group DN**|The unique identifier of the group in the LDAP directory. E.g., cn=managers,ou=groups,dc=senhasegura,dc=com|
|**Group attribute (GroupAttr)**|The field that uniquely identifies a group in the LDAP directory. E.g., cn|
|**Group scope**|It determines the scope of members affected by a particular group. E.g., commonusers| 
|**Group filter**|An expression that defines criteria for filtering specific groups in the LDAP directory. E.g., objectClass=group|
|**Member attribute (MemberAttr)**|It relates a user to a group in the LDAP directory. E.g., member.|
|**Order**|The lower the number, the higher the priority. When one server fails, the second one in order is used.|
|**Use SSL?**|It specifies whether authentication uses an SSL connection. By default, with SSL, the port used is 636.|
|**Member is DN?**|It specifies whether the object or entity is part of the DN.|
|**Bind requires DN?**|It specifies whether authentication needs to provide a binding DN (Bind-DN) to authenticate the connection to the LDAP server.|
|**DN Bind (leave blank to use DN Base)**|SIf the Bind requires DN option is enabled, it must be filled in to authenticate the connection. E.g., cn=managers,dc=senhasegura,dc=com|
***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).