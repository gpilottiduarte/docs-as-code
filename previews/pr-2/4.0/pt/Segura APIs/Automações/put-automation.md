# PUT | Automation

### Atualização de automação

Atualiza a automação com o ID fornecido no *endpoint* com base nos parâmetros fornecidos no corpo da solicitação.

### Endpoint

```
PUT /iso/sctm/automation/{id}
```

### Corpo da solicitação de atualização

```json
{
    "name": "Automation_through_API",
    "tags": "api, teste, evidence",
    "triggers":
        ["When a secret is created",
        "When a secret is updated",
        "When a secret is inactivated",
        "When a secret is activated",
        "When an authorization is created",
        "When an authorization is updated",
        "When an authorization is inactivated",
        "When an authorization is activated"],
    "devices": [
    {
        "hostname": "centos",
        "credential": "usrsudonopass"
    }
    ],
    "enabled": true,
    "plugin": "Telnet",
    "template": "Telnet-DSM"
}
```

### Resposta de Atualização

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Automation updated",
        "error": false,
        "error_code": 0
    },
    "automation": {
        "id": "20",
        "name": "Automation_through_API",
        "tags": "api, teste, evidence",
        "plugin": "Telnet",
        "template": "Telnet-DSM",
        "applications": [],
        "secrets": [],
        "devices": ["centos"]
    }
}
```
