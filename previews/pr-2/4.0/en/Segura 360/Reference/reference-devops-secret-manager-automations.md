# Reference for DSM automations

The automations within the Segura DevOps Secret Manager are accessible through the **Product Menu > DevOps Secret Manager > Automations > Automations path.**

On the screen, you'll find the following information:

| Item                   | Description                                                                                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Show filters** | Represented by the magnifying glass button, it hides or shows the filter options.                                                               |
| **Update**       | Represented by the counterclockwise arrow, it updates the information on the screen.                                                            |
| **View actions** | Represented by the three vertical dots, it opens a drop-down menu with four options:*+New, Print report, Export CSV,* and *Schedule report.* |

When you click **Show filters**, a series of fields are displayed. These are used to refine your search results. They are:

| Item                    | Description                                                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **ID**            | Application code in Segura.                                                                                           |
| **Name**          | Application name.                                                                                                          |
| **Tags**          | Tags registered in Segura for that application.                                                                       |
| **Application**   | Applications for which automation is intended.                                                                             |
| **Secret**        | Secret registered at Segura.                                                                                          |
| **Tag**           | Tags registered in the automation.                                                                                         |
| **Creation date** | It opens a calendar to choose the time interval for the automation search. Start with the date the automation was created. |
| **until**         | It opens a calendar for you to choose the end date of the automation registration interval.                                |
| **Enabled**       | Drop-down menu to filter according to automation status. It can be **Yes** or **No**.                                    |

In addition to these options, you have two buttons:

* **Filter**: applies the parameters that have been passed into the fields.
* **Clear**: clears all the parameters.

The report is shown below, in list format, containing the following fields:

* **ID.**
* **Name.**
* **Tags.**
* **Applications.**
* **Secrets.**
* **Creation date.**
* **Last execution:** displays the date and time in the format `DD/MM/AAAA HH:MM` of the last automation execution.
* **Enabled**.

## Automation update window

In the **Action** column, by clicking on the icon represented by the three vertical dots, you can update or delete the automation. The Update option opens the **Automation** window.

### Information tab

| Item                  | Description                                                                         |
| --------------------- | ----------------------------------------------------------------------------------- |
| **Name**        | Name of the automation.                                                             |
| **Enabled**     | A checkbox that can be **Yes** or **No**. Indicates the status of the automation. |
| **Description** | Description of automation.                                                          |
| **Tags**        | Automation tags. Type in the tags and separate them with a comma.                   |

### Trigger tab

| Item               | Descrição                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Trigger +**     | Opens the **Triggers** modal. This is used to add triggers to the automation. For example, when this event occurs, the execution will be carried out. |
| **Application +** | Opens the **Applications** modal. This informs which applications will be affected when the trigger is started.                                       |
| **Secret +**      | Opens the **Secrets** modal. This informs which secrets will be affected when the trigger is started.                                                 |

You can click the sum sign next to each word. This will open the corresponding modal. Each modal has different search fields, as shown below.

### Triggers

| Item      | Description                           |
| --------- | ------------------------------------- |
| **Name** | Filter according to the trigger name. |

### Application

| Item             | Description                     |
| ---------------- | ------------------------------- |
| **Name**        | Name of the application.        |
| **System**      | System of the application.      |
| **Environment** | Environment of the application. |

### Secrets

| Item          | Description             |
| ------------- | ----------------------- |
| **Name**     | Name of the secret.     |
| **Identity** | Identity of the secret. |
| **Engine**   | Engine of the secret.   |

In addition to these options, all the modals have two buttons: **Filter**, which applies the parameters passed into the fields, and **Clear**, which clears all the parameters.

Below, we have the list field, which contains all the secrets, filtered or not, which are presented with the following fields:

* **Ticked checkbox**: by clicking on the ticked checkbox, you'll select all the fields listed.
* **Unticked checkbox:** clicking on the unticked checkbox will delete the current selection, whatever it may be.

On the left, you'll see a checkbox. By ticking this checkbox, you select this item.

At the end of each modal, you have two buttons:

* **Add**: add the selected triggers, applications, or secrets.
* **Cancel**: cancel the operation.

### Action tab

In the **Execute this template** section:

| Item                   | Description                                                                  |
| ---------------------- | ---------------------------------------------------------------------------- |
| **Plugin**            | Drop-down menu showing the plugins available in Segura.                 |
| **Enabling template** | A drop-down menu shows the activation templates registered with Segura. |

In the **... In this devices** section:

| Item                 | Description                                                                                                                                                                                                    |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Device+**    | By clicking the sum sign, you add two new drop-down menus below the word **Device**.                                                                                                                    |
| **Device**     | A drop-down menu is added when you click the plus sign next to the word **Device**. Displays a list of the devices available in Segura.                                                              |
| **Credential** | A drop-down menu is added when you click the sum sign next to the word **Device**. This displays a list of the credentials available for connection according to the device chosen in the previous field. |

## Automation visualization window

In the **Action** column, by clicking the **Details** option, represented by the magnifying glass icon, you can view the automation details. This action will open the automation preview window.

| Item                     | Description                                  |
| ------------------------ | -------------------------------------------- |
| **ID**                  | Automation ID.                               |
| **Name**                | Automation name.                             |
| **Creation date**       | Creation date of the automation.             |
| **Last execution**      | Last execution of the automation date.       |
| **Enabled**             | Automation status.                           |
| **Description**         | Automation description.                      |
| **Tags**                | Tags related to automation.                  |
| **Triggers**            | Triggers linked to automation.               |
| **Applications**        | Applications linked to automation.           |
| **Secrets**             | Secrets linked to automation.                |
| **Plugin**              | Plugin used to execute the automation.       |
| **Template**            | Template used to execute the automation.     |
| **Device (credential)** | Device and credential related to automation. |