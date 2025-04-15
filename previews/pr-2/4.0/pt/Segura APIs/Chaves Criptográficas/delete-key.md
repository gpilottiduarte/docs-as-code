# DELETE | Key

## Desabilitar Chave de Criptografia

Desabilita uma chave de criptografia existente com base no ID fornecido no *endpoint*.

### Endpoint

```
DELETE /iso/sctm/encryption/key/{key_id}
```

### Parâmetros de Caminho

* `key_id (String)`: identificador único da chave a ser desabilitada.

### Resposta Esperada

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