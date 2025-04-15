# How to change passwords using Tk Expect for Oracle databases

Note that when dealing with database-type devices, specifically Oracle databases, with a user with the `$` character in their username, some particularities must be considered to perform automatic password changes using the Tk Expect plugin.

To perform the automatic change, you must ensure that you have a service credential registered on the same device and in the same database as the primary credential, the one that contains the `&` dollar sign character) character in the username and the one that doesn't contain the `$` character in the username.

So, to perform automatic password changes in Oracle databases using the Tk Expect execution template for users with the $ in their username, follow the steps below:

## Credential and template registration

1. On the **Credential** form, on the **Information** tab, ensure that the **Additional Information** field is filled in with the name of the database to which the user is linked. For example: `orclpdb`.
2. Still on the **Credential** form, on the **Execution Settings** tab, in the **Credential password change** settings section, ensure that the following parameters are filled in:
   1. Select the **Enable automatic change** checkbox to activate the functionality.
   2. In the **Change plugin** drop-down menu, select **Tk Expect.**
   3. In the **Change template** drop-down menu, select the **Tk Expect template**.
3. On the **Credential** form, on the **Execution Settings** tab, in the **Authentication settings** section, you must indicate, in the **Authentication credential** drop-down menu, a credential that contains a user who doesn't have the `$` character in their username and who is part of the same database as the user of the credential being edited.

:::(info) (Info)
Você pode encontrar o template no [repositório Segura](https://github.com/Segura/execution-templates).
:::

## Usage examples
### Parameters for the two credentials
### Main credential

* Username with `$` character: `qakm`.
* Device: `Oracle` (database).
* Additional information: `orclpdb`.

### Service credential

* Username without the `$` character: `teamqakm`.
* Device: `Oracle` (database).
  * It must be the same device as the primary credential.
* Additional information: `orclpdb`.

### In the main credential information form

Access: **Execution settings > Configuration of the credential password change** and fill in the following fields:

* Enable automatic exchange: `enabled`.
* Exchange plugin: `Tk Expect`.
* Exchange template: `TK-TEST`.

Under **Execution settings > Authentication configuration**, fill in the following fields:

1. Choose the service credential (`teamqakm`) in the **Authentication credential** drop-down menu.
2. To perform the password change execution, on the Segura platform, access **Grid Menu > Executions > Request password change**, select your credential, and click **Request password change** in the bottom right-hand corner. Confirm by clicking **Yes** in the confirmation modal and wait for your request to be executed.
3. To ensure that everything has been executed correctly, you can view the new password for your credential. To do this, access **Grid Menu > PAM Core > All**, click on the key icon in the **Action** column and select the **View password** option in the **Safe password view and transfer** form to compare with the previous password.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).

**