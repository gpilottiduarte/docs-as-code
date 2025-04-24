# GET | List all credentials

Access information of the credentials associated with your authorization in **PAM Core**.

## Prerequisites

* Authorization with **access** permission to **PAM Core** granted by the administator in **A2A**.\
  More information in [How to manage authorizations in A2A](../../../../../v4/docs/how-to-manage-authorizations-in-a2a/).

## Request

`GET` `api/pam/credential`

:::(Info) (Info)\
SSH keys inserted as credentials will also be listed in this response. However, to list a specific SSH key, send a `GET` request to the endpoint `api/pam/key[id]`. For more information, refer to the document [GET | List SSH key by \[id\]](../../../../../v4/docs/api-get-list-an-ssh-key/).\
:::

### Example request

`GET` `{{url}}/api/pam/credential`

## Response

```json
HTTP/1.1 200 OK
```

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "2 credentials found",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "2 credentials found",
        "erro": false,
        "cod_erro": 0
    },
    "credentials": [
        {
            "id": "2",
            "identifier": "018f3fe6-10e2-724d-9229-a6e9749fa88e",
            "username": "testefelipeqasenhasegura@gmail.com",
            "expiration": "2024-05-16T17:31:31-03:00",
            "change": "2024-05-03 16:19:53",
            "view": "2024-05-24 16:26:09",
            "hostname": "gmail.com",
            "management_ip": "mail.google.com",
            "type": "Local User",
            "type_code": "1",
            "device_model": "Gmail",
            "device_type": "Web Application",
            "device_vendor": "Google",
            "automatic_change": false,
            "connectivity": "HTTPS",
            "connectivity_code": "10"
        },
        {
            "id": "39",
            "identifier": "018fcedb-fbd5-70ff-9864-b81fcd00e410",
            "username": "dleite",
            "expiration": null,
            "change": "2024-05-31 11:03:13",
            "view": null,
            "hostname": "w2016",
            "management_ip": "10.66.33.15",
            "type": "SSH Key",
            "type_code": "1",
            "device_model": "Windows Server 2016",
            "device_type": "Server",
            "device_vendor": "Microsoft",
            "automatic_change": false,
            "connectivity": "RDP",
            "connectivity_code": "13"
        }
    ]
}

```

## Response body fields

* `credentials` - array of objects - Data of listed credentials.

&#x20;   → `id` - int - Unique identification code of the credential.   Note: this value is assigned by Segura in [POST | Create credential](../../../../../v4/docs/api-post-create-credential/).\
&#x20;   →`identifier` - string - Unique string defined by the user or by Segura for identifying the credential.   Note: this value can be updated through the `POST` `api/pam/credential` endpoint.\
&#x20;   →`username` - string - Username assigned to the credential.    New credential default value: `usr`\


```
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>expiration</code> - <b>string</b> - Expiration date and time of the credential based on ISO 8601.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Example</b>: <code>2024-05-16T17:31:31-03:00</code>
```

\


```
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>change </code> - <b>string</b> - Date and time of the last modification made to the credential based on ISO 8601.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Example</b>: <code>2024-05-03 16:19:53</code>
```

\


```
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>view </code> - <b>string</b> - Date and time of the last view of the credential based on ISO 8601.</summary>
```

&#x20;   Example: `2024-05-24 16:26:09`

\
&#x20;   →`hostname` - string - Hostname of the device associated with the credential.\
&#x20;   →`management_ip` - string - IP address used to manage the device or system associated with the credential.\
&#x20;   →`type` - string - Credential type.\
&#x20;   →`type_code` - string - Code for credential type.\
&#x20;   →`device_model` - string - Model of the device associated with the credential.\
&#x20;   →`device_type` - string - Type of device associated with the credential.\
&#x20;   →`device_vendor` - string - Manufacturer of the device associated with the credential.    Example: `Microsoft`\
&#x20;   →`automatic_change` - boolean - Indicates if the credential is automatically changed.\
&#x20;   →`connectivity` - string - Type of credential connectivity.\
&#x20;   →`connectivity_code` - string - Code for the type of connectivity.

:::(Info) (Info)\
Access the document [POST | Create credential](../../../../../v4/docs/api-post-create-credential/) for descriptions of other credential parameters such as Execution settings, Session settings, Additional settings, and JIT settings.\
:::

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
