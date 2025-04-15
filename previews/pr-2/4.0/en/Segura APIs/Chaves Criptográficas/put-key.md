# PUT | Key

## Get a encryption key by ID

Edits an existing encryption key based on the ID provided on the endpoint.

### Endpoint

```
PUT /iso/sctm/encryption/key/{key_id}
```

### Path Parameters

* `key_id (String`): unique identifier of the key to be edited.

### Request body

```json
{
  "name": "Chave-API-Example",
  "description": "Example description for the encryption key created via API.",
  "algorithm": "aes256-gcm96",
  "expiration_date": "2024-08-18T11:15:00Z"
}
```

### Fields

| Field | Type | Description |
| :---- | :---- | :---- |
| `name` | String | Name of the encryption key. |
| `description` | String | Detailed description of the key. |
| `algorithm` | String | The encryption algorithm to be used. |
| `expiration_date` | String | Date and time of expiration of the key (ISO 8601 format). |

### Expected Response

```json
{
  "code": 200,
  "response": {
    "status": 200,
    "message": "Encryption key updated successfully",
    "error": false,
    "error_code": 0
  }
}
```