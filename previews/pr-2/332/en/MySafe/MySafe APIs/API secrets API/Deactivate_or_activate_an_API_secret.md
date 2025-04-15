# Deactivate or activate an API secret

This article presents how to deactivate or activate an API secret in **MySafe** via API, the available endpoints, the parameters needed, example requests, and responses on success or in case of errors.

## Authorization
The authorization for MySafe APIs is performed directly in the module. For more information, access the [How to add an access key authorization](/v3-32/docs/mysafe-how-to-add-an-access-key-authorization) document.

## Authentication
Authentication in the **MySafe APIs** is conducted using the OAuth 2.0 authentication method. To initiate this process, users need to provide the **Client ID** and **Client Secret**, as well as obtain their **authentication token** from the endpoint:

```
GET /api/oauth2/token
```
For more information on how to obtain the **Client ID** and the **Client Secret**, access the [How to view an access key authorization](/v3-32/docs/mysafe-how-to-view-an-access-key-authorization) document.

## Methods

### Deactivate an API secret
#### Request
To deactivate an API secret stored in MySafe, send a request to the following endpoint:

```
POST /api/mysafe/secretapi/inactive/[identifier]
```


#### Request parameters


**Path**

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| ```identifier```| String | Yes | Unique identifier code associated with each entry in the API secret table. This value is automatically assigned by senhasegura when [creating an API secret](/v3-32/docs/mysafe-apis-create-or-update-an-api-secret) and is obtained in the response to the [List all API secrets or List an API secret](/v3-32/docs/mysafe-apis-list-api-secrets) request. **Note**: do not confuse it with the `identifier_code` parameter which is created by the user when creating an API secret.| 43 |

#### Return
Deactivates an API secret stored in **MySafe** based on its `identifier`, and returns a message with information about the API secret deactivation process.

**Expected response**

```
HTTP/1.1 200 OK

```


```
{
    "response": {
        "status": 200,
        "message": "API secret  successfully deactivated",
        "error": false,
        "error_code": 0,
    "detail": "",
        "mensagem": "API secret  successfully deactivated",
        "erro": false,
        "cod_erro": 0
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
**In case of error - API secret not found**
```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1005: Api secret not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1005: Api secret not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1005,
        "message": "1005: Api secret not found",
        "detail": null
    }
}
```

### Activate an API secret
#### Request
To activate an API secret stored in **MySafe**, send a request to the following endpoint:
```
POST /api/mysafe/secretapi/active/[identifier]
```
#### Request parameters


**Path**

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| ```identifier```| String | Yes | Unique identifier code associated with each entry in the API secret table. This value is automatically assigned by senhasegura when [creating an API secret](/v3-32/docs/mysafe-apis-create-or-update-an-api-secret) and is obtained in the response to the [List all API secrets or List an API secret](/v3-32/docs/mysafe-apis-list-api-secrets) request. **Note**: do not confuse it with the `identifier_code` parameter which is created by the user when creating an API secret.| 43 |

#### Return
Activates an API secret stored in **MySafe** based on its `identifier`, and returns a message with information about the API secret activation process.

**Expected response**

```
HTTP/1.1 200 OK

```


```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Api secret activated successfully",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Api secret activated successfully",
        "erro": false,
        "cod_erro": 0
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
**In case of error - API secret not found**
```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1005: Api secret not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1005: Api secret not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1005,
        "message": "1005: Api secret not found",
        "detail": null
    }
}
```