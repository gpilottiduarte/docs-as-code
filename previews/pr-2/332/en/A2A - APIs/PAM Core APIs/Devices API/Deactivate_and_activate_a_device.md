# Deactivate and activate a device

This article presents how to deactivate and activate devices in **PAM Core** via API, the available endpoints, the parameters needed, example requests, and expected responses on success or in case of errors.

## Authorization
To get started, make sure **PAM Core** is listed under Authorized resources in your **A2A** module. For more information on authorization, access [How to create an authorization for an application](/v3-32/docs/a2a-how-to-create-an-authorization-for-an-application).

## Authentication
Each request in the API must have the **OAuth Consumer Key** and the **OAuth Token** of the client. 
For more information on authentication, access [How to authenticate an application](/v3-32/docs/a2a-how-to-authenticate-an-application).

## Methods
### Deactivate a device 
#### Request
To deactivate a device in **PAM Core**, send a request to the following endpoint:

```
DELETE iso/pam/device/[device_id]
```
:::(Warning) (Caution)
When you deactivate a device, all the credentials associated with it are automatically suspended.
:::

#### Request parameters
**Path**

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| **device_id** | String | Yes | Device’s unique identification code. | 53 |

#### Return
Deactivates a device registered in **PAM Core** based on its **ID**, and returns a message with information about the device deactivation process.

**Expected response**

```
HTTP/1.1 200 OK
```

```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Device successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device successfully deactivated",
        "erro": false,
        "cod_erro": 0
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

### Activate a device
#### Request

To activate a device registered in **PAM Core**, send a request to the following endpoint:

```
PUT iso/pam/device/[device_id]
```
:::(Warning) (Caution)
Activating the device will not activate all its related passwords.
:::

#### Request parameters
**Path**

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| **device_id** | String | Yes | Device’s unique identification code. | 53 |

#### Return
Activates a device registered in **PAM Core** based on its **ID** and returns a message with information about the activation process.

**Expected response**

```
HTTP/1.1 200 OK
```

```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Device successfully activated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device successfully activated",
        "erro": false,
        "cod_erro": 0
    }
}
```

**In case of error -  device not found**

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
