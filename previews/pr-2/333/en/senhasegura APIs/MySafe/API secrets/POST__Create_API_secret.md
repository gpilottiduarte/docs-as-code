# POST | Create API secret

Create an API secret in **MySafe**.



## Request

 <code><span style="color:orange"> POST</code></span> `api/mysafe/secretapi`


:::(Info) (Info)
When an API secret is added to **MySafe**, it's automatically associated with its creator, identifying them as the owner.
:::


## Request parameters
Send the parameters below in the request <b>body</b>.


* <summary><code>name</code> - <b>string</b> - <span style="color:red">required</span> -  Name assigned to the API secret.</summary>


<br>
* <summary><code>url</code> - <b>string</b> - <span style="color:red">required</span> - URL of the website where the API secret will be used.</summary>


<br>
* <summary><code>client_id</code> - <b>string</b> - <span style="color:red">required</span> - ID of the client application.</summary> 


<br>
* <summary><code>client_secret</code> - <b>string</b>  - The secret used to authenticate the application.</summary>


<br>
* <summary><code>identifier_code</code> - <b>string</b> - Unique string defined by the user to identify the API secret.</summary>


<br>
* <summary><code>tags</code> - <b>string</b> - Keywords associated with the API secret.</summary>


 <br>
* <summary><code>notes</code> - <b>string</b> - Observations about the API secret.</summary>

 <br>
* <summary><code>method</code> - <b>string</b> - The HTTP method to be used in the API call. </summary>


<br>
* <summary><code>users_allowed</code> - <b>array of objects</b> - Data of the users with access to the API secret.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>username</code> - <b>string</b> - Name of the user with API secret access permission.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>can_edit</code> - <b>boolean</b> - Editing permission. </summary>

<summary>&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: if left empty, users will have only viewing permission.</summary>

:::(Warning) (Attention)
Users with <code>can_edit</code> = <code>true</code> permission can disable the API secret.
:::

<br>
* <summary><code>groups_allowed</code> - <b>array of objects</b> - Data of the groups with API secret access.</summary>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>name</code> - <b>string</b> - Name of the group with API secret access permission.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>can_edit</code> - <b>boolean</b> - Editing permission.</summary>
<summary>&nbsp;&emsp;&emsp;&nbsp;<b>Note</b>: if left empty, group members will have only viewing permission.</summary>

:::(Warning) (Attention)
Group members with <code>can_edit</code> = <code>true</code> permission can disable the API secret.
:::

 ### Example request
 
  <code><span style="color:orange"> POST</code></span> `{{url}}api/mysafe/secretapi`

```json 
{
    "name": "GCP",
    "url": "https://gcp.com",
    "client_id": "gf455f7g8fb5dfg8fd545bffbv",
    "client_secret": "gf5464******g8fds",
    "identifier_code": "hyga125",
    "tags": "Cloud",
    "notes": "Access details",
    "method": "get",
     "users_allowed": [
        {
            "username" : "pduarte",
            "can_edit" : true
        }
    ],
    "groups_allowed": [
        {
            "name" : "Test group"
        }
    ]
}
```
  
  
  
  ## Response

 ```json
HTTP/1.1 201 CREATED 
```
```json 
  {
    "code": 201,
    "response": {
        "status": 201,
        "message": "Api secret successfully registered",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Api secret successfully registered",
        "erro": false,
        "cod_erro": 0
    },
    "api_entity": {
        "identifier": "43",
        "name": "GCP",
        "url": "https://gcp.com",
        "client_secret": "gf5464******g8fds",
        "client_id": "gf455f7g8fb5dfg8fd545bffbv",
        "identifier_code": "hyga125",
        "method": "get",
        "tags": "Cloud",
        "notes": "Access details",
        "users_allowed": [
            {
                "username": "pduarte",
                "can_edit": true
            }
        ],
        "groups_allowed": [
            {
                "name": "Test group",
                "can_edit": false
            }
        ],
        "shared_error": []
    }
}
 ```
 
 ## Erros
 
 <details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
<b>Message: "1001: Parameter 'name' was not informed!"</b>
<p><b>Possible cause</b>: the required parameter <code>name</code> of the API secret wasn't informed.<br></p>
<b>Solution</b>: provide a value for <code>name</code> and resend the request.
  
  
* * *
    
<b>Message: "1001: Parameter 'url' was not informed!"</b>
<p><b>Possible cause</b>: the required parameter <code>url</code> of the API secret wasn't informed.<br></p>
<b>Solution</b>: provide a value for the <code>url</code> and resend the request.
  
* * *

<b>Message: "1001: Parameter 'client_id' was not informed!"</b>
<p><b>Possible cause</b>: the required parameter <code>client_id</code> of the API secret wasn't informed.<br></p>
<b>Solution</b>: provide a value for the <code>client_id</code> and resend the request.

* * *
    

    
<b>Mensagem: "1001: Identifier already found in another API key of this user"</b>
<p><b>Possible cause</b>: the <code>identifier</code> provided is already registered for another API secret.<br></p>
<b>Solution</b>: provide a new value for the <code>identifier</code> and resend the request.

* * *
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
<p><b>Possible cause</b>: failure in your application authentication with the senhasegura server.<br>
        
<b>Solution</b>: check the authentication parameters such as <code>Access Token URL</code>, <code>Client ID</code> and  <code>Client Secret</code> and request a new access token or check and correct the URL. 
* * *
</details>
     
<details>
<summary><b>An invalid response was received from the upstream server
</b>.</summary>

*** 
   
<b>Message: "An invalid response was received from the upstream server</b>
    
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