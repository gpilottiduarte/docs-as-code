# POST | Create device

Create a device in **PAM Core**.

## Prerequisites

* Authorization with **access** and **read and write** permission to **PAM Core** granted by the administrator in **A2A**.\
  More information in [How to manage authorizations in A2A](../../../../../v4/docs/how-to-manage-authorizations-in-a2a/).

## Request

`POST` `/api/pam/device`

## Request parameters

Send the parameters below in the request body.

* `ip` - string - required - IP address of the device.

\
\*`hostname` - string - required - Hostname of the device.

::: (Info) (Info)\
If the `hostname` provided is associated with a previously created device, this request will update the existing device. Otherwise, a new device will be created associated with this `hostname`.\
:::

\
\*`model` - string - required - Device model.

Note: a new model is created if the value is unique.\
\*

`type` - string - required - Device type.

Note: a new type is created if the value is unique.\
\*

`vendor` - string - required - Device vendor.

Note: a new vendor is created if the value is unique.\
\*

`site` - string - required - Device location.

Note: a new site is created if the value is unique.\
\*

`device_domain` - string - Name or short name of the domain.Note: only previously registered device domains are accepted.Example: `api,app`

:::(Warning) (Attention)\
When listing more than one `device_domain`, add commas without a space between them, as in the following example:`testlab.com,demo.lab.com`\
:::

\
\*`device_tags` - string - Keywords associated with the device.\


* `connectivities` - string - Device connectivity.

\
\*`session_remote_config` - string - Login expression\


### Example request

`POST` `{{url}}/api/pam/device`

```json
{
    "ip": "10.66.33.20",
    "hostname": "API device test",
    "model": "Gmail",
    "type": "Desktop",
    "vendor": "Linux",
    "site": "AWS",
    "device_domain": ""
}
```

## Response

```json
  {
   "code": 201,
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
       "id": "17",
       "hostname": "API device test",
       "ip": "10.66.33.120",
       "model": "Gmail",
       "type": "Desktop",
       "vendor": "Linux",
       "site": "AWS",
       "device_domain": "",
       "connectivities": "",
       "session_remote_config": "",
       "device_tags": ""
   }
}
```

## Errors

<details>

<summary>400 - Bad Request</summary>

***

Message: "1004: The device's hostname was not informed"

Possible cause: the required parameter `hostname` of the device wasn’t informed.\


Solution: provide a value for the `hostname` parameter of the device and resend the request.

***

Message: "1005: The device's IP was not informed"

Possible cause: the required parameter `ip` of the device wasn’t informed.\


Solution: provide a value for the `ip` parameter of the device and resend the request.

***

Mensagem: "1019: The device's site was not informed"

Possível causa: the required parameter `site` of the device wasn’t informed.\


Solução: provide a value for the `site` parameter of the device and resend the request.

***

Mensagem: "1020: The device's model was not informed"

Possível causa: the required parameter `model` of the device wasn’t informed.\


Solução: provide a value for the `model` parameter of the device and resend the request.

***

Mensagem: "1021: The device's vendor was not informed"

Possível causa: the required parameter `vendor` of the device wasn’t informed.\


Solução: provide a value for the `vendor` parameter of the device and resend the request.

***

Mensagem: "1022: The device's type was not informed"

Possível causa: the required parameter `type` of the device wasn’t informed.\


Solução: provide a value for the `type` parameter of the device and resend the request.

***

Message: "1029: It is not possible to enter a domain that has not been previously registered"

Possible cause: the `device_domain` sent doesn’t exist or the sent format is incorrect.\


Solution: provide a valid value for the `device_domain` , or, in case you’re sending more than one `device_domain` remember to not add space between commas. Example: `qakm.lab.mt4.dev,my_device_domain`.

***

Message: "1039: Without PAM Configuration Access permission"\
\
Possible cause: your authorization doesn’t have permission to update a credential.

Solution: ask the administrator to check your read and write permission to PAM Core resources in A2A.

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
