# GET | Resource Types

## Request

To retrieve the **Resource Types**, send a request to the following endpoint: 

`GET /iso/scim/v2/ResourceTypes`

#### Parameters

No parameters.

## Return

Returns the Resource Types supported by our SCIM connector.

## Sample response

```json
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:ListResponse"
  ],
  "totalResults": 1,
  "itemsPerPage": 1,
  "startIndex": 1,
  "Resources": [
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
          "schema": "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
          "required": false
        }
      ],
      "meta": {
        "location": "https://vault.Segura.com/iso/scim/v2/ResourceTypes/User",
        "resourceType": "ResourceType"
      }
    }
  ]
}
```

:::(info) (Info)
For more information, check the [RFC 7644](https://datatracker.ietf.org/doc/html/rfc7644#section-4).
:::