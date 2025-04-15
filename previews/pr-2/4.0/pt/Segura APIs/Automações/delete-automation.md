# DELETE | Automation

### Exclusão de automação

### Endpoint

Exclui a automação com o ID fornecido no *endpoint*.

```
DELETE /iso/sctm/automation/{id}
```

### Resposta de exclusão

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Automation deleted",
        "error": false,
        "error_code": 0
    }
}
```