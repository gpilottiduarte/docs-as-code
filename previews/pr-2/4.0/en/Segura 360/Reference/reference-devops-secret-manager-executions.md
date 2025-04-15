# Reference for executions

The executions within the Segura **DevOps Secret Manager** are accessible through the **Product Menu > DevOps Secret Manager > Automations > Executions path**.

On the screen, you'll find the following information:

| Item                   | Description                                                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Show filters** | Represented by the magnifying glass button, it hides or shows the filter options.                                                                 |
| **Update**       | Represented by the counterclockwise arrow, it updates the information on the screen.                                                              |
| **View actions** | Represented by the three vertical dots, it opens a drop-down menu with four options: *+ New, Print report, Export CSV,* and *Schedule report.* |

When you click on **Show filters**, a series of fields are displayed. These are used to refine your search results. They are:

| Item                 | Description                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| **ID**         | Execution code in Segura.                                                                 |
| **Automation** | Automation name.                                                                               |
| **Trigger**    | Drop-down menu to filter the results using one of the triggers.                                |
| **Device**     | Device where the automation execution was carried out.                                         |
| **Status**     | A drop-down menu with the status of the execution. It can be: *Pending, Success,* or *Error*. |

In addition to these options, you have two buttons:

* **Filter**: applies the parameters that have been passed into the fields.
* **Clear**: clears all the parameters.

Below, we have the list field, which contains all the executions, filtered or not, which are presented with the following fields:

* **ID.**
* **Automation.**
* **Device.**
* **Status.**
* **Creation date:** displays the date and time the execution took place. It will be displayed in the `DD/MM/AAAA HH:MM` format.
* In the **Action** column, you have the **Details** option, represented by the magnifying glass icon.

## Automation executions details window

You can view details of the run. To do this, on the list screen, select the execution you want to view and click Details, represented by the magnifying glass icon. This window contains the following fields:

| Item                    | Description                                                                                                                                                                                                                 |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**            | Execution code.                                                                                                                                                                                                             |
| **Automation**    | Automation name.                                                                                                                                                                                                            |
| **Trigger**       | Automation trigger. It can be more than one.                                                                                                                                                                                |
| **Creation date** | Displays the date and time the automation was created.                                                                                                                                                                      |
| **Device**        | The device that the execution was carried out.                                                                                                                                                                              |
| **Credential**    | Credential responsible for carrying out the execution.                                                                                                                                                                      |
| **Details**       | Execution details.                                                                                                                                                                                                          |
| **Plugin**        | Plugin used by automation in execution.                                                                                                                                                                                     |
| **Template**      | Template used by the automation during the execution. Note that the name of the template is clickable. Clicking on this link opens an editing window for the execution template, containing information about the template. |
| **Status**        | Execution status. It can be: *Pending, Success*, or *Error*.                                                                                                                                                              |
| **Execution**     | Execution log. Note that there is a clickable magnifying glass icon. By clicking on this link, a new window will open, displaying the details of the operation performed.                                                   |

## Operation details window

If you want to, you can view the execution in more detail. To do this, in the **Automation executions** window, in the **Execution** field, click **Execution Details**, represented by the magnifying glass icon. The **Operation Details** window opens. This window contains information about the details of the execution.

In the report's header, you'll have the operation's credential details, device, and device's address. Below that, you'll find more information about the operation.

| Item                      | Description                                                                                                                                                                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Requester**       | The template that requested the operation.                                                                                                                                                                                   |
| **Request date**    | Date of the request for the execution.                                                                                                                                                                                       |
| **Scheduling date** | Date the operation was scheduled. In case it has been scheduled.                                                                                                                                                             |
| **Operation**       | Name of the operation carried out.                                                                                                                                                                                           |
| **Status**          | Operation status.                                                                                                                                                                                                            |
| **1ª attempt**     | It gives details of the 1st attempt made. These details include: *Start of operation, End of operation,* and *Error*: *Yes* or *No* (in case of error, the error message is displayed below).                         |
| **Logs**            | By clicking on the arrow icon, you'll be redirected to a window with the logs of the first attempt of the operation, if they exist. If there are no logs, the system will display the message *"No logs for this attempt."* |