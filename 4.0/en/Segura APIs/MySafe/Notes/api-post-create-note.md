# POST | Create note

Create a note in **MySafe**.

## Request

`POST` `api/mysafe/note`

:::(Info) (Info)\
When a note is added to **MySafe**, it's automatically associated with its creator, identifying them as the owner.\
:::

## Request parameters

Send the parameters below in the request body.

* `name` - string - required - Name assigned to the note.

\


* `note` - string - required - The content of the note, limited to 900 characters.

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

### Example request

`POST` `{{url}}api/mysafe/note`

```json
{
    "name": "Staff meeting",
    "note": "Staff meetings are essential for maintaining clear communication and ensuring everyone is on the same page. These gatherings provide a platform to discuss ongoing projects, address any issues, and brainstorm new ideas. By fostering a collaborative environment, staff meetings encourage team members to share their insights and contribute to the organization's overall goals. Regularly scheduled meetings also help in building team morale and strengthening workplace relationships.",
    "tags": "meeting",
    "groups_allowed": [
        {
            "name": "TC team"
        }
    ]
}
```

## Response

```json
HTTP/1.1 201 CREATED 
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Note successfully registered",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Note successfully registered",
        "erro": false,
        "cod_erro": 0
    },
    "note_entity": {
        "identifier": "8",
        "name": "Staff meeting",
        "tags": "meeting",
        "users_allowed": [],
        "groups_allowed": [
            {
                "name": "TC team",
                "can_edit": false
            }
        ],
        "shared_error": []
    }
}
```

## Errors

<details>

<summary>400 - Bad Request</summary>

***

Message: "1001: Parameter 'name' was not informed!"

Possible cause: the required parameter `name` of the note was not informed.\


Solution: provide the `name` of the note and resend the request.

***

Message: "1001: Parameter 'note' was not informed!"

Possible cause: the required parameter `note` was not informed.\


Solution: provide the `note` and resend the request.

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
