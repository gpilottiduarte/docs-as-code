# POST | Decrypt

Encrypts a value using a specific encryption key.

### Endpoint

```
POST /iso/sctm/encryption/decrypt
```

### Request body

```json
{
  "key_id": "xxxx",
  "version": "1",
  "value": "masked-value"
}
```

### Fields

| Field | Type | Description |
| :---- | :---- | :---- |
| `key_id` | String | Identifier of the encryption key to be used. |
| `version` | String | Version of the key (if applicable). |
| `value` | String | Value to be decrypted. |

### Expected Response

```json
{
  "code": 200,
  "response": {
    "status": 200,
    "message": "Value decrypted successfully",
    "error": false,
    "error_code": 0
  },
  "decrypted_value": "masked-decrypted-value"
}
```