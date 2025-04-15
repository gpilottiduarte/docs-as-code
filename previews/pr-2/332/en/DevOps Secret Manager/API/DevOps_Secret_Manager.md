# DevOps Secret Manager

The senhasegura **DevOps Secret Management (DSM)** offers a quick and secure way for tools and applications to request confidential information such as secrets, credentials, and other sensitive data used on the DevOps lifecycle.

This document provides guidance for DevOps teams that need to integrate with senhasegura to manage all secrets used in their pipeline.

In this document, the following DevOps functions will be covered:

* Query a secret.
* Create or update a secret.
* Create or update an application.	
* Provision a credential.
* Remove a credential
* Deactivate an authorization.

Also access the [APIs for automations](/v3-32/docs/dsm-apis-for-automations) and [Encryption key management API](/v3-32/docs/dsm-encryption-key-management-api) documentation.




## Query secret

``` 
GET https://vault_url/iso/dapp/application 
``` 
The application method queries all secrets linked to an application authorization.

### Response

| **Field** |  Type |  Description |
| --- | --- | --- |
| **name** |  String |  Application name |
| **description** |  String |  Application description |
| **tags** |  String |  Tags that identify the application |
| **system** |  String |  Secret system |
| **environment** |  String |  Secret environment |
| **secret_id** |  Integer |  Secret ID |
| **secret_name** |  String |  Secret Name |
| **identity** |  String |  Secret identifier |
| **version** |  String |  Secret version |
| **expiration_date** |  Date/Time |  Secret expiration date |
| **engine** |  String |  Secret engine |
| **data** |  String |  Secret values |

```json
{
    "response": {
        "status": 200,
        "mensagem": "Application 5",
        "erro": false,
        "message": "Application 5",
        "error": false
    },
    "application": {
        "name": "postman",
        "description": null,
        "tags": [
            ""
        ],
        "system": "back",
        "environment": "test",
        "secrets": [
            {
                "secret_id": "106",
                "secret_name": "application5",
                "identity": "application5",
                "version": "",
                "expiration_date": "",
                "engine": "Kubernetes",
                "data": [
                    {
                        "hostname": "application5_v_test",
                        "username": "ADMIN_V_USR",
                        "password": "ADMIN_V_PW",
                        "additional_information": "ADMIN_V_SCHEMA",
                        "ip": "app.application.com"
                    },
                    {
                        "access_key_id": "LKU5YC6QWAT487S4KEK",
                        "secret_access_key": "sack10821du07f9sacfsdaasdf",
                        "TTL": null
                    },
                    {
                        "my_key_name": "my_key_value",
                        "my_key_name_2": "my_key_value_2"
                    }
                ]
            }
        ]
    }
}
```

### Response with SSH as secret

```json
{
    "response": {
        "status": 201,
        "mensagem": "Secret created successfully.",
        "erro": false,
        "cod_erro": 0,
        "message": "Secret created successfully.",
        "error": false,
        "error_code": 0
    },
    "application": {
        "name": "postman",
        "description": "teste",
        "tags": [
            "abc",
            "def",
            "teste"
        ],
        "system": "inetconfig",
        "environment": "stage",
        "secrets": [
            {
                "secret_id": "3",
                "secret_name": "state_secret",
                "identity": "cart/americanas/npf/cassandra",
                "version": "205",
                "description": "Chamada de API",
                "expiration_date": "2022-08-18 11:10:00",
                "engine": "GitLab",
                "data": [
                    {
                        "HOSTNAME": "AWS Gateway",
                        "USERNAME": "user",
                        "CONNECTION_STRING": "mongodb://api-server/auth",
                        "private_key": "An error occurred while encrypting the text",
                         "public_key": "ssh-rsa h+FntWwPBOwYUM27FOFUVBwf57Lgq+ZMOEmkfsN7T4QrrwBswkL+CDws0DmOdJGsZLl47O0HYpds6FQ/roXb2AXP3X4sCrDtAs4tN6bcDd3WgUKIuPns+qXejHq+5wsxBJdWUMyQfCQOwM0j7dsIK4rnGJlh7jAM4ROs/dXqkZ0Y7fbE2PPlomXvAKaF9GmHMcLB56j5o2K8aNc7YrTiLHc5NXX+GlJqOB5UWfiRHoDGP/Cr6B",
                        "PASSWORD": "5RxfSKds+djXZ9tR3uEJ8fppXaKYmf2+oI4CkFiaIVH0jZWV7T//s+PY8jgdP1WkbmYqrqHXpMqUjNs0+qI/9vYBvRkEb4Y0CpcT4jpFw2Hqbs+dc+T8RNdKkWq+daVh0Gf9mQIS7VMIjaR+O+iqSYkBsbZYPp7qsJ0+8txfwT==vPj",
                        "ip": "aws.amazon.com"
                    }
                ]
            }
        ]
    }
}
``` 

