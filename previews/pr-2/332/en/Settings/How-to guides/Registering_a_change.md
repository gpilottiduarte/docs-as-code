On critical, service\-responsible servers, it is widespread for changes executed in these environments to be highly controlled.

In such cases, the user requests access to a device, and the administrator releases access where he will perform the task. The auditor needs to know in what script, device, and when the user will act. For *compliance*, it is necessary to follow or check the logs of executed commands physically.

These activities have a very high risk because the user can make an execution that directly affects a company's productivity. The user can, for example, stop an Apache server hosted on the company's commercial site or even take improper actions to steal information.

The ***Change Audit*** module assists the administrator in ensuring that the necessary changes to a server will happen correctly. It provides an approval flow to access and confirms that the user executed everything he had to. It facilitates auditing and compliance.

The module also indicates whether the user reached the expected result or executed more than necessary. It shows even if the user made the change correctly.

It gives more security to the professional responsible for the environments, having audit and compliance of the commands executed inside their devices.

Another advantage is the possibility of splitting the workflow, where one user can be responsible for planning and creating the script and another for executing it.

Among other benefits, this module can help:

* Granting privileges to users in the authorized environment only.
* Prevention, detection, and correction of security abnormalities in the environment.
* Creation of inviolable audit trails for privileged operations.

Follow the instructions in the following sections to understand how to use this module:



---

## Registering a change

To create a change, follow the menu: **Change Audit ➔ Change** and follow the instructions:

1. Click the **More actions** button in the report and choose the **New** option.
2. In the report, fill in the **ID** and the **Title** of this change.
3. If you wish, you can complete a **Description** of the purpose of this change.
4. In the **Start Time** field, select the day and time the change should be executed.
5. In the **Due Date** field, select the day and time the change should be completed.
6. Select the **Access group** related to this change.  
InfoIf necessary, create a dedicated access group for change activities or edit an existing one. You can enter both users who can execute changes and those ones who will approve the changes.  
If you do not know how to create an access group, please refer to [Access Group configuration](/v3-32/docs/user-management-access-groups)***.***
7. Go to the **Devices**tab and click the add icon to select the changed devices.
8. Click the desired devices in the list, then click **Add** to select them.  
CautionThis tab must be completed. Otherwise, the change will not be registered.
9. Going to the **Script** tab, enter the commands that will be executed to make the change.  
CautionRemember that this script will be used as a comparison to prove the change's success, so it must be entered correctly.
10. To finish, click ***Save.***



---

## Requesting a change

You need to perform a remote session to request and execute a change. To do so, follow the instructions:

1. Access the menu: **PAM Core ➔ Credentials ➔ All.**
2. Choose the device you want to access to perform the change. You can find it using the filter at the top of the report.  
CautionTo have the change properly audited, it is necessary to search the devices associated with the desired changes.
3. Click the **Start session**actionbutton**.**
4. If your access group requires justification, it will be necessary to fill it out. Otherwise, the request will be generated. Wait for the change to be approved.
	* To check the status of your ***request,*** access the menu: **Change Audit ➔ My requests**.
	* If you are an **approver*****,***check the requests made to you through the menu: **Change Audit ➔ My approvals**.
5. When the request is approved or disapproved, you will receive a notification and can perform the access (complete steps 1 to 3 again).  
InfoCheck with your senhasegura administrator to see if notifications are active to receive the notification of your request.



---

## Auditing the sessions

After a change, you can check what was done during the session and see if the user followed the script entered.

Access the menu: **Change Audit ➔ Audited sessions,** and you can view the following data:

### Change details

1. Choose the change in which you want to see the details. You can find the filter at the top of the report.
2. Click on the change action button and select the option **Change details**.
3. In the displayed report, you will see the duration, the IP, and the user who made the change. You will also see the score given to this one.

### Change Audit

1. Choose the change in which you want to see in the audit. You can find the filter at the top of the report.
2. Click on the change action button and select the option **Change Audit**.
3. You will see a board with the executed commands.
	* The lines in red are commands that should have been executed, according to the registered script, but were not.
	* The green lines display the commands that were executed but were not present in the script.

### Session Logs

1. You can choose the change you want to see in the session logs. The filter is at the top of the report.
2. Click the action button and select the **Session Logs** option.
3. In the report displayed, you can see the session logs performed to execute the change.

### Watching the session video

It is also possible to watch the recording of what was done during the session:

1. Choose the change you wish to watch the recording. You can find the filter at the top of the report.
2. Click the action button for the change and select the **Video of Session** option. The video will start automatically.

Info* If you don't know how to create a user and fill in the registration form, please refer to [Add multi\-factor authentication](/v3-32/docs/user-management-add-multi-factor-authentication).
* If you don't know how to create an access group and fill out the registration form, please refer to [Access Group configuration](/v3-32/docs/pam-session-how-to-add-an-access-group).
* If you don't know how to create a credential and fill out the registration form, please refer to [Registering Credentials](/v3-32/docs/pam-how-to-set-up-a-credential-in-senhasegura).
