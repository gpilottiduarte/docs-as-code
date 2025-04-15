Through the senhasegura permission system, we learn how to segregate the actions that a user can perform within the platform. Now we will learn how to limit the data that the user can act on.

In this way, we add another layer of security to ensure the principle of least privilege.

Access Groups act as a filter for entities from their properties. The configuration of groups can be seen in several products of the senhasegura platform:

* PAM Core
* Certificate Manager
* Task Manager
* Personal Vault
* A2A

This allows the Administrator to deliver different levels of security to the same user within their assignments in each product.

In this topic, we will talk about the access group of the PAM module, which has access control to credentials and their use.

## Segregated entities and their properties

All screens that a user has access to display information from privileged entities are filtered by the Access Group. Actions that can be taken also affect these privileged entities. To avoid misuse, senhasegura queries the rules applied to the user that connects the privileged entity.

If the user has more than one access group that gives them access to privileged information, senhasegura will apply the most restrictive group rule.

Restriction levels are based on the number of steps and people who are aware of the operation:

1. Allows access to information
2. Allow access by requiring justification of the requester
3. Allow access within a time range and an approver

In the PAM Core module, the segregated entity is the SSH credentials and keys. And these entities have attributes that can be used as a filter:

* Devices properties:


	+ Name of the device to which they belong
	+ Model of the device to which they belong
	+ Device tags
	+ Device site
	+ Device type
* Credential properties:


	+ Credential username
	+ Additional credential information
	+ Credential tags
	+ Credential type

By using these combinations of attributes you determine what information a group of users will have access to. Some information allows the use of wildcard or masks. We'll talk better about this later.

For some examples, see the following credential list:



| **ID** | Username | Hostname | Device type | Product | Site | Tag |
| --- | --- | --- | --- | --- | --- | --- |
| **1** | root | srvdns | Server | RedHat 7\.0 | LAX |  |
| **2** | administrator | msad | Server | Windows Server 2019 | LAX |  |
| **3** | sa | mssqlprd | Database | Windows Server 2019 | NYC | dba |
| **4** | System | Oraprd | Database | Oracle 19c | NYC | dba |
| **5** | administrator | WS1092 | Workstation | Windows 10 | SEA |  |
| **6** | administrator | WS1035 | Workstation | Windows 10 | SEA |  |
| **7** | administrator | WS2018 | Workstation | Windows 10 | NYC |  |
| **8** | peter.lee | WS1092 | Workstation | Windows 10 | SEA |  |
| **9** | peter.lee | mssqlprd | Database | Windows Server 2019 | NYC |  |
| **10** | john.ferrer | WS1035 | Workstation | Windows 10 | SEA |  |
| **11** | john.ferrer | WS1092 | Workstation | Windows 10 | SEA |  |
| **12** | root | vmh\-www | Server | RedHat 7\.0 | AWS |  |
| **13** | root7vmh\-cicd | Server | RedHat 7\.0 | AWS |  |  |
| **14** | root | vmh\-fw | Server | RedHat 7\.0 | AWS |  |

Let's take a look at some examples of groups that affect this relationship.

* Allow the ServiceDesk to have access only to the ***Administrator*** user of workstations.


	+ Username: `Administrator`
	+ Device type: `Workstation`  
	As a result, only credentials `5`, `6`, and `7` will be made available.
* Allow DBAs to have access only to privileged Oracle database credentials:


	+ Device type: `Database`
	+ Device model: `Oracle*`
	+ Credential Tags: `DBA`  
	As a result, only credential `4` will be made available.
* Allow users to have access to credentials that take their username, regardless of the device:


	+ Credential username: `[#USERNAME#]`  
	As a result, only credentials whose username is the same as the user logged in to senhasegura will be made available. If the username of senhasegura is ***john.ferrer*** only credentials `10` and `11` will be made available.
* Allow virtualization administrators to access only virtual machines hosted on AWS. By the rule adopted in this fictitious company, these machines receive the prefix ***vmh*** in their hostname:


	+ Device name: `vmh*`
	+ Website: `AWS`  
	As a result, only credentials `12`, `13`, and `14` will be made available.

These are just a few examples that show how filters can be combined in creating some access groups. Please note that we do not link users at this time and do not set what can be executed. The users can be linked to a diversity of groups, and each group can allow different actions and require different levels of restriction.

## The Access Group configuration procedure

Understood how attributes act as information filters, using one of the previous examples, we will create an access group that allows the Service Desk professional to access workstation credentials.

You can access the Access Groups report through the **PAM Core ➔ Settings ➔ Access ➔ Access groups** menu.

This report has the option to register new groups or change existing groups.

You can even completely clone a group to a new record through the ***Clone access group*** record action. So you can change small variations in criteria by keeping users linked. That could save you a lot of time.

