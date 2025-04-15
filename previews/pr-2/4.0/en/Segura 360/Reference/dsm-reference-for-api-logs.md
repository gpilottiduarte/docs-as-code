# Reference for API Logs

On the Segura DevOps Secret Manager, you can consult the logs of the operations that took place via the DSM API through the API Logs report. Access it through **Grid Menu > DevOps Secret Manager > Events > API Logs**.

## Top bar

| Item                      | Description                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| **Show filters**    | Represented by the magnifying glass icon. Displays or hides the search fields on the screen. |
| **Update**          | Represented by the counterclockwise arrow icon. Refreshes the page.                          |
| **View actions**    | Represented by the three vertical dots icon. Displays the possible actions for the page.     |
| **Print report**    | Represented by the printer icon. It opens a new page for printing the report.                |
| **Export CSV**      | Represented by the sheet of paper icon, downloads the report.                                |
| **Schedule report** | Represented by the clock icon, it opens the window for scheduling the report.                |

When you click **Show filters**, a range of fields is displayed. These are used to refine your search results. They are:

| Field                    | Description                                                                                                                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Event**          | Drop-down menu. Shows the possible event options for the DSM API. These are: *Update, Create, Delete,* and *Read.*                                                                                  |
| **Response**       | HTTP code of the response obtained from the request.                                                                                                                                                 |
| **Entity type**    | Type of entity passed to the API request. For example:**Secret.**                                                                                                                              |
| **Entity ID**      | Entity code in Segura.                                                                                                                                                                          |
| **Entity name**    | Entity name. In this case, it will be the name of the request registered with Segura.                                                                                                           |
| **Application ID** | Application code. In this case, it will be the application code used in the request to the DSM API.                                                                                                  |
| **Application**    | Application's name.                                                                                                                                                                                  |
| **Authorization**  | Requisition authorization code. For example:`b637bb60b67841de4cfce490d56884`.                                                                                                                      |
| **IP**             | IP address from which the request was made.                                                                                                                                                          |
|      **Date/Time**                 | Date and time the request was made. There are two separate drop-down menus, the first to open the calendar and choose the day and the second with the hour and minute intervals you can choose from. |

In addition to these options, you have two buttons: **Filter**, which applies the parameters passed into the fields, and **Clear**, which clears all the parameters.

The report is shown below, in list format, containing the following fields:

* **Event**.
* **Response**.
* **Entity type**
* **Entity ID.**
* **Entity name.**
* **Application ID.**
* **Application**.
* **Authorization**.
* **IP**.
* **Server**: IP address of the server that received the request.
* **Date/Time**: date and time of the request, displayed in the `DD/MM/AAAA HH:MM` format.