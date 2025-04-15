# How to manage access policies

This document provides information on how to manage access policies. Access policies establish fundamental guidelines to ensure the security and proper control of resources, systems, and information within **DevOps Secret Manager**, making up a fundamental part of the security of your secrets.

## Create an access policy

1. On Segura, in the navigation bar, hover over the **Products menu** and select **DevOps Secret Manager**.  
2. In the side menu, select **Access control \> Access policies.**  
3. On the **Access Policies** screen, click the **Actions** button and select **Add** from the drop-down menu.

You will be directed to the **Add access policy** screen, where you must fill in the following fields:

### General tab

1. **Name of the access policy**: set a name for your new access policy.  
2. **Status**: define whether the access policy will be active or inactive.  
3. **Description**: set a description for your new access policy.  
4. Click **Continue**.

### Users tab

:::(warning) (Caution)  
Users who are entered into more than one access policy will have the most restrictive policy settings applied.  
:::

1. Click **Add** to open the **Users** modal.  
2. Select the users you want to add to the new access policy.  
   1. You can filter users using the search field.  
   2. You can select more than one user at the same time.  
3. Click **Add**.  
4. Users will appear in the **Users** table.  
5. Verify the data and click **Continue**.

### Secrets tab

1. **Users can view secrets**: select so that users of this new access policy are able to view the secrets already registered in the application.  
2. **Requires reason**: select so that users of this new access policy need to send a justification to access or view the secrets.  
3. **Require approval**: select so that users of this new access policy, in addition to needing to send a justification to access or view the secrets, also need an approval from an approving user.  
4. **Approvals required**: indicate how many approvals are required for users of this new access policy to interact with secrets.  
5. **Disapprovals required** to cancel: indicate how many failures are required for the user of this new access policy to be prevented from interacting with a secret.  
6. **Approval in levels**: indicate whether the user of this new access policy will need a level approval to interact with a secret.  
7. Click **Continue**.

### Approvers tab

:::(warning) (Caution)
The approving user must have at least the PAM Operator profile to have access to the flow approval screen.  
:::

1. Click **Add** to open the **Users** modal.  
2. Select the users you want to add to the new access policy.  
   1. You can filter users using the search field.  
   2. You can select more than one user at the same time.  
3. Click **Add**.  
4. Users will appear in the **Users** table.  
5. In the **Users** table, select the level of each approver through the **Level** dropdown menu.  
   1. An approving user can be level 1, 2, or 3\.  
   2. A user can have only one level.  
   3. Each level can have more than one registered user.  
2. **Governance ID required when justifying?**: indicate if a governance code will be mandatory throughout the justification of this new access policy.  
3. **Always add the user manager to the approvers?:** indicate if the user manager will always be an approving user of this new access policy.  
4. Verify the data and click **Continue**.

### Filters tab

In this session you'll determine the filters of your new access policy.

#### Application

1. **Line of business**: checkbox with the business lines to which indicated applications are part.  
2. **Application types**: checkbox with the types of applications to which the indicated applications are part.  
3. **Applications names**: indicate which applications this access policy will be allowed. Names must be separated by a comma.  
4. **Applications tags**: indicate which application tags this access policy will be allowed. Tags must be separated by a comma.

:::(error) (Attention)  
By configuring the filtering options for **Empty** in **Line of business** and **Application Types**, users who are members of the access policy will only see applications that do not have data in these fields. Thus, selecting the **Empty** option will result in the display of applications with **Line of business** and **Types** fields unfilled. On the other hand, if the **Empty** option is not selected, applications with these empty fields will not appear in the results.    
:::

#### Authorizations

:::(info) (Info)  
Only accesses that belong to applications granted by the rules of application of this access policy will be granted.    
:::

1. **Systems**: indicate the systems that this access policy will be allowed. Systems names must be separated by a comma.  
2. **Environments**: indicate the environments that this access policy will be allowed. Environment names must be separated by commas.  
3. Click **Continue.**

### Criteria tab

:::(info) (Info)  
You can use the wildcard `[#username#]` which will be replaced by the username during the processing of accesses    
:::

1. **Secrets names** (comma-separated): indicate which secrets this access policy will be allowed. Names must be separated by a comma.  
2. Secret **Environments (comma-separated):** indicate the secret's environments that this access policy will be allowed. Environment names must be separated by commas.  
3. **Secrets tags** (comma-separated): indicate which secrets tags this access policy will be allowed. Tags must be separated by a comma.  
4. Click **Continue**.

:::(warning) (Caution)
Access will only be granted to secrets that:
* Don't have any authorization.  
* Belong to the authorization granted by the authorization rules of this access policy.
:::

### Review tab

Review the details of your new access policy carefully. If everything is correct, click **Save**. Any information can be corrected by clicking **Back** or by navigating through the tab system at the top of the form.  