# POST | Create credential

Create a credential in **PAM Core**.

## Prerequisites

* Authorization with **access** and **read and write** permission to **PAM Core** granted by the administrator in **A2A**.\
  More information in [How to manage authorizations in A2A](../../../../../v4/docs/how-to-manage-authorizations-in-a2a/)
* Device created in **PAM Core**.\
  More information in [POST | Create device](../../../../../v4/docs/api-post-create-device/).

## Request

`POST` `/api/pam/credential`

## Request parameters

Send the parameters below in the request body.

* `identifier` - string - Unique string defined by the user or by Segura for identifying the credential.

Note: although users aren’t required to fill out this field, if left blank, the system will automatically generate a UUID-based `identifier` for security reasons. This value can be updated in future calls.Pattern: \[a-zA-Z0-9-\_.]Example: `018fe9a6-541d-7380-99b6-56051b71a475`

:::(error) (Alert!)\
Use only letters (a-z, A-Z), numbers (0-9), underscore (\_), hyphen (-), and period (.) when creating an `identifier`. Using other special characters will result in an error.\
:::

\
\*`username` - string - required - Name of the user assigned to the credential.

Note: the username parameter must be sent when updating the credential, even if its value is an empty string (`''`). In this case, it'll be automatically changed to the default value `usr`.

\
\*`hostname` - string - required - Hostname of the device associated with the credential.\
\*`ip` - string - required - IP address of the device associated with the credential.\
\*`content` - string - Password assigned to the credential.New credential default value: `-`\
\*`additional` - string - Additional credential information.New credential default value: `-`\
\*`tags` - string - Keywords associated with the credential.New credential default value: `-`\
\*`credential_type` - string - Type of credential.New credential default value: `Local User`\
\*`domain` - string - Name or abbreviation of the domain.New credential default value: `-`\
\*`parent_password` - int - ID of the parent credential.New credential default value: `-`\
\*`type`- string - Type of device.Note: a new type is created if the value is unique.New credential default value: `-`\
\*`vendor` - string - Device manufacturer.Note: a new vendor is created if the value is unique.New credential default value: `-`\
\*`model` - string - Device model.Note: a new model is created if the value is unique.New credential default value: `-`\
\*`site` - string - Device location.Note: a new site is created if the value is unique.New credential default value: `-`\
\*`device_domain` - string - Device domain name or abbreviation.Note: only previously registered domains are accepted.New credential default value: `-`

:::(Warning) (Attention)\
When listing more than one `device_domain`, add commas without spaces between them, as in the following example:`testlab.com,demo.lab.com`\
:::

