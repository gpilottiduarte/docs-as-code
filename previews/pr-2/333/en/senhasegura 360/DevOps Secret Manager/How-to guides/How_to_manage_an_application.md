# How to manage an application

## Requirements

* Have registered applications to allow them to access the DSM's secrets.

## Register an application with DevOps Secret Manager

To register a new application, follow the steps below:

1. On senhasegura, in the top left corner, click the **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Applications > Applications**.
3. The main screen will list all the applications registered on senhasegura. To register a new application, click **View actions**, represented by the three vertical dots, and select **+ New** from the drop-down menu.

In **Application Configuration** window, fill in the following steps:

1. In the **Settings** tab:
   1. **Application name**: enter a name to identify the application.
   2. **Authentication method**: in the drop-down menu, select the desired method.
   3. **Line of business**: in the drop-down menu, select the line of business for that application. You can register new lines of business within senhasegura.
   4. **Application type**: in the drop-down menu, select the type of application being registered. You can register new application types within the senhasegura instance.
   5. **Enabled**: checkbox to enable or disable the application. By default, assume the Yes value.
   6. **Tags**: enter the tags you want to link with the application. They must be separated by commas.
   7. **Description**: enter the description text for the application.
   8. **Amazon AWS ARNs**: click on the button identified by the plus next to it, and fill in the Amazon AWS ARN of the resource that will be registered with the application.
2. In the **Automatic provisioning** tab, in the **Automatic provisioning of secrets** option, select the desired option: **Enabled** or **Disabled**.
3. Click **Save**.

:::(info) (Info)
AWS ARN refers to the unique identifiers of AWS resources.
:::

## Change an application registered in DevOps Secret Manager

To change an application already registered in the DSM, access the list of applications through **Grid Menu > DevOps Secret Manager > Applications > Applications.**

In the list, identify the application you want to change. To do this, follow the steps below:

1. In the **Action** column, click the three vertical dots icon and select **Change** from the drop-down menu.
2. In the **Application Configuration** window, make the necessary changes.
3. Click **Save**.

## View an application registered in DevOps secret Manager

To view an application already registered in the DSM, access the list of applications through **Grid Menu > DevOps Secret Manager > Applications > Applications**.

In the list, identify the application you want to view. To do this, follow the steps below:

1. In the **Action** column, click the three vertical dots icon and select the **View option**, represented by the three horizontal lines icon, on the drop-down menu.
2. The **Application Configuration** window will open in view mode.

In this window, you can view the information about the application:

1. **Authentication method**: authentication method registered with the application.
2. **Application**: name of the application.
3. **Client ID**: client identification. It must be a string in this pattern: `5e1983dc2023e5caab985aa73cd7144006221333d`.
4. **Client Secret**: client secret. To view it, click the eye icon.
5. **System**: client's system.
6. **Environment**: application environment.

## View an authorization by application

To view the authorizations of an application already registered in the DSM, access the list of applications through **Grid Menu > DevOps Secret Manager > Applications > Applications.**

In the list, identify the application you want to view. To do this, follow the steps below:

1. In the **Action** column, click on **Authorizations**, represented by the key icon.
2. In the **Authorizations** by application window, you can analyze a list of all the authorizations that this application has.

## Manage the automatic provisioning of secrets

When you register a new application, you can determine whether it will automatically provision the secrets stored in the DSM.

## Requirements

* Registered provisioning profiles.

To manage the automatic provisioning of secrets, follow the steps below:

1. In the **Application Configuration** window, in the **Automatic Provisioning** tab, check the **Enabled** option on the **Automatic provisioning for secrets** field.
2. **Dynamic Provisioning** section:
   1. **Cloud dynamic provisioning** **profile**.
      1. Click the plus icon to open the **Profile** field under the name.
         1. In the drop-down menu, select one of the profiles you created earlier.
   2. **Credential dynamic provisioning** **profile**.
      1. Click on the plus icon to open the following fields:
         1. **Devices**: in the drop-down menu, select the credential's device.
         2. **Provisioning profile**: in the drop-down menu, select the profile you created earlier.
3. Click **Save**.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).