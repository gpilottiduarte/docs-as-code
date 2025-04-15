# How to generate a TOTP authentication token

:::(Error) (Alert)
For the TOTP feature to work properly, your secret key must be entered in upper case.
:::

TOTP stands for "Time-Based One-Time Password." This type of two-factor authentication (2FA) adds a layer of protection to your access. On the senhasegura platform, you can use this type of authentication directly on the credential.

This article will show you how to set up this type of access.

## How to generate an authentication token

1. On the senhasegura platform, in the top left corner, click the **Grid Menu**, represented by the nine boxes, and select **PAM Core**.
2. In the side menu, select **Credentials > All**. A list of all credentials will be displayed.
3. In the **Action** column, click on the icon represented by the three vertical dots and select **Details** from the drop-down menu.
4. In the open pop-up window, you’ll find the **Token OTP** field at the top bar. This is your authentication token. It’s renewed automatically every 30 seconds. Copy and paste this token into the page you want to log in to.

:::(Info) (Info)
You can accelerate the generation of the OTP Token using the refresh button, represented by the icon with two clockwise arrows. In this way, you can accelerate the display of the next token when the old one is about to expire. Note that if the new token hasn’t yet been generated, the token update in the **Token OTP** field won’t occur.
:::

## Important considerations about automated access to social networks

When accessing social networks, it's important to note that you’ll face challenges related to the dynamics of these platforms. These challenges can impact your interaction with these social networks when using the senhasegura TOTP automation. These challenges may include the following:

- **Frequent updates:** social networks frequently change the structure and layout of their pages. These changes occur without warning and can prevent automation templates from working properly.

- **Dynamic security checks:** social networks implement strict security measures. Checks such as location confirmation, captchas, and other validations beyond the control of senhasegura's platform are common. Furthermore, these checks can vary from user to user and session to session. Because of this, security checks, such as **Trust this browser**, may be required with each new access.

:::(Warning) (Important)
- In some cases, social networks implement security mechanisms against attacks and unauthorized access. If the password for a social network can't be changed automatically, access the social network through senhasegura to make sure you don't have to solve a CAPTCHA. If it's necessary, solve the CAPTCHA manually so that the automatic change works.
- We recommend that you don't change your password more than twice a day, as some social networks implement extra checks in these scenarios for security reasons.
:::


---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).