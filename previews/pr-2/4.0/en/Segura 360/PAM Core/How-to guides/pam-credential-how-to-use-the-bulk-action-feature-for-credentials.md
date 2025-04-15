# How to use the bulk action feature for credentials

In this tutorial, you will learn how to perform password modification using the "bulk action" feature for credentials on the Segura platform.

Bulk Action refers to the ability to perform several tasks at the same time, i.e. to perform batch operations.

## How to make changes to credentials using "bulk action"

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Credentials > All credentials**.
3. In the credentials listing page, select the credentials you need.
4. In the upper left corner, choose which type of change will be made. You can choose four options: *Edit, Enable, Expire, and Disable*

## How to update PAM credentials register

1. After selecting the **Edit** option, click the **+Add** button, next to the word **Credentials**.
3. This action will open a modal with all active credentials. Select the ones that will be updated and click **Add**.
4. Check the selected credentials and click the **Continue** button.
5. Fill in the information according to the modification task that will be performed.

In the **Operation details** tab, on the **Information** section you can modify the following attributes:

- Modify Password Type.
- Modify Domain.
- Modify Device.
- Modify Additional Information.
- Modify Tags.

:::(Info) (Info)
You can replace all existing tags or add new ones. In case of adding new tags, they are incorporated into the existing ones.
:::

In the **Execution settings** section you can modify the following attributes:

- Modify parent credential.
- Modify Credential password change configuration.
- Enable automatic change.
- Use own credential to connect.
- Authentication credential.
- Modify Reconciliation credential settings.
- Status.
- Reconciliation credential.

Choose the desired option, fill in the data that must be entered in the previously selected credentials and click the **Continue** button.

On the next screen, check and confirm the changes to the credentials and click **Save**.

## How to inactivate PAM credentials

1. After selecting the **Disable** option, on the next screen, click the **+Add** button, next to the word **Credentials**.
3. This action will open a modal with all active credentials. Select those that will be inactivated and click **Add**.
4. Check the selected credentials and click the **Continue** button.
5. On the next screen, check and confirm the changes to the credentials and click **Save**.

## How to activate PAM credentials

1. After selecting the **Activate PAM credentials option**, on the next screen, click the **+Add**, button next to the word Credentials.
3. This action will open a modal with all inactive credentials. Select those that will be activated and click **Add**.
4. Check the selected credentials and click the **Continue** button.
5. On the next screen, check and confirm the changes to the credentials and click **Save**.

## How to expire PAM credentials

:::(Info) (Info)
Only active credentials can be expired.
In case of expiring credentials, the expiration date and time will be set to the date at the time of the request.
:::

1. After selecting the **Expired** option, on the next screen, click the **+Add**, button next to the word **Credentials**.
3. This action will open a modal with all active credentials. Select those that will be expired and click **Add**.
4. Check the selected credentials and click the **Continue** button.
5. On the next screen, check and confirm the changes to the credentials and click **Save**.

:::(Warning) (Important)
All batch operations need to be validated by an approving user to take effect.
:::

:::(Info) (Info)
In order for a user to have approver user privileges, they must be elevated to that role To do this, access **Products menu > Settings > Access control > Manage Approvers** and register the user roles.
:::

:::(Info) (Info)
The approver user can view all the requests made by accessing the **Products menu > Reports > Events > Bulk operations**.
:::

***

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).