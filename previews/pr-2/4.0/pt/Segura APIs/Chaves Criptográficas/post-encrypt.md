# POST | Encrypt

## Criptografar um Valor

Criptografa um valor usando uma chave de criptografia específica.

### Endpoint

```
POST /iso/sctm/encryption/encrypt
```

### Corpo da Solicitação

```
{
  "key_id": "Exemplo-API",
  "version": "1",
  "value": "valor-a-ser-criptografado"
}
```

### Campos:

| Campo | Tipo | Descrição |
| :---- | :---- | :---- |
| `key_id` | *String* | Identificador da chave de criptografia a ser usada. |
| `version` | *String* | Versão da chave (se aplicável). |
| `value` | *String* | Valor a ser criptografado. |

### Resposta Esperada

```json
{
  "code": 200,
  "response": {
    "status": 200,
    "message": "Value encrypted successfully",
    "error": false,
    "error_code": 0
  },
  "encrypted_value": "valor-criptografado-exemplo"
}
```

### Campos Adicionais:

* `encrypted_value (String)`: valor criptografado resultante.