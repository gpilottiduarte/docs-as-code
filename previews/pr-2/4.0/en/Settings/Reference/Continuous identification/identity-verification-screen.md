# Identity verification

This document provides information about the reauthentication screens that allow users to verify their identity in Segura after performing events considered suspicious.

## Reauthentication methods

The reauthentication methods depend on prior configuration in **User menu > Configure MFA**.  
The available options are:

- **Segura vault Password**.  
- **Microsoft Active Directory (AD) Password**.  
- **TOTP Token (Time-based One-Time Password)**.  
- **RADIUS Authentication**.  
- **Duo Security Authentication**.  

In addition to reauthenticating with the Segura user password, it is possible to configure a multi-factor authentication code. In this case, when reauthentication is requested, identity verification may randomly alternate between the options registered in the account. For example, a user who has configured a TOTP token may be prompted to reauthenticate using the Segura user password or the TOTP.

:::(error) (Alert)
In the event of a reauthentication request, the application screen will be locked, and the user will not be able to continue using Segura without successfully verifying their identity.
:::

## Verify your identity screen with vault or AD password

| **Item**   | **Type** |**Description**                                                                                  |
|------------|----------|---------------------------------------------------------------------------------------|
| **Message** | Text     | Informs the user that the Segura vault access password must be used for reauthentication. The AD password can also be used in this case. |
| **Password** | Text field | Field to enter the password.                                                                 |
| **Verify**  | Button   | Completes identity verification.                                                |

## Verify your identity screen with TOTP token  

More information in [How to add multi-factor authentication](/v4/docs/how-to-add-multi-factor-authentication).

| **Item**   | **Type** |**Description**                                                                                  |
|------------|----------|---------------------------------------------------------------------------------------|
| **Message** | Text     | Informs the user that a TOTP token must be used for reauthentication.  |
| **Token**   | Text field | Field to enter the 6-digit token.                                                   |
| **Verify**  | Button   | Completes identity verification.                                |

## Verify your identity screen with Duo Authenticator  

More information in [How to authenticate with Duo](/v4/docs/user-management-duo-authentication).

| **Item**   | **Type** |**Description**                                                                                  |
|------------|----------|---------------------------------------------------------------------------------------|
| **Message** | Text     | Message informing the user that the Duo Security authenticator must be used for reauthentication. |
| **Continue** | Button   | Proceeds with authentication in the Duo Authenticator.                                                     |

## Verify your identity screen with RADIUS  

More information in [How to register a Radius multi-factor authentication provider](/v4/docs/how-to-register-a-radius-multi-factor-authentication-provider).

| **Item**   | **Type** |**Description**                                                                                  |
|------------|----------|---------------------------------------------------------------------------------------|
| **Message** | Text     | Message informing the user that the RADIUS password must be used for reauthentication. |
| **Password** | Text field | Field to enter the password.                                                                 |
| **Verify**  | Button   | Completes identity verification.                                |