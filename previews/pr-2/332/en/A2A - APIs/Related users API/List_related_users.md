# List related users

This document presents how to access, via API, related users’ information registered in senhasegura, the available endpoints, the parameters needed, example requests, and responses on success or in case of errors.

## Authorization
To get started, make sure **Users** is listed under **Authorized resources** in your **A2A** module. For more information on authorization, access the [How to create an authorization for an application](/v3-32/docs/a2a-how-to-create-an-authorization-for-an-application) document.

## Authentication
Each request in the API must have the **OAuth Consumer Key** and the **OAuth Token** of the client.
For more information on authentication, access the [How to authenticate an application](/v3-32/docs/a2a-how-to-authenticate-an-application) document.

## Methods
### List all related users
#### Request
To access a list of related users registered in senhasegura, send a request to the following endpoint:

```
GET /iso/user/related
```

#### Return
Returns a list of related users registered in senhasegura and a message with information about the retrieval process.

**Response parameters**



| Field | |Type | Description | Example |
| --- |---|--- | --- | --- |
|`relatedUsers`| | Array of related users| List with all the related users and their information.| 
|| `id` | Int | Related user’s unique identification code associated with each entry in the Related user table. This value is automatically assigned by senhasegura when [creating a related user](/v3-32/docs/a2a-pam-core-create-or-update-a-related-user). | 1 | 
| |`name` | String | The name assigned to the related user.  | ademirdiniz |
| |`username` | String | User identification name registered in senhasegura. | adiniz |

**Expected response**
```
HTTP/1.1 200 OK
```
```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "5 related users found",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "5 related users found",
        "erro": false,
        "cod_erro": 0
    },
    "relatedUsers": [
        {
            "id": "1",
            "name": "ademirdiniz",
            "username": "adiniz"
        },
        {
            "id": "2",
            "name": "ajoeldiniz",
            "username": "adiniz"
        },
        {
            "id": "3",
            "name": "ademir",
            "username": "adiniz"
        },
        {
            "id": "4",
            "name": "ajdiniz",
            "username": "adiniz"
        },
        {
            "id": "5",
            "name": "dedas",
            "username": "dalmeida"
        }
    ]
}
```
### List a related user
#### Request
To access information about a related user registered in senhasegura, send a request to the following endpoint:

```
GET /iso/user/related/[id]
```
| Field | Type |Required| Description | Example |
| --- |---|--- | --- |  --- | 
| `id` | Int |Yes| Related user’s unique identification code associated with each entry in the Related User table. This value is automatically assigned by senhasegura when creating a related user. | 3 | 

#### Return
Returns a related user registered in senhasegura based on its `id` and a message with information about the retrieval process.

**Expected response**

```
HTTP/1.1 200 OK
```

```
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
        "id": "3",
        "name": "ademir",
        "username": "adiniz"
    }
}
```

**In case of error - user not found**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1005: User does not exist",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1005: User does not exist",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1005,
        "message": "1005: User does not exist",
        "detail": null
    }
}
```