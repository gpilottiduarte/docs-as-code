# GET | Automation por ID

### Detalhes de automação

Recupera os detalhes de uma automação específica com base no ID fornecido no *endpoint*.

### Endpoint

```
GET /iso/sctm/automation/{id}
```

### Resposta de detalhes

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Automation retrieved",
        "error": false,
        "error_code": 0
    },
    "automation": {
        "id": "18",
        "name": "Teste-Edição_para_evidência",
        "tags": "api, teste, evidence",
        "plugin": "Telnet",
        "template": "Telnet-DSM",
        "applications": [],
        "secrets": [],
        "devices": ["centos"]
    }
}
```