# SAML providers

This document provides a general overview about the SAML providers functionality.

## Path to access

1. On senhasegura, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **Settings**
2. In the side menu, select **Authentication > SAML > Providers.**

## Top bar

| Item                      | Description                                                                                                                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Show filters**    | Represented by the magnifying glass icon, it displays or hides the search fields on the screen.                                                                                                          |
| **Update**          | Represented by the counterclockwise arrow icon, it refreshes the page.                                                                                                                                   |
| **View actions**    | Represented by the three vertical dots icon, it shows all the possible actions for the report.                                                                                                           |
| **New provider**    | Represented by the plus icon, it opens the **SAML provider** screen.                                                                                                                                |
| **Print report**    | Represented by the printer icon, it opens a new page for printing the report.                                                                                                                            |
| **Export CSV**      | Represented by the paper sheet icon, it downloads the report.                                                                                                                                            |
| **Schedule report** | Represented by the clock icon, it opens the [Schedule report](https://docs.senhasegura.io/v3-31/docs/en/general-information-how-to-issue-download-and-schedule-device-reports#scheduling-reports) form. |

## Search fields

| Item                                 | Description                                                                                                               |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| **ID**                         | SAML provider code in senhasegura.                                                                                        |
| **Type**                       | Drop-down menu to select the type of SAML provider. The options are *Azure, KeyCloak, Okta*, and *SAML provider*. |
| **Entity ID**                  | ClientIdorEntityIdof the SAML application.                                                                                |
| **SAML provider metadata URL** | URL responsible for the provider's metadata.                                                                              |
| **Enabled**                    | Drop-down menu to select the status of the SAML provider. The options are **Yes** or **No**.                   |
| **Environment**                | Drop-down menu to select the SAML provider environment. The options are **Domum Remote Accessor Local.**             |

## Report fields

The results of the list are shown below:

* **ID**.
* **Type**.
* **Entity ID.**
* **SAML provider metadata URL.**
* **Enabled**.
* **Environment**.
* In the **Action** column, you have two options:
  * **Update provider**: represented by the pencil and paper icon, opens the **SAML Provider Registration** window.
  * **Delete provider:** represented by the trash can icon, deletes the SAML provider.

## SAML provider registration window

By clicking on **View actions > New provide**r, the registration window for the new SAML provider will open. You'll see the following fields:

### General information tab

| Item                                           | Description                                                                                                                                        |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Type**                                 | Drop-down menu for registering the type of SAML provider.                                                                                          |
| **Enabled**                              | Radio button for selecting the status of the SAML provider to be opened. By default, it is set toYes.                                              |
| **Environment**                          | Radio button for selecting the environment in which the SAML provider will be involved. It can be**Local** or **Domum Remote Access.** |
| **Entity ID**                            | Field to register theClientIDorEntityID.                                                                                                           |
| **SAML provider metadata URL**           | Field for registering application/realm metadata.                                                                                                  |
| **Domain or public IP for redirect URL** | Field for registering senhasegura's domain or public IP.                                                                                           |
| **Redirect URL**                         | URL do redirect.                                                                                                                                   |
| **Comment**                              | Field for registering comments relating to the SAML provider.                                                                                      |
| **SSO Sign-in URL**                      | `HTTP-Redirect BindURL`.                                                                                                                             |
| **SSO Sign-out URL**                     | `HTTP-Redirect Bind URL`.                                                                                                                             |
| **Type of Redirect Binding**             | Drop-down menu for choosing the type of **Redirect Binding** for the **SAML provider**.                                                 |

### Aba SAML de segurança

It only contains the **Certificate field (PEM format)**, where you must paste your certificate.

Please note that all the settings in the SAML security tab must be strictly the same as those configured in the **Identity Provider (IDP)** to ensure that SAML works properly. Any discrepancies will result in authentication failures.