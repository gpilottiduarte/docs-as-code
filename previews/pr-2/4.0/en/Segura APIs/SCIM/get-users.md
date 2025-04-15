# GET | Users

## Request

To retrieve the **Users**, send a request to the following endpoint: 

`GET /iso/scim/v2/Users`

## Parameters

No parameters.

## Return

Returns the list of users.

## Sample response

```json
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:ListResponse"
  ],
  "totalResults": 2,
  "itemsPerPage": 25,
  "startIndex": 1,
  "Resources": [
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
      "...": "..."
    },
    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"
      ],
      "id": "1",
      "externalId": "SCIM2",
      "userName": "Card Skimmer",
      "meta": {
        "resourceType": "User",
        "created": "2018-04-17T09:03:12-05:00",
        "lastModified": "2018-04-17T09:03:12-05:00",
        "location": "https://<account>.4me.com/scim/v2/Users/1"
      },
      "name": {
        "familyName": "Skimmer",
        "givenName": "Card",
        "honorificPrefix": "Sir",
        "honorificSuffix": "MD",
        "formatted": "Sir Card Skimmer MD"
      },
      "displayName": "Card Skimmer",
      "nickName": "Nicked Name",
      "...": "..."
    }
  ]
}
```