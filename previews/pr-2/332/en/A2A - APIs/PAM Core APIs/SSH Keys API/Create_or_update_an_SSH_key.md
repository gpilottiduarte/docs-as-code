# Create or update an SSH key

This document presents how to create or update an SSH key in **PAM Core** via API, the available endpoints, the parameters needed, example requests, and expected responses on success or in case of errors.

## Authorization

To get started, make sure **PAM Core** is listed under **Authorized resources** in your **A2A** module. For more information on authorization, access the [How to create an authorization for an application](/v3-32/docs/a2a-how-to-create-an-authorization-for-an-application) document.

## Authentication

Each request in the API must have the **OAuth** **Consumer Key** and the **OAuth Token** of the client. For more information on authentication, access the [How to authenticate an application](/v3-32/docs/a2a-how-to-authenticate-an-application) document.

## Methods

## Create or update an SSH key

### Request

To create an SSH key in **PAM Core,** send a request to the following endpoint:

`POST /iso/pam/key` 

:::(Error) (Alert!)
If you're using **A2A** to create or update an SSH key and the corresponding device doesn't exist, you’ll need to create the device first. For more information, access the documentation on [Configuring a device](/v3-32/docs/pam-devices-management).
:::

### Request parameters

**Body**

:::(Info) (Info)
When sending an update request, it's not necessary to include parameters you don't want to update. 
:::
| Field |  | Type | Required | Description | Example | Default Value |
| --- | --- | --- | --- | --- | --- | --- |
| `username` |  | String | No. **Note:** Although not required, as a best practice, filling in this field makes it easier to search for the SSH key.| Username related to the key on the device. | jsilva | usr |
| `hostname` |  | String | Yes (when creating an SSH key. | Name of the main device associated with the SSH key. | API-Testing | - |
| `ip` |  | String | Yes (when creating an SSH key). | IP address of the main device associated with the SSH key. | 128.0.0.1 | - |
| `public_key` |  | String | Yes (when creating an SSH key). | Public key. | public-key | - |
| `enabled` |  | Boolean | No | SSH key status. | true |  |
| `private_key` |  | String | Yes (when creating an SSH key).  | Private key. | private-key | - |
| `identifier` |  | String | Yes (when updating an SSH key). **Note**: this field is essential for API updates. If it isn't provided during the creation of the SSH key, no changes to the key's fields can be made via the API update route. In this scenario, it will only be possible to [activate or deactivate the key](/v3-32/docs/a2a-pam-core-deactivate-or-activate-an-ssh-key) using the endpoints designated for these actions.| SSH key identifier. | api-ssgr1144-caracteres-tags | - |
| `key_name` |  | String | No. **Note:** Although not required, as a best practice, filling in this field makes it easier to search for the SSH key. | Key name. | api-ssgr1144-tags | - |
| `password` |  | String | No | Optional password that provides an additional layer of security to the private key, making it necessary to unlock the key before use. |  | - |
| `tags` |  | String | No | SSH key tags. | tag1,tag2,tag3,!@#$%¨*&()_+  | - |
| `devices` |  | Array of devices | No | Devices associated with the SSH key, containing its hostname. | View example below*. | - |
|  | `hostname` | String | No | Hostname associated with the device. | View example below* |  |


***Example of a device array:**

```json
 "devices": [
        {
            "hostname": "API-Device1"
        },
        {
            "hostname": "API-Device2"
        },
        {
            "hostname": "API-Device3"
        },
        {
            "hostname": "API-Device4"
        }
    ]
}
```

:::(error) (Alert!)
- If you leave the `devices` field empty while creating an SSH key, the key won’t have any additional associated devices.
- If you enter the value `false` in the `enabled` field, the SSH key will be created as inactive. To access this key's information, you must activate it manually by following the appropriate [route](/v3-32/docs/a2a-pam-core-deactivate-or-activate-an-ssh-key) or [procedure](/v3-32/docs/pam-how-to-manage-ssh-keys#operations-for-ssh-keys) within senhasegura.
:::

#### Example request

```json
{
    "username": "jsilva",
    "hostname" : "API-Testing",
    "ip": "128.0.0.1",
    "public_key": "public-key",
    "enabled": true,
    "private_key": "private-key",
    "identifier": "api-ssgr1144-caracteres-tags",
    "key_name": "api-ssgr1144-tags",
    "tags": "tag1,tag2,tag3,!@#$%¨&*()_+",
    "devices": [
        {
            "hostname": "API-Device1"
        },
        {
            "hostname": "API-Device2"
        },
        {
            "hostname": "API-Device3"
        },
        {
            "hostname": "API-Device4"
        }
    ]
}
```


### Return

Creates or updates an SSH key in **PAM Core,** and returns a message informing about the process.

#### Expected response - create an SSH key

`HTTP/1.1 200 OK`

```json
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Key successfully registered!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Key successfully registered!",
        "erro": false,
        "cod_erro": 0
    },
    "key": {
        "id": "14704",
        "tag": "api-ssgr1144-caracteres-tags2",
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
        "devices_error": []
    }
}
```

#### Expected response - update an SSH key

```
HTTP/1.1 201 Updated
```
```json
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Key updated successfully!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Key updated successfully!",
        "erro": false,
        "cod_erro": 0
    },
    "key": {
        "id": "14704",
        "tag": "api-ssgr1144-caracteres-tags2",
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
        "devices_error": []
    }
}
```

#### In case of error - missing a required parameter

`HTTP/1.1 400 Bad Request` 

```json
{
	"code": 400,
	"response": {
	"status": 400,
	"message": "1004: The device's hostname was not informed",
	"error": true,
	"error_code": 1,
	"detail": "",
	"message": "1004: The device's hostname was not informed",
	"error": true,
	"cod_erro": 1
},
	"exception": {
	"code": 1004,
	"message": "1004: The device's hostname was not informed",
	"detail": ""
	}
}
```