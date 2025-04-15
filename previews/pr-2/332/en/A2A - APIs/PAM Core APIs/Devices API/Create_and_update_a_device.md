# Create and update a device

This article presents how to create and update a device in **PAM Core** via API, the available endpoints, the parameters needed, example requests, and responses on success or in case of errors.


## Authorization
To get started, make sure **PAM Core** is listed under **Authorized resources** in your **A2A** module. For more information on authorization, access [How to create an authorization for an application](/v3-32/docs/a2a-how-to-create-an-authorization-for-an-application).

## Authentication
Each request in the API must have the **OAuth Consumer Key** and the **OAuth Token** of the client. 
For more information on authentication, access [How to authenticate an application](/v3-32/docs/a2a-how-to-authenticate-an-application).

## Methods
### Create a device
#### Request
To create a device in **PAM Core**, send a request to the following endpoint: 

```
POST /iso/pam/device
```
#### Request parameters

:::(Info) (Info)
If the hostname provided matches that of a previously created device, this request will update the existing device. If not, it creates a new device and assigns it to this hostname.
:::

**Body**
| Field | Type | Required | Description | Example | New device default value |
| --- | --- | --- | --- | --- | --- |
| **ip** | String | Yes | Device's IP address. | 172.10.21.21 | - |
| **hostname** | String | Yes | Device name. | Device-via-API | - |
| **model** | String | Yes | Device model. A new model is created if unique. | Linux | - |
| **type** | String | Yes | Device type. A new type is created if unique. | RedHat | - |
| **vendor** | String | Yes | Device vendor. A new vendor is created if unique. | Desktop | - |
| **site** | String | Yes | Device's site. A new site is created if unique. | AWS | - |
| **device_domain** | String | No | Domain name or abbreviation. Only previously registered domains are accepted. | api, app | - |
| **device_tags** | String | No | Tags associated with this device. | api, app | - |
| **connectivities** | String | No | Device connectivity. | SSH:22 | - |
| **session_remote_config** | String | No | Login expression. |  | - |

:::(Warning) (Attention)
When listing **device_domains**, add commas without a space between them, as in the following example: 
“testlab.com,demo.lab.com”. 
:::

**Example request**

```
{
    "ip": "172.10.21.21",
    "hostname": "Device-via-API",
    "model": "RedHat",
    "type": "Desktop",
    "vendor": "Linux",
    "site": "AWS",
    "device_tags": "api, app",
    "connectivities": "SSH:22"
}
```

#### Return
Creates a device in **PAM Core** and returns a message with information about the creation process.

**Expected response**

```
HTTP/1.1 201 CREATED
```

```
{
     "response": {
        "status": 201,
        "message": "Device successfully registered!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device successfully registered!",
        "erro": false,
        "cod_erro": 0
    },
        "device": {
        "id": "31",
        "hostname": "Device-via-AP",
        "ip": "172.10.21.21",
        "model": "RedHat",
        "type": "Desktop",
        "vendor": "Linux",
        "site": "AWS",
        "device_domain": "",
        "connectivities": "",
        "session_remote_config": "",
        "device_tags": "api,app"
    }
}
```
**In case of error -  missing a required parameter**

```
HTTP/1.1 400 Bad Request

```

```
{
    "response": {
        "status": 400,
        "message": "1004: The device's hostname was not informed",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1004: The device's hostname was not informed",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1004,
        "message": "1004: The device's hostname was not informed",
        "detail": null
    }
}

```

### Update a device
#### Request
To update a device registered in **PAM Core**, send a request to the following endpoint: 

```
POST /iso/pam/device
```

### Request parameters

:::(Info) (Info)
If the hostname provided doesn’t match that of a previously created device, this endpoint will create a new device and assign it to this hostname.
:::

**Body**

| Field | Type | Required | Description | Example | New device default value |
| --- | --- | --- | --- | --- | --- |
| **ip** | String | Yes | Device's IP address. | 127.0.0.1 | - |
| **hostname** | String | Yes | Device name. | Device-via-API | - |
| **type** | String | Yes | Device type. A new type is created if unique. | Server | - |
| **model** | String | Yes | Device model. A new model is created if unique. | Linux | - |
| **vendor** | String | Yes | Device vendor. A new vendor is created if unique. | Debian | - |
| **site** | String | Yes | Device's site. A new site is created if unique. | Default | - |
| **device_domain** | String | No | Domain name or abbreviation. Only previously registered domains are accepted. | senhasegura.lab | - |
| **device_tags** | String | No | Tags associated with this device. | api, app | - |
| **connectivities** | String | No | Device connectivity. | SSH:22, HTTPS:443 | - |
| **session_remote_config** | String | No | Login expression. | SSH:EXPECT:FILL | - |

:::(Warning) (Attention)
When listing **device_domains**, add commas, without a space between them, as in the following example:
“testlab.com,demo.lab.com”. 
:::

**Example request**

```
{
    "ip": "172.0.0.1",
    "hostname": "Device-via-API",
    "model": "Server",
    "type": "Debian",
    "vendor": "Linux",
    "site": "Default",
    "device_domain": "senhasegura.lab"
    "device_tags": "api, app",
    "connectivities": "SSH:22, HTTPS:443"
    "session_remote_config": "SSH:EXPECT:FILL"
  } 
```
#### Return
Updates a device registered in **PAM Core** and returns a message with information about the updating process.

**Expected response**

```
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Device updated successfully!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device updated successfully!",
        "erro": false,
        "cod_erro": 0
    },
    "device": {
        "id": "31",
        "hostname": "Device-via-API",
        "ip": "172.0.0.1",
        "model": "Server",
        "type": "Debian",
        "vendor": "Linux",
        "site": "Default",
        "device_domain": "senhasegura.lab",
        "connectivities": "SSH:22, HTTPS:443"
        "session_remote_config": "SSH:EXPECT:FILL",
        "device_tags": "api, app"
    }
}
```

**In case of error -  missing a required parameter**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1004: The device's hostname was not informed",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1004: The device's hostname was not informed",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1004,
        "message": "1004: The device's hostname was not informed",
        "detail": null
    }
}

```

**In case of error - device not found**

```
HTTP/1.1 400 Bad Request
```
```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1011: Device not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1011: Device not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1011,
        "message": "1011: Device not found",
        "detail": null
    }
}
```


