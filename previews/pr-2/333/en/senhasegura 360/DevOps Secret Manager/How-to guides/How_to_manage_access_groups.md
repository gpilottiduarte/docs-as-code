# How to manage access groups

## Create an access group

:::(info) (Info)
Synchronized users will have their permissions replaced if synchronization is enabled. Check your synchronization groups for changes.
:::

To create an access group in DevOps Secret Manager, follow the instructions below:

1. On senhasegura, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager.**
2. In the side menu, select **Access control > Access groups.**
3. You'll be taken to the page with a list of all the groups registered with senhasegura.
4. In the top bar, click on **View Actions**, represented by the three vertical dots, and select **New Group**.

In the **Access Group Registration** window, fill in the following:

1. **Access group name**: fill in a name for the access group. This is the name that will identify the access group in senhasegura.
2. **Enabled**: select whether you want the group to be created already active or not. This is set to Yes by default.
3. **Description**: enter a brief description of the access group.

### Settings tab

1. In the **Secrets preview setting**section, fill in the following information:
   1. **Users can view secret**: checkbox, check to allow users to view the secrets registered in senhasegura.
   2. **Requires reason**: checkbox, check to require the user to justify viewing a registered secret.
   3. **Requires approval**: checkbox, check to require that viewing the secret requires approval. This approval must be done by a user with the role of approving user.
   4. **Approvals required:** indicate the number of approvals required for the user to view the secret. By default, the value is 1.
   5. **Disapprovals required to cancel:** enter the number of approvals required to cancel the user's request. By default, the value is 1.
   6. **Approval in levels**: checkbox, indicate whether you want the user to require approvals at different levels.
   7. **Governance ID required when justifying?:** check if you want the user to need a governance code filled in on the justification request. By default, this is set to No.
   8. **Always add user manager to the approvers?**: indicate whether you want to automatically add the user's manager to the group of approvers of their justification. By default, this is set to No.
      1. **Note**: the person responsible for the department is the user's manager.

### Criteria tab

1. In the **Application** section, fill in the following information:
2. **Application names (comma-separated)**: indicate which applications this access group will be allowed to use. Names must be separated by a comma.
3. **Application tags (comma-separated)**: indicate which application tags this access group will be allowed to use. The tags must be separated by a comma.
4. **Line of Bbusiness**: checkbox with the lines of business to which the indicated applications belong.
   1. **Be aware of the following behavior of access groups**: by setting the filtering options to `Empty` in **Line of Business** and **Application Types**, users who are members of the access group will only see applications with no data in these fields. Thus, selecting the `Empty` option will result in the display of applications with unfilled **Line of Busines**s and **Application Types** fields. On the other hand, if the `Empty` option isn't selected, applications with these empty fields won't appear in the results.
5. **Application Types**: checkbox with the types of applications to which the indicated applications belong.

:::(info) (Info)
You can use the `[#username#]` wildcard, which will be replaced by the user's name during access processing.
:::

2. In the **Authorizations** section, fill in the following information.
   1. **Systems (comma-separated)**: indicate the systems this access group will be allowed to access. System names must be separated by a comma.
   2. **Environments (comma-separated)**: indicate the environments this access group will be allowed to access. The names of the environments must be separated by commas.

:::(info) (Info)
Access will only be granted to authorizations belonging to applications granted by the application rules of this access group.
:::

3. In the **Secrets** section, fill in the following information:
   1. **Secrets names (comma-separated)**: indicate the secrets the access group will be allowed. The secrets must be separated by a comma.
   2. **Secret environments (comma-separated)**: indicate the environments the secrets will be allowed to access. The names of the secret environments must be separated by a comma.
   3. **Secret tags** **(comma-separated)**: indicate which secret tags this access group will be allowed to use. The tags must be separated by a comma.

:::(info) (Info)
Access will only be granted to secrets who:
* Don't belong to any authorization.
* Belongs to an authorization granted by the authorization rules of this access group.
:::

### Users tab

To add a user to the access group, click on the sum icon next to the word **Users**. This will open the **System users** modal, showing a list of all the users registered with senhasegura. Choose the users who will be part of the access group by selecting the checkbox next to the user's name and click **Add**.

:::(info) (Info)
Users who belong to more than one access group will have the settings of the most restrictive group applied.
:::

### Approvers tab

To add an approver user to the access group, click on the sum icon next to the word **Approvers**. This will open the **Approvers** modal, which will show a list of all the users who are registered with senhasegura. Choose the users who will be part of the approvers' user group by selecting the checkbox next to the user's name and click **Add**.

:::(warning) (Caution)
For the approver user to access the workflow approval screen, they must have the minimum PAM Operator profile.
:::

To finish creating the access group, click **Save**.

## Update an access group

To update an access group already registered with senhasegura, follow the steps below:

1. On senhasegura, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Access control > Access groups**.
3. You'll be taken to the page with a list of all the groups registered with senhasegura.
4. Identify the access group you want to update and, in the **Action** column, click **Update**, represented by the pencil and paper icon.

The **Access group registration** window will open in edit mode and you can edit the access group data.

## Reprocess access groups

Occasionally, group information may not be visible to users or displayed incorrectly due to configuration problems. The **Reprocess groups** feature can reprocess all group information in such cases. Therefore, if any information isn't visible to you, it may be due to some initial processing problem, which can be corrected by reprocessing.

To use this feature, follow the steps below:

1. On senhasegura, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager.**
2. In the side menu, select **Access control > Access groups.**
3. In the list of groups at the bottom right, click **Reprocess groups.**
4. In the **Confirmation** modal, click **Yes**.
5. A window with a success message will appear after the reprocessing has been completed.

:::(error) (Alert)
When reprocessing groups, some users may lose access to DSM entities.
:::

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).