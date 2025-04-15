# How to connect an AWS organization

In this article, you’ll learn how to connect an Amazon Web Services (AWS) organization to **Cloud Entitlements**, including accounts under the Organizational unit (OU).

## Requirements

- An AWS organization.
- A management account under an Organizational unit (OU).
- Trusted access for StackSets within AWS Organizations.

## Connect an AWS organization

To connect your AWS organization to **Cloud Entitlements**, follow these steps:

1. Go to **Cloud Entitlements** left menu.
2. Click **Setup** to open a dropdown menu.
3. Select **Amazon Web Services**.
4. On the upper-right corner, click **+ Connect**.
5. Select the option **Organization**.
6. In another tab or window, access the **AWS Console** as a root user.
7. Access **AWS Organizations**.
8. Create a new organization or select an already existing one.
9. Copy the **Organization root ID** and paste it into the Cloud Entitlements field **Organization ID**.
10. Download the **CloudFormation template** YAML file.
11. In the **AWS Console**, navigate to **CloudFormation** and create a new **Stack**.

:::(Info) (Info)
Make sure to activate trusted access in the **StackSets** area within **CloudFormation**.
:::

12. Upload the YAML template file to the ColoudFormation stack.

:::(Info) (Info)
This template already creates all necessary IAM roles and a StackSet to integrate Cloud Entitlements with your AWS organization. You don’t need to modify anything about the stack at this stage.
:::

13. Click the **Next** button and tick the box *I acknowledge that AWS CloudFormation might create IAM resources with custom names*.
14. Once the stack creation process is completed, copy the value for the **RoleARN** key from the **Outputs** tab.
15. Paste it into **Cloud Entitlements**.
16. Click **Connect**.

If connected successfully, your AWS organization will appear in the list of connected organizations.

:::(Error) (Important)
If the connection is unsuccessful, you must restart the process. First, in the AWS Console, delete the StackSet created by the CloudFront template, and then delete the stack. Also, delete the organization from Cloud Entitlements before making another one. You can't connect an organization that is already connected to Cloud Entitlements.
:::

You can activate or deactivate the organization by turning the **Status switch** on or off.