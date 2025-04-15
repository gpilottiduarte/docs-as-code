# Query an SSH key

This document presents how to access an SSH key's information from **PAM Core** via API, the available endpoints, the parameters needed, example requests, and expected responses on success or in case of errors.

## Authorization

To get started, make sure **PAM Core** is listed under **Authorized resources** in your **A2A** module. For more information on authorization, access the [How to create an authorization for an application](/v3-32/docs/a2a-how-to-create-an-authorization-for-an-application) document.

## Authentication

Each request in the API must have the **OAuth Consumer Key** and the **OAuth Token** of the client. For more information on authentication, access the [How to authenticate an application](/v3-32/docs/a2a-how-to-authenticate-an-application) document.

## Methods

### Query an SSH key

#### Request

To access an SSH key registered in **PAM Core**, send a request to the following endpoint:

`GET/iso/pam/key/[id]`

#### Request parameters

Path

| Field | Type   | Required | Description                           | Example |
| ----- | ------ | -------- | ------------------------------------- | ------- |
| `id`    | Int | Yes      | SSH key’s unique identification code. This value is automatically assigned by senhasegura when [creating an SSH key](/v3-32/docs/a2a-pam-core-create-or-update-an-ssh-key) and is obtained in the response to the `GET iso/pam/credential` request. This endpoint lists all credentials accessible to your user. For more information on this endpoint, access the [Credentials API](/v3-32/docs/a2a-pam-core-credentials-api) document. | 14694     |



#### Return

Returns an SSH key registered in **PAM Core** based on its `id`, and provides a message with information about the retrieval process.

**Expected response**


```
HTTP/1.1 200 OK
```

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Key 14694",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Key 14694",
        "erro": false,
        "cod_erro": 0
    },
    "key": {
        "id": "14694",
        "username": "jsilva",
        "key_name": "api-ssgr1144-evidencia2",
        "hostname": "API-Testing",
        "ip": "128.0.0.1",
        "private_key": "private-key",
        "public_key": "public-key",
        "password": null,
        "tags": [
            "tag1",
            "tag2",
            "tag3"
        ],
        "devices": [
            {
                "hostname": "API-Device1",
                "ip": "128.0.0.1"
            },
            {
                "hostname": "API-Device2",
                "ip": "128.0.0.1"
            },
            {
                "hostname": "API-Device3",
                "ip": "128.0.0.1"
            },
            {
                "hostname": "API-Device4",
                "ip": "128.0.0.1"
            }
        ],
        "expiration_time": null
    }
}
```


#### In case of error - the credential isn't an SSH key
```
HTTP/1.1 400 Bad Request
```

```json

{
    "code":400,
    "response": {
        "status":400,
        "message":"1016: The item is not a ssh key",
        "error":true,
        "error_code":1,
        "detail":"",
        "mensagem":"1016: The item is not a ssh key",
        "erro":true,
        "cod_erro":1
        },
    "exception": {
        "code":1016,
        "message":"1016: The item is not a ssh key",
        "detail":null
    }
}
```

#### In case of error -  unexpected error

:::(info)(Info)
This error may occur if you don’t provide a value for the `id` parameter.
:::


```
HTTP/1.1 500 Internal Server Error
```


```json
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
        "code": 500,
        "message": "Check the index log system error for more details",
        "detail": null
    }
}
```

#### In case of error - SSH key not found


```
HTTP/1.1 400 Bad Request
```

```json
{
    "code":400,
    "response":{
    "status":400,
    "message":"1015: SSH key not found",
    "error":true,
    "error_code":1,
    "detail":"",
    "mensagem":"1015: SSH key not found",
    "erro":true,
    "cod_erro":1
    },
    "exception": {
        "code":1015,
        "message":"1015: SSH key not found",
        "detail":null
        }
}
```