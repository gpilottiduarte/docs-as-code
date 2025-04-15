# OpenID providers

On this document, you'll find the information about the OpenID providers on senhasegura.

## Path to access

1. On senhasegura, in the upper left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Authentication > OpenID > Providers**.

## Top bar

| Item  | Description |
| :---- | :---- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| **New** | Opens the **Provider Registration** window to register a new OpenID provider |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the [**Schedule report**](https://docs.senhasegura.io/v3-31/docs/en/general-information-how-to-issue-download-and-schedule-device-reports\#scheduling-reports) form. |

## Search fields

| Item | Descrição |
| :---- | :---- |
| **ID** | Registration code of the OpenID provider in senhasegura. |
| **Type** | Drop-down menu to select the type of OpenID provider. |
| **Client ID** | Text field for entering the value of the client ID. |
| **Redirect URL** | Text field for entering the value of the OpenID provider's redirect URL. |
| **Enabled** | Drop-down menu to choose the status of the provider. It can be **Yes** or **No**. |
| **Environment** | Drop-down menu to choose the environment in which the provider will be used. |

## Report fields

* **ID.**  
* **Type.**  
* **Customer ID.**  
* **Redirection URL.**  
* **Status:**  
* **Environment.**  
* In the **Action** column, you have two options:  
  * **Update provider:** represented by the pencil and paper icon, opens the **Provider Registration** window in edit mode.  
  * **Three vertical dots:** by clicking on the three vertical dots icon, you have two options:  
    * **Provider details:** represented by the magnifying glass icon, opens the provider details window.  
    * **Delete provider:** represented by the trash can icon, deletes the provider.

## Provider registration window

By clicking on **Change** in the **Action** column or **View Actions \> New provider**, you can access the **Provider registration** window. It contains the following fields:

| Item | Description |
| :---- | :---- |
| **Type** | Type of OpenID provider. |
| **Enabled** | Radio button for selecting the provider's state. It can be **Yes** or **No**. |
| **Environment** | Radio button for selecting the provider's environment. It can be **Local** or **Domum Remote Access**. |
| **Client ID** | Client ID of the client in the OpenID provider. |
| **Client secret** | Secret of the client application in the OpenID provider. |
| **Domain or IP for Redirect URL** | Domain or public IP address of senhasegura. Used by the OpenID provider to redirect the user back to the app. |
| **Redirect URL** | The specific endpoint in the client application to which the OpenID provider will redirect the user after auth. |
| **Comments** | Comments field, such as notes, explanations, and others. |

### Endpoint settings section

| Item | Description |
| :---- | :---- |
| **OpenID endpoint configuration** | OpenID configuration endpoint. If Google OpenID is chosen, the field will be filled in automatically with Google's information. |

### URL for other endpoints section

| Item | Description |
| :---- | :---- |
| **Authorization endpoint** | URL provided by the OpenID provider where the application sends the authorization request. |
| **Token endpoint** | URL provided by the OpenID provider where the application requests to exchange the authorization code for an access token. |
| **Userinfo endpoint** | URL provided by the OpenID provider where the application can request information from the authenticated user's profile using the access token. |

### Extra settings for provider section

| Item | Descrição |
| :---- | :---- |
| **JWK endpoint (mandatory if it does not exist on the OpenID endpoint)** | Endpoint where the application can obtain the public keys from the OpenID provider to validate the signature of the access token. It's mandatory if these keys aren't available on the OpenID configuration endpoint. |
| **Additional issuers (separated by a comma)** | List of additional issuers that are accepted by the application. Useful when the application needs to support multiple OpenID providers. Issuers are separated by a comma. |
