# Reference for secrets

You can access the secrets list report through **Product Menu > DevOps Secret Manager > Secrets Management > Secrets**.

:::(warning) (Caution)
To view secrets, you need to be part of an access group with permission to manage secrets; otherwise, if you register a secret, you won't be able to view it in the filters and dashboards.
:::

On the screen, you'll find the following information:

## Top bar

| Item                      | Description                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------- |
| **Show filters**    | Represented by the magnifying glass button, it hides or shows the filter options.     |
| **Update**          | Represented by the counterclockwise arrow, it updates the information on the screen.  |
| **View actions**    | Represented by the three vertical dots, it opens a drop-down menu with three options. |
| **New secret**      | Open the window to register a new secret                                              |
| **Print report**    | Identified by the printer icon. It opens a new page for printing the report.          |
| **Export CSV**      | Identified by the sheet of paper icon, downloads the report.                          |
| **Schedule report** | Identified by the clock icon, it opens the window for scheduling the report.           |

When you click on **Show filters**, a series of fields are displayed. These are used to refine your search results. They are:

| Item                      | Description                                                                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Name**            | Name of the registered secret.                                                                                                                           |
| **Engine**          | A drop-down menu with the option to filter the results according to the Engine used in the secret. The options are *Ansible, Generic, GitLab*, and *Kubernets*. |
| **Environment**     | A drop-down menu with the environments registered on Segura.                                                                                        |
| **Enabled**         | A drop-down menu with **Yes** and **No** options. Indicates the status of the secret in Segura.                                                                 |
| **Error**           | A drop-down menu with the options **Yes** and **No**. Indicates whether or not the secret contains any errors.                                                   |
| **Identity**        | Name of the identity registered with Segura.                                                                                                        |
| **Version**         | Option to filter according to a specific version of a secret. If left blank, the newest version is displayed.                                            |
| **Expiration date** | Opens a calendar to choose the start date of the interval that will be used for the filter by the secret expiration date.                                |
| **until**           | Opens a calendar to choose the end date of the interval that will be used for the filter by the secret expiration date                                   |

In addition to these options, you have two buttons: **Filter**, which applies the parameters passed into the fields, and **Clear**, which clears all the parameters.

In the **Secrets** list, you have the following extra fields:

* **Code**: code used to register the secret with Segura.
* **Tags**: tags registered for the secret.
* In the **Action** column you have the three vertical points options with the **Secret Management** options.