# GET | List all related users

Access related users’ information in **Segura**.

## Prerequisites
* Authorization with **access** permission to the **Users** resource granted by the administrator in **A2A**.
More information in [How to manage authorizations in A2A](/v4/docs/how-to-manage-authorizations-in-a2a)

## Request

 <code><span style="color:orange"> GET</code></span> <code>/api/user/related</code>

### Example Request

<code><span style="color:orange"> GET</code></span> `{{url}}api/user/related`

## Response 

```json
HTTP/1.1 200 OK
```
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "6 related users found",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "6 related users found",
        "erro": false,
        "cod_erro": 0
    },
    "relatedUsers": [
        {
            "id": "1",
            "name": "amandalices",
            "username": "alices"
        },
        {
            "id": "2",
            "name": "dleite",
            "username": "dleite"
        },
        {
            "id": "4",
            "name": "deboraleite",
            "username": "dleite"
        },
        {
            "id": "5",
            "name": "dleitef",
            "username": "dleite"
        },
        {
            "id": "6",
            "name": "deboraleiteferreira",
            "username": "dleite"
        },
        {
            "id": "8",
            "name": "duarte",
            "username": "paulopilotti"
        }
    ]
}
```

### Response Body Fields

<summary>&#8226; <code>relatedUsers</code> - <b>array of objects</b> - Related users’ data.</summary>
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>id</code> - <b>int</b> - Related user unique identification code generated automatically by Segura in <a href="/v4/docs/api-post-create-related-user">POST | Create related user</a>.</summary>
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>name</code> - <b>string</b> - Name assigned to the related user.</summary>
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>username</code> - <b>string</b> - Identification name for the user in Segura.</summary>
<br>

## Errors

<details>
<summary><b><span style="color:red">404</span> - Not Found</b>.</summary>

***
<b>Message: "Resource sub not found"</b><br>

<p><b>Possible cause</b>: the URL or requested resource isn’t correct.<br>
<b>Solution</b>: check the URL and make sure all the parameters are correct.</p>

***

</details>

<details>
<summary><b><span style="color:red">500</span> - Internal Server Error</b>.</summary>

***
    
<b>Message: "Unexpected error."</b><br>
<p><b>Possible cause</b>: the error is in the Segura server.<br>
<b>Solution</b>: contact the support team for more information.</p>
    
***
<b>Message: "You are not authorized to access this resource."</b>
<p><b>Possible cause</b>: you don’t have the authorization to access this resource.<br>
<b>Solution</b>: ask the administrator to check your permission to access the <b>Users</b> resources in <b>A2A</b>.</p>

***

</details>

<details>
<summary><b>Client authentication failed</b>.</summary>

***
   
<b>Message: "Client authentication failed."</b>
<p><b>Possible cause</b>: failure in your application authentication with the Segura server.<br>
<b>Solution</b>: check the authentication parameters such as <code>Access Token URL</code>, <code>Client ID</code> and <code>Client secret</code> and request a new access token.</p>

***

</details>

<details>
<summary><b>Invalid signature</b>.</summary>

*** 
    
<b>Message: "Invalid signature"</b>
<p><b>Possible cause</b>: failure in recognizing the URL of the client application.<br>
<b>Solution</b>: check the URL of the client application and resend the request.</p>

***

</details>

<details>
<summary><b>No route matched with those values</b>.</summary>

***   
    
<b>Message: "No route matched with those values."</b>
<p><b>Possible cause</b>: the authorization header is missing in the API request.<br>
<b>Solution</b>: request a new access token.</p>

***

</details>

<details>
<summary><b>Request timed out</b>.</summary>
    
***
    
<b>Message: "Request timed out."</b>
<p><b>Possible cause</b>: the request time has expired.<br>
<b>Solution</b>: check the connectivity between the source of the request and the Segura server.</p>

</details>