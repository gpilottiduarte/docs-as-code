# PUT | Update note

Update a note in **MySafe**.

## Requirements

* Permission to edit the note in **MySafe**.

## Request

`PUT` `api/mysafe/note/update[identifier]`

## Request parameters

Send the parameter below in the path of the URL.

`identifier` - int - required - Unique identification of the note.Nota: this value is automatically assigned by Segura in [POST | Create note](../../../../../v4/docs/pt/api-post-create-note/) and is obtained in the response to the [GET | List all notes](../../../../../v4/docs/api-get-list-all-notes/).\


Send the parameters you want to update in the request body.

* `name` - string - Name assigned to the note.

\


* `note` - string - The content of the note, limited to 900 characters.

:::(Error) (Important!)\
Notes whose content exceeds 900 characters will result in error.\
:::

\


* `tags` - string - Keywords associated with the note.

\


* `users_allowed` - array of objects - Data of users allowed to access the note.

\
&#x20;   →`username` - string - Name of the user allowed to access the note.\
&#x20;   →`can_edit` - boolean - Edit permission.    Note: if left empty, users will have view-only permission.

:::(Warning) (Attention)\
Users with `can_edit` = `true` permission can deactivate the note.\
:::

\


* `groups_allowed` - array of objects - Data of groups allowed to access the note.

\
&#x20;   →`name` - string - Name of the group allowed to access the note.\
&#x20;   →`can_edit` - boolean - Edit permission.    Note: if left empty, group members will have view-only permission.

:::(Warning) (Attention)\
Group members with `can_edit` = `true` permission can deactivate the note.\
:::

#### Example request

`PUT` `{{url}}api/mysafe/note/update/2`

```json
{
   
    "users_allowed": [
        {
            "username" : "pduarte",
            "can_edit" : false
        }
    ]
}

```

### Response

```json
HTTP/1.1 200 OK
```

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Note successfully update",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Note successfully update",
        "erro": false,
        "cod_erro": 0
    },
    "note_entity": {
        "identifier": "2",
        "name": "Secret note",
        "tags": "secret",
        "users_allowed": [
            {
                "username": "pduarte",
                "can_edit": false
            }
        ],
        "groups_allowed": [],
        "shared_error": []
    }
}

```

### Errors

<details>

<summary>400 - Bad Request</summary>

***

Message: "1001: Parameter note limited to 900 characters"

Possible cause: the content sent in `note` exceeded the limit of 900 characters.\


Solution: reduce the content of the note and resend the request.

***

</details>

<details>

<summary>500 - Internal Server Error</summary>

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
