# GET | User by ID

## Request

To retrieve a specific **User**, send a request to the following endpoint: 

`GET /iso/scim/v2/Users/:id`

## Parameters

| Name | Type | Required | Description | Example |
| :---- | :---- | :---- | :---- | :---- |
| `id` | Integer | Required | Specifies the user inside the system. | `"id": "2"` |

#### Return

Returns information about a specific user.

## Sample response

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"
  ],
  "id": "2",
  "externalId": "SCIM1",
  "userName": "Jane Doe",
  "meta": {
    "resourceType": "User",
    "created": "2018-04-17T09:03:39-05:00",
    "lastModified": "2018-04-17T09:03:39-05:00",
    "location": "https://vault.Segura.com/iso/scim/v2/Users/2"
  },
  "name": {
    "familyName": "Doe",
    "givenName": "Jane",
    "honorificPrefix": "Mrs",
    "honorificSuffix": "MD",
    "formatted": "Mrs Jane Doe MD"
  },
  "displayName": "Jane Doe",
  "nickName": "Nick Jane",
  "profileUrl": "http://skimmer.com/jane",
  "title": "First Class Skimmer",
  "userType": "Skimmer",
  "preferredLanguage": "Dutch",
  "locale": "nl",
  "timezone": "Amsterdam",
  "active": true,
  "emails": [
    {
      "type": "work",
      "value": "jane.doe@scim.com",
      "primary": true
    }
  ],
  "phoneNumbers": [
    {
      "type": "work",
      "value": "+31 65 7777777",
      "primary": true
    },
    {
      "type": "personal",
      "value": "+31 20 4444444"
    }
  ],
  "photos": [
    {
      "value": "photo1"
    }
  ],
  "entitlements": [
    {
      "value": "specialist"
    },
    {
      "value": "change_manager"
    },
    {
      "value": "service_manager"
    }
  ],
  "groups": [
    {
      "value": "Full access"
    },
    {
      "value": "With approval"
    }
  ]
}
```