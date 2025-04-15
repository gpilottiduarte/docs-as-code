# How to use MFA authentication with EPM Linux

**EPM Linux** supports multi-factor authentication (MFA) for domain and local users. This guide explains how to set up and use MFA on **EPM Linux** for local and domain users.

## Requirements

* Integration with Active Directory (AD) or another centralized authentication service to support domain user authentication.  
* Configuration of Segura for the integration of MFA verification.  
* Availability of an MFA server, such as Google Authenticator, Microsoft Authenticator, or a compatible TOTP solution.

## Enable MFA for Local Users

1. In Segura, in the upper right corner, hover over the **Products Menu** and select **EPM**.  
2. In the side menu, select **Management \> Settings \> Parameters**.  
3. In the **Authentication** section, in the option Enable multi-factor authentication at login, select **Yes**.  
4. Click on **Save**.

After enabling MFA for **EPM**, whenever a user logs into **EPM Linux**, the MFA token will be requested after the user's password.