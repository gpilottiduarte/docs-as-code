# POST | Disable API secret

Disable an API secret in **MySafe**.

## Requirements
* Permission to edit the API secret.
* An active API secret in **MySafe**.

## Request

<code><span style="color:orange"> POST</code></span> `/api/mysafe/password/inactive/[identifier]`


## Request parameters
Send the parameter below in the **path** of the URL.

<summary><code>identifier</code> - <b>int</b> - <span style="color:red">required</span> - API secret unique identification code.</summary>
<b>Note</b>: this value is automatically assigned by senhasegura in <a href = "/v3-33/docs/api-post-create-api-secret">POST | Create API secret</a> and is obtained in the response to the <a href =  "/v3-33/docs/api-get-list-all-api-secrets">GET | List all API secrets</a>.</summary>


  ### Example request
<code><span style="color:orange"> POST</code></span> `{{url}}/api/mysafe/secretapi/inactive/5`  
  
  
  ## Response
 ```json
HTTP/1.1 200 OK
``` 
 
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Api secret successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Api secret successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}
```

:::(Info) (Info)
If the API secret is already inactive, the call will return a `200` response code with the message `Api secret has already been deactivated`.
:::
 
## Errors
 
<details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
<b>Message: "1005: Api secret not found"</b>
<p><b>Possible cause</b>: Api secret wasn't found<br></p>
<b>Solution</b>:  check the value for the <code>identifier</code> and resend the request.

    
* * *
    
<b>Message: "1006: User does not have access"</b>
<p><b>Possible cause</b>: user doesn't have access to the API secret.<br></p>

 ***
</details>
    
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

     