# Credentials registration

This document provides information about the **Credential registration** form screen, where it’s possible to register credentials to be used to start these Segura sessions.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Credentials > All credentials > Add.**

---
## Information Tab

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Username*** | Text field | Yes | Username of the credential that will be used to authenticate sessions, which must correspond to the credential of the remote system. |
| **Password Type*** | Dropdown menu | Yes | Password type that defines the template for credentials used to segment users and assign permissions based on access groups. The password type can take on three values: Domain user, Local administrator and Local user. |
| **Device*** | Dropdown menu | Yes | The device where the credential can initiate sessions. |
| **Domain** | Dropdown menu | No | Which domain the credential belongs to, and can be used to initiate sessions on other devices in the same domain. |
| **Additional Information** | Text field | No | Option to supplement the use of the credential on the target device, such as in database connections. The field is also for use in automated password exchange and RemoteApp macros. |
| **Status*** | Toggle button | Yes | Credential status, options are **Active** and **Inactive**. |
| **Set current password\*** | Toggle button | No | Enables the Password field and allows you to define a new password. |
| **Password** | Text field | No | Credential password. 256 character limit. |
| **Generate** | Button | No | Generates a random password as per the Password Policy. |
| **Tags** | Text field | No | Identifier for credential segregation. |

#### Password policies section  
Note the information box for password policies that must be considered when creating the password for the credential, thus ensuring a more secure password.  
More information about the rules applied to passwords in Policies.

## Execution settings tab  
:::(warning) (**Attention**)  
The child credential will always assume the same password as the parent credential. However, the existence of a parent credential doesn’t prevent the child credential's password from being changed manually or automatically.  
:::

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Parent credential** | Dropdown menu | No | Select a credential to be considered the “parent” credential. From that point on, the “child” credential will always assume the same password as the parent credential. |

#### Section Credential password change settings

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Enable automatic change** | Checkbox | No | Select to enable automatic credential switching. |
| **Enable agent-based password change** | Checkbox | No | Select to enable a feature that allows users to change their passwords through an automated process facilitated by a software agent. |
| **Change plugin** | Dropdown menu | No | Select the plugin used to connect and perform the switch on the device. This plugin is linked to several connection protocols, there is no validation that the device has active connectivity. |
| **Change template** | Dropdown menu | No | Select the template that will be executed by the executor plugin. In the PAMSegura solution, the user has access to a wide variety of templates developed and regularly updated. |

#### Section Authentication settings

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Use own credential to connect** | Checkbox | No | Select to use your own credentials to connect to the device and change the password. |
| **Authentication credential** | Dropdown menu | No | If you do not use your own credential to change the automated password, select which credential will be used to connect to the device. |

:::(info) (**Info**)  
It’s possible to use one credential to log in to the device and another that is already registered to change the password.  
:::

#### Section Reconciliation credential settings

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Status*** | Option button | Yes | Enables credential reconciliation. Check **Enabled** or **Disabled** to define the status of the credential. |
| **Autorun** | Option button | No | Enables automated reconciliation of passwords for credentials. Check **Enabled** or **Disabled**. |
| **Reconciliation credential** | Dropdown menu | No | Reconciliation credential |
| **Reconciliation plugin** | Dropdown menu | No | Reconciliation plugin. |
| **Reconciliation template** | Dropdown menu | No | Reconciliation template. |

## Session settings tab

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Connectivity** | Checkbox | No | Select which protocols the credential can use. Only selected connectivities will be available to start a session. |

#### Section Remote application settings

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Restrict access to remote application only** | Checkbox | No | Select this option to use the credential only in RemoteApp proxy sessions. This option makes it impossible to use a proxy session that provides the device's desktop or terminal, as it does not prevent the password from being made available to the user. |
| **Automation macro (RemoteApp)** | Table | No | Add RemoteApp macros linked to the credential and available to proxy users. |
| **Use own credential to connect** | Checkbox | No | Indicate whether the same credential will be used to authenticate the target device and the RemoteApp. |
| **Authentication credential** | Dropdown menu | No | If you do not use the RemoteApp credential, indicate which credential will be used for the authentication step. |
| **Authentication Device** | Dropdown menu | No | Select the device where the credential will be authenticated and the macro run. If completed, the device registered in the Information tab will be ignored. |

#### Certificate Section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Certificate file** | Upload field | No | Include the file containing the certificate. |
| **Key File** | Upload field | No | Include the file containing the *Key* of the certificate. |
| **Key password** | Text field | No | Add a password for the added certificate. |

## Additional settings tab

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Identifier (for webservice)** | Text field | No | Add identifiers for the credential triggered via A2A web services. |
| **User credential owner** | Dropdown menu | No | Select the user who owns the credential. This owner user will always have access to the credential. |
| **Server path** | Text field | No | Direction to the file that stores the credential. |
| **Secret key (TOTP)** | Text field | No | TOTP uses a secret key to generate temporary passwords for authentication. |
| **Criticality** | Dropdown menu | No | Set the criticality of the credential to *Low*, *Medium*, or *High*. |

#### Additional authentication fields section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **New extra field** | Table | No | Add new fields for authentication, the fields are *Name*, *Short name* and *Value*. |
| **Notes** | Text field | No | Add general notes if necessary. |

## JIT settings tab

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Just In Time settings*** | Radio button | Yes | Option for the credential to have JIT configuration. Select **Enabled** or **Disabled**. |
| **Just in time type** | Dropdown menu | No | Select one of the two options: Credential creation and deletion or Enable/Disable credential. |

#### Authentication settings section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Use own credential to connect** | Checkbox | No | Enable this field to use an auxiliary credential to make the connection. Note that this field must be enabled if you choose the Enable/Disable credential option. |
| **Authentication credential** | Dropdown menu | No | Indicate which credential will authenticate in the JIT step. |

#### Enable/Disable credential section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Credential enable plugin** | Dropdown menu | No | Choose one of the JIT credential enablement plugins. |
| **Credential enable template** | Dropdown menu | No | Choose one of the qualification templates for the JIT credential. |
| **Credential disable plugin** | Dropdown menu | No | Choose one of the deactivation plugins for the JIT credential. |
| **Credential disable template** | Dropdown menu | No | Choose one of the deactivation templates for the JIT credential. |

#### Credential creation and deletion section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Credential creation plugin** | Dropdown menu | No | Choose one of the authoring plugins for the JIT credential. |
| **Credential creation template** | Dropdown menu | No | Choose one of the creation templates for the JIT credential. |
| **Credentials removal plugin** | Dropdown menu | No | Choose one of the removal plugins for the JIT credential. |
| **Credential removal template** | Dropdown menu | No | Choose one of the removal templates for the JIT credential. |

## Review Tab  
This section provides summary information about the choices made in the previous steps. The information is grouped by each tab respectively.