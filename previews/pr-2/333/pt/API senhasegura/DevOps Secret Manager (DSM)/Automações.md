# Automações

Este artigo fornece um conjunto de endpoints, permitindo a integração eficiente das automações no ambiente do **DevOps Secret Manager** do senhasegura.

Certifique-se de incluir as credenciais adequadas ao realizar solicitações para os endpoints protegidos, garantindo a segurança e a autorização apropriada para o acesso às funcionalidades da API.

## Endpoints disponíveis

### Criação de automação

Cria uma nova automação com base nos parâmetros fornecidos no corpo da solicitação.

### Endpoint

`POST /iso/sctm/automation`

### Corpo da solicitação:

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

### Resposta de criação bem sucedida:
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
### Listagem de automações

Lista todas as automações existentes.

### Endpoint

`GET /iso/sctm/automations`

### Resposta de listagem:
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

### Detalhes de automação

Recupera os detalhes de uma automação específica com base no ID fornecido no endpoint.

### Endpoint

`GET /iso/sctm/automation/{id}`

### Resposta de detalhes:
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

### Exclusão de automação

### Endpoint

Exclui a automação com o ID fornecido no endpoint.

`DELETE /iso/sctm/automation/{id}`

Resposta de exclusão:
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

### Atualização de automação

Atualiza a automação com o ID fornecido no endpoint com base nos parâmetros fornecidos no corpo da solicitação.

### Endpoint

`PUT /iso/sctm/automation/{id}`

### Corpo da solicitação de atualização:
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

### Resposta de Atualização:
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