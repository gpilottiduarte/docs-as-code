# SCIM

Este artigo apresenta como os endpoints do Sistema de Gerenciamento de Identidade entre Domínios (SCIM) da senhasegura compartilham informações usando chamadas de API.

:::(Info) (Info)
Qualquer ferramenta que suporte o protocolo SCIM 2.0 pode ser integrada com a plataforma senhasegura.
:::

## GET Service Provider Configuration
#### Requisição

Para recuperar a **Configuração do Provedor de Serviços**, faça uma solicitação ao seguinte endpoint:

`GET /iso/scim/v2/ServiceProviderConfig`

#### Parâmetros
Sem parâmetros.

#### Retorno
Retorna as configurações suportadas pelo nosso conector SCIM.

#### Exemplo de resposta

```json
{
    "schemas":  ["urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig"],
    "documentationUri": "http://example.com/help/scim.html",
    "patch": {
      "supported":true
    },
    "bulk": {
      "supported":true,
      "maxOperations":1000,
      "maxPayloadSize":1048576
    },
    "filter": {
      "supported":true,
      "maxResults": 200
    },
    "changePassword": {
      "supported":false
    },
    "sort": {
      "supported":true
    },
    "etag": {
      "supported":true
    },
    "authenticationSchemes": [
      {
        "name": "OAuth Bearer Token",
        "description":
          "Authentication scheme using the OAuth Bearer Token Standard",
        "specUri": "http://www.rfc-editor.org/info/rfc6750",
        "documentationUri": "http://example.com/help/oauth.html",
        "type": "oauthbearertoken",
        "primary": true
      },
      {
        "name": "HTTP Basic",
        "description":
          "Authentication scheme using the HTTP Basic Standard",
        "specUri": "http://www.rfc-editor.org/info/rfc2617",
        "documentationUri": "http://example.com/help/httpBasic.html",
        "type": "httpbasic"
       }
    ],
    "meta": {
      "location": "https://example.com/v2/ServiceProviderConfig",
      "resourceType": "ServiceProviderConfig",
      "created": "2010-01-23T04:56:22Z",
      "lastModified": "2011-05-13T04:42:34Z",
      "version": "W\/\"3694e05e9dff594\""
    }
  }
```
:::(Info) (Info)
Para mais informações, consulte a [RFC 7643](https://datatracker.ietf.org/doc/html/rfc7643).
:::

* * *
## GET Resource Types

#### Requisição
Para recuperar os **Tipos de Recursos**, faça uma solicitação ao seguinte endpoint:
`GET /iso/scim/v2/ResourceTypes`

#### Parâmetros
Sem parâmetros.

#### Retorno
Retorna os Tipos de Recursos suportados pelo nosso conector SCIM.

#### Exemplo de resposta
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
        "location": "https://vault.senhasegura.com/iso/scim/v2/ResourceTypes/User",
        "resourceType": "ResourceType"
      }
    }
  ]
}
```
:::(Info) (Info)
Para mais informações, consulte a [RFC 7644](https://datatracker.ietf.org/doc/html/rfc7644#section-4).
:::
***
## GET User Resource Type
#### Requisição
Para recuperar o **Tipo de Recurso de Usuário**, adicione o objeto ao final do URI e faça uma solicitação ao seguinte endpoint:
`GET /iso/scim/v2/ResourceTypes/User`

#### Parâmetros
Sem parâmetros.

#### Retorno
Retorna os atributos associados aos objetos de usuário.

#### Exemplo de resposta
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
    "location": "https://vault.senhasegura.com/iso/scim/v2/ResourceTypes/User",
    "resourceType": "ResourceType"
  }
}
```

* * *
## GET Schemas
#### Requisição
Para recuperar os **Esquemas**, faça uma solicitação ao seguinte endpoint:
`GET /iso/scim/v2/Schemas`

#### Parâmetros
Sem parâmetros.

#### Retorno
Retorna os Esquemas suportados pelo nosso conector SCIM.

#### Exemplo de resposta
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
        "location": "https://vault.senhasegura.com/iso/scim/v2/Schemas/urn:ietf:params:scim:schemas:core:2.0:User"
      }
    }
  ]
}
```

* * *
## GET User Schema
#### Requisição
Para recuperar o **Esquema de Usuário**, adicione as especificações no final do URI e faça uma solicitação ao seguinte endpoint:
`GET /iso/scim/v2/Schemas/urn:ietf:params:scim:schemas:core:2.0:User"`

#### Parâmetros
Sem parâmetros.

#### Retorno
Retorna informações sobre o Esquema associado ao usuário.

