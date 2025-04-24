# POST | Disable password

Disabled a password in **MySafe**.

## Prerequisites

* Permission to edit the password in **MySafe**.
* An active password in **MySafe**.

## Request

`POST` `api/mysafe/password/inactive/[identifier]`

## Request parameters

Send the parameter below in the **path** of the URL.

* `identifier` - int - required - Unique identification code of the password.Note: this value is automatically assigned by Segura in [POST | Create password](api-post-disable-password.md) and is obtained in the response to the [GET | List all passwords](api-post-disable-password.md).

### Example request

`POST` `{{url}}api/mysafe/password/inactive/10`

## Response

```json
HTTP/1.1 200 OK
```

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Password successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Password successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}
```

:::(Info) (Info)\
If the password is already inactive, the call will return a `200` response code with the message `Password has already been deactivated`.".\
:::

## Errors

<details>

<summary>400 - Bad Request.</summary>

***

Message: "1005: Password not found"

Possible cause: the password wasn't found.\


Solution: check the value for the `identifier` and resend the request.

***

Message: "1006: User does not have access"

Possible cause: user isn't allowed to access the item.\


***

</details>

<details>

<summary>500 - Internal Server Error.</summary>

***

Message: "Unexpected error."\


Possible cause: the error is in the Segura server.\


Solution: contact the support team for more information.

***

</details>

<details>

<summary>No route matched with those values.</summary>

***

Message: "You are not authorized to access this resource."

Possíveis causas: failure in your application authentication with the Segura server.\


Solution: check the authentication parameters such as `Access Token URL`, `Client ID` and `Client Secret` and request a new access token or check and correct the URL.

***

</details>

<details>

<summary>An invalid response was received from the upstream server.</summary>

***

Message: "An invalid response was received from the a seupstream server

Possible cause: the upstream server may be taking too long to respond, leading to a timeout error that is interpreted as an invalid response by the proxy/gateway server.\


Solution: check the connectivity between the source of the request and the Segura server.

***

</details>

<details>

<summary>The upstream server is timing out.</summary>

***

Message: "The upstream server is timing out"

Possible cause: the request time has expired.

Solution: check the connectivity between the source of the request and the Segura server.

***

</details>
