# Reference for dynamic provisioning profiles

You can access a list of all available profiles via the **Grid Menu > PAM Core > Dynamic Provisioning > Profiles.** On the screen, you will find the following information:

## Top bar

| Field                         | Description                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| **Show filters**        | Represented by the magnifying glass button, it hides or shows the filter options.    |
| **Update**              | Represented by the counterclockwise arrow, it updates the information on the screen. |
| **Show actions**        | Represented by the three vertical dots, it opens a drop-down menu with four options. |
| **New profile**         | Opens the**Credential provisioning profile** window                           |
| **Print report**        | Prints the report.                                                                   |
| **Export CSV**          | Exports the report in `.CSV` format.                                               |
| **Schedule the report** | Opens the form to schedule the report.                                               |

## Search fields

When you click on **Show filters**, a series of fields are displayed. These are used to refine your search results. They are:

| Field                | Description                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------ |
| **ID**         | Profile registration code in senhasegura.                                                  |
| **Identifier** | Name of the profile indicated when registering with senhasegura.                           |
| **Type**       | Drop-down menu. Allows you to choose between the template types registered in senhasegura. |
| **Enabled**    | Drop-down menu. Indicates the status of the profile. Can be**Yes** or **No**.  |

In addition to these options, you have two buttons: **Filter**, which applies the parameters passed into the fields, and **Clear**, which clears all the parameters.

## Report fields

In the profile list, you have the following fields:

* **ID**.
* **Identifier**.
* **Type**.
* **Default TTL**: profile lifetime in seconds.
* **Enabled**.
* In the **Action** column you can find the **Change profile** option, represented by the paper and pencil icon.

## Credential provisioning profile window

| Field                | Description                                                               |
| -------------------- | ------------------------------------------------------------------------- |
| **Identifier** | Name to identify the dynamic provisioning profile within senhasegura.     |
| **Enabled**    | Indicates the status of the profile. Can be**Yes** or **No**. |

### Type section

| Field                                                      | Description                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Type**                                             | Drop-down menu to select the type of dynamic provisioning.                                                                                                                                                                                                   |
| **Use registered credentials to access all devices** | Checkbox. Select this if you want to use an existing credential to access devices using the dynamic provisioning profile.                                                                                                                                    |
| **Registered system access credential**              | Drop-down menu for selecting the access credential previously registered with senhasegura .Note: this menu is only enabled if you select the**Use registered credential to access all devices** option.                                                |
| **Credential username**                              | Text field to indicate the username of the credential that will be used to access the devices via the dynamic provisioning profile.Note: this text field is only enabled if you don't select the**Use registered credential to access all devices **option. |

### Template section

| Campo                                  | Descrição                                                                                                                         |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Credential creation template** | Drop-down menu to select the template responsible for creating the dynamic provisioning credential.                                 |
| **Plus icon**                    | Next to the credential creation template drop-down menu. Clicking on the icon takes you to the**Template registration** form. |
| **Credential removal template**  | Drop-down menu to select the template responsible for removing the dynamic provisioning credential.                                 |
| **Plus icon**                    | Next to theCredential removal templatedrop-down menu. Clicking on the icon takes you to the template registration form.             |
| **Roles**                        | Text field for adding the roles to which the dynamic provisioning credential will be linked. Separate the roles with commas.        |
| **Question mark icon**           | Opens a modal explaining about the roles.                                                                                           |
| **Numeric entry button**         | This is used to determine the lifetime, in seconds, of the dynamic provisioning credential. The default value is 3600 seconds.      |