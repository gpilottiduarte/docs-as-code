# How to create an application

This tutorial will guide you through a step-by-step on how to create an application in the **A2A** module.

## Create an application 

1. On the senhasegura platform, in the upper left corner, click the **Grid Menu**, identified by the nine squares, and select **A2A**.
2. On the side menu, select **Applications**.
3. In the top right corner, click the three vertical dots to open a drop-down menu.
4. In the drop-down menu, click **+ New**.
5. In the **Application Configuration** window, complete the information:
    1. **Application name***: a custom name for the application. 
    2. **Use OAuth signature***: the authentication method used by the application. The available methods are **OAuth 1.0, OAuth 2.0**, and **AWS**. For more information, access the documentation [Authentication](/v3-32/docs/a2a-authentication) and the [How to authenticate an application](/v3-32/docs/a2a-how-to-authenticate-an-application).


    
    
    :::(Info) (Info)
    senhasegura recommends the use of **OAuth v2.0** authentication for enhanced security.
    :::
      3. **Enabled***: the application status. The options are **Yes** and **No**. 
When inactive, the application can’t be authenticated or access senhasegura’s resources.
    4. **Tags**: keywords assigned to the application.
    5. **Description**: a detailed description of the application such as its purpose, function, or any other relevant information that can help to understand and manage the application.
    6. **Amazon AWS ARNs**: in case you choose **AWS** as the authentication method, click the plus sign next to **Amazon AWS ARNs** to add the ARNs for the application. The added ARNs can be viewed in the **ARN** list of this screen. To delete an **ARN**, click the trash can icon. For more information, access the [Configure AWS authenticator](https://docs.senhasegura.io/v3-32/docs/en/dsm-how-to-configure-authenticators#configure-the-aws-authenticators) document. 
    
:::(Info) (Info)
The items with an asterisk are mandatory.
:::

6. Click **Save**.

View the created applications in the report on the **Applications** screen.

## Next 

[How to edit an application](/v3-32/docs/a2a-how-to-edit-an-application)
[How to create an authorization for an application](/v3-32/docs/a2a-how-to-create-an-authorization-for-an-application)
[How to authenticate an application](/v3-32/docs/a2a-how-to-authenticate-an-application)
[How to deactivate an application](/v3-32/docs/a2a-how-to-deactivate-an-application)


Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
