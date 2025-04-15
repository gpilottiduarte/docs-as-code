# DELETE | Key

Edits an existing encryption key based on the ID provided on the endpoint.

### Endpoint

```
DELETE /iso/sctm/encryption/key/{key_id}
```

### Path Parameters

* `key_id (String)`: unique identifier of the key to be edited.

### Expected Response

```json
{
  "code": 200,
  "response": {
    "status": 200,
    "message": "Encryption key disabled successfully",
    "error": false,
    "error_code": 0
  }
}
```