The screen for a new group can also be accessed from the quick actions menu. Came from the quick actions menu you will be asked for the type of access group to register.

Groups once created will be applied immediately to users. But audit and validation reports are updated asynchronously in a process that is triggered with each modification in some group or modifications to some credential or device.

These fields as you may have noticed are determining the rules that must be obeyed by all members of the group if they want to have access to some privileged information reachable by this group.

### Allowed actions and access controls

On the very first tab of the access group registration screen, you will see what actions this group allows and what access controls must be respected to make use of the privileged information.

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28255%29.png)Register access group 

  


Some of these fields are used to configure the Access Workflow and will be seen in practice in the next chapter.

* ***Access group name:*** Name of the access group that corresponds to the rules this group applies. This makes it easier to understand and audit
* **Enabled:** Whether the group is active or not. Disabling a group can reduce the amount of information the user has access to, or reduce the level of security required to access the information
* ***Password previw settings:***


	+ ***Users can view a password:*** Determines that the credential password can be seen by the user
	+ ***Require reason to view a password:*** Check if it is necessary to register an excuse to see the password
	+ ***Requires approval to view a password:*** Check whether another user will need to act as an approver in order to see the password. Once active, you also need to define for how long this approval will be valid
	+ ***Approvals required to view:*** Number of approvals required per level to approve the operation
	+ ***Disapprovals required for cancellation:*** Number of disapprovals per level to prevent the operation
	
	InfoIt will be validated if the approval is configured (either simple or by levels) and, when saving the group, it will be checked if there are registered approvers in the "Approvers" tab, present in the same configuration window.
	+ ***Approval in levels:*** Check whether approvers will be triggered in tiers. This way you can define a hierarchy of approvers
	+ ***Allow emergency access without approval:*** Flag whether the applicant has the power to stop the approval workflow by approving the operation himself
	+ ***Users can change the expiration date by up to:*** Flag whether the applicant has the power to stop the approval workflow by approving the operation himself
	
	InfoIn the credentials display window, a button will appear for the user to increase by the time, indicated in this field, his access period
	+ ***Part of the password that will be displayed:*** Allows the requested password to be displayed fractionally. Members of this group will only have access to the fraction defined in this field. This does not prevent the password from being used by the proxy functionality, since the user does not have access to the password in plain text when using any of our proxy solutions
* ***Remote session settings:***


	+ ***Users can start a session:*** Check if member users are allowed to start a proxy session using the credentials that this group allows access to
	+ ***Requires reason to start a session:*** Check if it is necessary to register an excuse to start the proxy session
	+ ***Requires approval to start a session:*** Check whether another user will need to act as approver in order to start the proxy session. Once active, you will also need to define how long this approval is valid for
	+ ***Approvals required:*** Number of approvals required per level to approve the operation
	+ ***Disapprovals required for cancellation:*** Number of disapprovals per level to prevent the operation
	+ ***Approval in levels:*** Check whether approvers will be triggered in tiers. This way you can define a hierarchy of approvers

InfoWhen using level approval, lower level approvers will be notified initially. Only after approvals have been made by them, higher\-level approvers will be notified to perform their approval actions.* ***Allow emergency access:***Flag whether the requester has the power to stop the approval workflow by approving the transaction on its own
	+ ***Approval in levels:*** Check whether approvers will be triggered in tiers. This way you can define a hierarchy of approvers
* ***Access request settings:*** Check the following options


	+ ***Governance ID required when justifying?:*** Check whether the applicant must enter an ITMS code at the time of justification
	+ ***Always add the user's manager to approvers?:*** Check if the user responsible for the user's department should be automatically alerted as an additional approver to this group. Therefore, this user will be alerted together with the other approvers in the tab ***Approvers***
	+ **Block during freezings?\*:** Check **Yes** if you want users in this access group not to have access to the vault when the freeze is active

These fields, as you may have noticed, determine the rules that must be obeyed by all group members if they want to have access to some privileged information accessible by this group.

### The criteria for determining which data are accessible

Now we can go to the ***Criteria*** tab. In this tab, we see the attributes we wrote earlier. Note that some of these attributes are arranged as lists and others as a free text field. Free text fields allow the use of wildcard or masks.

The wildcard character is the asterisk (\*) and can be used anywhere in the value. Let's see some examples of wildcard uses in the Device field:

* `srv*`  
will filter all devices whose hostname starts with ***srv***;
* `*www*`  
will filter all devices that have ***www*** in their hostname;
* `vmh*-db`  
will filter all devices whose hostname starts with vmh and ends with \-db;

Some fields allow multiple values to be separated by a comma. The ***Device*** field is one of these. The values will be considered as an OR condition in the rule. So, will be considered a pattern/value or another pattern/value. Example for the ***Device*** field:

