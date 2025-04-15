# POST | Users

## Request

To create **Users**, send a request to the following endpoint: 

`POST /iso/scim/v2/Users`

## Parameters

| Name | Type | Required | Description | Example |
| :---- | :---- | :---- | :---- | :---- |
| `userName` | String | Required | The unique login identifier for the user. | `"dschrute"` |
| `externalId` | String | Required | An external identifier for the user. | `"12345"` |
| `name.formatted` | String | Required | The full name of the user. | `"Dwight Schrute"` |
| `name.familyName` | String | Optional | The family name or last name of the user. | `"Schrute"` |
| `name.givenName` | String | Optional | The given name or first name of the user. | `"Dwight"` |
| `phoneNumbers.value` | String | Optional | The user's phone number. | `"+1 (555) 123-4567"` |
| `emails.value` | String | Required | The user's email address. | `"dwight.schrute@theoffice.com"` |
| `emails.type` | String | Optional | The category of the email address. | `"work"` |
| `emails.primary` | Boolean | Optional | Indicates whether the email address is the user's primary email. | `true` |
| `entitlements.value` | String | Optional | The user's role in the system. | `"Assistant Regional Manager"` |
| `groups.value` | String | Optional | The user groups associated with the user. | `"Sales Team"` |

#### Return

Returns the created users and the associated information when successful.

## Sample response

`HTTP/1.1 201 Created`

```json
{
  "schemas":["urn:ietf:params:scim:schemas:core:2.0:User"],
  "id":"2819c223-7f76-453a-919d-413861904646",
  "externalId":"dschrute",
  "meta":{
    "resourceType":"User",
    "created":"2011-08-01T21:32:44.882Z",
    "lastModified":"2011-08-01T21:32:44.882Z",
    "location": "https://example.com/v2/Users/2819c223-7f76-453a-919d-413861904646",
    "version":"W\/\"e180ee84f0671b1\""
  },
  "name":{
    "familyName":"Schrute",
    "givenName":"Dwight"
  },
  "userName":"dschrute"
}
```

:::(warning) (Caution)
If the user's password is included in the request, the user must use that password. Otherwise, you should generate a random password, and the administrator must log in to Segura to modify it and share it with the user.
:::