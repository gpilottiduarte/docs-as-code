# Password change in FreeIPA with LDAPS

This article is a step-by-step guide on how to change passwords in FreeIPA with LDAPS. The article explains how to create a new template and set up automatic password changes. It also addresses a limitation in FreeIPA where new passwords expire and provides a solution to avoid this issue.


## Requirements

- FreeIPA user to change their credentials with minimum permissions - **ipausers**. (FreeIPA version 4.6.8 API_Version: 2.237)
- Credential used for FreeIPA

:::(Warning) (Due to the limitations set by FreeIPA)
the only way to set the credential to change the password is to use the credential itself. This is necessary to avoid the credential expiring after the password is changed. [New Passwords Expired - FreeIPA](https://www.freeipa.org/page/New_Passwords_Expired).
:::


## Steps

1. Navigate to **Executions ➔ Settings ➔ Templates**.
2. Click on the **⋮** icon, and then click on **+ New** to create a new template.
    1. In the **Execution template** window,
    2. Fill in the following information:
        - **Name:** Choose any name to identify this template, e.g. "FreeIPA with Own Password".
        - **Executor:** Select **LDAP**.
        - **Execution Type**: Select **Change Password**.
        - For the **Content**, add the following:
        ```
        # Protocol Version
        set-option LDAP_OPT_PROTOCOL_VERSION 3
        set-option LDAP_OPT_REFERRALS 0

        # BIND (use the path that users are registered in the FreeIPA directory)
        bind "uid=[#USERNAME#],cn=users,cn=accounts,DC=domain,DC=com"

        # FIND 
        find "DC=domain,DC=com" (&(objectClass=person)(uid=[#USERNAME#]))

        # MOD-REPLACE
        mod-replace userPassword "[#NEW_PASSWORD#]"
        ```

1. After creating the template, then navigate to **PAM Core** **➔ Credentials ➔ All**.
2. Find the credential for which you want to automate password changes.
3. Click the **⋮** located on the right of the credential, then click **Edit**.
    1. Inside the **Credential** window,
    2. Select the **Execution settings** tab.
    3. In the **Credential password change settings**,
    4. Enable **automatic change**.
    5. **Change plugin**: Select **LDAP**.
    6. **Change template**: Select the template created in step 2.
    7. Click **Save**.

The credential's password will now be changed according to the set password policy.