\
\*`device_tags` - string - Keywords associated with the device.New credential default value: `-`\
\*`connectivities` - string - Device connectivity.New credential default value: `-`\
\*`session_remote_config` - string - Login expression.New credential default value: `-`\
\*`execution_settings` - object - Administrative settings for credential automatic password change and reconciliation.Example: refer to the [Execution settings](../../../../../v4/docs/pt/api-post-create-credential/#execution-settings) section.New credential default value: `-`\
\*`session_settings` - object - Settings for session privilege management for remote applications, connectivity protocols, among others.Example: refer to the [Session settings](../../../../../v4/docs/pt/api-post-create-credential/#session-settings) section.New credential default value: `-`\
\*`additional_settings` - object - Settings for implementing credential authentication mechanisms such as TOTP, and designation of the credential's owner user, among others.Example: refer to the [Additional settings section](../../../../../v4/docs/pt/api-post-create-credential/#additional-settings).New credential default value: `-`\
\*`jit_settings` - object - Settings to manage the service usage time.Example: refer to the [JIT settings section](../../../../../v4/docs/pt/api-post-create-credential/#jit-settings).New credential default value: `-`\


## Credential creation options

You can choose one of the following options to create a credential in **PAM Core**:

* Providing a value for the parameter `identifier`.
* Providing a value for the parameter `username`.

In both cases, you must provide existing values for the `hostname` and `ip` parameters of the device associated with the credential.

:::(Info) (Info)\
Before continuing, please note that the terms **existing** and **new** in the context of this document mean:

* **Existing** - a value that already belongs to a credential.
* **New** - a value that doesn’t belong to a credential yet.\
  :::

### Send the `identifier` parameter

* Send existing `hostname` and `ip` .
* Send a new `username`.
* Send a new `identifier`.

| Condition             | ->                                                                                 | Result                                                    |                                                           |
| --------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| Existing `identifier` |                                                                                    | The credential will be updated with the other parameters. |                                                           |
| New `identifier`      | The system will search for the credential by their `hostname`, `ip` and `username` | Credential found                                          | The credential will be updated with the other parameters. |
| Credential not found  | A new credential will be created..                                                 |                                                           |                                                           |

#### Example request - new `identifier`

The following example shows the creation of a credential with a new `identifier`.

`POST` `{{url}}/api/pam/credential`

```json
{
    "identifier": "dyaihdppaj78a547",
    "username" : "username",
    "hostname": "w2016",   
    "ip": "10.66.33.15",
    "content": "blfjahbnaihdaa",
    "tags": "social"
}
```

#### Response

```json
HTTP/1.1 201 CREATED
```

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
   "tenant": "Segura",
   "credential": {
       "id": "152",
       "identifier": "dyaihdppaj78a547"
   }
}

```

### Send the `username` parameter

* Send existing `hostname` and `ip`.
* Send a new `username`.
* Don’t send a value for the `identifier`.

| Condition           | Result                                                    |
| ------------------- | --------------------------------------------------------- |
| **New** `username`  | **A new credential will be created.**                     |
| Existing `username` | The credential will be updated with the other parameters. |

#### Example request - new `username`

The following example shows the creation of a credential with a new `username`.

`POST` `{{url}}/api/pam/credential`

```json
{
    "username" : "newusername",
    "hostname": "w2016",   
    "ip": "10.66.33.15",
    "content": "blfjahbnaihdaa",
    "identifier": "",
    "tags": "social"
}
```

#### Response

```json
HTTP/1.1 201 CREATED
```

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
    "tenant": "Segura",
    "credential": {
        "id": "149",
        "identifier": "018fea0c-6fe6-726c-87fd-8e595037e8a2"
    }
}
```

## Other credential parameters

You can also configure a credential by adding other parameters, which include:

* [Execution settings](../../../../../v4/docs/api-post-create-credential/#execution-settings).
* [Session settings](../../../../../v4/docs/api-post-create-credential/#session-settings).
* [Additional settings](../../../../../v4/docs/api-post-create-credential/#additional-settings).
* [JIT settings](../../../../../v4/docs/api-post-create-credential/#jit-settings).

### Execution Settings

Administrative settings of the credential in which you can define automatic password rotation and credential reconciliation.

#### Request parameters

Send the parameters below in the **body** of the request.

• `execution_settings` - object - Execution settings data.\
&#x20;   →`parent_credential` - string - Parent credential selected for the edited credential.\
&#x20;   →`parent_hostname` - string - Hostname of the selected parent credential.\
&#x20;   →`parent_ip` - string - Endereço IP address of the parent credential's device.\
&#x20;   →`automatic_change` - boolean - Enables or disables automatic changes.    New credential default value: `false`\
&#x20;   →`agent_based_password_change` - boolean - Enables or disables automated password change via software agent.    New credential default value: `false`\
&#x20;   →`change_plugin` - string - Change plugin used when rotating the credential on the device.\
&#x20;   →`change_template` - string - Change template used when rotating the credential on the device.\
&#x20;   →`use_own_credential_to_connect` - boolean - Enables or disables the use of the credential itself to connect to the device and change the password.    New credential default value: `false`\
&#x20;   →`authentication_credential` - string - required (if the value for the `use_own_credential_to_connect` parameter is `false`) - Credential used for authentication during the credential rotation process.\
&#x20;   →`authentication_hostname` - string - required (if the value for the `use_own_credential_to_connect` parameter is `false`) - Hostname of the authentication device.\
&#x20;   →`authentication_ip` - string - required (if the value for the `use_own_credential_to_connect` parameter is `false`) - IP address of the authentication device.\
&#x20;   →`status` - boolean - Enables or disables credential reconciliation after rotation failure.    New credential default value: `false`\
&#x20;   →`reconciliation_credential` - string - Credential to be used in the reconciliation process.\
&#x20;   →`reconciliation_hostname` - string - Hostname of the reconciliation device.\
&#x20;   →`reconciliation_ip` - string - IP address of the reconciliation device.\
&#x20;   →`reconciliation_plugin` - string - Execution plugin for the reconciliation process.\
&#x20;   →`reconciliation_template` - string - Execution template for the reconciliation process.

#### Example request

`POST` `{{url}}/api/pam/credential`

```json
{
    "username": "usernametest",
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

### Session Settings

Settings implemented to manage session privileges, where you can restrict remote applications, connectivity protocols, among others.

#### Request parameters

Send the parameters below in the **body** of the request.

• `session_settings` - object - Session settings data.\
&#x20;   →`SSH` - boolean - Enables or disables the SSH protocol.    New credential default value: `false`\
&#x20;   →`Telnet` - boolean - Enables or disables the Telnet protocol.    New credential default value: `false`\
&#x20;   →`MySQL` - boolean - Enables or disables MySQL connection.    New credential default value: `false`\
&#x20;   →`SQL Server` - boolean - Enables or disables SQL Server connection.    New credential default value: `false`\
&#x20;   →`HTTP` - boolean - Enables or disables the HTTP protocol.    New credential default value: `false`\
&#x20;   →`HTTPS` - boolean - Enables or disables HTTPS connection.    New credential default value: `false`\
&#x20;   →`RDP` - boolean - Enables or disables RDP connection.    New credential default value: `false`\
&#x20;   →`X11 Forward` - boolean - Enables or disables X11 Forward.    New credential default value: `false`\
&#x20;   →`VNC` - boolean - Enables or disables VNC connection.    New credential default value: `false`\
&#x20;   →`restrict_access_to_remote_application` - boolean - Enables or disables the use of the credential only in RemoteApp proxy sessions.    New credential default value: `false`\
&#x20;   →`macros` - array of objects - Macro automation data containing `remote_app` and `connectivity`.\
&#x20;         →`remote_app` - string - RemoteApp automation associated with the credential.\
&#x20;         →`connectivity` - string - Connectivity for RemoteApp automation associated with the credential.\
&#x20;   →`use_own_credential_to_connect` - boolean - Enables or disables the use of the credential itself for connection.    New credential default value: `false`\
&#x20;   →`authentication_credential` - string - required (if the value for the `use_own_credential_to_connect` parameter is `false`) - The authentication credential.\
.\
&#x20;   →`authentication_hostname` - string - required (if the value for the `use_own_credential_to_connect` parameter is `false`) - The hostname of the authentication device.\
&#x20;   →`authentication_ip` - required (if the value for the `use_own_credential_to_connect` parameter is `false`) - The IP address of the authentication device.

#### Example request

`POST` `{{url}}/api/pam/credential`

```json
{
    "username": "usernametest",
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

### Additional settings

Settings to implement credential authentication mechanisms, such as TOTP, and to designate the credential's owner, among others.

#### Request parameters

Send the parameters below in the **body** of the request.

• `additional_settings` - array of objects - Session settings data.\
&#x20;   →`identifier` - string - Credential identifier. Used to retrieve the credential via Webservice (A2A).\
&#x20;   →`user_credential_owner` - string - Credential owner's username.\
&#x20;   →`server_path` - string - Path to the script or file where the credential is stored.\
&#x20;   →`secret_key` - string - The secret key (TOTP) used to generate temporary passwords for authentication.\
&#x20;   →`criticality` - string - The criticality level of the credential. Possible values are `low`, `medium` and `high`.\
&#x20;   →`additional_authentication_fields` - array of objects - Additional information required to complete authentication steps containing `name`, `short_name` and `value`.\
&#x20;         →`name` - string - Name of the additional authentication.\
&#x20;         →`short_name` - string - Short name of the additional authentication.\
&#x20;         →`value` - string - The value to be filled in during the additional authentication process.\
&#x20;   →`notes` - string - General notes about the credential.    Example: `Credential to be used only in network A.`

#### Example request

`POST` `{{url}}/api/pam/credential`

```json
{
    "username": "usernametest",
    "hostname": "API-Testing",
    "ip": "128.0.0.1",
    "additional_settings": [
        {
            "identifier": "identifer",
            "user_credential_owner": "admin",
            "server_path": "/etc/host",
            "secret_key": "295B3LA1M6LRAHI2S7G1A36LMK6I4IWW",
            "criticality": "High",
            "additional_authentication_fields": [
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
            ]
        }
    ],
    "notes": "Credential to be used only in network A"
}

```

### JIT Settings

JIT (Just-in-Time) settings are implemented to manage the time-limited use of services, especially in contexts where temporary access is required to perform specific actions. This is often applied in situations like account creation, service activation, or adding temporary permissions to perform certain tasks.

JIT credentials are used to initiate sessions on devices located in segregated networks. These credentials are accessible via Web Proxy, Terminal Proxy, and RDP Proxy, ensuring secure and temporary access to the necessary resources.

In Segura, you can implement JIT settings when creating a credential for the following scenarios:

* Create and delete a credential upon the initiation and termination of a Proxy session.
* Enable and disable a credential upon the initiation and termination of a Proxy session.

#### Create and delete a credential upon the initiation and completion of a Proxy session.

#### Request parameters

Send the parameters below in the **body** of the request.

• `jit_settings` - object - Just-in-Time settings data for creating and removing credentials upon the initiation and termination of a Proxy session.\
&#x20;   →`jit` - boolean - Enables or disables JIT settings.\
&#x20;   →`credential_creation_and_deletion` - boolean - Indicates credential creation upon Proxy session initiation and deletion after session termination.\
&#x20;   →`use_own_credential_to_connect` - boolean - Enables or disables the use of the credential itself for connection.\
&#x20;   →`authentication_credential` - boolean - required (if the value for the `use_own_credential_to_connect` parameter is `false` - Authentication credential.\
&#x20;   →`authentication_hostname` - boolean - required (if the value for the `use_own_credential_to_connect` parameter is `false` - Hostname of the authentication device.\
&#x20;   →`authentication_ip` - boolean - required (if the value for the `use_own_credential_to_connect` parameter is `false` - IP address of the authentication device.\
&#x20;   →`credential_creation_plugin` - string - Plugin for credential creation.    Note: must bean existing plugin already registered in Segura.\
&#x20;   →`credential_creation_template` -string - Template for credential creation.    Note: must bean existing template already registered in Segura.\
&#x20;   →`credential_deletion_plugin` - string - Plugin for credential deletion.    Note: must bean existing plugin already registered in Segura.\
&#x20;   →`credential_deletion_template` - string - Template for credential deletion.    Nota: must bean existing template already registered in Segura.\


#### Example request

`POST` `{{url}}/api/pam/credential`

```json
{
  "username": "API_CREDENTIAL_3",
  "hostname": "API_DEVICE_1",
  "ip": "localhost",
  "jit_settings": {
    "jit": true,
    "credential_creation_and_deletion": true,
    "enable_disable_credential": false,
    "use_own_credential_to_connect": false,
    "authentication_credential": "API_CREDENTIAL_1",
    "authentication_hostname": "API_DEVICE_1",
    "authentication_ip": "localhost",
    "credential_creation_plugin": "SSH",
    "credential_creation_template": "Linux - Create User",
    "credential_deletion_plugin": "SSH",
    "credential_deletion_template": "Linux - Remove User"
  }
}
```

#### Enable and disable credential upon Proxy session initiation and termination

#### Request parameters

Send the parameters below in the **body** of the request.

• `jit_settings` - object - Just-in-Time settings for enabling and disabling a credential upon Proxy session initiation and termination.\
&#x20;   →`jit` - boolean - Enables or disables JIT settings.\
&#x20;   →`enable_disable_credential` - boolean - Indicates enabling the credential upon Proxy session initiation and disabling it after session termination.\
&#x20;   →`use_own_credential_to_connect` - boolean - Enables or disables the use of the credential itself for connection.\
&#x20;   →`authentication_credential` - string - required (if the value for the `use_own_credential_to_connect` parameter is `false`) - The authentication credential.\
&#x20;   →`authentication_hostname` - string - required (if the value for the `use_own_credential_to_connect` parameter is `false`) - The hostname of the authentication device.\
&#x20;   →`authentication_ip` - string - required (if the value for the `use_own_credential_to_connect` parameter is `false`) - The IP address of the authentication device.\
&#x20;   →`credential_enable_plugin` - string - Plugin for credential enablement.    Note: must bean existing plugin already registered in Segura.\
&#x20;   →`credential_enable_template` - string - Template for credential enablement.    Note: must bean existing template already registered in Segura.\
&#x20;   →`credential_disable_plugin` - string - Plugin for credential disablement.    Note: must bean existing plugin already registered in Segura.\
&#x20;   →`credential_disable_template` - string - Template for credential disablement.    Note: must bean existing template already registered in Segura.

#### Example request

`POST` `{{url}}/api/pam/credential`

```json
{
  "username": "API_CREDENTIAL_3",
  "hostname": "API_DEVICE_1",
  "ip": "localhost",
  "jit_settings": {
    "jit": true,
    "enable_disable_credential": true,
    "use_own_credential_to_connect": true,
    "authentication_credential": "API_CREDENTIAL_1",
    "authentication_hostname": "API_DEVICE_1",
    "authentication_ip": "localhost",
    "credential_enable_plugin": "LDAP",
    "credential_enable_template": "AD - Activate User",
    "credential_disable_plugin": "LDAP",
    "credential_disable_template": "AD - Deactivate User"
  }
}
```

## Errors

<details>

<summary>400 - Bad Request.</summary>

***

Message: "1004: The device's hostname was not informed"

Possible cause: the required parameter `hostname` of the device wasn’t informed.\


Solution: provide a value for the `hostname` parameter of the device and resend the request.

***

Message: "1005: The device's IP was not informed"

Possible cause: the required parameter `ip` of the device wasn’t informed.\


Solution: provide a value for the `ip` parameter of the device and resend the request.

***

Message: "1011: Device not found"

Possible cause: the device wasn’t found.\


Solution: provide a valid device and resend the request.

***

Message: "1029: It is not possible to enter a domain that has not been previously registered"

Possible cause: the `device_domain` sent doesn’t exist or the sent format is incorrect.\


Solution: provide a valid value for the `device_domain` , or, in case you’re sending more than one `device_domain` remember to not add space between commas. Example: `qakm.lab.mt4.dev,my_device_domain`.

***

Message: "1039: Without PAM Configuration Access permission"\
\
Possible cause: your authorization doesn’t have permission to create a credential.

Solution: ask the administrator to check your read and write permission to PAM Core resources in A2A.

***

Message: "1042: Invalid username"\
\
Possible cause: the required parameter `username` wasn’t sent.

Solution: enter the `username` parameter and resend the request. You don’t need to provide a value for the username, but you need to send the parameter.

***

Message: "1046: Plugin not informed"\
\
Possible cause: the plugin wasn’t informed.

Solution: provide a value for the credential creation, deletion, enablement or disablement plugin. This plugin must exist and be registered in Segura.

***

Message: "1047: Template plugin not informed"\
\
Possible cause: the template wasn’t informed.

Solution: provide a value for the credential creation, deletion, enablement or disablement template. This template must exist and be registered in Segura.

***

Message: "1053: "The identifier can only contain letters, numbers, "\_" and "-"."\
\
Possible cause: forbidden characters were used when creating the credential’s `identifier`.

Solution: use only letters, numbers, and the listed characters.

***

</details>

<details>

<summary>404 - Not Found</summary>

***

Message: "Resource sub not found"\


Possible cause: the URL or the requested resource isn’t correct.\


Solution: check the URL and make sure the parameter is correct.

***

</details>

<details>

<summary>500 - Internal Server Error</summary>

***

Message: "Unexpected error."\


Possible cause: the error is in the Segura server.\


Solution: contact the support team for more information.

***

Message: "You are not authorized to access this resource."

Possible cause: you don’t have the authorization to access this resource.\


Solution: ask the administrator to check your permission to access the PAM Core resources in A2A.

***

</details>

<details>

<summary>Client authentication failed</summary>

***

Message: "Client authentication failed."

Possible cause: failure in your application authentication with the Segura server.\


Solution: check the authentication parameters such as `Access Token URL`, `Client ID` e `Client secret` and request a new access token.

***

</details>

<details>

<summary>Invalid signature</summary>

***

Message: "Invalid signature"

Possible cause: failure in recognizing the URL of the client application.

Solution: check the URL of the client application and resent the request.

***

</details>

<details>

<summary>No route matched with those values</summary>

***

Message: "No route matched with those values."

Possible cause: the authorization header is missing in the API request.\


Solution: request a new access token.

***

</details>

<details>

<summary>Request timed out</summary>

***

Message: "Request timed out."

Possible cause: the request time has expired.\


Solution: check the connectivity between the source of the request and the Segura server.

</details>
