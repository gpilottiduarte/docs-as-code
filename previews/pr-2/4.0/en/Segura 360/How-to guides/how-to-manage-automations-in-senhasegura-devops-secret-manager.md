# How to manage DSM automations

Within Segura **DevOps Secret Manager (DSM)**, you can register automations to simplify everyday actions.

## Requirements

* A previously created application or secret.
* A credential that will be used to perform the automation action.
* A device on which the automation will be executed.
* An execution template of the **Secret Management Automation** type for the desired executor.

## How to register automation in DSM

To create an automation, follow these steps:

1. In Segura, in the top left corner, click the **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager.**
2. In the side menu, select **Automations > Automations**.
3. In the top bar, click on **View actions**, represented by the three vertical dots, and select **+ New** from the drop-down menu.

### Automation window

In this window, you'll fill in your automation data. The fields present are:

1. **Name**: name that identifies the automation within the Segura instance.
2. **Enabled**: option to choose whether the automation will be registered as active. The options are **Yes** or **No**. By default, this option is set to **Yes**.

#### Information tab

1. **Description**: fill in a description of the automation.
2. **Tags**: add the tags that will identify the automation.

#### Trigger tab

In **When this happens ...** section, you'll define the trigger that will start the automation. To do this, fill in the following fields:

1. Click the sum icon next to the word **Trigger** to open the **Triggers** modal.
2. In the **Triggers** modal, select the triggers (actions) that will be used to start the automation. You can choose as many as you like.
3. Click **Add**.

In **... In this Application or Secrets ...** section, you'll define which applications or secrets will be affected by the trigger. To do this, fill in the following fields:

1. **Applications**:

   1. Click the sum icon next to the word **Applications** to open the **Applications** modal.
   2. In the **Applications** modal, select the applications affected when the trigger is started. You can choose as many as you like.
   3. Click **Add**.
2. **Secret**:

   1. Click the sum icon next to the word **Secrets** to open the **Secrets** modal.
   2. In the **Secrets** modal, select the secrets that will be affected when the trigger is started. You can choose as many as you like.
   3. Click **Add**.

#### Action tab

In **Execute this template …** section, you'll define the template containing the commands executed in the application(s) or secret(s) when the trigger is activated. To do this, fill in the following fields:

1. From the **Plugin** drop-down menu, select one of the plugins that are registered with Segura.
2. From the **Enabling template** drop-down menu, select one of the templates for that plugin.
   1. When creating automation, you can include an activation template by clicking the sum icon next to the **Enabling template** drop-down menu. This will open the **Execution template** window where you can fill in the necessary details.

::: (error) (Important)
When a template is created using the on-the-fly creation option, this template doesn't automatically appear in the drop-down menu list. You'll need to re-enter all the information by reloading the page or manually adding a new automation.
:::

In **... in this devices …** section, you'll add the devices on which the template will run. To do this, fill in the following fields:

1. Click the sum icon next to the word **Device**. This adds two drop-down menus just below the icon.
2. From the **Device** drop-down menu, select one of the devices registered with Segura.
3. From the **Credential** drop-down menu, select the credential used for authentication on the indicated device.

At the end, click **Save** to finish registering the automation.

## How to update an automation in DSM

To update automation, follow these steps:

1. In Segura, in the top left corner, click the **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Automations > Automations**.
3. In the list that appears on the main page, select the automation you want to update and, in the **Action** column, click the icon represented by the three vertical dots to open a drop-down menu.
4. From the drop-down menu, select **Update**.
5. The **Automation** window will open in edit mode, containing the same fields as the registration step.
6. Change what you want and click **Save**.

::: (info) (Info)
You'll find an eye icon in the bottom right corner of the **Automation** window. You can access information about the automation by hovering your mouse over it. This information includes the name and username of the person who created the automation and the name and username of the last person who made changes to it.
:::

## How to view the details of automation in DSM

In the **Automation** window, when opened in detail view, you can analyze various information about the automation. To do this, follow the steps below:

1. In Segura, in the top left corner, click the **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Automations > Automations**.
3. In the list on the main page, select the automation you want to view the details of and, in the **Action** column, click on **Details**, represented by the magnifying glass icon.
4. In the **Automation** window, you'll have the following fields:
   1. **ID**: contains the code of the automation.
   2. **Name**: contains the name of the automation.
   3. **Creation date**: the date when the automation was created.
   4. **Last execution:** the date when the automation was last run.
   5. **Enabled**: indicates the current status of the automation.
   6. **Description**: a brief description of the automation.
   7. **Tags**: the tags that help categorize the automation.
   8. **Triggers**: the actions that will activate the templates.
   9. **Applications**: the applications that will be affected by the template.
   10. **Secrets**: the secrets that will be affected by the template.
   11. **Plugin**: the plugin that is used in automation.
   12. **Template**: the name of the template that will perform the action when the trigger is activated.
   13. **Device (credential)**: contains the address of the device and the credential that will be used for authentication.

## How to delete an automation in DSM

To delete an automation, follow the steps below:

1. In Segura, in the top left corner, click the **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager.**
2. In the side menu, select **Automations > Automations**.
3. In the list on the main page, identify the automation you want to delete and, in the **Action** column, click the icon represented by the three dots and, in the drop-down menu, select **Delete**.
4. A window will display a message that the deletion of that automation was successful.

:::(warning) (Warning)
Deleting an automation has no intermediate steps, so when you click Delete, the automation will be deleted without confirming the deletion.
:::

## How to activate automation in DSM

To activate automation, which for whatever reason has a status of **No** in the **Active** field, follow these steps:

1. In Segura, in the top left corner, click the **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager.**
2. In the side menu, select **Automations > Automations**.
3. On the list page, in the top bar, select the **No** option from the **Active** drop-down menu and click **Filter**.
4. In the list, identify the automation you want to activate, click, in the **Action** column, the icon represented by the three vertical dots, and select **Update** from the drop-down menu.
5. The **Automation** window will open in edit mode.
6. In the **Active** field, check **Yes**.
7. Click **Save**.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).