## Create or update a secret

```
POST https://vault_url/iso/sctm/secret
```

### Parameters
| **Field** | Type | Description |
| --- | --- | --- |
| **name** | String | Secret Name |
| **identity** | String | Secret's Identity |
| **expiration_Date** | Date/time | Secret's deactivation date |
| **description** | String | Secret Description |
| **engine** | String | Secret's Engine must be a valid engine registered in senhasegura |
| **renew_cloud_time** | Int | Sets the time to renew cloud access keys in minutes. If omitted is ignored, but with empty array, will disable auto-renew |
| **renew_credential_time** | Int | Set the time to renew credentials in minutes. If omitted is ignored, but with empty array, will disable auto-renew |
| **renew_ephemeral_credential_time** | Int | Sets the time to renew ephemeral credentials in minutes. If omitted is ignored, but with empty array, will disable auto-renewal |
| **date** | String | Must be valid base64 encoded json as in Data Example|

#### Data Example

```json
{
    access_keys:
    [
        {
            access_key:
            {
                type: "aws",
                fields:
                {
                    access_key_id: "AKIAREVEFYNPPAOT3PF6",
                    access_key_id_label: "AWS_ACCESS_KEY_ID",
                    secret_access_key: "AStrongPass",
                    secret_access_key_label: "AWS_SECRET_ACCESS_KEY",
                }
            }
        },
    ],
    credentials:
    [
        {
            credential:
            {
                fields:
                {
                    user: "cred_a",
                    user_label: "USERNAME",
                    host: "aws.amazon.com",
                    host_label: "HOSTNAME",
                    password: "StrongPass",
                    password_label: "PASSWORD",
                    additional_information: "mongodb://api-server/auth",
                    additional_information_label: "CONNECTION_STRING",
                }
            }
        },
        {
            credential:
            {
                fields:
                {
                    user: "an_username",
                    user_label: "USERNAME",
                    host: "an_ip",
                    host_label: "HOSTNAME",
                    password: "StrongPass",
                    password_label: "PASSWORD",
                    additional_information: "the_additional_info",
                }
            }
        },
    ]
}
```

### Response

| **Field** |  Type |  Description |
| --- | --- | --- |
| **name** |  String | Application Name |
| **description** |  String | Application Description |
| **tags** |  String | Application tag |
| **system** |  String | Secret System |
| **environment** |  String |  Secret Environment |
| **secret_id** |  Integer |  Secret ID |
| **secret_name** |  String |  Secret Name |
| **identity** |  String |  Secret Identifier |
| **version** |  String |  Secret version |
| **expiration_date** |  Date/Time | Secret Expiration Date |
| **engine** |  String |  Secret Engine |
| **data** |  String |  Secret Values |

