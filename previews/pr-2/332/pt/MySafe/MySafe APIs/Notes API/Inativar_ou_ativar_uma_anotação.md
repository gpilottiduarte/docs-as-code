# Inativar ou ativar uma anotação

Este artigo apresenta como inativar ou ativar uma anotação armazenada no **MySafe** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e respostas em caso de sucesso ou erro.

## Autorização

A autorização para as APIs do **MySafe** é feita diretamente no módulo.
Para mais informações, acesse o documento sobre [Como adicionar uma autorização de chave de acesso](/v3-32/docs/pt/mysafe-how-to-add-an-access-key-authorization).

## Autenticação

A autenticação nas **APIs MySafe** é feita utilizando o método de autenticação OAuth 2.0. Para iniciar este processo, é necessário fornecer o **Client ID** e o **Client Secret**, além de obter o **token de autenticaçã**o deles a partir do endpoint:
```
GET /api/oauth2/token
```
Para mais informações sobre como obter o **Client ID** e o **Client Secret**, acesse o documento sobre [Como visualizar uma autorização de chave de acesso](/v3-32/docs/pt/mysafe-how-to-view-an-access-key-authorization).

## Métodos

### Inativar uma anotação
#### Requisição
Para inativar uma anotação armazenada no **MySafe**, envie uma requisição para o seguinte endpoint:

```
POST /api/mysafe/note/inactive/[identifier]
```

#### Parâmetros de requisição
***Path***

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
|```identifier```| Int | Sim | Código identificador  único associado a cada entrada na tabela de anotações. Este valor é automaticamente atribuído pelo senhasegura ao  [criar uma anotação](/v3-32/docs/pt/mysafe-apis-create-or-update-a-note) e é obtido na resposta da requisição  [Listar todas as anotações](/v3-32/docs/pt/mysafe-apis-list-notes). | 173 |

#### Retorno
Inativa uma anotação armazenada no **MySafe** com base em seu `identifier` e retorna uma mensagem com informações sobre o processo de inativação.

**Resposta esperada**


```
{
    "response": {
        "status": 200,
        "mensagem": "Note successfully deactivated",
        "erro": false,
        "cod_erro": 0,
        "message": "Note successfully deactivated",
        "error": false,
        "error_code": 0
    }
}
```
**Em caso de erro - usuário não possui acesso a essa anotação**

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

**Em caso de erro - anotação não encontrada**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1005: Note not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1005: Note not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1005,
        "message": "1005: Note not found",
        "detail": null
    }
}
```

### Ativar uma anotação
### Requisição
Para ativar uma anotação armazenada no **MySafe**, envie uma requisição para o seguinte endpoint:

```
POST /api/mysafe/note/active/[identifier]
```

#### Parâmetros de requisição
***Path***
| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
|```identifier```| Int | Sim | Código identificador  único associado a cada entrada na tabela de anotações. Este valor é automaticamente atribuído pelo senhasegura ao  [criar uma anotação](/v3-32/docs/pt/mysafe-apis-create-or-update-a-note#create-a-note) e é obtido na resposta da requisição  [Listar todas as anotações ou Listar uma anotação](/v3-32/docs/pt/mysafe-apis-list-notes). | 173 |


#### Retorno
Ativa uma anotação armazenada no **MySafe** com base em seu `identifier` e retorna uma mensagem com informações sobre o processo de ativação.


**Resposta esperada**

```
HTTP/1.1 200 OK
```

```
{
    "response": {
        "status": 200,
        "mensagem": "Note successfully activated",
        "erro": false,
        "cod_erro": 0,
        "message": "Note successfully activated",
        "error": false,
        "error_code": 0
    }
}
```
**Em caso de erro - usuário não possui acesso a essa anotação**

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

**Em caso de erro - anotação não encontrada**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1005: Note not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1005: Note not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1005,
        "message": "1005: Note not found",
        "detail": null
    }
}
```
