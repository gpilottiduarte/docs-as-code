# Gerenciamento de chaves criptográficas

Este artigo fornece um conjunto de endpoints, permitindo criar, editar, desabilitar, listar e visualizar detalhes das chaves de criptografia, além de criptografar e decriptografar dados sensíveis no ambiente do **DevOps Secret Manager** do senhasegura.

## Criação de Chave de Criptografia

### Endpoint

`POST /iso/sctm/encryption/key`

### Descrição

Cria uma nova chave de criptografia com base nos parâmetros fornecidos no corpo da solicitação.

### Corpo da Solicitação
```json
{
 "name": "Chave-Caderno-API2",
 "description": "Descrição da chave de criptografia criada via API.",
 "algorithm": "aes128-gcm96",
 "expiration_date": "2024-08-18 11:15:00"
}
```
### Resposta Esperada
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

## Edição de chave de criptografia
### Endpoint

`PUT /iso/sctm/encryption/key/{key_id}`

### Descrição
Edita uma chave de criptografia existente com base no ID fornecido no endpoint.

### Corpo da solicitação de edição
```json
{
 "name": "Chave_API-CadernoEditada23",
 "algorithm": "aes256-gcm96",
 "expiration_date": "2023-11-30 15:00:00",
 "description": "Edição de descrição via API."
}
```
### Resposta esperada
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
## Desabilitar chave de criptografia
### Endpoint
`DELETE /iso/sctm/encryption/key/{key_id}`
### Descrição
Desabilita uma chave de criptografia existente com base no ID fornecido no endpoint.
### Resposta esperada ao desabilitar uma chave
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
## Listar todas as chaves de criptografia
### Endpoint
`GET /iso/sctm/encryption/key`

### Descrição
Obtém uma lista de todas as chaves de criptografia autorizadas.
Exemplo de resposta ao listar as chaves
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
 "name": "Chave_API-CadernoEditada23",
 "description": "Edição de descrição via API.",
 "algorithm": "aes256-gcm96",
 "expiration_date": "11/30/2023 15:00:00",
 "enabled": "0"
 }
 ]
}
```
## Consulta de chave de criptografia
### Endpoint
`GET /iso/sctm/encryption/key/{key_id}`

### Descrição
Consulta os detalhes de uma chave de criptografia existente com base no ID fornecido no endpoint.
### Resposta esperada ao consultar detalhes de uma chave
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
 "name": "Chave_API-CadernoEditada23",
 "description": "Edição de descrição via API.",
 "algorithm": "aes256-gcm96",
 "expiration_date": "11/30/2023 15:00:00",
 "enabled": "0"
 }
}
```
## Criptografar um valor
### Endpoint
`POST /iso/sctm/encryption/encrypt`

### Descrição
Criptografa um valor usando uma chave de criptografia específica.

### Requisição de criptografia
```json
{
 "key": "Edit by API",
 "version": "1",
 "value": "cryptokey-api&"
}
```
### Resposta de criptografia
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
## Decriptografar um valor
### Endpoint
`POST /iso/sctm/encryption/decrypt`

### Descrição
Decriptografa um valor usando uma chave de criptografia específica.

### Requisição de decriptografia
```json
{
 "key": "13",
 "version": "1",
 "value": "K0X1N3Vz6SC48pWTrVj5fQrI+sXuv3+aD7FVcVh4MXZKQWc0U3AyV2pFR01rYzQ9"
}
```

### Resposta de decriptografia
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

