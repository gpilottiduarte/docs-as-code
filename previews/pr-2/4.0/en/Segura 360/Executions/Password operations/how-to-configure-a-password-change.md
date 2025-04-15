# How to configure a password change

## Requirements

- Register a credential for password change.  
- Create a template to be used.

:::(Error) (Alert)
For security reasons, to automatically change the password of a credential or credentials, an analyst must manually request the first credential change configured in Segura. This manual action is necessary for the first request to change the password because, after the first change, Segura will automatically change the credential according to the credential's password policy.
:::

1. Create or edit a credential in **PAM Core \> Credentials \> All.**  
2. On the **Execution settings** tab, fill in the following fields:  
   * (Opcional) Parent credential: you can use it to change the password of this credential when the selected parent credential has its password changed  
   * Mark the **Enable automatic change** checkbox  
   * Select the change plugin in the **Change plugin** drop-down menu. There is no validation that the device has active connectivity  
   * Select the template in the **Change template** drop-down menu.  
   * Specify whether it will connect to the device using its own credential by checking the **Use own credential to connect** checkbox. If not, leave it blank.  
3. Click the **Save** button

:::(Info) (Info)
- The Parent credential works as a password change chain. 
- The change of a parent credential initiates the process of all its child credentials. 
- A parent credential does not prevent the child credential from being changed manually or automatically.
:::

:::(Warning) (Attention)
The password change will not be performed when it has multi-factor authentication enabled or if it needs human interaction.
:::

## Request a password change

To request a password change for a credential, follow the steps below:

1. Go to the menu **Executions ➔ Request password change**  
2. Select the desired credentials and click on the footer button **Request password change**. When requesting the change, an asynchronous task will be scheduled  
3. Click on the **Yes** button to confirm the password change request

:::(Info) (Info)
This report will only show active credentials with automated change configured.
:::

The credentials selected will be scheduled to have their password changed immediately and the password change resets the trigger counters.

## View the password change execution

Go to the menu **Executions ➔ List operations** to view all registered operations.

These operations are performed asynchronously and vary in the following states:

* **Scheduled:** This is the first one. As soon as the execution is requested, the asynchronous task waits for the execution time or is in the queue if it is full. You can cancel the operation with this status  
* **Awaiting approval:** Some modules require an approval flow to run. The **Certificates** and **Task Manager** modules use this function. You can cancel the operation with this status  
* **Canceled:** If it is in the **Scheduled** or **Waiting for approval** states, it is possible that the administrator will cancel the operation before it is executed.  
* **Running:** These are the operations that are already running at this moment. When it is running, you cannot perform any actions  
* **Successfully performed:** These operations have been successfully executed. You will have access to the details of that run  
* **Error:** These are operations that have not been correctly performed. Check through the action **Details** to understand the reason. You can restart the process if you want  
* **Expired:** These are the operations **Awaiting approval** whose approval period has expired

Within the actions available for operations, you have the following options:

* **View attempts:** For finished operations. Through this action, you will access the logs and details of the operation  
* **Restart execution:** If the operation has finished with an error state, through this action, you restart the operation. The use of failure motivators has been mitigated  
* **Request immediate execution:** When many operations are scheduled to run, through this action, you will prioritize the selected operation  
* **Cancel operation:** Allows you to cancel running operations while it is not executed or completed  
* **Operation details** Allow the user to visualize the operation details, containing information about the execution  
* **Edit Credential** Allows the user to edit the credential used on the template execution  
* **Edit Device** Allows the user to edit the device on which the template will be executed

The menu **Executions ➔ List attempted operations** will centralize the outcome of each attempted operation. This report works as a guide to support the identification of active errors in your park.

## Filter list of operations

Go to **Executions ➔ List Operations:**

* **Code**: Operation identifier  
* **Username**: Username on the system that performed the operation  
* **Device**: Which device was used  
* **Manufacturer**: Which manufacturer of the device used  
* **Model**: Which model of device used  
* **Website**: Which website was used to perform the operation  
* **Tags**: Filter from the tags you added on the device  
* **State**:  
  * Scheduled  
  * Waiting for approval  
  * Canceled  
  * Done successfully  
  * Running  
  * Mistake  
  * Expired  
* **Operation**:  
  * Credential activation  
  * Group creation  
  * User creation  
  * User creation in the group  
  * Creation of ephemeral credential  
  * Removal of ephemeral credential  
  * Group exclusion  
  * User deletion  
  * Deletion of the user in the group  
  * Inactivation of the credential  
  * Publication of certificate  
  * Secret Management Automation  
  * Task Manager  
  * Change Password  
  * Child password change  
* **Requester**: Filter the requester in the report  
* **Scheduling date**: When the operation was scheduled  
* **Execution date**: When the operation was executed  
* **Show operation details**  