# Workflow for User Permission Changes

The process for changing user roles in Senhasegura ensures that requests are reviewed and approved by the appropriate individuals to ensure proper evaluation and approval of changes to user permissions.

## Prerequisites

- Must have administrator access to senhasegura System Parameters
- Must have enabled the "Requires approval to change user roles?" option in the system parameters

## How to Enable the Workflow
To set up the approval workflow for user permission changes, follow these steps:

1. Log in to senhasegura as an administrator.
2. Go to **Settings → System Parameters → System parameters → Access control**.
3. Look for the "Requires approval to change user roles?" option and select **Yes**.
4. Click on **Save**.

## How to Use the Workflow

Once you have enabled this feature, any changes in senhasegura user permissions will require approval through a workflow.

* System parameters Approvers are responsible for approving changes.
* If there are no approvers for User Management, the changes will be applied without approval.
* An administrator cannot approve their own request, so another approver will handle it.
* Auto-approval will occur if an administrator makes a request.

Also check [Access Workflow](/v3-32/docs/user-management-access-workflow) for more information about the workflow.
