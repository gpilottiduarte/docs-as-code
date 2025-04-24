# POST | Update API secret

Update an API secret in **MySafe**.

## Requirements

* Permission to edit the API secret.

## Request

`PUT` `api/mysafe/secretapi/update/[identifier]`

## Request parameters

Send the parameter below in the **path** of the URL.

`identifier` - int - required - API secret unique identification code.Note: this value is automatically assigned by Segura in [POST | Create API secret](../../../../../v4/docs/api-post-create-api-secret/) and is obtained in the response to the [GET | List all API secrets](../../../../../v4/docs/api-get-list-all-api-secrets/).\
Send the parameters you want to update in the request body.

* `name` - string - Name assigned to the API secret.

\
\*`url` - string URL of the website where the API secret will be used.\
\*`client_id` - string - ID of the client application.\
\*`client_secret` - string - The secret used to the authenticate the application.\
\*`identifier_code` - string - Unique string defined by the user to identify the API secret.\
\*`tags` - string - Keywords associated with the API secret.\
\*`notes` - string - Observations about the API secret.\
\*`method` - string - The HTTP method to be used in the API call.\
\*`users_allowed` - array of objects - Data of the users with access to the API secret.\
&#x20;   →`username` - string - Name of the user with API secret access permission.\
&#x20;   →`can_edit` - boolean - Editing permission.    Nota: if left empty, users will have view-only permission.\
:::(Warning) (Attention)\
Users with `can_edit` = `true` permission can disable the API secret.\
:::\
\*`groups_allowed` - array of objects - Data of the groups with API secret access.    →`name` - string - Name of the group with API secret access permission.\
&#x20;   →`can_edit` - boolean - Editing permission.    Note: if left empty, group members will have view-only permission.\
:::(Warning) (Attention)\
Group members with `can_edit` = `true` permission can disable the API secret.\
:::

### Example request

`PUT` `{{url}}api/mysafe/secretapi/update/43`

```json
{
    "name": "GCP1",
    "url": "https://gcp1.com",
    "client_id": "hb455f7g8fg9dfg8yt845bxxku",
    "client_secret": "hy746**********t4tr",
    "identifier_code": "gcp7852",
    "tags": "Cloud1",
    "notes": "Access details for this API secret",
     "users_allowed": [
        {
            "username" : "alices",
            "can_edit" : true
        }
    ],
    "groups_allowed": []
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
        "message": "Api secret successfully registered",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Api secret successfully registered",
        "erro": false,
        "cod_erro": 0
    },
    "api_entity": {
        "identifier": "43",
        "name": "GCP",
        "url": "https://gcp.com",
        "client_secret": "gf5464******g8fds",
        "client_id": "gf455f7g8fb5dfg8fd545bffbv",
        "identifier_code": "hyga125",
        "method": "get",
        "tags": "Cloud",
        "notes": "Access details",
        "users_allowed": [
            {
                "username": "pduarte",
                "can_edit": true
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

Mensagem: "1005: Api secret not found"

Possible cause: the `identifier` parameter provided hasn't returned an API secret.\


Solution: provide a new value for the `identifier` and resend the request.

***

</details>

<details>

<summary>500 - Internal Server Error.</summary>

***

Message: "Unexpected error."\


Possible cause: the error is on the Segura server.\


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
