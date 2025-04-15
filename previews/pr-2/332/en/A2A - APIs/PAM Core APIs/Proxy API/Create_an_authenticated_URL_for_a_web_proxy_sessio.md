# Create an authenticated URL for a web proxy session

This article presents how to create an authenticated URL for a web proxy session in **PAM Core** via API, the available endpoints, the parameters needed, example requests, and expected responses on success or in case of errors.

## Authorization

To get started, make sure **Web Proxy Session** is listed under **Authorized resources** in your **A2A** module. For more information on authorization, access the [How to create an authorization for an application](/v3-32/docs/a2a-how-to-create-an-authorization-for-an-application) documentation.

## Authentication
Each request in the API must have the **OAuth Consumer Key** and the **OAuth Token** of the client. 
For more information on authentication, access the [How to authenticate an application](/v3-32/docs/a2a-how-to-authenticate-an-application) documentation.

## Methods

### Create an authenticated URL for a web proxy session

### Request

To start a web proxy session on a device registered in **PAM Core** using senhasegura web proxy, send a request to the following endpoint to generate an authenticated URL:

```
POST /iso/remote/session
```
:::(Info) (Info)
By default, the system will set the screen resolution at 1920x1080 unless otherwise specified.
:::

#### Request parameters

**Body**


| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
|```user```| String | Yes | Username used for authentication. The user must have been previously added to senhasegura. | senhasegura-user |
| ``` credential``` | String | Yes |Username of the credential used in this web proxy session. | admin |
| ```device ``` | String | Yes | Target device's hostname or IP address. | 172.12.32.14 |
| ``` protocol``` | String | Yes | Network protocol (SSH, RDP, HTTPS, etc.). | SSH |
| ``` remotedevice``` | String | No | Device ID, IP address, or Hostname for the web session. Only required if the session uses domain credentials. | 123 |
| ```remoteAddr ``` | String | No | User IP address. This IP address will be used throughout the session. | 201.13.25.61 |
| ```port ``` | Int | No | Port used throughout the session. By default, it uses the Device Port of the chosen device unless otherwise specified. | 22 |
| ```remoteapp ``` | Int | No | RemoteApp ID. For RemoteApp sessions only. | 123 |
| ```screensize ``` | String | No | Screen resolution. | 1900x1200 |

#### Return
Creates an authenticated URL for a web proxy session in a device registered in **PAM Core** and returns a message with information about the creation process.

**Expected response**

```
HTTP/1.1 200 OK
```

```
{
    "response": {
        "status": 200,
        "mensagem": "Session created successfully",
        "erro": false,
        "message": "Session created successfully",
        "error": false
    },
    "session": {
        "session_url": "https://senhasegura/modulos/auth?_sr=cmJzOkQwUzdq     Wk9zQkhKY2FvRkNaQ0Q2OVRnbVdmTnk1MEc2cDNnM1orM2ltL3BxQURZNW91WW1G     TExFU2JlYldkTlRabFNWb0Z2VzllU0E1WlIraEtJM3NvMlZmZ0NZTXV4QlNFWEtPUko3YlMxQWNwZmxYTWw2ZGxsUlFEOCtPdlBq",
        "token": "c4ac50a35bcc0a0d1641b02e64dd7c6421d3e5be2afa5378ca29ce5621e2eb38"
    }
}

```

:::(Info) (Info)
URLs authenticated using this method expire after 30 seconds and can't be reused. Generate a new authenticated URL if necessary.
:::

**In case of error -  missing a required parameter**

```
HTTP/1.1 400 Bad Request
```

```
{
    "response": {
        "status": 400,
        "mensagem": "Credential not specified",
        "erro": true,
        "cod_erro": 0,
        "message": "Credential not specified",
        "error": true,
        "error_code": 0
    }
}

```

#### Possible errors

The following parameters are required and, if not specified, can result in an error:

* ```user```: User not specified.
* ```credential```: Credential not specified.
* ```device```: Credential device not specified.
* ```protocol```: Invalid protocol.



