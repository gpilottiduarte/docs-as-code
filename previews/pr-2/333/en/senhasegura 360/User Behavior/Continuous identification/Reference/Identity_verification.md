# Identity verification

In this document, you’ll find all the information about the re-authentication screens that allow users to verify their identity in senhasegura after performing actions considered suspicious.

## Re-authentication methods

The re-authentication methods depend on prior configuration. The available options are:

- **senhasegura vault password**
- **Microsoft Active Directory (AD) password**
- **TOTP (Time-based One-Time Password) token**
- **Radius authentication**
- **Duo Security authentication**

In addition to re-authentication with the senhasegura user password, you can configure a multi-factor authentication code. In this case, when re-authentication is required, identity verification may randomly switch between the options registered in the account. For example, a user who has set up a TOTP token may be asked to reauthenticate using either the senhasegura user password or the TOTP.

:::(error) (Important!)
In the event of a reauthentication prompt, the application screen will be locked, and the user will not be able to continue using senhasegura without successful identity verification.
:::

## Verify your identity with the vault or AD access password screen

| **Item**   | **Description**                                                                                      |
|------------|-----------------------------------------------------------------------------------------------------|
| **Message** | Message informing the user that the senhasegura vault access password must be used for re-authentication. The AD password can also be used in this case. |
| **Password** | Field for password entry.                                                                           |
| **Verify**  | Button to complete identity verification.                                                            |

## Verify your identity with TOTP token screen

Access the document on [How to add multi-factor authentication](/v3-33/docs/how-to-add-multi-factor-authentication) for more information.

| **Item**   | **Description**                                                                                      |
|------------|-----------------------------------------------------------------------------------------------------|
| **Message** | Message informing the user that a TOTP token must be used for re-authentication.                   |
| **Token**  | Fields for entering the 6-digit token.                                                                |
| **Verify**  | Button to complete identity verification.                                                            |

## Verify your identity with the Duo Authenticator screen

Access the document on [How to authenticate with Duo](/v3-33/docs/user-management-duo-authentication) for more information.

| **Item**   | **Description**                                                                                      |
|------------|-----------------------------------------------------------------------------------------------------|
| **Message** | Message informing the user that the Duo Security authenticator must be used for re-authentication.  |
| **Continue** | Button to proceed with authentication.                                                               |

## Verify your identity with Radius screen

Access the document on [How to register a Radius multi-factor authentication](/v3-33/docs/how-to-register-a-radius-multi-factor-authentication-provider) for more information.

| **Item**   | **Description**                                                                                      |
|------------|-----------------------------------------------------------------------------------------------------|
| **Message** | Message informing the user that the RADIUS password must be used for re-authentication.             |
| **Password** | Field for entering the password.                                                                     |
| **Verify**  | Button to complete identity verification.                                                            |

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.