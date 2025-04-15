# Create or update an API secret

This article presents how to create or update an API secret in **MySafe** via API, the available endpoints, the parameters needed, example requests, and responses on success or in case of errors.

## Authorization
The authorization for MySafe APIs is performed directly in the module. For more information, access the[ How to add an access key authorization](/v3-32/docs/mysafe-how-to-add-an-access-key-authorization) document.

## Authentication
Authentication in the **MySafe APIs** is conducted using the OAuth 2.0 authentication method. To initiate this process, users need to provide the **Client ID** and **Client Secret**, as well as obtain their **authentication token** from the endpoint:

```
GET /api/oauth2/token
```
For more information on how to obtain the **Client ID** and the **Client Secret**, access the [How to view an access key authorization](/v3-32/docs/mysafe-how-to-view-an-access-key-authorization) document.

## Methods

### Create an API secret
#### Request
To add an API secret to **MySafe**, send a request to the following endpoint:

```
POST /api/mysafe/secretapi
```

:::(Info) (Info)
When an API secret is added to **MySafe**, it’s automatically associated with the creator, identifying them as the owner.
:::

#### Request parameters

**Body**


| Field |  | Type  | Required | Description | Example |
| --- | --- | --- | --- | --- | --- |
| `name ` |  | String | Yes | Name assigned to the API secret. | gcp |
| `url ` |  | String | Yes | URL of the website where the API secret is being used. | https://gcp.com |
| ` client_id` |  | String | Yes | ID of the client application that  is using this API secret.| gf455f7g8fb5dfg8fd545bffbv |
| ` client_secret` |  | String | Yes | A confidential key known only to the client and the authorization server, used to authenticate the client to the server.| gf5464g5v7ffsd857xc4fds57g8fds | | 
|`identifier_code ` |  | String | No | Unique string defined by the user to identify the API secret. | hyga125 |
| ` tags` |  | String | No |Keywords to help identify the API secret. | Cloud |
| ` notes` |  | String | No |Observations about the API secret. | Access details |
| ` method` |  | String | No |The HTTP method to be used for API requests.  | get |
| ` users_allowed` |  | Array of objects | No | Information about the users allowed to access the API secret. | cell |
|  | `username ` | String | No |Username of the user who will access the API secret. | pduarte |
|  | ` can_edit` | Boolean | No | Editing permission. If left empty, the user will have only viewing permission. | true |
| `groups_allowed ` |  | Array of objects | No | Information about the groups allowed to access the API secret. | cell |
|  | `name ` | String | No | Name of the group that will access the API secret. | Test group |
|  | ` can_edit` | Boolean | No | Editing permission. If left empty, group members will have only viewing permission. |  |

**Example request**

```
{
    "name": "GCP",
    "url": "https://gcp.com",
    "client_id": "gf455f7g8fb5dfg8fd545bffbv",
    "client_secret": "gf5464g5v7ffsd857xc4fds57g8fds",
    "identifier_code": "hyga125",
    "tags": "Cloud",
    "notes": "Access details",
    "method": "get",
     "users_allowed": [
        {
            "username" : "pduarte",
            "can_edit" : true
        }
    ],
    "groups_allowed": [
        {
            "name" : "Test group"
        }
    ]
}
```

#### Return
Adds an API secret to **MySafe**, and returns a message with information about the adding process.



**Expected response**

```
HTTP/1.1 201 Created
```

```
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Api secret successfully registered",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Api secret successfully registered",
        "erro": false,
        "cod_erro": 0
    },
    "api_entity": {
        "identifier": "43",
        "name": "GCP",
        "url": "https://gcp.com",
        "client_secret": "gf5464g5v7ffsd857xc4fds57g8fds",
        "client_id": "gf455f7g8fb5dfg8fd545bffbv",
        "identifier_code": "hyga125",
        "method": "get",
        "tags": "Cloud",
        "notes": "Access details",
        "users_allowed": [
            {
                "username": "pduarte",
                "can_edit": true
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

**In case of error - missing required parameter**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1001: Parameter 'name' was not informed!",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1001: Parameter 'name' was not informed!",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1001,
        "message": "1001: Parameter 'name' was not informed!",
        "detail": null
    }
}
```


