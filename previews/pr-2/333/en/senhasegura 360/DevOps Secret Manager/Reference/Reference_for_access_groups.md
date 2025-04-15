# Reference for access groups

# Reference for Access groups

The access groups within senhasegura DevOps Secret Manager are accessible through **Grid Menu > DevOps Secret Manager > Access Control > Access Groups.**

## Top bar

| Item                 | Description                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------- |
| **Show filters**    | Represented by the magnifying glass icon. Displays or hides the search fields on the screen. |
| **Update**          | Represented by the counterclockwise arrow icon. Refreshes the page.                          |
| **View actions**    | Represented by the three vertical dots icon. Displays the possible actions for the page.     |
| **New group**       | Represented by the plus symbol. Opens the window for registering a new access group.         |
| **Print report**    | Represented by the printer icon. It opens a new page for printing the report.                |
| **Export CSV**      | Represented by the sheet of paper icon, downloads the report.                                |
| **Schedule report** | Represented by the clock icon. It opens the window for scheduling the report.                |

When you click on **Show filters**, a series of fields are displayed. These are used to refine your search results. They are:

| Item                            | Description                                                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **ID**                    | Code of the access group registered with senhasegura.                                                               |
| **Name**                  | Access group's name.                                                                                                |
| **Users can view secret** | Drop-down menu. Filters according to users' permission to view secrets. Can be set to**Yes** or **No**. |
| **Enabled**               | Drop-down menu. Filters according to the status of the access group. Can be set to **Yes** or **No**.             |

In addition to these options, you have two buttons: **Filter**, which applies the parameters that have been passed into the fields, and **Clear**, which clears all the parameters.

Next, we have the list field containing all the groups, filtered or not, which are displayed with the following fields:

* **ID**.
* **Name**.
* **Users can view secret.**
* **Requires reason:** indicates whether this access group requires a justification from the user to be viewed.
* **Requires approval:** indicates whether this access group requires approval from an approving user to be viewed.
* **Approval in levels:** indicates whether this access group requires approval in different levels.
* **Emergency allow without approval:** indicates whether the access group allows the user to have emergency permission, bypassing the need for approval.
* **Enabled**.

## Access group registration window

In the **Action** column, when you click on the Refresh icon, the **Access group register** window opens.

| Item                        | Description                                                             |
| --------------------------- | ----------------------------------------------------------------------- |
| **Access group name** | Name of the group registered with senhasegura.                          |
| **Enabled**           | Access group status in senhasegura. This is set to **Yes** by default. |
| **Description**       | Access groups description.                                              |

### Settings tab

#### In the Secrets preview setting section:

| Item                                           | Description                                                                                                                                                   |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Users can view secrets**               | Checkbox. This allows you to select whether users in this access group will have access to viewing secrets.                                                   |
| **Require reason**                            | Checkbox. This allows you to select whether users in this access group must fill in a justification for viewing.                                              |
| **Require approval**                          | Checkbox. This allows you to select whether users in this access group must be approved for viewing.                                                          |
| **Approvals required**                        | Allows you to indicate how many approvals are required for granting access.                                                                                   |
| **Disapprovals required to cancel**           | Allows you to indicate how many failures are necessary for access to be denied.                                                                               |
| **Approval in levels**                        | Checkbox. Allows you to indicate whether approval should be in levels.                                                                                        |
| **Governance ID required when justifying?**   | Allows you to indicate whether users of this access group must fill in the justification with a governance code. Can be set to **Yes** or **No**.           |
| **Always add the user manager to approvers?** | Allows you to indicate whether the user's manager will automatically be added as an approving user for that justification. Can be set to **Yes** or **No**. |

### Criteria tab

#### In the Application section:

| Item                                     | Description                                                                                                                                  |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Application names (comma-separated)** | Name of the applications that will be part of the access group. To indicate more than one application, enter the names separated by a comma. |
| **Application tags (comma-separated)**  | Tags das aplicações que farão parte do grupo de acesso. Para indicar um grupo de tags, insira-as separadas por vírgula.                  |
| **Line of Business**                    | Checkbox. Allows you to indicate the lines of business that the applications are part of. Allows more than one item to be selected.          |
| **Application Types**                   | Checkbox. Type of application. Allows more than one item to be selected.                                                                     |

#### In the Authorizations section:

| Item                                | Description                                                                                                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Systems (comma-separated)**      | Systems to which the access group has authorization. To indicate more than one system, enter the names separated by a comma.       |
| **Environments (comma-separated)** | Environments to which the access group is authorized. To indicate more than one environment, enter the names separated by a comma. |

#### In the Secrets section:

| Item                                       | Description                                                                                                                                               |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Secret names (comma-separated)**        | Secrets that the access group will be allowed to access. To indicate more than one secret, enter the names separated by a comma.                          |
| **Secret environments (comma-separated)** | Environments of the secrets that the access group will be allowed to access. To indicate more than one environment, enter the names separated by a comma. |
| **Secret tags (comma-separated)**         | Tags of the secrets that the access group will be allowed to access. To indicate more than one tag, enter the names separated by a comma.                 |

#### In the Users section:

This section lists all the users who are part of the access group. These users are presented in the form of a list with the following fields:

| Item                  | Description                                                          |
| --------------------- | -------------------------------------------------------------------- |
| **Recycle bin icon** | Serve para excluir aquele usuário do grupo de acesso.               |
| **ID**               | User registration code in senhasegura.                               |
| **Name**             | Name of the user in senhasegura.                                     |
| **Username**         | Username in senhasegura.                                             |
| **E-Mail**           | User's e-mail address in senhasegura.                                |
| **Creation type**    | Type of user creation.                                               |
| **Department**       | Department to which the user belongs.                                |
| **Added by**         | Name of the user who added the user in question to the access group. |
| **Added on**         | Date and time the user was added to the access group.                |

#### On the Approvers section:

This section lists all the users who are part of the access group with the role of approving user. These users are presented in the form of a list with the following fields:

| Item                       | Description                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Recycle bin icon** | This is used to remove the user from the approvers group.                                                                             |
| **ID**               | User registration code in senhasegura.                                                                                                |
| **Username**         | Username on senhasegura.                                                                                                              |
| **E-Mail**           | User's e-mail address in senhasegura.                                                                                                 |
| **Creation type**    | User creation type.                                                                                                                   |
| **Department**       | Department to which the user belongs.                                                                                                 |
| **Added by**         | Name of the user who added the user in question to the access group.                                                                  |
| **Added on**         | Date and time the user was added to the access group.                                                                                 |
| **Level**            | Drop-down menu. Allows you to indicate the approver level the user will have. It can take the values *Level 1, Level 2, or Level 3.* |

:::(info) (Info)
At the bottom of the window, you can view information about the access group. To do this, hover over the eye icon to display information about the user, date and time they created the group, and the user, date and time they last changed the access group settings.
:::