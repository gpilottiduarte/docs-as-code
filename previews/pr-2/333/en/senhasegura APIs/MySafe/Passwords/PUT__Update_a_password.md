# PUT | Update a password

Update a password in **MySafe**.

## Requirements

* Editing permission to the password in **MySafe**.

## Request


 <code><span style="color:orange"> POST</code></span> `api/mysafe/password/update/[identifier]`


## Request parameters
Send the parameter below in the **path** of the URL.

* <summary><code>identifier</code> - <b>int</b> - <span style="color:red">required</span> - Unique identification code of the password.</summary><b>Note</b>:this value is automatically assigned by senhasegura in  <a = href "/v-3-33/docs/api-post-create-password">POST | Create password</a> and is obtained in the response <a = href "/v-3-33/docs/api-get-list-all-passwords">GET | List all passwords</a> request.</summary>

<br>
Send the parameters below in the request <b>body</b>.

* <summary><code>name</code> - <b>string</b>  - Name of the password.</summary>


<br>
* <summary><code>username</code> - <b>string</b> - Username used to access the account.</summary>


<br>
* <summary><code>password</code> - <b>string</b> - The password that's being added.</summary>


<br>
* <summary><code>url</code> - <b>string</b> - URL of the website where the password is being used.</summary>


<br>
* <summary><code>secret_key</code> - <b>string</b> - The <i>seed</i> for the TOTP automatic generation.</summary><b>Note</b>: must be encoded in base32.



<br>
* <summary><code>notes</code> - <b>string</b> - Additional password observations. </summary>


<br>
* <summary><code>users_allowed</code> - <b>array of objects</b> - Data of the users with password access.</summary>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>username</code> - <b>string</b> - Name of the user with password access permission.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>can_edit</code> - <b>boolean</b> - Editing permission.</summary>
<summary>&nbsp;&emsp;&emsp;&nbsp;<b>Note</b>: if left empty, users will have only viewing permission.</summary>
    
 <br>
:::(Warning) (Attention)
Users with <code>can_edit</code> = <code>true</code> permission can disable the password.
:::

<br>
* <summary><code>groups_allowed</code> - <b>array of objects</b> - Data of the groups with password access.</summary>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>name</code> - <b>string</b> - Name of the group with password access permission.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>can_edit</code> - <b>boolean</b> - Editing permission.</summary>
<summary>&nbsp;&emsp;&emsp;&nbsp;<b>Note</b>: if left empty, group members will have only viewing permission.</summary>
    
 <br>
:::(Warning) (Attention)
Group members with <code>can_edit</code> = <code>true</code> permission can disable the password.
:::




  ### Example request

<code><span style="color:blue"> PUT</code></span> `api/mysafe/password/update/9`

```json 
{
    "name": "senseg account",
    "url": "www.senhasegura.com",
    "username": "npass",
    "password": "8jhfy@3789",
    "secret_key": "JBSWY3DPEHPK3PXP",
    "notes": "Access details",
    "tags": "tag1, tag2",
    "users_allowed": [
        {
            "username" : "pduarte"
        }
    ],
    "groups_allowed": [
        {
            "name" : "Test group",
            "can_edit" : false
        }
    ]
}
```
  
  
  
  ## Response 
```json
HTTP/1.1 200 OK
```
```json 
 {
    "code": 200,
    "response": {
        "status": 200,
        "message": "Password successfully updated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Password successfully updated",
        "erro": false,
        "cod_erro": 0
    },
    "password_entity": {
        "identifier": "312",
        "name": "senhasegura account",
        "url": "www.url.com",
        "username": "senhapass",
        "note": "Access details for this key.",
        "tags": "access",
        "users_allowed": [
            {
                "username": "pduarte",
                "can_edit": true
            }
        ],
        "groups_allowed": [
            {
                "name": "Test group",
                "can_edit": true
            }
        ],
        "shared_error": []
    }
}
```
 
 ## Errors
 
 <details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
 <b>Message: "1005: Password not found"</b>
<p><b>Possible cause</b>: the password wasn't found.<br></p>
<b>Solution</b>: check the value for the <code>identifier</code> and resend the request.

    
* * *
    
<b>Message: "1006: User does not have access"</b>
<p><b>Possible cause</b>: user isn't allowed to access this item.<br></p>

* * *
</details>


<details>
    <summary><b><span style="color:red">500</span> - Internal Server Error</b>.</summary>

***
    
<b>Message: "Unexpected error."</b><br>

<p><b>Possible cause</b>: the error is in the senhasegura server.<br>
        
<b>Solution</b>: contact the support team for more information.</p>
    
 ***
 </details>
 
 <details>
    <summary><b>No route matched with those values.</b></summary>

 ***
    
<b>Message: "You are not authorized to access this resource."</b>
<p><b>Possíveis causas</b>: failure in your application authentication with the senhasegura server.<br>
        
<b>Solution</b>: check the authentication parameters such as <code>Access Token URL</code>, <code>Client ID</code> and  <code>Client Secret</code> and request a new access token or check and correct the URL. 
* * *
</details>
     
<details>
<summary><b>An invalid response was received from the upstream server
</b>.</summary>

*** 
   
<b>Message: "An invalid response was received from the a seupstream server</b>
    
<p><b>Possible cause</b>: the upstream server may be taking too long to respond, leading to a timeout error that is interpreted as an invalid response by the proxy/gateway server.<br>
        
<b>Solution</b>: check the connectivity between the source of the request and the senhasegura server.
***
</details>
     
   

<details>
<summary><b>The upstream server is timing out</b>.</summary>

*** 
    
<b>Message: "The upstream server is timing out"</b>
    
<p><b>Possible cause</b>: the request time has expired.
        
<b>Solution</b>: check the connectivity between the source of the request and the senhasegura server.</p>
* * *
</details>