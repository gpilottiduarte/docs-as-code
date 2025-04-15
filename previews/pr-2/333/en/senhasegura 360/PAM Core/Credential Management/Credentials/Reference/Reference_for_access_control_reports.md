# Reference for access control reports

Controlling access to a security system is necessary to prevent unauthorized access to privileged credentials, assets, and other sensitive information stored on the system.

The **Reports** section allows you to print log reports of user and group activities performed through senhasegura. These logs include information such as the date of the action, credentials, user access, and more.

To access these reports, navigate to the **Reports** > **Access Control** menu, where you will find the reports below.

## Access control report

This report shows the access control history of the activities made by each system user and the approval requirements when needed. This report is essential to understand if the privileges of each user are still in compliance with the access flow set by the company's policy. Also, it informs if the users need approval or not to execute activities.

The **Access control logs** report will print the following information:

* **ID**: identification code for the operation.
* **Date**: day and time the change was performed.
* **Operation**: operation performed by the user.
* **User**: the name of the user that will be detailed.
* **IP**: IP of the device the user operated.
* **Credential type**: credential of the password that was accessed.
* **Device**: device that was accessed.
* **Username**: username that was accessed.
* **Reason**: justification type.
* **Governance ID code**: code used to track the access in senhasegura.
* **Justification**: justification text the user.
* **Message**: justification message given by the user.
* **Action**: this option appears when there is an approval workflow configured for the credential.
* **Origin**: the platform used to access.

It's also possible to see more details about the access by clicking on the action icon of the register.

## Access group changes report

This report shows the access logs from the access group perspective with logs of the group modifications made by each system user, such as group creation, user removal, and more.

The **Access group logs** report will print the following information:

- **Date**: the date on which the group was modified.
- **Operation**: the operation that the user performed on the group.
- **User**: the name of the user that performed the modification.
- **Group**: the group that was modified.
- **User group**: the name of the user that admitted the modification.
- **Message**: the system prints after the change.

## Session events

This report shows a list of events that occurred during a session. This information is important for tracking and auditing the actions in each session.

The **Session events** report will list the following information for each session:

- **Code**: identifier code for the record.
- **Session ID**: identifier code for the session.
- **Date/Time**: date and time of the event that occurred.
- **Event**: event that occurred.
- **Note**: note about the event.
- **Source IP**: IP from which the action originated.
- **Protocol**: type of protocol used for connection.
- **Host**: IP of the session host.
- **Remote user**: username of the user that performed the action.
- **Session start:** informs the session's start time with the credential indicated.
- **Session end:** informs the end of the session with the credential indicated.

## Users by group report

This report shows the list of users associated with each access group in the system. This information is important to ensure users are assigned to the correct access groups according to their job functions and responsibilities.

The **Users by access group** report will print the following information:

- **Name:** the name of the access group.
- **Username:** the name of the user associated with the access group.
- **Department:** the type of credential associated with the user.
- **Access group**: refers to the access group name linked to a user. Access groups determine which users can access specific resources or privileges in the system.
- **Type**: refers to the type of credential used for user authentication and system access.
- **Assignment date**: the date on which the user was assigned to the access group.
- **Assigned by**: the name of the person who assigned the user to the group.

This report helps to ensure that the correct permissions are assigned to each user and that access to sensitive information is limited to only those who need it.

## Approvers by group

This report lists all users assigned as approvers in the system, enhancing the tracking of those involved in the approval process.

The **Approvers by group** report will print the following information:

- **Name**: the name of the user assigned as an approver in the system.
- **Username**: the selected username for use in the system, pending approval.
- **User group**: the group of users to which the assigned user belongs.
- **Access group**: the group that has access to the approval process.
- **Type**: the type of approver assigned, such as primary or secondary.
- **Assignment date**: the date the user requested approval.
- **Assigned by**: the name of the user who assigned the approver.

## Next
1. [Reference for credentials](/v3-33/docs/pam-reference-for-credentials).
2. [Credential management reference](/v3-33/docs/pam-credential-management-reference).