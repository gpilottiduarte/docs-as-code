# POST | Create SSH key

Create an SSH key in **PAM Core**.

## Prerequisites

* Authorization with **access** and **read and write** permission to **PAM Core** granted by the administator in **A2A**.\
  More information in [How to manage authorizations in A2A](../../../../../v4/docs/how-to-manage-authorizations-in-a2a/).
* Device created in **PAM Core**.\
  More information in [POST | Create device](../../../../../v4/docs/api-post-create-device/).

## Request

`POST` `/api/pam/key`

## Request parameters

Send the parameters below in the request body.

* `ip` - string - required - IP address of the main device associated with the SSH key.

\
\*`hostname` - string - required - Hostname of the main device associated with the SSH key.\
\*`private_key` - string - required - Private key necessary for user authentication.Example: `-----BEGIN OPENSSH PRIVATE KEY-----\rcTA9Vb5aA0kXaK2HEjGUWgeCBG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\rQyNTUxOQAAACCLABE9/nb3BlbnNzaC1rZXktdjEAAAAAxtPOCkR2sGccAAAAKi5DXJnuQ1y\r\nZwAAAAtzc2gtZWQyNTUxOQAAACCLABE9/cTA9VTGVpdGVGZXJyZWlyYUBIUjFTUkb5aA0kXaK2HEjGUWgeCxtPOCkR2sGccA\rDgaNiGsvbkkkXhepU2NQi3iZ4sAET39xMD1VvloDSRdorYc\rSMZRaB4LG084KRHawZxwAAAAI0F6dXJlQUQrRGVib3JhAAAECc20zsB7FuSJQAqhLxe\rgzAQI=\r-----END OPENSSH PRIVATE KEY-----`\
\*`public_key` - string - required - Public key that allows servers to verify the identity of the user associated with the corresponding private key.Example: `ssh-ed25519 C1lZDI1NTE5AAawZxwAAAAAAC3NzaIIsAET39xdorYcSMZRaB4LG084MD1VvloDSRKRH AzureAD+DeboraLeiteFerreira@HR1SRH3`\
\*`identifier` - string - Unique string defined by the user or by Segura for identifying the credential.Note: although users aren’t required to fill out this field, for security reasons and to enable future updates of the SSH key, the system will automatically generate an identifier based on `UUID` if left blank. This value can be updated in future calls.\
\*`username` - string - Username related to the key in the device.Note: although not required, as good practice filling out this field helps searching for the SSH key.

New SSH key default value: `usr`

\
\*`enabled` - boolean - SSH key status: active = `true`; inactive = `false`.Note: if you enter the value `false` in the `enabled` field, the SSH key will be created as inactive. To access this key's information, you must enable it first.\
• `devices` - array of hostnames - Additional devices associated with the SSH key, containing their `hostname`.Note: if this field is left empty, the SSH key won't have any additional associated devices.\
&#x20;   → `hostname` - string - Hostname of the additional device.   Note: only previously registered devices are accepted.\
\*`tags` - string - Keywords for identifying the SSH key.\
\*`key_name` - string - User-created name for identifying the key.Note: although not required, as good practice, filling out this field helps search for the SSH key.\
\*`password` - string - Optional password that provides an extra layer of security to the private key.\


### Example request

`POST` `{{url}}/api/pam/key`

```json
{
    "ip": "10.66.33.15",
    "hostname": "w2016",
    "private_key": "-----BEGIN OPENSSH PRIVATE KEY-----\r\cTA9Vb5aA0kXaK2HEjGUWgeCBG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\r\nQyNTUxOQAAACCLABE9/nb3BlbnNzaC1rZXktdjEAAAAAxtPOCkR2sGccAAAAKi5DXJnuQ1y\r\nZwAAAAtzc2gtZWQyNTUxOQAAACCLABE9/cTA9VTGVpdGVGZXJyZWlyYUBIUjFTUkb5aA0kXaK2HEjGUWgeCxtPOCkR2sGccA\r\nDgaNiGsvbkkkXhepU2NQi3iZ4sAET39xMD1VvloDSRdorYc\r\nSMZRaB4LG084KRHawZxwAAAAI0F6dXJlQUQrRGVib3JhAAAECc20zsB7FuSJQAqhLxe\r\ngzAQI=\r\n-----END OPENSSH PRIVATE KEY-----",
    "public_key": "ssh-ed25519 C1lZDI1NTE5AAawZxwAAAAAAC3NzaIIsAET39xdorYcSMZRaB4LG084MD1VvloDSRKRH AzureAD+DeboraLeiteFerreira@HR1SRH3",
    "username": "dleite3",
    "identifier": "sshkey3",
    "enabled": true,
    "devices": [
        {
            "hostname": "API device test"
        }
    ],
    "tags": "mainsshkey",
    "key_name": "teste4",
    "password": "fkjwe87a5a8fa9a" 
}
```

## Response

```json
 {
   "code": 201,
   "response": {
       "status": 201,
       "message": "Key successfully registered!",
       "error": false,
       "error_code": 0,
       "detail": "",
       "Message": "Key successfully registered!",
       "erro": false,
       "cod_erro": 0
   },
   "key": {
       "id": "92",
       "identifier": "sshkey0",
       "devices": [
           {
               "hostname": "API device test",
               "ip": "10.66.33.20"
           }
       ],
       "devices_error": []
   }
}
```

## Errors

<details>

<summary>400 - Bad Request.</summary>

***

Message: "1004: The device's hostname was not informed"

Possible cause: the required parameter `hostname` of the device wasn’t informed.\


Solution: provide a value for the `hostname` parameter of the device and resend the request.

***

Message: "1005: The device's IP was not informed"

Possible cause: the required parameter `ip` of the device wasn’t informed.\


Solution: provide a value for the `ip` parameter of the device and resend the request.

***

Message: "1013: The public key was not informed"

Possible cause: the required parameter `public_key` wasn’t informed.\


Solution: provide a value for the `public_key` parameter and resend the request.

***

Message: "1014: The private key was not informed"

Possible cause: the required parameter `private_key` wasn’t informed.\


Solution: provide a value for the `private_key` parameter and resend the request.

***

Message: "1039: Without PAM Configuration Access permission"\
\
Possible cause: your authorization doesn’t have permission to create a credential.

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
