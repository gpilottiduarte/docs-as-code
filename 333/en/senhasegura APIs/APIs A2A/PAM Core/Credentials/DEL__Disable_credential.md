# DEL | Disable credential

Disable a credential in **PAM Core**.

## Requirements
* Authorization with **access** and **read and write** permission to **PAM Core** granted by the administrator in **A2A**.
Access the document on [How to create an authorization for an application](/v3-33/docs/a2a-how-to-create-an-authorization-for-an-application) for more information.
* An enabled credential in **PAM Core**. 
Access the document [PUT | Enable credential](/v3-33/docs/api-put-enable-credential) for more information.

## Disable credential by `id` - Request

 <code><span style="color:red"> DEL</code></span> `/api/pam/credential/[id]`

## Request parameters

Send the parameter below in the <b>path</b> of the URL.

* <code>id</code> - <b>int</b> - <span style="color:red">required</span> - Unique identification code of the credential.
    <p><b>Note</b>: this value is automatically assigned by senhasegura in <a href="/v3-33/docs/api-post-create-ssh-key">POST | Create SSH key</a> and is obtained in the response to the <a href="/v3-33/docs/api-get-list-all-credentials"><code><span style="color:green"> GET</code></span> <code>/api/pam/credential</code></a> which lists all credentials accessible to your authorization. 
    
### Example request

<code><span style="color:red"> DEL</code></span> `{{url}}/api/pam/credential/5`

## Response

```json
HTTP/1.1 200 OK
```

 
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}
```

## Disable credential by `username@hostname` - Request

 <code><span style="color:red"> DEL</code></span> `/api/pam/credential/[username@hostname]`

## Request parameters

Send the parameter below in the <b>path</b> of the URL.

* <summary><code>username@hostname</code> - <b><b>int</b></b> - <span style="color:red"> required</span style="color:red"> - <code>username</code> and  <code>hostname</code> associated with the credential separated by an @ symbol. </summary><b>Note</b>: these values are provided by the user in <a href="/v3-33/docs/api-post-create-credential">POST | Create credential</a>  and are obtained in the response to the <a href="/v3-33/docs/api-get-list-all-credentials"> GET | List all credentials</a> request. <p><b>Example</b>: <code>credential_5@destktop-91.com</code></p>
    
### Example request

<code><span style="color:red"> DEL</code></span> `{{url}}/api/pam/credential/credential_5@destktop-91.com`

### Response

```json
HTTP/1.1 200 OK
```

 
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}
```
## Errors

<details>
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>
 
* * *
    
<b>Message: "1007: Credential not found"</b><br>

<p><b>Possible cause</b>: the credential wasn’t found.<br>
        
<b>Solution</b>: check if the values for the parameters used to search for the credential were correct and resend the request.</p>
    
 ***
    
 <p><b>Message: "1008: Credential inactive"</b>
<p><b>Possible cause</b>: the credential is already inactive.<br></p>
    
***
    
<b>Message: "1009: No access to credential"</b><br>

<p><b>Possible cause</b>: you’re not authorized to access the credential.<br>
        
<b>Solution</b>: ask the administrator to check your permission to access the credential.</p>
    
***
    
<b>Message: "1010: The item is not a credential"</b><br>

<p><b>Possible cause</b>: the value for the <code>id</code> parameter doesn’t belong to a credential.<br>
        
<b>Solution</b>: check the <code>id</code> and resend the request.</p>
***
 
<b>Message: "1039: Without PAM Configuration Access permission"</b>  
<br><b>Possible cause</b>: your authorization doesn’t have permission to disable a device.</p>

<b>Solution</b>: ask the administrator to check your <b>read and write</b> permission to <b>PAM Core</b> resources in <b>A2A</b>.


***
 
</details>


<details>
<summary><b><span style="color:red">404</span> - Not Found</b></summary>

***
<b>Message: "Resource sub not found"</b><br>

<p><b>Possible cause</b>: the URL or the requested resource isn’t correct.<br>
        
<b>Solution</b>: check the URL and make sure the parameter is correct.</p>
* * *
</details>


<details>
 
<summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>

***
    
<b>Message: "Unexpected error."</b><br>
 
<p><b>Possible cause</b>: the error is in the senhasegura server.<br>
        
<b>Solution</b>: contact the support team for more information.</p>

***

<b>Message: "You are not authorized to access this resource."</b>

<p><b>Possible cause</b>: you don’t have the authorization to access this resource.<br>
        
<b>Solution</b>: ask the administrator to check your permission to access the <b>PAM Core</b> resources in <b>A2A</b>.</p>

* * *
 </details>   

  

<details>
<summary><b>Client authentication failed</b></summary>

*** 
   
<b>Message: "Client authentication failed."</b>
<p><b>Possible cause</b>: failure in your application authentication with the senhasegura server. <br>
        
<b>Solution</b>: check the authentication parameters such as <code>Access Token URL</code>, <code>Client ID</code> e <code>Client secret</code> and request a new access token.</p>
 
* * *   
</details>
     
  

<details>
<summary><b>Invalid signature</b></summary>

*** 
    
<b>Message: "Invalid signature"</b>
    
<p><b>Possible cause</b>: failure in recognizing the URL of the client application.
        
<b>Solution</b>: check the URL of the client application and resent the request.</p>

* * * 
</details>
     

<details>
    <summary><b>No route matched with those values</b></summary>
    
***   
    
<b>Message: "No route matched with those values."</b>
   <p><b>Possible cause</b>: the authorization header is missing in the API request.<br>
        
  <b>Solution</b>: request a new access token.</p>
   
 * * *
</details>
 

<details>
    <summary><b> Request timed out</b></summary>
    
***
    
<b>Message: "Request timed out."</b>
<p><b>Possible cause</b>: the request time has expired.<br>
        
<b>Solution</b>: check the connectivity between the source of the request and the senhasegura server.</p>
</details>