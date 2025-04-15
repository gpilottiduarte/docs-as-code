# List credentials

This document presents how to access credentials’ information from **PAM Core** via API, the available endpoints, the parameters needed, example requests, and expected responses on success or in case of errors.


## Methods

### `GET` List all credentials

#### Request

To access a list with all credentials registered in **PAM Core**, send a `GET` request to the following endpoint:

`/iso/pam/credential`


#### Return

Returns a list of credentials registered in **PAM Core** associated with your authorization, and a message with information about the retrieval process.

:::(Info) (Info)
If an SSH key has been inserted as a credential, it will also be returned in this request. However, to list a specific SSH key, send a `GET` request to the endpoint 
`iso/pam/key[id]`. For more information, refer to the [Query an SSH key](/v3-32/docs/a2a-pam-core-query-an-ssh-key) document.
:::
**Expected response**


```
HTTP/1.1 200 OK
```

```json
{
    "response": {
        "status": 200,
        "mensagem": "2 credentials found",
        "erro": false,
        "message": "2 credentials found",
        "error": false
    },
    "credentials": [
        {
            "id": "1",
            "identifier": "exampleuser01ws",
            "username": "exampleuser01",
            "expiration": null,
            "change": "2020-11-17 16:14:35",
            "view": null,
            "hostname": "exampledevice01",
            "management_ip": "172.10.20.30",
            "type": "Local User",
            "type_code": "1",
            "device_model": "Example Product",
            "device_type": "Server",
            "device_vendor": "Example Vendor",
            "automatic_change": "0",
            "connectivity": "",
            "connectivity_code": ""
        },
        {
            "id": "2",
            "identifier": "exampleuser02ws",
            "username": "exampleuser02",
            "expiration": null,
            "change": "2020-11-17 16:14:35",
            "view": null,
            "hostname": "exampledevice01",
            "management_ip": "172.10.20.30",
            "type": "Local User",
            "type_code": "1",
            "device_model": "Example Product",
            "device_type": "Server",
            "device_vendor": "Example Vendor",
            "automatic_change": "0",
            "connectivity": "",
            "connectivity_code": ""
        }
    ]
}
```

### `GET` Access a credential

#### Request

There are two possible endpoints for accessing a credential’s information.

#### First endpoint
To access the information of a credential registered in **PAM Core**, send a request to the following endpoint:


`/iso/pam/credential/[id]`

#### Request parameters

**Path**

| Field | Type   | Required | Description                           | Example |
| ----- | ------ | -------- | ------------------------------------- | ------- |
| `id`    | Int | Yes      | Credential’s unique identification code associated with each entry in the Credential’s table. This value is automatically assigned by senhasegura when [creating a credential](/v3-32/docs/a2a-pam-core-create-or-update-a-credential) and is obtained in the response to the [List all credentials](/v3-32/docs/a2a-pam-core-list-credentials#list-all-credentials) request. | 5     |



#### Return

Returns the credential’s information registered in **PAM Core** based on its `id`, and provides a message with information about the retrieval process.

**Expected response**


```
HTTP/1.1 200 OK
```

```json
{
    "response": {
        "status": 200,
        "mensagem": "Credential 5",
        "erro": false,
        "message": "Credential 5",
        "error": false
    },
    "credential": {
        "id": "5",
        "tag": "robot-test-5",
        "username": "credential_5",
        "password": "secret@2504",
        "content": "secret@2504",
        "hostname": "destktop-91.com",
        "parent_credential_cod": null,
        "parent_credential": null,
        "additional": "CREDADD01",
        "domain": "",
        "ip": "172.10.10.90",
        "port": "22",
        "model": "Ubuntu",
        "expiration_time": "2021-01-16T17:31:39"
    }
}
```

#### Second endpoint
To access the information of a credential registered in **PAM Core**, send a request to the following endpoint:

`/iso/pam/credential/[username@hostname]`

#### Request parameters

**Path**

| Field | Type   | Required | Description                           | Example |
| ----- | ------ | -------- | ------------------------------------- | ------- |
| `username@hostname`    | String | Yes      | Credential’s associated `username` and `hostname` separated by the @ symbol. These values are informed by the user when creating a credential and are obtained in the response to the [List all credentials](/v3-32/docs/a2a-pam-core-list-credentials#list-all-credentials) request.| credential_5@desktop-91.com     |

:::(Warning) (Attention)
If the `username` provided contains an @ symbol, it won't function as expected. This is due to a conflict caused by the existence of the two @ symbols in the endpoint.
:::

#### Return
Returns a credential registered in **PAM Core** based on the `username` and `hostname` provided, along with a message containing information about the retrieval process.

**Expected response**


```
HTTP/1.1 200 OK
```

```json
{
    "response": {
        "status": 200,
        "mensagem": "Credential 5",
        "erro": false,
	 "detail": "",
        "message": "Credential 5",
        "error": false,
	 "error_code": 0
    },
    "credential": {
        "id": "5",
        "tag": "robot-test-5",
        "username": "credential_5",
        "password": "secret@2504",
        "content": "secret@2504",
        "hostname": "destktop-91.com",
        "parent_credential_cod": null,
        "parent_credential": null,
        "additional": "CREDADD01",
        "domain": "",
        "ip": "172.10.10.90",
        "port": "22",
        "model": "Ubuntu",
        "expiration_time": "2021-01-16T17:31:39"
    }

```


**In case of error - credential  not found**


```
HTTP/1.1 400 Bad Request
```

```json
{
    "response": {
        "status": 400,
        "mensagem": "1007: Credential not found",
        "erro": true,
        "message": "1007: Credential not found",
        "error": true
    },
    "exception": {
        "code": 1007,
        "message": "1007: Credential not found",
        "detail": null
    }
}
```