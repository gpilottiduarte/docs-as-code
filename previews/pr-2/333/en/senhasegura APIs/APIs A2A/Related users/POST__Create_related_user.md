# POST | Create related user

Create a related user in **senhasegura**.

## Requirements
* Authorization with **access** permission to the **Users** resource granted by the administrator in **A2A**. 
Access the document on [How to create an authorization for an application](/v3-33/docs/a2a-how-to-create-an-authorization-for-an-application) for more information.

### Request

<code><span style="color:orange">POST</code></span> `/api/user/related`

### Request parameters
Send the parameters below in the <b>body</b> of the request.

* <summary><code>username</code> - <b>string</b> - <span style="color:red">required</span> - User identification name previously registered in senhasegura.</summary><br>
* <summary><code>name</code> - <b>string</b> - <span style="color:red">required</span> - Name assigned to the related user being created.</summary><br>

### Example request
<code><span style="color:orange">POST</code></span> `{{url}}/api/user/related`
```json 
{ 
    "username": "dleite",
    "name": "deboraleite"
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
        "message": "Related user successfully registered!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "Message": "Related user successfully registered!",
        "erro": false,
        "cod_erro": 0
    },
    "relatedUsers": {
        "id": "3",
        "name": "deboraleite",
        "username": "dleite"
    }
}
```

## Errors

<details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
    
<b>Message: "1001: Parameter 'username' was not informed!"</b>
<p><b>Possible cause</b>: the required parameter <code>username</code> wasn’t informed.<br></p>
<b>Solution</b>: provide the <code>username</code> and resend the request.
  
* * *
    
<b>Message: "1001: Parameter 'name' was not informed!"</b>
<p><b>Possible cause</b>: the required parameter <code>name</code> wasn’t informed.<br></p>
<b>Solution</b>: provide the <code>name</code> and resend the request.
  
* * *   

<b>Message: "1005: User does not exist"</b>
<p><b>Possible cause</b>: the <code>username</code> provided hasn’t returned any user.<br></p>
<b>Solution</b>: provide a valid <code>username</code> and resend the request.
  
* * *

</details>

<details>
<summary><b><span style="color:red">404</span> - Not Found</b>.</summary>

***
<b>Message: "Resource sub not found"</b><br>

<p><b>Possible cause</b>: the URL or requested resource isn’t correct.<br></p>
<b>Solution</b>: check the URL and make sure all the parameters are correct.</p>

* * *
    
</details>

<details>
<summary><b><span style="color:red">500</span> - Internal Server Error</b>.</summary>

***
    
<b>Message: "Unexpected error."</b><br>

<p><b>Possible cause</b>: the error is in the senhasegura server.<br></p>
<b>Solution</b>: contact the support team for more information.</p>
    
***
<b>Message: "You are not authorized to access this resource."</b>
<p><b>Possible cause</b>: you don’t have the authorization to access this resource.<br></p>
<b>Solution</b>: ask the administration to check your permission to access the <b>Users</b> resources in <b>A2A</b>.</p>

* * *
</details>

<details>
<summary><b>Client authentication failed</b>.</summary>

*** 
   
<b>Message: "Client authentication failed."</b>
<p><b>Possible cause</b>: failure in your application authentication with the senhasegura server.<br></p>
<b>Solution</b>: check the authentication parameters such as <code>Access Token URL</code>, <code>Client ID</code> and <code>Client secret</code> and request a new access token.</p>
</details>
     
<details>
<summary><b>Invalid signature</b>.</summary>

*** 
    
<b>Message: "Invalid signature"</b>
<p><b>Possible cause</b>: failure in recognizing the URL of the client application.<br></p>
<b>Solution</b>: check the URL of the client application and resend the request.</p>

* * *
</details>


<details>
<summary><b>No route matched with those values</b>.</summary>

***   
    
<b>Message: "No route matched with those values."</b>
<p><b>Possible cause</b>: the authorization header is missing in the API request.<br></p>
<b>Solution</b>: request a new access token.</p>

* * *
</details>

<details>
<summary><b>Request timed out</b>.</summary>

***
    
<b>Message: "Request timed out."</b>
<p><b>Possible cause</b>: the request time has expired.<br></p>
<b>Solution</b>: check the connectivity between the source of the request and the senhasegura server.</p>
</details>