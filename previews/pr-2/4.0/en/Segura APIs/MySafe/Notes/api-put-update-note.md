# PUT | Update note

Update a note in **MySafe**.

## Requirements
* Permission to edit the note in **MySafe**.

## Request

 <code><span style="color:blue"> PUT</code></span> `api/mysafe/note/update[identifier]`



## Request parameters
Send the parameter below in the <b>path</b> of the URL.


<summary><code>identifier</code> - <b>int</b> - <span style="color:red">required</span> - Unique identification of the note.</summary>

<summary><b>Nota</b>: this value is automatically assigned by Segura in <a href = "/v4/docs/pt/api-post-create-note">POST | Create note</a> and is obtained in the response to the <a href = "/v4/docs/api-get-list-all-notes">GET | List all notes</a>.

<br>
    
Send the parameters you want to update in the request <b>body</b>.

* <summary><code>name</code> - <b>string</b> - Name assigned to the note.</summary>

<br>

* <summary><code>note</code> - <b>string</b>  - The content of the note, limited to 900 characters. </summary>
    
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

<code><span style="color:blue"> PUT</code></span> `{{url}}api/mysafe/note/update/2`

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

## Response

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

## Errors

<details>
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>


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