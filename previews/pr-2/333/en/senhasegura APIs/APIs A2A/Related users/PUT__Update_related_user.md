# PUT | Update related user

Update a related user in **senhasegura**.

## Requirements
* Authorization with **access** permission to the **Users** resource granted by the administrator in **A2A**.
Access the document on [How to create an authorization for an application](/v3-33/docs/a2a-how-to-create-an-authorization-for-an-application) for more information.

## Request

 <code><span style="color:blue"> PUT</code></span> <code>/api/user/related</code>

## Request parameters
Send the parameters you want to update in the **body** of the request.

* <summary><code>id</code> - <b>int</b> - <span style="color:red">required</span> - Unique identification code of the related user.</summary>
<br>

* <summary><code>username</code> - <b>string</b> - <span style="color:red">required</span> - User identification name previously registered in senhasegura.</summary>
<br>

* <summary><code>name</code> - <b>string</b> - <span style="color:red">required</span> - Name assigned to the related user being created.</summary>
<br>

### Example request
 <code><span style="color:blue"> PUT</code></span> <code>{{url}}/api/user/related</code>
```json 
{ 
    "id": 6,
    "username": "dleite",
    "name": "deboraleiteferreira"
}
```

## Response

```json
HTTP/1.1 201 CREATED
```
```json 
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Related user successfully updated!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Related user successfully updated!",
        "erro": false,
        "cod_erro": 0
    },
    "relatedUsers": {
        "id": "6",
        "name": "deboraleiteferreira",
        "username": "dleite"
    }
}
```

## Errors

<details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
<b>Message: "1001: Parameter 'id' was not informed!"</b>
<p><b>Possible cause</b>: the required parameter <code>id</code> of the user wasn’t informed.<br></p>
<b>Solution</b>: provide the <code>id</code> of the user and resend the request.

***

<b>Message: "1001: Parameter 'username' was not informed!"</b>
<p><b>Possible cause</b>: the required parameter <code>username</code> senhasegura of the user wasn’t informed.<br></p>
<b>Solution</b>: provide the <code>username</code> senhasegura of the user and resend the request.

***

<b>Message: "1001: Parameter 'name' was not informed!"</b>
<p><b>Possible cause</b>: the required parameter <code>name</code> of the user wasn’t informed.<br></p>
<b>Solution</b>: provide the <code>name</code> you want to register for the user and resend the request.

***

<b>Message: "1005: User does not exist"</b>
<p><b>Possible cause</b>: the <code>username</code> provided hasn’t returned any user.<br></p>
<b>Solution</b>: provide a valid <code>username</code> and resend the request.

***

</details>

<details>
<summary><b><span style="color:red">404</span> - Not Found</b>.</summary>

***
<b>Message: "Resource sub not found"</b><br>

<p><b>Possible cause</b>: the URL or requested resource isn’t correct.<br></p>
<b>Solution</b>: check the URL and make sure all the parameters are correct.

***

</details>

<details>
<summary><b><span style="color:red">500</span> - Internal Server Error</b>.</summary>

***
    
<b>Message: "Unexpected error."</b><br>
<p><b>Possible cause</b>: the error is in the senhasegura server.<br></p>
<b>Solution</b>: contact the support team for more information.
    
***

<b>Message: "You are not authorized to access this resource."</b>
<p><b>Possible cause</b>: you don’t have the authorization to access this resource.<br></p>
<b>Solution</b>: ask the administrator to check your permission to access the <b>Users</b> resources in <b>A2A</b>.

***

</details>

<details>
<summary><b>Client authentication failed</b>.</summary>

***
   
<b>Message: "Client authentication failed."</b>
<p><b>Possible cause</b>: failure in your application authentication with the senhasegura server.<br></p>
<b>Solution</b>: check the authentication parameters such as <code>Access Token URL</code>, <code>Client ID</code> and <code>Client secret</code> and request a new access token.

***

</details>

<details>
<summary><b>Invalid signature</b>.</summary>

*** 
    
<b>Message: "Invalid signature"</b>
<p><b>Possible cause</b>: failure in recognizing the URL of the client application.<br></p>
<b>Solution</b>: check the URL of the client application and resend the request.

***

</details>

<details>
<summary><b>No route matched with those values</b>.</summary>

***   
    
<b>Message: "No route matched with those values."</b>
<p><b>Possible cause</b>: the authorization header is missing in the API request.<br></p>
<b>Solution</b>: request a new access token.

***

</details>

<details>
<summary><b>Request timed out</b>.</summary>
    
***
    
<b>Message: "Request timed out."</b>
<p><b>Possible cause</b>: the request time has expired.<br></p>
<b>Solution</b>: check the connectivity between the source of the request and the senhasegura server.

</details>