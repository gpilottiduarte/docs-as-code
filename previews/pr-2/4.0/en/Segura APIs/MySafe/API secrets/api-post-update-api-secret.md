# POST | Update API secret

Update an API secret in **MySafe**.

## Requirements

* Permission to edit the API secret.

## Request

 <code><span style="color:blue"> PUT</code></span> `api/mysafe/secretapi/update/[identifier]`


## Request parameters
Send the parameter below in the **path** of the URL.

<summary><code>identifier</code> - <b>int</b> - <span style="color:red">required</span> - API secret unique identification code.</summary>
<b>Note</b>: this value is automatically assigned by Segura in <a href = "/v4/docs/api-post-create-api-secret">POST | Create API secret</a> and is obtained in the response to the <a href =  "/v4/docs/api-get-list-all-api-secrets">GET | List all API secrets</a>.</summary>

<br>
Send the parameters you want to update in the request <b>body</b>.


* <summary><code>name</code> - <b>string</b> -  Name assigned to the API secret.</summary>


<br>
* <summary><code>url</code> - <b>string</b>  URL of the website where the API secret will be used.</summary>


<br>
* <summary><code>client_id</code> - <b>string</b> - ID of the client application.</summary>


<br>
* <summary><code>client_secret</code> - <b>string</b>  - The secret used to the authenticate the application.</summary>


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

<summary>&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: if left empty, users will have view-only permission.</summary>

<br>    
:::(Warning) (Attention)
Users with <code>can_edit</code> = <code>true</code> permission can disable the API secret.
:::

<br>
* <summary><code>groups_allowed</code> - <b>array of objects</b> - Data of the groups with API secret access.</summary>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>name</code> - <b>string</b> - Name of the group with API secret access permission.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>can_edit</code> - <b>boolean</b> - Editing permission.</summary>
<summary>&nbsp;&emsp;&emsp;&nbsp;<b>Note</b>: if left empty, group members will have view-only permission.</summary>
    
 <br>
:::(Warning) (Attention)
Group members with <code>can_edit</code> = <code>true</code> permission can disable the API secret.
:::

 ### Example request
 
 <code><span style="color:blue"> PUT</code></span> `{{url}}api/mysafe/secretapi/update/43`

```json 
{
    "name": "GCP1",
    "url": "https://gcp1.com",
    "client_id": "hb455f7g8fg9dfg8yt845bxxku",
    "client_secret": "hy746**********t4tr",
    "identifier_code": "gcp7852",
    "tags": "Cloud1",
    "notes": "Access details for this API secret",
     "users_allowed": [
        {
            "username" : "alices",
            "can_edit" : true
        }
    ],
    "groups_allowed": []
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
 
 ## Errors
 
 <details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
    
<b>Mensagem: "1005: Api secret not found"</b>
<p><b>Possible cause</b>: the <code>identifier</code> parameter provided hasn't returned an API secret.<br></p>
<b>Solution</b>: provide a new value for the <code>identifier</code> and resend the request.

* * *
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
<p><b>Possíveis causas</b>: failure in your application authentication with the Segura server.<br>
        
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