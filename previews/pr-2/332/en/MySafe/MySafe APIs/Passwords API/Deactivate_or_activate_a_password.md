# Deactivate or activate a password

This article presents how to deactivate or activate a password in **MySafe** via API, the available endpoints, the parameters needed, example requests, and responses on success or in case of errors.

## Authorization
The authorization for **MySafe** APIs is performed directly in the module. For more information, access the [How to add an access key authorization](/v3-32/docs/mysafe-how-to-add-an-access-key-authorization) document.

## Authentication
Authentication in **MySafe APIs** is conducted using the OAuth 2.0 authentication method. To initiate this process, users need to provide the **Client ID** and **Client Secret**, as well as obtain their **authentication token** from the endpoint:

```
GET /api/oauth2/token
```

For more information on how to obtain the **Client ID** and the **Client Secret**, access the [How to view an access key authorization](/v3-32/docs/mysafe-how-to-view-an-access-key-authorization) document. 

## Methods

### Deactivate a password
#### Request
To deactivate a password stored in **MySafe**, send a request to the following endpoint:

```
POST [List passwords](/v3-32/docs/mysafe-apis-list-passwords)/api/mysafe/password/inactive/[identifier]
```

#### Request parameters
**Path**

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
|```identifier```| Int | Yes | Unique code identifier associated with each entry in the password table. This value is automatically assigned by senhasegura when [creating a password](/v3-32/docs/mysafe-apis-create-or-update-a-password) and is obtained in the response to the [List all passwords](/v3-32/docs/mysafe-apis-list-passwords) request. | 312 |


#### Return
Deactivates a password stored in **MySafe** based on its `identifier`, and returns a message with information about the password deactivation process.

**Expected response** 

```
HTTP/1.1 200 OK
```

```
{
    "response": {
        "status": 200,
        "mensagem": "Password successfully deactivated",
        "erro": false,
        "cod_erro": 0,
        "message": "Password successfully deactivated",
        "error": false,
        "error_code": 0
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

### Activate a password
#### Request
To activate a password stored in **MySafe**, send a request to the following endpoint:

```
POST /api/mysafe/password/active/[identifier]
```

#### Request parameters
**Path**

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
|```identifier```| String | Yes | Unique code identifier associated with each entry in the password table. This value is automatically assigned by senhasegura when [creating a password](/v3-32/docs/mysafe-apis-create-or-update-a-password#create-a-password) and is obtained in the response to the [List all passwords or List a password](/v3-32/docs/mysafe-apis-list-passwords) request. | 312 |


#### Return
Activates a password stored in **MySafe** based on its `identifier`, and returns a message with information about the password activation process.

**Expected response** 

```
HTTP/1.1 200 OK
```

```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Password successfully activated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Password successfully activated",
        "erro": false,
        "cod_erro": 0
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
**In case of error - password not found**

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