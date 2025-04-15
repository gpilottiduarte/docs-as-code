# How to use the “Bulk Action” feature for devices

In this document, you'll learn how to change passwords by using bulk actions for devices registered on the senhasegura platform.

:::(info) (Info)
As visual feedback, you can follow the stage you are currently at.To do this, look at the top portion of the batch operation screen to situate yourself.

Bulk Action refers to the ability to perform several tasks at the same time, that is, to perform batch operations.
:::

## Requirements

* For the approver to access the approval screen, they must have the minimum profile of *PAM Operator, PAM Administrator*, or S*ystem Administrator.*

## Changes on PAM devices

1. On the senhasegura platform, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **Devices**.
2. In the side menu, select **Devices**.
3. On the device list page, select the devices you want to change and click the **Bulk Action** button in the bottom right corner.
4. Choose the type of change you want to make.
   1. You can choose three options: *Update PAM device registration, Inactivate PAM devices,* and *Activate PAM devices.*

## Update PAM devices

1. After selecting the **Update PAM** devices register option, click the **Next** button.
2. On the next screen, you'll see the devices you selected earlier listed.
   1. Alternatively, you can add or remove devices by following the instructions below:
      1. To add, click on the plus icon, next to the word **Devices**, and select the devices you want to add via the **Devices** modal.
      2. Once you have selected all the devices you want to add, click **Add**.
      3. To remove, click the trash can icon on the left side of the list and confirm the deletion in the **Confirmation** modal.
3. Click **Next**.
4. A screen displaying all modifiable fields will appear. Make desired changes and click **Next**.
5. The next screen will show the list of devices that will be changed, as well as the changes that will be made.
6. Review the operations and devices and click **Save**.

:::(Info) (Info)
For more information on the device fields, see the reference documentation on Devices.
:::

## Disable PAM devices

:::(info) (Info)
The bulk operation option allows you to inactivate several devices simultaneously.Note, however, that only active devices can be selected for inactivation.
:::

:::(warning) (Caution)
When you inactivate a device, all credentials related to that device will be inactivated.
:::

1. After selecting the **Disable PAM devices** option, click the **Next** button.
2. On the next screen, you'll see the devices you selected earlier listed.
   1. Alternatively, you can add or remove devices by following the instructions below:
      1. To add, click on the plus icon, next to the word **Devices**, and select the devices you want to add via the **Devices** modal.
      2. Once you have selected all the devices you want to add, click Add.
      3. To remove, click the trash can icon on the left-hand side of the list and confirm the deletion in the **Confirmation** modal.
3. Click **Next**.
4. The next screen will show the list of devices that will be inactivated.
5. Review the devices and click **Save**.

## Enable PAM devices

:::(info) (Info)
The bulk operation option allows you to activate or reactivate several devices simultaneously.Note, however, that only inactive devices can be selected for activation.
:::

1. After selecting the **Enable PAM** devices option, click the **Next** button.
2. On the next screen, you will see the devices you selected earlier listed.
    1. Alternatively, you can add or remove devices by following the instructions below:
        1. To add, click the plus icon, next to the word **Devices**, and select the devices you want to add via the **Devices** modal.
        2. Once you have selected all the devices you want to add, click **Add**.
        3. To remove, click the trash can icon on the left side of the list and confirm the deletion in the **Confirmation** modal.
3. Click **Next**.
4. The next screen will show the list of devices that will be activated.
5. Review the devices and click **Save**.

:::(info) (Info)
When you activate a device, the associated credentials aren't automatically reactivated.
:::

### Important

* All bulk operations must be validated by an approving user to take effect.
* For a user to have approver privileges, they must be configured as such. To do this, go to **Grid Menu > Settings > System parameters > Approvers.**
* The approving user can view all the requests made by going to **Grid Menu > Reports > Events > Bulk Operations.**

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).