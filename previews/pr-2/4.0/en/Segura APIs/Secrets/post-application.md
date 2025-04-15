# GET | Application

Allows you to create or update an application.

## Request

```
GET https://vault_url/iso/dapp/application
```

### Request Example

```json
{
    "application": "APP-SQL",
    "system": "Teste_DSM",
    "environment": "Teste_DSM",
    "authentication_method": "OAuth 2.0",
    "line_of_business": "Core business",
    "application_type": "Security",
    "aws_arns": [],
    "authorized_resources": ["Application", "CI/CD", "Secret Management"],
    "expiration_date": "",
    "encryption_enabled": true,
    "allowed_ips": ["*"],
    "allowed_http_referers": [],
    "certificate_fingerprInteger": "",
    "cloud_profiles": [],
    "credential_profiles": [
        {
            "device": "masked_device",
            "profile": "SQLServer"
        }
    ]
}
```

### Parameters for the request

| Field | Type | Description |
| :---- | :---- | :---- |
| `Name` | String | Secret's name. |
| `identity` | String | Secret's identity. |
| `expiration_Date` | String | Secret’s expiration date. |
| `description` | String | Secret’s description. |
| `Engine` | String | The secret’s engine must be a valid engine registered in Segura. |
| `renew_cloud_time` | Integer | Set the renewal time of cloud access keys in minutes. If omitted, disables auto-renewal. |
| `renew_credential_time` | Integer | Set the renewal time for credentials in minutes. If omitted, disables auto-renewal. |
| `renew_efemeral_credential_time` | Integer | Set the renewal time for temporary credentials in minutes. If omitted, disables auto-renewal. |
| `details` | String | Must be a valid base64 encoded `.json`. |

### Example response

```json
{
    "application": "App-By-API",
    "system": "Masked_System",
    "environment": "Masked_Environment",
    "authentication_method": "OAuth 2.0",
    "line_of_business": "Core business",
    "application_type": "Security",
    "aws_arns": [],
    "authorized_resources": ["Application", "CI/CD", "Secret Management"],
    "expiration_date": "",
    "encryption_enabled": true,
    "allowed_ips": ["*"],
    "allowed_http_referers": [],
    "certificate_fingerprInteger": "",
    "cloud_profiles": [],
    "credential_profiles": [
        {
            "device": "masked_device",
            "profile": "SQLServer"
        }
    ]
}
```

### Parameters for the response

| Field | Type | Description |
| :---- | :---- | :---- |
| `unique_key` | String | Unique identifier of an authorization, if the value is sent, the environment and system fields will be ignored for the authorization search. |
| `application` | String | Application name. |
| `system` | String | System to which the authorization belongs, used for consultation and writing in new authorizations. |
| `environment` | String | Environment to which the authorization belongs, used for consultation and writing in new authorizations. |
| `description` | String | App’s description. |
| `authentication method` | String | Method of authentication and authorization of the application, used only in the creation. |
| `line of business` | String | Defines the application's line of business. |
| `Application type` | String | Defines the type of application. |
| `Tags` | String | Define app tags. |
| `Amazon ARNs (for AWS authentication)` | String | Defines application ARNs. |
| `Cloud dynamic provisioning profile` | String | Defines dynamic cloud provisioning profiles. |
| `Credential dynamic provisioning profile (device and profile)` | Array | Defines dynamic ephemeral credential provisioning profiles. |
| `Authorized resources` | String | Defines the authorized resources of the authorization, used in the creation. |
| `Expiration String` | String | Define the secret expiration date, used when creating the authorization. |
| `Enable Encryption of sensitive information?` | Boolean | Defines the encryption of sensitive authorization data, used in the creation. |
| `Allowed IPs` | String | Defines the allowed IPs of the authorization, used only in the creation. |
| `Allowed HTTPS REFERS` | String | Defines the allowed HTTP referrers of the authorization, used in the creation. |
| `Certificate FingerprInteger` | String | Defines the fingerprInteger of the authorization certificate, used in the creation |