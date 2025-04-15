# How to register a multi-factor authentication (MFA) provider

Registering a multi-factor authentication (MFA) provider is a crucial step in strengthening the security of information systems and ensuring that only authorized users have access to sensitive data and critical resources. MFA adds an extra layer of protection to the authentication process, requiring users to provide two or more verification factors before granting access to systems. This approach combines something the user knows (such as a password), something the user has (such as a security token or smartphone app), and sometimes something the user has (such as a fingerprint or facial recognition).

## Requirements

* Having the role of System Administrator.

## Register an MFA provider

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Authentication \> Multi-factor authentication \> Providers**.  
3. In the **Multi-factor Authentication** report, in the top bar, click **View actions**, represented by three vertical dots icon,  and select **New**.  
4. In the **Select the provider** window, the options are *RSA Authenticator, Duo Security, Radius* and *AuthID*.

:::(info) (Info)  
The following steps can be used for all multi-factor authentication providers, **except** for the **AuthID** and **Radius** providers which have their own fields. For information, access the document on How to register an **AuthID and Radius** provider.  
:::

### Register a provider

1. In the **Provider Registration** window, fill in the fields:  
   1. **Name:** name of the authentication provider.  
   2. **Enabled:** select **Yes.**  
   3. **Endpoint**: indicate the provider's endpoint.  
   4. **Client ID**: indicate the provider's **Client ID** value.  
   5. **Key**: indicate the provider's key.  
2. Click on **Save**.

## Edit an MFA provider

1. To modify a previously registered provider, access the **Multi-factor Authentication** report and, in the **Action** column, click on **Edit**, represented by the pencil and paper icon.  
2. The **Provider Registration** window will open in edit mode. Make the necessary changes and click **Save**.

## Disable an MFA provider

1. To deactivate a previously registered device, access the **Multi-factor authentication** report and, in the **Action** column, click on **Edit**, represented by the pencil and paper icon.  
2. The **Provider Registration** window will open in edit mode.  
3. In the **Enabled** field, select **No**.   
4. Click **Save**.

## Enable an MFA provider

1. To activate a previously registered device that is currently inactive, access the **Multifactor Authentication** report.  
2. In the filter bar, select **No** in the **Enabled** drop-down menu and click on **Filter**.  
3. In the **Action** column, click on **Edit**, represented by the pencil and paper icon.  
4. The **Provider Registration** window will open in edit mode.  
5. In the **Enabled** field, select **Yes**.   
6. Click **Save**.


***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
