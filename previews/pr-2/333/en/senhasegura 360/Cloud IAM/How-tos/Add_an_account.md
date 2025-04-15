# Add account

To manage users, accounts, credentials, and virtual machines you must create an account to integrate senhasegura with the Cloud Service Providers(CSPs).

**Info:** To prevent excess privileges, **Cloud IAM** requests only the necessary permissions.

<!-- Fix document as a whole -->

---

## Add an account

To add an account, navigate to the menu **Cloud IAM ➔ Settings ➔ Accounts**and follow the steps:

<!-- Fix links -->
1. Click the **Actions(⁝)**icon and select the option **Add account**.
2. On the **Settings** tab, enter a **Name**.
3. Choose **Yes** or **No** for **Active**.
4. Choose the **Providers** you want to register.
   **Info:** You can register [AWS](/v3-33/docs/cloud-iam-add-account#register-aws-account), [Azure](/v3-33/docs/cloud-iam-add-account#register-azure-account) and [Google Cloud](/v3-33/docs/cloud-iam-add-account#register-google-cloud-account)accounts on the same screen at the same time.
5. Enter a **Description** and **Tags**, if you want to.

### Register AWS account

To register an AWS account navigate to **Cloud IAM ➔ Settings ➔ Accounts** and follow the steps:

<!-- Fix links -->
1. **Add**or **Edit**a Cloud IAM account.
2. Go to the **AWS** tab.
3. Click **View JSON** to open the required permissions.
4. Enter the AWS access key ID in the **Access key** field
   **Info:** To learn how to create an **AWS access key**, go to [Configure AWS](/v3-33/docs/cloud-iam-add-account#configure-aws) section in this article.
5. Enter the secret of the AWS access key in the filed **Access key secret**.
6. Choose the **Default region** of the AWS account.
7. Check the **OpsWorks** box if you want to manage AWS Opsworks sessions and the user's SSH keys.

### Register Google Cloud account

To register a Google account navigate to **Cloud IAM ➔ Settings ➔ Accounts** and follow the steps:

<!-- Fix link -->
1. **Add** or **Edit** a Cloud IAM account.
2. Go to the **Google Cloud** tab.
3. Click **Choose file** and select the file with the Google Cloud account **Access key**.
   **Info:** To learn how to create a **Google Cloud access key**, go to [Configure Google Cloud](/v3-33/docs/cloud-iam-add-account#configure-google-cloud) section in this article.

### Register Azure account

To register an Azure account navigate to **Cloud IAM ➔ Settings ➔ Accounts** and follow the steps:

<!-- Fix link -->
1. **Add** or **Edit** a Cloud IAM account.
2. Go to the **Azure** tab.
3. Enter the **Directory (tenant) ID**.
4. Enter the **Application (Client ID)** and **Client Secret Value**.  
   **Info:** To learn how to create a **Client secret value**, go to [Configure Azure](/v3-33/docs/cloud-iam-add-account#configure-azure) section in this article
5. Choose an access group.

---

## Configure providers

<!-- Fix link -->
In order to integrate Cloud IAM with [AWS](/v3-33/docs/cloud-iam-add-account#configure-aws), [Azure](/v3-33/docs/cloud-iam-add-account#configure-azure), and [Google Cloud](/v3-33/docs/cloud-iam-add-account#configure-google-cloud) you must perform the following configurations for each one of the providers.

### Configure AWS

To integrate Cloud IAM and AWS you must create an AWS access key.

#### Create an AWS access key

To generate an AWS access key, follow the steps below:

<!-- Add alt text for images or remove them -->
1. On the AWS register screen click **View JSON** and copy the permissions.
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1678889183417.png)
2. Copy the permissions described in the **JSON**.
3. Log in to your AWS account: [console.aws.amazon.com](https://console.aws.amazon.com/);
4. Go to **Identity and Access Management (IAM)**.
5. On the left menu, select **Policies**..
6. Click **Create Policy**, go to the **JSON** tab, and paste the permissions copied in step 1;CautionYou must create the access keys for a user that has the same permissions described in the **JSON**.
7. Click **Next: Tags**.
8. Enter the **Tags** and click **Next: Review**.
9. Enter the policy **Name** and click **Create policy** to confirm.
10. On the left menu, go to **Users** and select **Add user**.
11. On **Specify user's details**, enter the **Username** and click **Next**.
12. On **Define permissions**, go to **Attach policies directly** and select the policy you created in step 8.
13. Go back to **Users** and select a user.
14. Go to the **Security credentials** tab and select **Create access keys**.
15. Copy the **Access Key ID** and **Secret access key** values.

---

### Configure Google Cloud

To integrate the Cloud IAM with your Google Cloud account you must perform the following actions.

#### Create a role

1. Log in to your Google Cloud account [console.cloud.google.com](https://console.cloud.google.com/).
2. In the project selection, select the **Organization** and click **Roles**.
3. Click **Create role** and fill in the fields.
   1. **Title** with the name of the role you want to create.
   2. Click **Add permissions** and add the following permissions:
      - iam.roles.list
      - iam.serviceAccountKeys.create
      - iam.serviceAccountKeys.delete
      - iam.serviceAccountKeys.get
      - iam.serviceAccountKeys.list
      - iam.serviceAccounts.create
      - iam.serviceAccounts.delete
      - iam.serviceAccounts.get
      - iam.serviceAccounts.list
      - resourcemanager.organizations.get
      - resourcemanager.organizations.getIamPolicy
      - resourcemanager.organizations.setIamPolicy
      - resourcemanager.projects.get
      - resourcemanager.projects.getIamPolicy
      - resourcemanager.projects.list
      - resourcemanager.projects.setIamPolicy
   3. Finally, click **Create**.

#### Create a service account

To create a **Service account**in Google Cloud, follow the steps:

1. Select an existing project or create a new one in Google Cloud.
2. On the navigation menu, choose the **IAM & Admin, Service Accounts** option.
3. Click **Create service account**.
4. Fill in the **Service account name** fields and click **Create**.
5. Click **Done** to confirm.

#### Create a Google Cloud access key

1. On the **Service Accounts** menu, select the service account you have just created.
2. Click **Add key** and select **Create new key**.
3. Select the **JSON** option and click **Create**.
4. Finally, **save the key** in a safe place.

#### Enable APIs

1. On **APIs & Services ➔ Library** menu.
2. Find the APIs listed below and select **Enable**.
   - Cloud Resource Manager API
   - Cloud Asset API
   - Identity and Access Management (IAM) API

#### Add a service account at Organization

1. Select the **IAM** service in the side menu.
2. Click **Add**, at the top of the page.
3. Enter the address of the service account you just created in the field **New members**.
4. In the field **Select a role**, select a previously created role.
5. Click **Save**.

---

### Configure Azure

To integrate the Cloud IAM with your Azure account you must perform the following actions.

#### Create an Azure service account

1. Log in to your Azure account: [portal.azure.com](https://portal.azure.com/).
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
5. Copy the **Value** of the Secret.

#### Select API permissions

1. In Azure, select:
   1. On the left menu, select API permissions.
   2. Select the Microsoft Graph.
   3. The requested permissions are:
      - **Directory Role**:
        - Global Administrator
        - Tenant root group role
        - Owner
      - **API permissions**:
        - Delegated:
          - Directory.AccessAsUser.All
        - Application:
          - Application.ReadWrite.All
          - AppRoleAssignment.ReadWrite.All
          - Directory.Read.All
          - Directory.ReadWrite.All
          - Organization.ReadWrite.All
          - RoleManagement.ReadWrite.Directory
          - User.ManageIdentities.All
          - User.ReadWrite.All
