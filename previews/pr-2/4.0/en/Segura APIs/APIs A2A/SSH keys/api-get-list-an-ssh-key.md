# GET | List an SSH key by [id]


Access information of an SSH key registered in **PAM Core**.

## Prerequisites
* Authorization with **access** permission to **PAM Core** granted by the administator in **A2A**. 
More information in [How to manage authorizations in A2A](/v4/docs/how-to-manage-authorizations-in-a2a)



## Request

 <code><span style="color:green">GET</code></span> `/api/pam/key/[id]`

## Request parameters

Send the parameter below in the <b>path</b> of the URL.


* <summary><code>id</code> - <b>int</b> - <span style="color:red">required</span> - Unique identification code of the SSH key.</summary><p><b>Note</b>: this value is automatically assigned by Segura in <a href="/v4/docs/api-post-create-ssh-key">POST | Create SSH key</a> and is obtained in the response to  the <a href="/v4/docs/api-get-list-all-credentials">GET | List all credentials</a> request that lists all credentials accessible to your authorization.


  ### Example request

<code><span style="color:green">GET</code></span> `{{url}}/api/pam/key/39`
  
  
  
  ## Response 
 ```json
HTTP/1.1 200 OK 
```
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Key 39",
        "error": false,
        "error_code": 0,
        "detail": "",
        "Message": "Key 39",
        "erro": false,
        "cod_erro": 0
    },
    "tenant": "Segura",
    "key": {
        "id": "39",
        "username": "dleite",
        "key_name": "test2",
        "hostname": "w2016",
        "ip": "10.66.33.15",
        "private_key": "-----BEGIN OPENSSH PRIVATE KEY-----\r\cTA9Vb5aA0kXaK2HEjGUWgeCBG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\r\nQyNTUxOQAAACCLABE9/nb3BlbnNzaC1rZXktdjEAAAAAxtPOCkR2sGccAAAAKi5DXJnuQ1y\r\nZwAAAAtzc2gtZWQyNTUxOQAAACCLABE9/cTA9VTGVpdGVGZXJyZWlyYUBIUjFTUkb5aA0kXaK2HEjGUWgeCxtPOCkR2sGccA\r\nDgaNiGsvbkkkXhepU2NQi3iZ4sAET39xMD1VvloDSRdorYc\r\nSMZRaB4LG084KRHawZxwAAAAI0F6dXJlQUQrRGVib3JhAAAECc20zsB7FuSJQAqhLxe\r\ngzAQI=\r\n-----END OPENSSH PRIVATE KEY-----",
        "public_key": "ssh-ed25519 C1lZDI1NTE5AAawZxwAAAAAAC3NzaIIsAET39xdorYcSMZRaB4LG084MD1VvloDSRKRH AzureAD+DeboraLeiteFerreira@HR1SRH3",
        "password": null,
        "devices": [
            {
                "hostname": "API device test",
                "ip": "10.66.33.20"
            }
        ],
        "expiration_time": "2024-06-04T12:20:19"
    }
}
```

### Response body fields
 
     

* <summary><code>key</code> - <b>object</b>  - SSH key data.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>id</code> - <b>int</b> - Unique identification code of the SSH key.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>key_name</code> - <b>string</b> - Username related to the key in the device.</summary>
    
 &nbsp;&emsp;&emsp;&nbsp;<b>New SSH key default value</b>: <code>usr</code>


<br>
    
  <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>hostname</code> - <b>string</b> - Name of the main device associated with the SSH key.</summary>


<br>
    
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>ip</code> - <b>string</b> - IP address of the main device associated with the SSH key.</summary>


<br>
    
 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>private_key</code> - <b>string</b> - Private key necessary for user authentication.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Example</b>: <code>-----BEGIN OPENSSH PRIVATE KEY-----\rcTA9Vb5aA0kXaK2HEjGUWgeCBG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\rQyNTUxOQAAACCLABE9/nb3BlbnNzaC1rZXktdjEAAAAAxtPOCkR2sGccAAAAKi5DXJnuQ1y\r\nZwAAAAtzc2gtZWQyNTUxOQAAACCLABE9/cTA9VTGVpdGVGZXJyZWlyYUBIUjFTUkb5aA0kXaK2HEjGUWgeCxtPOCkR2sGccA\rDgaNiGsvbkkkXhepU2NQi3iZ4sAET39xMD1VvloDSRdorYc\rSMZRaB4LG084KRHawZxwAAAAI0F6dXJlQUQrRGVib3JhAAAECc20zsB7FuSJQAqhLxe\rgzAQI=\r-----END OPENSSH PRIVATE KEY-----</code>


<br>
  
  <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>public_key</code> - <b>string</b> - Public key that allows servers to verify the user's identity associated with the corresponding private key.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Example</b>: <code>ssh-ed25519 C1lZDI1NTE5AAawZxwAAAAAAC3NzaIIsAET39xdorYcSMZRaB4LG084MD1VvloDSRKRH AzureAD+DeboraLeiteFerreira@HR1SRH3</code>


<br>
 
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>password</code> - <b>string</b> - Optional password that provides an extra layer of security to the private key.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>tags</code> - <b>string</b> - Keywords for identifying the SSH key.</summary>


<br>
  
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>devices</code> - <b>array of objects</b> - Additional devices associated with the SSH key, containing <code>hostname</code> and <code>ip</code>.</summary>
<br>    
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;→<code>hostname</code> - <b>string</b> - Hostname of the additional device associated with the SSH key.</summary>

 <br>
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;→<code>ip</code> - <b>string</b> -  IP address of the additional device.</summary>

<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>expiration_time</code> - <b>string</b> - Expiration time of the SSH key based on ISO 8601.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Example</b>: <code>2024-06-04T12:20:19</code>


<br>
  
    
 ## Errors
 
<details>
 
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>

***

<b>Message: "1015: SSH key not found"</b><br>
<p><b>Possible cause</b>: the SSH key wasn’t found.<br>
        
<b>Solution</b>: check the <code>id</code> sent to search for the SSH key and resend the request.</p>

* * * 
 
 <b>Message: "1016: The item is not a ssh key"</b><br>
<p><b>Possible cause</b>: the value for the <code>id</code> parameter doesn’t correspond to an SSH key. 
        
<b>Solution</b>: check the <code>id</code>  and resend the request.</p>

* * * 

    
<b>Message: "1017: Key inactive"</b><br>
<p><b>Possible cause</b>: the SSH key is inactive. 
        
<b>Solution</b>: activate the key through the endpoint <code><span style="color:blue">PUT</code></span> `{{url}}api/pam/key/[id]`.</p>

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