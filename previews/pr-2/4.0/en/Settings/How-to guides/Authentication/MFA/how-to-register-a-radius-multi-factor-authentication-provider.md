# How to register a Radius multi-factor authentication provider

To implement Radius authentication, you must have a properly registered Radius provider in Segura.

## Register a Radius MFA Provider

1. In Segura, hover over the **Product Menu** and select **Settings**.  
2. In the side menu, select **MFA \> Providers**.  
3. In the **Providers** report, click the **Add** button.  
4. On the **Select provider** screen, choose **Radius**.  
5. On the **Provider Registration** screen, complete the following fields:  
   1. **Name**: enter the identifier name for the Radius provider.  
   2. **Enabled**: specify whether the provider will be created as active or inactive.  
   3. **Hostname**: enter the hostname or IP address where the Radius server is configured.  
   4. **Port**: enter the port number where the server is accessible.  
   5. **Key**: enter the Radius server key.  
   6. **Timeout (s)**: enter the waiting time in seconds before considering a timeout.  
6. Click **Save**.
