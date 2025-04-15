# DEL | Release credential custody

Release the custody of a credential in **PAM Core**.

***
When a user makes a <code><span style="color:green"> GET</code></span> `/api/pam/credential[id]` call to view a credential, this is referred to as temporarily granting custody of that credential to the user, also known as *account check-in*.

When access to that credential is revoked, this is described as releasing custody of the credential, also known as *account check-out*.

Access the document [About credential custody](/v3-33/docs/pam-about-credential-custody) for more information on the concept of credential custody.
***


## Requirements
* Authorization with access permission to **PAM Core** granted by the administrator in **A2A**.
Access the document on [How to create an authorization for an application](/v3-33/docs/a2a-how-to-create-an-authorization-for-an-application) for more information.
* Custody of a credential requested via API through the endpoint <code><span style="color:green">GET</code></span> `/api/pam/credential[id]`.
Access the document [GET | List a credential](/v3-33/docs/api-get-list-a-credential) for more information.

## Request

 <code><span style="color:red"> DEL</code></span> `/api/pam/credential/custody/[id]`

## Request parameters

Send the parameter below in the <b>path</b> of the URL.

* <code>id</code> - <b>int</b> - <span style="color:red">required</span> - Unique identification code of the credential.
    <p><b>Note</b>: this value is automatically assigned by senhasegura in <a href="/v3-33/docs/api-post-create-credential">POST | Create credential</a> and is obtained in the response to the <a href="/v3-33/docs/api-get-list-all-credentials"><code><span style="color:green"> GET</code></span> <code>/api/pam/credential</code></a> which lists all credentials accessible to your authorization. 
    
### Example request

<code><span style="color:red"> DEL</code></span> `{{url}}/api/pam/credential/94`

## Response

```json
HTTP/1.1 200 OK
```

 
```json
json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential custody 94 released",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential custody 94 released",
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
        
<b>Solution</b>: check the value for the <code>id</code> and resend the request.</p>
    
 ***
    
 <p><b>Message: "1008: Credential inactive"</b>
<p><b>Possible cause</b>: the credential is inactive.<br></p>
<b>Solution</b>: enable the credential through the endpoint <code><span style="color:blue"> PUT</code></span> <code>/api/pam/credential/[id]</code> and resend the request.
    
***
    
<b>Message: "1009: No access to credential"</b><br>

<p><b>Possible cause</b>: you’re not authorized to access the credential.<br>
        
<b>Solution</b>: ask the administrator to check your permission to access the credential.</p>
    
***


<br><b>Mensagem: "1018: The credential is not in the user custody"</b>

<p><b>Possible cause</b>: the user doesn't have the custody of the credential.<br>
        
<b>Solution</b>: access the credential throught the endpoint endpoint <code><span style="color:green"> GET</code></span> <code>/iso/pam/credential[id]</code> and after the success of this call, resend the request.</p>
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