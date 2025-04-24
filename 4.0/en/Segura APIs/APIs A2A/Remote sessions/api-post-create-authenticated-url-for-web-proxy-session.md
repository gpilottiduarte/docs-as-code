# POST | Create an authenticated URL for a web proxy session

Create an authenticated URL to initiate a web proxy session in **PAM Core**.

## Prerequisites

* Authorization with **access** and **read and write** permission to **Web Proxy Session** granted by the administrator in **A2A**.\
  More information in [How to manage authorizations in A2A](../../../../../v4/docs/how-to-manage-authorizations-in-a2a/)
* Credential created in **PAM Core**.\
  More information in [POST | Create credential](../../../../../v4/docs/api-post-create-credential/).

## Request

`POST` `api/pam/remote/session`

## Request parameters

Send the parameters below in the request body.

`user` - string - required - Username used to authenticate.

Note: must be a Segura registered user.

\
`credential` - string - required - Username of the credenial used in this web proxy session.\
`device` - string - required - Hostname or IP address of the target device\
.\
`protocol` - string - required - Network protocol (SSH, RDP, HTTPS, among others.).\
`remotedevice` - string - Device ID, IP address or hostname for the web proxy session.Note: required only if the session uses domain credentials.\
`remoteAddr` - string - IP address of the user.Note: this IP address will be used throughout the session.\
`port` - int - Port used during the session.Note: by default, the session uses the chosen device port, unless specified otherwise.\
`remoteapp` - int - RemoteApp ID.Note: only for RemoteApp sessions.\
`screensize` - string - Screen resolution.

Example: `1900x1200`

### Example request

`POST` `{{url}}/api/pam/remote/session`

```json
{
            "user": "dleite",
            "credential":"usrsudonopass",
            "device": "45.163.147.135",
            "protocol": "ssh"
}
```

## Response

```json
 {
   "code": 200,
   "response": {
       "status": 200,
       "message": "Session created successfully",
       "error": false,
       "error_code": 0,
       "detail": "",
       "Message": "Session created successfully",
       "erro": false,
       "cod_erro": 0
   },
   "tenant": "Segura",
   "session": {
       "session_url": "https://10.66.33.120/modulos/auth?_sr=cmJzOi8vTmJQOG1GckRWeHFFY1FkNi8wRUF5bHoweWw3cUdyUk5JbE1oaXZ3TytLak5sUGsydUZ2YnRQaUdhU3YwaUl0TVRILzZHWWtPWjdZdXNKeE01NHFsaVlFdkRqMGZtOG5vbXNDc0d5bUNDdUt2YWFSclJjTG1scUIxSnBUTXdq",
       "token": "6a3afbb1************b32262"
   }
}
```

### Response body fields

`session` - object - Data of the created session.\
&#x20;   →`session_url` - string - URL to initiate the authenticated web proxy session.\
&#x20;   →`token` - string - Authentication token associated with the web proxy session.\


:::(Warning) (Attention)\
The `token` value is sensitive and must remain confidential.\
:::

## Errors

<details>

<summary>400 - Bad Request</summary>

***

Message: "Username not specified"

Possible cause: the required parameter `username` of the session wasn't informed.\


Solution: provide a value for the `username` parameter and resend the request.

***

Message: "Credential not specified"

Possible cause: the required parameter `credential` for session authentication wasn't informed.\


Solution: provide a value for the `credential` parameter and resend the request.

***

Message: "Credential device not specified"

Possible cause: the required parameter `device` of the session wasn't informed.\


Solution: provide a value for the `device` parameter and resend the request.

***

Message: "Invalid protocol"

Possible cause: the required parameter `protocol` of the session wasn't informed.\


Solution: informe um valor para o parâmetro `protocol` e envie

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


Solution: ask the administrator to check your permission to access the Web Proxy Session resources in A2A.

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
