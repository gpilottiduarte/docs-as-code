With senhasegura, you can integrate with Identity Now using [SCIM](https://www.simplecloud.info/), being possible to synchronize users and use Identity Now as an authentication provider.

The senhasegura SCIM connector is a module compliant with the SCIM (System for Cross\-domain Identity Management) 2\.0 standard that allows Identity Management applications, such as Sailpoint, to query and modify Privileged Data (such as Users, Access Groups, and Permissions) through REST APIs.

## Configuring an Identity Now provider

1. Access the IdentityNow portal
2. Access the **Admin** menu

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28196%29.png)

    3\. Register a new Source by clicking **Connections ➞ Sources ➞ \+ New**

     4\. Select the Source type **“SCIM 2\.0”** and fill in the basic information

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28197%29.png)

   5\. Select the Virtual Appliance Cluster responsible for communication.

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28198%29.png)

6\. Inside senhasegura, access the menu **Settings ➞ Authentication ➞ Identity Management (IGA) ➞ Providers**.

7\. Click on the action menu on the option **New provider** which will open a new window called Register Identity Management Provider.

8\. Fill in the Settings tab:

* **Name**: provider identification
* **Activated Yes/No**: Whether the provider will be activated Yes/No
* **Protocol**: Which communication protocol will be used in the integration, in this case, SCIM
* **Description**: Describe information that you think is relevant about the provider
* **Tags**: For provider segmentation and organization

9\. Fill in the Authentication tab:

* **Authentication method**: The available method is OAUTH2\.0
* **Validity Date/Time**: How long will the provider last
* **Allowed IPs (Place \* to allow any IP)**: which IPs are allowed by the provider
* **Allowed Referers (Empty list for any source)**: referral and permissions.

10\. Click **Save** to view authentication credentials

11\. Inside Identity Now, select the Source that was created above, go to **Admin ➞ Sources ➞ senhasegura Source ➞ Edit configuration ➞ Connection Settings**.

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28199%29.png)

\- Select the type “OAuth 2\.0”.  
\- Grant Type “Client Credentials”  
\- Fill in the *Host URL* and **OAuth 2\.0 Token URL** fields with the information obtained in *Provider details*, inside senhasegura **Settings ➞ Authentication ➞ Identity Management (IGA) ➞ Providers**

### Connection test

Inside the **Identity Now** application menus, access the **Admin ➞ Sources ➞ senhasegura Source ➞ Edit configuration ➞ Review and Test** menu and click on the **Test connection** button.



---

## Configuring a Group synchronization

1. Go to **Settings ➞ Authentication ➞ Identity Management (IGA) ➞ Group Synchronization**.
2. Click on the Actions menu, and by selecting the option "New sync group", a new window will open named Sync group record

On the Settings tab, fill in the following fields:

1. Give a name to the sync group
2. Select whether it will be Enabled "Yes" or "No"
3. Select the Provider registered in the previous step
4. Insert in the field Attribute username, which value should be considered the name. By default, it will be "username", and the Name attribute by default will be named as "Given Name"
5. Fill in the SCIM filters field with the filters that this group must respect.


```
Example: User.roles eq “Administrator”. 

```
See more information in the section [SCIM filtering](/v3-32/docs/user-management-integration-identity-now).
6. In the field **Department** define in which department these users should be added.
7. Select the Roles tab, and define which user roles will be when adding the Code and Name fields.
8. Select on the Access Group tab, which access groups the users will be part of when adding the Code and Name fields.
9. Click on Save after filling in the information.



---

## SCIM filtering

O conector SCIM do senhasegura permite a criação de diversas combinações de filtros para atender todos os cenários desejados.  
Para permitir o uso de um filtro combinando diversos tipos de recursos, é possível usar o nome do recurso no prefixo do filtro e desta forma combinar diversos filtros em diversos recursos. Por exemplo:


```
User.userName sw "Ad" and Group.displayName eq "Administrator"

```
Abaixo segue a lista de operadores:

* eq: Equal
* sw: Starts With



| SCIM Filter | Description |
| --- | --- |
| eq | Equal |
| ne | Not Equal |
| co | Contains |
| sw | Starts With |
| ew | Ends With |
| pr | Present (has to value) |
| gt | Greater Than |
| ge | Greater Than or Equal To |
| lt | Less Than |
| le | Less Than or Equal To |
| and | And |
| or | Or |
| not | Not |
| () | Precedence Grouping |

