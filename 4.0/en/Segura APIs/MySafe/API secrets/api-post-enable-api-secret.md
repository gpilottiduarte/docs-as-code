# POST | Enable API secret

Enable an API secret in **MySafe**.

## Prerequisites

* Permission to edit the API secret.
* A disabled API secret in **MySafe**.

## Request

`POST` `/api/mysafe/password/active/[identifier]`

## Request parameters

Send the parameter below in the **path** of the URL.

`identifier` - int - required - API secret unique identification code.Note: this value is automatically assigned by Segura in [POST | Create API secret](../../../../../v4/docs/api-post-create-api-secret/) and is obtained in the response to the [GET | List all API secrets](../../../../../v4/docs/api-get-list-all-api-secrets/).

### Example request

`POST` `{{url}}/api/mysafe/secretapi/active/5`

## Response

```json
HTTP/1.1 200 OK
```

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Api secret activated successfully",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Api secret activated successfully",
        "erro": false,
        "cod_erro": 0
    }
}
```

:::(Info) (Info)\
If the API secret is already active, the call will return a `200` response code with the message `Api secret has already been activated`.\
:::

## Errors

<details>

<summary>400 - Bad Request.</summary>

***

Message: "1005: Api secret not found"

Possible cause: Api secret wasn't found\


Solution: check the value for the `identifier` and resend the request.

***

Message: "1006: User does not have access"

Possible cause: user doesn't have access to the API secret.\


***

</details>

<details>

<summary>500 - Internal Server Error.</summary>

***

Message: "Unexpected error."\


Possible cause: the error is on the Segura server.\


Solution: contact the support team for more information.

***

</details>

<details>

<summary>No route matched with those values.</summary>

***

Message: "No route matched with those values."

Possible causes: failure in your application authentication with the Segura server or incorrect URL.\


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