```json
{
    "response": {
        "status": 201,
        "mensagem": "Secret created successfully.",
        "erro": false,
        "cod_erro": 0,
        "message": "Secret created successfully.",
        "error": false,
        "error_code": 0
    },
    "application": {
        "name": "postman",
        "description": "teste",
        "tags": [
            "abc",
            "def",
            "teste"
        ],
        "system": "inetconfig",
        "environment": "stage",
        "secrets": [
            {
                "secret_id": "7",
                "secret_name": "state_secret",
                "identity": "example_2",
                "version": "2",
                "description": "Chamada de API",
                "expiration_date": "2022-08-18 11:10:00",
                "engine": "GitLab",
                "data": [
                    {
                        "AWS_ACCESS_KEY_ID": "AKIAREVEFYNPPAOT3PF6",
                        "AWS_SECRET_ACCESS_KEY": "fd/ZmmciA4d8CqkXIzK8l2oWrUY7+fds/aasdf+WwP5cTAQW5mpr9XAHiGS1zkRQEUvJ7pta3ABrAeRt3QH6UuuGwPunATFdhFvAG/lTlrby6z+dfdfas/cKUzQpHpQE0UNxNwzCauRpbPDOUzMnpRopbyGQDzdkN0uXSXJLh3kraX+/qQ/v3riN1pB+Wuzd4zvxLfeH6oA==",
                        "TTL": ""
                    },
                    {
                        "APP": "Postman",
                        "CONNECTION_STRING": "mongodb://api-server/auth",
                        "DATE": "date",
                        "HOSTNAME": "an_ip",
                        "PASSWORD": "StrongPass",
                        "USERNAME": "an_username"
                    }
                ]
            }
        ]
    }
}
```

## Create or update an application

``` 
POST https://vault_url/iso/dapp/application 
```

### Parameters

| **Field** | Type | Description |
| --- | --- | --- |
| **name**| String | Secret Name |
| **identity** | String | Secret Identity |
| **expiration_Date** | Date/Time | Secret's deactivation date |
| **description** | String | Secret Description |
| **engine** | String | Secret's Engine must be a valid engine registered in senhasegura |
| **renew_cloud_time** | Int | Set renewal time to cloud access keys in minutes. If omitted will disable  auto-renewal |
| **renew_credential_time** | Int | Set renewal time to credentials in minutes. If omitted will disable auto-renewal | 
| **renew_ephemeral_credential_time** | Int | Set renewal time to ephemeral credentials in minutes. If omitted will disable auto-renewal |
| **data** | String | Must be valid base64 encoded json |

### Response

| **Field** |  Type |  Description |
| --- | --- | --- |
| **Unique key** | String | Unique identifier of an authorization, if the value is sent, the environment and system fields will be ignored for the authorization search |
| **Application** | String | Application Name |
| **System** | String | System to which the authorization belongs, used for consultation, only used for writing in new authorizations |
| **Environment** | String | Environment to which the authorization belongs, used for consultation, only used for writing in new authorizations |
| **Description** | String | Application description |
| **Authentication Method** | String |  Application authentication and authorization method, this parameter is only used when creating the application, when updating it is ignored |
| **Line of Business** | String | Defines the application's line of business |
| **Application Type** | String | Defines the application type |
| **Tags** | String | Define applications tags |
| **Amazon ARNs (for AWS Authentication)** |  String | Define application ARNs |
| **Cloud Dynamic Provising profile** | String |  Defines application cloud dynamic provisioning profiles |
| **Credential Dynamic Provising Profile (device and profile)** |  Array | Defines application ephemeral credential dynamic provisioning profiles |
| **Authorized Resources** | String | Defines the authorized resources of the authorization, used only when creating the authorization |
| **Expiration date/time** | Date/Time |  Secret expiration date, used only when creating the authorization |
| **Enable Encryption of sensitive information?** |  Boolean | Defines encryption of sensitive authorization data, used only in authorization creation |
| **Allowed IPs** | String | Defines the allowed IPs of the authorization, used only when creating the authorization |
| **Allowed HTTPS refers** | String | Defines the allowed HTTP referrers of the authorization, used only when creating the authorization |
| **Certificate Fingerprint** | String | Defines the fingerprint of the authorization certificate, used only when creating the authorization |

### Response 

| **Field** | Type | Description |
| --- | --- | --- |
| **id** | String | Application ID | 
| **signature** | String | Application Signature |

