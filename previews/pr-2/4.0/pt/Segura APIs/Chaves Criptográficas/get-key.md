# GET | Key

## Listar Todas as Chaves de Criptografia

Obtém uma lista de todas as chaves de criptografia autorizadas.

### Endpoint

```
GET /iso/sctm/encryption/key
```

### Resposta Esperada

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
      "name": "Chave-Exemplo-Editada",
      "description": "Edição de descrição via API.",
      "algorithm": "aes256-gcm96",
      "expiration_date": "2023-11-30T15:00:00Z",
      "enabled": false
    }
    // ... outras chaves
  ]
}
```

### Campos Adicionais:

| Campo | Tipo | Descrição |
| :---- | :---- | :---- |
| `encryption_keys` | *Array* | Lista de objetos representando cada chave de criptografia. |
| `id` | *String* | Identificador único da chave. |
| `name` | *String* | Nome da chave. |
| `description` | *String* | Descrição da chave. |
| `algorithm` | *String* | Algoritmo de criptografia utilizado. |
| `expiration_date` | *String* | Data e hora de expiração (formato ISO 8601). |
| `enabled` | *Boolean* | Status da chave. *True* para habilitada, *False* para desabilitada. |