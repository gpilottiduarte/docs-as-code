Some ***PCI DSS requirements*** demand companies implement controls that assign a unique identity to each person with access to a computer and fully monitor network resources and customer payment data. 

These reports display information required by ***PCI*** standards and thus enable the auditor to identify possible areas of non\-compliance. Accessing the menu **Reports ➔ PCI,** you will see the following reports:

## Password expiration

This report shows the expiration dates of all credentials and passwords registered  
in senhasegura. This report is important for comparing the company's ***password policy*** and the real application of the password expiration date.

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/Screenshot%202024-08-26%20175416.png)

The ***Password expiration report*** will print the following information:

* ***Credential:*** the username and password that will be detailed;
* ***Device:*** the credential is used to access;
* ***Password policy:*** that is configured to set the password change period;
* ***Password change:*** status of the automatic password change;
* ***Last change attempt:*** is the date of the last time the system tried to change the password based on the policy set;
* ***Last attempt status:*** shows if the last change attempt performed the change or not;
* ***Last change successfully:*** is the date of the last time the system changed the password automatically;
* ***Next change:*** is the date based on the policy that the password should be changed;
* ***Expiration:*** is the date limit to perform the password change;
* ***Password age:*** is the number of days the password is in use;
* ***Status:*** shows if the password is expired or not;

### Password expiration Dashboard

It is also possible to have a general view of the number of expired passwords on the dashboard menu, to view this board, access: **Dashboard ➔ PAM Core ➔ Password changes**.

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28322%29.png)

The credential quantities and their status are presented considering the following rules:

CautionChild credentials will only be considered on this dashboard if their respective parent credentials have the automatic change active.  
In some cases, the system does not schedule a specific change for the child credential, creating and executing the change at the time of the parent credential change.  
The "Waiting" and "Error" will not necessarily display the sum of "Updated" and "Expired", as they depend on the behavior of each change.

The ***Password expiration report*** will print the following information:

#### The following counts managed/non\-managed credentials:

***Updated:***

* Over 25% of managed credentials
* 5% to 25% managed credentials
* Under 5% managed credentials

***Expired:***

* None expired
* At least one expired

***Not managed:***

* Credentials without automatic password change enabled

***Execution status:***

* No problems
* Any problem with up to two robots simultaneously (all active)
* Any problem with the three robots simultaneously

**The following counts of expired credentials that have the "password change" flag activated:**

***Waiting:***

* More than 75% of managed credentials
* Less than 75% of managed credentials

***Error:***

* Without errors
* With at least one error

## Credentials by users

This report shows all credentials to every user registered in the senhasegura system can have access. This report is relevant for comparing the user's access privileges set by the company's ***policy*** and current conceded privileges.

The ***Credentials by users report*** will print the following information:

* ***Name:*** is the name of the user that will be detailed;
* ***Username:*** is the username used to access senhasegura ;
* ***Device:*** is the devices the user has access privileges;
* ***Credential:*** is the credential the user has privileges to use to access the device;
* ***Department:*** is the company's department the user belongs;
* ***Access group:*** is the access group the user is a member;
* ***Part of password:*** is the level of privilege the user has in relation with the credential's password: can see the complete or just a part of the password;
* ***View:*** show if the user has permission to visualize the password;
* ***View reason:*** shows if the user have to enter a reason to view the credential;
* ***View approval:*** shows if the user have to be approved to view the credential;
* ***Session:*** show if the user can perform a session using the credential;
* ***Session reason:*** shows if the user have to enter a reason to perform a session using the credential;
* ***Session approval:*** shows if the user have to be approved to perform a session using the credential;

## Password custody

This report shows all the passwords that are under custody of any user registered in senhasegura system. This report is relevant for the comparison between the users access privileges set by the company's ***policy*** and the current privileges and access conceded.

The ***Password custody report*** will print the following information:

* ***User:*** is the name of the user that will be detailed;
* ***Credential:*** is the credential under the user's custody;
* ***Device:*** that the credential under custody access;
* ***Begin of custody:*** is the date the user take the credential's custody;
* ***Last view:*** is the date of the last time the user view the password;
* ***End of Custody:*** is the date the user lost the custody over the credential;
* ***Duration:*** is the period the credential was under the user's custody;

### Password custody Dashboard

It is also possible to have a general view of the users, and the number of ***custody*** conceded on the dashboard menu to view this board access: **Dashboard ➔ PAM Core ➔ Custody**.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1668001367557.png)

## Password query

This report shows all the attempts to view a password by the users registered in the senhasegura system. This report is relevant for the comparison between the users access privileges set by the company's ***policy*** and the current privileges and access conceded.

The ***Password query report*** will print the following information:

* ***Name:*** is the name of the user that will be detailed;
* ***User:*** is the username used to access senhasegura ;
* ***Department:*** is the company's department the user belongs;
* ***Status:*** shows if the password view is enabled for the user;
* ***Total:*** The number of views perform by the user.;

It's also possible to see more details about the queries clicking on the action icon of the register.

## Remote sessions

This report shows the history of remote sessions performed by users registered in senhasegura system. This report is relevant for the comparison between the users access privileges to perform remote sessions set by the company's ***policy*** and the current privileges and access conceded.

The ***Remote sessions report*** will print the following information:

* ***User:*** is the name of the user that will be detailed;
* ***Credential:*** used by the user to perform the remote access;
* ***Device:*** which was access and the port used;
* ***Session ID:*** is the identification code of the particular session;
* ***Start:*** is the day and time the session started;
* ***Final:*** is the day and time the session finished;
* ***Duration:*** the total time of the session;
* ***Protocol:*** used to performed the session;
* ***Origin:*** of the access performed;

### Remote sessions Dashboard

It is also possible to have a general view of the ***remote sessions*** performed by the users on the dashboard menu, to view this board, access: **Dashboard ➔ PAM Core ➔ Remote sessions**.

## Denied access

This report shows the history of the denied access performed by users registered in the senhasegura system.

This report is important for comparing the users access privileges to perform remote sessions set by the company's ***policy*** and the current privileges and access conceded.

The ***Denied access report*** will print the following information:

* ***Operation:*** is the action the user attempt to perform;
* ***User:*** is the name of the user that attempted to operate the action;
* ***Credential:*** the user attempt to use to perform the access;
* ***Device:*** the user attempt to access;
* ***Access request:*** is the day the user requested the access;
* ***Access rejection:*** is the day the approver denied the access;
* ***Approvers:*** is the users that are selected to approve the access requests from that user;

It's also possible to see more details about the denied access by clicking on the action icon of the register.

