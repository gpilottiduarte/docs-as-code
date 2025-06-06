# POST | Update credential

Update a credential in **PAM Core**.

## Requirements
*  Authorization with **access** and **read and write** permission to **PAM Core** granted by the administrator in **A2A**.
Access the document on [How to create an authorization for an application](/v3-33/docs/a2a-how-to-create-an-authorization-for-an-application) for more information.
* Credential created in **PAM Core**. 
Access the document [POST | Create credential](/v3-33/docs/api-post-create-credential) for more information.

## Request

 <code><span style="color:orange"> POST</code></span> `api/pam/credential`
 
 ## Request parameters
Send the parameters you want to update in the request <b>body</b>.

* </summary><code>identifier</code> - <b>string</b> - - <span style="color:red"> required</span style="color:red"> - Unique string defined by the user or by senhasegura for identifying the credential.</summary>
<b>Note</b>: this value is created in <a href = "/v3-33/docs/api-post-create-credential"> POST | Create credential </a> and is obtained in the response to the <a href = "/v3-33/docs/api-get-list-all-credentials"> GET | List all credentials</a> request.



<br>
* <summary><code>username</code> - <b><b>string</b></b> - <span style="color:red"> required</span style="color:red"> - Name of the user assigned to the credential.</summary>

<b>Note</b>: it's not necessary to send a value for the parameter, but it's necessary to send the parameter. 
<b>New credential default value</b>: <code>usr</code>

<br>
* <summary><code>hostname</code> - <b>string</b> - <span style="color:red"> required</span style="color:red"> - Hostname of the device associated with the credential.</summary>

<br>
* <summary><code>ip</code> - <b>string</b> - <span style="color:red"> required</span style="color:red"> - IP address of the device associated with the credential.</summary>

<br>
* <summary><code>content</code> - <b>string</b> -  Password assigned to the credential.</summary>
<b>New credential default value</b>: <code>-</code>

<br>
* <summary><code>additional</code> - <b>string</b> - Additional credential information.</summary>
<b>New credential default value</b>: <code>-</code>

<br>
* <summary><code>tags</code> - <b>string</b> - Keywords associated with the credential.</summary>
<b>New credential default value</b>: <code>-</code>


<br>
* <summary><code>credential_type</code> - <b>string</b> - Type of credential.</summary>
<b>New credential default value</b>: <code>Local User</code>

<br>
* <summary><code>domain</code> - <b>string</b> - Name or abbreviation of the domain.</summary>
<b>New credential default value</b>: <code>-</code>

<br>
* <summary><code>parent_password</code> - <b>int</b> - ID of the parent credential.</summary>
<b>New credential default value</b>: <code>-</code>

<br>
* <summary><code>type</code>- <b>string</b> - Type of device.</summary>
<b>Note</b>: a new type is created if the value sent is unique.
<b>New credential default value</b>: <code>-</code>
  
  <br>
* <summary><code>vendor</code> - <b>string</b> - Device manufacturer.</summary>
<b>Note</b>: a new vendor is created if the value sent is unique.
<b>New credential default value</b>: <code>-</code>

<br>
* <summary><code>model</code> - <b>string</b> - Device model.</summary>
 <b>Note</b>: a new model is created if the value sent is unique.
<b>New credential default value</b>: <code>-</code>

<br>
* <summary><code>site</code> - <b>string</b> - Device location.</summary>
<b>Note</b>: a new site is created if the value sent is unique.
<b>New credential default value</b>: <code>-</code>

<br>
* <summary><code>device_domain</code> - <b>string</b> - Device domain name or abbreviation.</summary>
<b>Note</b>: only previously registered domains are accepted.
<b>New credential default value</b>: <code>-</code>

:::(Warning) (Attention)
When listing more than one `device_domain`, add commas without spaces between them, as in the following example: 
`testlab.com,demo.lab.com`
:::

<br>
* <summary><code>device_tags</code> - <b>string</b> - Keywords associated with the device.</summary>
<b>New credential default value</b>: <code>-</code>

<br>
* <summary><code>connectivities</code> - <b>string</b> - Device connectivity.</summary>
<b>New credential default value</b>: <code>-</code>

