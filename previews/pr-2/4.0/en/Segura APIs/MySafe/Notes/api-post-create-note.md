# POST | Create note

 Create a note in **MySafe**.

## Request

<code><span style="color:orange"> POST</code></span> `api/mysafe/note`



:::(Info) (Info)
When a note is added to **MySafe**, it's automatically associated with its creator, identifying them as the owner.
:::

## Request parameters
Send the parameters below in the request <b>body</b>.

* <summary><code>name</code> - <b>string</b> - <span style="color:red">required</span> - Name assigned to the note.</summary>

<br>

* <summary><code>note</code> - <b>string</b> - <span style="color:red">required</span> - The content of the note, limited to 900 characters. </summary>

:::(Error) (Important!)
Notes whose content exceeds 900 characters will result in error.
:::

<br>

* <summary><code>tags</code> - <b>string</b> - Keywords associated with the note.</summary>

<br>

* <summary><code>users_allowed</code> - <b>array of objects</b> - Data of users allowed to access the note.</summary>

<br>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>username</code> - <b>string</b> - Name of the user allowed to access the note.</summary>

<br>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>can_edit</code> - <b>boolean</b> - Edit permission. </summary>

<summary>&nbsp;&emsp;&emsp;&nbsp;<b>Note</b>: if left empty, users will have view-only permission.</summary>

:::(Warning) (Attention)
Users with <code>can_edit</code> = <code>true</code> permission can deactivate the note.
:::

<br>

* <summary><code>groups_allowed</code> - <b>array of objects</b> - Data of groups allowed to access the note.</summary>

<br>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>name</code> - <b>string</b> - Name of the group allowed to access the note.</summary>

<br>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>can_edit</code> - <b>boolean</b> - Edit permission. </summary>

<summary>&nbsp;&emsp;&emsp;&nbsp;<b>Note</b>: if left empty, group members will have view-only permission.</summary>

:::(Warning) (Attention)
Group members with <code>can_edit</code> = <code>true</code> permission can deactivate the note.
:::
### Example request

<code><span style="color:orange"> POST</code></span> `{{url}}api/mysafe/note`

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
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>

***
<b>Message: "1001: Parameter 'name' was not informed!"</b>
<p><b>Possible cause</b>: the required parameter <code>name</code> of the note was not informed.<br></p>
<b>Solution</b>: provide the <code>name</code> of the note and resend the request.
  
* * *
    
<b>Message: "1001: Parameter 'note' was not informed!"</b>
<p><b>Possible cause</b>: the required parameter <code>note</code> was not informed.<br></p>
<b>Solution</b>: provide the <code>note</code> and resend the request.
  
* * *
<b>Message: "1001: Parameter note limited to 900 characters"</b>
<p><b>Possible cause</b>: the content sent in <code>note</code> exceeded the limit of 900 characters.<br></p>
<b>Solution</b>: reduce the content of the note and resend the request.

* * *    
</details>

<details>
<summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>

***
<b>Message: "Unexpected error."</b><br>
<p><b>Possible cause</b>: the error is on the Segura server.<br>
<b>Solution</b>: contact the support team for more information.</p>

***
</details>

<details>
<summary><b>No route matched with those values.</b></summary>

***
<b>Message: "No route matched with those values."</b>
<p><b>Possible causes</b>: failure in your application's authentication with the Segura server or incorrect URL.<br>
<b>Solution</b>: check the authentication parameters such as <code>Access Token URL</code>, <code>Client ID</code>, and <code>Client Secret</code> and request a new access token or check and correct the URL.</p>

***
</details>

<details>
<summary><b>An invalid response was received from the upstream server.</b></summary>

***
<b>Message: "An invalid response was received from the upstream server."</b>
<p><b>Possible cause</b>: the upstream server may be taking too long to respond, leading to a timeout error interpreted as an invalid response by the proxy/gateway server.<br>
<b>Solution</b>: check the connectivity between the request origin and the Segura server.</p>

***
</details>

<details>
<summary><b>The upstream server is timing out.</b></summary>

***
<b>Message: "The upstream server is timing out."</b>
<p><b>Possible cause</b>: the request timed out.<br>
<b>Solution</b>: check the connectivity between the request origin and the Segura server.</p>

***
</details>