### Update an API secret
#### Request
To update an API secret stored in **MySafe**, send a request to the following endpoint:

```
PUT /api/mysafe/secretapi/update/[identifier]
```

#### Request parameters
**Path**

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| ```identifier```| String | Yes | Unique identifier code associated with each entry in the API secret table. This value is automatically assigned by senhasegura when [creating an API secret](/v3-32/docs/mysafe-apis-create-or-update-an-api-secret) and is obtained in the response to the [List all API secrets or List an API secret](/v3-32/docs/mysafe-apis-list-api-secrets) request. **Note**: do not confuse it with the `identifier_code` parameter which is created by the user when creating an API secret.| 43 |

**Body**

:::(Info) (Info)
When sending an update request, it’s not necessary to include parameters you don’t want to update.
:::
| Field |  | Type  | Required | Description | Example |
| --- | --- | --- | --- | --- | --- |
| `name ` |  | String | No | Name assigned to the API secret. | GCP1 |
| `url ` |  | String | No | URL of the website where the API secret is being used. | https://gcp1.com |
| ` client_id` |  | String | No | ID of the client application that  is using this API secret.| gf455f7g8fb5dfg8fd545bffbvhy7464g5v8ghy4d858jk7fds57t4tr |
| ` client_secret` |  | String | No | A confidential key known only to the client and the authorization server, used to authenticate the client to the server.| hb455f7g8fg9dfg8yt845bxxku | | 
|`identifier_code ` |  | String | No | Unique string defined by the user to identify the API secret. | gcp7852 |
| ` tags` |  | String | No |Keywords to help identify the API secret. | Cloud1 |
| ` notes` |  | String | No |Observations about the API secret. | Access details for this API secret |
| ` method` |  | String | No |The HTTP method to be used for API requests.  | get |
| ` users_allowed` |  | Array of objects | No | Information about the users allowed to access the API secret. |  |
|  | `username ` | String | No |Username of the user who will access the API secret. | alices |
|  | ` can_edit` | Boolean | No | Editing permission. If left empty, the user will have only viewing permission. | true |
| `groups_allowed ` |  | Array of objects | No | Information about the groups allowed to access the API secret. | cell |
|  | `name ` | String | No | Name of the group that will access the API secret. | |
|  | ` can_edit` | Boolean | No | Editing permission. If left empty, group members will have only viewing permission. |  |

**Example request**

```
{
    "name": "GCP1",
    "url": "https://gcp1.com",
    "client_id": "hb455f7g8fg9dfg8yt845bxxku",
    "client_secret": "hy7464g5v8ghy4d858jk7fds57t4tr",
    "identifier_code": "gcp7852",
    "tags": "Cloud1",
    "notes": "Access details for this API secret",
     "users_allowed": [
        {
            "username" : "alices",
            "can_edit" : true
        }
    ],
    "groups_allowed": []
```

:::(Info) (Info)
As the `method` parameter was not updated, it was not included in the example request above.
:::

#### Return
Updates an API secret stored in **MySafe**, based on its `identifier`, and returns a message with information about the updating process.


**Expected response** 

```
HTTP/1.1 200 OK
```

```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Api secret updated successfully",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Api secret updated successfully",
        "erro": false,
        "cod_erro": 0
    },
    "api_entity": {
        "identifier": "43",
        "name": "GCP1",
        "url": "https://gcp1.com",
        "client_secret": "hy7464g5v8ghy4d858jk7fds57t4tr",
        "client_id": "hb455f7g8fg9dfg8yt845bxxku",
        "identifier_code": "gcp7852",
        "method": "get",
        "tags": "Cloud1",
        "notes": "Access details for this API secret",
        "users_allowed": [
            {
                "username": "alices",
                "can_edit": true
            }
        ],
        "groups_allowed": [],
        "shared_error": []
    }
}
```


**In case of error - `identifier` already found in another API secret of this user**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1001: 'Identifier' already found in another API key of this user",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1001: 'Identifier' already found in another API key of this user",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1001,
        "message": "1001: 'Identifier' already found in another API key of this user",
        "detail": null
    }
}
```

**In case of error - user has no access to this API secret**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1006: User does not have access",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1006: User does not have access",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1006,
        "message": "1006: User does not have access",
        "detail": null
    }
}
```