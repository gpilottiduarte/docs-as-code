# GET | Key

Gets a list of all authorized encryption keys.

### Endpoint

```
GET /iso/sctm/encryption/key
```

### Expected Response

```json
{
  "code": 200,
  "response": {
    "status": 200,
    "message": "Encryption keys loaded successfully",
    "error": false,
    "error_code": 0
  },
  "encryption_keys": [
    {
      "id": "xxxx",
      "name": "Chave_API-Example",
      "description": "Example description for the encryption key.",
      "algorithm": "aes256-gcm96",
      "expiration_date": "2023-11-30T15:00:00Z",
      "enabled": false
    }
    // ... other keys
  ]
}
```

### Additional Fields

| Field | Type | Description |
| :---- | :---- | :---- |
| `encryption_keys` | Array | List of Objects representing each encryption key. |
| `id` | String | Unique identifier of the created key. |
| `name` | String | Name of the key. |
| `description` | String | Detailed description of the key. |
| `algorithm` | String | New encryption algorithm. |
| `expiration_date` | String | Date and time of expiration of the key (ISO 8601 format). |
| `enabled` | Boolean | Key status. *True* to enabled, *False* to disabled.. |