<br>
* <summary><code>session_remote_config</code> - <b>string</b> - Login expression.</summary>
<b>New credential default value</b>: <code>-</code>


<br>
* <summary><code>execution_settings</code> - <b>object</b> - Administrative settings for credential automatic password change and reconciliation.</summary>
<b>Example</b>:  refer to the <a href="/v3-33/docs/pt/api-post-create-credential#execution-settings">Execution settings</a> section.
<b>New credential default value</b>: <code>-</code></p>

<br>
* <summary><code>session_settings</code>  - <b>object</b> - Settings for session privilege management for remote applications, connectivity protocols, among others.</summary>
<b>Example</b>: refer to the <a href="/v3-33/docs/pt/api-post-create-credential#session-settings">Session settings</a> section.
<b>New credential default value</b>: <code>-</code></p>
 
 <br>
* <summary><code>additional_settings</code> - <b>object</b> - Settings for implementing credential authentication mechanisms such as TOTP, and designation of the credential's owner user, among others.</summary>
<b>Example</b>: refer to the <a href="/v3-33/docs/pt/api-post-create-credential#additional-settings">Additional settings section</a>.
<b>New credential default value</b>: <code>-</code>

<br>
* <summary><code>jit_settings</code>  - <b>object</b> - Settings to manage the service usage time.</summary>
<b>Example</b>: refer to the <a href="/v3-33/docs/pt/api-post-create-credential#jit-settings"> JIT settings section</a>.
<b>New credential default value</b>: <code>-</code>
<br>

## Credential creation options
You can choose one of the following options to update a credential in **PAM Core**:
- Providing a value for the parameter `identifier`.
- Providing a value for the parameter `username`.

In both cases, you must provide existing values for the `hostname` and `ip` parameters of the device associated with the credential.


:::(Info) (Info)
Before continuing, please note that the terms **existing** and **new**, in the context of this document, mean: 
* **Existing** - a value that already belongs to a credential. 
* **New** - a value that doesn’t belong to a credential yet.
:::

### Send the `identifier` parameter
* Send existing `hostname` and `ip`.
* Send a new or existing `identifier`.


<body>
    <table>
        <tr>
            <th>Condition</th>
            <th colspan="2"><center>-></center></th>
            <th>Result</th>
        </tr>
        <tr>
            <td><b>Existing <code>identifier</code></b></td>
            <td colspan="2"></td>
            <td><b>The credential will be updated with the other values sent.<b></td>
        </tr>
        <tr>
            <td rowspan="3"><b>New <code>identifier</code></b></td>
            <td rowspan="3">The system will search for the credential by their <code>hostname</code>, <code>ip</code> and <code>username</code></td>
            <td>Credential found</td>
            <td><b>The credential will be updated with the other values sent<b>.</td>
        </tr>
        <tr>
            <td>Credential not found</td>
            <td>A new credential will be created.</td>
        </tr>
    </table>
</body>


#### Example request - existing `identifier` 
The following example shows the updating of a credential with an existing `identifier`.

<code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/credential`
```json
{
    "username" : "username",
    "hostname": "w2016",  
    "ip": "10.66.33.15",
    "content": "#@*MyS@feP@ssword%$#",
    "identifier": "dyaihdppaj78a547",
    "tags": "social"
}

```
#### Response 
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
    "tenant": "senhasegura",
    "credential": {
        "id": "152",
        "identifier": "dyaihdppaj78a547"
    }
}
```
#### Example request - new `identifier` 
The following example shows the updating of a credential with a new `identifier`. In this case, the credential was found because the values for the parameters `username`, `hostname`, and `ip`  indicated its existence. 

 <code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/credential`
```json
{
    "username" : "username",
    "hostname": "w2016",  
    "ip": "10.66.33.15",
    "content": "#@*MyS@feP@ssword%$#",
    "identifier": "newidentifier17846aa8",
    "tags": "social"
}
```
#### Response     

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
    "tenant": "senhasegura",
    "credential": {
        "id": "152",
        "identifier": "newidentifier17846aa8"
    }
}
```
    
    
### Send the `username` parameter

