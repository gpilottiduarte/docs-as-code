# How to manage dynamic provisioning in DSM

To use dynamic provisioning, you must first register the profiles.

## Requirements

* Have an application registered with Segura DSM.
* Have at least one secret registered in Segura DSM.
* Have at least one credential registered with Segura.
* Have at least one device registered with Segura.

## Create dynamic provisioning profile

1. On Segura, on the top left corner, click **Grid Menu**, represented by the nine squares, and select **PAM Core.**
2. In the side menu, select **Dynamic provisioning > Profiles**.
3. In the list of profiles, click on **View actions**, represented by the three vertical dots, and select **New profile.**

### Dynamic provisioning profile window

Fill in the fields according to the instructions below:

1. **Identifier**: enter an identifier for your dynamic provisioning profile within Segura.
2. **Enabled**: select the Yes radio box to create an active profile. If you want to create an inactive profile, select the No option.
3. In the **Type** section:

   1. Type: select the type of profile from the drop-down menu.
4. In the **Credential** for execution section:

   1. **Use a registered credential to access all devices:** select this checkbox if you want to use a PAM Core credential to access the devices.
      1. **Access credential registered in the system:** if you select the above option, the drop-down menu will become accessible, and you can choose one of the credentials already registered in Segura.
5. **Credential username:** If you don't want to use a registered credential, enter the username in this field to access the devices.
6. In the **Templates** section:

   1. **Credential creation template:** select the template that will be used to create the dynamic provisioning credential from the drop-down menu.
      1. The plus icon next to the drop-down menu allows you to load another creation template. To understand templates, access the document on creating templates in Segura.
   2. **Credential removal template:** select the template that will be used to remove the dynamic provisioning credential from the drop-down menu.
      1. The plus icon next to the drop-down menu allows you to load another removal template. To understand templates, access the document on creating templates in Segura.
   3. **Roles**: add the roles you want the dynamic provisioning credential to assume. A comma must separate the roles.
      1. By clicking on the question mark icon, a help modal will open to explain the roles.
7. In the field below the **Template** section, you can define a TTL (*Time To Live*) interval, in seconds, for the dynamic provisioning credential. The default is 3600 seconds.
8. Click **Confirm**.

## Change dynamic provisioning profile

To change a previously created profile, follow the steps below:

1. On Segura, in the top left corner, click on **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Dynamic provisioning > Profiles.**
3. In the list of profiles, identify the profile you want to change and, in the **Action** column, click **Change profile**, represented by the pencil and paper icon.
4. The **Dynamic Credential Provisioning Profile** window will open in edit mode.
5. Make the necessary changes and click **Confirm**.

:::(info) (Info)
By hovering over the icon represented by the eye at the bottom of the creation window, you can analyze some information, such as the date and time of creation and the date and time of updating that credential. Note: the eye icon is only displayed when editing the dynamic provisioning credential.

:::

## Activate automatic renewal

Configuring an application with dynamic provisioning profiles allows the automatic rotation of secrets at predetermined intervals, creating and registering new credentials without interrupting the use of old ones until they are updated through the rotation process.

To enable the automatic renewal of a secret, follow the steps below:

1. On Segura, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Secret Management > Secrets**.
3. Update or create a new secret.
4. In the **Secret Configuration** window, on the **Auto renew** tab, enable the options:
   1. **Cloud credentials:** select **Yes** in the **Enable** option and enter a time interval in the **Renew every XX minutes** option.
   2. **Ephemeral credentials**: select **Yes** in the **Enable** option and enter a time interval in the **Renew every XX minutes** option.
   3. **Credentials:** select **Yes** in the **Enable** option and enter a time interval in the **Renew every XX minutes** option.
5. Click **Save**.

:::(info) (Info)
For all options, the minimum time interval is 10 minutes.
:::

### Important

Enabling automatic credential renewal will trigger a password rotation on a secret's credentials, which can cause systems to stop depending on how they are using the credentials. Therefore, always make sure that the application also receives this update.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).