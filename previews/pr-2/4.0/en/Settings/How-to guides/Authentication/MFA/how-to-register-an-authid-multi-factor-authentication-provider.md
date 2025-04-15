# How to register an AuthID multi-factor authentication provider

This document outlines the systematic process of implementing AuthID authentication within the Segura environment. AuthID provides robust Multi-Factor Authentication (MFA) capabilities, requiring proper provider registration and configuration

## Registering an AuthID MFA Provider

1. In Segura, hover over the **Product Menu** and select **Settings**.  
2. In the side menu, select **MFA \> Providers**.  
3. In the **Providers** report, click the **Add** button.  
4. On the **Select provider** screen, choose **AuthID**.  
5. On the **Provider Registration** screen, complete the following fields:  
   1. **Name**: enter the identifying name for the AuthID provider  
   2. **Active**: specify whether the provider will be created as active or inactive  
   3. **External ID**: enter the unique external identifier provided by AuthID for this specific provider  
   4. **API Key Value**: enter the API key provided by AuthID to authenticate requests from this provider  
6. Click **Save**.
