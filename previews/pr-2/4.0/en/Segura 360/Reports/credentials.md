# Credentials

Credentials automatically rotation is used by administrators to access critical systems across the organization, because of this kind of situation, auditing and monitoring privileged accounts are so important.

Through this, Segura enabled reports that can be used to understand how the credentials are being used, the groups that can manipulate the credentials, and more. Accessing the menu **Reports ➔ Credentials,** you will see the following reports:

## **Credentials overview**

This report summarizes all the credentials trails Segura registers in the system. This is an easy and fast consult report to view the trail records.

The ***Credentials overview report*** will print the following information:

* ***Username:*** of the credential detailed.  
* ***Credential type:*** of the one detailed. The types can be local users, local administrators, domain users, and others.  
* ***Status:*** indicates if the credential's username is available to use.  
* ***Creation date:*** is the day and time the credential was registered on the system.  
* ***Expiration date:*** is the day and time the credential was disabled on the system.  
* ***Last change:*** is the day and time the credential was modified.  
* ***Last view:*** is the day and time the credential was viewed.  
* ***Last use:*** is the day and time the credential was used to log in, when shown as blank (never used).

## **Password use**

This report shows all the credentials registered in the system and the last time the credential was used to perform access. The report is significant to verify if a credential is being managed by the users that have permission to do it; and if the access is being performed in an allowed time according to the company's ***access policy*** and the security expectations from the company and standards.

The ***Password use report*** will print the following information:

* ***Credential:*** of the password used.  
* ***Device:*** the password is used to access to.  
* ***Operation:*** performed using the password.  
* ***User:*** that accessed using the password.  
* ***User IP:*** used to use the password.  
* ***Date/Time:*** is the day and time the password was used.  
* ***Origin:*** is the platform the user used to use the password.  
* ***Target:*** is the device the password was used to access.

## **Users by group**

This report shows all the system's users registered in Segura and the groups they are members of. The report is significant to verify if the user has the necessary permissions, or have more, to execute its activities. The auditor can cross-check if the user access permissions are correct according to the company's ***access policy***, responsibility matrix, and security  
expectations from the company and standards.

The ***Users by group report*** will print the following information:

* ***Name:*** of the user.  
* ***Username:*** is the username used to access Segura.  
* ***Department:*** is the company's department the user belongs.  
* ***Access group:*** the user belongs.  
* ***Assignment date:*** is the date and time the user started to be a group member.  
* ***Assigned by:*** is the user who included the other group member.  
* ***Part of password:*** is the level of privilege the user has in relation to the credential's password: can see the complete or just a part of the password.

It's also possible to see more details about users by group, clicking on the action icon of the register

## **E-mail processing**

This report shows all the emails Segura sent for users' requests. This report is relevant to present all the access requests, this can be useful to compare the access flow and system access settings with the company's ***access policy*** and security expectations.

## **Policy definition**

This report shows the history of the changes made to the password policies registered  
in Segura system. This report is important to know when was changed, the usernames and devices that admitted the changes to understand if the password's expiration and viewing periods are still in compliance with the company's ***policy*** and security expectations.

The ***Policy definition report*** will print the following information:

* ***Date:*** day and time the change was performed.  
* ***Policy:*** is the password policy name that will be detailed. 
* ***Type:*** of the credential that admitted the change.  
* ***Username:*** that admitted the changes.  
* ***Hostname:*** of the device which admitted the change.  
* ***Strength:*** is the level of complexity of the password that will be built.  
* ***Expiration period:*** is the limitation period to perform the password change.  
* ***View expiration:*** is the limitation period to view a password.  
* ***Message:*** is what the system prints to the requester related to password policy change.

