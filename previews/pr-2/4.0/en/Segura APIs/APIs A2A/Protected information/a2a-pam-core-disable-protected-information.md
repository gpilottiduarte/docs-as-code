# DEL | Disable protected information

This article presents how to disable protected information from **PAM Core** via API, the available endpoint, the parameters needed, example requests, and responses on success or in case of errors.

## Methods
### `DELETE` Disable protected information
#### Request
To disable privilege information registered from **PAM Core**, send a request to the following endpoint:

`iso/pam/info/[id]`

#### Request parameters

**Path**

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `id` | String | Yes | Protected information item ’s unique identification code. This value is automatically assigned by Segura when [creating a protected item](/v4/docs/a2a-pam-core-create-protected-information). | 1 |

#### Return
Disables the protected information item registered in **PAM Core** based on its id and provides a message with information about the disabling process.

**Expected response**

`HTTP/1.1 200 OK`

```json 
{
    "response": {
        "status": 200,
        "mensagem": "Information successfully disabled",
        "erro": false,
        "message": "Information successfully disabled",
        "error": false
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