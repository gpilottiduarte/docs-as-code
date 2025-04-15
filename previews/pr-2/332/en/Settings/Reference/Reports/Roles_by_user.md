Privileges granted in excess or not revoked at the right time make malicious action easy. Privileged users need access to privileged accounts to perform daily routines for performing maintenance on systems, updating, and troubleshooting problems. However, these users may also misuse privileges to gain unauthorized access to information and cause damage.

Reports show the privileges granted to authorized users are crucial for an audit. The Permissions report in senhasegura shows what system users can see and do with the system and stored assets. Accessing the **Reports ➔ Permissions ➔ User Management** menu, you will see the following reports:

## Roles by user

This report shows all the roles for which the senhasegura system users are configured. This document is important to understand if each user's privileges still comply with your company's access policy and if users can perform actions related to their permission level on the system according to company and security expectations.

* **User**: Username in the system
* **Edit**: For quick paper editing
* **Code**: Unique permission identifier
* **Type**: What type of paper
	+ built\-in
	+ Customized
* **Description**: One describes the role
* **Role**: Which role the user has access to
* **Description**: One describes the role
* **Active**: Whether the role is active in the system

Info* Verifique quais papéis foram atribuídos para cada usuário
* Visualize usuários inativos
* Filtre por código, usuário, papel, tipo e status
## Permissions by user

This report shows all the profiles with which the senhasegura system users are configured. This document is important to understand that each user's privileges still comply with the company's access policy and also that the profile assignment is correct users are labeled with the proper profile according to what the company expects. . The User Profiles Report provides the following information:

* User: Username in the system
* Edit: For quick paper editing
* Code: Unique permission identifier
* Permission: What permission was assigned to the user
* Role: Which role the user has access to
* Module: Which module the permission belongs to
* Type: Actions the permissions grant the user
	+ list
	+ To write
	+ Delete
	+ Consult
	+ Action
* Description: A brief description of the permission
	+ Check which permissions have been granted to each user
	+ Filter by code, role, permission, module, and type

## Permissions by role

This report presents the composition of permissions that each role has. In this way, the user can identify where certain permission is being applied, facilitating the definition of the role to be applied to the user.

The report presents the information grouped by role:

* **Role**: Name of the role in the system
* **Edit**: For quick paper editing
* **Code**: Unique permission identifier
* **Permission**: What permission was assigned to the user
* **Module**: Module that the permission belongs to
* **Type**: Actions the permissions grant the user
	+ list
	+ To write
	+ Delete
	+ Consult
	+ Action
* **Description**: A brief description of the permission

## Audit logs

* **Role ID code**: unique identifier for the permission
* **Role**: Name of the role in the system
* **User**: Name of the user who made the change
* **Username**: Username of the person who made the change
* **Operation**: Which operation was performed on paper
* **Origin**: What is the origin of the role change
* **IP**: Which IP of the user who made the change
* **Date/Time**: Filter by a certain period
* **Action**: Audit trail details
	+ View the history of changes made to roles
	+ You can identify which user made the change when they made it and which change was made
	+ Filter by code, role, user, username, operation, source, and runtime

## Migration permissions

* Consult which roles were added, maintained, or removed compared to the permissions system of previous versions of senhasegura
* Filter by user code, permission, and status
