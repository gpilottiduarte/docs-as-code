# Create or update a password

This article presents how to create or update a password in **MySafe** via API, the available endpoints, the parameters needed, example requests, and responses on success or in case of errors.


## Authorization
The authorization for **MySafe** APIs is performed directly in the module. For more information, access the [How to add an access key authorization](/v3-32/docs/mysafe-how-to-add-an-access-key-authorization) document.

## Authentication
Authentication in **MySafe APIs** is conducted using the OAuth 2.0 authentication method. To initiate this process, users need to provide the **Client ID** and **Client Secret**, as well as obtain their **authentication token** from the endpoint:

```
GET /api/oauth2/token
```

For more information on how to obtain the **Client ID** and the **Client Secret**, access the [How to view an access key authorization](/v3-32/docs/mysafe-how-to-view-an-access-key-authorization) document. 

## Methods







### Create a password
#### Request
To add a password to **MySafe**, send a request to the following endpoint:

```
POST /api/mysafe/password
```
:::(Info) (Info)
When a password is added to **MySafe**, it’s automatically associated with the creator, identifying them as the owner.
:::

#### Request parameters

**Body**

| Field |  | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |--- |
| ```name ```|  | String | Yes | Name assigned to the password. |senseg account |
| ``` url``` |  | String | No | URL of the website where the password is being used. |www.senhasegura.com |
| ```username``` |  | String | Yes | Username used to access this account. | npass |
| ```password ``` |  | String | Yes | The password being added. | 8jhfy@3789 |
| ``` secret_key``` |  | String  | No | Seed to automatically generate the TOTP. | JBSWY3DPEHPK3PXP |
| ``` notes``` |  | String | No  | Additional notes to this password. |  Access details |
| ``` tags``` |  | String | No |  Keywords to help identify the password.| tag1, tag2 |
| ```users_allowed ``` |  | Array of objects | No | Information about the users allowed to access the password. |  |
| | ```username```  | String | No | Username of the user who can access the password. |  pduarte |
|  | ```can_edit``` | Boolean | No | Editing permission. If left empty, the user will have only viewing permission. |  |
| ```groups_allowed ``` |  | Array of objects | No | Information about the groups allowed to access the password. |  |
|  | ```name``` | String | No | Name of the group that can access the password. | Test group |
| | ```can_edit``` | Boolean | No | Editing permission. If left empty, group members will have only viewing permission. | false |

**Example request**

```
{
    "name": "senseg account",
    "url": "www.senhasegura.com",
    "username": "npass",
    "password": "8jhfy@3789",
    "secret_key": "JBSWY3DPEHPK3PXP",
    "notes": "Access details",
    "tags": "tag1, tag2",
    "users_allowed": [
        {
            "username" : "pduarte"
        }
    ],
    "groups_allowed": [
        {
            "name" : "Test group",
            "can_edit" : false
        }
    ]
}
```

#### Return
Adds a password to **MySafe**, and returns a message with information about the password-adding process.


**Expected response**

```
HTTP/1.1 201 Created
```
```
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Password successfully registered",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Password successfully registered",
        "erro": false,
        "cod_erro": 0
    },
    "password_entity": {
        "identifier": "312",
        "name": "senseg account",
        "url": "www.senhasegura.com",
        "username": "npass",
        "note": "Access details",
        "tags": "tag1, tag2",
        "users_allowed": [
            {
                "username": "pduarte",
                "can_edit": false
            }
        ],
        "groups_allowed": [
            {
                "name": "Test group",
                "can_edit": false
            }
        ],
        "shared_error": []
    }
}

```

**In case of error - missing a required parameter**

```
HTTP/1.1 400 Bad Request
```

```
{
    "response": {
        "status": 400,
        "mensagem": "1001: Parameter 'username' was not informed!",
        "erro": true,
        "cod_erro": 0,
        "message": "1001: Parameter 'username' was not informed!",
        "error": true,
        "error_code": 0
    },
    "exception": {
        "code": 1001,
        "message": "1001: Parameter 'username' was not informed!",
        "detail": ""
    }
}

```

