# GET | User Resource Type

## Request

To retrieve the **User Resource Type**, add the object at the end of the URI and send a request to the following endpoint: 

`GET /iso/scim/v2/ResourceTypes/User`

## Parameters

No parameters.

## Return

Returns the attributes associated with user objects.

## Sample response

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:ResourceType"
  ],
  "id": "User",
  "name": "User",
  "endpoint": "/Users",
  "description": "https://tools.ietf.org/html/rfc7643#section-8.7.1",
  "schema": "urn:ietf:params:scim:schemas:core:2.0:User",
  "schemaExtensions": [
    {
      "schema": "urn:ietf:params:scim:schemas:core:2.0:User",
      "required": false
    }
  ],
  "meta": {
    "location": "https://vault.Segura.com/iso/scim/v2/ResourceTypes/User",
    "resourceType": "ResourceType"
  }
}
```