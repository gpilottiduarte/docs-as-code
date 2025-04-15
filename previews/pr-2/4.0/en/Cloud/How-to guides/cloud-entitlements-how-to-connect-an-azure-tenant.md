# How to connect an Azure tenant

This document provides information on how to connect Azure tenants to **Cloud Entitlements**.

:::(Info) (Info)
It's not possible to use different application registrations that belong to the same tenant, as it would cause duplicity.
:::

## Prerequisites

- An Azure App with the following API permissions attached:  
    - If the integration mode is **Read**:  
        - `Application.Read.All`  
        - `AuditLog.Read.All`  
        - `Directory.Read.All`  
        - `Group.Read.All`  
        - `RoleManagement.Read.Directory`  
        - `User.Read.All`  
        - `UserAuthenticationMethod.Read.All`  
    -  If the integration mode is **Read and Write**:  
        -  `Application.Read.All`  
        -  `Application.ReadWrite.All`  
        -  `AppRoleAssignment.ReadWrite.All`  
        -  `AuditLog.Read.All`  
        -  `Directory.Read.All`  
        -  `Group.Read.All`  
        -  `RoleManagement.Read.Directory`  
        -  `RoleManagement.ReadWrite.Directory`
        -  `User.Read.All`  
        -  `UserAuthenticationMethod.Read.All`  

        Make sure to use application permissions instead of delegated permissions.
- API permissions you attributed to the application registration with admin consent.  
- An Azure tenant with an active subscription.  
- Application with the **Reader** and **Role Based Access Control Administrator** role.
- A client secret for the application.

## Connect an Azure tenant

To connect an Azure tenant to **Cloud Entitlements**, see the following procedure:

1. Access **Cloud Security**.  
2. Access the **Cloud Entitlements** product.  
3. In the **Cloud Entitlements** menu, click **Setup \> Microsoft Azure**.  
4. Click **\+ Connect**.  
5. Select the integration mode.  
6. In the **Name \*** field, enter a name for your account.  
7. In the **Tenant ID \*** field, enter the tenant ID.  
8. In the **Secret value \*** field, enter the client secret value.
    :::(Info) (Info)
    The secret value won’t be visible after connecting with the tenant.
    :::
9. In the **Application ID \*** field, enter the application ID.  
10. (Optional): In the **Tags** field, enter tags to the account. Separate each tag by pressing the `Enter` key.  
11. Click the **Save** button.

Upon successful connection, your Azure tenant will appear in the list of connected accounts. If the connection fails, review the API permissions, the role, and the client secret. You can't use the secret of a tenant that is already connected to **Cloud Entitlements**.

To make any necessary changes, click **Action \> Edit**. Additionally, you can activate or deactivate the account by toggling the **Status** button.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).
