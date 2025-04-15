# How to reconcile a credential

The credential reconciliation process is requested manually, whenever a credential change isn't successfully performed on the Segura platform.

***

## Requirements
To use credential reconciliation, the user must have the following privileges:
* PAM Operator permission in Segura's platform.
* Credential reconciliation is active in Segura's platform. For Instructions on setting up a reconciliation credential, access the [How to configure a reconciliation credential](/v4/docs/pam-how-to-configure-a-reconciliation-credential) documentation.

***

## Reconcile a credential

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Executions.
2. In the side menu, select **Password operations > All operations**.
3. To filter by operation status, select **Error** from the **Status** dropdown menu. This will display a list of all incomplete and failed password change operations.
4. In the **Actions** column, click on **Restart execution**.
    4.1. If you need to schedule the reconcile credentials operation, select the date and time from the **Scheduling date menu**.
6. Click the **Continue** button.

Note that now your credential reconciliation request appears in the listing as well. In the **Actions** column, you can click on **Request immediate execution**, and confirm the request by clicking the **Yes** button in the confirmation modal. Thus, the request will be executed immediately, regardless of the schedule or execution queue.

A pop-up window with the operation success message will be displayed, confirming that the reconciliation operation was performed successfully.

***

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).