```json
{
    "response": {
        "status": 200,
        "mensagem": "Application updated: (4) postman | Authorization found: (6)",
        "erro": false,
        "cod_erro": 0,
        "message": "Application updated: (4) postman | Authorization found: (6)",
        "error": false,
        "error_code": 0
    },
    "id": "applicationID",
    "signature": "signature"
}
```

## Provision a credential
 
``` 
POST https://vault_url/iso/coe/dapp/provision 
``` 
Create a new credential secret to be used on a container.

### Parameters

| **Field** |  Type |  Description |  Required |
| --- | --- | --- | --- |
| **pod_name** |  String |  Name of the pod that will use the credential |  Yes |
| **deploy** |  String |  Name of the deploy that will use the credential |  Yes |
| **namespace** |  String |  Namespace of the container that will use the credential |  Yes |

### Response

| **Field** |  Type |  Description |
| --- | --- | --- |
| **name** |  String | Application name |
| **description** |  String | Application description |
| **tags** |  String |  Tags that identify the application |
| **system** |  String | Sistema da secret |
| **environment** |  String | Ambiente de secret |
| **secret_id** |  Integer | ID da secret |
| **secret_name** |  String | Nome da secret |
| **identity** |  String | Identificador da secret |
| **version** |  String | Versão da secret |
| **expiration_date** | Date/Time | Data de expiração da secret |
| **engine** |  String | Engine da secret |
| **data** |  String | Valor da secret |

```json
{
    "response": {
        "status": 200,
        "mensagem": "Application 6",
        "erro": false
    },
    "application": {
        "name": "runb",
        "description": null,
        "tags": [
            ""
        ],
        "system": "senhasegura",
        "environment": "lab",
        "secrets": [
            {
                "secret_id": "3",
                "secret_name": "secure-demo",
                "identity": "secure-demo",
                "version": "",
                "expiration_date": "",
                "engine": "Kubernetes",
                "data": {
                    "APP_VAR1": "fX6v8vh7TADY",
                    "APP_VAR2": "vlln0XkBNWIk",
                    "APP_VAR3": "7qWgm1EBFnQb",
                    "APP_DB_PASSWORD": "4i8Vm0khqTWs",
                    "APP_SECRET": "GSePWjXyd91K"
                }
            }
        ]
    }
}
```

## Remove a credential
 
``` 
POST https://vault_url/iso/coe/dapp/deprovision 
``` 
Remove a credential secret to be used on a container.

### Parameters

| **Field** |  Type |  Description |  Required |
| --- | --- | --- | --- |
| **pod_name** |  String |  Name of the pod that will use the credential |  Yes |
| **deploy** |  String |  Name of the deploy that will use the credential |  Yes |
| **namespace** |  String |  Namespace of the container that will use the credential |  Yes |
| **secret_id** |  Integer |  Secret ID |  Yes |

## Delete an authorization

Deactivates an authorization for an application.

```
DELETE https://vault_urliso/dapp/application/authorization 
```

### Response
```json
{
"code": 200,
"response": {
"status": 200,
"message": "Authorization deleted successfully.",
"error": false,
"error_code": 0,
"detail": "",
"mensagem": "Authorization deleted successfully.",
"erro": false,
"cod_erro": 0
}
}
```

## Errors

**404 - Authorization not found**

```json
{
"code": 404,
"response": {
"status": 404,
"message": "Resource sub not found",
"error": true,
"error_code": 4,
"detail": "",
"mensagem": "Resource sub not found",
"erro": true,
"cod_erro": 4
}
}
```
*** 
**401 - The authorization you want to deactivate is already inactive**

```json
{
"code": 401,
"response": {
"status": 401,
"message": "Inactive authorization",
"error": true,
"error_code": 1,
"detail": "",
"mensagem": "Inactive authorization",
"erro": true,
"cod_erro": 1
}
}
```
*** 
**You’re not authorized to perform actions on this API** 

```json
{
"message": "no Route matched with those values"
}
```


