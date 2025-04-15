# GET | Key por ID

## Consulta de Chave de Criptografia

Consulta os detalhes de uma chave de criptografia existente com base no ID fornecido no *endpoint*.

### Endpoint

```
GET /iso/sctm/encryption/key/{key_id}
```

### Parâmetros de Caminho

* `key_id (String)`: Identificador único da chave a ser consultada.

### Resposta Esperada

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
    "name": "Chave-Exemplo-Editada",
    "description": "Edição de descrição via API.",
    "algorithm": "aes256-gcm96",
    "expiration_date": "2023-11-30T15:00:00Z",
    "enabled": false
  }
}
```