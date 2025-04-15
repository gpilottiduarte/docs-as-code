# About credential custody

Credential escrow in Privileged Access Management (PAM) systems refers to the practice of keeping the credentials used to authenticate access to privileged resources securely and encrypted. This practice helps protect critical information from unauthorized access, ensuring that only authorized people can access the credentials needed to perform important tasks on the system.

## My custody on the senhasegura platform

:::(info) (Info)
On senhasegura, the credential custody process is analogous to the account check-in procedure, while the custody release is analogous to the account check-out procedure.
:::

Access the credential custody area of the senhasegura platform from the **Grid Menu**, identified by the nine squares in the top left corner, and then select **Pam Core**. On the **Credentials** side menu, select the **My Custody** option.

The credentials the user in question has custody of will be listed on the main page.

:::(Info) (Info)
To obtain custody of a credential, the user simply needs to view the password via the password list on the senhasegura platform. This custody will be used to release access and allow other users to access that credential.
:::

Password custody is organized according to the device to which the credential is linked (For example: `AWS`, `100.66.120.101`, among others). To find out more about devices in the context of senhasegura, go to the documentation about **Devices**. To find out more about credentials, go to the **Credentials** documentation.

## Filter credentials

You can filter the credentials that the user has custody of. To do this, use any filter field at the top of the home page. This filter has the following fields:

| Field | Description |
| --- | --- |
| **ID** | Credential ID. |
| **Credential type** | Credential type. It can be: Domain user, Local administrator, Local User, SSH key. |
| **Device** | Device to which the credential belongs. |
| **Username** | The username registered for the credential. |
|**Additional information** | Additional information registered for the credential. |
| **Status** | Credential status. It can be Enabled or Disabled. |
| **Filter** | Button to filter the results according to the values entered. |
| **Clean** | Button to clear the fields and restart filtering. |

There are other information in the credentials list:

- **Expiration Date**: the date when the credential expires.
- **Last change**: the date of the most recent modification in the custody of the credential.
- **Begin of custody**: the start date of credential custody.
- **Last view**: the date when the credential was last viewed.
- **Duration**: the duration of the last credential view.
- **Action**: uncheck to release the credential for other users. When the confirmation modal appears, answer **Yes** to release the credential.