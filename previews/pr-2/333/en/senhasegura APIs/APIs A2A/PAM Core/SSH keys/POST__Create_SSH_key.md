# POST | Create SSH key

Create an SSH key in **PAM Core**.

## Requirements
* Authorization with **access** and **read and write** permission to **PAM Core** granted by the administator in **A2A**. 
Access the document on [How to create an authorization for an application](/v3-33/docs/a2a-how-to-create-an-authorization-for-an-application) for more information.
* Device created in **PAM Core**. 
Access the document [POST | Create device](/v3-33/docs/api-post-create-device) for more information.

## Request

 <code><span style="color:orange"> POST</code></span> `/api/pam/key`


## Request parameters
Send the parameters below in the request <b>body</b>.



* <summary><code>ip</code> - <b>string</b> - <span style="color:red">required</span> - IP address of the main device associated with the SSH key.</summary>


<br>
* <summary><code>hostname</code> - <b>string</b> - <span style="color:red">required</span> - Hostname of the main device associated with the SSH key.</summary>


<br>
* <summary><code>private_key</code> - <b>string</b> - <span style="color:red">required</span> - Private key necessary for user authentication.</summary>
    <b>Example</b>: <code>-----BEGIN OPENSSH PRIVATE KEY-----\rcTA9Vb5aA0kXaK2HEjGUWgeCBG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\rQyNTUxOQAAACCLABE9/nb3BlbnNzaC1rZXktdjEAAAAAxtPOCkR2sGccAAAAKi5DXJnuQ1y\r\nZwAAAAtzc2gtZWQyNTUxOQAAACCLABE9/cTA9VTGVpdGVGZXJyZWlyYUBIUjFTUkb5aA0kXaK2HEjGUWgeCxtPOCkR2sGccA\rDgaNiGsvbkkkXhepU2NQi3iZ4sAET39xMD1VvloDSRdorYc\rSMZRaB4LG084KRHawZxwAAAAI0F6dXJlQUQrRGVib3JhAAAECc20zsB7FuSJQAqhLxe\rgzAQI=\r-----END OPENSSH PRIVATE KEY-----</code>

<br>
* <summary><code>public_key</code> - <b>string</b> - <span style="color:red">required</span> - Public key that allows servers to verify the identity of the user associated with the corresponding private key.</summary>
    <b>Example</b>: <code>ssh-ed25519 C1lZDI1NTE5AAawZxwAAAAAAC3NzaIIsAET39xdorYcSMZRaB4LG084MD1VvloDSRKRH AzureAD+DeboraLeiteFerreira@HR1SRH3</code>

<br>
* <summary><code>identifier</code> - <b>string</b> -  Unique string defined by the user or by senhasegura for identifying the credential.</summary>
    <b>Note</b>: although users aren’t required to fill out this field, for security reasons and to enable future updates of the SSH key, the system will automatically generate an identifier based on <code>UUID</code>  if left blank. This value can be updated in future calls.


<br>
* <summary><code>username</code> - <b>string</b> - Username related to the key in the device.</summary><b>Note</b>: although not required, as good practice filling out this field helps searching for the SSH key.<p><b>New SSH key default value</b>: <code>usr</code></p>
    
<br>
* <summary><code>enabled</code> - <b>boolean</b> - SSH key status: active = <code>true</code>;  inactive = <code>false</code>.</summary><b>Note</b>: if you enter the value <code>false</code> in the <code>enabled</code> field, the SSH key will be created as inactive. To access this key's information, you must enable it first.



<br>
<summary>&#8226; <code>devices</code> - <b>array of hostnames</b> - Additional devices associated with the SSH key, containing their <code>hostname</code>.</summary><b>Note</b>: if this field is left empty, the SSH key won't have any additional associated devices.

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>hostname</code> - <b>string</b> - Hostname of the additional device.</summary>&nbsp;&emsp;&emsp;<b>Note</b>: only previously registered devices are accepted.
    