* Send existing `username`, `hostname` and `ip`.
* Don’t send a value for the `identifier`.

Condition| Result|
------|------|
 **Existing `username`** |**The credential will be updated with the other values sent**.|
*New `username`| A new credential will be created.|

 


#### Example request - existing `username` 
The following example shows the updating of a credential with an existing `username`.

<code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/credential`
```json
{
    "username" : "username",
    "hostname": "w2016",  
    "ip": "10.66.33.15",
    "content": "#@*MyS@feP@ssword%$#",
    "identifier": "",
    "tags": "social"
}
```

#### Response 


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
    "tenant": "senhasegura",
    "credential": {
        "id": "152",
        "identifier": "018fee1d-bc06-70b0-941b-163724042b60"
    }
}

```

## Other credential parameters
You can also update other credential parameters, which include:

* [Execution settings](/v3-33/docs/api-post-update-credential#execution-settings).
* [Session settings](/v3-33/docs/api-post-update-credential#session-settings).
* [Additional settings](/v3-33/docs/api-post-update-credential#additional-settings).
* [JIT settings](/v3-33/docs/api-post-update-credential#jit-settings).

### Execution Settings
Administrative settings of the credential in which you can define automatic password rotation and [credential reconciliation](/v3-33/docs/pam-about-credential-reconciliation).

#### Request parameters
Send the parameters you want to update in the **body** of the request.


<summary>&#8226; <code>execution_settings</code> - <b>object</b> - Execution settings data.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>parent_credential</code> - <b>string</b> - Parent credential selected for the edited credential.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>parent_hostname</code> - <b>string</b> - Hostname of the selected parent credential.</summary>

<br>    
 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>parent_ip</code> - <b>string</b> - Endereço IP address of the parent credential's device.</summary>

<br>  

 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>automatic_change</code> - <b>boolean</b> - Enables or disables automatic changes.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>New credential default value</b>: <code>false</code>

<br>  
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>agent_based_password_change</code> - <b>boolean</b> - Enables or disables automated password change via software agent.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>New credential default value</b>: <code>false</code>    


<br> 
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>change_plugin</code> - <b>string</b> - Change plugin used when rotating the credential on the device.</summary>

<br> 
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>change_template</code> - <b>string</b> - Change template used when rotating the credential on the device.</summary>

<br> 
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>use_own_credential_to_connect</code> - <b>boolean</b> - Enables or disables the use of the credential itself to connect to the device and change the password.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>New credential default value</b>: <code>false</code>

<br> 
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_credential</code> - <b>string</b> - <span style="color:red"> required (if the value for the <code>use_own_credential_to_connect</code> parameter is <code>false</code>)</span style="color:red"> - Credential used for authentication during the credential rotation process.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_hostname</code> - <b>string</b> - <span style="color:red"> required (if the value for the <code>use_own_credential_to_connect</code> parameter is <code>false</code>)</span style="color:red"> - Hostname of the authentication device.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_ip</code> - <b>string</b> - <span style="color:red"> required (if the value for the <code>use_own_credential_to_connect</code> parameter is <code>false</code>)</span style="color:red"> - IP address of the authentication device.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>status</code> - <b>boolean</b> - Enables or disables credential reconciliation after rotation failure.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>New credential default value</b>: <code>false</code>

<br>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>reconciliation_credential</code> - <b>string</b> - Credential to be used in the reconciliation process.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>reconciliation_hostname</code> - <b>string</b> - Hostname of the reconciliation device.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>reconciliation_ip</code> - <b>string</b> - IP address of the reconciliation device.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>reconciliation_plugin</code> - <b>string</b> - Execution plugin for the reconciliation process.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>reconciliation_template</code> - <b>string</b> - Execution template for the reconciliation process.</summary>

 
#### Example request

<code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/credential`
```json
{
    "username": "Example caderno 3.32",
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
Send the parameters you want to update in the **body** of the request.

 
<summary>&#8226; <code>session_settings</code> - <b>object</b> - Session settings data.</summary>

<br>



<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>SSH</code> - <b>boolean</b> - Enables or disables the SSH protocol.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>New credential default value</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>Telnet</code> - <b>boolean</b> - Enables or disables the Telnet protocol.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>New credential default value</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>MySQL</code> - <b>boolean</b> - Enables or disables MySQL connection.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>New credential default value</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>SQL Server</code> - <b>boolean</b> - Enables or disables SQL Server connection.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>New credential default value</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>HTTP</code> - <b>boolean</b> - Enables or disables the HTTP protocol.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>New credential default value</b>: <code>false</code>
    

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>HTTPS</code> - <b>boolean</b> - Enables or disables HTTPS connection.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>New credential default value</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>RDP</code> - <b>boolean</b> - Enables or disables RDP connection.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>New credential default value</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>X11 Forward</code> - <b>boolean</b> - Enables or disables X11 Forward.</summary>   
&nbsp;&emsp;&emsp;&nbsp;<b>New credential default value</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>VNC</code> - <b>boolean</b> - Enables or disables VNC connection.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>New credential default value</b>: <code>false</code>

<br>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>restrict_access_to_remote_application</code> - <b>boolean</b> - Enables or disables the use of the credential only in RemoteApp proxy sessions.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>New credential default value</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>macros</code> - <b>array of objects</b>  - Macro automation data containing <code>remote_app</code> and  <code>connectivity</code>.</summary>

<br>
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;→<code>remote_app</code> - <b>string</b> - RemoteApp automation associated with the credential.</summary>

<br>
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;→<code>connectivity</code> - <b>string</b> - Connectivity for RemoteApp automation associated with the credential.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>use_own_credential_to_connect</code> - <b>boolean</b> - Enables or disables the use of the credential itself for connection.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>New credential default value</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_credential</code> - <b>string</b> - <span style="color:red"> required (if the value for the <code>use_own_credential_to_connect</code> parameter is <code>false</code></span style="color:red"> - The authentication credential.
.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_hostname</code> - <b>string</b> - <span style="color:red"> required (if the value for the <code>use_own_credential_to_connect</code> parameter is <code>false</code></span style="color:red"> - The IP address of the authentication device.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_ip</code> - <span style="color:red"> required (if the value for the <code>use_own_credential_to_connect</code> parameter is <code>false</code></span style="color:red"> - O endereço IP do dispositivo de autenticação.</summary>


 

#### Example request

<code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/credential`
```json
{
    "username": "Example caderno 3.32",
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
Send the parameters you want to update in the **body** of the request.
    

<summary>&#8226; <code>additional_settings</code> - <b>array of objects</b> - Session settings data.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>identifier</code> - <b>string</b> - Credential identifier. Used to retrieve the credential via Webservice (<b>A2A</b>).</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>user_credential_owner</code> - <b>string</b> - Credential owner's username.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>server_path</code> - <b>string</b> - Path to the script or file where the credential is stored.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>secret_key</code> - <b>string</b> - The secret key (TOTP) used to generate temporary passwords for authentication.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>criticality</code> - <b>string</b> - The criticality level of the credential. Possible values are <code>low</code>, <code>medium</code> and <code>high</code>.</summary>
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>additional_authentication_fields</code> - <b>array de objetos</b>  - Additional information required to complete authentication steps containing <code>name</code>, <code>short_name</code> and  <code>value</code>.</summary>

<br>
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;→<code>name</code> - <b>string</b> - Name of the additional authentication.</summary>

<br>
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;→<code>short_name</code> - <b>string</b> - Short name of the additional authentication.</summary>

<br>
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;→<code>value</code> - <b>string</b> - The value to be filled in during the additional authentication process.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>notes</code> - <b>string</b> - General notes about the credential.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Example</b>: <code>Credential to be used only in network A.	</code>

 
 #### Example request

<code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/credential`
```json
{
    "username": "Example caderno 3.32",
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

In senhasegura, you can implement JIT settings when creating a credential for the following scenarios:

* Create and delete a credential upon the initiation and termination of a Proxy session.

* Enable and disable a credential upon the initiation and termination of a Proxy session.

#### Create and delete a credential upon the initiation and completion of a Proxy session.

 #### Request parameters
Send the parameters you want to update in the **body** of the request.


<summary>&#8226; <code>jit_settings</code> - <b>object</b>  - Just-in-Time settings data for creating and removing credentials upon the initiation and termination of a Proxy session.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>jit</code> - <b>boolean</b> - Enables or disables JIT settings.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_creation_and_deletion</code> - <b>boolean</b> - Indicates credential creation upon Proxy session initiation and deletion after session termination.</summary>

<br>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>use_own_credential_to_connect</code> - <b>boolean</b> - Enables or disables the use of the credential itself for connection.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_credential</code> - <b>boolean</b> - <span style="color:red"> required (if the value for the <code>use_own_credential_to_connect</code> parameter is <code>false</code></span style="color:red"> - Authentication credential.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_hostname</code> - <b>boolean</b> - <span style="color:red"> required (if the value for the <code>use_own_credential_to_connect</code> parameter is <code>false</code></span style="color:red"> - Hostname of the authentication device.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_ip</code> - <b>boolean</b> - <span style="color:red"> required (if the value for the <code>use_own_credential_to_connect</code> parameter is <code>false</code></span style="color:red"> - IP address of the authentication device.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_creation_plugin</code> - <b>string</b> - Plugin for credential creation.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Note</b>: this field must be filled with an existing plugin already registered in senhasegura.
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_creation_template</code> -<b>string</b> - Template for credential creation.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Note</b>: this field must be filled with an existing template already registered in senhasegura.
 
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_deletion_plugin</code> - <b>string</b> - Plugin for credential deletion.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Note</b>: this field must be filled with an existing plugin already registered in senhasegura.
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_deletion_template</code> - <b>string</b> - Template for credential deletion.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: this field must be filled with an existing template already registered in senhasegura.
    

<br>


#### Example request

 <code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/credential`
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
Send the parameters you want to update in the **body** of the request.
    
    

<summary>&#8226; <code>jit_settings</code> - <b>object</b>  -  Just-in-Time settings for enabling and disabling a credential upon Proxy session initiation and termination.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>jit</code> - <b>boolean</b> - Enables or disables JIT settings.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>enable_disable_credential</code> - <b>boolean</b> - Indicates enabling the credential upon Proxy session initiation and disabling it after session termination.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>use_own_credential_to_connect</code> - <b>boolean</b> - Enables or disables the use of the credential itself for connection.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_credential</code> - <b>string</b> - <span style="color:red"> required (if the value for the <code>use_own_credential_to_connect</code> parameter is <code>false</code></span style="color:red"> - The authentication credential.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_hostname</code> - <b>string</b> - <span style="color:red"> required (if the value for the <code>use_own_credential_to_connect</code> parameter is <code>false</code></span style="color:red"> - The hostname of the authentication device.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_ip</code> - <b>string</b> - <span style="color:red"> required (if the value for the <code>use_own_credential_to_connect</code> parameter is <code>false</code></span style="color:red"> - The IP address of the authentication device.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_enable_plugin</code> - <b>string</b> - Plugin for credential enablement.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Note</b>:  this field must be filled with an existing plugin already registered in senhasegura.
    
   

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_enable_template</code> - <b>string</b> - Template for credential enablement.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Note</b>: this field must be filled with an existing template already registered in senhasegura.
    
   
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_disable_plugin</code> - <b>string</b> - Plugin for credential disablement.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Note</b>: this field must be filled with an existing plugin already registered in senhasegura.
        

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_disable_template</code> - <b>string</b> - Template for credential disablement.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Note</b>: this field must be filled with an existing template already registered in senhasegura.
    
      
  #### Example request

 <code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/credential`
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
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
    
<b>Message: "1004: The device's hostname was not informed"</b>
<p><b>Possible cause</b>: the required parameter <code>hostname</code> of the device wasn’t informed.<br></p>
<b>Solution</b>: provide a value for the <code>hostname</code> parameter of the device and resend the request. 
  
* * *

<b>Message: "1005: The device's IP was not informed"</b>
<p><b>Possible cause</b>: the required parameter <code>ip</code> of the device wasn’t informed.<br></p>
    <b>Solution</b>: provide a value for the <code>ip</code> parameter of the device and resend the request.
  

* * *
    
 <b>Message: "1011: Device not found"</b>
 <p><b>Possible cause</b>: the device wasn’t found.<br></p>
  <b>Solution</b>: provide a valid device and resend the request.
 
***
<b>Message: "1029: It is not possible to enter a domain that has not been previously registered"</b>
 <p><b>Possible cause</b>:  the <code>device_domain</code> sent doesn’t exist or the sent format is incorrect.<br></p>
  <b>Solution</b>: provide a valid value for the <code>device_domain</code> , or, in case you’re sending more than one <code>device_domain</code> remember to not add space between commas. Example: <code>qakm.lab.mt4.dev,my_device_domain</code>.

  ***
<b>Message: "1039: Without PAM Configuration Access permission"</b>  
<br><b>Possible cause</b>: your authorization doesn’t have permission to update a credential. 
     
<b>Solution</b>: ask the administrator to check your <b>read and write</b> permission to <b>PAM Core</b> resources in <b>A2A</b>.

*** 
     
<b>Message: "1042: Invalid username"</b>  
<br><b>Possible cause</b>: the required parameter <code>username</code> wasn’t sent.
     
<b>Solution</b>: enter the <code>username</code> parameter and resend the request. You don’t need to provide a value for the username, but you need to send the parameter.

*** 
     
<b>Message: "1046: Plugin not informed"</b>  
<br><b>Possible cause</b>: the plugin wasn’t informed.
     
<b>Solution</b>: provide a value for the credential creation, deletion, enablement or disablement plugin. This plugin must exist and be registered in senhasegura. 

*** 
     
<b>Message: "1047: Template plugin not informed"</b>  
<br><b>Possible cause</b>: the template wasn’t informed.
     
<b>Solution</b>: provide a value for the credential creation, deletion, enablement or disablement template. This template must exist and be registered in senhasegura. 

*** 

</details>

<details>
<summary><b><span style="color:red">404</span> - Not Found</b></summary>

***
<b>Message: "Resource sub not found"</b><br>

<p><b>Possible cause</b>: the URL or the requested resource isn’t correct.<br>
        
<b>Solution</b>: check the URL and make sure the parameter is correct.</p>
* * *
</details>


<details>
 
<summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>

***
    
<b>Message: "Unexpected error."</b><br>
 
<p><b>Possible cause</b>: the error is in the senhasegura server.<br>
        
<b>Solution</b>: contact the support team for more information.</p>

***

<b>Message: "You are not authorized to access this resource."</b>

<p><b>Possible cause</b>: you don’t have the authorization to access this resource.<br>
        
<b>Solution</b>: ask the administrator to check your permission to access the <b>PAM Core</b> resources in <b>A2A</b>.</p>

* * *
 </details>   

  

<details>
<summary><b>Client authentication failed</b></summary>

*** 
   
<b>Message: "Client authentication failed."</b>
<p><b>Possible cause</b>: failure in your application authentication with the senhasegura server. <br>
        
<b>Solution</b>: check the authentication parameters such as <code>Access Token URL</code>, <code>Client ID</code> e <code>Client secret</code> and request a new access token.</p>
 
* * *   
</details>
     
  

<details>
<summary><b>Invalid signature</b></summary>

*** 
    
<b>Message: "Invalid signature"</b>
    
<p><b>Possible cause</b>: failure in recognizing the URL of the client application.
        
<b>Solution</b>: check the URL of the client application and resent the request.</p>

* * * 
</details>
     

<details>
    <summary><b>No route matched with those values</b></summary>
    
***   
    
<b>Message: "No route matched with those values."</b>
   <p><b>Possible cause</b>: the authorization header is missing in the API request.<br>
        
  <b>Solution</b>: request a new access token.</p>
   
 * * *
</details>
 

<details>
    <summary><b> Request timed out</b></summary>
    
***
    
<b>Message: "Request timed out."</b>
<p><b>Possible cause</b>: the request time has expired.<br>
        
<b>Solution</b>: check the connectivity between the source of the request and the senhasegura server.</p>
</details>