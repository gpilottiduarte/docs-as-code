# Administrative users

senhasegura provides two key administrative users for system management:   

* `mt4adm` for SSH access.
* `mt4web` for web interface administration. 

It’s crucial to prioritize the security of administrative passwords to prevent any unauthorized access or potential risks.

:::(Warning) (Important)
For security reasons, it is recommended to change the administrative username **'admin'** during first login. See the [How to change the default password](/v3-33/docs/orbit-cli-how-to-change-default-passwords) documentation for detailed instructions.
:::

::: (warning) (Caution)
Upon your initial login, you’ll be prompted to establish a new password. Make sure to choose a strong password and securely store it. Avoid saving the new password within the senhasegura application.
:::

::: (error) (Important)
After modifying administrative user passwords, prioritize their security. The loss of this password will lead to a permanent inability to access the senhasegura platform. 
:::
## SSH Access
For senhasegura versions 3.10 and above, use the following credentials for SSH access:

* **User**: `mt4adm`
* **Password**: `mt4adm` 
* **Port**: `59022`

For users on older versions, please contact the Support Team for login information.

## Password policy for the mt4adm user
For security reasons, senhasegura requires a change of the mt4adm user's password. This password must also follow a series of security standards when created. The criteria and rules that will be applied are detailed below:

* The user will have a maximum of three attempts to enter the password before an error is returned, preventing repeated attempts at improper access.
* The password must contain at least 12 characters.
* The password must include at least one lowercase letter, one uppercase letter, and one number.
* The password must be created with a special character (`!`, `@`, `#`, `$`).
* The new password must have at least 10 changes from the previous password to ensure that similar patterns are not used consecutively.
* The password must not be present in common password lists (`wordlists`) in several languages, preventing the use of weak or known passwords that could be the target of dictionary attacks.

:::(error) (Important)
For security reasons, this password policy can’t be parameterized.
:::

## Web Interface

For senhasegura versions 3.32 and above, use the following credentials for web interface administration:

* **User**: `mt4web`
* **Password**: `5enh@5eGuR@!`

For users on older versions, please contact the Support Team for login information.


