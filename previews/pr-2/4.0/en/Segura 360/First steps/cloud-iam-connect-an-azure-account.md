# How to connect an Azure account

:::(Internal) (Private notes)
O conteúdo desta página foi formatado mas não foi atualizado junto do GAP devido ao [bug de integração](https://mt4.atlassian.net/browse/SSGR-3305). 
:::

To manage users, accounts, credentials, and virtual machines, you must configure an Azure account to integrate with Segura.

:::(Info) (Info)
 **Cloud IAM** requests only the necessary permissions to prevent excess privileges.
:::

## Creating an Azure application

1. [Access the Azure platform](https://portal.azure.com/).  
2. Log in to your Azure account.  
3. Locate the service **Microsoft Entra ID**.  
4. On the left menu, go to **Manage** > **App registrations**.  
5. Click **New registration**.  
6. In the **Name\*** field, enter the name of the application.  
7. Select which account types can use the app or access the API.  
8. (Optional) Select the redirect URI to receive the authentication response.  
9. Click **Register**.

## Creating a client secret value

1. Select an application in Azure.
2. On the left menu, go to **Manage** > **Certificates & secrets**.
3. Click **New client secret**.
4. In the **Description** field, enter a description for the client secret.
5. In the **Expires** field, select when the client secret will expire.
6. Click **Add**.

:::(Error) (Alert) 
Copy the **Value** field of the client secret immediately after creating the client secret value. Be sure to save the secret when created before leaving the page, otherwise you will have to create another secret.
:::

## Selecting API permissions

1. Select an application in Azure.  
2. On the left menu, go to **Manage** \> **API permissions**.  
3. Click **Add a permission**.  
4. Select the **Microsoft Graph**.  
5. Select the following API permissions:  
    - Delegated permissions:
        - ```Directory.AccessAsUser.All```
    - Application permissions:
        - ```Application.ReadWrite.All```
        - ```AppRoleAssignment.ReadWrite.All```
        - ```Directory.Read.All```
        - ```Directory.ReadWrite.All```
        - ```Organization.Read.All```
        - ```Organization.ReadWrite.All```
        - ```RoleManagement.ReadWrite.Directory```
        - ```User.ManageIdentities.All```
        - ```User.ReadWrite.All```
6. Click **Grant admin consent for [Azure Active Directory name]**, and click **Yes**.

## Adding an account in Cloud IAM

To add an account in Cloud IAM, follow these steps:

1. Access **Cloud IAM**.  
2. In the left menu, go to **Settings** \> **Accounts**.  
3. In the **Actions** button, click **Add account**.  
4. In the **Name\*** field, enter a **Name**.  
5. In the **Enabled\*** field, choose **Yes** or **No**.  
6. In the **Providers\*** field, select **Azure**.  
7. (Optional) In the **Description** field, enter a description for the account.  
8. (Optional) In the **Tags** field, enter tags to identify your account.  
9. Go to the **Azure** tab.  
10. In the **Directory (tenant) ID\*** field, enter the directory ID obtained in [Creating an Azure application](/v4/docs/cloud-iam-connect-an-azure-account#creating-an-azure-application).  
11. In the **Application (Client ID)\*** field, enter the application client ID obtained in [Creating an Azure application](/v4/docs/cloud-iam-connect-an-azure-account#creating-an-azure-application).  
12. In the **Client secret value\*** field, enter the client secret obtained in [Creating a client secret value](/v4/docs/cloud-iam-connect-an-azure-account#creating-a-client-secret-value).  
13. In the **IAM** section, select the desired permissions.  
14. Click **Confirm**.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).
