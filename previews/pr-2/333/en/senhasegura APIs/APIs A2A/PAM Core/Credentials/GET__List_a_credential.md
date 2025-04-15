# GET | List a credential

Access information of a credential registered in **PAM Core**.

## Requirements

* Authorization with **access** permission to **PAM Core** granted by the administator in **A2A**. 
Access the document on [How to create an authorization for an application](/v3-33/docs/a2a-how-to-create-an-authorization-for-an-application) for more information.
* Credential created in **PAM Core**. 
Access the document [POST | Create credential](/v3-33/docs/api-post-create-credential) for more information.

## List credential by `id` - Request

<code><span style="color:green"> GET</code></span> `api/pam/credential/[id]`

### Request parameters

Send the parameter below in the **path** of the URL.

* <summary><code>id</code> - <b><b>int</b></b> - <span style="color:red"> required</span style="color:red"> - Unique identification code of the credential.</summary><b>Note</b>: this value is automatically assigned by senhasegura in <a href="/v3-33/docs/api-post-create-credential">POST | Create credential</a> and is obtained in the response to the <a href="/v3-33/docs/api-get-list-all-credentials"> GET | List all credentials</a> request. 

### Example request
<code><span style="color:green"> GET</code></span> `{{url}}/api/pam/5`

## Response 

```json 
HTTP/1.1 200 OK
```

``` json
{
    "response": {
        "status": 200,
        "mensagem": "Credential 5",
        "erro": false,
	 "detail": "",
        "message": "Credential 5",
        "error": false,
	 "error_code": 0
    },
    "credential": {
        "id": "5",
        "identifier": "robot-test-5",
        "username": "credential_5",
        "password": "secret@2504",
        "content": "secret@2504",
        "hostname": "destktop-91.com",
        "parent_credential_cod": null,
        "parent_credential": null,
        "additional": "CREDADD01",
        "domain": "",
        "ip": "172.10.10.90",
        "port": "22",
        "model": "Ubuntu",
        "expiration_time": "2021-01-16T17:31:39"
    }
```

## List credential by `username@hostname` - Request

<code><span style="color:green"> GET</code></span> `api/pam/credential/[username@hostname]`

### Request parameters

Send the parameter below in the **path** of the URL.

* <summary><code>username@hostname</code> - <b><b>int</b></b> - <span style="color:red"> required</span style="color:red"> - <code>username</code> and  <code>hostname</code> associated with the credential separated by an @ symbol. </summary><b>Note</b>: these values are provided by the user in <a href="/v3-33/docs/api-post-create-credential">POST | Create credential</a>  and are obtained in the response to the <a href="/v3-33/docs/api-get-list-all-credentials"> GET | List all credentials</a> request. <p><b>Example</b>: <code>credential_5@destktop-91.com</code></p>

### Example request
<code><span style="color:green"> GET</code></span> `{{url}}api/pam/credential_5@destktop-91.com`

:::(Warning) (Attention)
If the `username` provided has an @ in it, as in `johndoe@senhasegura`, the endpoint won’t work as expected due to the conflict caused by the presence of two @ symbols. 
:::

```json 
HTTP/1.1 200 OK
```

``` json
{
    "response": {
        "status": 200,
        "mensagem": "Credential 5",
        "erro": false,
	 "detail": "",
        "message": "Credential 5",
        "error": false,
	 "error_code": 0
    },
    "credential": {
        "id": "5",
        "identifier": "robot-test-5",
        "username": "credential_5",
        "password": "secret@2504",
        "content": "secret@2504",
        "hostname": "destktop-91.com",
        "parent_credential_cod": null,
        "parent_credential": null,
        "additional": "CREDADD01",
        "domain": "",
        "ip": "172.10.10.90",
        "port": "22",
        "model": "Ubuntu",
        "expiration_time": "2021-01-16T17:31:39"
    }
```
## Response body fields

* <summary><code>credential</code> - <b>object</b> - Credential data.</summary>

<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>id</code> - <b><b>int</b></b> - Unique identification code of the credential.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>identifier</code> - <b><b>string</b></b> - Unique string defined by the user or senhasegura for identifying the credential.<summary>
&nbsp;&emsp;&emsp; <b>Note</b>: this value can be updated through the <code><span style="color:orange"> POST</code></span> <code>api/pam/credential</code> endpoint.

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>username</code> - <b><b>string</b></b> - Username assigned to the credential.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>expiration</code> - <b>string</b> - Expiration date and time of the credential based on ISO 8601.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>password</code> - <b>string</b> - Password assigned to the credential.</summary>
    
<br>        
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>content</code> - <b>string</b> - Password assigned to the credential.</summary>
    
<br>        
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>hostname</code> - <b>string</b> - Hostname of the device associated with the credential.</summary>
    
<br>        
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>parent_credential_cod</code> - <b>string</b> - Parent credential’s identifier.</summary>
    
<br> 
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>parent_credential</code> - <b>string</b> - Parent credential.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Note</b>: when you select a parent credential, the child credential will assume the same password as the parent credential. Whenever there is a manual or automated password change on the parent credential, the child credential will also be modified and assume the same password as the parent credential.
  
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>additional</code> - <b>string</b> - Additional information about the credential.</summary>
    

<br> 
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>domain</code> - <b>string</b> - Domain’s name or abbreviation.</summary>    

<br> 
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>ip</code> - <b>string</b> - IP address of the device associated with the credential.</summary>

<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>port</code> - <b>string</b> - Port of the device associated with the credential.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>port</code> - <b>string</b> - Port of the device associated with the credential.</summary>

<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>model</code> - <b>string</b> - Device model.</summary> 

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>expiration_time</code> - <b>string</b> - Date and time of credential expiration based on ISO 8601.</summary>&nbsp;&emsp;&emsp;&nbsp;<b>Example</b>: <code>2024-05-16T17:31:31-03:00</code>
    
<br> 

## Errors
    
<details>
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>

***
    
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