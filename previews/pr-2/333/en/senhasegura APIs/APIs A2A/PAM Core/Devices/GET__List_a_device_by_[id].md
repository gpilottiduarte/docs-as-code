# GET | List a device by [id]

Access information of a device registered in  **PAM Core**.

## Requirements
* Authorization with **access** permission to **PAM Core** granted by the administator in **A2A**. 
Access the document on [How to create an authorization for an application](/v3-33/docs/a2a-how-to-create-an-authorization-for-an-application) for more information.
* Device created in **PAM Core**. 
Access the document [POST | Create device](/v3-33/docs/api-post-create-device) for more information.

## Request

 <code><span style="color:green">GET</code></span> `/api/pam/device/[id]`

## Request parameters
Send the parameter below in the **path** of the URL.

<summary><code>id</code> - <b>int</b> - <span style="color:red">required</span> - Unique identification code of the device.</summary>
<b>Note</b>:  this value is automatically assigned by senhasegura in <a href="/v3-33/docs/api-post-create-device">POST | Create device</a> and is obtained in the response to the <a href="/v3-33/docs/api-get-list-all-devices">GET | List all devices</a>.


  ### Example request

<code><span style="color:green">GET</code></span> `{{url}}/api/pam/device/14`
  
  
  
  ## Response 

 ```json
HTTP/1.1 200 OK 
```
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Device 14",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device 14",
        "erro": false,
        "cod_erro": 0
    },
    "tenant": "senhasegura",
    "device": {
        "id": "14",
        "hostname": "API device",
        "ip": "10.66.33.17",
        "model": "Gmail",
        "type": "Desktop",
        "vendor": "Linux",
        "site": "AWS",
        "device_domain": "my_device_domain",
        "connectivities": "HTTP:80, SSH:22"",
        "session_remote_config": "HTTP::",
        "device_tags": "test"
    }
}
```

### Response body fields


<summary>&#8226; <code>devices</code> - <b>object</b> - Device data.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>id</code> - <b>int</b> - Unique identification code of the device.
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>hostname</code> - <b>string</b> - Hostname of the device.</summary>
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>ip</code> - <b>string</b> - IP address of the device.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>model</code> - <b>string</b> - Device model.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>type</code> - <b>string</b> - Device type.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>vendor</code> - <b>string</b> - Device vendor.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>site</code> - <b>string</b> - Device location.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>device_domain</code> - <b>string</b> - Name or short name of the device.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>connectivities</code> - <b>string</b> - Device connectivity.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>session_remote_config</code> - <b>string</b> - Login expression.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>device_tags</code> - <b>string</b> - Keywords associated with the device.</summary>

<br>
    
## Errors

<details>
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>
 
* * *
    
    
<b>Message: "1011: Device not found"</b>     

<br><b>Possible cause</b>: the device wasn't found.
     
<b>Solution</b>:  check the <code>id</code> used to search for the device and resend the request.

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