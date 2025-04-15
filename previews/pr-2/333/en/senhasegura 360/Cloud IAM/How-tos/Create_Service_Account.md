# Add service account

Service accounts are those of programmatic access, i.e., access of applications and machines to cloud providers' accounts.

## Create Service Account

To create a service account, go to the menu **Cloud IAM > Cloud IAM > Service accounts**:

1. Click on the Actions button and select the option **Add service account**.
2. In the form, enter the service account name that will access the providers' accounts.  
  
**Caution:** If you are a member of an access group with a template defined, when inserting the user, he must follow the rule established in the template.

3. In the **Settings** tab, select which provider you want to create the user at and fill in the rest of the fields:  
   - **User responsible:** indicates which senhasegura user is responsible for the service account at the cloud provider.  
   - **TTL (seconds):** defines the lifetime of the service account and its credentials. This time decreases and starts to be valid from its creation, and upon expiration, the service account will be automatically deleted at the provider.  
   - **Description:** detailed description of the service account  
   - **Tags:** tags used to facilitate filter searches and segregate the service account into access groups

4. Select the tab corresponding to the Cloud Provider to be configured and fill out the following fields:

**AWS:**

- **Accounts:** Select which accounts this service account should be created under.
- **Policies:** Select the policies (permission group) that this service account should have on the account. AWS limits up to 10 policies per service account.
- **Opsworks - Manage SSH Keys:** Check this box if you want the service account added to the AWS OpsWorks service and the SSH key for it to be managed by senhasegura.

**Google Cloud:**

- **Organization roles:** select which roles (permission groups), accounts and organizations the service account should be added to.
- **Project roles:** select which roles (permission groups), accounts and projects the service account should be added to.

**Azure:**

- **Supported Account Types:** specify who can use the service account.
- **URI redirect:** a URI redirect is where the Microsoft identity platform redirects a user and sends security tokens after the authentication.
- **API Permissions:** select which permissions the service account must have.

5. To finish, click on **Confirm**.
