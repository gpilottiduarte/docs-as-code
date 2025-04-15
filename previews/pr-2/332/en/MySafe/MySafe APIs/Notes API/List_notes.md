# List notes

This document presents how to access note information from **MySafe** via API, the available endpoints, the parameters needed, example requests, and responses on success or in case of errors.

## Authorization
The authorization for **MySafe** APIs is performed directly in the module. For more information, access the [How to add an access key authorization](/v3-32/docs/mysafe-how-to-add-an-access-key-authorization) document.

## Authentication

Authentication in the **MySafe APIs** is conducted using the OAuth 2.0 authentication method. To initiate this process, users need to provide the **Client ID** and **Client Secret**, as well as obtain their **authentication token** from the endpoint:

```
GET /api/oauth2/token
```

For more information on how to obtain the **Client ID** and the **Client Secret**, access the [How to view an access key authorization](/v3-32/docs/mysafe-how-to-view-an-access-key-authorization) document.

## Methods
### List all the notes
#### Request

To access a list of all the notes stored in **MySafe**, send a request to the following endpoint:
```
GET /api/mysafe/note
```
#### Request parameters

**Query**

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| ```tag``` | String | No | Searches for all the notes registered with a specific `tag`. | secret |


#### Return
Returns the notes associated with your user's access in **MySafe** and provides a message with information about the retrieval process.

**Expected response**

```
HTTP/1.1 200 OK
```

```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "",
        "erro": false,
        "cod_erro": 0
    },
    "note_on_list": [
        {        {
            "identifier": "177",
            "name": "My secret note",
            "tags": "secret",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "196",
            "name": "Secret note",
            "tags": "secret",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        }
    ]
}
```
### List a note



#### Request
To access a note stored in **MySafe**, send a request to the following endpoint:

```
GET /api/mysafe/note/[identifier]
```
#### Request parameters
**Path**

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| ```identifier```| Int | Yes | Unique code identifier associated with each entry in the notes table. This value is automatically assigned by senhasegura when [creating a note](/v3-32/docs/mysafe-apis-create-or-update-a-note).   | 177 |

#### Return
Returns the note associated with your user's access in **MySafe**, based on its `identifier` , and provides a message with information about the retrieval process.

**Expected response**

```
HTTP/1.1 200 OK
```

```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Success",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Success",
        "erro": false,
        "cod_erro": 0
    },
    "note_entity": {
        "identifier": "177",
        "name": "My secret note",
        "note": "My super top secret note",
        "tags": "secret",
        "users_allowed": [
            {
                "name": "pduarte",
                "can_edit": true
            }
        ],
        "groups_allowed": []
    }
}
```

**In case of error - user has no access to this note**

```
HTTP/1.1 400 Bad request
```

```
{
    "response": {
        "status": 400,
        "mensagem": "1006: User does not have access",
        "erro": true,
        "cod_erro": 0,
        "message": "1006: User does not have access",
        "error": true,
        "error_code": 0
    },
    "exception": {
        "code": 1006,
        "message": "1006: User does not have access",
        "detail": ""
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

**In case of error - inactive note**

```
HTTP/1.1 400 Bad Request
```
```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1009: Inactive note",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1009: Inactive note",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1009,
        "message": "1009: Inactive note",
        "detail": null
    }
}
```

**In case of error - unexpected error**

:::(Warning) (Attention)
There might be an error in retrieving encrypted notes due to their number of characters. If you encounter any issues, try decreasing the number of characters and sending the request again.
:::
```
HTTP/1.1 500 Internal server error
```

```
{
    "code": 500,
    "response": {
        "status": 500,
        "message": "Unexpected error",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "Unexpected error",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 400,
        "message": "Ocorreu um erro ao criptografar o texto",
        "detail": null
    }
}
```