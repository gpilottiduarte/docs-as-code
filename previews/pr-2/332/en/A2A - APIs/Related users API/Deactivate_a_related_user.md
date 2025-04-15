# Deactivate a related user

This document presents how to deactivate or activate, via API, related users’ information registered in senhasegura, the available endpoints, the parameters needed, example requests, and responses on success or in case of errors.

## Authorization
To get started, make sure **Users** is listed under **Authorized resources** in your **A2A** module. For more information on authorization, access the [How to create an authorization for an application](/v3-32/docs/a2a-how-to-create-an-authorization-for-an-application) document.

## Authentication
Each request in the API must have the **OAuth Consumer Key** and the **OAuth Token** of the client.
For more information on authentication, access the [How to authenticate an application](/v3-32/docs/a2a-how-to-authenticate-an-application) document.

## Methods
### Deactivate a related user
#### Request
To deactivate a related user registered in senhasegura, send a request to the following endpoint:

```
DELETE /iso/user/related/[id]
```


| Field | Type |Required | Description | Example |
| --- |---|--- | --- | --- |
|`id`|  Int | Yes | Related user’s unique identification code associated with each entry in the Related user table. This value is automatically assigned by senhasegura when [creating a related user](/v3-32/docs/a2a-pam-core-create-or-update-a-related-user) and is obtained in the response to the [List all related users](/v3-32/docs/a2a-pam-core-list-related-users) request. | 3 | 

#### Return
Deactivates a related user in senhasegura based on its `id` and returns a message with information about the deactivation process.

**Expected response**

```
HTTP/1.1 200 OK
```

```
{
    "response": {
        "status": 200,
        "mensagem": "Related user successfully deactivated",
        "erro": false,
        "message": "Related user successfully deactivated",
        "error": false,
    }
}
```

**In case of error - user not found**

```
HTTP/1.1 400 Bad Request
```

```
{
    "response": {
        "status": 400,
        "mensagem": "1005: Related user not found",
        "erro": true,
        "cod_erro": 0,
        "message": "1005: Related user not found",
        "error": true,
        "error_code": 0
    },
    "exception": {
        "code": 1005,
        "message": "1005: Related user not found",
        "detail": ""
    }
}
```