# GET | List a device by \[id]

Access information of a device registered in **PAM Core**.

## Prerequisites

* Authorization with **access** permission to **PAM Core** granted by the administator in **A2A**.\
  More information in [How to manage authorizations in A2A](../../../../../v4/docs/how-to-manage-authorizations-in-a2a/).
* Device created in **PAM Core**.\
  More information in [POST | Create device](../../../../../v4/docs/api-post-create-device/).

## Request

`GET` `/api/pam/device/[id]`

## Request parameters

Send the parameter below in the **path** of the URL.

`id` - int - required - Unique identification code of the device.Note: this value is automatically assigned by Segura in [POST | Create device](../../../../../v4/docs/api-post-create-device/) and is obtained in the response to the [GET | List all devices](../../../../../v4/docs/api-get-list-all-devices/).

### Example request

`GET` `{{url}}/api/pam/device/14`

## Response

```json
HTTP/1.1 200 OK 
```

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Device 14",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device 14",
        "erro": false,
        "cod_erro": 0
    },
    "tenant": "Segura",
    "device": {
        "id": "14",
        "hostname": "API device",
        "ip": "10.66.33.17",
        "model": "Gmail",
        "type": "Desktop",
        "vendor": "Linux",
        "site": "AWS",
        "device_domain": "my_device_domain",
        "connectivities": "HTTP:80, SSH:22"",
        "session_remote_config": "HTTP::",
        "device_tags": "test"
    }
}
```

### Response body fields

• `devices` - object - Device data.\
&#x20;   → `id` - int - Unique identification code of the device.\
&#x20;   →`hostname` - string - Hostname of the device.\
&#x20;   →`ip` - string - IP address of the device.\
&#x20;   →`model` - string - Device model.\
&#x20;   →`type` - string - Device type.\
&#x20;   →`vendor` - string - Device vendor.\
&#x20;   →`site` - string - Device location.\
&#x20;   →`device_domain` - string - Name or short name of the device.\
&#x20;   →`connectivities` - string - Device connectivity.\
&#x20;   →`session_remote_config` - string - Login expression.\
&#x20;   →`device_tags` - string - Keywords associated with the device.\


### Errors

<details>

<summary>400 - Bad Request</summary>

***

Message: "1011: Device not found"

\
Possible cause: the device wasn't found.

Solution: check the `id` used to search for the device and resend the request.

***

</details>

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
