# How to connect an AWS organization

This document provides information about how to connect an Amazon Web Services (AWS) organization, including all accounts under the organizational unit (OU) to **Cloud Entitlements**.

:::(Info) (Info)
When connecting an AWS organization, you can only deactivate or activate the organization, you can’t edit the child accounts separately. And if the organization is deactivated, the child accounts are also deactivated.
:::

## Prerequisites

- A management account under an organizational unit (OU).  
- Trusted access to StackSets within AWS Organizations.

## Connect an AWS organization

To connect your AWS organization to **Cloud Entitlements**, see the following procedure:

1. Access **Cloud Security**.  
2. Access the **Cloud Entitlements** product.  
3. In the **Cloud Entitlements** menu, click **Setup** **\> Amazon Web Services**.  
4. Click **\+ Connect**.  
5. Select **Organization**.  
6. In another tab or window, access the AWS Console as a root user.  
7. Access AWS Organizations.  
8. Create a new organization or select an existing one.  
9. Copy the ID root of the organization and paste it on the **Organization ID** field in **Cloud Entitlements**.  
10. Download the `.yaml` file from the CloudFormation template.  
11. In the AWS Console, go to CloudFormation and create a new stack. Make sure to enable trusted access in the StackSets within CloudFormation.  
12. Upload the `.yaml` template file.  
    Info: This template already creates all the necessary IAM roles and a StackSet to integrate **Cloud Entitlements** with your AWS organization.   
13. Click **Next** and tick the checkbox.  
14. Once the stack creation process is complete, copy the role ARN value from the **Outputs** tab.  
15. Paste the role ARN value in **Cloud Entitlements**.  
16. Click **Connect**.

If connected successfully, your AWS organization will appear in the list of connected organizations. Otherwise, you must redo the entire process. First, in the AWS console, delete the StackSet created by the template, and then delete the stack. Also, in AWS organizations, remove the **Cloud Entitlements** organization before creating a new one. You cannot connect an organization that is already connected to **Cloud Entitlements**.

Additionally, you can enable or disable organization by toggling the **Status** button.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).