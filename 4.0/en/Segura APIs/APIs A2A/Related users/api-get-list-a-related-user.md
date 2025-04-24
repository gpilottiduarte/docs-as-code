# GET | List a related user

Access a related user’s Information in **Segura**.

## Prerequisites

* Authorization with **access** permission to the **Users** resource granted by the **A2A** administrator.\
  More information in [How to manage authorizations in A2A](../../../../../v4/docs/how-to-manage-authorizations-in-a2a/)

## Request

`GET` `/api/user/related/[id]`

### Request parameters

Send the parameter below in the **path** of the URL.

`id` - int - required- Related user unique identification code.

Note: this value is automatically assigned by Segura in [POST | Create related user](../../../../../v4/docs/pt/api-post-create-related-user/) and is obtained in the response to the [GET | List all related users](../../../../../v4/docs/pt/api-get-list-all-related-users/) request.

### Example Request

`GET` `{{url}}/api/user/related/2`

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

• `relatedUsers` - object - Related user’s data.\
&#x20;   → `id` - int - Related user unique identification code generated automatically by Segura in [POST | Create related user](../../../../../v4/docs/pt/api-post-create-related-user/).\
&#x20;   → `name` - string - Name assigned to the related user.\
&#x20;   → `username` - string - Identification name for the user in Segura.\


## Errors

<details>

<summary>400 - Bad Request.</summary>

***

Message: "1005: User does not exist"\


Possible cause: the id provided hasn’t returned a user registered in Segura.\
Solution: provide a valid id and resend the request.

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

Message: "You are not authorized to access this resource."\


Possible cause: you don’t have the authorization to access this resource.\
Solution: ask the administrator to check your permission to access the Users resources in A2A.

***

</details>

<details>

<summary>Client authentication failed.</summary>

***

Message: "Client authentication failed."\


Possible cause: failure in your application authentication with the Segura server.\
Solution: check the authentication parameters such as `Access Token URL`, `Client ID` and `Client secret` and request a new access token.

***

</details>

<details>

<summary>Invalid signature.</summary>

***

Message: "Invalid signature"\


Possible cause: failure in recognizing the URL of the client application.\
Solution: check the URL of the client application and resend the request.

***

</details>

<details>

<summary>No route matched with those values.</summary>

***

Message: "No route matched with those values."\


Possible cause: the authorization header is missing in the API request.\
Solution: request a new access token.

***

</details>

<details>

<summary>Request timed out.</summary>

***

Message: "Request timed out."\


Possible cause: the request time has expired.\
Solution: check the connectivity between the source of the request and the Segura server.

</details>
