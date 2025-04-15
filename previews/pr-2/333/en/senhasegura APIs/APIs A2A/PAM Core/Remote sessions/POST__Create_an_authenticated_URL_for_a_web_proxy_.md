# POST | Create an authenticated URL for a web proxy session

Create an authenticated URL to initiate a web proxy session in **PAM Core**.

## Requirements
*  Authorization with **access** and **read and write** permission to **Web Proxy Session** granted by the administrator in **A2A**.
Access the document on [How to create an authorization for an application](/v3-33/docs/a2a-how-to-create-an-authorization-for-an-application) for more information.
* Credential created in **PAM Core**. 
Access the document [POST | Create credential](/v3-33/docs/api-post-create-credential) for more information.

## Request

<code><span style="color:orange"> POST</code></span> `api/pam/remote/session`

 ## Request parameters
Send the parameters below in the request <b>body</b>.

<summary><code>user</code> - <b>string</b> - <span style="color:red">required</span> - Username used to authenticate.</summary>
<p><b>Note</b>: must be a senhasegura registered user.</p>

<br>
<summary><code>credential</code> - <b>string</b> - <span style="color:red">required</span> - Username of the credenial used in this web proxy session.</summary>


<br>
<summary><code>device</code> - <b>string</b> - <span style="color:red">required</span> - Hostname or IP address of the target device
.</summary>



<br>
<summary><code>protocol</code> - <b>string</b> - <span style="color:red">required</span> - Network protocol (SSH, RDP, HTTPS, among others.).</summary>

<br>
<summary><code>remotedevice</code> - <b>string</b> - Device ID, IP address or hostname for the web proxy session.</summary>
<b>Note</b>: required only if the session uses domain credentials.

<br>
<summary><code>remoteAddr</code> - <b>string</b> - IP address of the user.</summary>
<b>Note</b>: this IP address will be used throughout the session.
  
<br>
<summary><code>port</code> - <b>int</b> - Port used during the session.</summary>
<b>Note</b>: by default, the session uses the chosen device port, unless specified otherwise.


<br>
<summary><code>remoteapp</code> - <b>int</b> - RemoteApp ID.</summary>
 <b>Note</b>: only for RemoteApp sessions.

<br>
<summary><code>screensize</code> - <b>string</b> - Screen resolution.</summary>
<p><b>Example</b>: <code>1900x1200</code></p>





  ### Example request

<code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/remote/session`

```json 
{
            "user": "dleite",
            "credential":"usrsudonopass",
            "device": "45.163.147.135",
            "protocol": "ssh"
}
```
  
  
  
  ## Response 
 ```json 
  {
    "code": 200,
    "response": {
        "status": 200,
        "message": "Session created successfully",
        "error": false,
        "error_code": 0,
        "detail": "",
        "Message": "Session created successfully",
        "erro": false,
        "cod_erro": 0
    },
    "tenant": "senhasegura",
    "session": {
        "session_url": "https://10.66.33.120/modulos/auth?_sr=cmJzOi8vTmJQOG1GckRWeHFFY1FkNi8wRUF5bHoweWw3cUdyUk5JbE1oaXZ3TytLak5sUGsydUZ2YnRQaUdhU3YwaUl0TVRILzZHWWtPWjdZdXNKeE01NHFsaVlFdkRqMGZtOG5vbXNDc0d5bUNDdUt2YWFSclJjTG1scUIxSnBUTXdq",
        "token": "6a3afbb1************b32262"
    }
}
 ```
 
  ### Response body fields


<summary><code>session</code> - <b>object</b> - Data of the created session.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>session_url</code> - <b><b>string</b></b> - URL to initiate the authenticated web proxy session.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>token</code> - <b><b>string</b></b> - Authentication token associated with the web proxy session.</summary>
 <br> 
 
:::(Warning) (Attention)
The `token` value is sensitive and must remain confidential.
:::
 
 ## Errors
 
 <details>
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>

***
    
<b>Message: "Username not specified"</b>
<p><b>Possible cause</b>: the required parameter <code>username</code> of the session wasn't informed.<br></p>
    <b>Solution</b>: provide a value for the <code>username</code> parameter and resend the request.
  
* * *    
<b>Message: "Credential not specified"</b>
<p><b>Possible cause</b>: the required parameter <code>credential</code> for session authentication wasn't informed.<br></p>
<b>Solution</b>: provide a value for the <code>credential</code> parameter and resend the request.
  
* * *

<b>Message: "Credential device not specified"</b>
<p><b>Possible cause</b>: the required parameter <code>device</code> of the session wasn't informed.<br></p>
<b>Solution</b>: provide a value for the <code>device</code> parameter and resend the request.
  

* * *
<b>Message: "Invalid protocol"</b>
<p><b>Possible cause</b>: the required parameter <code>protocol</code> of the session wasn't informed.<br></p>
  <b>Solution</b>: informe um valor para o parâmetro <code>protocol</code> e envie 

* * *
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
        
<b>Solution</b>: ask the administrator to check your permission to access the <b>Web Proxy Session</b> resources in <b>A2A</b>.</p>

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