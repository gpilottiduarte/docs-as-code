# POST | Update device

Update a device in **PAM Core**.

## Requirements
**  Authorization with **access** and **read and write** permission to **PAM Core** granted by the administrator in **A2A**.
Access the document on [How to create an authorization for an application](/v3-33/docs/a2a-how-to-create-an-authorization-for-an-application) for more information.
* Device created in **PAM Core**. 
Access the document [POST | Create device](/v3-33/docs/api-post-create-device) for more information.

## Request


 <code><span style="color:orange"> POST</code></span> `/api/pam/device`


## Request parameters
Send the parameters you want to update in the request <b>body</b>.

* <summary><code>ip</code> - <b>string</b> - <span style="color:red">required</span> - IP address of the device.</summary>


<br>
* <summary><code>hostname</code> - <b>string</b> - <span style="color:red">required</span> - Hostname of the device.</summary>

::: (Info) (Info)
If the `hostname` provided is associated with a previously created device, this request will update the existing device. Otherwise, a new device will be created associated with this `hostname`.
:::

<br>
* <summary><code>model</code> - <b>string</b> - <span style="color:red">required</span> - Device model.</summary>
<p><b>Note</b>: a new model is created if the value is unique.


<br>
* <summary><code>type</code> - <b>string</b> - <span style="color:red">required</span> - Device type.</summary>
<p><b>Note</b>: a new type is created if the value is unique.


<br>
* <summary><code>vendor</code> - <b>string</b> - <span style="color:red">required</span> - Device vendor.</summary>
<p><b>Note</b>: a new vendor is created if the value is unique.


<br>
* <summary><code>site</code> - <b>string</b> - <span style="color:red">required</span> - Device location. </summary>
<p><b>Note</b>: a new site is created if the value is unique.


<br>
* <summary><code>device_domain</code> - <b>string</b> - Name or short name of the domain.</summary>
<p><b>Note</b>: only previously registered device domains are accepted. <p><b>Example</b>: <code>api,app</code>

:::(Warning) (Attention)
When listing more than one `device_domain`, add commas without a space between them, as in the following example:
`testlab.com,demo.lab.com`
:::

<br>
* <summary><code>device_tags</code> - <b>string</b> - Keywords associated with the device.</summary>

<br>
* <summary><code>connectivities</code> - <b>string</b> - Device connectivity.</summary>


<br>
* <summary><code>session_remote_config</code> - <b>string</b> - Login expression</summary>

<br>


  ### Example request
    
<code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/device`

```json 
{
    "ip": "10.66.33.20",
    "hostname": "API device test1",
    "model": "Gmail",
    "type": "Desktop",
    "vendor": "Linux",
    "site": "AWS",
    "device_domain": ""
}
```
  
  
  
  ## Response 
 ```json 
  {
    "code": 201,
    "response": {
        "status": 201,
        "message": "Device updated successfully!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device updated successfully!",
        "erro": false,
        "cod_erro": 0
    },
    "device": {
        "id": "17",
        "hostname": "API device test1",
        "ip": "10.66.33.20",
        "model": "Gmail",
        "type": "Desktop",
        "vendor": "Linux",
        "site": "AWS",
        "device_domain": "",
        "connectivities": "",
        "session_remote_config": "",
        "device_tags": ""
    }
}
 ```
 
 ## Errors
 
 <details>
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>

***
    
<b>Message: "1004: The device's hostname was not informed"</b>
<p><b>Possible cause</b>: the required parameter <code>hostname</code> of the device wasn’t informed.<br></p>
<b>Solution</b>: provide a value for the <code>hostname</code> parameter of the device and resend the request. 
  
* * *

<b>Message: "1005: The device's IP was not informed"</b>
<p><b>Possible cause</b>: the required parameter <code>ip</code> of the device wasn’t informed.<br></p>
    <b>Solution</b>: provide a value for the <code>ip</code> parameter of the device and resend the request.
  

* * *
<b>Mensagem: "1019: The device's site was not informed"</b>
 <p><b>Possível causa</b>: the required parameter <code>site</code> of the device wasn’t informed.<br></p>
  <b>Solução</b>: provide a value for the <code>site</code> parameter of the device and resend the request.
 
***
    
 <b>Mensagem: "1020: The device's model was not informed"</b>
 <p><b>Possível causa</b>: the required parameter <code>model</code> of the device wasn’t informed.<br></p>
  <b>Solução</b>: provide a value for the <code>model</code> parameter of the device and resend the request.

  ***
  
  <b>Mensagem: "1021: The device's vendor was not informed"</b>
 <p><b>Possível causa</b>: the required parameter <code>vendor</code> of the device wasn’t informed.<br></p>
  <b>Solução</b>: provide a value for the <code>vendor</code> parameter of the device and resend the request.

  ***
 <b>Mensagem: "1022: The device's type was not informed"</b>
 <p><b>Possível causa</b>: the required parameter <code>type</code> of the device wasn’t informed.<br></p>
  <b>Solução</b>: provide a value for the <code>type</code> parameter of the device and resend the request.

  ***
<b>Message: "1029: It is not possible to enter a domain that has not been previously registered"</b>
 <p><b>Possible cause</b>:  the <code>device_domain</code> sent doesn’t exist or the sent format is incorrect.<br></p>
  <b>Solution</b>: provide a valid value for the <code>device_domain</code> , or, in case you’re sending more than one <code>device_domain</code> remember to not add space between commas. Example: <code>qakm.lab.mt4.dev,my_device_domain</code>.

  ***
<b>Message: "1039: Without PAM Configuration Access permission"</b>  
<br><b>Possible cause</b>: your authorization doesn’t have permission to update a credential. 
     
<b>Solution</b>: ask the administrator to check your <b>read and write</b> permission to <b>PAM Core</b> resources in <b>A2A</b>.

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