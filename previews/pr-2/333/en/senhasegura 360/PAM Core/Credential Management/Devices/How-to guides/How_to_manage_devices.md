# How to manage devices

In this tutorial, you’ll learn how to manage devices that have already been created in the senhasegura platform, focusing on the options to edit, clone, disable, or reactivate a device.

## Edit a device

1. On the top-left corner of senhasegura, click the **Grid Menu**, identified by the nine squares, and select **Devices**.
2. On the side menu, select **Devices**.
3. On the list of devices on the main screen, select the device you’ll edit by clicking **Edit**, in the **Action** column, indicated by the **pencil and paper** icon.
4. The pop-up window for the **Device** will appear.
5. Make the desired changes. For more information about device registration, refer to the documentation on How to Configure a Device.
6. Click **Save**.

## Clone a device

1. On the top-left corner of senhasegura, click on the **Grid Menu**, identified by the nine squares, and select **Devices**. 
2. On the side menu, select **Devices**. 
3. On the list of devices on the main screen, select the device you’ll clone by clicking on the icon represented by three vertical dots, in the **Action** column, then choose **Clone**. 
4. In the modal, click **Yes**, and wait for the process to complete. A pop-up window will appear, indicating that you’ve cloned a device, and the access group policies will be updated.

:::(Info) (Info)
Your cloned device will receive the same name as the original one, followed by the suffix  `Copy XX`,  where `XX` is a number to identify the cloned device. 
:::

## Disable a device

1. On the top-left corner of senhasegura, click on the **Grid Menu**, identified by the nine squares, and select **Devices**. 
2. On the sidebar menu, choose **Devices**. 
3. On the list of devices on the main screen, select the device you’ll disable by clicking on the icon represented by three vertical dots, in the **Action** column, then choose **Disable**. 
4. In the modal, click **Yes** and wait for the process to complete. A pop-up window will appear, indicating that you’ve deactivated a device, and the access group policies will be updated.

:::(Info) (Info)
Passwords associated with the disabled device will also be disabled.
:::

## Activate a previously inactivated device

1. On the top-left corner of senhasegura, click the **Grid Menu**, identified by the nine squares, and select **Devices**.
2. In the side menu, select **Devices**.
3. In the list of devices, filter for inactive devices by selecting **No** in the **Active** drop-down menu.

:::(Info) (Info)
To learn about device filters, refer to the [Reference for device filters](/v3-33/docs/pam-reference-for-device-filters) documentation.
:::

4. On the list, in the **Action** column, click on the icon identified by the three vertical dots, and select **Activate** from the drop-down menu.
5. Click **Yes** in the confirmation modal.

The system will display a success message and move the device to the list of active devices.

:::(Info) (Info)
Note that when the device is reactivated, the credentials previously linked to that device won't be reactivated automatically. To activate them, you need to access the credentials report in **Grid Menu > Reports > Credentials > Overview**.
:::

## Actions available
You can perform several actions from the device list, such as **Edit**, **View**, **Clone**, and **Disable** a device, and additionally, **Add a credential**.

To access the device list, follow the steps below:

1. On the top-left corner of senhasegura, click the **Grid Menu**, represented by the nine-square icon, and select **Devices**.
2. In the side menu, select **Devices**.
3. Identify the device you want to perform the actions on the devices list.

In the **Actions** column, you have the following options:

1. **Edit**: represented by the **pencil and paper** icon, opens a pop-up window with the **Device** form. For more information on configuring a device, access the [How to configure a device](https://docs.senhasegura.io/v3-33/docs/pam-devices-management) documentation.
2. **View:** represented by the key icon, redirects to the device's credentials page. On this page, you’ll have access to all the credentials associated with the selected device.

:::(Info) (Info)
On this page, you can perform all the actions related to a credential. For more information about all the actions available, you can access the [Credential management reference](https://docs.senhasegura.io/v3-33/docs/pam-credential-management-reference) documentation.
:::

3. The last option is the drop-down menu represented by the three vertical dots. Clicking on this icon will give you the following options:
    1. **Clone:** clones the device.
    2. **Disable:** disables the device.
    3. **Add a credential:** add a credential to the device. This option will open the pop-up window with the **Credential** form. For more information, access the [How to set up a credential in senhasegura](https://docs.senhasegura.io/v3-33/docs/en/pam-how-to-set-up-a-credential-in-senhasegura) documentation.

***

## Next
1. [How to configure device categories](/v3-33/docs/pam-how-to-configure-devices)
2. [How to manage devices without credentials](/v3-33/docs/pam-devices-without-credentials).
3. [How to check the device connectivity](/v3-33/docs/pam-devices-connectivity-test).
4. [Reference for devices](/v3-33/docs/pam-reference-for-devices).
5. [Reference for device filters](/v3-33/docs/pam-reference-for-device-filters).

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
