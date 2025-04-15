# MFA

Multi-factor authentication provider registration is crucial for system security, ensuring that only authorized users can access sensitive data. MFA requires users to provide two or more verification factors, such as passwords, security tokens, or biometric data.

:::(warning) (Caution)

If you already have an MFA provider registered in your account, registering a new provider will deactivate the previous one.  

:::

## Registering an MFA Provider

1. In Segura, hover over the **Personal Menu** and select **MFA**.  
     
2. In the **Configure Authentication Token** modal, select one of the multi-factor authentication options. Available options include:  
   - **Authenticator Apps**: Select this option to register applications such as Google Authenticator, Authy, and others.  
   - **RSA Auth**: select this option to register your MFA through [RSA Security](https://www.rsa.com/).  
   - **Duo Sec**: select this option to register your MFA through [Duo Security](https://duo.com/).  
   - **Radius**: select this option to register your MFA through [Radius](/v4/docs/how-to-register-a-radius-multi-factor-authentication-provider).  
   - **AuthID**: select this option to register your MFA through [AuthID](https://authid.ai/).  
3. Choose your preferred option and click **Continue**.

Each authentication method has its own registration and usage guide, as each provider offers distinct functionalities and requirements. After selecting your MFA authentication method, follow the instructions according to the guide corresponding to your chosen option.

## Segura guides

- [How to register a RSA authentication provider](/v4/docs/how-to-register-a-rsa-authentication-provider).
- [How to register an AuthID multi-factor authentication provider](/v4/docs/how-to-register-an-authid-multi-factor-authentication-provider).
- [How to register the Duo Sec multi-factor authentication provider](/v4/docs/how-to-register-the-duo-sec-multi-factor-authentication-provider).
- [How to register a Radius multi-factor authentication provider](/v4/docs/how-to-register-a-radius-multi-factor-authentication-provider).
- [How to register Authenticators Apps for multi-factor authentication](/v4/docs/how-to-register-authenticators-apps-for-multi-factor-authentication).
- [How to manage a Multi-Factor Authentication (MFA) provider](/v4/docs/how-to-add-multi-factor-authentication).