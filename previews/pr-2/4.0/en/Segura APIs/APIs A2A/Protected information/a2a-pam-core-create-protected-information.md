# POST | Create protected information

This document presents how to create a protected information item in **PAM Core** via API, the  available endpoint, the parameters needed, example requests, and responses on success or in case of errors.

## Methods

### `POST` Create protected information
#### Request
To create privilege information registered in **PAM Core**, send a request to the following endpoint:

`/iso/pam/info` 

#### Request parameters

**Body**


| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `name` | String | No | Name assigned to the protected item.  | saas_vault1 |
| `content` | String | Yes | Information you wish to protect. **Note**: file upload is not available. | login: mt4adm, password: mt4admp4ss |
| `identifier` | String | No | Unique string to identify the protected item. | INFOSAASVAULT1 |
| `type` | String | No | Information type. | access credential |

**Example request**

```json
{   
    "name": "saas_vault1",
    "content":"login: mt4adm, password: mt4admp4ss",
    "identifier": "INFOSAASVAULT1",
    "type": "access Credential"
}
```

#### Return
Creates a protected information item in **PAM Core** and provides a message with information about the creation process.


**Expected response**

`HTTP/1.1 200 OK 
`
```json
{
    "response": {
        "status": 201,
        "mensagem": "Information successfully registered!",
        "erro": false,
        "message": "Information successfully registered!",
        "error": false
    },
    "info": {
	    "name": "saas_vault1",
		"type": "access credential",
		"service": "saas_client",
		"url": "10.10.10.2",
		"content": "login: mt4adm, password: mt4admp4ss",
		"users_allowed": "admin, account_manager, mscharra",
		"identifier": "INFOSAASVAULT1"
    }
}
```
**In case of error - missing required parameter**

`HTTP/1.1 400 Bad Request`

```json
{
    "response": {
        "status": 400,
        "mensagem": "1026: The information content was not informed",
        "erro": true,
        "message": "1026: The information content was not informed",
        "error": true
    },
    "exception": {
        "code": 1026,
        "message": "1026: The information content was not informed",
        "detail": null
    }
}
```