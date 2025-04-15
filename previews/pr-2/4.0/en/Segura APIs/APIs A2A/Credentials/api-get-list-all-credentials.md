# GET | List all credentials

Access information of the credentials associated with your authorization in **PAM Core**.

## Prerequisites

* Authorization with **access** permission to **PAM Core** granted by the administator in **A2A**. 
More information in [How to manage authorizations in A2A](/v4/docs/how-to-manage-authorizations-in-a2a).

## Request

<code><span style="color:green"> GET</code></span> `api/pam/credential`

:::(Info) (Info)
SSH keys inserted as credentials will also be listed in this response. However, to list a specific SSH key, send a <code><span style="color:green"> GET</code></span> request to the endpoint `api/pam/key[id]`. For more information, refer to the document [GET | List SSH key by [id]](/v4/docs/api-get-list-an-ssh-key).
:::

### Example request
<code><span style="color:green"> GET</code></span> `{{url}}/api/pam/credential`

## Response 

```json 
HTTP/1.1 200 OK
```

``` json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "2 credentials found",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "2 credentials found",
        "erro": false,
        "cod_erro": 0
    },
    "credentials": [
        {
            "id": "2",
            "identifier": "018f3fe6-10e2-724d-9229-a6e9749fa88e",
            "username": "testefelipeqasenhasegura@gmail.com",
            "expiration": "2024-05-16T17:31:31-03:00",
            "change": "2024-05-03 16:19:53",
            "view": "2024-05-24 16:26:09",
            "hostname": "gmail.com",
            "management_ip": "mail.google.com",
            "type": "Local User",
            "type_code": "1",
            "device_model": "Gmail",
            "device_type": "Web Application",
            "device_vendor": "Google",
            "automatic_change": false,
            "connectivity": "HTTPS",
            "connectivity_code": "10"
        },
        {
            "id": "39",
            "identifier": "018fcedb-fbd5-70ff-9864-b81fcd00e410",
            "username": "dleite",
            "expiration": null,
            "change": "2024-05-31 11:03:13",
            "view": null,
            "hostname": "w2016",
            "management_ip": "10.66.33.15",
            "type": "SSH Key",
            "type_code": "1",
            "device_model": "Windows Server 2016",
            "device_type": "Server",
            "device_vendor": "Microsoft",
            "automatic_change": false,
            "connectivity": "RDP",
            "connectivity_code": "13"
        }
    ]
}

```

## Response body fields

* <summary><code>credentials</code> - <b>array of objects</b> - Data of listed credentials.</summary>

<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>id</code> - <b><b>int</b></b> - Unique identification code of the credential.</summary>
&nbsp;&emsp;&emsp;<b>Note</b>: this value is assigned by Segura in <a href="/v4/docs/api-post-create-credential">POST | Create credential</a>.

    
  <br>


   <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>identifier</code> - <b><b>string</b></b> - Unique string defined by the user or by Segura for identifying the credential.<summary>
&nbsp;&emsp;&emsp;<b>Note</b>: this value can be updated through the <code><span style="color:orange"> POST</code></span> <code>api/pam/credential</code> endpoint.


<br>
    <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>username</code> - <b><b>string</b></b> - Username assigned to the credential.</summary>&nbsp;&emsp;&emsp;&nbsp;<b>New credential default value</b>: <code>usr</code>

<br>

    <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>expiration</code> - <b>string</b> - Expiration date and time of the credential based on ISO 8601.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Example</b>: <code>2024-05-16T17:31:31-03:00</code>

<br>


    <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>change </code> - <b>string</b> - Date and time of the last modification made to the credential based on ISO 8601.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Example</b>: <code>2024-05-03 16:19:53</code>

<br>

    <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>view </code> - <b>string</b> - Date and time of the last view of the credential based on ISO 8601.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Example</b>: <code>2024-05-24 16:26:09</code>

<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>hostname</code> - <b>string</b> - Hostname of the device associated with the credential.</summary>
    
<br>    
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>management_ip</code> - <b>string</b> - IP address used to manage the device or system associated with the credential.</summary>

<br>
    <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>type</code> - <b>string</b> - Credential type.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>type_code</code> - <b>string</b> - Code for credential type.</summary>

<br>
    <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>device_model</code> - <b>string</b> - Model of the device associated with the credential.</summary> 

<br>
    <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>device_type</code> - <b>string</b> - Type of device associated with the credential.</summary>

<br>
    <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>device_vendor</code> - <b>string</b> - Manufacturer of the device associated with the credential.</summary> &nbsp;&emsp;&emsp;&nbsp;<b>Example</b>: <code>Microsoft</code>

<br>
    <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>automatic_change</code> - <b>boolean</b> - Indicates if the credential is automatically changed.

<br>
    <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>connectivity</code> - <b>string</b> - Type of credential connectivity.</summary>
    
<br>
    <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>connectivity_code</code> - <b>string</b> - Code for the type of connectivity.</summary>
    
    
:::(Info) (Info)
Access the document [POST | Create credential](/v4/docs/api-post-create-credential) for descriptions of other credential parameters such as Execution settings, Session settings, Additional settings, and JIT settings.
:::
    
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