# Reference for credentials

Reference guide to describe the options on the credential registration page of the senhasegura platform.

## Information

| Field | Description |
| --- | --- |
| Username | Username of the credential for the session authentication. Note that this credential must match the credential of the remote system. |
| Password type | Password type that defines the model of credentials used to segment users and assign permissions based on access groups. The password type can take three values: Domain User, Local Administrator, and Local user. |
| Domain | To which domain the credential belongs, and can be used to start sessions on other devices in the same domain. |
| Device | The device where the credential will be able to start sessions. |
| Additional information | Option to complement the use of the credential on the target device, such as, for example, in database connections. The field is also for use in automated password exchange and RemoteApp macros. |
| Status | Credential status: Enable or Disable. |
| Password | Credential password. Character Limit: 256. |
| Set current password | Enables the Password field and sets a new password manually. |
| Show password | Displays the password during editing. The eye icon identifies it. |
| Generate a password | Generates a random password as per the Password Policy. |
| Tags | Identifier for credential segregation |
| Secret key (TOTP) | Secret key to generate a TOTP token. To use the previous key, leave it blank. |

:::(Info) (Info)
Note the information box of password policies that must be considered when creating the password for the credential, thus ensuring the creation of a more secure password.
:::

## Execution settings

| Field | Description |
| --- | --- |
| Parent Credential | Select a credential to be considered the “parent” credential. From that point on, the “child” credential will always assume the same password as the parent credential. |

:::(Info) (Info)
The existence of a parent credential doesn't prevent the password of the child credential from being changed manually or automatically.
:::

### Credential password change settings

| Field | Description |
| --- | --- |
| Enable automatic change | Select to enable automatic credential change. |
| Enable agent-based password change | This feature that allows users to change their passwords through an automated process facilitated by a software agent is called agent-based password change. |
| Change plugin | Select the plugin used to connect and execute the change on the device. This plugin is linked to several connection protocols, there is no validation that the device has its connectivity active. |
| Change template | Select the template that the executing plugin will execute. In the senhasegura PAM solution, the user has access to a wide variety of templates developed and regularly updated. |

### Authentication Setup

| Field | Description |
| --- | --- |
| Use own credential to connect | Select to use the credential itself to connect to the device and perform the password change. |
| Authentication credential | If you don't use your own credential to change the automated password, select which credential will be used to connect to the device. |

It's possible to use a credential to start sessions on the device, and another already registered to perform the password change.

### Reconciliation Credential Setup

| Field | Description |
| --- | --- |
| Status | Enables credential reconciliation. Check **Active** or **Inactive** to define the status of the credential. |
| Autorun | Enables automatic password reconciliation for credentials. Check **Active** or **Inactive**. |
| Reconciliation Credential | Reconciliation Credential |
| Reconciliation plugin | Reconciliation plugin. |
| Reconciliation Template | Reconciliation template. |

To understand more, access the reconciliation credentials

## Session Settings

| Field | Description |
| --- | --- |
| Connectivity | Select which protocols the credential can use. Only the selected connectivities will be available to start a session. |

### Remote application settings

| Field | Description |
| --- | --- |
| Restrict access to remote application only | Select this option to use the credential only in RemoteApp proxy sessions. This option makes it impossible to use a proxy session that provides the desktop or terminal of the device, as it doesn't prevent the password from being made available to the user. |
| Automation macro (RemoteApp) | Add the RemoteApp macros linked to the credential and available to proxy users. |
| Use own credential to connect | Indicate whether the same credential will be used to authenticate the target device and the RemoteApp. |
| Authentication credential | If you don't use the RemoteApp credential, indicate which credential will be used for the authentication step. |
| Authentication device | Select the device where the credential will be authenticated and the macro will run. If completed, the device registered in the Information tab will be ignored. |

### Certificate

| Field | Description |
|-----------|--------------------------|
| Certificate Archive | Select the certificate file, in `.crt` format. |
| Key File | Select the certificate key file, in `.key` format. |
| Key password | If the key file is password protected, write the password in this field. |

:::(Info) (Info)
This Certificate configuration is only necessary to configure the [Database Proxy with Oracle database](/docs/pam-session-how-to-configure-a-credential-in-senhasegura-to-use-the-database-proxy -with-oracle).
:::

## Additional settings

| Field | Description |
| --- | --- |
| Identifier (for webservice): | Add identifiers for the triggered credential via A2A web services. |
| User credential owner | Select the user who owns the credential. This owner user will always have access to the credential. |
| Server path | Path to the file storing the credential. |
| Secret key (TOTP) | TOTP uses a secret key to generate temporary passwords for authentication. |
| Criticality | Set credential criticality to Low, Medium, or High. |
| Additional fields for authentication | Add the additional information you need to complete the authentication steps. |
| Notes | Add general notes if necessary. |

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).

