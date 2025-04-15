# GET | User Schema

## **Requisição**

Para recuperar o **Esquema de Usuário**, adicione as especificações no final do URI e faça uma solicitação ao seguinte endpoint:

`GET "/scim/v2/Schemas/urn:ietf:params:scim:schemas:core:2.0:User"`

## **Parâmetros**

Sem parâmetros.

## **Retorno**

Retorna informações detalhadas sobre o esquema associado ao tipo de recurso usuário.

## **Exemplo de resposta**

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

:::(info) (Info)  
Para mais informações, consulte a [RFC 7643](https://datatracker.ietf.org/doc/html/rfc7643#section-4.1).
:::