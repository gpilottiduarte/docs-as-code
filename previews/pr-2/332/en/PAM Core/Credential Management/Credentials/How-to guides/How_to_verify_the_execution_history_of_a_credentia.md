# How to verify the execution history of a credential

If necessary, you can consult the history of executions on a credential's password. To do this, follow these steps:

1. On the senhasegura platform, click the **Grid Menu**, identified by the nine squares, and select **PAM Core**.
2. On the side menu, select **Credentials > All**.
3. Identify the credential you want to investigate and, in the **Action** column, click on the icon identified by the three vertical dots and select the **History** option from the drop-down menu.
4. This will open a pop-up window with the information and details of this credential's history.
5. You can filter the period you want to investigate. To do this, select the start date in the **History** date field and the end date in the **until** field.
6. In the list of executions, you have the following fields:
    6.1. **Code:** code for that execution.
    6.2. **Device:** device that originated the execution.
    6.3. **Username:** name of the user who performed the action.
    6.4. **Origin:** origin of the execution.
    6.5. **History:** the date on which the execution was carried out.
    6.6. **Current:** indicates whether this is the last run that occurred.

In the **Action:** column you'll have  two options:

1. **View:** identified by the key icon, it displays information about the credential's password in a new pop-up window.
2. **Execution details:** option represented by the gears icon. By clicking on this icon, you can view the details of the selected run in a pop-up window.

        
:::(Info) (Info)
Note that when you click on **View**, you'll see all the information about the password for that credential. Viewing the password will give your user custody of it.
:::

In the **Operation details** pop-up window, you have the following information about the execution:

1. **Submitter:** the request's source. It can be a user or an automation.
2. **Request date:** the day and time the request was made.
3. **Scheduling date:** day and time for when the request was scheduled.
4. **Operation:** type of operation to be executed.
5. **Status:** status of the execution of the request.

Next, you have a text field containing a summary of the operation, where you can consult information about the execution. This section contains information such as how many attempts were made, the template used in the execution, the template version, the start time of the execution, the end time of the execution, the system message, and more.

In the last section, called **Logs**, you can consult the logs of each execution attempt,

:::(Warning) (Caution)
It isn't possible to access the details of old executions since it isn't possible to determine the relationship between credential passwords and their executions for items before version 3.30 of senhasegura.
:::

:::(Info) (Info)
In case you have a lot of records, you may need help from our support team.
:::

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).