# Connect an Azure account

<!-- 
:::(Internal) (Private notes)
O conteúdo desta página foi formatado mas não foi atualizado junto do GAP devido ao [bug de integração](https://mt4.atlassian.net/browse/SSGR-3305). 
:::
-->

To manage users, accounts, credentials, and virtual machines, you must configure an Azure account to integrate with senhasegura.

<!-- Fix callout -->
:::(Info) (Info)
 **Cloud IAM** requests only the necessary permissions to prevent excess privileges.
:::

## Configure Azure

1. Log in to your Azure account: [portal.azure.com](https://portal.azure.com/).
2. Locate the service **Azure Active Directory**.
3. On the left menu, select **Application register**.
4. Select **New register**.
5. Fill in the **Name**, **Support account type**, and **URI redirect** fields.
6. Click **Register**.

### Create a Client secret value

1. Select an application in Azure.
2. On the left menu, select **Certificates and secrets**.
3. Click **New Client Secret**.
4. Enter a **description** and **expiration**.
5. Copy the **Value** of the Secret.

### Select API permissions

1. In Azure, select:
    1. On the left menu, select API permissions;
    2. Select the Microsoft Graph;
    3. The requested permissions are:
        - **Directory Role**:
            - Global Administrator
            - Tenant root group role
            - Owner
        - **API permissions**:
            - Delegated:
                - `Directory.AccessAsUser.All`
            - Application:
                - `Application.ReadWrite.All`
                - `AppRoleAssignment.ReadWrite.All`
                - `Directory.Read.All`
                - `Directory.ReadWrite.All`
                - `Organization.ReadWrite.All`
                - `RoleManagement.ReadWrite.Directory`
                - `User.ManageIdentities.All`
                - `User.ReadWrite.All`

## Add an account in Cloud IAM

To add an account, navigate to the menu **Cloud IAM** > **Settings** > **Accounts** and follow the steps:

1. Click the **Actions** icon and select the option **Add account**.
2. On the **Settings** tab, enter a **Name**.
3. Choose **Yes** or **No** for **Active**.
4. Choose the **Azure**.
5. Go to the **Azure** tab.
6. Enter the **Directory(tenant) ID**.
7. Enter the **Application (Client ID)** and **Client Secret Value**.
8. Choose an access group.
9. Click **Confirm**.
