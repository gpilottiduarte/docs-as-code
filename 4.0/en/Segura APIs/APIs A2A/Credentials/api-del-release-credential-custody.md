# DEL | Release credential custody

Release the custody of a credential in **PAM Core**.

***

When a user makes a `GET` `/api/pam/credential[id]` call to view a credential, this is referred to as temporarily granting custody of that credential to the user, also known as _account check-in_.

When access to that credential is revoked, this is described as releasing custody of the credential, also known as _account check-out_.

Access the document [About credential custody](../../../../../v4/docs/pam-about-credential-custody/) for more information on the concept of credential custody.

***

## Prerequisites

* Authorization with access permission to **PAM Core** granted by the administrator in **A2A**.\
  More information in [How to manage authorizations in A2A](../../../../../v4/docs/how-to-manage-authorizations-in-a2a/)
* Custody of a credential requested via API through the endpoint `GET` `/api/pam/credential[id]`.\
  More information in [GET | List a credential](../../../../../v4/docs/api-get-list-a-credential/).

## Request

`DEL` `/api/pam/credential/custody/[id]`

## Request parameters

Send the parameter below in the path of the URL.

*   `id` - int - required - Unique identification code of the credential.

    Note: this value is automatically assigned by Segura in [POST | Create credential](../../../../../v4/docs/api-post-create-credential/) and is obtained in the response to the [`GET` `/api/pam/credential`](../../../../../v4/docs/api-get-list-all-credentials/) which lists all credentials accessible to your authorization.

### Example request

`DEL` `{{url}}/api/pam/credential/94`

## Response

```json
HTTP/1.1 200 OK
```

```json
json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential custody 94 released",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential custody 94 released",
        "erro": false,
        "cod_erro": 0
    }
}
```

## Errors

<details>

<summary>400 - Bad Request</summary>

***

Message: "1007: Credential not found"\


Possible cause: the credential wasn’t found.\


Solution: check the value for the `id` and resend the request.

***

Message: "1008: Credential inactive"

Possible cause: the credential is inactive.\


Solution: enable the credential through the endpoint `PUT` `/api/pam/credential/[id]` and resend the request.

***

Message: "1009: No access to credential"\


Possible cause: you’re not authorized to access the credential.\


Solution: ask the administrator to check your permission to access the credential.

***

\
Mensagem: "1018: The credential is not in the user custody"

Possible cause: the user doesn't have the custody of the credential.\


Solution: access the credential throught the endpoint endpoint `GET` `/iso/pam/credential[id]` and after the success of this call, resend the request.

***

Message: "1039: Without PAM Configuration Access permission"\
\
Possible cause: your authorization doesn’t have permission to disable a device.

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
