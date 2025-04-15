# POST | Decrypt

## Descriptografar um Valor

Descriptografa um valor usando uma chave de criptografia específica.

### Endpoint

```
POST /iso/sctm/encryption/decrypt
```

### Corpo da Solicitação

```json
{
  "key_id": "13",
  "version": "1",
  "value": "valor-criptografado-exemplo"
}
```

### Campos:

| Campo | Tipo | Descrição |
| :---- | :---- | :---- |
| `key_id` | *String* | Identificador da chave de criptografia a ser usada. |
| `version` | *String* | Versão da chave (se aplicável). |
| `value` | *String* | Valor a ser descriptografado. |

### Resposta Esperada

```json
{
  "code": 200,
  "response": {
    "status": 200,
    "message": "Value decrypted successfully",
    "error": false,
    "error_code": 0
  },
  "decrypted_value": "valor-a-ser-criptografado"
}
```
