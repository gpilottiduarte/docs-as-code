# How to reconcile a credential

The credential reconciliation process is requested manually, whenever a credential change isn't successfully performed on the senhasegura platform.

***

## Requirements
To use credential reconciliation, the user must have the following privileges:
* PAM Operator permission in senhasegura's platform.
* Credential reconciliation is active in senhasegura's platform. For Instructions on setting up a reconciliation credential, access the [How to configure a reconciliation credential](/v3-33/docs/pam-how-to-configure-a-reconciliation-credential) documentation.

***

## Reconcile a credential

1. To verify which credentials need to be reconciled, access, in the upper left corner, the **Grid Menu**, indicated by the nine-square box, and select **Executions > List operations**.
2. In the filter bar, from the **Operation** dropdown menu select **Password Change**. 
3. To filter by operation status, select **Error** from the **Status** dropdown menu. This will display a list of all incomplete and failed password change operations.
4. In the **Action** column, click on the three vertical dots icon and select the **Reconcile credential** option.
5. In the pop-up window that opens, select the date of the reconciliation schedule. 
    5.1. In order to perform this action immediately, don't modify any of the options. If you need to schedule the reconcile credentials operation, select the date and time from the **Scheduling Date menu**.
6. Click the **Save** button.

Note that now your credential reconciliation request appears in the listing as well. In the **Action** column, you can click the** Request Immediate Execution** icon, represented by the check icon, and confirm the request by clicking the **Yes** button in the confirmation modal. Thus, the request will be executed immediately, regardless of the schedule or execution queue.

A pop-up window with the operation success message will be displayed, confirming that the reconciliation operation was performed successfully.

***

## Next
1. [How to use the "bulk action" feature for credentials](/v3-33/docs/pam-how-to-use-the-bulk-action-feature-for-credentials).
2. [Reference for credentials](/v3-33/docs/pam-reference-for-credentials).

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