<br>
* <summary><code>tags</code> - <b>string</b> - Keywords for identifying the SSH key.</summary>



<br>
* <summary><code>key_name</code> - <b>string</b> - User-created name for identifying the key.</summary><b>Note</b>: although not required, as good practice, filling out this field helps search for the SSH key.

<br>
* <summary><code>password</code> - <b>string</b> - Optional password that provides an extra layer of security to the private key.</summary>

<br>


  ### Example request

 <code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/key`

```json 
{
    "ip": "10.66.33.15",
    "hostname": "w2016",
    "private_key": "-----BEGIN OPENSSH PRIVATE KEY-----\r\cTA9Vb5aA0kXaK2HEjGUWgeCBG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\r\nQyNTUxOQAAACCLABE9/nb3BlbnNzaC1rZXktdjEAAAAAxtPOCkR2sGccAAAAKi5DXJnuQ1y\r\nZwAAAAtzc2gtZWQyNTUxOQAAACCLABE9/cTA9VTGVpdGVGZXJyZWlyYUBIUjFTUkb5aA0kXaK2HEjGUWgeCxtPOCkR2sGccA\r\nDgaNiGsvbkkkXhepU2NQi3iZ4sAET39xMD1VvloDSRdorYc\r\nSMZRaB4LG084KRHawZxwAAAAI0F6dXJlQUQrRGVib3JhAAAECc20zsB7FuSJQAqhLxe\r\ngzAQI=\r\n-----END OPENSSH PRIVATE KEY-----",
    "public_key": "ssh-ed25519 C1lZDI1NTE5AAawZxwAAAAAAC3NzaIIsAET39xdorYcSMZRaB4LG084MD1VvloDSRKRH AzureAD+DeboraLeiteFerreira@HR1SRH3",
    "username": "dleite3",
    "identifier": "sshkey3",
    "enabled": true,
    "devices": [
        {
            "hostname": "API device test"
        }
    ],
    "tags": "mainsshkey",
    "key_name": "teste4",
    "password": "fkjwe87a5a8fa9a" 
}
```
  
  
  
  ## Response 
 ```json 
  {
    "code": 201,
    "response": {
        "status": 201,
        "message": "Key successfully registered!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "Message": "Key successfully registered!",
        "erro": false,
        "cod_erro": 0
    },
    "key": {
        "id": "92",
        "identifier": "sshkey0",
        "devices": [
            {
                "hostname": "API device test",
                "ip": "10.66.33.20"
            }
        ],
        "devices_error": []
    }
}
 ```
 
 ## Errors
 
 <details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
    
<b>Message: "1004: The device's hostname was not informed"</b>
<p><b>Possible cause</b>: the required parameter <code>hostname</code> of the device wasn’t informed.<br></p>
<b>Solution</b>: provide a value for the <code>hostname</code> parameter of the device and resend the request. 
  
* * *

<b>Message: "1005: The device's IP was not informed"</b>
<p><b>Possible cause</b>: the required parameter <code>ip</code> of the device wasn’t informed.<br></p>
    <b>Solution</b>: provide a value for the <code>ip</code> parameter of the device and resend the request.
  

* * *
    
 <b>Message: "1013: The public key was not informed"</b>
 <p><b>Possible cause</b>: the required parameter <code>public_key</code> wasn’t informed.<br></p>
  <b>Solution</b>: provide a value for the <code>public_key</code> parameter and resend the request.
 
***
<b>Message: "1014: The private key was not informed"</b>
 <p><b>Possible cause</b>: the required parameter <code>private_key</code> wasn’t informed.<br></p>
  <b>Solution</b>: provide a value for the <code>private_key</code> parameter and resend the request.

  ***
<b>Message: "1039: Without PAM Configuration Access permission"</b>  
<br><b>Possible cause</b>: your authorization doesn’t have permission to create a credential. 
     
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