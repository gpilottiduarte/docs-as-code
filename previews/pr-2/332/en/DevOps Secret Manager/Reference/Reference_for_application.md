# Reference for application

Access the secrets list report through the **Grid Menu > DevOps Secret Manager > Applications > Applications**.

On the **Applications** screen, you will find the following information:

## Top bar

| Item                   | Description                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------------- |
| **Show filters** | Represented by the magnifying glass icon, it hides or shows the filter options.                      |
| **Update**       | Represented by the counterclockwise arrow icon, it updates the information on the screen.            |
| **View actions** | Represented by the three vertical dots, it opens a drop-down menu with the options for **Applications**. |
| **New**          | Opens the registration window for a new application.                                                          |
| **Print report**      | Identified by the printer icon. It opens a new page for printing the report.                         |
| **Export CSV**        | Identified by the sheet of paper icon, downloads the report.                                         |
| **Schedule report**   | Identified by the clock icon, it opens the window for scheduling the report.                          |

When you click on **Show filters**, a series of fields are displayed. These are used to refine your search results by:

| Item                            | Description                                                                                                                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **ID**                    | Application code on senhasegura.                                                                                                                             |
| **Name**                  | Application name.                                                                                                                                            |
| **Systems**               | Application system.                                                                                                                                          |
| **Environments**          | Application environment.                                                                                                                                     |
| **Lines of business**     | Drop-down menu with lines of business options, as registered in the DSM.                                                                                     |
| **Application types**     | Drop-down menu with application types as registered in the DSM.                                                                                              |
| **Tags**                  | Tags inserted into the application at the time of registration.                                                                                              |
| **Enabled**               | Drop-down menu with the options for the status of the application. The available options are: **Yes** or **No**.                                  |
| **Authentication method** | Drop-down menu with the authentication methods available on senhasegura. The available options are: *No authentication, OAuth 1.0, OAuth 2.0*, and *AWS*. |
| **Enabled**               | Drop-down menu with the status of the application in senhasegura.The available options are: **Yes** or **No**.                                             |
| **Created at**            | Opens a calendar for you to choose the creation date. This will indicate that all applications created from this date will be filtered out.                  |
| **until**                 | Opens a calendar for you to choose an end date for the filter. This will indicate that all applications created up to this date will be filtered.            |

In addition to these options, you have two buttons: **Filter**, which applies the parameters passed in the fields; and **Clear**, which clears all the parameters.

In the list of secrets, you still have the following fields:

* **Description**: description of the application.
* Action **column**: displays the options *to view this application's authorizations, change this application*, and *view this application*.

## Application Configuration window

The **Application Configuration** window will be shown whenever you register or change an application. It contains the following fields:

### Settings tab

| Item                            | Description                                                                                                                               |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Application name**      | Text field for entering a name to identify your application.                                                                              |
| **Authentication method** | Drop-down menu with possible authentication methods. The available options are: *No authentication, OAuth 1.0, OAuth 2.0,* or *AWS*. |
| **Line of business**      | Drop-down menu with the lines of business available for the application. You can register your own lines of business.                     |
| **Application type**      | Drop-down menu with the application types available for the application. You can register your own application types.                     |
| **Enabled**               | Status selector for creating or modifying the application. The available options are: **Yes** or **No**.                       |
| **Tags**                  | Text field for inserting tags. Helps organize and filter applications.                                                                    |
| **Description**           | Text field for entering the application description.                                                                                      |
| **Amazon AWS ARNs**       | Used when the authentication method is AWS. Enter the ARN of the AWS credential here.                                                     |

### Automatic provisioning tab

| Item                                    | Description                                                                                                                            |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Automatic provisioning of secrets       | Indicates the status of automatic provisioning. The available options are: **Enable** or **Disable**.                       |
| Cloud dynamic  provisioning profile     | It indicates which cloud profiles can be used in the application. Only available if automatic provisioning is set to **Enable.**  |
| Credential dynamic provisioning profile | It indicates which credential profiles can be used in the application. Only available if automatic provisioning is set to **Enable**. |