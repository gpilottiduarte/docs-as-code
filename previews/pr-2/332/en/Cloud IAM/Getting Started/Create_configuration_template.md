Templates can be used to define how senhasegura users have provisioned users and service accounts to Cloud providers without breaking the organization's rules.

## Create configuration template

  


Go to the menu: **Cloud IAM ➔ Cloud IAM ➔ Templates**.

1. In the report, click the action button and choose **Add Template;**
2. Enter the name of the template and select whether it will be active for use;
3. In the **Mask** field, define how the name of the service accounts should be created. You can enter a prefix and/or suffix and also, between braces, the number of letters and numbers. For example: senhasegura\-aaa\-000. Here, the prefix is “senhasegura”, and all created\-service accounts start this way. It is also defined as containing three letters, a hyphen and three numbers. The user can choose the letters and numbers will be used, but always following the template limit;
4. By selecting a department in the **Department** field, you will define that when using this template, the users that can be provisioned must be associated with this chosen department;

InfoThis field is not required but restricts the list of users available for the personal user provisioning process. So if you do not want certain users to the provision to those outside a specific department, it is advisable to fill out this field.

5. To finish, click on **Confirm**.
