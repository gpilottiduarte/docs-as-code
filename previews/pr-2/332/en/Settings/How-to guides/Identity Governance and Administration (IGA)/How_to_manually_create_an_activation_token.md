# How to manually create an activation token

Integrating the senhasegura platform and Okta happens through a manually generated token. In this article, you can find a step-by-step guide to generating this token in the Postman tool.

:::(Info) (Info)
senhasegura carried out this documentation utilizing the Postman platform. The steps described are specific and may require adaptations for other apps.
:::

* * *

## Requirements

* [IGA provider](/v3-32/docs/administration-how-to-add-an-iga-provider-to-senhasegura) added to senhasegura.

* * *

### Step 1: Collect information

1. Access the senhasegura platform.
2. In the upper left corner, click **Grid Menu** and select **Settings**.
3. Select **Authentication > Identity Management (IGA) > Providers.**
4. Locate the desired third-party provider from the reports list.
5. In the Action column, select the magnifying glass icon (**Provider details.**)
6. The **Register Identity Manager Provider** window will provide some of the information required to generate the integration token.
    5.1. **Base URL**: copy the URL to use in the next step.
    5.2. **Token URL**: copy the URL to use in the next step
    5.3. **Customer ID**: click the eye icon to access and copy the information.
    5.4. **Client Secret**: click the eye icon to access and copy the information.

:::(Warning) (Caution)
Collect information from the provider related to the type of group you intend to provision — whether it’s for **internal users** or **third-party users**. Choosing the correct option ensures that when you push groups from Okta to senhasegura, they'll appear in the corresponding menus. 
:::

* * *

### Step 2: Create the access token manually


1. Open Postman.
2. In the left-side menu, click **Collections** and then **+ Create new collection.**
3. Enter the name of the new collection.
4. In the **Variables** tab, create the variables for the collection:
    4.1. Create the variable ```senhasegura_url```.
    4.2. Create the variable  ```scim_base_url ```.
    4.3. Create the variable  ```tokenUrl ```.
    4.4. Create the variable  ```scim_client_id ```.
    4.5. Create the variable  ```scim_client_secret ```.
5. Still in the **Variables** tab, complete the **Initial values** field of the created variables:
    5.1. In  ```senhasegura_url ```, enter the address of the senhasegura server.
    5.2. In   ```scim_base_url ```, paste the information collected in step 1 into the **Base URL** field.
    5.3. In  ```tokenUrl ```, paste the information collected in step 1 into the **Token URL** field. 
    5.4. In  ```scim_client_id ```, paste the information collected in step 1 into the **Customer ID** field.
    5.5. In  ```scim_client_secret ```, paste the information collected in step 1 into the **Client Secret** field.
6. Save the changes.
7. In the **Authorization tab**, complete the information:
    7.1. **Type**: select **OAuth 2.0**.
    7.2. **Add auth data to**: select **Request Headers**
    7.3. **Header Prefix**: enter  ```Bearer ```.
    7.4. **Token Name**: enter a descriptive name.
    7.5. **Grant Type**: select **Client Credentials**
    7.6. **Access Token URL**: enter  ```{{tokenUrl}} ``` .
    7.7. **Client ID**: enter  ```{{scim_client_id}} ``` .
    7.8. **Client Secret**: enter  ```{{scim_client_secret}} ```.
    7.9. **Client Authentication:**  select **Send as Basic Auth header**.
8. Click **Clear cookies**.
9. Click **Get New Access Token**.
10. In the window indicating complete authentication, click **Proceed.**
11. Copy the text from the **Access token** field.
12. Click **Use token**. 

You'll receive a confirmation message with the text **Token added**. You must paste this token into the [authentication screen of the Okta SCIM application](/v3-32/docs/administration-how-to-create-a-scim-application-with-okta).

* * *
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.
