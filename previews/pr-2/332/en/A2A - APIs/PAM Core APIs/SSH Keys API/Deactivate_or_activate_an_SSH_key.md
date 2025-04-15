# Deactivate or activate an SSH key

This document presents how to deactivate or activate an SSH key in **PAM Core** via API, the available endpoints, the parameters needed, example requests, and expected responses on success or in case of errors.

## Authorization

To get started, make sure **PAM Core** is listed under **Authorized resources** in your **A2A** module. For more information on authorization, access the [How to create an authorization for an application](/v3-32/docs/a2a-how-to-create-an-authorization-for-an-application) documentation.

## Authentication

Each request in the **API must have the **OAuth** **Consumer Key** and the **OAuth Token** of the client. For more information on authentication, access the [How to authenticate an application](/v3-32/docs/a2a-how-to-authenticate-an-application) documentarion.

## Methods

### Deactivate an SSH key

#### Request

To deactivate an SSH key registered in **PAM Core**, send a request to the following endpoint:

`DELETE/iso/pam/key/[id]`

#### Request parameters

**Path**

| Field | Type   | Required | Description                           | Example |
| ----- | ------ | -------- | ------------------------------------- | ------- |
|  `id`    | Int | Yes      |SSH key’s unique identification code. This value is automatically assigned by senhasegura when [creating an SSH key](/v3-32/docs/a2a-pam-core-create-or-update-an-ssh-key) and is obtained in the response to the `GET iso/pam/credential` request. This endpoint lists all credentials accessible to your user. For more information on this endpoint, access the [Credentials API](/v3-32/docs/a2a-pam-core-credentials-api) document. | 14694     |

#### Return

Deactivates an SSH key registered in **PAM Core** based on its `id`, and provides a message with information about the deactivation process.

**Expected response**

```HTTP/1.1 200 OK```

```json

{

    "code": 200,
    "response": {
        "status": 200,
        "message": "Key successfully deactivated",  
        "error": false,
        "error_code": 0,
        "detail": "",
        "message": "Key successfully deactivated",
        "error": false,
        "cod_erro": 0
    }
}
```

### In case of error - the SSH key is already inactive

```HTTP/1.1 400 Bad Request```

```json
{
    "code":400,
    "response": {
        "status":400,
        "message":"1017:Key inactive",
        "error":true,
        "error_code":1,
        "detail":"",
        "message":"1017:Key inactive",
        "error":true,
        "cod_erro":1
    },
    "exception": {
        "code":1017,
        "message":"1017:Key inactive",
        "detail":null
    }
}
```

#### In case of error - user has no permission

```HTTP/1.1 400 Bad Request```

```json
{
    "code":400,
    "response": {
        "status":400,
        "message":"1009:No access to credential",
        "error":true,
        "error_code": 1,
        "detail":"",
        "message":"1009:No access to credential",
        "error":true,
        "cod_erro":1
    },
    "exception": {
        "code":1009,
        "message":"1009:No access to credential",
        "detail":null
    }
}
```

### Activate an SSH key

#### Request

To activate an SSH key registered in **PAM Core**, send a request to the following endpoint:

`PUT/iso/pam/key/[id]`

#### Request parameters

**Path**

| Field | Type   | Required | Description                           | Example |
| ----- | ------ | -------- | ------------------------------------- | ------- |
|  `id`    | Int | Yes      |SSH key’s unique identification code. This value is automatically assigned by senhasegura when [creating an SSH key](/v3-32/docs/a2a-pam-core-create-or-update-an-ssh-key) and is obtained in the response to the `GET iso/pam/credential` request. This endpoint lists all credentials accessible to your user. For more information on this endpoint, access the [Credentials API](/v3-32/docs/a2a-pam-core-credentials-api) document. | 14694     |

#### Return

Activates an SSH key registered in **PAM Core** based on its `id`  and provides a message with information about the activation process.

**Expected response**

```HTTP/1.1 200 OK```

```json
{
    "code": 200,
    "response": {
        "status":200,
        "message":"Key successfully activated",
        "error":false,
        "error_code":0,
        "detail":"",
        "message":"Key successfully activated",
        "error":false,
        "cod_erro":0
    }
}
```
**In case of error - the SSH key is already active**

`HTTP/1.1 400 Bad Request`

```json
 {
    "code": 400,
    "response": {
        "status": 400,
        "message": "1045: Ssh key is already activated",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1045: Ssh key is already activated",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1045,
        "message": "1045: Ssh key is already activated",
        "detail": ""
    }
}
```
#### Possible errors
Here’s a list of HTTP error codes and their descriptions:
- **1009**: No access to credential.
- **1013**: The public key was not informed.
- **1014**: The private key was not informed.
- **1016**: The item is not a ssh key.
