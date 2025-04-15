# Encryption key management

This article provides a set of endpoints to create, edit, disable, list, and view details of encryption keys, as well as encrypt and decrypt sensitive data in the senhasegura **DevOps Secret Manager** environment.

## Create Encryption Key
### Endpoint

`POST /iso/sctm/encryption/key`

### Description
Creates a new encryption key based on the parameters provided in the request body.

### Request Body
```json
{
  "name": "Key-Notebook-API2",
  "description": "Description of the encryption key created via API.",
  "algorithm": "aes128-gcm96",
  "expiration_date": "2024-08-18 11:15:00"
}
```
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
  "id": "24"
}
```
## Edit Encryption Key
### Endpoint
`PUT /iso/sctm/encryption/key/{key_id}`

### Description
Edits an existing encryption key based on the ID provided in the endpoint.

### Request Body for Edit
```json
{
  "name": "Key_API-EditedNotebook23",
  "algorithm": "aes256-gcm96",
  "expiration_date": "2023-11-30 15:00:00",
  "description": "Description edited via API."
}
```
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
## Disable Encryption Key
### Endpoint
`DELETE /iso/sctm/encryption/key/{key_id}`

### Description
Disables an existing encryption key based on the ID provided in the endpoint.

### Expected Response when disabling a key
```json
{
  "code": 200,
  "response": {
    "status": 200,
    "message": "Encryption key deleted successfully",
    "error": false,
    "error_code": 0
  }
}
```
## List All Encryption Keys
### Endpoint
`GET /iso/sctm/encryption/key`

### Description
Gets a list of all authorized encryption keys.

### Example Response when listing keys
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
      "id": "24",
      "name": "Key_API-EditedNotebook23",
      "description": "Description edited via API.",
      "algorithm": "aes256-gcm96",
      "expiration_date": "11/30/2023 15:00:00",
      "enabled": "0"
    }
  ]
}
```

## Query Encryption Key Details
### Endpoint
`GET /iso/sctm/encryption/key/{key_id}`

### Description
Queries the details of an existing encryption key based on the ID provided in the endpoint.

### Expected Response when querying key details
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
    "id": "24",
    "name": "Key_API-EditedNotebook23",
    "description": "Description edited via API.",
    "algorithm": "aes256-gcm96",
    "expiration_date": "11/30/2023 15:00:00",
    "enabled": "0"
  }
}
```
## Encrypt a Value
### Endpoint
`POST /iso/sctm/encryption/encrypt`

### Description
Encrypts a value using a specific encryption key.

### Encryption Request
```json
{
  "key": "Edit by API",
  "version": "1",
  "value": "cryptokey-api&"
}
```

### Encryption Response
```json
{
  "code": 200,
  "response": {
    "status": 200,
    "message": "Value encrypted successfully",
    "error": false,
    "error_code": 0
  },
  "encrypted_value": "Vad9NQOhwP23Hnm64AOD4t3hjcCr45GK1mslvk5BWENEeTQzVzRHbE5nUjZMTmM9"
}
```

## Decrypt a Value
### Endpoint
`POST /iso/sctm/encryption/decrypt`

### Description
Decrypts a value using a specific encryption key.

### Decryption Request
```json
{
  "key": "13",
  "version": "1",
  "value": "K0X1N3Vz6SC48pWTrVj5fQrI+sXuv3+aD7FVcVh4MXZKQWc0U3AyV2pFR01rYzQ9"
}
```

### Decryption Response
```json
{
  "code": 200,
  "response": {
    "status": 200,
    "message": "Value decrypted successfully",
    "error": false,
    "error_code": 0
  },
  "encrypted_value": "cryptokey-api&"
}
``` 
