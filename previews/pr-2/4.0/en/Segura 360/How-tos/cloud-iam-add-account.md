# Add account

To manage users, accounts, credentials, and virtual machines you must create an account to integrate Segura with the Cloud Service Providers (CSPs).

:::(Info) (Info)
To prevent excess privileges, **Cloud IAM** requests only the necessary permissions.
:::

## Add an account

To add an account, follow the steps: 

1. Access **Cloud IAM \> Management \> Accounts**.  
2. Click the **Add** button.  
3. In the **Name** field, enter a name.  
4. Select if the account will be enabled or not.  
5. (Optional): Enter a description.  
6. (Optional): Enter tags.  
7. Navigate to the providers’ tab you want to register.

:::(Info) (your title goes here)
You can register [AWS](/v4/docs/add-account#add-an-aws-account), [Azure](/v4/docs/add-account#add-an-azure-account) and [Google Cloud](/v4/docs/add-account#add-a-google-cloud-account) accounts on the same screen at the same time.
:::

## Add an AWS account

To add an AWS account, follow the steps: 

1. Access **Cloud IAM \> Management \> Accounts**.  
2. Add or edit a **Cloud IAM** account.  
3. Go to the **AWS** tab.  
4. Click the **View JSON** button to open the required permissions.  
5. In the **Access key** field, enter the AWS access key. 
    :::(Info) (Info)
    To learn how to create an **AWS access key**, go to [Configure AWS](/v4/docs/add-account#configure-aws) section in this document.
    :::
6. In the **Secret Access Key** field, enter the AWS secret access key.  
7. In the **Default Region \*** field, select the default region.  
8. In the **IAM** section, tick the check boxes according to the permissions you want to give.  
9. Go to the **Review** tab and click **Save**.

## Add an Azure account

To add an Azure account, follow the steps: 

1. Access **Cloud IAM \> Management \> Accounts**.  
2. Add or edit a **Cloud IAM** account.  
3. Go to the **Azure** tab.  
4. In the **Directory (tenant) ID\*** field, enter the directory (tenant) ID.  
5. In the **Application (Client ID)\*** field, enter the application (client ID).  
6. In the **Client secret value\*** field, enter the client secret value.
    :::(Info) (your title goes here)
    To learn how to create a **Client secret value**, go to the [Configure Azure](/v4/docs/add-account#configure-azure) section in this document.
    :::
7. In the **IAM** section, tick the check boxes according to the permissions you want to give.  
8. Go to the **Review** tab and click **Save**.

## Add a Google Cloud account

To add a Google Cloud account, follow the steps: 

1. Access **Cloud IAM \> Management \> Accounts**.  
2. Add or edit a **Cloud IAM** account.  
3. Go to the **Google Cloud** tab.  
4. Click **Choose file** and select the file with the Google Cloud account access key.
    :::(Info) (Info)
    To learn how to create a **Google Cloud access key**, go to the [Configure Google Cloud](/v4/docs/add-account#configure-google-cloud) section in this document.
    :::
5. Go to the **Review** tab and click **Save**.

## Configure providers

In order to integrate **Cloud IAM** with [AWS](/v4/docs/add-account#configure-aws), [Azure](/v4/docs/add-account#configure-azure), and [Google Cloud](/v4/docs/add-account#configure-google-cloud) you must perform the following configurations for each one of the providers.

### Configure AWS

To integrate **Cloud IAM** and AWS you must create an AWS access key.

#### Create an AWS access key

To create an AWS access key, follow the steps:

1. On the AWS register screen, click **View JSON** and copy the permissions.  
2. Log in to [Amazon Web Services](https://console.aws.amazon.com/).  
3. Go to **Identity and Access Management (IAM)**.  
4. On the left menu, select **Policies**.  
5. Click **Create Policy**, go to the **JSON** tab, and paste the permissions copied in step 1.
    :::(Error) (Alert)
    You must create the access keys for a user that has the same permissions described in the `.json` file.
    :::
6. Click **Next:Tags**.  
7. (Optional): Enter the tags.
8. Click **Next:Review**.  
9. Enter the policy name and click **Create policy** to confirm.  
10. On the left menu, go to **Users** and select **Add user**.  
11. On **Specify user's details**, enter the username and click **Next**.  
12. On **Define permissions**, go to **Attach policies directly** and select the policy you created in step 8..  
13. Go back to **Users** and select a user.  
14. Go to the **Security credentials** tab and select **Create access keys**.  
15. Copy the **Access Key ID** and **Secret access key** values.

### Configure Google Cloud

To integrate the **Cloud IAM** with your Google Cloud account you must perform the following actions:

#### Create a role

1. Log in to your [Google Cloud account](http://console.cloud.google.com).  
2. In the project selection, select the **Organization** and click **Roles**.  
3. Click **Create role** and fill in the fields:  
   1. Title with the name of the role you want to create.  
   2. Click **Add permissions** and add the following permissions:  
      - `iam.roles.list`  
      - `iam.serviceAccountKeys.create`  
      - `iam.serviceAccountKeys.delete`  
      - `iam.serviceAccountKeys.get`  
      - `iam.serviceAccountKeys.list`  
      - `iam.serviceAccounts.create`  
      - `iam.serviceAccounts.delete`  
      - `iam.serviceAccounts.get`  
      - `iam.serviceAccounts.list`  
      - `resourcemanager.organizations.get`  
      - `resourcemanager.organizations.getIamPolicy`  
      - `resourcemanager.organizations.setIamPolicy`  
      - `resourcemanager.projects.get`  
      - `resourcemanager.projects.getIamPolicy`  
      - `resourcemanager.projects.list`  
      - `resourcemanager.projects.setIamPolicy`  
   3. Click **Create**.

#### Create a service account

To create a **Service account** in Google Cloud, follow the steps:

1. Select an existing project or create a new one in Google Cloud.  
2. On the navigation menu, choose the **IAM & Admin, Service Accounts** option.  
3. Click **Create service account**.  
4. Fill in the **Service account name** fields and click **Create**.  
5. Click **Done**.

#### Create a Google Cloud access key

1. On the **Service Accounts** menu, select the service account you have just created.  
2. Click **Add key** and select **Create new key**.  
3. Select the **JSON** option and click **Create**.  
4. Store the key in a safe place.

#### Enable APIs

1. Access the **APIs & Services \> Library** menu.  
2. Find the APIs listed below and select **Enable**.  
    - Cloud Resource Manager API  
    - Cloud Asset API  
    - Identity and Access Management (IAM) API

#### Add a service account at Organization

1. Select the **IAM** service in the side menu.  
2. Click **Add** at the top of the page.  
3. In the **New members** field, enter the address of the service account you just created.  
4. In the **Select a role** field, select a previously created role.  
5. Click **Save**.

### Configure Azure

To integrate the Cloud IAM with your Azure account you must perform the following actions.

#### Create an Azure service account

1. Log in to your [Azure account](http://portal.azure.com).  
2. Locate the service **Azure Active Directory**.  
3. On the left menu, select **Application register**.  
4. Select **New register**.  
5. Fill in the **Name**, **Support account type**, and **URI redirect** fields.  
6. Click **Register**.

#### Create a Client secret value

1. Select an application in Azure.  
2. On the left menu, select **Certificates and secrets**.  
3. Click **New Client Secret**.  
4. Enter a **description** and **expiration**.  
5. Copy the value of the secret.

#### Select API permissions

1. In Azure, select:  
   1. On the left menu, select API permissions.  
   2. Select **Microsoft Graph**.  
   3. The requested permissions are:  
      1. **Directory Role**:  
         1. Global Administrator  
         2. Tenant root group role  
         3. Owner  
      2. **API permissions**  
         1. Delegated:  
            1. `Directory.AccessAsUser.All`  
         2. Application:  
            1. `Application.ReadWrite.All`  
            2. `AppRoleAssignment.ReadWrite.All`  
            3. `Directory.Read.All`  
            4. `Directory.ReadWrite.All`  
            5. `Organization.ReadWrite.All`  
            6. `RoleManagement.ReadWrite.Directory`  
            7. `User.ManageIdentities.All`  
            8. `User.ReadWrite.All`

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).