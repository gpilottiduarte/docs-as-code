# Automations

This article provides a set of endpoints, enabling efficient integration of automations into the **DevOps Secret Manager** of senhasegura.

Be sure to include the appropriate credentials when making requests to protected endpoints, ensuring security and appropriate authorization for accessing API functionality.

## Available endpoints

### Automation creation

Creates a new automation based on the parameters provided in the request body.

### Endpoint

`POST /iso/sctm/automation`

### Request body:
```json
{
    "name": "Automation_by_API2",
    "tags": "API, Testing",
    "enabled": true,
    "description": "Description of test",
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

### Successful creation response:

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

### List of automations

Lists all existing automations.

### Endpoint

`GET /iso/sctm/automations`

### Listing response:
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
        "applications": ["postman-arthur", "journal 3.28"],
        "secrets": ["api7", "caderno328_1"],
        "devices": ["test"]
    },
        // ... others automations ...
    ]
}
```
### Automation Details

Retrieves the details of a specific automation based on the ID provided in the endpoint.

### Endpoint

`GET /iso/sctm/automation/{id}`

### Details answer:

```json
{
"code": 200,
"response": 
    {
        "status": 200,
        "message": "Automation retrieved",
        "error": false,
        "error_code": 0
    },
    "automation": 
    {
        "id": "18",
        "name": "Test-Edit_for_evidence",
        "tags": "api, test, evidence",
        "plugin": "Telnet",
        "template": "Telnet-DSM",
        "applications": [],
        "secrets": [],
        "devices": ["hundred"]
    }
}
```

### Automation deletion

### Endpoint

Deletes the automation with the ID provided on the endpoint.

`DELETE /iso/sctm/automation/{id}`

Deletion response:

```json
{
    "code": 200,
    "response": 
    {
        "status": 200,
        "message": "Automation deleted",
        "error": false,
        "error_code": 0
    }
}
```

### Automation update

Updates the automation with the ID provided on the endpoint based on the parameters provided in the request body.

### Endpoint

`PUT /iso/sctm/automation/{id}`

### Update request body:
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
        "hostname": "hundreds",
        "credential": "usrsudonopass"
    }
    ],
    "enabled": true,
    "plugin": "Telnet",
    "template": "Telnet-DSM"
}
```
### Update Response:

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
        "devices": ["hundred"]
    }
}
```