* `srv*,vmh*`  
Allow hostnames that start with ***srv*** or ***vmh***;

Another special value that can be used is the ***\[\#USERNAME\#]*** mask, which will be replaced by the username of the logged senhasegura account requesting the operation. And you can use this mask along with wildchar and fixed texts. Example for the ***Username*** field:

* `[#USERNAME#]`  
Allow only credentials whose username is equal to the requester's username;
* `[#USERNAME#]-adm`  
Allow only credentials whose username is a composition of the requesting user's username plus the suffix ***\-adm***;
* `[#USERNAME#]-*`  
Allow only credentials whose username is a composition of the requesting user's username plus a suffix that starts with "\-" followed by any other value;

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28252%29.png)Access group resgistration 

  


### Group users and approvers

CautionIn previous versions to add users and approvers to an access group it was necessary to save the settings first. However from the version ***3\.6*** it is not necessary to save the data before continuing the configuration of users and approvers, however, different from the versions before the end of the inclusion of users and approvers ***it is necessary to save the Access Group*** so that they are admitted by the group created.

Go to the ***Users*** tab to add users who are under to this access group.

The interface is intuitive and does not require details.

Perform the same task in the Approvers tab if this is a group that requires approval for operations.

#### Approvers in level

Note that approver users have a ***Level*** setting in their registry. This setting determines the call sequence for operation approval, allowing a hierarchy to be applied.

For example, we can have an access group with three authorization levels. The approvers that are configured as the ***first level*** will be the first to receive the access request.

The level two and three approvers will only be notified *after* the first level approvers grant the access, if they don't then the access will be denied, without the other levels being notified.

Likewise, if the first level approver grants access, but the ***second level*** approver *rejects* the third level approver will not be notified.

It is important to remember that if you register ***more than one*** approver for the same level, this way the first approver of that level that grants access will already result in a notification for the next level, thus making the process faster.

### Access limitation

On the Access limitation tab determine the days and times that users who are members of this access group will be able to view passwords or conduct remote sessions. You can also determine dates for a more restricted access period.

* ***Access permission days:*** Days of the week that users who are members of the group will be able to carry out the activities
* ***Access permission times:*** Timetables that users members of the group will be able to carry out the activities
* ***Access permission period:*** Determined period that users who are members of the group will be able to carry out the activities

  


  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1666917798769.png)Access limitation 

  


## Auditing the users and groups

As important as ensuring that users have access to the inside information they need to perform their activities, is to ensure that this access respects the company's security policy and is traceable.

Several senhasegura reports are used to ensure that the administrator has the necessary data to validate the access rules and audit these same rules.

### Credentials by users

At the **Reports ➔ PCI ➔ Credentials by users** menu, you have access to the report that shows all credentials that users can see.

Similarly, you can identify whether a particular credential is being improperly made available to a user.

The security levels of the groups are also present in this report.

### Access group modification history

Access groups can be completely modified immediately affecting the access level of everyone involved. So you can observe the change history of each group with details of which properties were changed and by whom, through the report **Traceability ➔ Access groups**.

For each record, you have acess to the detail screen that shows who made the change, what rule was used before, what rule it is used now, and when the change occurred.

### Users by access group

The **Credentials ➔ Users by group** report shows the relationship between users and groups. In addition to presenting who added the user to the group, when and what part of the password this user has access to.

InfoIt is important to inform you that all actions to change, create, add, or remove groups and users are notified through messages in ***SIEM***.

## Exceptional access

Exceptional access, which is characterized by short duration access, is critical in some daily situations such as problem correction, so granting exceptional access must be quick and easy. senhasegura offers a simple and effective solution to ensure that such accesses are set up quickly and still maintain the security of the devices.

Exceptional access is composed of a credential action button, which is only available to users that have permission to create exceptional accesses. By clicking on the button the administrator is directed to a screen where he must select the user that will receive the access and fill in the start and end date of this permission. Automatically senhasegura will grant access permission only for that credential and only to the selected user and will revoke this right as soon as the validity expires, closing the session if it is still open. senhasegura will use just\-in\-time credentials to assure the security of this access and will allow auditing just like conventional sessions, through video of the session and the command log.

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28254%29.png)Exceptional Access 

The pop\-up screen that will open has the following fields:

* ***User:*** Field to fill in the user who will receive the exceptional access
* ***Start date:*** Field to fill in the start date of the access
* ***End date:*** Field to fill in the end date of the access
* ***Credential username:*** Informative field of which credential was selected
* ***Device:*** Informative field with the device that will be the target of this access
* ***Domain:*** Informative field with the domain of the target device
* ***Save:*** Button to save the information and finish the action
