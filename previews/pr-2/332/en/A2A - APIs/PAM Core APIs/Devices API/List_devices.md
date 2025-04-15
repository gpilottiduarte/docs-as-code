# List devices

This article presents how to access device  information from **PAM Core** via API, the available endpoints, the parameters needed, example requests, and expected responses on success or in case of errors.

## Authorization
To get started, make sure **PAM Core** is listed under **Authorized resources** in your **A2A** module. For more information on authorization, access [How to create an authorization for an application](/v3-32/docs/a2a-how-to-create-an-authorization-for-an-application).

## Authentication
Each request in the API must have the **OAuth Consumer Key** and the **OAuth Token** of the client. 
For more information on authentication, access [How to authenticate an application](/v3-32/docs/a2a-how-to-authenticate-an-application).

## Methods

### List a device

#### Request

To access a device registered in **PAM Core**, send a request to the following endpoint:

```
GET /iso/pam/device/[device_id]
```
#### Request parameters
 **Path**

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| **device_id** | String | Yes | Device’s unique identification code. | 53 |

#### Return
Returns a device registered in **PAM Core** based on its **ID**,  and a message with information about the retrieval process.

**Expected response**

```
HTTP/1.1 200 OK
```

```
{
    "response": {
        "status": 200,
        "mensagem": "Device 53",
        "erro": false,
        "cod_erro": 0,
        "message": "Device 53",
        "error": false,
        "error_code": 0
    },
    "device": {
        "id": "53",
        "hostname": "desktop-91.com",
        "ip": "172.10.20.90",
        "model": "Ubuntu",
        "type": "Desktop",
        "vendor": "Linux",
        "site": "AWS",
        "device_domain": "senhasegura.lab",
        "connectivities": "SSH:22",
        "session_remote_config": "SSH:EXPECT:FILL",
        "device_tags": "api, app"
    }
}

```

**In case of error - device not found**

```
HTTP/1.1 400 Bad Request
```
```
{
    "response": {
        "status": 400,
        "mensagem": "1011: Device not found",
        "erro": true,
        "message": "1011: Device not found",
        "error": true
    },
    "exception": {
        "code": 1011,
        "message": "1011: Device not found",
        "detail": null
    }
}

```

### List devices

#### Request

To access a list of all devices registered in **PAM Core**, send a request to the following endpoint: 

```
GET /iso/pam/device
```

### Return
Returns all the devices registered in **PAM Core**, associated with your user’s access, and a message with information about the retrieval process.


**Expected response**

```
HTTP/1.1 200 OK 
```
```
{
    "response": {
        "status": 200,
        "mensagem": "2 devices found",
        "erro": false,
        "message": "2 devices found",
        "error": false
    },
    "devices": [
        {
            "id": "1",
            "hostname": "mydevicehostname",
            "ip": "172.10.20.30",
            "model": "Windows Server 2012",
            "type": "Server",
            "vendor": "Microsoft",
            "site": "LAX"
	        "tags": "tag001"
        },
        {
            "id": "6",
            "hostname": "myseconddevice",
            "ip": "41.41.208.182",
            "model": "CentOS 7",
            "type": "Server",
            "vendor": "CentOS",
            "site": "AWS"
	        "tags": ""
        }
    ]
}

```