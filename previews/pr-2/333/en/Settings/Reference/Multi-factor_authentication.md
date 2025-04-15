# Multi-factor authentication

In this document, you’ll find all the information about the **Multi-factor Authentication** section of the senhasegura settings.

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Authentication \> Multi-factor authentication \> Providers**.

## Top bar

| Item  | Description |
| :---- | :---- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| **New** | Represented by the plus icon, it opens the **Select the provider** screen for registering a new authentication provider. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the **Schedule report** form. |

## Search filters

| Item | Description |
| :---- | :---- |
| **ID** | Provider code in senhasegura. |
| **Name** | Provider name in senhasegura. |
| **Plugin** | *Drop-down menu that indicates the provider. Available options are RSA Authenticator, Duo Security, Radius, or AuthID* |
| **Enabled** | Drop-down menu that indicates whether the provider is active or not. *Available options are*  **Yes** or **No**. |

## Report fields

* **ID.**  
* **Name.**  
* **Plugin.**  
* **Enabled.**  
* **Creation date:** shows the date the provider was created (registered). It’s presented in the format `DD/MM/YYYY HH:MM`  
* **Action:** in this column, you have the option:  
  * **Edit:**  represented by the pencil and paper icon, it opens the **Provider Registration** screen where you can edit the provider’s information.

## Select the provider window

When you click on **New** in the **View actions** menu, you have these options:

* **RSA  Authenticator.**  
* **Duo Security.**  
* **Radius.**  
* **AuthID.**

Each option leads to the registration window for the indicated provider. The **RSA Authenticator and Duo Security** providers have the same registration fields.

## Provider registration window

When you click on one of the two options (*RSA Authenticator or Duo Security*), you are directed to these options:

| Item | Description |
| :---- | :---- |
| **Name** | Identifying name of the provider. |
| **Enabled** | Defines whether the provider is active or not. |
| **Endpoint** | Provider's endpoint URL. |
| **Client ID** | Client identifier provided by the provider. |
| **Key** | Authentication key for the provider. |

## Provider Registration window for Radius

For the Radius provider, you’ll have these options

| Item | Description |
| :---- | :---- |
| **Name** | Identifying name of the provider. |
| **Enabled** | Defines whether the provider is active or not. |
| **Hostname** | Hostname or IP of the Radius provider. |
| **Port** | Port for the Radius provider. |
| **Key** | Key for authentication. |
| **Timeout (s)** | Selector thatindicates the timeout time for the provider. |

## Provider Registration window for AuthID

For the AuthID provider, you’ll have these options:

| Item | Descrição |
| :---- | :---- |
| **Name** | Identifying name of the provider. |
| **Enabled** | Defines whether the provider is active or not. |
| **External ID** | External identifier provided by AuthID. |
| **API Key Value** | API key for authentication with AuthID. |