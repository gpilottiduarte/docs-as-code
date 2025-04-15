# Add user

Users are considered to be those with personal console access to the cloud providers' accounts.

CautionUsers and service accounts synchronism won't remove roles and permissions added directly to the Cloud. In this case, the permissions will be synced up, bringing the new ones to senhasegura. If the permission was inactivated/removed within senhasegura, it will also be removed from the Cloud Service Provider.

## Create user

To create a user, go to the menu **Cloud IAM > Cloud IAM > Users**.

1. Click on the action button and select **Add user**.
2. In the form, select the senhasegura user that will have access to the accounts.

**Caution:** If you are within an access group that has a template defined, the user list may only be displaying users from the department selected in the template.

3. In the **Settings** tab, select which provider you want to create the user at and fill in the rest of the fields:
   - **User responsible:** indicates which user of the senhasegura is responsible for the user at the cloud provider.

**Caution:** This information, also defines which senhasegura user can log into an instance in the Virtual Machines module using this Cloud user.

- **TTL (seconds):** defines the lifetime of the user and its credentials. This time is decreasing and starts to be valid from its creation and at the end the user will be automatically deleted from the provider.
- **Description:** Detailed user description.
- **Tags:** Tags used to make it easier to search filters and to segregate the user in access groups.

4. Select the tab corresponding to the Cloud Provider to be configured and fill out the following fields:

- AWS:
  - **Accounts:** Select which accounts this user should be created under.
  - **Policies:** Select the policies (permission group) that this user should have on the account. AWS limits up to 10 policies per user.
  - **Opsworks - Manage SSH Keys:** Check this box if you want the user to be added to the AWS OpsWorks service and have senhasegura manage their SSH key.

- Google Cloud:
  - **Organization roles:** Select which roles (permission groups), accounts and organizations the user should be added to..
  - **Project roles:** Select which roles (permission groups), accounts and projects the user should be added to.

- Azure:
  - **Creation type:** Select which user type is meant to be created. The options are: create a user or invite a user.
  - **Roles:** Select which roles (permission groups) the user must be added to.
  - **Groups:** Select which groups the user must be added to.

5. To finish, click on **Confirm**.
