# Setup

In **Setup**, you can connect your Cloud Service Providers (CSPs) and obtain information about them.

## Path to access

To set up CSPs for a tenant:

1. Access **Cloud Security**.  
2. On the **Cloud Entitlements** product, click **Access**.  
3. On the left menu, click **Setup**, and select the desired provider.

## Amazon Web Services

On the left-side menu click **Setup** > **Amazon Web Services** to consult the following information:

| Item | Description |
| :---- | :---- |
| **Type** | Displays the type of account connected to **Cloud Entitlements**. You can connect either an AWS account or an AWS organization. |
| **Account ID** | Displays the ID of the AWS account or, for AWS organizations, the Organizational unit’s (OU) management account ID. |
| **Name** | Informs the name of the account or organization within **Cloud Entitlements**. |
| **Access key** | Displays the AWS account access key. This field is only available for **Cloud Entitlements** administrators. A warning will be displayed for the corresponding account if the access key is no longer valid. **Note:** connected organizations don’t display an access key. |
| **Connected at** | Indicates the date and time when the account or organization was connected to **Cloud Entitlements**. |
| **Synchronization** | Indicates the synchronization status of the account or organization with **Cloud Entitlements**. Synchronization begins automatically every 15 minutes after completion or after a reprocess is initiated. |
| **Status** | Switch to activate or deactivate the account or organization within **Cloud Entitlements**. **Note**: deactivating the account or organization will remove the account's identities and recommendations from the report. |

In the **Actions** column, represented by the three vertical dots, you have three options:

- **Edit**: edits the information of the AWS account or organization.  
- **Security Policies**: redirects to the security policy screen of the selected account or organization.  
- **Reprocess**: reprocesses the account or organization, synchronizing the data with the CSP.

## Google Cloud Platform

On the left-side menu, click **Setup** > **Google Cloud Platform** to consult the following information:

| Item | Description |
| :---- | :---- |
| **Type** | Displays the type of account connected to **Cloud Entitlements**. You can connect either a GCP project or a GCP organization. |
| **Project ID** | Displays the ID of the GCP project or GCP organization. |
| **Name** | Informs the name of the account or organization within **Cloud Entitlements**. |
| **Connected at** | Indicates the date and time when the account or organization was connected to **Cloud Entitlements**. |
| **Synchronization** | Indicates the synchronization status of the account or organization with **Cloud Entitlements**. Synchronization begins automatically every 15 minutes after completion or after a reprocess is initiated. |
| **Status** | Switch to activate or deactivate the account or organization within **Cloud Entitlements**. **Note**: deactivating the account or organization will remove the account's identities and recommendations from the report. |

In the **Actions** column, represented by the three vertical dots, you have three options:

- **Edit**: edits the GCP project or organization’s information.  
- **Security Policies**: redirects to the security policy screen of the selected project or organization.  
- **Reprocess**: reprocesses the project or organization, synchronizing the data with the CSP.

## Microsoft Azure

On the left-side menu, click **Setup** > **Microsoft Azure** to consult the following information:

| Item | Description |
| :---- | :---- |
| **Tenant ID** | Displays the ID of the tenant. |
| **Name** | Informs the name of the tenant within **Cloud Entitlements**. |
| **Connected at** | Indicates the date and time when the tenant was connected to **Cloud Entitlements**. |
| **Synchronization** | Indicates the synchronization status of the tenant with **Cloud Entitlements**. Synchronization begins automatically every 15 minutes after completion or after a reprocess is initiated. |
| **Status** | Switch to activate or deactivate the tenant within **Cloud Entitlements**. **Note**: deactivating the account or organization will remove the account's identities and recommendations from the report. |

In the **Actions** column, represented by the three vertical dots, you have three options:

- **Edit**: edits the Azure tenant’s information.  
- **Security Policies**: redirects to the security policy screen of the selected tenant.  
- **Reprocess**: reprocesses the tenant, synchronizing the data with the CSP.

:::(Warning) (Attention)
If an invalid access key is used to connect providers to the tenant in **Cloud Security**, the user responsible for the connection will receive an email notification. Additionally, an alert will be displayed in the list. Accounts with an invalid access key won’t have their data updated in **Cloud Entitlements**.
:::

## Oracle Cloud (OCI)

On the left-side menu, click **Setup** > **Oracle Cloud (OCI)** to consult the following information:

| Item | Description |
| :---- | :---- |
| **Type** | Displays the type of account connected to **Cloud Entitlements**. You can connect with an Oracle Cloud compartment. |
| **Compartment ID** | Displays the ID of the Oracle Cloud compartment. |
| **Name** | Informs the name of the compartment within **Cloud Entitlements**. |
| **Connected at** | Indicates the date and time when the compartment was connected to **Cloud Entitlements**. |
| **Synchronization** | This indicates the compartment's synchronization status with **Cloud Entitlements**. Synchronization starts automatically every 15 minutes, either after a process completes or after a reprocess starts. |
| **Status** | Switch to activate or deactivate the compartment within **Cloud Entitlements**. **Note**: deactivating the account or organization will remove the account's identities and recommendations from the report. |

In the **Actions** column, represented by the three vertical dots, you have three options:

- **Edit**: edits the information of the OCI compartment.  
- **Security Policies**: redirects to the security policy screen of the selected compartment.  
- **Reprocess**: reprocesses the compartment, synchronizing the data with the CSP.
