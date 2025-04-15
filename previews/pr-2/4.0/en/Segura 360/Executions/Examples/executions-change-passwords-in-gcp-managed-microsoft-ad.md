# Change passwords in GCP Managed Microsoft AD

This article provides a step-by-step guide on how to change passwords using credentials from [GCP Managed Microsoft AD](https://cloud.google.com/managed-microsoft-ad/docs/overview). It explains how to create a new template and set up automatic password changes using the LDAP plugin.


## Requirements

- The Segura must have access to the directory service managed by GCP;
- The certificate must be implemented in the GCP panel for the LDAPS of the domain to be managed;
- To perform the password change, it is necessary to use the **setupadmin (default)** user created by GCP, located in "**OU=Cloud Service Objects,DC=domain,DC=com**". More information at: [Default Active Directory objects in Managed Microsoft AD](https://cloud.google.com/managed-microsoft-ad/docs/objects#users).

---

## Steps

1. To create a new template, go to **Executions ➔ Settings ➔ Templates**.
2. Click on the **⋮** icon and then click **+ New**.
    1. In the **Execution template** window,
    2. Fill in the following information:
        - **Name:** Choose any name to identify this template, e.g. "AD - Change User Password - GCP AD MANAGED Services".
        - **Executor:** Select **LDAP**.
        - **Execution Type:** Select **Change Password**.
        - In the **Content box** section, insert the following text:
        ```
        #Protocol Version
        set-option LDAP_OPT_PROTOCOL_VERSION 3
        set-option LDAP_OPT_REFERRALS 0

        #Execute Bind
        #bind example "CN=senha,OU=Cloud Service Objects,DC=services,DC=com"
        bind "[your user bind Location]"

        #Locate User Entry
        #find path example "DC=services,DC=com"
        find "[your Location to find the users]" (&(objectClass=user)(sAMAccountName=[#USERNAME#]))

        #Change Password
        mod-replace unicodePwd "u([#NEW_PASSWORD#])"
        ```

3. After creating the template, navigate to **PAM Core** **➔ Credentials ➔ All**.
4. Find the credential for which you want to automate password changes.
5. Click the **⋮** icon on the right of the credential, then select **Edit**.
    1. In the **Credential** window,
    2. Go to the **Execution settings** tab.
    3. Under **Credential password change settings**,
    4. Enable **automatic change**.
    5. For **Change plugin**, select **LDAP**.
    6. For **Change template**, select the template created in step 2.
    7. Click **Save**.

The credential's password will be changed according to the password policy set using this template.