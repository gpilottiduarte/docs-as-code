# GET | Schemas

## **Requisição**

Para recuperar os **Esquemas**, faça uma solicitação ao seguinte endpoint:  
`GET /scim/v2/Schemas`

## **Parâmetros**

Sem parâmetros.

## **Retorno**

Retorna os esquemas suportados pelo nosso conector SCIM.

## **Exemplo de resposta**

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