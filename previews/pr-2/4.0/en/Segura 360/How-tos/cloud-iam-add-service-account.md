# Add service account

Service accounts are those of programmatic access, i.e., access of applications and machines to cloud providers' accounts.

## Add a service account

To add a service account, follow the steps: 

1. Access **Cloud IAM \> Identity management \> Service accounts**.  
2. Click the **Add** button.  
3. In the **Name \*** field, enter the name for the service account.
    :::(Warning) (Attention)
    If you are a member of an access group with a template defined, when inserting the user, he must follow the rule established in the template.
    :::
4. In the **User responsible** field, select the user responsible for the service account.  
5. In the **TTL (seconds)** field, enter the amount of seconds to define the lifetime of the service account and its credentials.  
6. (Optional): In the **Description** field, enter a description.  
7. (Optional): In the **Tags** field, enter tags.  
8. Navigate to the providers’ tab you want to register.

:::(Info) (Info)
You can register [AWS](/v4/docs/add-service-account#add-an-aws-service-account), [Azure](/v4/docs/add-service-account#add-an-azure-service-account) and [Google Cloud](/v4/docs/add-service-account#add-a-google-cloud-service-account) service accounts on the same screen at the same time.
::: 

## Add an AWS service account

To add an AWS service account, follow the steps: 

1. Access **Cloud IAM \> Identity management \> Service accounts**.  
2. Add or edit a **Cloud IAM** account.  
3. Go to the **AWS** tab.  
4. In the **Accounts** section, select which accounts this service account should be created under.  
5. In the **Policies** section, select the policies (permission group) that this service account should have on the account. AWS limits up to 10 policies per service account.  
6. Go to the **Review** tab and click **Save**.

## Add an Azure service account

To add an Azure service account, follow the steps: 

1. Access **Cloud IAM \> Identity management \> Service accounts**.  
2. Add or edit a **Cloud IAM** account.  
3. Go to the **Azure** tab.  
4. In the **Supported Account Types**,   
5. In the **URI redirect**,   
6. In the **API Permissions**,   
7. Go to the **Review** tab and click **Save**.

## Add a Google Cloud service account

To add a Google Cloud service account, follow the steps: 

1. Access **Cloud IAM \> Identity management \> Service accounts**.  
2. Add or edit a **Cloud IAM** account.  
3. Go to the **Google Cloud** tab.  
4. In the **Organization roles** section, select which roles (permission groups), accounts and organizations the service account should be added to.  
5. In the **Project roles** section, select which roles (permission groups), accounts and projects the service account should be added to.  
6. Go to the **Review** tab and click **Save**.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).