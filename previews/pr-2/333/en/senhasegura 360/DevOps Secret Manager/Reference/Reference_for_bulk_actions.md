# Reference for bulk actions

Bulk actions for secrets within the senhasegura DevOps Secret Manager are accessible through **Grid Menu > DevOps Secret Manager > Secrets management > Secrets > Bulk action**, represented by the button at the bottom of the page.

The bulk action process is divided into 3 steps: *Choice of operation, Choice of secrets,* and *Confirmation*.

## Step 1: Choosing an operation

| Item                     | Description                                             |
| ------------------------ | ------------------------------------------------------- |
| **Disable DSM secrets** | Option to start the bulk disabling process for secrets. |
| **Enable DSM secrets**  | Option to start the bulk enabling process for secrets.  |
| **Expire DSM secrets**  | Option to start the bulk expiration process of secrets. |

In the bottom right corner, you have the **Next** button to move on to step 2.

## Step 2: Choosing the secrets

| Item               | Description                                                                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Secrets+** | Option to add the secrets you want to perform a bulk operation on. By clicking the add sign, you'll be directed to the **Secrets** modal, where you can choose the secrets to be changed. |

### Secrets modal

| Item                 | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| **ID**              | Code used to register the secret in senhasegura.                    |
| **Name**            | Name of the secret in senhasegura.                                  |
| **Identity**        | Name of the identity associated with the secret within senhasegura. |
| **Engine**          | Name of the engine associated with the secret within senhasegura.   |
| **Expiration date** | Expiration date associated with the secret within senhasegura.      |

To perform the search, click on the **Filter** button; to clear the fields and restart the process, click on the **Clear** button.

The results of the secrets will be presented in the form of a list in the **Secrets** modal, following the existing fields in the filter, plus:

* **Checkbox**: select to add this secret to your selection.
* **Environment**: environment associated with the secret in senhasegura.
* **Cancel**: button to cancel the selection of secrets for the bulk operation. By clicking, no action will be taken, and the modal will be closed.
* **Add**: button to add the selection of secrets to the bulk operation. By clicking, the selected secrets will be added to the bulk action, and the modal will be closed.

There are two buttons in the bottom right corner: **Next**, to advance to step 3; **Previous**, to go back to step 1.

## Step 3: Confirmation

| Item                        | Description                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Changes**           | Indicates which change is being made. It can be of the type **Enabling** (the **Enable** field is assigned the value **Yes**), **Disabling** (the **Enable** field is assigned the value **No**), or **Expire** (the **Expiration** **date** field is assigned the value of the current time on the user's system in the format `DD/MM/YYYY HH:MM:SS`). |
| **Affected entities** | Indicates the secrets (entities) that will be affected by the change.                                                                                                                                                                                                                                                                                                                                          |

The secrets affected by the changes are listed below the **Affected entities** section and have the following fields:

| Item                 | Description                                                     |
| -------------------- | --------------------------------------------------------------- |
| **ID**              | Secret registration code within senhasegura.                    |
| **Name**            | Secret registration name within senhasegura.                    |
| **Identity**        | Name of the identity associated with the secret in senhasegura. |
| **Engine**          | Name of the engine associated with the secret in senhasegura.   |
| **Expiration date** | Expiration date associated with the secret in senhasegura.      |

In the bottom right corner, you have two buttons: **Save**, to finish the process and save the bulk operation request; **Previous**, to go back to step 2.