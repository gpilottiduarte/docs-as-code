# How to manage authorizations per application

To use Segura's **DevOps Secret Manager (DSM)** features, you must authorize your applications registered with Segura.

## Create an authorization per application in DevOps Secret Manager

To create an authorization per application, follow the steps below:

1. On Segura, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Applications > Authorization by application**.
3. The main screen will list all the applications registered in the Segura.
4. To create a new authorization by application, identify the application you want to authorize and, in the **Action** column, click on the plus icon.

In the **Application Authorization** window, fill in the following steps:

1. On the **Security** tab:

   1. **Authorized resources**: indicate which resources the application will be authorized to access.
   2. **Expiration date/time**: in the drop-down menu, select the date from the calendar that opens in the first field, and the time in the second field.
   3. **Active**: indicate whether you want the authorization to be active or not. By default, authorization will be set to Yes.
   4. **Enable encryption of sensitive information**: enables or disables encryption of information marked as sensitive.
   5. **Enable creation of DSM applications?**: enables or disables authorization to create DSM applications.
   6. **Environment**: in the drop-down menu, select the authorization environment. To learn how to register environments, access the How to register environments in DevOps Secret Manager documentation.
   7. **System**: in the drop-down menu, select the authorization system.
   8. **Allowed IPs**: list of IP addresses that will be allowed. Click on the plus icon to add as many IPs as you like. To allow any IP address, fill in *.
   9. **Referers allowed**: list of `HTTP REFERERS` allowed for this authorization. To allow any referer, create an empty list.
   10. **Certificate validation**: enter the certificate's fingerprint that will be used with this authorization.
2. In the **Secrets** tab, in the **Secrets** option, add the secrets that will be part of this authorization. To do this, follow the steps below:

   1. Click on the plus icon next to the word **Secrets**.
   2. In the **Secrets** modal, select the ones you want to add to the authorization.
   3. Click **Add**.
3. In the **Encryption Keys** tab, in the **Encryption Keys** option, add the encryption keys that will be part of the authorization. To do this, follow the steps below:

   1. Click on the plus icon next to the word **Encryption keys**.
   2. In the **Encryption keys** modal, select the ones you want to add to the authorization.
   3. Click **Add**.
4. Click **Save**.

## How to change an authorization per application in DevOps Secret Manager

To change an authorization per application in the DSM, access the list of applications through **Grid Menu > DevOps Secret Manager > Applications > Authorization per application.**

In the list, identify the application and the authorization you want to change. To do this, follow the steps below:

1. In the **Action** column, click the represented by the three vertical dots icon and, in the drop-down menu, select the **Change authorization** option.
2. In the **Application Authorization** window, make the necessary changes. This is the same window described in How to create an authorization per application in DevOps Secret Manager.
3. Click **Save**.

:::(info) (Info)
To download the authorization's private key, click the three vertical dots icon and select **Download private key** from the drop-down menu.
:::

## How to view an authorization

To view an authorization by application in the DSM, access the list of applications through **Grid Menu > DevOps Secret Manager > Applications > Authorization by application.**

In the list, identify the application and authorization you want to view. To do this, follow the steps below:

1. In the **Action** column, click **View authorizations**, represented by the key icon.
2. In the **Application authorizations**, fill in:
   1. **Authentication method**: authentication method used by the application.
   2. **Application**: name of the application.
   3. **Unique key**: unique value when the user marks authentication for AWS and has at least one ARN.
   4. **Client ID**: client identification. It must be a string as this example: `5e1983dc7014e5caab711aa73cd714400622256655d`.
   5. **Client secret**: secret of the client. Must be a string as this example: `9753d43831513ebf60c5f02dc7505f42`.
   6. In the **Secrets** section:
      1. **ID**: code of the secret in Segura.
      2. **Name**: application name in Segura.
      3. **Identity**:  name of the secret's identity. This is mandatory when creating a new secret and can't be the same as the Name field.

To view information about the secret, click on the magnifying glass icon and you'll be redirected to the **Secret** window with all the information about that secret.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).