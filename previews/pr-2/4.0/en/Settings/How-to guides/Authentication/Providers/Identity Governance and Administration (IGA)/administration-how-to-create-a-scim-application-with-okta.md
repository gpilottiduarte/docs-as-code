# How to create a SCIM application with Okta

In this article, you'll find a tutorial to create a SCIM application in the user-provider tool Okta.

### Supported Features
* Create Users
* Update User Attributes
* Deactivate Users
* Import Users
* Import groups
* Group push

* * *
## Requirements

* Enable communication between the Segura and Okta platforms.
* A valid account with administrator permission in Okta.
* A group with users already [created in Okta](https://help.okta.com/asa/en-us/Content/Topics/Adv_Server_Access/docs/setup/create-a-group.htm#:~:text=Open%20the%20Advanced%20Server%20Access%20dashboard.%20Click%20Groups.,the%20group.%20See%20Team%20roles.%20Click%20Create%20Group.){target="_blank"}.
* When registering a user in Okta, ensure their unique identifier is set as their email address.
* The Okta registered users shouldn’t have more than one email address.

* * *

:::(Warning) (Caution)
* Okta reserves the right to modify the development environment without prior notice. As a result, the steps outlined in this guide may vary accordingly.
:::

1. With your Okta account, sign into your Okta Administrative portal. 
2. In the top left corner menu, select **Applications > Catalog > All Integrations**.
3. Search for **Segura** SAML, SCIM  app.
4. Once the app integration is added, you will be redirected to the application's assignments page.

* * *

### Steps Authenticate the SCIM application

1. After creating the application in the previous step, select the **General** tab on the initial screen of the **Application.**
2. In the **App Settings** section, click **Edit**.
3. Localize the **Provisioning** field and set **SCIM**.
4. Click **Save**. 
5. Go to the **Provisioning** tab.
6. In the left column, select **Settings > Integration**. Click the **Edit** button and complete the information.
7. Click **Configure API Integration**
8. Select **Enable API integration**
    1. In **API Token**, To acquire the authorization token, use the Postman app or the following CURL command:
        :::(Info) (Client Secret and ID)
         You can find both pieces of information in your Segura, under the **Settings > Identity Management (IGA) > Providers** section. Click on the provider details that was created for use with Okta.
        :::
        ```
        curl --insecure -d "grant_type=client_credentials&client_id=<CLIENT_ID>&client_secret=<CLIENT_SECRET>&ttl=60" "https://<DNS_senhasegura>/iso/oauth2/token" -s --show-error -X POST
        ```
        :::(Warning) (Short time token)
        As Segura uses OAuth and is not yet in the gallery apps that are supported by Microsoft, your token is valid only for **one hour**. Please repeat the process after the designated time.
        :::
    2. Click **Base URL**, which you shoud be Segura URL. Example: ```https://mysenhasegura/```
    3. Click **Test connector**.
    4. Click **Save**.

* * *

### Associate a group with the SCIM application

1. In the top left corner menu, select **Directory > Groups**.
2. In **Group name**, click the name of the group you want to associate with your application.
3. In the **Applications** tab, click the **Assign Applications** button.
4. Locate the name of the SCIM application you created in the list and click **Assign**.
5. In the window **Assign Applications to Group name you want to associate with the application**.
6. Click **Save and Go Back**.
7. Click **Done**.

* * *

### Activate the group in application

1. In the top left corner menu, select **Applications > Applications**.
2. Click the application you created.
3. On your application's home screen, select the **Push Groups** tab.
4. Locate the **Push Groups** button and select + **Find groups by name.**
5. Enter the group name you'll activate in the **Enter a group to push** field.
6. Click **Save.**
7. Wait for the pushing to finish.
8. On the right, you'll see the confirmation **Active** in green in the **Push Status** column.

You've just configured your SCIM application in Okta. The groups you’ve activated in the application will appear on the Segura platform.

- If you’ve created a group of **Vendors**, see the list in **Product menu > Domum Remote Access > Settings > Vendor**.
- If you’ve created a Group of internal users, see the list at:
- **Product menu  > Settings > User Management > Users**  (for users).
- **Product menu  > Domum > Settings > Internal Users > Group**  (for groups).


