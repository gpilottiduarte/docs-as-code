# How to integrate with SAML 2.0

Segura supports integration with providers that support the SAML 2.0 protocol.  The SAML 2.0 protocol offers considerably greater robustness, more functionality, and better interoperability when compared to the SAML 1.1 protocol.

## Important

As of version 3.32, every time a user starts a new session in Segura using SSO via SAML, they will need to authenticate themselves again to the identity provider (Azure, Okta, etc.), regardless of whether they are already authenticated to the provider. This ensures that only the legitimate user can access the system.

This behavior adds a layer of security, ensuring that even if malicious actors are able to access browsing data related to external authentication — whether through phishing, session hijacking or XSS (Cross-Site Scripting) attacks — they won't be able to use it to break into the secure password. Requiring users to constantly reauthenticate prevents potential deviations, ensures compliance with regulatory standards, mitigates various attack vectors, and preserves the integrity and validity of user sessions.

The main benefits of this approach are:

* **Additional security layer:** regular reauthentication request mitigates the risk of session hijacking by acting as an additional security layer. If an attacker gains access to session data or cookies, they’ll still need user credentials to proceed.  
* **Compliance and auditing:** many regulatory frameworks and industry standards require periodic reauthentication to ensure that access controls aren't based solely on stale session data.  
* **Threat mitigation**: reauthentication requirement minimizes the impact of various attack vectors, such as phishing, CSRF (Cross-Site Request Forgery), or XSS (Cross-Site Scripting), where attackers can exploit cookies or stale session tokens.  
* **User identity assurance:** by continuously verifying the user's identity, the system ensures that the person accessing privileged resources is really who they claim to be, reducing the likelihood of unauthorized access.

## Requirements

* In order for Segura to be integrated with an SSO service that supports the SAML 2.0 protocol, this service must already be configured and have embedded users.  
* SAML can only be used as a WEB authentication provider for that application.

## Integrate SAML 2.0

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. In the side menu, select **Authentication >  Providers**.
3. In the **Providers** report, enable the **SAML provider**.  
4. In the side menu, go to **Authentication \> SAML \> Providers**.  
5. Click the **Add** button.
6. In the **SAML provider registration** screen, fill in the fields:  
    1. **Type**: SAML SSO provider type. Use the **SAML provider** option if you can't find your provider's model.  
    2. **Entity ID**: identification code of Segura in the SAML provider  
    3. **SAML provider metadata URL**: SAML service URL published by the provider (role descriptor). This XML contains the interface elements, signing or encryption keys, and the SSO protocol endpoints.  
    4. **Domain or public IP for URL Redirection**: add the domain or IP for Segura to generate its own URL redirection.

    :::(info) (Info)  
    This setting will only work if the domain or IP entered is public and accessible.  
    :::

    5. **Redirection URL**: URL of the Segura that will receive the authentication steps. Default: `https://Segura.mycompany/flow/saml/auth/assert/`, where the example domain, `Segura.mycompany`, must be replaced by the IP or access domain of the Segura instance.  
   6. **SSO Login URL**: URL that the SSO SAML provider provides to Segura to be accessed at the time of login.  
    7. **SSO Logout URL (Sign-out URL)**: URL that the SSO SAML provider provides to Segura to be accessed at the time of logout.  
    1. **Certificate (PEM format)**: enter the certificate information provided by your provider using SAML.  
7. Click **Save**.

After performing the process, a **Login using SAML** button is displayed on the Segura login screen. The authentication validity time rules are under the control of the SSO SAML provider.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).