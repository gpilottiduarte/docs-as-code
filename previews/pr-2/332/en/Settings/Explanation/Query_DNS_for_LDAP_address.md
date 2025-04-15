This article describes some specific scenarios that can occur, along with explanations of how senhasegura behaves in these cases.

## Query DNS for LDAP address

When configuring senhasegura to query DNS and obtain the balanced LDAP address, users may encounter difficulties logging in if the DNS server becomes unavailable. In some cases, an LDAP cluster member might become inaccessible for queries, and the load balancer might not have detected this outage yet. As a result, intermittent authentication attempts for the user can occur.

To avoid this situation, it's recommended to minimize dependencies on DNS and the load balancer by directly registering all LDAP members with their respective IP addresses in senhasegura. This way, senhasegura will take responsibility for managing the query sequence, and if a member fails to respond, senhasegura will automatically move on to the next available server.

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28185%29.png)Operation diagram of the senhasegura platform in a DNS query scenario 



---

## Offline connection between senhasegura and the provider

When configuring senhasegura for an offline connection with the authentication provider, it's advisable to enable local authentication for trusted users. The administrator can perform this procedure on a per\-user basis. Prior to proceeding, it's crucial to verify the server order to ensure that the specific configuration does not impact the operation of other applications.

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28186%29.png)Operation diagram of the senhasegura platform in a local authentication scenario 



---

## Integrate Azure SSO authentication and user provisioning via on\-premises AD

When configuring senhasegura to integrate Azure SSO authentication and user provisioning through an on\-premises AD connected to Azure there may be a need for local login. In such cases, it's recommended to perform local login using AD authentication instead of relying solely on Azure SSO login. To ensure the correct configuration, it's important to pay attention to two specific fields in the LDAP Server form after selecting the desired provider:



| **Account form** | Select the **Main** option to search the user in LDAP and validate authentication, ignoring other fields. |
| --- | --- |
| **Account filter format** | LDAP query used to query objects, validate their existence and later authenticate users.If left blank, there are two possible default queries:* **(\&(objectClass\=user)(sAMAccountName\=%s))** if the 'Bind requires DN?' parameter is disabled. * **(\&(objectClass\=posixAccount)(uid\=%s))** if the 'Bind requires DN?' parameter is enabled.  The %s variable will be replaced by the username entered during the authentication or authentication test. The username is handled to not support special characters. |



---

 Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).

