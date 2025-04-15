# Create or update a note

This article presents how to create or update a note in **MySafe** via API, the available endpoints, the parameters needed, example requests, and responses on success or in case of errors.

## Authorization
The authorization for **MySafe** APIs is performed directly in the module. For more information, access the [How to add an access key authorization](/v3-32/docs/mysafe-how-to-add-an-access-key-authorization) document.

## Authentication
Authentication in **MySafe APIs** is conducted using the OAuth 2.0 authentication method. To initiate this process, users need to provide the **Client ID** and **Client Secret**, as well as obtain their **authentication token** from the endpoint:

```
GET /api/oauth2/token
```

For more information on how to obtain the **Client ID** and the **Client Secret**, access the [How to view an access key authorization](/v3-32/docs/mysafe-how-to-view-an-access-key-authorization) document. 

## Methods

### Create a note
#### Request
To add a note to **MySafe**, send a request to the following endpoint:

```
POST /api/mysafe/note
```

:::(Info) (Info)
When a note is added to **MySafe**, it’s automatically associated with the creator, identifying them as the owner.
:::

#### Request parameters
**Body**

| Field |  | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |--- |
| ```name ```|  | String | Yes | Name assigned to the note. |Secret note |
| ``` note``` |  | String | Yes  | The note that is being added. |  My top secret note 
| ``` tags``` |  | String | No |  Keywords to help identify the note.| topsecret |
| ```users_allowed ``` |  | Array of objects | No | Information about the users allowed to access the note. |  |
| | ```username```  | String | No | Username of the user who can access the note. |  pduarte |
|  | ```can_edit``` | Boolean | No | Editing permission. If left empty, the user will have only viewing permission. |  |
| ```groups_allowed ``` |  | Array of objects | No | Information about the group allowed to access the note. |  |
|  | ```name``` | String | No | Name of the group that can access the note. | Test group |
| | ```can_edit``` | Boolean | No | Editing permission. If left empty, group members will have only viewing permission. | false |

**Example request**

```
{
    "name": "Secret note",
    "note": "My top secret note",
    "tags": "secret",
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
Adds a note to **MySafe** and returns a message with information about the note-adding process.

**Expected response**

```
HTTP/1.1 201 Created
```
```
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Note successfully registered",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Note successfully registered",
        "erro": false,
        "cod_erro": 0
    },
    "note_entity": {
        "identifier": "173",
        "name": "Secret note",
        "tags": "secret",
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
**In case of error - missing required parameter**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1001: Parameter 'note' was not informed!",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1001: Parameter 'note' was not informed!",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1001,
        "message": "1001: Parameter 'note' was not informed!",
        "detail": null
    }
}
```

### Update a note
#### Request
To update a note stored in **MySafe**, send a request to the following endpoint:

```
PUT /api/mysafe/note/update/[identifier]
```
#### Request parameters
**Path**

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
|```identifier```| String | Yes | Unique code identifier associated with each entry in the note table. This value is automatically assigned by senhasegura when [creating a note](/v3-32/docs/mysafe-apis-create-or-update-a-note#create-a-note) and is obtained in the response to the [List all the notes or List a note](/v3-32/docs/mysafe-apis-list-notes). | 173 |

**Body**
:::(Info) (Info)
When sending an update request, it’s not necessary to include parameters you don’t want to update.
:::

| Field |  | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |--- |
| ```name ```|  | String | No | Name assigned to the note. |My secret note |
| ``` note``` |  | String | No  | The note that is being added. |  My super top secret note 
| ``` tags``` |  | String | No |  Keywords to help identify the note.| secret1 |
| ```users_allowed ``` |  | Array of objects | No | Information about the users allowed to access the note. **Note**: if you send an empty array, it removes sharing permissions. |  |
| | ```username```  | String | No | Username of the user who can access the note. |  pduarte |
|  | ```can_edit``` | Boolean | No | Editing permission. If left empty, the user will have only viewing permission. | true |
| ```groups_allowed ``` |  | Array of objects | No | Information about the groups allowed to access the note. **Note**: if you send an empty array, it removes sharing permissions. |  |
|  | ```name``` | String | No | Name of the group that can access the note. | Test group |
| | ```can_edit``` | Boolean | No | Editing permission. If left empty, group members will have only viewing permission. | true |

**Example request**

```
{
    "name": "My secret note",
    "note": "My super top secret note",
    "tags": "secret1",
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
    ]
}
```
#### Return
Updates a note stored in **MySafe** based on its `identifier`, and returns a message with information about the updating process.

**Expected response**

```
HTTP/1.1 200 OK
```

```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Note successfully update",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Note successfully update",
        "erro": false,
        "cod_erro": 0
    },
    "note_entity": {
        "identifier": "173",
        "name": "My secret note",
        "tags": "secret1",
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

**In case of error - user has no access to the note**

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

**In case of error - note not found**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1005: Note not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1005: Note not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1005,
        "message": "1005: Note not found",
        "detail": null
    }
}
```