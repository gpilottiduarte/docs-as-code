# DEL | Disable SSH key

Disable an SSH key in **PAM Core**.

## Prerequisites

* Authorization with **access** and **read and write** permission to **PAM Core** granted by the administator in **A2A**.\
  More information in [How to manage authorizations in A2A](../../../../../v4/docs/how-to-manage-authorizations-in-a2a/)
* An enabled SSH key in **PAM Core**.\
  More information in [PUT | Enable SSH key](../../../../../v4/docs/api-put-enable-ssh-key/).

## Request

`DEL` `/api/pam/key/[id]`

## Request parameters

Send the parameter below in the path of the URL.

*   `id` - int - required - Unique identification code of the SSH key.

    Note: this value is automatically assigned by Segura in [POST | Create SSH key](../../../../../v4/docs/api-post-create-ssh-key/) and is obtained in the response to the [`GET` `/api/pam/credential`](../../../../../v4/docs/api-get-list-all-credentials/) which lists all credentials accessible to your authorization.

### Example request

`DEL` `{{url}}/api/pam/key/83`

## Response

```json
HTTP/1.1 200 OK
```

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Key successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Key successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}
```

## Errors

<details>

<summary>400 - Bad Request</summary>

***

Message: "1009: No access to credential"

\
Possible cause: you don't have the authorization to access this credential.

Solution: ask the administrator to check your permission to access this credential.

***

Message: "1015: SSH key not found"

\
Possible cause: the SSH key wasn't found.

Solution: check the value for the `id` and resend the request.

***

Mensagem: "1017: Key inactive"

Possible cause: the SSH key is already inactive.\


***

Message: "1039: Without PAM Configuration Access permission"\
\
Possible cause: your authorization doesn’t have permission to create a credential.

Solution: ask the administrator to check your read and write permission to PAM Core resources in A2A.

***

Message: "1045: Ssh key is already activated"

Possible cause: the SSH key is alreay active.\


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
