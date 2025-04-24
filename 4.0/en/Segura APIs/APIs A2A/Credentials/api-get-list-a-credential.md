# GET | List a credential

Access information of a credential registered in **PAM Core**.

## Prerequisites

* Authorization with **access** permission to **PAM Core** granted by the administator in **A2A**.\
  More information in [How to manage authorizations in A2A](../../../../../v4/docs/how-to-manage-authorizations-in-a2a/).
* Credential created in **PAM Core**.\
  More information in [POST | Create credential](../../../../../v4/docs/api-post-create-credential/).

## List credential by `id` - Request

`GET` `api/pam/credential/[id]`

### Request parameters

Send the parameter below in the **path** of the URL.

* `id` - int - required - Unique identification code of the credential.Note: this value is automatically assigned by Segura in [POST | Create credential](../../../../../v4/docs/api-post-create-credential/) and is obtained in the response to the [GET | List all credentials](../../../../../v4/docs/api-get-list-all-credentials/) request.

### Example request

`GET` `{{url}}/api/pam/5`

## Response

```json
HTTP/1.1 200 OK
```

```json
{
    "response": {
        "status": 200,
        "mensagem": "Credential 5",
        "erro": false,
	 "detail": "",
        "message": "Credential 5",
        "error": false,
	 "error_code": 0
    },
    "credential": {
        "id": "5",
        "identifier": "robot-test-5",
        "username": "credential_5",
        "password": "secret@2504",
        "content": "secret@2504",
        "hostname": "destktop-91.com",
        "parent_credential_cod": null,
        "parent_credential": null,
        "additional": "CREDADD01",
        "domain": "",
        "ip": "172.10.10.90",
        "port": "22",
        "model": "Ubuntu",
        "expiration_time": "2021-01-16T17:31:39"
    }
```

## List credential by `username@hostname` - Request

`GET` `api/pam/credential/[username@hostname]`

### Request parameters

Send the parameter below in the **path** of the URL.

*   `username@hostname` - int - required - `username` and `hostname` associated with the credential separated by an @ symbol.Note: these values are provided by the user in [POST | Create credential](../../../../../v4/docs/api-post-create-credential/) and are obtained in the response to the [GET | List all credentials](../../../../../v4/docs/api-get-list-all-credentials/) request.

    Example: `credential_5@destktop-91.com`

### Example request

`GET` `{{url}}api/pam/credential_5@destktop-91.com`

:::(Warning) (Attention)\
If the `username` provided has an @ in it, as in `johndoe@Segura`, the endpoint won’t work as expected due to the conflict caused by the presence of two @ symbols.\
:::

```json
HTTP/1.1 200 OK
```

```json
{
    "response": {
        "status": 200,
        "mensagem": "Credential 5",
        "erro": false,
	 "detail": "",
        "message": "Credential 5",
        "error": false,
	 "error_code": 0
    },
    "credential": {
        "id": "5",
        "identifier": "robot-test-5",
        "username": "credential_5",
        "password": "secret@2504",
        "content": "secret@2504",
        "hostname": "destktop-91.com",
        "parent_credential_cod": null,
        "parent_credential": null,
        "additional": "CREDADD01",
        "domain": "",
        "ip": "172.10.10.90",
        "port": "22",
        "model": "Ubuntu",
        "expiration_time": "2021-01-16T17:31:39"
    }
```

## Response body fields

* `credential` - object - Credential data.

&#x20;   → `id` - int - Unique identification code of the credential.\
&#x20;   →`identifier` - string - Unique string defined by the user or Segura for identifying the credential.    Note: this value can be updated through the `POST` `api/pam/credential` endpoint.\
&#x20;   →`username` - string - Username assigned to the credential.\
&#x20;   →`expiration` - string - Expiration date and time of the credential based on ISO 8601.\
&#x20;   →`password` - string - Password assigned to the credential.\
&#x20;   →`content` - string - Password assigned to the credential.\
&#x20;   →`hostname` - string - Hostname of the device associated with the credential.\
&#x20;   →`parent_credential_cod` - string - Parent credential’s identifier.\
&#x20;   →`parent_credential` - string - Parent credential.    Note: when you select a parent credential, the child credential will assume the same password as the parent credential. Whenever there is a manual or automated password change on the parent credential, the child credential will also be modified and assume the same password as the parent credential.\
&#x20;   →`additional` - string - Additional information about the credential.\
&#x20;   →`domain` - string - Domain’s name or abbreviation.\
&#x20;   →`ip` - string - IP address of the device associated with the credential.\
&#x20;   →`port` - string - Port of the device associated with the credential.\
&#x20;   →`port` - string - Port of the device associated with the credential.\
&#x20;   →`model` - string - Device model.\
&#x20;   →`expiration_time` - string - Date and time of credential expiration based on ISO 8601.    Example: `2024-05-16T17:31:31-03:00`\


### Errors

<details>

<summary>400 - Bad Request</summary>

***

Message: "1007: Credential not found"\


Possible cause: the credential wasn’t found.\


Solution: check if the values for the parameters used to search for the credential were correct and resend the request.

***

Message: "1009: No access to credential"\


Possible cause: you’re not authorized to access the credential.\


Solution: ask the administrator to check your permission to access the credential.

***

Message: "1010: The item is not a credential"\


Possible cause: the value for the `id` parameter doesn’t belong to a credential.\


Solution: check the `id` and resend the request.

***

</details>

<details>

<summary>404 - Not Found</summary>

***

Message: "Resource sub not found"\


Possible cause: the URL or the requested resource isn’t correct.\


Solution: check the URL and make sure the parameter is correct.

***

</details>

<details>

<summary>500 - Internal Server Error</summary>

***

Message: "Unexpected error."\


Possible cause: the error is in the Segura server.\


Solution: contact the support team for more information.

***

Message: "You are not authorized to access this resource."

Possible cause: you don’t have the authorization to access this resource.\


Solution: ask the administrator to check your permission to access the PAM Core resources in A2A.

***

</details>

<details>

<summary>Client authentication failed</summary>

***

Message: "Client authentication failed."

Possible cause: failure in your application authentication with the Segura server.\


Solution: check the authentication parameters such as `Access Token URL`, `Client ID` e `Client secret` and request a new access token.

***

</details>

<details>

<summary>Invalid signature</summary>

***

Message: "Invalid signature"

Possible cause: failure in recognizing the URL of the client application.

Solution: check the URL of the client application and resent the request.

***

</details>

<details>

<summary>No route matched with those values</summary>

***

Message: "No route matched with those values."

Possible cause: the authorization header is missing in the API request.\


Solution: request a new access token.

***

</details>

<details>

<summary>Request timed out</summary>

***

Message: "Request timed out."

Possible cause: the request time has expired.\


Solution: check the connectivity between the source of the request and the Segura server.

</details>
