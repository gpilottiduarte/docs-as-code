# How to connect a Google Cloud Platform organization

In this document you’ll learn how to connect a Google Cloud Platform (GCP) organization, including all its projects, to **Cloud Entitlements**.

## Requirements

- A GCP organization.  
- A **Service account** with the following permissions:  
    - iam.serviceAccountKeys.list  
    - iam.serviceAccounts.list  
    - iam.roles.get  
    - iam.roles.list  
    - resourcemanager.folders.get  
    - resourcemanager.folders.list  
    - resourcemanager.organizations.get  
    - resourcemanager.organizations.getIamPolicy  
    - resourcemanager.projects.get  
    - resourcemanager.projects.getIamPolicy  
    - resourcemanager.projects.list  
- A **Key** provisioned for the Service account.  
- The following GCP APIs enabled:  
    - Resource Manager.  
    - Identity and Access Management (IAM).  
    - Cloud Assets.

## Setup a service account with organization-level permissions in Google Cloud Platform

Before you connect your organization to **Cloud Entitlements**, you must create a service account with organization-level permissions. To do so, follow the steps below:

1. Access the **GCP Console**.  
2. In the topbar, click on **Select a project** and select your GCP organization.  
3. In the sidebar, go to **IAM & Admin > Roles**.  
4. Click on **Create role** with the required permissions.  
5. Click **Create**.  
6. Navigate to **IAM**.  
7. In **View by Principals**, click **Grant access**.  
8. Add the email address of the service account in the **New principals** field.

:::(Info) (Info)
As an organization, you can select from service accounts created within projects. If needed, you can create a new service account in **IAM & Admin > Service Accounts > Create service account**. Make sure to have a project selected, otherwise you won’t be able to create a service account.
:::

8. In the **Assign roles** section, select **Custom > Custom Role** as the role.  
9. Click **Save**.  
10. Go to **Service Accounts** and select the service account selected as a principal.  
11. Click **Actions > Manage keys**.  
12. Create and download the new key in ```.json``` format.

## Connect a Google Cloud Platform organization

To connect your GCP organization to **Cloud Entitlements**, follow the steps below:

1. Go to **Cloud Entitlements**.  
2. In the left menu, click **Setup** and select **Google Cloud Platform**.  
3. On the upper-right corner, click **\+ Connect**.  
4. Select the option **Organization**.  
5. In the **Name**\* field, enter a name to identify your GCP organization.  
6. In the **Organization ID\*** field, enter your organization’s ID.

:::(Info) (Info)
Your organization ID can be found in the GCP Console by clicking on **Select a project \> All** in the top bar.
:::

7. In the **Tags** field, enter tags to identify your organization.  
8. Upload the service account key's ```.json``` file.  
9. Click **Save**.

If connected successfully, your GCP organization will appear in the list of connected organizations. Otherwise, review the organization ID, the attributed roles, and the enabled APIs. You can't connect an organization already connected to the same **Cloud Entitlements** tenant.

To make any necessary changes, click the **Actions** button and click **Edit**.

Additionally, you can activate or deactivate the organization by turning the **Status** switch on or off.