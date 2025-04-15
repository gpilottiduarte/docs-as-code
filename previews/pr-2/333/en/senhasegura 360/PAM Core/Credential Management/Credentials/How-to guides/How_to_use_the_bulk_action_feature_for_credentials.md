# How to use the "bulk action" feature for credentials

In this tutorial, you will learn how to perform password modification using the "bulk action" feature for credentials on the senhasegura platform.

Bulk Action refers to the ability to perform several tasks at the same time, i.e. to perform batch operations.

## How to make changes to credentials using "bulk action"

1. In the senhasegura platform, in the upper left corner, click on **Grid Menu**, identified by the nine squares, and select **PAM Core**.
2. In the side menu, select **Credentials > All**.
3. On the credentials listing page, in the lower right corner, click **Bulk Action**.
4. Choose which type of change will be made. You can choose four options: *Update PAM credentials record, Inactivate PAM credentials, Activate PAM credentials, and Expire PAM credentials.*

## How to update PAM credentials register

1. After selecting the **Update PAM credentials register** option, click the **Next** button.
2. On the next screen, click the **+** button, identified by the sum signal, next to the word **Credentials**.
3. This action will open a modal with all active credentials. Select the ones that will be updated and click **Add**.
4. Check the selected credentials and click the **Next** button.
5. Fill in the information according to the modification task that will be performed.

In the **Information** section you can modify the following attributes:

- Modify Password Type.
- Modify Domain.
- Modify Device.
- Modify Additional Information.
- Modify Tags.

:::(Info) (Info)
You can replace all existing tags or add new ones. In case of adding new tags, they are incorporated into the existing ones.
:::

In the **Execution Settings** section you can modify the following attributes:

- Modify parent credential.
- Modify Credential password change configuration.
- Modify Configuration of the reconciliation credential.

Choose the desired option, fill in the data that must be entered in the previously selected credentials and click the **Next** button.

On the next screen, check and confirm the changes to the credentials and click **Save**.

## How to inactivate PAM credentials

1. After selecting the **Inactivate PAM credentials** option, click the Next button.
2. On the next screen, click the **+**, identified by the sum signal, button next to the word **Credentials**.
3. This action will open a modal with all active credentials. Select those that will be inactivated and click **Add**.
4. Check the selected credentials and click the **Next** button.
5. On the next screen, check and confirm the changes to the credentials and click **Save**.

## How to activate PAM credentials

1. After selecting the **Activate PAM credentials option**, click the **Next** button.
2. On the next screen, click the **+**, identified by the sum signal, button next to the word Credentials.
3. This action will open a modal with all inactive credentials. Select those that will be activated and click **Add**.
4. Check the selected credentials and click the **Next** button.
5. On the next screen, check and confirm the changes to the credentials and click **Save**.

## How to expire PAM credentials

:::(Info) (Info)
Only active credentials can be expired.
In case of expiring credentials, the expiration date and time will be set to the date at the time of the request.
:::

1. After selecting the **Expire PAM credentials** option, click the **Next** button.
2. On the next screen, click the **+**, identified by the sum signal, button next to the word **Credentials**.
3. This action will open a modal with all active credentials. Select those that will be expired and click **Add**.
4. Check the selected credentials and click the **Next** button.
5. On the next screen, check and confirm the changes to the credentials and click **Save**.

:::(Warning) (Important)
All batch operations need to be validated by an approving user to take effect.
:::

:::(Info) (Info)
In order for a user to have approver user privileges, they must be elevated to that role To do this, access **Grid Menu > Settings > Parameters > System Parameters > Approvers** and register the user roles.
:::

:::(Info) (Info)
The approver user can view all the requests made by accessing the **Grid Menu > Reports > Events > Batch Operations**.
:::

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).