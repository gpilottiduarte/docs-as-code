# How to connect a Google Cloud Platform project

This document provides information on how to connect a Google Cloud Platform project to **Cloud Entitlements**.

## Prerequisites

- A service account with the following roles:  
    - `iam.serviceAccountKeys.list`  
    - `iam.serviceAccounts.list`  
    - `iam.roles.list`  
    - `iam.roles.get`  
    - `resourcemanager.organizations.get`  
    - `resourcemanager.organizations.getIamPolicy`  
    - `resourcemanager.projects.getIamPolicy`  
    - `resourcemanager.projects.list`  
- An access key provisioned for the service account.  
- The following Google Cloud Platform APIs enabled:  
    - Resource manager.  
    - Identity and access management (IAM).  
    - Cloud assets.

## Connect a Google Cloud Platform project

To connect your GCP project to **Cloud Entitlements**, see the following procedure:

1. Access **Cloud Security**.  
2. Access the **Cloud Entitlements** product.  
3. In the **Setup** menu, click **Google Cloud Platform**.  
4. On the upper-right corner, click **\+ Connect**.  
5. Select the **Project** option.  
6. In the **Name \*** field, enter a name to identify the project.  
7. In the **Project ID \*** field, enter the project ID.  
8. (Optional) In the **Tags** field, enter tags for the project. Enter one tag at a time pressing **Enter**.  
9. Upload the service account `.json` key file.  
10. Click **Save**.

Upon successful connection, your GCP project will appear in the connected projects list.

Additionally, you can activate or deactivate the project by turning the **Status** switch on or off.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).