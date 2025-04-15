# GET | User Resource Type

## **Requisição**

Para recuperar o **Tipo de Recurso de Usuário**, adicione o objeto ao final do URI e faça uma solicitação ao seguinte endpoint:  
`GET "/scim/v2/ResourceTypes/User"`

## **Parâmetros**

Sem parâmetros.

## **Retorno**

Retorna os atributos associados aos objetos de usuário.

## **Exemplo de resposta**

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