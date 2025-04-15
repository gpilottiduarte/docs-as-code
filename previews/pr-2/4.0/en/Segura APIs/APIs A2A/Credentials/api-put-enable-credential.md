# PUT | Enable credential

Enable a credential in **PAM Core**.

## Prerequisites
* Authorization with **access** and **read and write** permission to **PAM Core** granted by the administrator in **A2A**.
More information in [How to manage authorizations in A2A](/v4/docs/how-to-manage-authorizations-in-a2a)
* A disabled credential in **PAM Core**. 
More information in [DEL | Disable credential](/v4/docs/api-del-disable-credential).

## Request

 <code><span style="color:blue"> PUT</code></span> `/api/pam/credential/[id]`

## Request parameters

Send the parameter below in the <b>path</b> of the URL.

* <code>id</code> - <b>int</b> - <span style="color:red">required</span> - Unique identification code of the credential.
    <p><b>Note</b>: this value is automatically assigned by Segura in <a href="/v4/docs/api-post-create-credential">POST | Create credential</a> and is obtained in the response to the <a href="/v4/docs/api-get-list-all-credentials"><code><span style="color:green"> GET</code></span> <code>/api/pam/credential</code></a> which lists all credentials accessible to your authorization. 
    
### Example request

<code><span style="color:blue"> PUT</code></span> `{{url}}/api/pam/credential/5`

## Response

```json
HTTP/1.1 200 OK
```

 
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential successfully activated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "Message": "Credential successfully activated",
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

  
**<b>Message: "1043: Credential is already activated!"</b>**

<p><b>Possible cause</b>: the credential is already active.<br></p>

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
 
<p><b>Possible cause</b>: the error is in the Segura server.<br>
        
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
<p><b>Possible cause</b>: failure in your application authentication with the Segura server. <br>
        
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
        
<b>Solution</b>: check the connectivity between the source of the request and the Segura server.</p>
</details>