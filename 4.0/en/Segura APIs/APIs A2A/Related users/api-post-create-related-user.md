# POST | Create related user

Create a related user in **Segura**.

## Prerequisites

* Authorization with **access** permission to the **Users** resource granted by the administrator in **A2A**.\
  More information in [How to manage authorizations in A2A](../../../../../v4/docs/how-to-manage-authorizations-in-a2a/)

### Request

`POST` `/api/user/related`

### Request parameters

Send the parameters below in the body of the request.

* `username` - string - required - User identification name previously registered in Segura.\

* `name` - string - required - Name assigned to the related user being created.\


### Example request

`POST` `{{url}}/api/user/related`

```json
{ 
    "username": "dleite",
    "name": "deboraleite"
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
        "message": "Related user successfully registered!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "Message": "Related user successfully registered!",
        "erro": false,
        "cod_erro": 0
    },
    "relatedUsers": {
        "id": "3",
        "name": "deboraleite",
        "username": "dleite"
    }
}
```

## Errors

<details>

<summary>400 - Bad Request.</summary>

***

Message: "1001: Parameter 'username' was not informed!"

Possible cause: the required parameter `username` wasn’t informed.\


Solution: provide the `username` and resend the request.

***

Message: "1001: Parameter 'name' was not informed!"

Possible cause: the required parameter `name` wasn’t informed.\


Solution: provide the `name` and resend the request.

***

Message: "1005: User does not exist"

Possible cause: the `username` provided hasn’t returned any user.\


Solution: provide a valid `username` and resend the request.

***

</details>

<details>

<summary>404 - Not Found.</summary>

***

Message: "Resource sub not found"\


Possible cause: the URL or requested resource isn’t correct.\


Solution: check the URL and make sure all the parameters are correct.

***

</details>

<details>

<summary>500 - Internal Server Error.</summary>

***

Message: "Unexpected error."\


Possible cause: the error is in the Segura server.\


Solution: contact the support team for more information.

***

Message: "You are not authorized to access this resource."

Possible cause: you don’t have the authorization to access this resource.\


Solution: ask the administration to check your permission to access the Users resources in A2A.

***

</details>

<details>

<summary>Client authentication failed.</summary>

***

Message: "Client authentication failed."

Possible cause: failure in your application authentication with the Segura server.\


Solution: check the authentication parameters such as `Access Token URL`, `Client ID` and `Client secret` and request a new access token.

</details>

<details>

<summary>Invalid signature.</summary>

***

Message: "Invalid signature"

Possible cause: failure in recognizing the URL of the client application.\


Solution: check the URL of the client application and resend the request.

***

</details>

<details>

<summary>No route matched with those values.</summary>

***

Message: "No route matched with those values."

Possible cause: the authorization header is missing in the API request.\


Solution: request a new access token.

***

</details>

<details>

<summary>Request timed out.</summary>

***

Message: "Request timed out."

Possible cause: the request time has expired.\


Solution: check the connectivity between the source of the request and the Segura server.

</details>
