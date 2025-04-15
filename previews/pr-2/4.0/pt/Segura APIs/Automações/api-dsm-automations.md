# POST | Automation

## Cria uma automação
Cria uma nova automação com base nos parâmetros fornecidos no corpo da solicitação.

### Endpoint

```
POST /iso/sctm/automation
```

### Corpo da solicitação

```json
{
    "name": "Automation_by_API2",
    "tags": "API, Testing",
    "enabled": true,
    "description": "Descrição de teste",
    "triggers": ["When a secret is updated", "When a secret is inactivated"],
    "applications": ["postman", "postman2"],
    "secrets": ["teste-jean-secret"],
    "plugin": "HTTP",
    "template": "SecretsDSM",
    "devices": [
    {
        "hostname": "accounts.google.com",
        "credential": "jean-api"
    }
    ]
}
```

### Resposta de criação bem sucedida

```json
"code": 201,
"response": {
    "status": 201,
    "message": "Automation created successfully",
    "error": false,
    "error_code": 0
    },
"automation": {
    "id": "21",
    "name": "Automation_by_API3",
    "tags": "API, Testing",
    "plugin": "HTTP",
    "template": "SecretsDSM",
    "applications": ["postman", "postman2"],
    "secrets": ["teste-jean-secret"],
    "devices": ["accounts.google.com"]
    }
}
```