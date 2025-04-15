# How to register a RSA multi-factor authentication provider

RSA SecurID is a two-factor authentication system that enhances security for digital resource access. The system generates tokens (numeric codes) that refresh every 60 seconds. Users must provide their standard password and the authentication code displayed in the RSA application.

## Prerequisites

* An appropriately configured RSA account.

## RSA SecurID Account Configuration

1. Access the RSA SecurID administrative interface.  
2. Register Segura as a new application.  
3. View application details and copy the `Endpoint`, `Client ID`, and `Key` information.

## Segura Configuration

:::(error) (Alert)  
As RSA SecurID operates as an online service, your Segura instance must have firewall authorization to communicate with its API.  
:::

1. On Segura, hover over the **Products Menu** in the navigation bar and select **Settings**.  
2. In the side menu, select **MFA \> Providers**.  
3. In the **Providers** report, click the **Add** button.  
4. On the **Select provider** screen, choose **RSA Authenticator**.  
5. On the **Provider registration** screen, complete the following fields:  
* **Name**: enter the RSA authentication provider name.  
* **Enabled**: specify whether the provider will be created as active or inactive.  
* **Endpoint**: enter the RSA Authenticator plugin endpoint.  
* **Client ID**: enter the client identifier.  
* **Key**: enter the client key.  
6. Click **Save** to complete the configuration.