# GET | Provision

Allows you to create a new secret for a credential.

# Request

```
Get https://vault_url/iso/coe/dapp/provision
```

### Request Example

```
{
    "identity": "secret-postman"
}
```

### Parameters for the request

| Field | Type | Description |
| :---- | :---- | :---- |
| `pod_name` | String | Capsule’s name that will use the credential. |
| `deploy` | String | Deploy name that will use the credential. |
| `namespace` | String | Container's namespace that will use the credential. |

### Response examples

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Secret provisions done.",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Secret provisions done.",
        "erro": false,
        "cod_erro": 0
    },
    "tenant": "Segura",
    "secret": {
        "secret_id": "213",
        "secret_name": "secret-postman",
        "identity": "secret-postman",
        "version": "7",
        "description": "secret created by postman",
        "expiration_date": "",
        "engine": "Generic",
        "renew_cloud_time": false,
        "renew_credential_time": false,
        "renew_ephemeral_credential_time": false,
        "data": [
            {
                "hostname": "masked_hostname_1",
                "username": "masked_username_1"
            },
            {
                "hostname": "masked_hostname_2",
                "username": "masked_username_2",
                "password": "masked_password",
                "additional_information": null,
                "ip": "masked_ip"
            }
        ]
    }
}
```

### Parameters for the response

| Field | Type | Description |
| :---- | :---- | :---- |
| `name` | String | Application's name. |
| `description` | String | Application’s description. |
| `tags` | String | Tags that identify the application. |
| `system` | String | System’s secret. |
| `environment` | String | Environment’s secret. |
| `secret_id` | Integereger | Secret's ID. |
| `secret_name` | String | Secret's name. |
| `identifier` | String | Secret’s identifier. |
| `version` | String | Secret's version. |
| `expiration_date` | String | Secret’s expiration date. |
| `engine` | String | Secret’s engine. |
| `value` | String | Secret's value. |
