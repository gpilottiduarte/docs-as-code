# How to configure a reconciliation credential

This tutorial shows you how to set up a credential reconciliation. It explains how to set up credentials, including choosing plugins and templates to make managing accounts easier.

***

## Requirements 
To use the reconciliation credential, you must have:
* The PAM Operator permission in Segura.
* A credential reconciliation active in Segura.

***

## How to configure a reconciliation credential
Follow the steps to set up a credential reconciliation in Segura:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Credentials > All credentials**.
3. Identify the one you want to edit and, in the **Actions** column, click **Edit**.
4. At the **Execution settings** tab, select **Reconciliation credential configuration** and select the **Enabled** field.
5. In the **Autorun** field, select **Enabled** if you want this process to be done automatically or **Disabled** if you want this process to be done manually.

:::(Info) (Info)
With the **Autorun** parameter for automated password reconciliation of a credential enabled, in case of an unsuccessful password change attempt, the credential's password reconciliation will be scheduled to run according to the chosen plugin and template.
:::

:::(Warning) (Caution)
To use the automatic password reconciliation functionality for a credential, there must be a reconciliation credential registered.
:::

6. Choose the **Reconciliation credential**.
7. Choose the **Reconciliation plugin** and **Reconciliation template**.
8. Click the **Continue** button, and **Save**.

:::(Info)(Info)
The template determines the commands executed at reconciliation time. You can create new templates according to your needs.
:::

***

## Important note
To get reports on your passwords, activate automation with **CORE - Password reconciliation**. Access it through the **Products menu > Settings > Execution processes** path. This automation only checks if the password is valid and the access was successful. The scanning happens every fifteen minutes, always looking for passwords that still need to be verified. Once the credential is checked, it will remain unscanned for the next 24 hours.

:::(Warning) (Caution) 
It’s important to note that the automation **only** tests access via the **RDP** and **SSH** protocols. 
:::

**Example**: the automation accesses the user1 credential and tests its access on server1. If successful, the automation generates a report stating that the access worked. If unsuccessful, it generates a report indicating the access attempt failed. Please note that this password will no longer be tested, even if it changes, in a 24-hour period. **The process can be summarized as one test per day per credential with a scan interval of 15 minutes.**

The automation reports will be saved in **Products menu > Executions > Password reconciliation**.

***

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).