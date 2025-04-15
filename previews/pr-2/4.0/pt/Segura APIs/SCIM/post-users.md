# POST | Users

## **Requisição**

Para criar **Usuários**, faça uma solicitação ao seguinte endpoint:  

`POST /scim/v2/Users`

## **Parâmetros**

| Nome | Tipo | Obrigatório | Descrição | Exemplo |
| :---- | :---- | :---- | :---- | :---- |
| `userName` | String | Obrigatório | O identificador de login exclusivo do usuário. | `"dschrute"` |
| `externalId` | String | Obrigatório | Um identificador externo para o usuário. | `"12345"` |
| `name.formatted` | String | Obrigatório | Nome completo do usuário. | `"Dwight Schrute"` |
| `name.familyName` | String | Opcional | O sobrenome do usuário. | `"Schrute"` |
| `name.givenName` | String | Opcional | O nome próprio do usuário. | `"Dwight"` |
| `phoneNumbers.value` | String | Opcional | O número de telefone do usuário. | `"+1 (555) 123-4567"` |
| emails.value | String | Obrigatório | Endereço de email do usuário. | `"dwight.schrute@theoffice.com"` |
| `emails.type` | String | Opcional | A categoria do endereço de e-mail. | `"trabalho"` |
| `emails.primary` | Boolean | Opcional | Indica se o endereço de email é o email principal do usuário. | `true` |
| `entitlements.value` | String | Opcional | O papel do usuário no sistema. | `"Gerente Regional Assistente"` |
| `groups.value` | String | Opcional | Os grupos de usuários associados ao usuário. | `"Vendas"` |

## **Retorno**

Retorna os usuários criados e as informações associadas quando bem-sucedido.

## **Exemplo de resposta**

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

:::(warning) (Cuidado)  
Se a senha do usuário estiver incluída na solicitação, o usuário deverá usar essa senha. Caso contrário, gere uma senha aleatória. Após a geração da senha aleatória, o administrador deverá efetuar login no Segura para modificá-la e compartilhá-la com o usuário.
:::