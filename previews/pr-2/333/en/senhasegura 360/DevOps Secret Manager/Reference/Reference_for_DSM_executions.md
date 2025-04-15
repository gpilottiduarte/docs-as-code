# Reference for DSM executions

You can access the report listing executions through **Grid Menu > PAM Core > Dynamic Provisioning > Executions.**

## Top bar

| Item                      | Description                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| **Show filters**    | Represented by the magnifying glass icon. Displays or hides the search fields on the screen. |
| **Update**          | Represented by the counterclockwise arrow icon. Refreshes the page.                          |
| **View actions**    | Represented by the three vertical dots icon. Displays the possible actions for the page.     |
| **Print report**    | Represented by the printer icon. It opens a new page for printing the report.                |
| **Export CSV**      | Represented by the sheet of paper icon, downloads the report.                                |
| **Schedule report** | Represented by the clock icon. It opens the window for scheduling the report.                |

## Search fields

When you click on **Show filters**, a series of fields are displayed. These are used to refine your search results. They are:

| Item                     | Description                                                                                                                                                 |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Profile**        | Drop-down menu with options for profiles already registered with senhasegura.                                                                               |
| **Register date**  | Opens a calendar so you can choose the exact date of the execution. This will be the filter's start date.                                                   |
| **until**          | Opens a calendar so you can choose the exact date of the execution. This will be the end date of the filter for the items.                                  |
| **Creation date**  | Opens a calendar so that you can choose the exact start date for creating the execution. This will be the creation start date for the filter for the items. |
| **until**          | Opens a calendar so that you can choose the exact end date for creating the execution. This will be the creation end date for the filter for the items.     |
| **Exclusion date** | Opens a calendar so that you can choose the exact start date for deleting the execution. This will be the creation start date for the filter for the items. |
| **until**          | Opens a calendar so that you can choose the exact end date for deleting the execution. This will be the deletion end date for the filter for items.         |
| **Error**          | Drop-down menu with options to filter executions according to error status. This can be**Yes** or **No**.                                       |

In addition to these options, you have two buttons: **Filter**, which applies the parameters passed into the fields, and **Clear**, which clears all the parameters.

## Report fields

The results are displayed in a list as shown below:

* **Profile**.
* **Username**: username of the person who performed the execution.
* **Registration date.**
* **Creation date.**
* **Deletion date.**
* **Created**: date the execution was created.
* **Removed**: date the executionwas removed.
* **Error**.
* **TTL**: number referring to the execution's validity interval.
* **Active**: indicates whether the execution is active or inactive.
* In the **Action** column, clicking the magnifying glass icon will take you to the **Provisioning Logs** window.

### Provisioning logs report

| Item                                                                   | Description                                                                                                                                                                                                         |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Debugging details for the last template run for provisioning** | Details of the last execution.                                                                                                                                                                                      |
| **Information for creation template `<Template name>`**        | Information on the template used to create the execution. For more details, you can click on the**Operation Details** link. You can also click on the template name to obtain information about the template. |
| **Information for deletion template `<Template name>`**        | Information about the template used to delete the execution. You can click on the template name to obtain information about the template.                                                                           |
