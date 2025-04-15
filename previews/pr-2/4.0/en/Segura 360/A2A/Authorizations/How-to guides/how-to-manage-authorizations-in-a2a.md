# How to manage authorizations in A2A

This document provides a step-by-step guide on how to manage authorizations for applications that will consume the APIs managed in **A2A**.

## Prerequisites 

* Application added to **A2A**. More information in How to manage applications in A2A.  
* System administrator permission.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **A2A**.  
2. In the side menu, select **Applications \> Authorizations**.

---
## Add authorization

To add an authorization for an application in **A2A**, follow these steps:

1. On the **Authorizations** screen, find the desired application or use the search filters.  
2. In the **Actions** column, click **Add authorization**, represented by the plus icon.  
3. On the **Add authorization** screen, fill in:  
    :::(error) (Alert)  
    Fields with an asterisk are required.  
    :::  
   1. **Configuration tab**  
      1. **Expiration date:** select the expiration date and time for the authorization, or leave the field blank for manual deactivation.  
      2. **Status***:*\*  set the authorization’s status to **Enabled** or **Disabled**.  
      3. **System:** select the system that will consume the API data.  
      4. **Environment:** select the environment in which the application will be used.  
      5. **Description:** enter additional notes about the authorization.  
      6. Click **Continue**.  
           
   2. **Security tab**  
      1. **Authorized resources:** select the resources available for the application. The options are *PAM Core, Certificate Manager, Task Manager, Dashboards, Web Proxy Session, Users, System,* and *A2A*.  
      2. **Enable encryption of sensitive information?\*:** decide if sensitive information such as credentials from the **PAM Core** resource and fingerprints from the **System** resource will be encrypted in the API response. The options are **Yes** or **No**.  
      3. **PAM resource permission:\*** choose the level of access to **PAM Core**. The options are **Read-only** and **Read and write**.  
      4. **Authorized IPs (use \* to allow any IP):** click **Add** to open the **Address** field and add IP addresses allowed to use the authorization for API calls. Use \* (asterisk) to allow any IP.  
      5. **Authorized HTTP referers (by default allow any source):** click **Add** to open the **Referer** field and add authorized URLs to make calls using the authorization. By default, any origin is allowed.  
      6. **Certificate validation \- Certificate fingerprint:** enter the certificate fingerprint for additional protection.  
      7. Click **Continue**.  
           
   3. **Credential tab**  
      1. **Access credential:** choose the credential linked to the authorization.  
      2. **Create a new credential:** check this box to create a new access credential for the authorization.  
      3. **Device:** select the device linked to the new credential.  
      4. **Username:** define the username of the new access credential.  
      5. **Password:** enter the password for the new access credential.  
      6. **Add:** click to add the credential to the authorization.  
      7. Click **Continue**.

   4. **Devices tab**  
      1. **Add:** click to open a table and add devices.  
      2. Click **Continue**.

   5. **Protected information tab**

      1. ##### **Add:** click to open a table and add protected information.

      2. ##### Click **Continue**.

   ::: (info) (Info) 

      Starting with version 3.26, the **Protected information** module has been replaced by **MySafe**. Learn more in MySafe. 

   :::

   6. **Review tab**  
      1. Review the authorization configuration summary.  
      2. Click **Back** to adjust settings or **Save** to complete.

## View authorization

To view the details of an application's authorization, follow the steps below:

1. On the **Authorizations** screen, find the desired application or use the search filters.  
2. Click the **Actions** **button** and select **View**.  
3. On the **Application authorization** screen, view information about the authorization. The data displayed will depend on the authentication method used. More information in **Authorizations**.  
4. Click **Show** to view sensitive information, such as the **Client Secret**.

## Edit authorization

To edit an authorization's details, follow the steps below:

1. On the **Authorizations** screen, find the desired authorization or use the search filters.  
2. Click the **Actions** **button** and select **Edit**.  
3. On the **Edit authorization** screen, make the necessary changes.  
4. Click **Save**.

## Download decryption key

If you choose to **Enable** **encryption of sensitive data** in the **Security tab** while adding the authorization, sensitive data such as credentials and the fingerprint of a **Network Connector Agent** will be protected in API responses. To download the decryption key and access this data in readable form, follow the steps below:

1. On the **Authorizations** screen, find the desired authorization or use the search filters.  
2. Click the **Actions** **button** and select **Download**.  
3. Click **Yes** on the confirmation pop-up to generate the decryption key.  
4. Copy the decryption key and keep it in a secure location.

More information in [How to decrypt sensitive data using a private key](/v4/docs/how-to-decrypt-sensitive-data-using-a-private-key).

## Disable authorization

Disabling an authorization is an alternative to setting an expiration date. If you didn’t specify an expiration date and time for the authorization, it’ll remain active until you disable it. Follow the steps below:

1. On the **Authorizations** screen, find the desired authorization or use the **Status \> Enabled** filter.  
2. In the enabled authorizations report, find the desired authorization or use the search filters.  
3. Click the **Actions** **button** and select **Edit**.  
4. In the **Configuration tab**, locate the **Status** component and select **Disabled**.  
5. In the **Review tab**, click **Save**.

## Enable authorization

To enable a disabled authorization, follow the steps below:

1. On the **Authorizations** screen, locate the **Status** filter and select **Disabled**.  
2. In the disabled authorizations report, find the desired authorization or use the search filters.  
3. Click the **Actions** **button** and select **Edit**.  
4. In the **Configuration tab**, locate the **Status** component and select **Enabled**.  
5. In the **Review tab**, click **Save**.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target="\_blank"}.