# Create or update a related user

This document presents how to create or update, via API, related users’ information registered in senhasegura, the available endpoints, the parameters needed, example requests, and responses on success or in case of errors.

## Authorization
To get started, make sure **Users** is listed under **Authorized resources** in your **A2A** module. For more information on authorization, access the [How to create an authorization for an application](/v3-32/docs/a2a-how-to-create-an-authorization-for-an-application) document.

## Authentication
Each request in the API must have the **OAuth Consumer Key** and the **OAuth Token** of the client.
For more information on authentication, access the [How to authenticate an application](/v3-32/docs/a2a-how-to-authenticate-an-application) document.

## Methods
### Create a related user
#### Request
To create a related user in senhasegura, send a request to the following endpoint:

```
POST /iso/user/related
```

#### Request parameters

**Body**

| Field |Type |Required| Description | Example |
| --- |---|--- | --- |  --- | 
|`name` | String |Yes |The name assigned to the related user being created.  | ademirdiniz |
|`username` | String | Yes|User identification name registered in senhasegura. | |adiniz |

**Example request**

```
{ 
    "name": "ademirdiniz",
    "username": "adiniz"
}
```
#### Return
Creates a related user in senhasegura and returns a message with information about the creation process.

**Expected response**

```
HTTP/1.1 200 OK
```

```
{
    "response": {
        "status": 200,
        "mensagem": "Related user successfully registered!",
        "erro": false,
        "message": "Related user successfully registered!",
        "error": false,
    },
    "relatedUsers": {          
        "id": 3,
        "name": "ademirdiniz",
        "username": "adiniz"
      }
}
```

**In case of error - missing a required parameter**

```
HTTP/1.1 400 Bad Request
```

```
{
    "response": {
        "status": 400,
        "mensagem": "1001: Parameter 'username' was not informed!",
        "erro": true,
        "cod_erro": 0,
        "message": "1001: Parameter 'username' was not informed!",
        "error": true,
        "error_code": 0
    },
    "exception": {
        "code": 1001,
        "message": "1001: Parameter 'username' was not informed!",
        "detail": ""
    }
```

### Update a related user
#### Request
To update a related user registered in senhasegura, send a request to the following endpoint:

```
PUT /iso/user/related/id
```
#### Request parameters
**Path**

| Field |Type |Required| Description | Example |
| --- |---|--- | --- |  --- | 
|`id` | Int |Yes |Related user’s unique identification code associated with each entry in the Related users table. This value is automatically assigned by senhasegura when [creating a related user](/v3-32/docs/a2a-pam-core-create-or-update-a-related-user#create-a-related-user) and is obtained in the response to the [List all related use](/v3-32/docs/a2a-pam-core-list-related-users)rs request. | 3 |

**Body**

:::(Info) (Info)
When sending an update request, it’s not necessary to include parameters you don’t want to update.
:::
| Field |Type |Required| Description | Example |
| --- |---|--- | --- |  --- | 
|`name` | String |Yes |The name assigned to the related user that is being updated. | Ademir Diniz |
|`username` | String | Yes|User identification name registered in senhasegura. | |addiniz |

**Example request**

```
{ 
    "id" : 3,
    "name": "Ademir Diniz",
    "username": "addiniz"
}
```

#### Return
Updates a related user registered in senhasegura based on its `id` and returns a message with information about the updating process.

**Expected response** 

```
HTTP/1.1 200 OK
```

```
"response": {
        "status": 200,
        "mensagem": "Related user successfully updated!",
        "erro": false,
        "cod_erro": 0,
        "message": "Related user successfully updated!",
        "error": false,
        "error_code": 0
    },
    "relatedUsers": {
        "id": "3",
        "name": "Ademir Diniz",
        "username": "aadiniz"
    }
```

**In case of error - missing a required parameter**

```
HTTP/1.1 400 Bad Request
```

```
{
    "response": {
        "status": 400,
        "mensagem": "1001: Parameter 'username' was not informed!",
        "erro": true,
        "cod_erro": 0,
        "message": "1001: Parameter 'username' was not informed!",
        "error": true,
        "error_code": 0
    },
    "exception": {
        "code": 1001,
        "message": "1001: Parameter 'username' was not informed!",
        "detail": ""
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