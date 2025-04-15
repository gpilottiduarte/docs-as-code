# Listar segredos de API

Este artigo apresenta como acessar as informações dos segredos de API armazenados no **MySafe** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e respostas em caso de sucesso ou em caso de erros.

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

### Listar todos os segredos de API 
#### Requisição
Para acessar uma lista com todos os segredos de API armazenados no **MySafe**, envie uma requisição para o seguinte endpoint:


```
GET /api/mysafe/secretapi
```

#### Parâmetros de requisição

***Query***

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| ```tag```| string | Não | Busca por todos os segredos de API registrados com uma ```tag``` específica. |test |
|  ```identifier_code```| string | Não | Busca por um segredo de API baseado em seu ```identifier_code```. Esse código é criado pelo usuário no momento de [criação do segredo de API](/v3-32/docs/pt/mysafe-apis-create-or-update-an-api-secret). **Nota**: não confunda com o parâmetro ```identifier```, que é gerado automaticamente pelo senhasegura e está associado à cada entrada na tabela de segredos de API. |  |

#### Retorno
Retorna todos os segredos de API associados ao acesso do seu usuário no **MySafe** e apresenta uma mensagem com informações sobre o processo de consulta.


**Resposta esperada**

```
HTTP/1.1 200 OK
```

```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "",
        "erro": false,
        "cod_erro": 0
    },
    "api_secret_on_list": [
        {
            "identifier": "14",
            "name": "Teste",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "40",
            "name": "My API secret",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        }
    ]
}
```
### List an API secret
#### Request
To access an API secret stored in **MySafe**, send a request to the following endpoint:

```
GET /api/mysafe/secretapi/[identifier]
```
#### Parâmetros de requisição

***Path***



| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
|  ```identifier```| string | Sim |Código identificador único associado à cada entrada na tabela de segredos de API. Esse valor é automaticamente atribuído pelo senhasegura no momento de  [criação do segredo de API](/v3-32/docs/pt/mysafe-apis-create-or-update-an-api-secret). **Nota**: não confunda com o parâmetro ```identifier_code```, que é criado pelo usuário no momento de criação do segredo de API. |40  |

#### Retorno
Retorna um segredo de API associado ao acesso do seu usuário no **MySafe**, com base em seu `identifier`, e uma mensagem com informações sobre o processo de consulta.


**Resposta esperada**

```
HTTP/1.1 200 OK

```

```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Success",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Success",
        "erro": false,
        "cod_erro": 0
    },
    "api_secret_entity": {
        "identifier": "40",
        "name": "My API secret",
        "url": "www.url.com",
        "client_secret": "dq986483917r56e997",
        "client_id": "jdpidnbpchje6y76egh",
        "identifier_code": "dfqw45d",
        "method": "get",
        "tags": "secret",
        "notes": "My API secret",
        "users_allowed": [
            {
                "name": "pduarte",
                "can_edit": false
            }
        ],
        "groups_allowed": [
            {
                "name": "Test group",
                "can_edit": false
            }
        ]
    }
}

```
**Em caso de erro - usuário não possui acesso a esse segredo de API**

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

**Em caso de erro - segredo de API não encontrado**

```
HTTP/1.1 400 Bad Request

```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1005: API secret not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1005: API secret not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1005,
        "message": "1005: API secret not found",
        "detail": null
    }
}
```

**Em caso de erro - segredo de API inativo**


```
HTTP/1.1 400 Bad Request

```
```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1009: Inactive api secret",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1009: Inactive api secret",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1009,
        "message": "1009: Inactive api secret",
        "detail": null
    }
}
```