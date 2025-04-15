# GET | Key by ID

Queries the details of an existing encryption key based on the ID provided on the endpoint.

### Endpoint

```
GET /iso/sctm/encryption/key/{key_id}
```

### Path Parameters

* `key_id (String)`: unique identifier of the key to be edited.

### Expected Response

```json
{
  "code": 200,
  "response": {
    "status": 200,
    "message": "Encryption key loaded successfully",
    "error": false,
    "error_code": 0
  },
  "encryption_key": {
    "id": "xxxx",
    "name": "Chave_API-Example",
    "description": "Example description for the encryption key.",
    "algorithm": "aes256-gcm96",
    "expiration_date": "2023-11-30T15:00:00Z",
    "enabled": false
  }
}
```