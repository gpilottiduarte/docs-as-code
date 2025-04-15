# GET | Secret

## Consult a secret

This endpoint allows retrieval of application metadata and provides a detailed inventory of the secrets associated with the specific instance. The functionality allows programmatic access to security settings and stored credentials.

### Request

```
GET https://vault_url/iso/dapp/application
```

### Example response

```json
{
    "response": {
        "status": 200,
        "message": "Application 5",
        "error": false
    },
    "application": {
        "name": "postman",
        "description": null,
        "tags": [],
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

### Example response with SSH with secret

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
                "secret_id": "3",
                "secret_name": "state_secret",
                "identity": "example_identity",
                "version": "205",
                "description": "API Call",
                "expiration_date": "2022-08-18 11:10:00",
                "engine": "GitLab",
                "data": [
                    {
                        "HOSTNAME": "AWS Gateway",
                        "USERNAME": "user",
                        "CONNECTION_String": "mongodb://api-server/auth",
                        "private_key": "*****",
                        "public_key": "ssh-rsa ***** user\n",
                        "PASSWORD": "*****",
                        "ip": "aws.amazon.com"
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
| `tags` | String | Tags that identify the application. |
| `system` | String | System’s secret.. |
| `environment` | String | Environment’s secret. |
| `secret_id` | Integer | Secret's ID. |
| `secret_name` | String | Secret’s name. |
| `identifier` | String | Secret’s identifier. |
| `version` | String | Secret's version. |
| `expiration_date` | Day/Time | Secret’s expiration date. |
| `engine` | String | Secret’s engine. |
| `values` | String | Secret's values. |