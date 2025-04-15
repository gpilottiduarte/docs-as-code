To change the security settings for all users across the platform, go to **Settings ➔ System parameters ➔ Security**.

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28247%29.png)

## User accounts maintenance

* ***Minutes to expire session:*** Session inactivity timeout. Inactive web sessions automatically expire after a certain time. The default timeout is 30 minutes.
* ***Lock disabled account:*** Check this box if you want to remove accounts that have remained inactive for a certain number of days. Unchecked by default.
* ***Days until lock:*** Days required for an account to be considered inactive and eligible to be removed.
* ***Force password change on first access:*** Check this box if you want to force users to create a unique password when they log in for the first time. Checked by default.
* ***Expire password:*** Passwords automatically expire after a certain number of days. Unchecked by default.
* ***Days until password expires:*** Days required for a password to automatically expire

ImportantThe options to ***Lock disabled account***, ***Force password change on first access***, and ***Expire password*** are only available for customers using senhasegura's standard authentication provider.

Users who employ third\-party authentication providers need to set these options on their separate provider.

## Multi\-Factor Authentication (MFA)

* ***Force Multi\-Factor authentication to all users:*** Check this box to force all users, including the admin, to set up a second authentication factor for senhasegura. Consider the impact on your users' work routine before turning this feature on.  
WarningWhen enabling Force Multi\-Factor Authentication, it is important to take precautions to avoid locking users out of the application. Administrators should be mindful of the server time and ensure proper configuration using external MFA tools to prevent login issues.
* ***Force digital certificate authentication to all users:*** After the first login, MFA will not be required for additional login attempts for a few hours. This is a useful option when using tools that log into several SSH terminals simultaneously.
* ***Allow "Trust this computer" up to a maximum X hours:*** Some devices do not work with an NTP server,  creating short delays of a few seconds that impact TOPT authentications. By checking this box, you can set up a longer timeout limit for tokens.
* ***Accept with tokens generated until X second change:*** Some devices are not configured on NTP servers, generating an interval of seconds that can affect authentication using TOTP. In these cases, set the accepted interval in this property
* ***Enable use of an external multifactor authentication solution:*** Allows customers to choose a third\-party (cloud or on\-premises) SSO provider as an authentication tool, as long as it uses one of the protocols supported by senhasegura.

## Password security level

* ***Minimum characters for password:*** Minimum length of a password.
* ***Minimum numbers for password:*** Minimum number of numeric characters in the password.
* ***Restrict password reuse:*** New passwords must be different from previous passwords.
* ***N last passwords that cannot be used:*** Number of previous passwords that senhasegura will use as a reference to prevent password reuse.
* ***Require symbols in the password:*** Check this box if passwords must contain symbols.

ImportantThese options are only available for customers using senhasegura's standard authentication provider.

Users who employ third\-party authentication providers need to set these options on their separate provider.

## Access control by IP

You can choose to grant or deny access for certain IP addresses and network segments.

ImportantAccess control acts as an ***Allowlist*** or ***Denylist***. Be very careful not to accidentally restrict the access of the admin user that manages the settings.### Creating Allowlist rules

If you toggle the option *Deny All*, you can deny all access requests to your platform except those from IP addresses in your Allowlist.

1\. Choose the option ***Deny all***.

2\. Add the range of IP addresses that you want to have access to senhasegura and choose the ***Allow all*** option in the drop\-down list on the right.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1681311028153.png)

Now, only connections from these IP addresses will be able to perform authentications on senhasegura.

### Creating Denylist rules

Even if you toggle the option Allow All, you can still protect your platform from unwanted access by creating a list of IP addresses whose login attempts should be permanently blocked.

1. Choose the option ***Allow all***.
2. Add the range of IP addresses that you want to block access to and choose to the ***Deny all*** option in the drop\-down list on the right.

  
![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28248%29.png)

Creating Allowlist rules

  


 

### Adaptive MFA by location

This section allows you to set different MFA requirements for different IP ranges. You can make MFA **mandatory** for some users, but not for others, based on their IP address. This rule will be enforced when users try to:

* Log in
* Start a Session
* View Passwords

ImportantIf there are overlays between different IP ranges, a user will be subject to the first range they appear on.

ImportantThis configuration overrides **Force multifactor authentication for all users**. In case a user's IP address is listed in one of the ranges in this field, they will be subject to the rule established in **Adaptive MFA by location** instead.

