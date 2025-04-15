# Inativar ou ativar um segredo de API

Este artigo apresenta como inativar ou ativar um segredo de API no **MySafe** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e respostas em caso de sucesso ou em caso de erros.

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
### Inativar um segredo de API


#### Requisição




Para inativar um segredo de API no **MySafe**, envie uma requisição para o seguinte endpoint:

```
POST /api/mysafe/secretapi/inactive/[identifier]
```

#### Parâmetros de requisição





***Path***

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
|  ```identifier```| string | Sim |Código identificador único associado à cada entrada na tabela de segredos de API. Esse valor é automaticamente atribuído pelo senhasegura no momento de  [criação do segredo de API](/v3-32/docs/pt/mysafe-apis-create-or-update-an-api-secret) I e é obtido na resposta da requisição [Listar todos os segredos de API ou Listar um segredo de API](/v3-32/docs/pt/mysafe-apis-list-api-secrets). **Nota**: não confunda com o parâmetro ```identifier_code```, que é criado pelo usuário no momento de criação do segredo de API. |43|

#### Retorno
Inativa um segredo de API associado ao acesso do seu usuário no **MySafe**, com base em seu `identifier`, e uma mensagem com informações sobre o processo de inativação.

**Resposta esperada**

```
HTTP/1.1 200 OK

```


```
{
    "response": {
        "status": 200,
        "message": "API secret  successfully deactivated",
        "error": false,
        "error_code": 0,
    "detail": "",
        "mensagem": "API secret  successfully deactivated",
        "erro": false,
        "cod_erro": 0
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
        "message": "1005: Api secret not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1005: Api secret not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1005,
        "message": "1005: Api secret not found",
        "detail": null
    }
}
```

### Ativar um segredo de API


#### Requisição




Para ativar um segredo de API no **MySafe**, envie uma requisição para o seguinte endpoint:

```
POST /api/mysafe/secretapi/active/[identifier]
```

#### Parâmetros de requisição





***Path***

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
|  ```identifier```| string | Sim |Código identificador único associado à cada entrada na tabela de segredos de API. Esse valor é automaticamente atribuído pelo senhasegura no momento de  [criação do segredo de API](/v3-32/docs/pt/mysafe-apis-create-or-update-an-api-secret) I e é obtido na resposta da requisição [Listar todos os segredos de API ou Listar um segredo de API](/v3-32/docs/pt/mysafe-apis-list-api-secrets). **Nota**: não confunda com o parâmetro ```identifier_code```, que é criado pelo usuário no momento de criação do segredo de API. |43|

#### Retorno
Ativa um segredo de API associado ao acesso do seu usuário no **MySafe**, com base em seu `identifier`, e retorna uma mensagem com informações sobre o processo de ativação.

**Resposta esperada**

```
HTTP/1.1 200 OK

```


```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Api secret activated successfully",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Api secret activated successfully",
        "erro": false,
        "cod_erro": 0
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
        "message": "1005: Api secret not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1005: Api secret not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1005,
        "message": "1005: Api secret not found",
        "detail": null
    }
}
```
