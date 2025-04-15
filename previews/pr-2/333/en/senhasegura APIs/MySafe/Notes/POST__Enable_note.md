# POST | Enable note

Enable a note in **MySafe**.

## Requirements
* Permission to edit the note.
* Inactive note in **MySafe**.

## Request

 <code><span style="color:orange"> POST</code></span> `/api/mysafe/note/active[identifier]`

### Request parameters

Send the parameter below in the <b>path</b> of the URL.

<summary><code>identifier</code> - <b>int</b> - <span style="color:red">required</span> - Note unique identification code.</summary>
<b>Note</b>: this value is automatically assigned by senhasegura in <a href="/v3-33/docs/api-post-create-note">POST | Create note</a> and is obtained in the response to the <a href="/v3-33/docs/pt/api-get-list-all-notes">GET |List all notes</a> request.

 ### Example request

<code><span style="color:orange"> POST</code></span> `/api/mysafe/note/active/2`

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


:::(Info) (Info)
If the note is already active, the call will return a `200` response code with the message `Note has already been activated`.
:::



 ## Errors
 
<details>
<summary><b><span style="color:red">400</span> - Bad request</b>.</summary>

***
    
<b>Message: "1006 User does not have access"</b><br>

<p><b>Possible cause</b>: user doesn't have access to this note.<br>
    
 ***    
<b>Message: "1010: Unexpected identifier type"</b><br>

<p><b>Possible cause</b>: URL not recognized.<br>
 <b>Solution</b>: check the URL and resend the request .</p>
          
    
 ***
</details>
<details>
<summary><b><span style="color:red">500</span> - Internal Server Error</b>.</summary>

***
    
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
     
     