# GET | List all devices

Access information of the devices associated with your authorization in **PAM Core**.

## Prerequisites

* Authorization with **access** permission to **PAM Core** granted by the administator in **A2A**.\
  More information in [How to manage authorizations in A2A](../../../../../v4/docs/how-to-manage-authorizations-in-a2a/)
* Device created in **PAM Core**.\
  More information in [POST | Create device](../../../../../v4/docs/api-post-create-device/).

## Request

`GET` `/api/pam/device`

### Example request

`GET` `{{url}}/api/pam/device`

## Response

```json
HTTP/1.1 200 OK 
```

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "2 devices found",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "2 devices found",
        "erro": false,
        "cod_erro": 0
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

### Response body fields

• `devices` - array de objetos - Dados dos dispositivos\
&#x20;   → `id` - int - Unique identification code of the device.\
&#x20;   →`hostname` - string - Hostname of the device.\
&#x20;   →`ip` - string - IP address of the device.\
&#x20;   →`model` - string - Device model.\
&#x20;   →`type` - string - Device type.\
&#x20;   →`vendor` - string - Device vendor.\
&#x20;   →`site` - string - Device location.\
&#x20;   →`tags` - string - Keywords associated with the device.

### Errors

<details>

<summary>404 - Not Found</summary>

***

Message: "Resource sub not found"\


Possible cause: the URL or the requested resource isn’t correct.\


Solution: check the URL and make sure the parameter is correct.

***

</details>

<details>

<summary>500 - Internal Server Error</summary>

***

Message: "Unexpected error."\


Possible cause: the error is in the Segura server.\


Solution: contact the support team for more information.

***

Message: "You are not authorized to access this resource."

Possible cause: you don’t have the authorization to access this resource.\


Solution: ask the administrator to check your permission to access the PAM Core resources in A2A.

***

</details>

<details>

<summary>Client authentication failed</summary>

***

Message: "Client authentication failed."

Possible cause: failure in your application authentication with the Segura server.\


Solution: check the authentication parameters such as `Access Token URL`, `Client ID` e `Client secret` and request a new access token.

***

</details>

<details>

<summary>Invalid signature</summary>

***

Message: "Invalid signature"

Possible cause: failure in recognizing the URL of the client application.

Solution: check the URL of the client application and resent the request.

***

</details>

<details>

<summary>No route matched with those values</summary>

***

Message: "No route matched with those values."

Possible cause: the authorization header is missing in the API request.\


Solution: request a new access token.

***

</details>

<details>

<summary>Request timed out</summary>

***

Message: "Request timed out."

Possible cause: the request time has expired.\


Solution: check the connectivity between the source of the request and the Segura server.

</details>
