# GET | Schemas

## Request

To retrieve the **Schemas**, send a request to the following endpoint: 

`GET /iso/scim/v2/Schemas`

## Parameters

No parameters.

## Return

Returns the Schemas supported by our SCIM connector.

## Sample response

```json
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:ListResponse"
  ],
  "totalResults": 3,
  "itemsPerPage": 3,
  "startIndex": 1,
  "Resources": [
    {
      "id": "urn:ietf:params:scim:schemas:core:2.0:User",
      "name": "User",
      "description": "User Schema",
      "attributes": [
        "..."
      ],
      "meta": {
        "resourceType": "Schema",
        "location": "https://vault.Segura.com/iso/scim/v2/Schemas/urn:ietf:params:scim:schemas:core:2.0:User"
      }
    }
  ]
}
```