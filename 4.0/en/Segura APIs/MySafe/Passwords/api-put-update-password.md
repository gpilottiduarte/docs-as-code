# PUT | Update a password

Update a password in **MySafe**.

## Prerequisites

* Permission to edit the password in **MySafe**.

## Request

`POST` `api/mysafe/password/update/[identifier]`

## Request parameters

Send the parameter below in the **path** of the URL.

* `identifier` - int - required - Unique identification code of the password.Note:this value is automatically assigned by Segura in [POST | Create password](api-put-update-password.md) and is obtained in the response [GET | List all passwords](api-put-update-password.md) request.

\
Send the parameters below in the request body.

* `name` - string - Name of the password.

\
\*`username` - string - Username used to access the account.\
\*`password` - string - The password that's being added.\
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

`PUT` `api/mysafe/password/update/9`

```json
{
    "name": "senseg account",
    "url": "www.Segura.com",
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
        "name": "Segura account",
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

<summary>400 - Bad Request.</summary>

***

Message: "1005: Password not found"

Possible cause: the password wasn't found.\


Solution: check the value for the `identifier` and resend the request.

***

Message: "1006: User does not have access"

Possible cause: user isn't allowed to access this item.\


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

Message: "You are not authorized to access this resource."

Possíveis causas: failure in your application authentication with the Segura server.\


Solution: check the authentication parameters such as `Access Token URL`, `Client ID` and `Client Secret` and request a new access token or check and correct the URL.

***

</details>

<details>

<summary>An invalid response was received from the upstream server.</summary>

***

Message: "An invalid response was received from the a seupstream server

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
