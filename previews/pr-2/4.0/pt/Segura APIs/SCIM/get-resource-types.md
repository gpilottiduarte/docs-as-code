# GET | Resource Types

## **Requisição**

Para recuperar os **Tipos de Recursos**, faça uma solicitação ao seguinte endpoint:  
`GET /scim/v2/ResourceTypes`

## **Parâmetros**

Sem parâmetros.

## **Retorno**

Retorna os Tipos de Recursos suportados pelo nosso conector SCIM.

## **Exemplo de resposta**

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
Para mais informações, consulte a [RFC 7644](https://datatracker.ietf.org/doc/html/rfc7644#section-4).
:::