The credentials managed through senhasegura are of extreme importance for a company. Many of them are for a specific set of departments, and other departments cannot be aware of the existence of such credentials.

The ***Multi\-Tenant*** local senhasegura function simplifies the segregation of credential access, allowing one instance of the software to be used by several "clients" sharing the same physical and logical structure.

In other words, data from an internal customer is not visible to others, as exemplified by the figure:

  
![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28347%29.png)  


This way, we can say that the I.T. department credentials administrator has no access to the Development department credentials. It ensures that information is accessible only to users who need it.

To set up a multi\-tenant environment, follow the instructions:

CautionBy acquiring this function of senhasegura, some screens will be segregated by tenant:

* Creating users
* Creation of credential
* Creating access groups
	+ PAM Core
	+ Certificate Manager
	+ Task Manager
	+ Personal Vault
	+ A2A


---

## Creating a tenant

Before creating a tenant, set up the environments you want to segment. After that, follow the instructions:

1. Go to the menu: **Settings ➔ System Parameters ➔ Segmentation ➔ Tenants.**
2. In the action button of the report, click on the **New** option.  
InfoIn this same report, you can also change an already created tenant. Click on the action button to ***Change record***.![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1668088990689.png)
3. Insert your tenant's ***name.***
4. Type the ***URL*** of this tenant in the field ***URL access.***
5. You can insert a ***Description*** of the scope of this tenant if necessary.
6. In the checkbox ***Type,*** select whether the tenant will be accessed **locally** or **remotely**.
7. Finally, click on ***Save.***



---

## Associating a user with a tenant

With your created tenant, you can associate a senhasegura user with it. To do this, follow the instructions:

1. Go to the menu: **Settings ➔ System users ➔ Users.**
2. Create a new user via the report action button and the **New** option, or change an existing one.
3. In the form, in the section ***Tenant*** select the tenant you want to associate this user with it.  
CautionIf the user is not associated with any tenant, the system will associate them with the ***default***, so it can only add them to the access groups of the default tenant.
4. Click ***Save.***



---

## Associating an access group with a tenant

After associating a user, it is also essential to associate a group of access to the tenant.

Access groups usually have different settings between them.

It is crucial that these groups are associated with the tenants to which they belong and that users can access them. For example:


> *A **Financial** tenant user should not be a member of **Marketing** tennant's access group since they are part of different departments that should not be aware of each other's information.*

It is, therefore, essential to have access groups for their respective tenants, so follow the instructions:

1. Go to the menu: **PAM Core ➔ Settings ➔ Access ➔ Access groups.**
2. Create a new group using the report action button and the **New Group** option, or edit an existing one.
3. In the form, select the tenant that the access group should be associated.
4. Go to the **Users** tab and select the users you previously associated with the same tenant from this group.  
CautionRemember that the user must be associated with the *same* tenant of the access group. That could be done in his registration or later, by editing. Otherwise, they will not be available among the users' options to become a group member.
5. Click ***Save.***



---

## Associating a credential with a tenant

Once users and access groups are associated with the tenant, you must also associate credentials.

The associated credential will be visible only to users associated with the same tenant. This way, we reach the module objective:  restrict access to information to those who need it. To do so, follow the instructions:

1. Go to the menu: **PAM Core ➔ Credentials ➔ All**
2. Create a new credential through the report action button and the option New credential, or change an existing one.
3. In the form, select in the field ***Tenant*** the tenant to which this credential will be associated.

Now the credential can only be accessed or your password viewed by users and members of access groups associated with the same tenant.

InfoA user with the multitenant operator role has permission to edit credentials as long as they are associated with the same tenant.

---

## Security

The multi\-tenant function will assist in segregating user access by separating information by location, department, or another type of tenant you wish to create.

CautionAdministrators should pay attention to the following points:

* ***Backup:*** The segregation by the tenant does not cover the backup, which means that the administrator who holds the master key will know all the information in each tenant registered in the vault.
* ***Dashboards:*** Users can see all information on these screens regardless of which tenant is associated with permission to view the dashboards.
