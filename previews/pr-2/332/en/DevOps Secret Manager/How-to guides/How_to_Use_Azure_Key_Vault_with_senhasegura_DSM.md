# How to Use Azure Key Vault with senhasegura DSM

This document will guide you through using senhasegura DSM with Microsoft Azure Key Vault without using any aliases.

## Requirements

- A properly configured Microsoft Azure account.
- An instance of Microsoft Azure Key Vault running.
    - These settings must be made in the associated application, resource group, and Azure Key Vault within Microsoft Azure.

## Create a Credential

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by the nine squares, and select **Devices**.
2. In the side menu, select **Devices**.
3. In the **Devices** report, identify the device for which you want to create a new credential.
4. In the **Action** column, click on the three vertical dots and select **Add credential** from the dropdown menu.
5. In the **Credential** window, fill in the **Username** and **Password** fields.
6. Click **Save**.

:::(info) (Info)
The credential created in senhasegura doesn't need to be valid.
:::

## Create a Secret in DSM

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Secret Management > Secrets**.
3. In the **Secrets** report, click on **View actions**, represented by the three vertical dots, and select **New secret**.
4. In the **Secret Configuration** window, you should fill in the fields as shown below.

### Settings Tab

1. **Name**: fill in a name for the secret.
2. **Identity**: fill in the identity name of the secret. This is usually the same as the secret name.
3. **Engine**: select **Generic**.

### Credentials Tab

1. Click on **Credentials**, represented by the plus symbol, to open the **Credentials** modal.
2. In the **Credentials** modal, select the credential you created in the previous step.
3. **Hostname**: enter the hostname of the device to which the credential is linked, for example, `12.12.12.12`.
4. **Username**: enter the **Username** from the previous step.
5. **Password**: fill in the password or any other value.

### Key/Value Tab

In the **Key/Value** tab, you should fill in the data from Microsoft Azure Key Vault. To do this, click on the plus symbol next to the **Key/Value** string, and in the text fields, fill in according to the examples below:

- **AZURE_CLIENT_ID**: ID of the Microsoft Azure client.
- **AZURE_KEYVALUE_NAME**: name of the Microsoft Azure Key Value resource.
- **AZURE_RESOURCE_GROUP**: name of the related resource group.
- **AZURE_SECRET**: secret value from Microsoft Azure Key Value.
- **AZURE_SUBSCRIPTION_ID**: Microsoft Azure subscription ID value.
- **AZURE_TENANT**: Microsoft Azure Key Value tenant ID value.

:::(info) (Info)
- The key names must be filled in exactly as indicated in the list above; the values for each key must be filled in according to your Microsoft Azure account data.  
- To obtain this information, consult the [Azure Key Vault documentation](https://docs.microsoft.com/en-us/azure/key-vault/) on the Microsoft website.
:::

Click **Save** to finish.

## Create an Automation in DSM

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Automations > Automations**.
3. In the **Automations** report, click on **View actions**, represented by the three vertical dots, and select **New automation**.
4. In the **Automation** window, you should fill in the following fields:
    1. **Name**: fill in a name for the automation.

### Trigger Tab

1. In **When this happens…**, select the events that should trigger the automation.
2. To select a trigger, click the plus symbol next to the word **Trigger** to open the **Triggers** modal.
3. In the **Triggers** modal, select the events and click **Add**. For this guide, select **When a secret is created**, **When a secret is updated**, **When a secret is inactivated**, and **When a secret is activated**.
4. In **… In these applications or Secrets**, select the application or secret that will be monitored for the previous events.
5. To select an application or secret, click the plus symbol next to the word **Application** to open the **Applications** modal.
6. In the **Applications** modal, select the application to which the automation will be applied.
    1. **Note**: the application must have a fixed authorization.
        1. A static authorization is an authorization that contains a specific secret. It is recommended to have only one authorization associated with that secret. If there is more than one authorization, changes to the secret can take time, as the process can be duplicated in the automation queue, causing delays.

7. To select a secret, click the plus symbol next to the word **Secret** to open the **Secrets** modal.
8. In the **Secrets** modal, select the secret created earlier and click **Add**.

### Action Tab

1. In **Execute this template…**, select **Ansible** from the **Plugin** dropdown menu and, in the **Template** dropdown menu, select the template for **Azure Key Vault**.
    1. When creating a template, the user will find a pre-made playbook on the creation screen.
2. In **…on these devices**, you should indicate the device where the automation will be executed, in this case, it should be the device associated with the credential in the first step, also indicating the created credential.
    1. To indicate the device, click on the plus symbol next to the word **Device** and, in the **Device** dropdown menu, select the device associated with the credential from the previous steps and, in the **Credential** dropdown menu, select the credential associated with the device.

Click **Save** to finish.

## Insert the Secret into the Application Authorization

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Applications > Authorizations by application**.
3. In the **Authorizations by application** report, locate the application you want to associate with the automation.
4. In the **Action** column, click on the three vertical dots and select **Update authorization**.
5. In the **Application Authorization** window, select the **Secrets** tab and add the secret that was created earlier using the **Secrets** modal.

With this step, we integrate the automation with the secret we created earlier through the application authorization.

## Test the Automation

To test if everything is correct, follow the steps below:

1. Open the **Secret** configured earlier in edit mode and edit the description. Add a word to the description and save by clicking **Save**.
2. Now, select **Grid Menu > DevOps Secret Manager > Automations > Executions**, and in the **Automation Executions** report, identify the event that triggered the action. In this case, it will be **When a secret is updated**. If successful, the **Status** column will display the string **Success**.
    1. If the status is **Pending**, try to refresh the report by clicking the **Refresh** button, represented by the clockwise arrow on the top bar.
3. If the action execution was not successful, the **Status** column will appear as **Error**. You can view the error log of the execution by clicking the magnifying glass button in the **Action** column.

To ensure everything is correct, view the secret information on the Microsoft Azure Key Vault platform.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.com).