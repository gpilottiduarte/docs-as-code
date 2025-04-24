# GET | List all API secrets

Access information of API secrets stored **MySafe**.

## Request

`GET` `api/mysafe/secretapi`

## Request parameters

Send the parameters below as **query** in the URL.

* `tag` - string - Filters API secrets by the tag registered.
*   `identifier_code` - string - Filters API secrets by their identifier.

    #### Example request

`GET` `{{url}}api/mysafe/secretapi` - Lists all API secrets.

`GET` `{{url}}api/mysafe/secretapi?tag=cloud` - Lists API secret(s) registered with the `tag`= `cloud`.

`GET` `{{url}}api/mysafe/password?identifier_code=12534` - Lists API secret(s) registered with the `identifier_code`= `12534`.

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
    "api_secret_on_list": [
        {
            "identifier": "3",
            "name": "GCP1",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "4",
            "name": "GCP",
            "need_justify": "1",
            "need_approval": "1",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "5",
            "name": "GCP1",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        }
    ]
}
```

### Reponse body fields

• `api_secret_on_list` - array of objects - Data of the stored API secrets.\
&#x20;   → `identifier` - int - API secret unique identification code.\
&#x20;   → `name` - string - Name assigned to the API secret.\
&#x20;   → `can_view` - string - Permission to view the API secret.\
&#x20;   → `can_write` - string - Permission to edit the API secret.

## Errors

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

Possible causes: failure in your application authentication with the Segura server or incorrect URL.\


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
