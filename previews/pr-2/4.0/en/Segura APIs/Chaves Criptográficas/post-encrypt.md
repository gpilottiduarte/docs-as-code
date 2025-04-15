# POST | Encrypt

## Encryption Key Creation

Creates a new encryption key based on the parameters provided in the request body.

### Endpoint

```
POST /iso/sctm/encryption/key
```

### Request body

```json
{
  "name": "Chave-API-Example",
  "description": "Example description for the encryption key created via API.",
  "algorithm": "aes128-gcm96",
  "expiration_date": "2024-08-18T11:15:00Z"
}
```

### Fields

| Field | Type | Description |
| :---- | :---- | :---- |
| `name` | *String* | Name of the encryption key. |
| `description` | *String* | Detailed description of the key. |
| `algorithm` | *String* | The encryption algorithm to be used (for example, aes128-gcm96). |
| `expiration_date` | *String* | Date and time of expiration of the key (ISO 8601 format). |

### Expected Response

```json
{
  "code": 200,
  "response": {
    "status": 200,
    "message": "Encryption key created successfully",
    "error": false,
    "error_code": 0
  },
  "id": "xxxx"
}
```

### Fields

| Field | Type | Description |
| :---- | :---- | :---- |
| `code` | Integer | HTTP status code. |
| `response` | Object | Response to the creation of the cryptographic key. Contains the key creation data. |
| `status` | Integer | Operation status code. |
| `message` | String | Confirmation message. |
| `error` | Boolean | Error indicator. |
| `error_code` | Integer | Specific error code. |
| `id` | String | Unique identifier of the created key. |