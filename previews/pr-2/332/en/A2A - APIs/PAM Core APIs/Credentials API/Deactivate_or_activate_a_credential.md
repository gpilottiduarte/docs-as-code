# Deactivate or activate a credential

This document presents how to access deactivate and activate a  credential in **PAM Core** via API, the available endpoints, the parameters needed, example requests, and expected responses on success or in case of errors.


## Methods

### `DELETE` Deactivate a credential

#### Request

There are two possible endpoints for deactivating a credential.


#### First endpoint
To deactivate a credential registered in **PAM Core**, send a request to the following endpoint:

`/iso/pam/credential/[id]`

#### Request parameters
**Path**

| Field | Type   | Required | Description                           | Example |
| ----- | ------ | -------- | ------------------------------------- | ------- |
| `id`    | Int | Yes      | Credential’s unique identification code associated with each entry in the Credential’s table . This value is automatically assigned by senhasegura when [creating a credential](/v3-32/docs/a2a-pam-core-create-or-update-a-credential) and is obtained in the response to the [List all credentials](/v3-32/docs/a2a-pam-core-list-credentials) request. | 5     |

#### Return

Deactivates a credential registered in **PAM Core** based on its `id` and returns a message with information about the deactivation process.

**Expected response**


```
HTTP/1.1 200 OK
```

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}
```
#### Second endpoint
To deactivate a credential registered in **PAM Core**, send a request to the following endpoint:

`/iso/pam/credential/[username@hostname]`

#### Request parameters

**Path**

| Field | Type   | Required | Description                           | Example |
| ----- | ------ | -------- | ------------------------------------- | ------- |
| `username@hostname`    | Int | Yes      | Credential’s associated `username` and `hostname` separated by the @ symbol. This value is assigned by the user when [creating a credential](/v3-32/docs/a2a-pam-core-create-or-update-a-credential) and is obtained in the response to the [List all credentials](/v3-32/docs/a2a-pam-core-list-credentials) request. | credential_5@destktop-91.com     |

:::(Warning) (Attention)
If the `username` provided contains an @ symbol, it won't function as expected. This is due to a conflict caused by the existence of the two @ symbols in the endpoint.
:::

#### Return

Deactivates a credential registered in PAM Core based on the `username` and `hostname` provided and returns a message with information about the deactivation process.

**Expected response**


```
HTTP/1.1 200 OK
```

```json 
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}

```

**In case of error - credential not found**


```
HTTP/1.1 400 Bad Request
```

```json
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1007: Credential not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1007: Credential not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1007,
        "message": "1007: Credential not found",
        "detail": null
    }
}
```

### `PUT` Activate a credential

#### Request

To activate a credential registered in **PAM Core**, send a request to the following endpoint:

`/iso/pam/credential/[id]`

#### Request parameters
**Path**

| Field | Type   | Required | Description                           | Example |
| ----- | ------ | -------- | ------------------------------------- | ------- |
| `id`    | Int | Yes      | Credential’s unique identification code associated with each entry in the Credential’s table . This value is automatically assigned by senhasegura when [creating a credential](/v3-32/docs/a2a-pam-core-create-or-update-a-credential) and is obtained in the response to the [List all credentials](/v3-32/docs/a2a-pam-core-list-credentials) request. | 5     |

#### Return

Activates a credential registered in **PAM Core** based on its `id` and returns a message with information about the aactivation process.

**Expected response**


```
HTTP/1.1 200 OK
```

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential successfully activated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential successfully activated",
        "erro": false,
        "cod_erro": 0
    }
}

```

**In case of error - credential not found**


```
HTTP/1.1 400 Bad Request
```

```json
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1007: Credential not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1007: Credential not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1007,
        "message": "1007: Credential not found",
        "detail": null
    }
}
```