# Deactivate or activate a note

This article presents how to deactivate or activate a note in **MySafe** via API, the available endpoints, the parameters needed, example requests, and responses on success or in case of errors.

## Authorization
The authorization for **MySafe** APIs is performed directly in the module. For more information, access the [How to add an access key authorization](/v3-32/docs/mysafe-how-to-add-an-access-key-authorization) document.

## Authentication
Authentication in **MySafe APIs** is conducted using the OAuth 2.0 authentication method. To initiate this process, users need to provide the **Client ID** and **Client Secret**, as well as obtain their **authentication token** from the endpoint:

```
GET /api/oauth2/token
```

For more information on how to obtain the **Client ID** and the **Client Secret**, access the [How to view an access key authorization](/v3-32/docs/mysafe-how-to-view-an-access-key-authorization) document. 

## Methods

### Deactivate a note
#### Request

To deactivate a note stored in **MySafe**, send a request to the following endpoint:

```
POST /api/mysafe/note/inactive/[identifier]
```
#### Request parameters

**Path**

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
|```identifier```| String | Yes | Unique code identifier associated with each entry in the password table. This value is automatically assigned by senhasegura when [creating a note](/v3-32/docs/mysafe-apis-create-or-update-a-note) and is obtained in the response to the [List all the notes](/v3-32/docs/mysafe-apis-list-notes). | 173 |


#### Return
Deactivates a note stored in **MySafe** based on its `identifier`, and returns a message with information about the deactivation process.

**Expected response**

```
HTTP/1.1 200 OK
```

```
{
    "response": {
        "status": 200,
        "mensagem": "Note successfully deactivated",
        "erro": false,
        "cod_erro": 0,
        "message": "Note successfully deactivated",
        "error": false,
        "error_code": 0
    }
}
```
**In case of error - user has no access to this note**

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

### Activate a note


#### Request
To activate a note stored in **MySafe**, send a request to the following endpoint:

```
POST /api/mysafe/note/active/[identifier]
```

#### Request parameters
**Path**

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
|```identifier```| String | Yes | Unique code identifier associated with each entry in the password table. This value is automatically assigned by senhasegura when [creating a note](/v3-32/docs/mysafe-apis-create-or-update-a-note#create-a-note) and is obtained in the response to the [List all the notes or List a note](/v3-32/docs/mysafe-apis-list-notes). | 173 |

#### Return
Activates a note stored in **MySafe**, based on its `identifier`, and returns a message with information about the activation process.

**Expected response**

```
HTTP/1.1 200 OK
```

```
{
    "response": {
        "status": 200,
        "mensagem": "Note successfully activated",
        "erro": false,
        "cod_erro": 0,
        "message": "Note successfully activated",
        "error": false,
        "error_code": 0
    }
}

```
**In case of error - user has no access to this note**

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


