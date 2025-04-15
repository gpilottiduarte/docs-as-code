# Listar anotações

Este documento apresenta como acessar informações de anotações armazenadas no **MySafe** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e respostas em caso de sucesso ou erro.

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

### Listar todas as anotações
#### Requisição
Para consultar todas as anotações armazenadas no **MySafe**, envie uma requisição para o seguinte endpoint:

```
GET /api/mysafe/note
```

#### Parâmetros de requisição

***Query***
| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| ```tag``` | String | Não | Busca por todas as anotações identificadas por uma   `tag` específica. | secret |

#### Retorno
Retorna todas as anotações associadas ao acesso do seu usuário no **MySafe** e uma mensagem com informações sobre o processo de consulta. 


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
    "note_on_list": [
        {        {
            "identifier": "177",
            "name": "My secret note",
            "tags": "secret",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "196",
            "name": "Secret note",
            "tags": "secret",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        }
    ]
}
```

#### Listar uma anotação


#### Requisição
Para consultar uma anotação armazenada no **MySafe**, envie uma requisição para o seguinte endpoint:

```
GET /api/mysafe/note/[identifier]
```
#### Parâmetros de requisição
***Path***

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| ```identifier```| Int | Sim |Código identificador único associado a cada entrada na tabela de anotações. Este valor é automaticamente atribuído pelo senhasegura ao [criar uma anotação](/v3-32/docs/pt/mysafe-apis-create-or-update-a-note).  | 177 |

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
    "note_entity": {
        "identifier": "177",
        "name": "My secret note",
        "note": "My super top secret note",
        "tags": "secret",
        "users_allowed": [
            {
                "name": "pduarte",
                "can_edit": true
            }
        ],
        "groups_allowed": []
    }
}
```

**Em caso de erro - usuário não possui acesso a essa anotação**

```
HTTP/1.1 400 Bad Request
```

```
{
    "response": {
        "status": 400,
        "mensagem": "1006: User does not have access",
        "erro": true,
        "cod_erro": 0,
        "message": "1006: User does not have access",
        "error": true,
        "error_code": 0
    },
    "exception": {
        "code": 1006,
        "message": "1006: User does not have access",
        "detail": ""
    }
}

```

**Em caso de erro - anotação não encontrada**

```
HTTP/1.1 400 Bad Request

```

```
{
    "response": {
        "status": 400,
        "mensagem": "1005: Note not found",
        "erro": true,
        "cod_erro": 0,
        "message": "1005: Note not found",
        "error": true,
        "error_code": 0
    },
    "exception": {
        "code": 1005,
        "message": "1005: Note not found",
        "detail": ""
    }
}
```

**Em caso de erro - anotação inativa**

```
HTTP/1.1 400 Bad Request
```

```
{
    "response": {
        "status": 400,
        "mensagem": "1009: Inactive note",
        "erro": true,
        "cod_erro": 0,
        "message": "1009: Inactive note",
        "error": true,
        "error_code": 0
    },
    "exception": {
        "code": 1009,
        "message": "1009: Inactive note",
        "detail": ""
    }
}
```
**Em caso de erro - erro inesperado**

:::(Warning) (Atenção)
Pode haver um erro ao recuperar anotações criptografadas devido à quantidade de caracteres. Caso você encontre algum problema, tente diminuir o número de caracteres da anotação e enviar a requisição novamente.
:::

```
HTTP/1.1 500 Internal server error
```

```
{
    "code": 500,
    "response": {
        "status": 500,
        "message": "Unexpected error",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "Unexpected error",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 400,
        "message": "Ocorreu um erro ao criptografar o texto",
        "detail": null
    }
}
```