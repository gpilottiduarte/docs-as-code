# How to generate first access for limited users after batch import

This document provides a step-by-step guide on how to perform a batch import and generate automatic first access for users included in the imported spreadsheet.

## Requirements

- Be a user with permission to request access.

## Generate automatic first access
<!-- Fix callout -->
:::(warning) (Attention)  
Access should only be generated for active users.  
:::

1. In **senhasegura**, in the upper left corner, click on the **Grid Menu**, represented by the nine squares, and select **Domum Remote Access**.  
2. In the side menu, select **Settings \> Batch import limited users**.  
3. Click the three vertical dots icon, located in the upper right corner of the screen and select **\+Import**.  
4. In the **Batch import from** **third-party** window:  
   1. In the **User worksheet** field, click **Choose file** and upload the spreadsheet with the users to be imported.  
   2. In the **Automatically provide access after import** field, select the **Yes** option.
<!-- Fix callout -->
:::(info) (Info)  
This option will only be available to users who have permission to request access.  
:::
3. Click **Import data**.  
4. In the **Request batch access \- third-party user** window that opens:  
   1. In the **Settings** step, fill in the requested fields:
      1. **Justification**\*: write a text justifying the requested action.  
      2. **Reason**\*: select the reason from the dropdown menu.  
      3. **Governance Code**: enter the governance code if it exists.  
      4. Click **Next**.  
   2. In the **Devices** step:  
      1. Click the **add** icon next to the word **Devices**, in the pop-up window that opens, select the devices that users will have access to.  
      2. Click **Next**.  
   3. In the **Credentials** step:  
      1. Click the **add** icon next to the word **Credentials**, in the pop-up window that opens, select the credentials that users will have access to.  
      2. Select the permissions that will be given to each added credential.  
      3. Click **Next**.  
   4. In the **Access limitation** step:  
      1. **Access permission period:** select the date and time for the permission **Start** and in **Duration** select how long the permission will last.  
      2. **Access permission days**: select the days on which the permission will be valid.  
      3. **Access permission times**: select from the available times or create a custom time that the permission will be valid.  
      4. **Sessions**: select **Unlimited** or the number of sessions that access will be allowed.  
   5. In the **Review** step, review all the data filled in for this access request, if you want to make any changes, click the **Back** button to return to the step you want to modify.  
5. With all the information reviewed, click the **Save** button to create the access request.

At the end, a success message will be displayed. The request will be available in the report list and details can be accessed by clicking the **list** icon in the **Action** column.

To confirm that the user import and access was successful, in the side menu go to **Request access \> Third-party or Request access \> Internal users**, and check the **Status** column for the status of the request.

<!-- Fix callout -->
:::(info)(Info)  
An access link will be sent to the imported user's email, as well as the email with the access token.  
:::

<!-- Fix callout -->
:::(warning) (Attention)  
Batch import is processed in the background and may present errors in one or more users. When accessing the process details, it’s possible to identify how many lines the error occurred in.  
:::

---

Still have questions? Contact the [senhasegura Community](https://community.senhasegura.io/).
