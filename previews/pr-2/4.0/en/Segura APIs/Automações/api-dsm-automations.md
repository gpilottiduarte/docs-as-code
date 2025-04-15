# POST | Automation

## Automation creation

Creates a new automation based on the parameters provided in the request body.

### Endpoint

```
POST /iso/sctm/automation
```

### Request body

```json
{
    "name": "Automation_by_API2",
    "tags": "API, Testing",
    "enabled": true,
    "description": "Test description",
    "triggers": ["When a secret is updated", "When a secret is inactivated"],
    "applications": ["postman", "postman2"],
    "secrets": ["test-secret"],
    "plugin": "HTTP",
    "template": "SecretsDSM",
    "devices": [
        {
            "hostname": "example.com",
            "credential": "api-credential"
        }
    ]
}
```

### Creation response successful

```json
{
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
        "applications": ["app1", "app2"],
        "secrets": ["masked-secret"],
        "devices": ["example.com"]
    }
}
```