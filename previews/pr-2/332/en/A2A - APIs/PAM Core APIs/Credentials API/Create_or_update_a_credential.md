# Create or update a credential

This document presents how to create or update a credential in **PAM Core** via API, the available endpoints, the parameters needed, example requests, and expected responses on success or in case of errors.


## Methods

### `POST` Create  or update a credential

#### Request

To create or update a credential in **PAM Core,** send a request to the following endpoint:

`/iso/pam/credential` 

:::(Error) (Alert!)
If you're using **A2A** to create or update a credential and the corresponding device doesn't exist, you’ll need to create the device first. For more information, access the document on [configuring a device](/v3-32/docs/pam-devices-management).
:::

### Request parameters

**Body**

| Field                 | Type   | Required | Description                                           | Example            | New Credential Default Value |
|-----------------------|--------|----------|-------------------------------------------------------|--------------------|------------------------------|
| `identifier`          | String | **No** (when creating a credential). **Yes** (when updating a credential). **Note**:  go to the [Credential management options](/v3-32/docs/a2a-pam-core-create-or-update-a-credential#credential-management-options) section for more details. | Unique string defined by the user to identify the credential.        | 123                | -                            |
| `username`            | String | Yes                                                      | Username assigned to the credential.                  | my_user            | usr                          |
| `content`             | String | No                                                       | Password assigned to the credential.                  | MyPrettyPassword@1234 | -                            |
| `additional`          | String | No                                                       | Additional information.                               | DATABASE           | -                            |
| `tags`                | String | No                                                       | Tags associated with the credential.                  | api, app           | -                            |
| `credential_type`     | String | No                                                       | Type of credential. A new type is created for each unique value. | Domain User        | Local User                   |
| `domain`              | String | No                                                       | Domain name or abbreviation. Only previously registered domains are accepted. | senhasegura.lab    | -                            |
| `parent_password`     | Int    | No                                                       | ID of the parent credential.                         | 123                | -                            |
| `hostname`            | String | Yes                                                      | Device name.                                         | localhost          | -                            |
| `ip`                  | String | Yes                                                      | Device's IP address.                                 | 127.0.0.1          | -                            |
| `type`                | String | No                                                       | Device type. A new type is created for each unique value. | Server             | -                            |
| `vendor`              | String | No                                                       | Device vendor. A new vendor is created for each unique value. | Debian             | -                            |
| `model`               | String | No                                                       | Device model. A new model is created for each unique value. | 10.0 Buster        | -                            |
| `site`                | String | No                                                       | Device's site. A new site is created for each unique value. | Default            | -                            |
| `device_domain`       | String | No                                                       | Domain name or abbreviation. Only previously registered domains are accepted. | senhasegura.lab    | -                            |
| `device_tags`         | String | No                                                       | Tags associated with the device.                     | api, app           | -                            |
| `connectivities`      | String | No                                                       | Device connectivity.                                 | SSH:22, HTTPS:443  | -                            |
| `session_remote_config` | String | No                                                      | Login expression.                                    | SSH:EXPECT:FILL    | -                            |


### Credential management options
After sending the request, you can either create or update a credential registered in **PAM Core** by choosing between filling in the `identifier` parameter or the `hostname`, `ip`, and `username` parameters.

:::(Info) (Info)
Before you proceed, know that when the terms **valid** and **invalid** are used, they mean:
* **valid** - a value that has been previously assigned to a credential.
* **invalid** - a value that hasn't been previously assigned to a credential.
:::

### Fill in the identifier parameter
When providing an `identifier`, pay attention to the following:

* The `identifier` parameter takes precedence over the credential’s `username`. Therefore, providing an `identifier` when creating the credential enables you to update the credential’s `username` in a subsequent call.
* Provide a valid `hostname` and `ip`.
* When updating the credential, if the `identifier` provided is invalid, the system will search for the credential using its `hostname`, `ip`, and `username` information.
* If the credential is found, it will be updated with all the provided parameters, including the `identifier`.
* If the credential isn’t found, a new one will be created based on the parameters provided.




#### **Create a credential with an invalid identifier**  

When you provide an  invalid `identifier`, the system will search for the credential using its `hostname`, `ip`, and `username`. If these values aren’t found, the credential will be created.

**Example request**

```json
{
    "username" : "jhoncredential",
    "hostname": "Linkedin",   
    "ip": "linkedin.com",
    "content": "vfdvds##@",
    "tags": "social",
    "identifier": "identifierjhon"
}


```

#### Return

Creates a credential in **PAM Core,** and returns a message with information about the creation process.

**Expected response**


```json
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Credential successfully registered!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential successfully registered!",
        "erro": false,
        "cod_erro": 0
    },
    "credential": {
        "id": "115",
        "tag": null
    }
}
```
#### **Update a credential with a valid identifier**

When you provide a valid `identifier`, the credential will be updated based on the other parameters provided.

**Example request**
```json
{
    "username" : "cred6updatetest",
    "hostname": "Linkedin",   
    "ip": "linkedin.com" ,
    "identifier": "identifiertesting",
    "content": "bfgbdfbdsd#@"
}

```

#### Return
Updates a credential in **PAM Core** based on its `identifier`and returns a message with information about the updating process.

**Expected response**

```json
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Credential updated successfully!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential updated successfully!",
        "erro": false,
        "cod_erro": 0
    },
    "credential": {
        "id": "114",
        "tag": "identifierjhon"
    }
}

```
#### **Update a credential with an invalid identifier**

When you provide an invalid`identifier`, the system will search for the credential using its `hostname`, `ip`, and `username` information. If these values are found, the credential will be updated.

**Example request**
```json
{
    "username" : "TLS12Testing@outlook.com",
    "hostname": "Outlook",
    "ip": "login.live.com" ,
    "identifier": "identifiertesting"
}
```
#### Return

Updates a credential in **PAM Core** based on its `username, hostname` and `ip` and returns a message with information about the updating process.

**Expected response**

```json
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Credential updated successfully!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential updated successfully!",
        "erro": false,
        "cod_erro": 0
    },
    "credential": {
        "id": "1",
        "tag": "identifiertesting"
    }
}
```
**In case of error - missing a required parameter**

```
HTTP/1.1 400 Bad Request
```

```json
{
    "response": {
        "status": 400,
        "mensagem": "1004: The device's hostname was not informed",
        "erro": true,
        "message": "1004: The device's hostname was not informed",
        "error": true
    },
    "exception": {
        "code": 1004,
        "message": "1004: The device's hostname was not informed",
        "detail": null
    }
}
```

### Fill in the hostname, ip, and username parameters

* When creating a credential, if you don’t provide an `identifier`, you must provide a `hostname`, an `ip`, and a `username`.
* The `hostname` and `ip` must be valid.
* If a valid `username` is provided, the credential will be updated.
* If the `username` provided is invalid, a new credential will be created.

:::(Info) (Info)
If you assign a unique `identifier` to the credential during its creation, you can use it to edit the credential in a subsequent call.  
:::

#### Create a credential with an invalid username
When you provide an invalid `username`, a credential will be created based on the other parameters provided.

**Example request**

```json
{
    "hostname": "gmail",
    "username": "cred9",
    "ip": "https://www.gmail.com",
    "identifier": "identifier2",
    "additional": "my credential"
}
```
#### Return
Creates a credential in **PAM Core** and returns a message with information about the creation process.

**Expected response**

```json
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Credential successfully registered!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential successfully registered!",
        "erro": false,
        "cod_erro": 0
    },
    "credential": {
        "id": "115",
        "tag": null
    }
}
```

#### Update a credential with a valid username 

When you provide a valid `username`, the credential will be updated based on the other parameters provided.

**Example request**

```json
{
    "username" : "cred9",
    "hostname": "Facebook",   
    "ip": "facebook.com",
    "content": "updating-my-password",
    "tags": "face, social, updated"
}
```

#### Return
Updates a credential in **PAM Core** based on its `username` and returns a message with information about the updating process.

**Expected response**

```json
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Credential updated successfully!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential updated successfully!",
        "erro": false,
        "cod_erro": 0
    },
    "credential": {
        "id": "115",
        "tag": null
    }
}
```

**In case of error - missing a required parameter**

```
HTTP/1.1 400 Bad Request
```

```json
{
    "response": {
        "status": 400,
        "mensagem": "1004: The device's hostname was not informed",
        "erro": true,
        "message": "1004: The device's hostname was not informed",
        "error": true
    },
    "exception": {
        "code": 1004,
        "message": "1004: The device's hostname was not informed",
        "detail": null
    }
}
```

### Other credential parameters
You can also configure the credential by adding other parameters available in the following tabs:

* Execution settings.
* Session settings.
* Additional settings. 
* JIT settings.

#### Execution Settings

**Request body parameters**

| Field                           | Type    | Required | Description                                                      | Example                 | New Credential Default Value |
|---------------------------------|---------|----------|------------------------------------------------------------------|-------------------------|------------------------------|
| `parent_credential`             | String  | No       | Parent credential selected for edited credential.                | my_user                 | -                            |
| `parent_hostname`               | Int     | No       | Hostname for the parent credential selected.                     | gmail                   | -                            |
| `parent_ip`                     | Int     | No       | IP of the device for the parent credential selected.             | 10.10.10.10             | -                            |
| `automatic_change`              | Boolean | No       | Enables or disables automatic change.                            | true            | false                            |
| `agent_based_password_change`   | Boolean | No       | Enables or disables agent-based password change.                 |           | false                             |
| `change_plugin`                 | String  | No       | Change plugin to be used when rotating the credential.          | SSH                     | -                            |
| `change_template`               | String  | No       | Change template for rotating the credential.                    | 3COM                    | -                            |
| `use_own_credential_to_connect` | Boolean | No       | Enables or disables the use of own credential to connect.       | false                   | false                              |
| `authentication_credential`     | String  | No       | Credential used to authenticate during credential rotation process. | cred2                | -                            |
| `authentication_hostname`       | String  | No       | The authentication hostname.                                    | gmail                   | -                            |
| `authentication_ip`             | String  | No       | The authentication IP address.                                  | https://www.gmail.com   | -                            |
| `status`                        | Boolean | No       | Enables or disables Credential reconciliation after rotation failure. | true      | false                             |
| `reconciliation_credential`     | String  | No       | Credential to be used in the reconciliation process.            | cred2                   | -                            |
| `reconciliation_hostname`       | String  | No       | The reconciliation hostname.                                    | gmail                   | -                            |
| `reconciliation_ip`             | String  | No       | The reconciliation IP address.                                  | https://www.gmail.com   | -                            |
| `reconciliation_plugin`         | String  | No       | Execution plugin for the credential reconciliation process.     | SSH                     | -                            |
| `reconciliation_template`       | String  | No       | Template for the credential reconciliation process.             | 3COM                    | -                            |


**Example request**

```json
{
    "username": "exemplo caderno 3.32",
    "hostname": "API-Testing",
    "ip": "128.0.0.1",
    "execution_settings": 
    {
        "parent_credential": "cred2",
        "parent_hostname": "gmail",
        "parent_ip": "https://www.gmail.com",
        "automatic_change": true,
        "agent_based_password_change": true,
        "change_plugin": "SSH",
        "change_template": "3COM",
        "use_own_credential_to_connect": false,
        "authentication_credential": "cred2",
        "authentication_hostname": "gmail",
        "authentication_ip": "https://www.gmail.com",
        "status": true,
        "reconciliation_credential": "cred2",
        "reconciliation_hostname": "gmail",
        "reconciliation_ip": "https://www.gmail.com",
        "reconciliation_plugin": "SSH",
        "reconciliation_template": "3COM"
    }
}
```

#### Session settings
**Request body parameters**

 | Field       |            | Type             | Required | Description                                                   | Example | New Credential Default Value |
|---------------------------------------|------------|------------------|----------|---------------------------------------------------------------|---------|------------------------------|
| `SSH`                                 |            | Boolean          | No       | Enables or disables SSH protocol.                             | true    | false                        |
| `Telnet`                              |            | Boolean          | No       | Enables or disables Telnet protocol.                          | true    | false                        |
| `MySQL`                               |            | Boolean          | No       | Enables or disables MySQL.                                    | true    | false                        |
| `SQL Server`                          |            | Boolean          | No       | Enables or disables SQL Server.                               | true    | false                        |
| `HTTP`                                |            | Boolean          | No       | Enables or disables HTTP protocol.                            | true    | false                        |
| `HTTPS`                               |            | Boolean          | No       | Enables or disables HTTPS protocol.                           | true    | false                        |
| `RDP`                                 |            | Boolean          | No       | Enables or disables RDP protocol.                             | true    | false                        |
| `X11 Forward`                         |            | Boolean          | No       | Enables or disables X11 Forward.                              | true    | false                        |
| `VNC`                                 |            | Boolean          | No       | Enables or disables VNC.                                      | true    | false                        |
| `restrict_access_to_remote_application`|            | Boolean          | No       | Enables or disables restricted access to remote application.  | true    | false                        |
| `macros`                              |            | Array of objects | No       | Automation macro for RemoteApp.                               | -       | -                            |
|                           |  `remote_app`          | String           | No       | RemoteApp automation associated to the credential.            | MySQL   | -                            |
|                      |     `connectivity`          | String           | No       | Connectivity for RemoteApp automation associated to the credential. | SSH | -                            |
| `use_own_credential_to_connect`       |            | Boolean          | No       | Enables or disables the use of own credential to connect.    | false   | true                         |
| `authentication_credential`           |            | String           | No       | The authentication credential.                               | cred2   | -                            |
| `authentication_hostname`             |            | String           | No       | The authentication hostname.                                 | gmail   | -                            |
| `authentication_ip`                   |            | String           | No       | The authentication IP address.                               | https://www.gmail.com | -  |


**Example request**

```json
{
    "username": "exemplo caderno 3.32",
    "hostname": "API-Testing",
    "ip": "128.0.0.1",
    "session_settings": 
        {
            "SSH": true,
            "Telnet": true,
            "MySQL": true,
            "SQL Server": true,
            "HTTP": true,
            "HTTPS": true,
            "RDP": true,
            "X11 Forward": true,
            "VNC": true,
            "restrict_access_to_remote_application": true,
            "macros": 
            [
                {
                    "remote_app": "MySQL",
                    "connectivity": "SSH"
                },
                {
                    "remote_app": "Kaspersky",
                    "connectivity": "RDP"
                }
            ],
            "use_own_credential_to_connect": false,
            "authentication_credential": "cred2",
            "authentication_hostname": "gmail",
            "authentication_ip": "https://www.gmail.com"
        }
}


```

#### Additional settings

**Request body parameters**

| Field                           |            | Type             | Required | Description                                                   | Example                                | New Credential Default Value |
|---------------------------------|------------|------------------|----------|---------------------------------------------------------------|----------------------------------------|------------------------------|
| `identifier`                   |            | String           | No       | Unique string to identify the credential.                     | `identifier`                          | -                            |
| `user_credentia_owner`         |            | String           | No       | The user credential owner.                                    | `admin`                                | -                            |
| `server_path`                  |            | String           | No       | Location path of the script or file where the credential is located. | `/etc/host`                       | -                            |
| `secret_key`                   |            | String           | No       | The secret key (TOTP).                                        | `295B3LA1M6LRAHI2S7G1A36LMK6I4IWW`    | -                            |
| `criticality`                  |            | String           | No       | The criticality level. Possible values are Low, Medium, and High. | `High`                                 | `Medium`                    |
| `additional_authentication_fields`|          | Array of objects | No       | List of additional authentication fields.                    | -                                      | -                            |
|                                 | `name`     | String           | No       | Name of an additional authentication.                         | `name`                                 | -                            |
|                                 | `short_name` | String        | No       | Short name of an additional authentication.                   | `short_name1`                          | -                            |
|                                 | `value`    | String           | No       | The value to be filled in during the additional authentication process. | `Enable`                            | -                            |
| `notes`                         |            | String           | No       | General notes about the credential.                           | `Credential to be used only in network A.` | -                            |

**Example request**

```json
{
    "username": "exemplo caderno 3.32",
    "hostname": "API-Testing",
    "ip": "128.0.0.1",
    "additional_settings": 
        {
            "identifier": "identifer",
            "user_credential_owner": "admin",
            "server_path": "/etc/host",
            "secret_key": "295B3LA1M6LRAHI2S7G1A36LMK6I4IWW",
            "criticality": "High",
            "additional_authentication_fields": 
            [
                {
                    "name": "name",
                    "short_name": "short_name1",
                    "value": "Enable"
                },
                {
                    "name": "name2",
                    "short_name": "short_name2",
                    "value": "value"
                }
            ],
            "notes": "Credential to be used only in network A"
        }
}

```

#### JIT Settings



**Request body parameters**


| Field                           | Type    | Required | Description                                                     | Example                   | New Credential Default Value |
|---------------------------------|---------|----------|-----------------------------------------------------------------|---------------------------|------------------------------|
| `jit`                           | Boolean | No       | Enables or disables just in time (JIT) settings.                | false                     | false                        |
| `credential_creation_and_deletion` | Boolean | No       | Enables or disables the creation and deletion of credentials.   | true                      | -                            |
| `enable_disable_credential`     | Boolean | No       | Enables or disables a credential.                               | false                     | -                            |
| `use_own_credential_to_connect` | Boolean | No       | Enables or disables the use of own credential to connect.       | false                     | Yes                          |
| `authentication_credential`     | String  | No       | The authentication credential.                                  | cred2                     | -                            |
| `authentication_hostname`       | String  | No       | The authentication hostname.                                    | gmail                     | -                            |
| `authentication_ip`             | String  | No       | The authentication ip address.                                  | https://www.gmail.com     | -                            |
| `credential_creation_plugin`    | String  | No       | The authentication credential plugin.                           | Windows RM                | -                            |
| `credential_creation_template`  | String  | No       | The authentication credential template.                        | Create credential Windows server. | -                            |
| `credential_deletion_plugin`    | String  | No       | The credential deletion plugin.                                | Windows RM                | -                            |
| `credential_deletion_template`  | String  | No       | The credential deletion template.                              | Delete credential Windows server. | -                            |
| `credential_enable_plugin`      | String  | No       | The credential enable plugin.                                  | Windows RM                | -                            |
| `credential_enable_template`    | String  | No       | The credential enable template.                                | Enable credential Windows server. | -                            |
| `credential_disable_plugin`     | String  | No       | The credential disable plugin.                                 | Windows RM                | -                            |
| `credential_disable_template`   | String  | No       | The credential disable template.                               | Disable credential Windows server. | -                            |


**Example request**

```json

{
    "username": "exemplo caderno 3.32",
    "hostname": "API-Testing",
    "ip": "128.0.0.1",
    "jit_settings": 
        {
            "jit": false,
            "credential_creation_and_deletion": true,
            "enable_disable_credential": false,
            "use_own_credential_to_connect": false,
            "authentication_credential": "cred2",
            "authentication_hostname": "gmail",
            "authentication_ip": "https://www.gmail.com",
            "credential_creation_plugin": "Windows RM",
            "credential_creation_template": "Create credential Windows server",
            "credential_deletion_plugin": "Windows RM",
            "credential_deletion_template": "Delete credential Windows server",
            "credential_enable_plugin": "Windows RM",
            "credential_enable_template": "Enable credential Windows server",
            "credential_disable_plugin": "Windows RM",
            "credential_disable_template": "Disable credential Windows server"
        }
}
```

## Possible errors
Here’s a list of HTTP error codes and their descriptions:
* **1004**: Missing device's hostname.
* **1005**: Missing device's ip address.
* **1007**: Credential not found.
* **1009**: No access to credential.

