# How to generate a TOTP authentication token

:::(Error) (Alert)
For the TOTP feature to work properly, your secret key must be entered in upper case.
:::

TOTP stands for "Time-Based One-Time Password." This type of two-factor authentication (2FA) adds a layer of protection to your access. On the Segura platform, you can use this type of authentication directly on the credential.

This article will show you how to set up this type of access.

## How to generate an authentication token

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Credentials > All credentials**. A list of all credentials will be displayed.
3. In the **Actions** column, click on **Actions** and select **Details** from the drop-down menu.
4. At the the open pop-up window, you’ll find the **Token OTP** field at the top bar. This is your authentication token. It’s renewed automatically every 30 seconds. Copy and paste this token into the page you want to log in to.

:::(Info) (Info)
You can accelerate the generation of the OTP Token using the refresh button, represented by the icon with two clockwise arrows. In this way, you can accelerate the display of the next token when the old one is about to expire. Note that if the new token hasn’t yet been generated, the token update in the **Token OTP** field won’t occur.
:::

## Important considerations about automated access to social networks

When accessing social networks, it's important to note that you’ll face challenges related to the dynamics of these platforms. These challenges can impact your interaction with these social networks when using the Segura TOTP automation. These challenges may include the following:

- **Frequent updates:** social networks frequently change the structure and layout of their pages. These changes occur without warning and can prevent automation templates from working properly.

- **Dynamic security checks:** social networks implement strict security measures. Checks such as location confirmation, captchas, and other validations beyond the control of Segura's platform are common. Furthermore, these checks can vary from user to user and session to session. Because of this, security checks, such as **Trust this browser**, may be required with each new access.

:::(Warning) (Important)
- In some cases, social networks implement security mechanisms against attacks and unauthorized access. If the password for a social network can't be changed automatically, access the social network through Segura to make sure you don't have to solve a CAPTCHA. If it's necessary, solve the CAPTCHA manually so that the automatic change works.
- We recommend that you don't change your password more than twice a day, as some social networks implement extra checks in these scenarios for security reasons.
:::


---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).