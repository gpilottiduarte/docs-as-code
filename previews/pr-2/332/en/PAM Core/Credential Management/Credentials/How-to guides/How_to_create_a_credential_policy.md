# How to create a credential policy

A credential policy is a set of rules that regulate how an organization manages user authentication credentials. These policies should specify rules for password complexity, expiration, and storage, among other aspects, ensuring that user credentials are robust, secure, and updated frequently, thus reducing the risk of unauthorized access to the system.

## How to create a credential policy in senhasegura

1. In the top left corner, click **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Settings > Credentials > Credential policies**.
3. Click the View actions icon, represented by the three vertical dots, and select **+ New policy**.

A pop-up window called **Credential Policy** will open. Fill in the fields accordingly:

1. **Credential policy name**: a name that will identify the credential policy on the platform.
2. **Active**: select **Active** to keep the policy active on the platform.
3. On the **Settings** tab:
    1. **Password strength**: in the drop-down menu, select the password strength criteria you want. You can register the criteria for **Password Strength**.
    2. **Priority**: defines the priority for applying the policy if senhasegura finds more than one policy that applies to the credential. The higher the priority, the higher the number in this field.
    3. **Allow simultaneous viewing?**: the password can be viewed simultaneously. Regardless of which user has custody of the password, all others belonging to this policy can view the password.
    4. **Allow simultaneous session**: enabling this option allows users to perform proxy sessions simultaneously with the same credential. With this option disabled, only one session will be allowed at a time.
    5. **Expiration time per query**: the interval in which senhasegura will automatically change the password after a user has viewed it. In the first field, enter a number; in the second field, enter the unit (Months, Days, Hours, or Minutes).
    6. **Expiration time:** defines the maximum period of validity for a password, starting from the last time it was changed. After the defined period, the password will expire automatically, regardless of frequency of use, including logins and remote sessions. The user will be required to choose a new password to continue accessing the system. Example: If you set this field to *3 Months*, the user's password will expire 3 months after the last password change, even if they use it regularly for any type of access, including remote sessions. In the first field, enter a number; in the second field, enter the unit (Months, Days, Hours, or Minutes).
    7. **Reuse the same password for**: establishes how long credentials from the same policy receive the same password. The count starts when the first password change for a credential occurs in that policy. For example, if the field has a time limit of five hours, all the other credentials that carry out change executions within this period will receive the same password. In the first field, enter a number; in the second field, enter the unit (*Months, Days, Hours, or Minutes*).

:::(Error) (Important)
* When the **Allow simultaneous viewing?** option is enabled, and a user withdraws the password, which will cause the password to remain in their custody, another user will still be able to withdraw the password.
* When the **Allow simultaneous session?** option is enabled, and a user withdraws the password, which will cause the password to remain in their custody, another user will not be able to withdraw the password.
:::

:::(Info) (Info)
If you set the password strength to "High," the system will automatically block the options for passwords to be reused.
:::

4. In the **Expiration days** section, select the **Every Day** checkbox if you want the password to expire on any day of the week. If not, select the checkbox for the days you want the passwords to expire. Remember that some credentials can’t be recycled daily, either because of the target device's security policies or because of any impacts it may have on the business.
5. In the **Expiration Times** section:
    1. **Add time per appointment**: click on the **"+"** button, represented by the plus sign, to add expiration criteria per appointment time. When you click on the button, a drop-down menu will appear. To add an hour, select the desired time from the drop-down menu. If you want to delete it, click the trash can icon next to the time field.
    2. **Add time by lapse**: click on the **"+"** button, represented by the plus sign, to add expiration criteria by lapse time. To add a time, select the time you want from the drop-down menu. If you want to delete it, click the trash can icon next to the time field.
6. In the **Criteria** tab:
    1. **Device (sep. by comma)**: indicate which devices will be affected by this policy.
    2. **Model (sep. by comma)**: indicate which device models will be affected by this policy.
    3. **Additional information (sep. by comma)**: indicate relevant information about the policy.
    4. **Device tags (sep. by comma)**: indicate which device tags are affected.
    5. **Credential tags (sep. with comma):** indicate which credential tags are affected.
    6. In the **Site** section, indicate which sites will be affected by the policy. Check **All** to apply the policy to all registered sites.
    7. In the **Device type** section, indicate which devices will be affected by the policy. Check **All** to apply the policy to all registered devices.
    8. In the **Credential type** section, indicate which credential types will be affected by the policy. Check **All** to apply the policy to all registered credentials.

:::(Error) (Important)
Changing the criteria is impossible once the policy has been saved.
:::

7. Click **Save**.

:::(Warning) (Warning)
The above fields determine actions that influence the client's business rules or the target device's security rules. Configuration errors in these fields can lead to the credential becoming unavailable.
:::

## How to edit a credential policy

1. In the top left corner, click **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Settings > Credentials > Credential policies**.
3. On the list screen, identify the policy you want to edit and click **Edit** in the **Action** column, identified by the paper and pencil icon.
4. Edit the credential policy options according to the form described in the section **How to create a credential policy in senhasegura**.
5. Click **Save**.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).