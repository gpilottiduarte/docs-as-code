# How to configure A2A


Welcome to **A2A**, the management platform for Segura's **A2A** APIs.

This document provides a step-by-step guide to help system administrators configure the **A2A** module to integrate their applications with Segura's APIs efficiently and securely. **A2A** centralizes credential management, enhancing security and streamlining API access.

Although OAuth 2.0 is the recommended authentication method, the module also supports secure integrations with other protocols, such as OAuth 1.0 and AWS.

 [How to authenticate an application in A2A](/v4/docs/how-to-authenticate-an-application-in-a2a).

## Prerequisites  

* System administrator permission.

## Path to access

1. On Segura,  in the navigation bar, hover over the **Products menu** and select **A2A**.
---
## Add an application

To add an application to **A2A**, follow the steps below:

1. Access **Applications \> Applications**.  
2. On the **Applications** screen, click **Add**.  
3. On the **Add application** screen, fill in the required fields:  
   1. **Application name**\*: enter a name that clearly identifies the client application. Example: **Financial Application \- ERP Integration.**  
   2. **Use OAuth signature**\*: choose the desired authentication method. Example: **OAuth 2.0**.  
   3. **Status**\*: set the application status to **Enabled** or **Disabled**. Example: **Enabled**.

4. After completing the required fields and, if needed, the optional ones, click **Save**.

**Result**: you’ve added an active application to **A2A** and can now add an authorization to obtain an access token and consume **A2A** APIs.

## Add an authorization key for the application

After adding a client application to **A2A**, you need to add an authorization so your application can consume Segura APIs:

1. On the **Applications** screen, find the added application or use the search filters. Example: Enter **Financial Application \- ERP Integration** in the **Name** filter.  
2. In the **Actions** **button**, click **Authorizations**.  
3. On the **Application authorization** screen, click **Add**.  
4. On the **Add authorization** screen, fill in:

    ::: (error) (Alert)   
    The fields with an asterisk are mandatory.   
	:::

1. **Settings tab:**  
   1. **Expiration date and time**: define the authorization validity period. Example: **01/30/2025** and 6:00 PM, or leave blank for manual deactivation.  
   2. **Status**\*: Select **Enabled** or **Disabled** to define the authorization status. Example: **Enabled**.  
   3. **System and Environment**: choose where the authorization will be used. Example: **System X** and **Test environment**.  
   4. Click **Continue**.

2. **Security tab:**  
   1. **Authorized resources**: select the resources the application can access using the authorization. Example: **PAM Core**.  
   2. **Enable encryption of sensitive information\***: enable or disable as needed to ensure the security of sensitive information. Example: **No**.  
   3. **PAM resource permission\***: choose between **Read-only** to view data or **Read and write** to view and modify data. Example: **Read-only**.

::: (warning) (Attention) 
Selecting **Read and write** grants permission to modify resources. Ensure this authorization is appropriate, as it may pose security risks.  
:::

      

   4. **Authorized IPs**: enter the addresses allowed to use the authorization. Use \* (asterisk) to allow any IP. Example: **192.168.1.1**.  
   5. **HTTP referrers**: define the origins (URLs) allowed to make calls using the authorization. Example: https://erp.financial.com/dashboard.

  
:::(Warning) (Attention)
The HTTP referer is an HTTP header sent by the browser or HTTP client that informs the URL of the origin page of a request. You        can specify which URLs are authorized to make calls to your application, helping ensure that only trusted sources can interact with your APIs.  
:::


   6. Click **Continue**.

**Result**: you’ve added and configured an authorization for the client application that will consume the **A2A** APIs and can obtain an access token.

3. **Credential tab:**  
   1. Select an existing credential or create a new one. Example: **Local Administrator \- marksmith**.  
   2. If creating a new credential:  
      1. Select the **Device**.  
      2. Fill in the **Username** and **Password** for the access credential.  
      3. Click **Continue**.  
4. **Devices tab:**  
   1. Click **Add** to select devices linked to the authorization.  
   2. Click **Continue**.

5. **Protected information tab:**  
   1. Click **Add** to select the sensitive information authorized for access.  
   2. Click **Continue**.

   ::: (info) (Info) 
    Starting with version 3.26, the **Protected information** module has been replaced by **MySafe**. More information in [MySafe](/v4/docs/mysafe). 
    :::

6. **Review tab:**  
   1. Review all configurations.  
   2. If needed, click **Back** to make changes.  
   3. Click **Save**.



---
### Next steps

Explore also:

* **Other features**:

  * [How to manage applications in A2A](/v4/docs/how-to-manage-applications-in-a2a).  
  * [How to manage authorizations in A2A](/v4/docs/how-to-manage-authorizations-in-a2a).

* **Available A2A APIs**:

  * **[PAM Core](/v4/docs/api-a2a-pam-core)**: identity and permission management.  
  * **[Certificate Manager](/v4/docs/a2a-api-certificate-manager)**: certificate management.  
  * **[Related Users](/v4/docs/api-a2a-related-users)**: user and permission management.  
  * **[Dashboards](/v4/docs/api-dashboards)**: access to dashboards and metrics.  
  * **System**: management of Network Connector Agents.

* **Other Segura APIs**:

  * **[DevOps Secret Manager](/v4/docs/a2a-api-dsm)**: secret management for DevOps pipelines.  
  * **[MySafe](/v4/docs/api-mysafe)**: management of corporate personal and team passwords and other items.  
  * **[SCIM](/v4/docs/scim-api)**: provisioning and management of user identities.

* **Best practices**:

  * Consult our **[Best practices for use](/v4/docs/a2a-best-practices-for-use)**, which includes recommendations on security, token usage, and authorization.
