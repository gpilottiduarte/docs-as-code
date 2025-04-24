# GET | List an SSH key by \[id]

Access information of an SSH key registered in **PAM Core**.

## Prerequisites

* Authorization with **access** permission to **PAM Core** granted by the administator in **A2A**.\
  More information in [How to manage authorizations in A2A](../../../../../v4/docs/how-to-manage-authorizations-in-a2a/)

## Request

`GET` `/api/pam/key/[id]`

## Request parameters

Send the parameter below in the path of the URL.

*   `id` - int - required - Unique identification code of the SSH key.

    Note: this value is automatically assigned by Segura in [POST | Create SSH key](../../../../../v4/docs/api-post-create-ssh-key/) and is obtained in the response to the [GET | List all credentials](../../../../../v4/docs/api-get-list-all-credentials/) request that lists all credentials accessible to your authorization.

    #### Example request

`GET` `{{url}}/api/pam/key/39`

## Response

```json
HTTP/1.1 200 OK 
```

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Key 39",
        "error": false,
        "error_code": 0,
        "detail": "",
        "Message": "Key 39",
        "erro": false,
        "cod_erro": 0
    },
    "tenant": "Segura",
    "key": {
        "id": "39",
        "username": "dleite",
        "key_name": "test2",
        "hostname": "w2016",
        "ip": "10.66.33.15",
        "private_key": "-----BEGIN OPENSSH PRIVATE KEY-----\r\cTA9Vb5aA0kXaK2HEjGUWgeCBG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\r\nQyNTUxOQAAACCLABE9/nb3BlbnNzaC1rZXktdjEAAAAAxtPOCkR2sGccAAAAKi5DXJnuQ1y\r\nZwAAAAtzc2gtZWQyNTUxOQAAACCLABE9/cTA9VTGVpdGVGZXJyZWlyYUBIUjFTUkb5aA0kXaK2HEjGUWgeCxtPOCkR2sGccA\r\nDgaNiGsvbkkkXhepU2NQi3iZ4sAET39xMD1VvloDSRdorYc\r\nSMZRaB4LG084KRHawZxwAAAAI0F6dXJlQUQrRGVib3JhAAAECc20zsB7FuSJQAqhLxe\r\ngzAQI=\r\n-----END OPENSSH PRIVATE KEY-----",
        "public_key": "ssh-ed25519 C1lZDI1NTE5AAawZxwAAAAAAC3NzaIIsAET39xdorYcSMZRaB4LG084MD1VvloDSRKRH AzureAD+DeboraLeiteFerreira@HR1SRH3",
        "password": null,
        "devices": [
            {
                "hostname": "API device test",
                "ip": "10.66.33.20"
            }
        ],
        "expiration_time": "2024-06-04T12:20:19"
    }
}
```

### Response body fields

* `key` - object - SSH key data.

\
&#x20;   →`id` - int - Unique identification code of the SSH key.\
&#x20;   →`key_name` - string - Username related to the key in the device.

&#x20;   New SSH key default value: `usr`

\
&#x20;   →`hostname` - string - Name of the main device associated with the SSH key.\
&#x20;   →`ip` - string - IP address of the main device associated with the SSH key.\
&#x20;   →`private_key` - string - Private key necessary for user authentication.    Example: `-----BEGIN OPENSSH PRIVATE KEY-----\rcTA9Vb5aA0kXaK2HEjGUWgeCBG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\rQyNTUxOQAAACCLABE9/nb3BlbnNzaC1rZXktdjEAAAAAxtPOCkR2sGccAAAAKi5DXJnuQ1y\r\nZwAAAAtzc2gtZWQyNTUxOQAAACCLABE9/cTA9VTGVpdGVGZXJyZWlyYUBIUjFTUkb5aA0kXaK2HEjGUWgeCxtPOCkR2sGccA\rDgaNiGsvbkkkXhepU2NQi3iZ4sAET39xMD1VvloDSRdorYc\rSMZRaB4LG084KRHawZxwAAAAI0F6dXJlQUQrRGVib3JhAAAECc20zsB7FuSJQAqhLxe\rgzAQI=\r-----END OPENSSH PRIVATE KEY-----`\
&#x20;   →`public_key` - string - Public key that allows servers to verify the user's identity associated with the corresponding private key.    Example: `ssh-ed25519 C1lZDI1NTE5AAawZxwAAAAAAC3NzaIIsAET39xdorYcSMZRaB4LG084MD1VvloDSRKRH AzureAD+DeboraLeiteFerreira@HR1SRH3`\
&#x20;   →`password` - string - Optional password that provides an extra layer of security to the private key.\
&#x20;   →`tags` - string - Keywords for identifying the SSH key.\
&#x20;   →`devices` - array of objects - Additional devices associated with the SSH key, containing `hostname` and `ip`.\
&#x20;         →`hostname` - string - Hostname of the additional device associated with the SSH key.\
&#x20;         →`ip` - string - IP address of the additional device.\
&#x20;   →`expiration_time` - string - Expiration time of the SSH key based on ISO 8601.    Example: `2024-06-04T12:20:19`\


## Errors

<details>

<summary>400 - Bad Request</summary>

***

Message: "1015: SSH key not found"\


Possible cause: the SSH key wasn’t found.\


Solution: check the `id` sent to search for the SSH key and resend the request.

***

Message: "1016: The item is not a ssh key"\


Possible cause: the value for the `id` parameter doesn’t correspond to an SSH key.

Solution: check the `id` and resend the request.

***

Message: "1017: Key inactive"\


Possible cause: the SSH key is inactive.

Solution: activate the key through the endpoint `PUT` `{{url}}api/pam/key/[id]`.

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