### Update a password
#### Request
To update a password stored in **MySafe**, send a request to the following endpoint:

```
PUT /api/mysafe/password/update/[identifier]
```

#### Request parameters
**Path**


| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
|```identifier```| String | Yes | Unique code identifier associated with each entry in the password table. This value is automatically assigned by senhasegura when [creating a password](/v3-32/docs/mysafe-apis-create-or-update-a-password#create-a-password) and is obtained in the response to the [List all the passwords or List a password](/v3-32/docs/mysafe-apis-list-passwords) request. | 312 |

**Body**

:::(Info) (Info)
When sending an update request, it’s not necessary to include parameters you don’t want to update.
:::

| Field |  | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |--- |
| ```name ```|  | String | No | Name assigned to the password. |sensegura account |
| ```username``` |  | String | No | Username used to access this account. | senhapass |
| ``` url``` |  | String | No | URL of the website where the password is being used. |www.url.com |
| ```password ``` |  | String | No | The password being added. |x%8jhfy@3789a |
| ``` notes``` |  | String | No  | Additional notes to this password. |  Access details for this key |
| ``` tags``` |  | String | No |  Keywords to help identify the password.| access |
| ``` secret_key``` |  | String  | No | Seed to automatically generate TOTP. | 3DPEHPK3PXPGHODADA |
| ```users_allowed ``` |  | Array of objects | No | Information about the users allowed to access the password. **Note**: if you send an empty array, it removes sharing permissions. |  |
| | ```username```  | String | No | Username of the user who can access the password. |  pduarte |
|  | ```can_edit``` | Boolean | No | Editing permission. If left empty, the user will have only viewing permission. | true |
| ```groups_allowed ``` |  | Array of objects | No | Information about the groups allowed to access the password. **Note**: if you send an empty array, it removes sharing permissions. |  |
|  | ```name``` | String | No | Name of the group that can access the password. | Test group |
| | ```can_edit``` | Boolean | No | Editing permission.If left empty, group members will have only viewing permission. | true |

**Example request**

```
{
    "name": "senhasegura account",
    "username": "senhapass",
    "url": "www.url.com",
    "password": "x%8jhfy@3789a",
    "notes": "Access details for this key.",
    "tags": "access",
    "secret_key": "3DPEHPK3PXPGHODADA",
    "users_allowed": [
        {"username": "pduarte", 
        "can_edit": true
        }
    ],
    "groups_allowed": [
        {
            "name": "Test group",
            "can_edit": true
        }
    ]
}
```

#### Return
Updates a password stored in **MySafe**, based on its ```identifier```, and returns a message with information about the updating process. 

**Expected response**

```
HTTP/1.1 200 OK

```

```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Password successfully updated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Password successfully updated",
        "erro": false,
        "cod_erro": 0
    },
    "password_entity": {
        "identifier": "312",
        "name": "senhasegura account",
        "url": "www.url.com",
        "username": "senhapass",
        "note": "Access details for this key.",
        "tags": "access",
        "users_allowed": [
            {
                "username": "pduarte",
                "can_edit": true
            }
        ],
        "groups_allowed": [
            {
                "name": "Test group",
                "can_edit": true
            }
        ],
        "shared_error": []
    }
}
```

**In case of error - user has no access to the password**
```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1005: Password not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1005: Password not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1005,
        "message": "1005: Password not found",
        "detail": null
    }
}
```

**In case of error - password not found**

```
HTTP/1.1 400 Bad Request
```

```
{
    "response": {
        "status": 400,
        "mensagem": "1005: Password not found",
        "erro": true,
        "cod_erro": 0,
        "message": "1005: Password not found",
        "error": true,
        "error_code": 0
    },
    "exception": {
        "code": 1005,
        "message": "1005: Password not found",
        "detail": ""
    }
}

```