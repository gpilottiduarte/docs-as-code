# POST | Enable note

Enable a note in **MySafe**.

## Prerequisites

* Permission to edit the note.
* Inactive note in **MySafe**.

## Request

`POST` `/api/mysafe/note/active[identifier]`

### Request parameters

Send the parameter below in the path of the URL.

`identifier` - int - required - Note unique identification code.Note: this value is automatically assigned by Segura in [POST | Create note](../../../../../v4/docs/api-post-create-note/) and is obtained in the response to the [GET |List all notes](../../../../../v4/docs/pt/api-get-list-all-notes/) request.

### Example request

`POST` `/api/mysafe/note/active/2`

### Response

`HTTP/1.1 200 OK`

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Note successfully activated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Note successfully activated",
        "erro": false,
        "cod_erro": 0
    }
}
```

:::(Info) (Info)\
If the note is already active, the call will return a `200` response code with the message `Note has already been activated`.\
:::

## Errors

<details>

<summary>400 - Bad request.</summary>

***

Message: "1006 User does not have access"\


Possible cause: user doesn't have access to this note.\


***

Message: "1010: Unexpected identifier type"\


Possible cause: URL not recognized.\
Solution: check the URL and resend the request .

***

</details>

<details>

<summary>500 - Internal Server Error.</summary>

***

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

Possible causes: failure in your application's authentication with the Segura server or incorrect URL.\
Solution: check the authentication parameters such as `Access Token URL`, `Client ID`, and `Client Secret` and request a new access token or check and correct the URL.

***

</details>

<details>

<summary>An invalid response was received from the upstream server.</summary>

***

Message: "An invalid response was received from the upstream server."

Possible cause: the upstream server may be taking too long to respond, leading to a timeout error interpreted as an invalid response by the proxy/gateway server.\
Solution: check the connectivity between the request origin and the Segura server.

***

</details>

<details>

<summary>The upstream server is timing out.</summary>

***

Message: "The upstream server is timing out."

Possible cause: the request timed out.\
Solution: check the connectivity between the request origin and the Segura server.

***

</details>
