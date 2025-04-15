# Criar ou atualizar um segredo de API

Este artigo apresenta como criar ou atualizar um segredo de API no **MySafe** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e respostas em caso de sucesso ou em caso de erros.

## Autorização

A autorização para as **APIs MySafe** é feita diretamente no módulo.
Para mais informações, acesse o documento sobre [Como adicionar uma autorização de chave de acesso](/v3-32/docs/pt/mysafe-how-to-add-an-access-key-authorization).

## Autenticação

A autenticação nas **APIs MySafe** é feita utilizando o método de autenticação OAuth 2.0. Para iniciar este processo, é necessário fornecer o **Client ID** e o **Client Secret**, além de obter o **token de autenticação** deles a partir do endpoint:

```
GET /api/oauth2/token
```
Para mais informações sobre como obter o **Client ID** e o **Client Secret**, acesse o documento sobre [Como visualizar uma autorização de chave de acesso](/v3-32/docs/pt/mysafe-how-to-view-an-access-key-authorization).

## Métodos
### Criar um segredo de API


#### Requisição




Para adicionar um segredo de API ao **MySafe**, envie uma requisição para o seguinte endpoint:

```
POST /api/mysafe/secretapi
```

:::(Info) (Info)
Quando um segredo de API é adicionado ao **MySafe**, ele é automaticamente associado ao seu criador, identificando-o como seu proprietário.
:::

#### Parâmetros de requisição

***Body***
| Campo |  | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- | --- |
| `name ` |  | String | Sim | Nome atribuído ao segredo de API. | gcp |
| `url ` |  | String | Sim | URL do site onde o segredo de API está sendo usado.  | https://gcp.com |
| ` client_id` |  | String | Sim | ID da aplicação cliente que usará este segredo da API. | gf455f7g8fb5dfg8fd545bffbv |
| ` client_secret` |  | String | Sim | Uma chave confidencial conhecida apenas pelo cliente e pelo servidor de autorização, usada para autenticar o cliente junto ao servidor. | gf5464g5v7ffsd857xc4fds57g8fds |
| `identifier_code ` |  | String | Não | String única definida pelo usuário para identificar o segredo de API. | hyga125 |
| ` tags` |  | String | Não | Palavras-chave para ajudar a identificar o segredo de API. | Cloud |
| ` notes` |  | String | Não | Observações sobre o segredo da API. | Access details |
| ` method` |  | String | Não | O método HTTP a ser usado para as requisições da API. | get |
| ` users_allowed` |  | Array de objetos | Não | Informação sobre os usuários com permissão de acesso ao segredo de API. |  |
|  | `username ` | String | Não | Nome de usuário do usuários que poderá acessar o segredo da API. | pduarte |
|  | ` can_edit` | Boolean | Não | Permissão de edição. Se deixado vazio, o usuário terá apenas permissão de visualização. | true |
| `groups_allowed ` |  | Array de objetos | Não | Informação sobre os grupos com permissão de acesso ao segredo de API. |  |
|  | `name ` | String | Não | Nome do grupo com permissão de acesso ao segredo de API. | Test group |
|  | ` can_edit` | Boolean | Não | Permissão de edição. Se deixado vazio, o usuário terá apenas permissão de visualização. |  |

**Exemplo de requisição**
```
{
    "name": "GCP",
    "url": "https://gcp.com",
    "client_id": "gf455f7g8fb5dfg8fd545bffbv",
    "client_secret": "gf5464g5v7ffsd857xc4fds57g8fds",
    "identifier_code": "hyga125",
    "tags": "Cloud",
    "notes": "Access details",
    "method": "get",
     "users_allowed": [
        {
            "username" : "pduarte",
            "can_edit" : true
        }
    ],
    "groups_allowed": [
        {
            "name" : "Test group"
        }
    ]
}
```

#### Retorno
Adiciona um segredo de API ao **MySafe**, e retorna uma mensagem com informações sobre o processo de adição do segredo de API. 



**Resposta esperada**

```
HTTP/1.1 201 Created
```

```
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Api secret successfully registered",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Api secret successfully registered",
        "erro": false,
        "cod_erro": 0
    },
    "api_entity": {
        "identifier": "43",
        "name": "GCP",
        "url": "https://gcp.com",
        "client_secret": "gf5464g5v7ffsd857xc4fds57g8fds",
        "client_id": "gf455f7g8fb5dfg8fd545bffbv",
        "identifier_code": "hyga125",
        "method": "get",
        "tags": "Cloud",
        "notes": "Access details",
        "users_allowed": [
            {
                "username": "pduarte",
                "can_edit": true
            }
        ],
        "groups_allowed": [
            {
                "name": "Test group",
                "can_edit": false
            }
        ],
        "shared_error": []
    }
}
```


