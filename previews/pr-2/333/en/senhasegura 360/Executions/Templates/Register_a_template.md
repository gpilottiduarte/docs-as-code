Templates are important components of senhasegura. They are the step\-by\-step instructions to perform system changes.

The system administrator or any other granted user is able to create new templates according to your needs and execute them on devices that have connectivity compatible with senhasegura .

Out\-of\-the\-box templatessenhasegura is installed with more than 250 templates out\-of\-the\-box. And you have access to all templates created by senhasegura team and the community on this public [Github project](https://github.com/senhasegura/execution-templates).

To list all the registered templates, go to the menu **Executions ➔ Settings ➔ Templates**.



---

## Register a template

Click on the **New template** button and, on the screen that appears, fill in the following fields:

* **Template name:** Name for better identification;
* **Executor:** Communication technology between the senhasegura and the target device. It will be covered below;
* **Type of execution:** Type of change for which the model will be used. Can be any action from triggered by installed execution' client modules;
* **Active?:** Indicates whether the change template is available for use or not;
* **Template content:** A text area to compose the script instruction. We will present every Executor syntax later;

Click the **Save** button to complete the registration



---

## Modify a template

To modify a password change execution template, click the **Change template** button on the template record.

Templates receive an incremental version, identified in their report by the column **Version**.

You have access to the previous versions, as well as data about the users who modified the template, through the registration action **Template change history**.



---

## Composing a template

Every Executor plugin has its own syntax. But you can use some tags properties to be replaced by credentials and devices real properties values. The replacement will occurs when the operation is executed.  
Which Device and credential is available to be used at the operation time, will be defined by the client module even.

Attention These properties will be replaced by the client module rules. Properties that represents password change will be considered only by password change operations. For an example, **Task Manager** operations will only replace connection tags properties.



---

## Template library

senhasegura team and community offer hundreds of templates for free through Github.

You can find and share the templates you have cereated in our public repository.

[senhasegura Executions Templates Github](https://github.com/senhasegura/execution-templates)



---

## Template approval workflow

After creating or editing an execution template, the approval of a registered approver is required. You can configure the approvers through the **Settings ➔ System Parameters ➔ Approvers** menu:

InfoTo perform the following steps you must have registered an execution template.1. Select the option **New** from the actions menu
2. Select the **Executions** Module
3. Add an approver
4. Click **Save**  
**Executions ➔ Settings ➔ Templates**, where an execution template cannot be created and approved by the same user.



---

### The status of an approval

* **Approved**: When the approving user approves the change or creation of a template.
* **Pre\-registered**: When the approver user has not yet approved the request to create a template or change the content of the template.

Under **Executions ➔ Settings ➔ Parameters** under System Settings **Executions**:

1. Select **Yes** to enable **Approval Workflow for Templates**
2. Click on **Save**

Approval in levelThe [**Level Approval**](/v3-33/docs/pam-group-users-and-approvers) option can be enabled. It is located in the access group and users with the approval permission.



---

### These can have some states

* **Executions ➔ Templates Control**
* **Pending**: after creating a template, where it will wait for approval or disapproval.
* **Approved**: after an administrator has approved the template.
* **Disapproved**: after the template is disapproved by an administrator, preventing it from being executed.
* **Canceled**: after the user cancels the registration request or changes to a template.
* **Expired**: after the time set to approve or re\-approve has expired.



---

## Related articles

* [Template tags](https://docs.senhasegura.io/v3-33/docs/execution-template-tags)
