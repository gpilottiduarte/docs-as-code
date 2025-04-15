# How to use Azure Key Vault with senhasegura DSM using aliases

2. **Identity**: fill in the name of the secret's identity. This is usually the same name as the secret.
3. **Engine**: select **Generic**.

### Credentials Tab

1. Click on **Credentials**, represented by the sum symbol, to open the **Credentials** modal.
2. In the **Credentials** modal, select the credential you want to link to the secret and click **Add**.
3. In **Hostname**, fill in the hostname of the device to which the credential is linked, for example, `12.12.12.12`.
4. In **Username**, fill in an alias, for example, `db-username`.
5. In **Password**, fill in an alias, for example, `db-password`.

### Key/Value Tab

On the **Key/Value** tab, you must fill in the data from the Microsoft Azure Key Vault. To do this, click on the sum symbol next to the **Key/Value** string and fill in the text fields according to the examples below:

- **AZURE_CLIENT_ID**: Microsoft Azure client ID.
- **AZURE_KEYVALUE_NAME**: Microsoft Azure Key Value resource name.
- **AZURE_RESOURCE_GROUP**: name of the resource's related group.
- **AZURE_SECRET**: Microsoft Azure Key Vault secret.
- **AZURE_SUBSCRIPTION_ID**: Microsoft Azure subscription identification value.
- **AZURE_TENANT**: Microsoft Azure Key Vault tenant identification value.

:::(info) (Info)
- The keys' names must be filled in exactly as indicated in the list above, and the values for each key must be filled in according to the data in your Microsoft Azure account.  
- For this information, see the [Azure Key Vault documentation](https://docs.microsoft.com/en-us/azure/key-vault/) on the Microsoft website.
:::

Click **Save** to finish.

## Create an Automation in DSM

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Automations > Automations**.
3. In the **Automations** report, click **View actions**, represented by the three vertical dots, and select **New automation**.
4. In the **Automation** window, fill in the following fields:
    1. **Name**: fill in a name for the automation.

### Trigger Tab

1. In **When this happens ...** select the events that should serve as triggers for the automation.
2. To select a trigger, click the sum symbol next to the word **Trigger** to open the **Triggers** modal.
3. In the **Triggers** modal, select the events and click **Add**. For this guide, select **When a secret is created**, **When a secret is updated**, **When a secret is inactivated**, and **When a secret is activated**.
4. In **... In these applications or Secrets**, select the application or secret that will be monitored for the previous events.
5. To select an application or secret, click the sum symbol next to the word **Application** to open the **Applications** modal.
6. In the **Applications** modal, select the application that will be applied to the automation.
    1. **Note**: The application must have a static authorization.  
        1. A static authorization is an authorization that contains a specific secret. It is recommended to have only one authorization associated with that secret. If there is more than one authorization, changes to the secret can take time, as the process can be duplicated in the automation queue, causing delays.
    2. To select a secret, click the sum symbol next to the word **Secret** to open the **Secrets** modal.
    3. In the **Secrets** modal, select the secret you created earlier and click **Add**.

### Action Tab

1. Under **Run this template ...** select **Ansible** from the **Plugin** drop-down menu and, from the **Activation template** drop-down menu, select the template for **Azure Key Vault with alias**.
    1. When you create a template, you'll find a ready-made playbook on the creation screen.
2. Under **... on these devices**, you must indicate the device on which the automation will run.
    1. To indicate the device, click the sum symbol next to the word **Device** and, in the **Device** drop-down menu, select the device associated with the credential in the previous steps and, in the **Credential** drop-down menu, select the credential associated with the device.

Click **Save** to finish.

## Enter the Secret in the Application Authorization

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Applications > Authorizations by application**.
3. In the **Authorizations by application** report, locate the application you want to associate with the automation.
4. In the **Action** column, click the three vertical dots and select **Update authorization**.
5. In the **Application Authorization** window, select the **Secrets** tab and add the secret that was previously created using the **Secrets** modal.

With this step, we integrate automation into the secret we created by authorizing the application.

## Test Automation

To test that everything is correct, follow the steps below:

1. Open the previously configured Secret in edit mode and edit the description. Put a word in the description and save it by clicking **Save**.
2. Now, select **Grid Menu > DevOps Secret Manager > Automations > Executions** and, in the **Automation Executions** report, identify the event that generated the action. In this case, it will be **When a secret is updated**. In case of success, the **Status** column will contain the string **Success**.
    1. If the status is **Pending**, try updating the report by clicking on the **Update** button, represented by the clockwise arrow in the top bar.
3. If the action wasn't executed successfully, the **Status** column will appear as **Error**. You can view the execution error log by clicking the magnifying glass button in the **Action** column.

To make sure everything is correct, view the secret information on the Microsoft Azure Key Vault platform.

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.com).