#### Exemplo de resposta
```json
{
  "id": "urn:ietf:params:scim:schemas:core:2.0:User",
  "name": "User",
  "description": "User Schema",
  "attributes": [
    {
      "name": "userName",
      "type": "string",
      "multiValued": false,
      "required": true,
      "caseExact": false,
      "mutability": "readWrite",
      "returned": "default",
      "uniqueness": "server",
      "description": "Unique identifier for the User, typically used by the user to directly authenticate to the service provider. Each User MUST include a non-empty userName value. This identifier MUST be unique across the service provider's entire set of Users."
    },
    {
      "name": "name",
      "type": "complex",
      "multiValued": false,
      "required": false,
      "mutability": "readWrite",
      "returned": "default",
      "uniqueness": "none",
      "description": "The components of the user's real name. Providers MAY return just the full name as a single string in the formatted sub-attribute, or they MAY return just the individual component attributes using the other sub-attributes, or they MAY return both.  If both variants are returned, they SHOULD be describing the same name, with the formatted name indicating how the component attributes should be combined.",
      "subAttributes": [
        {
          "name": "formatted",
          "type": "string",
          "multiValued": false,
          "required": false,
          "caseExact": false,
          "mutability": "readWrite",
          "returned": "default",
          "uniqueness": "none",
          "description": "The full name, including all middle names, titles, and suffixes as appropriate, formatted for display (e.g., 'Ms. Barbara J Jensen, III')."
        },
        {
          "name": "familyName",
          "type": "string",
          "multiValued": false,
          "required": false,
          "caseExact": false,
          "mutability": "readWrite",
          "returned": "default",
          "uniqueness": "none",
          "description": "The family name of the User, or last name in most Western languages (e.g., 'Jensen' given the full name 'Ms. Barbara J Jensen, III')."
        }
.
.
.
}
  ],
  "meta": {
    "resourceType": "Schema",
    "location": "https://wdc.test.host/scim/v2/Schemas/urn:ietf:params:scim:schemas:core:2.0:User"
  }
}
```
:::(Info) (Info)
Para mais informações, consulte a [RFC 7643](https://datatracker.ietf.org/doc/html/rfc7643#section-4.1).
:::

* * *
## GET Users
#### Requisição
Para recuperar os **Usuários**, faça uma solicitação ao seguinte endpoint:
`GET /iso/scim/v2/Users`

#### Parâmetros
Sem parâmetros.

#### Retorno
Retorna a lista de usuários.

#### Exemplo de resposta
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
        "location": "https://vault.senhasegura.com/iso/scim/v2/Users/2"
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
***
## GET User by ID
#### Requisição
Para recuperar um **Usuário específico**, faça uma solicitação ao seguinte endpoint:
`GET /iso/scim/v2/Users/:id`

#### Parâmetros

| Nome | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| id | Integer | Obrigatório | Especifica o usuário dentro do sistema. | `"id": "2"` |

#### Retorno
Retorna informações sobre um usuário específico.

#### Exemplo de resposta
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
    "location": "https://vault.senhasegura.com/iso/scim/v2/Users/2"
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

* * *
## POST Users
#### Requisição
Para criar **Usuários**, faça uma solicitação ao seguinte endpoint:
`POST /iso/scim/v2/Users`

#### Parâmetros
| Nome | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
userName|String|Obrigatório|O identificador de login exclusivo do usuário.|`"dschrute"`
externalId|String|Obrigatório|Um identificador externo para o usuário.|`"12345"`
name.formatted|String|Obrigatório|Nome completo do usuário.|`"Dwight Schrute"`
name.familyName|String|Opcional|O sobrenome do usuário.|`"Schrute"`
name.givenName|String|Opcional|O nome próprio do usuário.|`"Dwight"`
phoneNumbers.value|String|Opcional|O número de telefone do usuário.|`"+1 (555) 123-4567"`
emails.value|String|Obrigatório|Endereço de email do usuário.|`"dwight.schrute@theoffice.com"`
emails.type|String|Opcional|A categoria do endereço de e-mail.|`"trabalho"`
emails.primary|Boolean|Opcional|Indica se o endereço de email é o email principal do usuário.|`true`
entitlements.value|String|Opcional|O papel do usuário no sistema.|`"Gerente Regional Assistente"`
groups.value|String|Opcional|Os grupos de usuários associados ao usuário.|`"Vendas"`

#### Retorno
Retorna os usuários criados e as informações associadas quando bem-sucedido.

#### Exemplo de resposta
```json
HTTP/1.1 201 Created

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
:::(Warning) (Caution)
Se a senha do usuário estiver incluída na solicitação, o usuário deverá usar essa senha. Caso contrário, gere uma senha aleatória. Após a geração da senha aleatória, o administrador deverá efetuar login no senhasegura para modificá-la e compartilhá-la com o usuário.
:::

* * *
## PATCH Users 
#### Requisição
Para modificar informações sobre **Usuários**, faça uma solicitação ao seguinte endpoint:
`PATCH /iso/scim/v2/Users:id`

#### Parâmetros
| Nome | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
userName|String|Obrigatório|O identificador de login exclusivo do usuário.|`"dschrute"`
externalId|String|Obrigatório|Um identificador externo para o usuário.|`"12345"`
name.formatted|String|Obrigatório|Nome completo do usuário.|`"Dwight Schrute"`
name.familyName|String|Opcional|O sobrenome do usuário.|`"Schrute"`
name.givenName|String|Opcional|O nome próprio do usuário.|`"Dwight"`
phoneNumbers.value|String|Opcional|O número de telefone do usuário.|`"+1 (555) 123-4567"`
emails.value|String|Obrigatório|Endereço de email do usuário.|`"dwight.schrute@theoffice.com"`
emails.type|String|Opcional|A categoria do endereço de e-mail.|`"trabalho"`
emails.primary|Boolean|Opcional|Indica se o endereço de email é o email principal do usuário.|`true`
entitlements.value|String|Opcional|O papel do usuário no sistema.|`"Gerente Regional Assistente"`
groups.value|String|Opcional|Os grupos de usuários associados ao usuário.|`"Vendas"`

#### Retorno
Retorna as informações atualizadas associadas aos usuários.

#### Exemplo de resposta
```json
HTTP/1.1 200 OK

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
*** 
## DELETE Users
#### Requisição
Para remover **Usuários**, faça uma solicitação ao seguinte endpoint:
`DELETE /iso/scim/v2/Users/:id`

#### Parâmetros
Sem parâmetros.

#### Retorno
Se a exclusão do usuário for bem-sucedida, a resposta 'HTTP 204 No Content' será retornada.

#### Exemplo de resposta
```json
HTTP/1.1 204 No Content
```