# GET | List all API secrets

Access information of API secrets stored **MySafe**.


## Request

 <code><span style="color:orange"> GET</code></span> `api/mysafe/secretapi`



## Request parameters
Send the parameters below as **query** in the URL.

* <summary><code>tag</code> - <b>string</b> - Filters API secrets by the tag registered.</summary>
* <summary><code>identifier_code</code> - <b>string</b> - Filters API secrets by their identifier.</summary>




  ### Example request
<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/secretapi` - Lists all API secrets.

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/secretapi?tag=cloud` - Lists API secret(s) registered with the `tag`= `cloud`.

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/password?identifier_code=12534` - Lists API secret(s) registered with the `identifier_code`= `12534`.
  
  
  ## Response
 ```json
HTTP/1.1 200 OK
``` 
 
```json
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
    "api_secret_on_list": [
        {
            "identifier": "3",
            "name": "GCP1",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "4",
            "name": "GCP",
            "need_justify": "1",
            "need_approval": "1",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "5",
            "name": "GCP1",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        }
    ]
}
```
### Reponse body fields

<summary>&#8226; <code>api_secret_on_list</code> - <b>array of objects</b> - Data of the stored API secrets.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>identifier</code> - <b>int</b> - API secret unique identification code.</summary>
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>name</code> - <b>string</b> - Name assigned to the API secret.</summary>

<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>can_view</code> - <b>string</b> - Permission to view the API secret.</summary>
 
<br>   
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>can_write</code> - <b>string</b> - Permission to edit the API secret.</summary>

## Errors
 
    
<details>
<summary><b><span style="color:red">500</span> - Internal Server Error</b>.</summary>

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
<p><b>Possible causes</b>: failure in your application authentication with the senhasegura server or incorrect URL.<br>
        
<b>Solution</b>: check the authentication parameters such as <code>Access Token URL</code>, <code>Client ID</code> and  <code>Client Secret</code> and request a new access token or check and correct the URL.

* * *
</details>
     
<details>
<summary><b>An invalid response was received from the upstream server
</b>.</summary>

*** 
   
<b>Message: "An invalid response was received from the a seupstream server</b>
    
<p><b>Possible cause</b>: the upstream server may be taking too long to respond, leading to a timeout error that is interpreted as an invalid response by the proxy/gateway server.<br>
        
<b>Solution</b>: check the connectivity between the source of the request and the senhasegura server.
***
</details>
     
   

<details>
<summary><b>The upstream server is timing out</b>.</summary>

*** 
    
<b>Message: "The upstream server is timing out"</b>
    
<p><b>Possible cause</b>: the request time has expired.
        
<b>Solution</b>: check the connectivity between the source of the request and the senhasegura server.</p>
* * *
</details>

     