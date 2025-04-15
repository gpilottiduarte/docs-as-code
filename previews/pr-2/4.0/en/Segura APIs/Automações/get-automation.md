# GET | Automation

Lists all the automations present in Segura DSM.

### Endpoint

```
GET /iso/sctm/automations
```

### Listing Response

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
            "name": "automation1",
            "tags": null,
            "plugin": "HTTP",
            "template": "template1",
            "applications": ["app1", "app2"],
            "secrets": ["secret1", "secret2"],
            "devices": ["device1"]
        }
        // ... other automations ...
    ]
}
```