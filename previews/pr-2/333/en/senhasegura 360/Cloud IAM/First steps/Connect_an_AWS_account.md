# Connect an AWS account

This document explains the steps to integrating Amazon Web Services (AWS) with **Cloud IAM** to provision, manage, and monitor access to the Cloud Service Provider (CSP).

**Cloud IAM** also supports Google Cloud Services (GCP) and Microsoft Azure. If you want to integrate other CSPs, check the documentation [Connect a Google Cloud account](https://docs.senhasegura.io/v3-33/docs/cloud-iam-connect-a-google-cloud-account) or [Connect an Azure account](https://docs.senhasegura.io/v3-33/docs/cloud-iam-connect-an-azure-account).

## Requirements

- An [AWS](http://console.aws.amazon.com/) account.  
- A [management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html) or account with IAM permissions.

## Create a custom policy in the AWS Console

1. In the AWS Console, navigate to the **IAM** page.  
2. Go to the **Policies** page.  
3. Click **Create policy**.  
4. In the Policy **editor**, click the **JSON** option.  
5. Copy the JSON content below and paste it into the policy editor.

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "opsworks:DescribeStacks",
                "iam:DeleteAccessKey",
                "opsworks:DescribePermissions",
                "iam:CreateUser",
                "iam:CreateAccessKey",
                "iam:CreateLoginProfile",
                "opsworks:UpdateUserProfile",
                "iam:RemoveUserFromGroup",
                "iam:AddUserToGroup",
                "iam:ListAttachedUserPolicies",
                "iam:DetachUserPolicy",
                "opsworks:CreateUserProfile",
                "iam:DeleteLoginProfile",
                "iam:ListAccessKeys",
                "iam:GetPolicyVersion",
                "iam:ListPolicies",
                "iam:GetPolicy",
                "iam:AttachUserPolicy",
                "iam:DeleteUserPolicy",
                "opsworks:DescribeUserProfiles",
                "iam:UpdateAccessKey",
                "iam:ListRoles",
                "iam:DeleteUser",
                "iam:ListUserPolicies",
                "opsworks:DeleteUserProfile",
                "iam:ListGroupsForUser",
                "opsworks:DescribeInstances",
                "iam:ListUsers",
                "iam:ListGroups",
                "iam:GetUser",
                "iam:GetLoginProfile",
                "iam:GetAccountAuthorizationDetails"
            ],
            "Resource": "*"
        }
    ]
}
```

6. Click **Next**.  
7. Give your policy an easily identifiable name.  
8. Configure optional settings if needed.  
9. Click **Create policy**.

For more details, check the AWS documentation on [Create IAM policies (console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html).

## Create a user with the custom policy in the AWS Console

1. In the AWS Console, navigate to the **IAM** page.  
2. Go to the **Users** page.  
3. Click **Create user**.  
4. Attribute a username and click **Next**.  
5. Select the option **Attach policies directly**.  
6. Select the policy you created in the previous steps from the list  
7. Click **Create user**.

For more details, check the AWS documentation on [Create an IAM user in your AWS account](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html).

## Create an access key for the user in the AWS Console

1. In the AWS Console, navigate to the **IAM** page.  
2. Go to the **Users** page.  
3. Click the user you created in the previous steps.  
4. Navigate to the **Security credentials** tab.  
5. In the **Access keys** section, click **Create access key**.  
6. Select the **Third-party service** option.  
7. Add a tag if needed.  
8. Click **Create access key**.  
9. Copy the access key value and the secret access key and paste them into a text editor. You can also click the **Download .csv file** button to download the credentials. You’ll need these values when you integrate your account with senhasegura.

For more details, check the AWS documentation on [Manage access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).

## Integrate AWS with Cloud IAM

1. In the top left corner of the senhasegura platform, click on the **Grid Menu**, represented by the nine squares, and select **Cloud IAM**.
2. In the side menu, select **Settings > Accounts**.
3. Click the **View actions** icon, represented by the three vertical dots, and select the option **Add account**.
4. In the pop-up window, give a **Name** for the account.
5. Click **AWS**.
6. Click the **AWS** tab.
7. Paste the user access key in the **Access Key** field.
8. Paste the secret key in the **Secret Access Key** field.
9. Select the **Default Region**.
10. Click the **Confirm** button.

Once you’re done, the senhasegura **Accounts** page will refresh with your newly integrated AWS account.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
