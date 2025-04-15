# How to re-authenticate

The request to verify your identity may occur if you have performed an action considered suspicious according to the settings established by the administrator. In such cases, your session will be locked, and you’ll only be able to continue using Segura after successfully re-authenticating.

This document provides a step-by-step guide on how to re-authenticate in **Segura**.

## Prerequisites
- **Continuous identification** feature configured by the administrator. More information in [How to manage Continuous identification](/v4/docs/how-to-manage-continuous-identification).
- Re-authentication triggered.

---

More information on how to configure multi-factor authentication in  [How to add multi-factor authentication](/v4/docs/how-to-add-multi-factor-authentication), [How to authenticate with Duo](/v4/docs/user-management-duo-authentication), and [How to register a Radius multi-factor authentication](/v4/docs/how-to-register-a-radius-multi-factor-authentication-provider).

## Verify your identity

As soon as Segura requests identity verification, your session will be locked, and you'll see the **Verify your identity** screen. Follow the steps below to reauthenticate and continue using Segura.

:::(Info) (Info)
The re-authentication method may vary depending on the method you configured in Segura. 
:::


1. On the **Verify your identity** screen, read the message indicating the requested authentication method and fill in the appropriate field with your local password, Microsoft Active Directory password, TOTP token, RADIUS authentication, or Duo Security authentication.

:::(info) (Info)
After successful re-authentication, the attempt count will be reset. This means that, for example, if the parameter **View attempts at prohibited times** is set to 3, after making these 3 attempts and re-authenticating in Segura, re-authentication will only be requested again if you make 3 more attempts in your next logged session.
:::

---

Do you still have questions? Reach out to the [Segura community](https://community.Segura.io/){target="_blank"}.