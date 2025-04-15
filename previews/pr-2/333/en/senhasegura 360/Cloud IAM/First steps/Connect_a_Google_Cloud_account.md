# Connect a Google Cloud account

This document outlines the steps to integrating the Google Cloud Platform (GCP) with **Cloud IAM** to provision, manage, and monitor access to the Cloud Service Provider (CSP). You can connect either a **GCP project** or a **GCP organization** to **Cloud IAM**.

<!-- Fix callout and link -->
:::(info) (Info)
**Cloud IAM** also supports Amazon Web Services (AWS) and Microsoft Azure. If you want to integrate other CSPs, check the documentation [Connect an AWS account](/v3-33/docs/cloud-iam-connect-an-aws-account) or [Connect an Azure account](/v3-33/docs/cloud-iam-connect-an-azure-account).
:::

Before you integrate a GCP account with senhasegura, you’ll need a [Google Cloud Platform](https://cloud.google.com/) account.

<!-- Fix callout -->
:::(warning) (Warning)
To integrate your GCP organization, you’ll need the [Organization Administrator](https://cloud.google.com/resource-manager/docs/access-control-org#resourcemanager.organizationAdmin) role or a similar role with permission to manage IAM and API resources for the organization. For projects, you’ll need the [Project IAM Admin](https://cloud.google.com/resource-manager/docs/access-control-proj#resourcemanager.projectIamAdmin) role or a similar role with permission to manage IAM and API resources for the project.
:::

## Enable APIs in Google Cloud Console

1. As a **project** in the GCP console, go to the **APIs & Services** page.
2. Click **Enable APIs and Services**.
3. In the search bar, search and enable the following APIs:
    - **Cloud Resource Manager API** by Google Enterprise API.
    - **Cloud Asset API by Google Enterprise API.**
    - **Identity and Access Management (IAM) API** by Google Enterprise API.
4. To enable APIs, select the API from the list and click the **Enable** button.

## Create a custom role in Google Cloud Console

1. As a **project** in the GCP console, go to **IAM & Admin** > **Roles**.
2. Click **Create Role**.
3. Name your custom role.
4. Configure optional settings if needed.
5. Click **Add permissions**.
6. Select the following permissions:

```
iam.roles.list
iam.serviceAccountKeys.create
iam.serviceAccountKeys.delete
iam.serviceAccountKeys.get
iam.serviceAccountKeys.list
iam.serviceAccounts.create
iam.serviceAccounts.delete
iam.serviceAccounts.get
iam.serviceAccounts.list
iam.serviceAccounts.update
resourcemanager.projects.get
resourcemanager.projects.getIamPolicy
resourcemanager.projects.setIamPolicy
```

7. Click **Create**.

<!-- Fix callout -->
:::(Info) (Info)
You may skip the following steps if you only want to connect a project.
:::

9. To integrate with your **GCP organization**, switch to the **Organization view**.
10. Repeat the previous steps to create a second role and assign the following organization permissions:

```
resourcemanager.projects.list
resourcemanager.organizations.get
resourcemanager.organizations.getIamPolicy
resourcemanager.organizations.setIamPolicy
```
10. Click **Create**.

<!-- Fix callout -->
:::(info) (Info)
For more details, check the GCP documentation on [how to manage roles and permissions](https://cloud.google.com/iam/docs/roles-overview).
:::

## Create a service account in Google Cloud Console

1. As a **project** in the GCP console, go to **IAM & Admin** > **Service Accounts**.
2. Click **Create service account**.
3. Give your service account an easily identifiable name. You’ll be using this account to integrate with senhasegura.
4. Give your service account an ID.
5. Click **Create and continue**.
6. Choose the custom role you created with the necessary permissions.
7. Configure optional settings if needed.
8. Click **Done**.

<!-- Fix callout -->
:::(info) (Info)
For more details, check the GCP documentation on [how to create a service account](https://cloud.google.com/iam/docs/service-accounts-create?hl=en#iam-service-accounts-create-console).
:::

Only for **GCP organizations**, you’ll need also to add the service account you created as a principal at the organization level. To do so:

1. As a **project** in the GCP console, navigate to the **IAM & Admin** > **Service Accounts** page.
2. Copy the **Service account email address**.
3. Switch to the **Organization view** in the GCP console.
4. Navigate to **IAM**.
5. Click **Grant access**.
6. Paste the service account email address in the **New principals** field.
7. In **Role**, select the custom role with the organization permissions.
8. Configure optional settings if needed.
9. Click **Save**.

<!-- Fix callout -->
:::(info) (Info)
For more details, check the GCP documentation on [how to manage access to organizations](https://cloud.google.com/iam/docs/granting-changing-revoking-access?hl=en).
:::

## Create an access key for the Google Cloud Console service account

1. As a **project** in the GCP console, go to **IAM & Admin** > **Service Accounts**.
2. Click the service account you created in the previous steps from the list.
3. Navigate to the **Keys** tab.
4. Click **Add key** > **Create new key**.
5. Select the option **JSON**.
6. Click **Create**. This action will download a JSON file into your device. This file must be uploaded to **Cloud IAM** to finish the integration process.

<!-- Fix callout -->
:::(info) (Info)
For more details, check the GCP documentation on [how to create service account keys](https://cloud.google.com/iam/docs/keys-create-delete?hl=en).
:::

## Integrate GCP with Cloud IAM

1. In the top left corner of the senhasegura platform, click on the **Grid Menu**, represented by the nine squares, and select **Cloud IAM**.
2. In the side menu, select **Settings > Accounts**.
3. Click the **View actions** icon, represented by the three vertical dots, and select the option **Add account**.
4. In the pop-up window, give a **Name** for the account.
5. Click **Google Cloud**.
6. Click the **Google Cloud** tab.
7. In **File credentials**, upload the JSON file, which is the key created for the service account.
8. Click the **Confirm** button.

Once you’re done, the senhasegura **Accounts** page will refresh with your newly integrated GCP account.
