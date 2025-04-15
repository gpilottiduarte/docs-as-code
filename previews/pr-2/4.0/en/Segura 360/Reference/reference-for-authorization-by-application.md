# Reference for authorization by application

You can access the secrets list report through **Product Menu > DevOps Secret Manager > Applications > Authorization by application.**

On the screen, you'll find the following information.

## Top bar

| Item                      | Description                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Show filters**    | Represented by the magnifying glass icon, it hides or shows the filter options.                          |
| **Update**          | Represented by the counterclockwise arrow icon, it updates the information on the screen.                |
| **View actions**    | Represented by the three vertical dots, it opens a drop-down menu witht the option for the module. |
| **New application** | Opens the registration window for a new application.                                                     |
| **Print report**    | Identified by the printer icon. It opens a new page for printing the report.                             |
| **Export CSV**      | Identified by the sheet of paper icon, downloads the report.                                             |
| **Schedule report** | Identified by the clock icon, it opens the window for scheduling the report.                             |

When you click on **Show filters**, a series of fields are displayed. These are used to refine your search results by:

| Item                    | Description                                                                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Application**   | Application name.                                                                                                                                       |
| **Code. Authorization** | Authorization code.                                                                                                                                     |
| **Name**               | Authorization name.                                                                                                                                     |
| **System**             | This field is used for segmentation within Segura DSM. Register systems through **Product Menu > Settings > System parameters > Segmentation > Systems**.      |
| **Environment**        | This field is used for segmentation within Segura DSM. Register environments through **Product Menu > Settings > System parameters > Segmentation > Systems.** |
| **Creation date**      | Opens a calendar for you to choose the creation date. This will indicate that all authorizations created from this date will be filtered out.           |
| **until**              | Opens a calendar for you to choose an end date for the filter. This will indicate that all authorizations created up to this date will be filtered.     |
| **Enabled**            | Indicates the status of the authorization. The available options are: **Yes** or **No**.                                                                           |

In addition to these options, you have two buttons: **Filter**, which applies the parameters passed in the fields; and **Clear**, which clears all the parameters.

Authorizations are grouped according to the application to which they belong. When an application has multiple authorizations, it will appear listed under the application name.

:::(info) (Info)
The application name is clickable. If you click on the application name, you'll be taken to the **Application Configuration** window in edit mode.
:::

## Application Authorization window

The **Application Authorization** window will be displayed whenever you register or change an application authorization. It contains the following fields:

### Aba segurança

| Item                                                  | Description                                                                                                                                                                                           |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Authorized resources**                        | Three checkboxes: **Application, CI/CD, and Secrets Management.** Indicates which resources that application will have access to.                                                                    |
| **Expiration Date/Time**                        | Two fields. The first one opens a calendar for you to enter the authorization expiration date of this authorization. The second opens a drop-down menu to indicate the authorization expiration time. |
| **Enabled**                                     | Indicates the status of the authorization. Can be **Yes** or **No**.                                                                                                                                             |
| **Enable encryption of sensitive information?** | Indicates whether or not you want the information marked as sensitive to be encrypted by Segura.                                                                                                 |
| **Enable creation of DSM applications?**        | Indicates whether the application should be able to create DSM applications.                                                                                                                          |
| **Environment**                                 | Drop-down menu for selecting the authorization environment.                                                                                                                                           |
| **System**                                      | Drop-down menu for selecting the authorization system.                                                                                                                                                |
| **Allowed IPs**                                 | Field to indicate which IP addresses will be allowed in the authorization. Fill in the fields with `*` to allow any address.                                                                        |
| **Allowed HTTP referrers**                      | Field to indicate which HTTP referrers will be allowed in the authorization. Fill in an empty list (blank) to allow any referer.                                                                      |
| **Certificate fingerprint**                     | In the **Certificate validation** section, you can paste the certificate fingerprint into the text field.                                                                                        |

### Secrets tab

When you click on the **Secrets** tab, you see the plus icon next to the word **Secrets**. Clicking on this icon takes you to the **Secrets** modal, where you can add a secret to the authorization.

In the **Secrets** modal, you have the following fields:

| Item        | Description                                                                        |
| ----------- | ---------------------------------------------------------------------------------- |
| **ID**     | Secret code. Can be used to filter secrets according to code or code snippets.     |
| **Secret** | Secret name. Can be used to filter secrets according to name or parts of the name. |
| **Filter** | Button to apply the filter parameters.                                             |
| **Clean**  | Button to clear the filter parameters.                                             |

Below is a list of the secrets according to the parameters passed.

| Item               | Description                     |
| ------------------ | ------------------------------- |
| **Checkbox** | It's used to select the secret. |
| **ID**            | Secret code.                    |
| **Secret**        | Secret name.                    |

Below the list, you have two buttons: **Cancel**, which cancels the search and closes the modal, and **Add**, which adds the secrets selected through the checkbox. The secrets added via this modal will be associated with the authorization and shown in the **Secrets** tab.

### Encryption keys tab

When you click on the **Encryption keys** tab, you see the sum icon next to the word **Encryption keys**. Clicking on this icon takes you to the **Encryption keys** modal, where you can add a secret to the authorization.

In the Encryption keys modal, you have the following fields:

| Item                      | Description                                               |
| ------------------------- | --------------------------------------------------------- |
| **ID**                   | Registration code for the encryption key in Segura.  |
| **Encryption key**       | Name of the encryption key, as registered in Segura. |
| **Encryption algorithm** | Algorithm used in the encryption key.                     |

Below, you have a list of the encryption keys according to the parameters passed in.

| Item                      | Description                             |
| ------------------------- | --------------------------------------- |
| **Checkbox**             | It's used to select the encryption key. |
| **ID**                   | Encryption key code.                    |
| **Encryption key**       | Encryption key name.                    |
| **Encryption algorithm** | Algorithm used by that encryption key.  |

Below the list, you have two buttons: **Cancel**, which cancels the search and closes the modal, and **Add**, which adds the encryption keys selected through the checkbox. The encryption keys added via this modal will be associated with the authorization and shown in the list on the **Encryption keys** tab.

## View the authorization through the Application Authorization window

In the list of authorizations by application, you can view authorization details. To do this, in the **Action** column, click on the key icon to open the **Application Authorization** window in view mode. In this window, you have the following fields:

| Item                       | Description                                                                                                      |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Authentication method** | Informs the authorization authentication method.                                                                 |
| **Application**           | Informs which application that authorization is associated with.                                                 |
| **Unique key**            | Available only when the application is configured to use AWS authentication and has at least one associated ARN. |
| **Client ID**             | Client identification. To view it, click on the eye icon.                                                        |
| **Client secret**         | Client secret. To view it, click on the eye icon.                                                                |

### Secrets session

| Item                  | Description                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------- |
| **ID**               | Code of the secret associated with the authorization.                                       |
| **Name**             | Name of the secret associated with the authorization.                                       |
| **Identity**         | The secret's identity. When creating a secret, it's mandatory to add the name and identity. |
| **Magnifying glass** | The magnifying glass icon opens the window to request authorization to view the secret.     |