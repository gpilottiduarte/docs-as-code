# List remote session data

This document presents how to access remote session data from **PAM Core** via API, the available endpoints, the parameters needed, example requests, and expected responses on success or in case of errors.

## Authorization

To get started, make sure **PAM Core** is listed under **Authorized resources** in your **A2A** module. For more information on authorization, access the [How to create an authorization for an application](/v3-32/docs/a2a-how-to-create-an-authorization-for-an-application) document.

## Authentication
Each request in the API must have the **OAuth Consumer Key** and the **OAuth Token** of the client. 
For more information on authentication, access the [How to authenticate an application](/v3-32/docs/a2a-how-to-authenticate-an-application) document.

## Methods
### List all remote sessions


#### Request
To access data from all remote sessions registered in **PAM Core**, send a request to the following endpoint:

```
GET api/session/remotesessions
```

#### Return

Returns all the remote sessions registered in **PAM Core**, associated with your user’s access, and a message with information about the retrieval process.

:::(Warning) (Attention)
Depending on the number of sessions recorded in the environment, the list returned can be very long.
:::

**Expected response**

```
HTTP/1.1 200 OK
```

```

{
    "code": 200,
    "response": {
        "status": 200,
        "message": "",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "",
        "erro": false,
        "cod_erro": 0
    },
    "remote_sessions": [
        {
            "id": "540",
            "user": "Admin",
            "origin_ip": "172.16.20.50",
            "credencial": "win7",
            "dispositivo": "127.0.0.1:27500",
            "protocol": "rdp",
            "proxy": "RDP Proxy",
            "session_id": "421c83a3b10be439d4da33b6c140f53eaf448207",
            "start": "2020-11-17 15:29:21",
            "end": "2020-11-17 15:29:41",
            "time": "00:00:20",
            "prevent_purge": "Não",
            "request": null,
            "ITSM": "governance code"
        },
        {
            "id": "541",
            "user": "Admin",
            "origin_ip": "172.16.20.50",
            "credencial": "win7",
            "dispositivo": "127.0.0.1:27500",
            "protocol": "rdp",
            "proxy": "RDP Proxy",
            "session_id": "0ca5556cee9cf223c808a0828cab174939937d1d",
            "start": "2020-11-17 15:32:32",
            "end": "2020-11-17 15:33:02",
            "time": "00:00:30",
            "prevent_purge": "Não",
            "request": null,
            "ITSM": null
        },
    ]

 }
```

### List a remote session


To access data from a remote session registered in **PAM Core**, send a request to the following endpoint:

```
GET api/session/remotesessions/[id]
```

#### Request parameters



**Path**

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
|```id```| Int | Yes | Unique code identifier associated with each entry in the session table. This value is automatically assigned by senhasegura when creating an authenticated URL to start a web proxy session to uniquely identify each session record and is obtained in the response to the[ List all remote sessions](/v3-32/docs/a2a-list-remote-session-data#list-all-remote-sessions) request. It should not be confused with the ```session_id``` parameter. | 540 |

## Return
Returns the information of all remote sessions registered in **PAM Core**, associated with your user’s access, and a message with information about the retrieval process.

**Expected response**

```
HTTP/1.1 200 OK
```
```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "",
        "erro": false,
        "cod_erro": 0
    },
    "remote_sessions": [
        {
            "id": "540",
            "user": "Admin",
            "origin_ip": "172.16.20.50",
            "credencial": "win7",
            "dispositivo": "127.0.0.1:27500",
            "protocol": "rdp",
            "proxy": "RDP Proxy",
            "session_id": "421c83a3b10be439d4da33b6c140f53eaf448207",
            "start": "2020-11-17 15:29:21",
            "end": "2020-11-17 15:29:41",
            "time": "00:00:20",
            "prevent_purge": "Não",
            "request": null,
            "ITSM": "governance code"
        },
        {
            "id": "541",
            "user": "Admin",
            "origin_ip": "172.16.20.50",
            "credencial": "win7",
            "dispositivo": "127.0.0.1:27500",
            "protocol": "rdp",
            "proxy": "RDP Proxy",
            "session_id": "0ca5556cee9cf223c808a0828cab174939937d1d",
            "start": "2020-11-17 15:32:32",
            "end": "2020-11-17 15:33:02",
            "time": "00:00:30",
            "prevent_purge": "Não",
            "request": null,
            "ITSM": null
        },
    ]

 }
```

**In case of error - remote session not found**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1002: Session not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1002: Session not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1002,
        "message": "1002: Session not found",
        "detail": null
    }
}
```

**In case of error -  invalid** ```id```

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1003: Unexpected identifier type",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1003: Unexpected identifier type",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1003,
        "message": "1003: Unexpected identifier type",
        "detail": null
    }
}
```

