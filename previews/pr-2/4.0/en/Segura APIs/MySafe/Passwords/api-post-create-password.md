# POST | Create password

Create a password in **MySafe**.


## Request


 <code><span style="color:orange"> POST</code></span> `api/mysafe/password`

:::(Info) (Info)
When a password is added to **MySafe**, it's automatically associated with its creator, identifying them as the owner.
:::

## Request parameters
Send the parameters below in the request <b>body</b>.

* <summary><code>name</code> - <b>string</b> - <span style="color:red">required</span> - Name assigned to the password.</summary>


<br>
* <summary><code>username</code> - <b>string</b> - <span style="color:red">required</span> - Username used to access the account.</summary>


<br>
* <summary><code>password</code> - <b>string</b> - <span style="color:red">required</span> - The password that's being added.</summary>


<br>
* <summary><code>url</code> - <b>string</b> - URL of the website where the password is being used.</summary>


<br>
* <summary><code>secret_key</code> - <b>string</b> - The <i>seed</i> for the TOTP automatic generation.</summary>
<b>Note</b>: must be encoded in base32.




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

```json 
{
    "name": "senseg account",
    "username": "npass",
    "password": "8jhfy@3789",
     "url": "www.Segura.com",
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
HTTP/1.1 201 CREATED 
```
```json 
  {
    "code": 201,
    "response": {
        "status": 201,
        "message": "Password successfully registered",
        "error": false,
        "error_code": 0,
        "detail": "",
        "Message": "Password successfully registered",
        "erro": false,
        "cod_erro": 0
    },
    "password_entity": {
        "identifier": "312",
        "name": "senseg account",
        "url": "www.Segura.com",
        "username": "npass",
        "note": "Access details",
        "tags": "tag1, tag2",
        "users_allowed": [
            {
                "username": "pduarte",
                "can_edit": false
            }
        ],
        "groups_allowed": [
            {
                "name": "Test group",
                "can_edit": false
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
<b>Message: "1001: Parameter 'name' was not informed!"</b>
<p><b>Possible cause</b>: the required parameter <code>name</code> of the password wasn't informed.<br></p>
<b>Solution</b>: provide a value for <code>name</code> and resend the request.
  
* * *
    
<b>Message: "1001: Parameter 'username' was not informed!"</b>
<p><b>Possible cause</b>: the required parameter <code>username</code> of the password wasn't informed.<br></p>
<b>Solution</b>: provide a value for <code>username</code> and resend the request.
  
* * *

<b>Message: "1001: Parameter 'password' was not informed!"</b>
<p><b>Possible cause</b>: the required parameter <code>password</code> wasn't informed.<br></p>
<b>Solution</b>: provide a value for <code>password</code> and resend the request.

* * *
</details>


<details>
    <summary><b><span style="color:red">500</span> - Internal Server Error</b>.</summary>

***
    
<b>Message: "Unexpected error."</b><br>

<p><b>Possible cause</b>: the error is in the Segura server.<br>
        
<b>Solution</b>: contact the support team for more information.</p>
    
 ***
 </details>
 
 <details>
    <summary><b>No route matched with those values.</b></summary>

 ***
    
<b>Message: "No route matched with those values."</b>
<p><b>Possíveis causas</b>: failure in your application authentication with the Segura server.<br>
        
<b>Solution</b>: check the authentication parameters such as <code>Access Token URL</code>, <code>Client ID</code> and  <code>Client Secret</code> and request a new access token or check and correct the URL. 
* * *
</details>
     
<details>
<summary><b>An invalid response was received from the upstream server
</b>.</summary>

*** 
   
<b>Message: "An invalid response was received from the upstream server</b>
    
<p><b>Possible cause</b>: the upstream server may be taking too long to respond, leading to a timeout error that is interpreted as an invalid response by the proxy/gateway server.<br>
        
<b>Solution</b>: check the connectivity between the source of the request and the Segura server.
***
</details>
     
   

<details>
<summary><b>The upstream server is timing out</b>.</summary>

*** 
    
<b>Message: "The upstream server is timing out"</b>
    
<p><b>Possible cause</b>: the request time has expired.
        
<b>Solution</b>: check the connectivity between the source of the request and the Segura server.</p>
* * *
</details>