# How to register the Duo Sec multi-factor authentication provider

This document outlines the systematic process of implementing Duo Security authentication within the Segura environment. Duo Security provides robust Multi-Factor Authentication (MFA) capabilities, enhancing your organization's security posture through advanced identity verification protocols.

## Creating a Duo Application

### Prerequisites

* Duo Security account.  
* Duo Security properly registered in Segura.

### Create an Application in Duo Security

1. Log in to the **Duo Admin Panel.**  
2. In the left sidebar menu, select **Applications.**  
3. Click **Protect an Application.**  
4. In the search bar, type **Web SDK.**  
5. On the right, click **Protect** to configure the application.  
6. Copy the `Client ID`, `Client Secret`, and `API hostname`. You’ll need this information to complete the configuration.  
7. In the left sidebar menu, select **Settings.**  
8. Fill in the application-related information.  
9. Click **Save.**

### Register Duo Security as MFA Provider in Segura

1. On Segura, hover over the **Products Menu** and select **Settings.**  
2. In the sidebar menu, select **MFA \> Providers.**  
3. In the **Providers** report, click the **Add** button.  
4. On the **Select provider** screen, choose **Duo Security.**  
5. On the **Provider registration** screen, complete the following fields:  
   1. **Name**: enter the identifier name for the Duo Security provider.  
   2. **Enabled**: specify whether the provider will be created as active or inactive.  
   3. **Endpoint**: enter the API hostname value generated in Duo Security.  
   4. **Client ID**: enter the `Client ID` value generated in Duo Security.  
   5. **Client Secret**: enter the `Client Secret` value generated in Duo Security.  
6. Click **Save.**

## Configure Duo as User MFA

:::(warning) (Caution)
Direct network connection between Segura and Duo Security is required. Proxies aren’t supported.  
:::

### Prerequisites

* Duo Mobile application.  
* DNS configuration.

:::(warning) (Caution)
Segura must have DNS configured and a valid certificate to establish connectivity with the DUO endpoint. In the **Orbit** configuration, the **URL Application** field must also contain the instance DNS.  
:::

### Configure Duo Security in Segura

1. Log in to your Duo application.  
2. Select **Duo Mobile** as the authentication method.  
3. Select your country from the dropdown list.  
4. Enter your mobile number.  
5. Click **Add phone number.**  
6. Click **Yes, it's correct** to confirm your phone number.  
7. Click **Next.**  
8. Open the **Duo Mobile** application on your phone.  
9. Add the account by scanning the QR code shown on screen.  
10. When you receive confirmation that **Duo Mobile** has been added, click **Continue.**  
11. To finish, click **Log in with Duo.**

After completion, when accessing Segura, you'll receive a push notification on your Duo Mobile application to complete the authentication.  