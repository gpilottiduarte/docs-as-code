# PUT | Key

## Edição de Chave de Criptografia

Edita uma chave de criptografia existente com base no ID fornecido no *endpoint*.

### Endpoint

```
PUT /iso/sctm/encryption/key/{key_id}
```

### Parâmetros de Caminho

* `key_id (String)`: identificador único da chave a ser editada.

### Corpo da Solicitação

```
{
  "name": "Chave-Exemplo-Editada",
  "description": "Edição de descrição via API.",
  "algorithm": "aes256-gcm96",
  "expiration_date": "2023-11-30T15:00:00Z"
}
```

### Campos:

| Campo | Tipo | Descrição |
| :---- | :---- | :---- |
| `name` | *String* | Novo nome da chave de criptografia. |
| `description` | *String* | Nova descrição da chave. |
| `algorithm` | *String* | Novo algoritmo de criptografia. |
| `expiration_date` | *String* | Nova data e hora de expiração (formato ISO 8601). |

### Resposta Esperada

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