**Em caso de erro - parâmetro obrigatório ausente**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1001: Parameter 'name' was not informed!",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1001: Parameter 'name' was not informed!",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1001,
        "message": "1001: Parameter 'name' was not informed!",
        "detail": null
    }
}
```


### Atualizar um segredo de API
#### Requisição
Para atualizar um segredo de API no **MySafe**, envie uma requisição para o seguinte endpoint:

```
PUT /api/mysafe/secretapi/update/[identifier]
```

#### Parâmetros de requisição
***Path***

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
|  ```identifier```| string | Sim |Código identificador único associado à cada entrada na tabela de segredos de API. Esse valor é automaticamente atribuído pelo senhasegura no momento de  [criação do segredo de API](/v3-32/docs/pt/mysafe-apis-create-or-update-an-api-secret) I e é obtido na resposta da requisição [Listar todos os segredos de API ou Listar um segredo de API](/v3-32/docs/pt/mysafe-apis-list-api-secrets). **Nota**: não confunda com o parâmetro ```identifier_code```, que é criado pelo usuário no momento de criação do segredo de API. |43|

***Body***

:::(Info) (Info)
Ao enviar uma requisição de atualização, não é necessário incluir parâmetros que você não deseja editar.
:::
| Campo |  | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- | --- |
| `name ` |  | String | Não | Nome atribuído ao segredo de API. | GCP1 |
| `url ` |  | String | Não | URL do site onde o segredo de API está sendo usado.  | https://gcp1.com |
| ` client_id` |  | String | Não | ID da aplicação cliente que usará este segredo da API. | hy7464g5v8ghy4d858jk7fds57t4tr |
| ` client_secret` |  | String | Não | Uma chave confidencial conhecida apenas pelo cliente e pelo servidor de autorização, usada para autenticar o cliente junto ao servidor. | hb455f7g8fg9dfg8yt845bxxku |
| `identifier_code ` |  | String | Não | String única definida pelo usuário para identificar o segredo de API. | gcp7852 |
| ` tags` |  | String | Não | Palavras-chave para ajudar a identificar o segredo de API. | Cloud1 |
| ` notes` |  | String | Não | Observações sobre o segredo da API. | Access details for this API secret |
| ` method` |  | String | Não | O método HTTP a ser usado para as requisições da API. | get |
| ` users_allowed` |  | Array de objetos | Não | Informação sobre os usuários com permissão de acesso ao segredo de API. |  |
|  | `username ` | String | Não | Nome de usuário do usuários que poderá acessar o segredo da API. | alices |
|  | ` can_edit` | Boolean | Não | Permissão de edição. Se deixado vazio, o usuário terá apenas permissão de visualização. |true |
| `groups_allowed ` |  | Array de objetos | Não | Informação sobre os grupos com permissão de acesso ao segredo de API. |  |
|  | `name ` | String | Não | Nome do grupo com permissão de acesso ao segredo de API. | |
|  | ` can_edit` | Boolean | Não | Permissão de edição. Se deixado vazio, o usuário terá apenas permissão de visualização. |  |

**Exemplo de requisição**

```
{
    "name": "GCP1",
    "url": "https://gcp1.com",
    "client_id": "hb455f7g8fg9dfg8yt845bxxku",
    "client_secret": "hy7464g5v8ghy4d858jk7fds57t4tr",
    "identifier_code": "gcp7852",
    "tags": "Cloud1",
    "notes": "Access details for this API secret",
     "users_allowed": [
        {
            "username" : "alices",
            "can_edit" : true
        }
    ],
    "groups_allowed": []
```
:::(Info) (Info)
Como o parâmetro `method` não foi editado, ele não foi incluído na requisição exemplificada acima.
:::

#### Retorno
Atualiza um segredo de API armazenado no **MySafe** baseado em seu `identifier` e retorna uma mensagem com informações sobre o processo de atualização. 





**Resposta esperada**

```
HTTP/1.1 200 OK
```

```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Api secret updated successfully",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Api secret updated successfully",
        "erro": false,
        "cod_erro": 0
    },
    "api_entity": {
        "identifier": "43",
        "name": "GCP1",
        "url": "https://gcp1.com",
        "client_secret": "hy7464g5v8ghy4d858jk7fds57t4tr",
        "client_id": "hb455f7g8fg9dfg8yt845bxxku",
        "identifier_code": "gcp7852",
        "method": "get",
        "tags": "Cloud1",
        "notes": "Access details for this API secret",
        "users_allowed": [
            {
                "username": "alices",
                "can_edit": true
            }
        ],
        "groups_allowed": [],
        "shared_error": []
    }
}
```

**Em caso de erro - `identifier` já encontrado em outro segredo de API deste usuário**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1001: 'Identifier' already found in another API key of this user",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1001: 'Identifier' already found in another API key of this user",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1001,
        "message": "1001: 'Identifier' already found in another API key of this user",
        "detail": null
    }
}
```

**Em caso de erro - usuário não possui acesso a este segredo de API**
```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1006: User does not have access",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1006: User does not have access",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1006,
        "message": "1006: User does not have access",
        "detail": null
    }
}
```
