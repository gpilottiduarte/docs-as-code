# Release credential custody

This document presents how to release the custody of a credential registered in **PAM Core** via API, the available endpoints, the parameters needed, example requests, and expected responses on success or in case of errors.


## Methods

### `DELETE` Release the custody of a credential
When the API receives a password request, we refer to it as granting the user temporary custody of the corresponding credential. When the API revokes access to this credential, we describe it as releasing custody.


#### Request

To release the custody of a credential registered in **PAM Core**, send a request to the following endpoint:


`/iso/pam/credential/custody/[id]`

#### Request parameters
**Path**

| Field | Type   | Required | Description                           | Example |
| ----- | ------ | -------- | ------------------------------------- | ------- |
| `id`    | Int | Yes      | Credential’s unique identification code associated with each entry in the Credential’s table . This value is automatically assigned by senhasegura when [creating a credential](/v3-32/docs/a2a-pam-core-create-or-update-a-credential) and is obtained in the response to the [List all credentials](/v3-32/docs/a2a-pam-core-list-credentials) request. | 94     |

#### Return

Releases the custody of the credential registered in **PAM Core** based on its `id` and returns a message with information about the releasing process.

**Expected response**


```
HTTP/1.1 200 OK
```

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential custody 94 released",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential custody 94 released",
        "erro": false,
        "cod_erro": 0
    }
}

```
:::(Info) (Info)
In the `message` above, `Credential custody 94 released`, 94 is the credential `id`.
:::

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

**In case of error - credential is not in the user’s custody**

```
HTTP/1.1 400 Bad Request
```

```json
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1018: The credential is not in the user custody",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1018: The credential is not in the user custody",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1018,
        "message": "1018: The credential is not in the user custody",
        "detail": null
    }
}
```