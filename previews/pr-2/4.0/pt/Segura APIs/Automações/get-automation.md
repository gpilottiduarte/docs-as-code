# GET | Automation

## Lista as automações

### Descrição

Lista todas as automações presentes no Segura DSM.

### Endpoint

```
GET /iso/sctm/automations
```

### Resposta de listagem

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Automations list",
        "error": false,
        "error_code": 0
    },
    "automations": [
    {
        "id": "1",
        "name": "testeDSM",
        "tags": null,
        "plugin": "HTTP",
        "template": "testeDSM",
        "applications": ["postman-arthur", "caderno 3.28"],
        "secrets": ["api7", "caderno328_1"],
        "devices": ["teste"]
    },
        // ... outras automações ...
    ]
}
```