# POST | Create password

Create a password in **MySafe**.

## Request

`POST` `api/mysafe/password`

:::(Info) (Info)\
When a password is added to **MySafe**, it's automatically associated with its creator, identifying them as the owner.\
:::

## Request parameters

Send the parameters below in the request body.

* `name` - string - required - Name assigned to the password.

\
\*`username` - string - required - Username used to access the account.\
\*`password` - string - required - The password that's being added.\
\*`url` - string - URL of the website where the password is being used.\
\*`secret_key` - string - The _seed_ for the TOTP automatic generation.Note: must be encoded in base32.\
\*`notes` - string - Additional password observations.\
\*`users_allowed` - array of objects - Data of the users with password access.    →`username` - string - Name of the user with password access permission.\
&#x20;   →`can_edit` - boolean - Editing permission.    Note: if left empty, users will have only viewing permission.\
:::(Warning) (Attention)\
Users with `can_edit` = `true` permission can disable the password.\
:::\
\*`groups_allowed` - array of objects - Data of the groups with password access.    →`name` - string - Name of the group with password access permission.\
&#x20;   →`can_edit` - boolean - Editing permission.    Note: if left empty, group members will have only viewing permission.\
:::(Warning) (Attention)\
Group members with `can_edit` = `true` permission can disable the password.\
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

<summary>400 - Bad Request.</summary>

***

Message: "1001: Parameter 'name' was not informed!"

Possible cause: the required parameter `name` of the password wasn't informed.\


Solution: provide a value for `name` and resend the request.

***

Message: "1001: Parameter 'username' was not informed!"

Possible cause: the required parameter `username` of the password wasn't informed.\


Solution: provide a value for `username` and resend the request.

***

Message: "1001: Parameter 'password' was not informed!"

Possible cause: the required parameter `password` wasn't informed.\


Solution: provide a value for `password` and resend the request.

***

</details>

<details>

<summary>500 - Internal Server Error.</summary>

***

Message: "Unexpected error."\


Possible cause: the error is in the Segura server.\


Solution: contact the support team for more information.

***

</details>

<details>

<summary>No route matched with those values.</summary>

***

Message: "No route matched with those values."

Possíveis causas: failure in your application authentication with the Segura server.\


Solution: check the authentication parameters such as `Access Token URL`, `Client ID` and `Client Secret` and request a new access token or check and correct the URL.

***

</details>

<details>

<summary>An invalid response was received from the upstream server.</summary>

***

Message: "An invalid response was received from the upstream server

Possible cause: the upstream server may be taking too long to respond, leading to a timeout error that is interpreted as an invalid response by the proxy/gateway server.\


Solution: check the connectivity between the source of the request and the Segura server.

***

</details>

<details>

<summary>The upstream server is timing out.</summary>

***

Message: "The upstream server is timing out"

Possible cause: the request time has expired.

Solution: check the connectivity between the source of the request and the Segura server.

***

</details>
