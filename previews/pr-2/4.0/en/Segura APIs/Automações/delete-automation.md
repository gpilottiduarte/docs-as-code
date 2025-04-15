# DELETE | Automation

Deletes the automation with the ID provided on the endpoint.

```
DELETE /iso/sctm/automation/{id}
```

### Deletion Response

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