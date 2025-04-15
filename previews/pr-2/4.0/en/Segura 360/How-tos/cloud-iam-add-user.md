# Add user

Users are considered to be those with personal console access to the cloud providers' accounts.

:::(Warning) (Attention)
Users and service accounts synchronism won't remove roles and permissions added directly to the Cloud. In this case, the permissions will be synced up, bringing the new ones to Segura. If the permission was inactivated/removed within Segura, it will also be removed from the Cloud Service Provider.
:::

## Create user

To create a user, follow the steps:

1. Access **Cloud IAM \> Identity management \> Users**.  
2. Click the **Add** button.  
3. In the **User \*** field, enter a name for the user.
    :::(Warning) (Attention)
    If you are within an access group that has a template defined, the user list may only be displaying users from the department selected in the template.
    :::
4. In the **User responsible** field, select the user responsible for the user.
    :::(Info) (Info)
    This information also defines which Segura user can log into an instance in the virtual machines module using this cloud user.
    :::
5. In the **TTL (seconds)** field, enter the amount of seconds to define the lifetime of the user and its credentials.  
6. (Optional): In the **Description** field, enter a description.  
7. (Optional): In the **Tags** field, enter tags.  
8. Navigate to the providers’ tab you want to register.

:::(Info) (Info)
You can register [AWS](/v4/docs/pt/add-user#adicionar-um-usuário-aws), [Azure](/v4/docs/pt/add-user#adicionar-um-usuário-azure) e [Google Cloud](/v4/docs/pt/add-user#adicionar-um-usuário-google-cloud) accounts at the same time.
:::

## Add an AWS user

To add an AWS user, follow the steps: 

1. Access **Cloud IAM \> Identity management \> Users**.  
2. Add or edit an user.  
3. Go to the **AWS** tab.  
4. In the **Accounts** section, select which accounts this user should be created under.  
5. In the **Policies** section, select the policies (permission group) that this user should have on the account. AWS limits up to 10 policies per user.  
6. Go to the **Review** tab and click **Save**.

## Add an Azure service account

To add an Azure service account, follow the steps: 

1. Access **Cloud IAM \> Identity management \> Users**.  
2. Add or edit an user.  
3. Go to the **Azure** tab.  
4. In the **Creation type** section,  
5. In the **Roles** section,  
6. In the **Groups** section,  
7. Go to the **Review** tab and click **Save**.

## Add a Google Cloud service account

To add a Google Cloud service account, follow the steps: 

1. Access **Cloud IAM \> Identity management \> Users**.  
2. Add or edit an user.  
3. Go to the **Google Cloud** tab.  
4. In the **Organization roles** section, select which roles (permission groups), accounts and organizations the user should be added to.  
5. In the **Project roles** section, select which roles (permission groups), accounts and projects the user should be added to.  
6. Go to the **Review** tab and click **Save**.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).