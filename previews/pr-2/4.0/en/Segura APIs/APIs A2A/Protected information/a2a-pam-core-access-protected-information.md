# GET | Access protected information

This document presents how to access a protected information item from **PAM Core** via API, the available endpoint, the parameters needed, example requests, and responses on success or in case of errors.

## Methods
### `GET` Access protected information
#### Request
To access a protected information item registered in **PAM Core**, send a request to the following endpoint:

`/iso/pam/info/[id]`

#### Request parameters
**Path**


| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `id` | Int | Yes | Protected information item’s unique identification code. This value is automatically assigned by Segura when [creating a protected item](/v4/docs/a2a-pam-core-create-protected-information). | 1 |

#### Return
Returns the protected information item registered in **PAM Core** based on its `id` and a message with information about the retrieval process.

**Expected response**

`HTTP/1.1 200 OK`

```{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Information 28",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Information 28",
        "erro": false,
        "cod_erro": 0
    },
    "info": {
        "id": "28",
        "tag": null,
        "type": "Access credential",
        "content": "hdjskasdhdj2789208/3\\G+H-J_K'#JK\"NAOAPARECE\"JSJSJSJS"
    }
}
```

**In case of error - information not found**

`HTTP/1.1 400 Bad Request`
 ```json
 {
    "response": {
        "status": 400,
        "mensagem": "1023: Information not found",
        "erro": true,
        "message": "1023: Information not found",
        "error": true
    },
    "exception": {
        "code": 1023,
        "message": "1023: Information not found",
        "detail": null
    }
}
```

**In case of error - inactive information**

`HTTP/1.1 400 Bad Request`
 ```json
 {
    "response": {
        "status": 400,
        "mensagem": "1024: Inactive information",
        "erro": true,
        "message": "1024: Inactive information",
        "error": true
    },
    "exception": {
        "code": 1024,
        "message": "1024: Inactive information",
        "detail": null
    }
}
```