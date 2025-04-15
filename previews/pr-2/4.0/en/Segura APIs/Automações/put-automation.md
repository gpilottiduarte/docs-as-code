# PUT | Automation

Updates the automation with the ID provided on the endpoint based on the parameters provided in the request body.

### Endpoint

```
PUT /iso/sctm/automation/{id}
```

### Update request body

```json
{
    "name": "Automation_through_API",
    "tags": "api, test, evidence",
    "triggers": [
        "When a secret is created",
        "When a secret is updated",
        "When a secret is inactivated",
        "When a secret is activated",
        "When an authorization is created",
        "When an authorization is updated",
        "When an authorization is inactivated",
        "When an authorization is activated"
    ],
    "devices": [
        {
            "hostname": "masked-hostname",
            "credential": "masked-credential"
        }
    ],
    "enabled": true,
    "plugin": "Telnet",
    "template": "Telnet-DSM"
}
```

### Update Response

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
        "tags": "api, test, evidence",
        "plugin": "Telnet",
        "template": "Telnet-DSM",
        "applications": [],
        "secrets": [],
        "devices": ["masked-device"]
    }
}
```
