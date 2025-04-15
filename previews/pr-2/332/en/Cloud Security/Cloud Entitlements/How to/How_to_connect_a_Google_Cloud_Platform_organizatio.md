# How to connect a Google Cloud Platform organization

In this article, you’ll learn how to connect a Google Cloud Platform (GCP) organization, including all its projects, to **Cloud Entitlements**.

## Requirements

- Create a **Role** that contains the following permissions:
    - `iam.serviceAccountKeys.list`
    - `iam.serviceAccounts.list`
    - `iam.roles.list` 
    - `iam.roles.get`
    - `resourcemanager.organizations.getIamPolicy`
    - `resourcemanager.projects.getIamPolicy`
    - `resourcemanager.projects.list`
    - `resourcemanager.projects.get`
    - `resourcemanager.organizations.get`
- Enable the following GCP APIs:
    - Resource Manager.
    - Identity and Access Management (IAM).
    - Cloud Assets.
- Create a **Service account** with the required role and register it as a **Principal** in the organization's IAM.
- Provision a **Key** for the **Service account**.

## Setup a service account with organization-level permissions in Google Cloud Platform

Before you connect your organization to **Cloud Entitlements**, you must create a service account with organization-level permissions. To do so, follow the steps:

1. Access the **GCP Console**.
2. Click the **Select project dropdown** and switch to your **GCP Organization**.
3. Go to **IAM & Admin > Roles**.
4. Click **Create custom role** with the required permissions.
5. Click **Save**.
6. Navigate to **IAM**.
7. In **Permissions**, click **Grant access** to add a service account as a principal.

:::(Info) (Info)
As an organization, you can select from service accounts created within projects. If needed, you can create a new service account in **IAM & Admin > Service Accounts > Create service account**.
:::

8. Paste the **Service account email** and select the **Custom role**.
9. Click **Save**.
10. Go to **Service Accounts** and select the service account selected as a principal.
11. Click **Actions** > **Manage keys**.
12. Create and download the new key in **JSON format**.

## Connect a Google Cloud Platform organization

To connect your GCP organization to **Cloud Entitlements**, follow these steps:

1. Go to **Cloud Entitlements** left menu.
2. Click **Cloud setup** to open a dropdown menu.
3. Select **Google Cloud Platform**.
4. On the upper-right corner, click **+ Connect**.
5. Select the option **Organization**.
6. Enter a **Name** to identify your GCP organization within **Cloud Entitlements**.
7. Enter your **Organization ID**.

:::(Info) (Info)
Your organization ID can be found in the GCP Console by clicking the **Select project dropdown** > **All**.
:::

8. Upload the Service account key's **JSON file**.
9. Click **Save**.

If connected successfully, your GCP organization will appear in the list of connected organizations.

:::(Error) (Important)
If the connection is unsuccessful, review the organization ID, the attributed roles, and the enabled APIs. You can't connect an organization already connected to the same **Cloud Entitlements** tenant.
:::

To make any necessary changes, click the **Actions** button, represented by three vertical dots, and click **Edit**.

Additionally, you can activate or deactivate the organization by turning the **Status switch** on or off.