# GET | List an API secret by [identifier]

Access information of an API secret stored **MySafe**.

## Prerequisites
* API secret access in **MySafe**.
 
## Request

 <code><span style="color:orange"> GET</code></span> `api/mysafe/secretapi/[identifier]`



## Request parameters
Send the parameter below in the **path** of the URL.

<summary><code>identifier</code> - <b>int</b> - <span style="color:red">required</span> - API secret unique identification code.</summary>
<b>Note</b>: this value is automatically assigned by Segura in <a href = "/v4/docs/api-post-create-api-secret">POST | Create API secret</a> and is obtained in the response to the <a href =  "/v4/docs/api-get-list-all-api-secrets">GET | List all API secrets</a>.</summary>




  ### Example request
<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/secretapi/3`.
  
  ## Response
 ```json
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
        "Message": "Success",
        "erro": false,
        "cod_erro": 0
    },
    "api_secret_entity": {
        "identifier": "3",
        "name": "GCP1",
        "url": "https://gcp1.com",
        "client_secret": "hy7464g5v8ghy4d858jk7fds57t4tr",
        "client_id": "hb455f7g8fg9dfg8yt845bxxku",
        "identifier_code": "12534",
        "method": "get",
        "tags": "Cloud1",
        "notes": "Access details for this API secret",
        "users_allowed": [
            {
                "name": "alices",
                "can_edit": true
            }
        ],
        "groups_allowed": []
    }
}
```
### Reponse body fields

<summary>&#8226; <code>api_secret_entity</code> - <b>object</b> - Data of the stored API secret.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>identifier</code> - <b>int</b> - API secret unique identification code.</summary>
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>name</code> - <b>string</b> - Name assigned to the API secret.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>url</code> - <b>string</b> - <span style="color:red">required</span> - URL of the website where the API secret will be used.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>client_secret</code> - <b>string</b>  - The secret used to the authenticate the application.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>client_id</code> - <b>string</b> - <span style="color:red">required</span> - ID of the client application.</summary> 


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>dentifier_code</code> - <b>string</b> - Unique string defined by the user to identify the API secret.</summary>

 <br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>method</code> - <b>string</b> - The HTTP method to be used in the API call. </summary>

 <br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>notes</code> - <b>string</b> - Observations about the API secret.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>tags</code> - <b>string</b> - Keywords associated with the API secret.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>users_allowed</code> - <b>array of objects</b> - Data of the users with access to the API secret.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>groups_allowed</code> - <b>array of objects</b> - Data of the groups with API secret access.</summary>


    

## Errors
 
<details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
<b>Message: "1010: Unexpected identifier type"</b>
<p><b>Possible cause</b>: the <code>identifier</code> provided wasn't recognized as valid.<br></p>
<b>Solution</b>: check the value of the <code>identifier</code> and resend the request.
  
* * *
<b>Message: "1005: Api secret not found"</b>
<p><b>Possible cause</b>: the API secret wasn't found.<br></p>
<b>Solution</b>: check the value of the <code>identifier</code> and resend the request.

    
* * *
    
<b>Message: "1006: User does not have access"</b>
<p><b>Possible cause</b>: user doesn't have access to the API secret.<br></p>

 ***
<b>Message: "1009: Inactive Api secret"</b>
<p><b>Possible cause</b>: inactive API secret.<br></p>
 <b>Solution</b>: enable the API secret through the path <code><span style="color:orange"> POST</code></span> <code>api/mysafe/password/active[identifier]</code>.

 ***
</details>    
<details>
<summary><b><span style="color:red">500</span> - Internal Server Error</b>.</summary>

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
<p><b>Possible causes</b>: failure in your application authentication with the Segura server or incorrect URL.<br>
        
<b>Solution</b>: check the authentication parameters such as <code>Access Token URL</code>, <code>Client ID</code> and  <code>Client Secret</code> and request a new access token or check and correct the URL.

* * *
</details>
     
<details>
<summary><b>An invalid response was received from the upstream server
</b>.</summary>

*** 
   
<b>Message: "An invalid response was received from the upstream server</b>
    
<p><b>Possible cause</b>: the upstream server may be taking too long to respond, leading to a timeout error that is interpreted as an invalid response by the proxy/gateway server.<br>
        
<b>Solution</b>: check the connectivity between the source of the request and the Segura server.
***
</details>
     
   

<details>
<summary><b>The upstream server is timing out</b>.</summary>

*** 
    
<b>Message: "The upstream server is timing out"</b>
    
<p><b>Possible cause</b>: the request time has expired.
        
<b>Solution</b>: check the connectivity between the source of the request and the Segura server.</p>
* * *
</details>

     