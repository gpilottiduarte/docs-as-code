# GET | List a note by \[identifier]

Access a note information in **MySafe**.

## Request

`GET` `api/mysafe/note/[identifier]`

## Request parameters

Send the parameter below in the path of the URL.

`identifier` - int - required - Note unique identification code.Note: this value is automatically assigned by Segura in [POST | Create note](../../../../../v4/docs/api-post-create-note/) and is obtained in the response to the [GET | List all notes](../../../../../v4/docs/pt/api-get-list-all-notes/) request.

### Example request

`GET` `{{url}}api/mysafe/note/2`

## Response

```
HTTP/1.1 200 OK 
```

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Success",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Success",
        "erro": false,
        "cod_erro": 0
    },
    "note_entity": {
        "identifier": "2",
        "name": "Secret note",
        "note": "My top secret note",
        "tags": "secret",
        "users_allowed": [],
        "groups_allowed": []
    }
}
```

### Response body fields

• `notes_entity` - object - Data of the stored note.\
&#x20;   → `identifier` - int - Note unique identification code.\
&#x20;   → `name` - string - Note name.\
&#x20;   → `tags` - string - Keywords associated with the note.\
&#x20;   → `users_allowed` - array of objects - List of users' names and permissions to view and/or edit the note.\
&#x20;   → `groups_allowed` - array of objects - List of groups' names and permissions to view and/or edit the note.\


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
