# GET | List all devices

Access information of the devices associated with your authorization in  **PAM Core**.

## Prerequisites
* Authorization with **access** permission to **PAM Core** granted by the administator in **A2A**. 
More information in [How to manage authorizations in A2A](/v4/docs/how-to-manage-authorizations-in-a2a)
* Device created in **PAM Core**. 
More information in [POST | Create device](/v4/docs/api-post-create-device).

## Request

 <code><span style="color:orange"> GET</code></span> `/api/pam/device`


### Example request

<code><span style="color:orange"> GET</code></span> `{{url}}/api/pam/device`  
  
  
  ## Response 

 ```json
HTTP/1.1 200 OK 
```
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "2 devices found",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "2 devices found",
        "erro": false,
        "cod_erro": 0
    },
    "devices": [
        {
            "id": "1",
            "hostname": "mydevicehostname",
            "ip": "172.10.20.30",
            "model": "Windows Server 2012",
            "type": "Server",
            "vendor": "Microsoft",
            "site": "LAX"
	        "tags": "tag001"
        },
        {
            "id": "6",
            "hostname": "myseconddevice",
            "ip": "41.41.208.182",
            "model": "CentOS 7",
            "type": "Server",
            "vendor": "CentOS",
            "site": "AWS"
	        "tags": ""
        }
    ]
}
```
 
 ### Response body fields

    
<summary>&#8226; <code>devices</code> - <b>array de objetos</b> - Dados dos dispositivos</summary>

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
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>tags</code> - <b>string</b> - Keywords associated with the device.</summary>



 ## Errors
 
 
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