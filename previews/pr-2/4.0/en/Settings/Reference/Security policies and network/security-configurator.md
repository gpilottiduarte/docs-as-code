# Authentication security

In this document, you will find all the information about the **Security configurator** section of the Segura settings.

## Path to access

1. On Segura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **System parameters \> Security.**

## Segurity

### User accounts maintenance

| Item | Description |
| :---- | :---- |
| **Minute to expire the session** | Indicates the value, in minutes, for the session (login) to automatically expire. |
| **Lock account after login errors after X attempts until locking** | Indicates the number of unsuccessful login attempts in a login session before the account is locked. |
| **Lock disabled account**  | Checkbox to indicate if an inactive account will be locked. |
| **X days until lock** | If the **Lock disabled account** option is enabled, this will indicate the number of days without access before the account is locked. |
| **Force password change on first access** | Checkbox to indicate if the user must change their password on first access. |
| **Expire password** | Checkbox to indicate if the password will automatically expire. |
| **X days until password expires** | If the **Expire password** option is enabled, this will indicate the number of days until the password expires. |
| **Time between CSRF token (minutes)** | Maximum time for the user to log in before the CSRF token expires. |

:::(info) (Info)  
CSRF (Cross-Site Request Forgery) is an attack where a malicious website induces an authenticated user on another site, such as a bank, to perform an unwanted action, like a financial transfer. Without CSRF protection, a malicious link can perform this action as if it were the user themselves, using valid session cookies. To prevent this, CSRF tokens are used.  
:::

### Multi-factor authentication

| Item | Description |
| :---- | :---- |
| **Force multi-factor authentication to all users** | Checkbox to indicate if MFA authentication will be required for all users. |
| **Force digital certificate authentication to all users** | Checkbox to indicate if the use of digital certificates will be required for all users. |
| **Enable external Multi-Factor Authentication application** | Checkbox to indicate if the use of an external solution for MFA authentication will be allowed. |
| **Allow 'Trust this computer' up to a maximum XX hours** | Checkbox to indicate if the option to trust the computer will be enabled and for how long, at maximum, it will be possible to trust the computer. In other words, with this configuration enabled, it won't be necessary to use the token for the defined time period. |
| **Accept with tokens generated until XX second change** | Checkbox to indicate if expired authentication tokens will be accepted and for how long an expired token will be considered valid. |

### Password security level

| Item | Description |
| :---- | :---- |
| **XX  minimum characters for password** | Indicates the minimum number of characters for the password. |
| **X minimum numbers for password.** | Indicates the minimum number of numbers for the password. |
| **Restrict password reuse** | Checkbox to indicate if password reuse won't be allowed |
| **XX Last passwords that cannot be used** | If the **Restrict password reuse** option is enabled, indicates how many passwords, retroactively, cannot be reused. |
| **Require symbols in the password** | Checkbox to indicate if the password must contain symbols. |

### Access control by IP

:::(error) (Caution)
Note that when you select the deny all option, you'll need to include the address `127.0.0.1` (`localhost`) in the list of allowed IPs. This setting is essential because Segura's proxy performs access attempts internally and operates on `localhost`.
:::

| Item | Description |
| :---- | :---- |
| **Allow all/Deny all** | Radio button. Indicates whether all IP addresses will be denied or allowed. |
| **IP range** | IP ranges. |
| **Start** | Starting address of the IP range. |
| **End** | Ending address of the IP range. |
| **Action** | Dropdown menu. Indicates the action to be taken for this IP range. Can be **Deny all** or **Allow all**. |

### Adaptive MFA by location

| Item | Description |
| :---- | :---- |
| **IP range** | IP ranges. |
| **Start** | Starting address of the IP range. |
| **End** | Ending address of the IP range. |
| **Action** | Dropdown menu. Indicates the action to be taken for this IP range. Can be **Require MFA** or **Skip MFA**. |
