# GET | List a related user

Access a related user’s Information in **Segura**.

## Prerequisites
* Authorization with **access** permission to the **Users** resource granted by the **A2A** administrator.
More information in [How to manage authorizations in A2A](/v4/docs/how-to-manage-authorizations-in-a2a)

## Request

<code><span style="color:orange">GET</span></code> `/api/user/related/[id]`

### Request parameters
Send the parameter below in the **path** of the URL.
<summary><code>id</code> - <b>int</b> - <span style="color:red">required</span>- Related user unique identification code. </summary>

<b>Note</b>: this value is automatically assigned by Segura in [POST | Create related user](/v4/docs/pt/api-post-create-related-user) and is obtained in the response to the [GET | List all related users](/v4/docs/pt/api-get-list-all-related-users) request.

### Example Request
<code><span style="color:orange">GET</span></code> `{{url}}/api/user/related/2`

## Response

```json
HTTP/1.1 200 OK
```
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "",
        "erro": false,
        "cod_erro": 0
    },
    "relatedUsers": {
        "id": "4",
        "name": "deboraleite",
        "username": "dleite"
    }
}
```

## Response Body Fields

<summary>&#8226; <code>relatedUsers</code> - <b>object</b> - Related user’s data.</summary>
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>id</code> - <b>int</b> - Related user unique identification code generated automatically by Segura in <a href="/v4/docs/pt/api-post-create-related-user">POST | Create related user</a>.</summary>
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>name</code> - <b>string</b> - Name assigned to the related user.</summary>
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>username</code> - <b>string</b> - Identification name for the user in Segura.</summary>
<br>

## Errors

<details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
<b>Message: "1005: User does not exist"</b><br>

<p><b>Possible cause</b>: the id provided hasn’t returned a user registered in Segura.<br>
<b>Solution</b>: provide a valid id and resend the request.</p>

***

</details>

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
<b>Message: "You are not authorized to access this resource."</b><br>
<p><b>Possible cause</b>: you don’t have the authorization to access this resource.<br>
<b>Solution</b>: ask the administrator to check your permission to access the <b>Users</b> resources in <b>A2A</b>.</p>

***

</details>

<details>
<summary><b>Client authentication failed</b>.</summary>

***
   
<b>Message: "Client authentication failed."</b><br>
<p><b>Possible cause</b>: failure in your application authentication with the Segura server.<br>
<b>Solution</b>: check the authentication parameters such as <code>Access Token URL</code>, <code>Client ID</code> and <code>Client secret</code> and request a new access token.</p>

***

</details>

<details>
<summary><b>Invalid signature</b>.</summary>

*** 
    
<b>Message: "Invalid signature"</b><br>
<p><b>Possible cause</b>: failure in recognizing the URL of the client application.<br>
<b>Solution</b>: check the URL of the client application and resend the request.</p>

***

</details>

<details>
<summary><b>No route matched with those values</b>.</summary>

***   
    
<b>Message: "No route matched with those values."</b><br>
<p><b>Possible cause</b>: the authorization header is missing in the API request.<br>
<b>Solution</b>: request a new access token.</p>

***

</details>

<details>
<summary><b>Request timed out</b>.</summary>

***
    
<b>Message: "Request timed out."</b><br>
<p><b>Possible cause</b>: the request time has expired.<br>
<b>Solution</b>: check the connectivity between the source of the request and the Segura server.</p>

</details>