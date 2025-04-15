# GET | List all notes

Access information of notes stored in **MySafe**.


## Request


 <code><span style="color:orange"> GET</code></span> `api/mysafe/note`


## Query parameters
Send the parameters below in the **query** of the URL. 

* <summary><code>tag</code> - <b>string</b> - Filter notes by tags.</summary>
* <summary><code>name</code> - <b>string</b> -Filters notes by name.</summary>


### Example requests

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/note`  - Gets all notes.

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/note?tag=secret` - Gets the note(s) registered with the `tag` = `secret`.

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/note?name=secret note` - Gets the note(s) registered with the `name` = `secret note`.
  
  
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

    
<summary>&#8226; <code>notes_on_list</code> - <b>array of objects</b> - Data of the stored notes.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>identifier</code> - <b>int</b> - Note unique identification code.</summary>
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>name</code> - <b>string</b> - Note name.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>tags</code> - <b>string</b> - Keywords associated with the note.</summary>

<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>can_view</code> - <b>string</b> - Permission to view the note.</summary>
 
<br>   
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>can_write</code> - <b>string</b> - Permission to edit the note.</summary>
 
<br>   


 ## Errors
 
    
<details>
<summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>

***
<b>Message: "Unexpected error."</b><br>
<p><b>Possible cause</b>: the error is on the senhasegura server.<br>
<b>Solution</b>: contact the support team for more information.</p>

***
</details>

<details>
<summary><b>No route matched with those values.</b></summary>

***
<b>Message: "No route matched with those values."</b>
<p><b>Possible causes</b>: failure in your application's authentication with the senhasegura server or incorrect URL.<br>
<b>Solution</b>: check the authentication parameters such as <code>Access Token URL</code>, <code>Client ID</code>, and <code>Client Secret</code> and request a new access token or check and correct the URL.</p>

***
</details>

<details>
<summary><b>An invalid response was received from the upstream server.</b></summary>

***
<b>Message: "An invalid response was received from the upstream server."</b>
<p><b>Possible cause</b>: the upstream server may be taking too long to respond, leading to a timeout error interpreted as an invalid response by the proxy/gateway server.<br>
<b>Solution</b>: check the connectivity between the request origin and the senhasegura server.</p>

***
</details>

<details>
<summary><b>The upstream server is timing out.</b></summary>

***
<b>Message: "The upstream server is timing out."</b>
<p><b>Possible cause</b>: the request timed out.<br>
<b>Solution</b>: check the connectivity between the request origin and the senhasegura server.</p>

***
</details>
     

