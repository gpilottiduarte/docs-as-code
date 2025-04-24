# GET | List all notes

Access information of notes stored in **MySafe**.

## Request

`GET` `api/mysafe/note`

## Query parameters

Send the parameters below in the **query** of the URL.

* `tag` - string - Filter notes by tags.
* `name` - string -Filters notes by name.

### Example requests

`GET` `{{url}}api/mysafe/note` - Gets all notes.

`GET` `{{url}}api/mysafe/note?tag=secret` - Gets the note(s) registered with the `tag` = `secret`.

`GET` `{{url}}api/mysafe/note?name=secret note` - Gets the note(s) registered with the `name` = `secret note`.

## Response

```
HTTP/1.1 200 OK
```

```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "",
        "erro": false,
        "cod_erro": 0
    },
    "note_on_list": [
        {
            "identifier": "1",
            "name": "My note",
            "tags": "",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "2",
            "name": "Secret note",
            "tags": "secret",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "6",
            "name": "Staff meeting decisions",
            "tags": "meeting",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "9",
            "name": "TC Meeting",
            "tags": "API, MySafe, TC",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        }
     ]
}
```

### Response body fields

• `notes_on_list` - array of objects - Data of the stored notes.\
&#x20;   → `identifier` - int - Note unique identification code.\
&#x20;   → `name` - string - Note name.\
&#x20;   → `tags` - string - Keywords associated with the note.\
&#x20;   → `can_view` - string - Permission to view the note.\
&#x20;   → `can_write` - string - Permission to edit the note.\


## Errors

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
