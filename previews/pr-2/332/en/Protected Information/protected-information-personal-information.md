## Overview

ImportantThis feature was deprecated from the senhasegura 3\.26 version. To add and share your personal information, [MySafe](/v3-32/docs/mysafe).In the **Inform****ation** menu, you have access to the personal information report. You will only see your registered information or other users’ information that you can access with permission from a direct grant or through an access group.

You can register the new information through reporting actions or the quick action shortcut.

Four main features make up protected information:

1. The information can be composed of files, text, and passwords. All this information will be protected;
2. The information has a name, a type, and an identifier for web services and may receive a compulsory expiration date;
3. The information may be linked to a URL and a service without using senhasegura to these attributes. This will be used only for maintainer organization purposes;
4. The information can be accessed even if inactive. The information status concerns only its use in the business plan;

Let us look at these attributes presented in a completed example:

  
![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28385%29.png)Registering Personal Information  

Note that in the **Information** tab, you can fill in the data that will be protected, such as a file, notes, and password. You can also fill in the open attributes of this information, such as name, type, service, and URL.

In the **Additional settings** tab, you can fill out the observations of this custody.

CautionDo not confuse the **Note** field of this tab with the **Secret notes** field of the Information tab. The **Note field** will not be protected!

You can also determine the validity of information, an identifier for retrieving information through web service methods, and manually indicate the status of this information.

In the **Access control** tab, you can determine which users will have access to information, for how long, and in which context.

When you grant access to a user, the information owner can set up the expiration date and time by filling in the **Expiration date** field. If the access should be permanent, just keep the **Expiration date** field empty.

Note that in this case, the information owner will have full knowledge of which users will be able to use the secret instead of knowing the information shared with access groups, where the group composition is not the responsibility of the secret holder.

You can select a predefined **Information type** if it exists, or if it doesn’t exist, type a new one to be persisted with the further Personal Information.

CautionYou can configure a compulsory expiration date on the **Expiration date** field in the **Additional settings** tab.

All users lose access when the information reaches the expiration date, and only the owner can edit or access the information.

In the **Notifications** tab, you can configure which users should be notified before the protected information expires. You can set up a single rule for all users listed in **Access Control** or create special notification rules for users outside access control.



---

## Registering a personal credential

With the high level of complexity in the standard passwords that some systems have, it is common for users to leave their passwords noted in unsecured places.

The **Personal Credentials** function aims to provide a “personal vault” for system users to store their access credentials to, for example:

* Email accounts;
* Applications;
* File storage services;
* Others;

This way, users store these credentials where access to them will be exclusively yours, being able to consult them as often as they think necessary.

In addition, they can generate passwords and share their credentials with other users without sending them by email or messaging applications that may not be as secure. Managers can also benefit from this feature when they need to share passwords and generic usernames for their team members.

CautionThese personal credentials are unrelated to the credentials associated with devices registered in the vault for password withdrawal and remote sessions.

To insert a personal credential in the senhasegura, follow the instructions:

1. Go to the menu: **Information ➔ Personal credentials ➔ Personal credentials;**
2. Click the action button on the report and choose the option **New personal credential;**
3. Enter the **username** of your credential;
4. If you wish to insert the **URL** of this credential;
5. In the **Type** field, select the type of this credential;
6. Define whether this personal credential will be **Active**or**Inactive;**
7. It is also possible to generate the password for this credential. To do this, click on the option Set current password;
8. Enter the password or click on the Generate password option, where the system will create a password for your credential;
9. Go to the **Access Control** tab to add users you want to share this credential with. If the credential must not be shared, proceed to the next step.
10. In the **User**field, select the user with whom you want to share this credential information from the options, then click on the Add button.
11. In the table below, a checkbox will be displayed in the Writing column. Check this box if you want the user to change the credential information.
12. Set the Expiration Date until the user has access to the personal credential.Personal credential registration form – Access control
13. Go to the Additional Settings tab;
14. In the Identifier field, you can enter a code or name to identify this credential. If desired, enter a Note with details and other information about the credential; Personal credential registration form – Additional settings
15. Go to the Notifications tab.
16. If this credential has an Expiration Date, type it in the field or click for the calendar to be displayed;
17. Click the checkbox in the Notify users field to receive a notification when the expiration date is approaching, then select how many days in advance the system should notify users;
18. Under Special notifications, define the User who will receive this notification and how many days in advance;
19. Click on **Save**.
