# How to manage bulk actions requests

## Requirements

* For a user to be an approving user, they must have the following privileges: *System Administrator, PAM Administrator*, and *PAM operator.*

## How to add a new approving user

To manage bulk operations, the user must be an approver. To register a user with this role, follow the steps below:

1. On senhasegura, in the top left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **System parameters > Approvers**.
3. In the top bar, click on **View actions**, identified by the three vertical dots, and select **New**.
4. In the **Approvers** form, fill in the following fields:
   1. **Module**: select the module that the approver will have access to.
   2. **Approvers**: click the sum icon next to the word **Approvers**.
   3. In the **Approvers** modal, select the users you want to register as approvers and click **Add**.
5. Click **Save**.

## How to approve a pending bulk operation request

:::(Info) (Info)
For a request to be approved, the respective user must have an approving user role.
:::

1. On senhasegura, in the top left corner, click the **Grid Menu**, represented by the nine squares, and select **Reports**.
2. In the side menu, select **Events > Bulk operations**.
3. In the list that has been loaded, identify the operation you want to analyze.
4. In the **Action** column, click **Request details**, represented by the ID card icon.
5. In the **Request details** window, in the bottom right corner, click **Approve**.
6. Click **Yes** in the approval modal.
7. A message will appear indicating that the request has been successfully approved.

## How to reprove a pending batch operation request

:::(Info) (Info)
For a request to be approved, the respective user must have an approving user role.
:::

1. On senhasegura, in the top left corner, click the **Grid Menu**, represented by the nine squares, and select **Reports**.
2. In the side menu, select **Events > Bulk operations**.
3. In the list that has been loaded, identify the operation you want to analyze.
4. In the **Action** column, click **Request details**, represented by the ID card icon.
5. In the **Request details** window, in the bottom right corner, click **Reprove**.
6. Click **Yes** in the approval modal.
7. A message will appear indicating that the request has been successfully approved.

## How to view a task from a bulk operation

You can view the tasks contained within a bulk operation. This is useful for knowing what is being done in each operation and approving or disapproving the operation. To view a task in a bulk operation, follow the steps below:

1. On senhasegura, in the top left corner, click the **Grid Menu**, represented by the nine squares, and select **Reports**.
2. In the side menu, select **Events > Bulk operations**.
3. In the list that has been loaded, identify the operation you want to analyze.
4. In the **Action** column, click **Tasks**, represented by the three horizontal bars.
5. In the **Bulk operation tasks** window, all the tasks for that operation will be listed.
6. To view a specific task, in the **Action** column, click **Details**, represented by the magnifying glass icon.
7. In the **Bulk operation task** window, you can analyze the task in detail.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).