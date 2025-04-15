# Inativar um usuário relacionado

Este documento apresenta como inativar, via API, um usuário relacionado registrado no senhasegura, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e respostas em caso de sucesso ou em caso de erros.

## Autorização

Para começar, certifique-se de que **Usuários** esteja listado em **Recursos autorizados** no seu módulo **A2A**.
Para mais informações sobre a autorização de um aplicativo, acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application).

## Autenticação

Cada requisição nas APIs deve conter a **OAuth Consumer Key** e o **OAuth Token** do cliente.
Para mais informações sobre a autenticação, acesse o documento sobre [Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application).

## Métodos

### Inativar um usuário relacionado
#### Requisição

Para inativar um usuário relacionado registrado no senhasegura, envie uma requisição para o seguinte endpoint:

```
DELETE /iso/user/related/[id]
```
#### Parâmetros de requisição

***Path***

| Campo |Tipo |Obrigatório| Descrição | Exemplo |
| --- |---|--- | --- |  --- | 
|`id` | Int |Sim |Código único de identificação do usuário relacionado associado à cada entrada na tabela de Usuários relacionados. Esse valor é automaticamente atribuído pelo senhasegura no momento de [criação do usuário relacionado](/v3-32/docs/pt/a2a-pam-core-create-or-update-a-related-user) e pode ser obtido na resposta à requisição [Listar todos os usuários relacionados](/v3-32/docs/pt/a2a-pam-core-list-related-users).  | 3 |

#### Retorno



Inativa um usuário relacionado registrado no senhasegura com base em seu `id` e retorna uma mensagem com informações sobre o processo de atualização.

**Resposta esperada**

```
HTTP/1.1 200 OK
```

```
{
    "response": {
        "status": 200,
        "mensagem": "Related user successfully deactivated",
        "erro": false,
        "message": "Related user successfully deactivated",
        "error": false,
    }
}
```
---
**Em caso de erro - usuário não encontrado**

```
HTTP/1.1 400 Bad Request
```

```
{
    "response": {
        "status": 400,
        "mensagem": "1005: Related user not found",
        "erro": true,
        "cod_erro": 0,
        "message": "1005: Related user not found",
        "error": true,
        "error_code": 0
    },
    "exception": {
        "code": 1005,
        "message": "1005: Related user not found",
        "detail": ""
    }
}
```
