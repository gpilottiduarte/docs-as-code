# GET | Automation by ID

Retrieves the details of a specific automation based on the ID provided on the endpoint.

## Endpoint

```
GET /iso/sctm/automation/{id}
```

## Detail Response

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
        "name": "Automation_Sample",
        "tags": "api, test, evidence",
        "plugin": "Telnet",
        "template": "Telnet-DSM",
        "applications": [],
        "secrets": [],
        "devices": ["example-device"]
    }
}
```