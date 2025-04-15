# POST | Secret

Allows you to create or update a secret.

### Request

```
POST https://vault_url/iso/sctm/secret
```

### Request Examples

```json
{
    "identity": "secret-postman",
    "name": "secret-postman",
    "engine": "Generic",
    "expiration_date": "",
    "description": "secret created by postman",
    "data": {
        "hostname": "masked_hostname",
        "username": "masked_username",
        "password": "masked_password",
        "additional_information": "masked_additional_information",
        "ip": "masked_ip"
    }
}
```

It's also possible to add credentials to the secret. For this, the API will use the `date field:{{secret}}` as mentioned. To use this field, you must use the following script:

```json
{
    "access_keys": [
        {
            "access_key": {
                "type": "aws",
                "fields": {
                    "access_key_id": "MASKED_ACCESS_KEY_ID",
                    "access_key_id_label": "AWS_ACCESS_KEY_ID",
                    "secret_access_key": "MASKED_SECRET_ACCESS_KEY",
                    "secret_access_key_label": "AWS_SECRET_ACCESS_KEY"
                }
            }
        }
    ],
    "credentials": [
        {
            "credential": {
                "fields": {
                    "user": "masked_user_1",
                    "user_label": "USERNAME",
                    "host": "masked_host_1",
                    "host_label": "HOSTNAME",
                    "password": "masked_password_1",
                    "password_label": "PASSWORD",
                    "additional_information": "masked_additional_info_1",
                    "additional_information_label": "CONNECTION_String"
                }
            }
        },
        {
            "credential": {
                "fields": {
                    "user": "masked_user_2",
                    "user_label": "USERNAME",
                    "host": "masked_host_2",
                    "host_label": "HOSTNAME",
                    "password": "masked_password_2",
                    "password_label": "PASSWORD",
                    "additional_information": "masked_additional_info_2"
                }
            }
        }
    ]
}
```

This script should be used in the **scripts** field inside the Postman or another API client you are using.

### Parameters for the request

| Field | Type | Description |
| :---- | :---- | :---- |
| `Name` | String | Secret’s name. |
| `Identity` | String | Secret's identity. |
| `Expiration_Date` | String | Secret’s expiration date. |
| `Description` | String | Secret description. |
| `Engine` | String | The Secret’s engine must be a valid engine registered in Segura. |
| `renew_cloud_time` | Integer | Time, in minutes, to renew cloud access keys. If omitted, disable auto-renewal. |
| `renew_credential_time` | Integer | Time, in minutes, to renew credentials. If omitted, disables auto-renewal. |
| `renew_ephemeral_credential_time` | Integer | Time, in minutes, to renew credentials. If omitted, disables auto-renewal. |
| `Date` | String | Must be a valid base64 encoded `.json`. |

### Example response

```json
{
    "response": {
        "status": 201,
        "message": "Secret created successfully.",
        "error": false,
        "error_code": 0
    },
    "application": {
        "name": "postman",
        "description": "test",
        "tags": [
            "abc",
            "def",
            "test"
        ],
        "system": "inetconfig",
        "environment": "stage",
        "secrets": [
            {
                "secret_id": "7",
                "secret_name": "state_secret",
                "identity": "example_2",
                "version": "2",
                "description": "API Call",
                "expiration_date": "2022-08-18 11:10:00",
                "engine": "GitLab",
                "data": [
                    {
                        "AWS_ACCESS_KEY_ID": "MASKED_ACCESS_KEY_ID",
                        "AWS_SECRET_ACCESS_KEY": "MASKED_SECRET_ACCESS_KEY",
                        "TTL": ""
                    },
                    {
                        "APP": "Postman",
                        "CONNECTION_String": "mongodb://api-server/auth",
                        "DATE": "date",
                        "HOSTNAME": "masked_hostname",
                        "PASSWORD": "masked_password",
                        "USERNAME": "masked_username"
                    }
                ]
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
| `tags` | String | Application’s identification tags. |
| `system` | String | Secret's system. |
| `environment` | String | Secret's environment. |
| `secret_id` | Integereger | Secret's ID. |
| `secret_name` | String | Secret's name. |
| `Identity` | String | Secret's identifier. |
| `version` | String | Secret's version. |
| `expiration_date` | String | Secret’s expiration date. |
| `engine` | String | Secret's engine. |
| `date` | String | Secret's value. |