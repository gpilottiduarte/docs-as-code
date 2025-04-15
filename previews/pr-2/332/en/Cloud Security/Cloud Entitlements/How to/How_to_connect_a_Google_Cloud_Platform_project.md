# How to connect a Google Cloud Platform project

In this article, you'll learn how to connect **Cloud Entitlements** to your Google Cloud Platform (GCP) projects.

## Requirements

- Create a **Role** that contains the following permissions:
    - `iam.serviceAccountKeys.list`
    - `iam.serviceAccounts.list`
    - `iam.roles.list` 
    - `iam.roles.get`
    - `resourcemanager.organizations.getIamPolicy`
    - `resourcemanager.projects.getIamPolicy`
    - `resourcemanager.projects.list`
- Enable the following GCP APIs:
    - Resource Manager.
    - Identity and Access Management (IAM).
    - Cloud Assets.
- Create a **Service account** with the required role and register it as a **Principal** in the organization's IAM.
- Provision a **Key** for the **Service account**.

---

## Setup a service account with organization-level permissions in Google Cloud Platform

Before you connect your project to **Cloud Entitlements**, you must create a service account with organization-level permissions. To do so, follow the steps:

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

---

## Connect a Google Cloud Platform project

To connect your GCP project to **Cloud Entitlements**, follow these steps:

1. Go to **Cloud Entitlements** left menu.
2. Click **Cloud setup** to open a dropdown menu.
3. Select **Google Cloud Platform**.
4. On the upper-right corner, click **+ Connect**.
5. Select the option **Project**.
6. Enter a **Name** to identify your GCP project within **Cloud Entitlements**.
7. Enter your **Project ID**.
8. Upload the Service account key's **JSON file**.
9. If needed, attribute tags to the project. Separate each tag by pressing the **Enter** key.
10. Click **Save**.

If connected successfully, your GCP project will appear in the list of connected projects.

:::(Error) (Important)
If the connection is unsuccessful, review the project ID, the roles, and the enabled APIs. You can't use an ID from a project that is already connected to **Cloud Entitlements**.
:::

To make any necessary changes, click the **Actions** button, represented by three vertical dots, and click **Edit**.

Additionally, you can activate or deactivate the project by turning the **Status switch** on or off.