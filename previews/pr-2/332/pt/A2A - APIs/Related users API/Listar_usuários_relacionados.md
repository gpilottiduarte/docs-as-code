# Listar usuários relacionados

Este documento apresenta como acessar, via API, as informações de usuários relacionados registrados no senhasegura, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e respostas em caso de sucesso ou em caso de erros.

## Autorização

Para começar, certifique-se de que **Usuários** esteja listado em **Recursos autorizados** no seu módulo **A2A**.
Para mais informações sobre a autorização de um aplicativo, acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application).

## Autenticação

Cada requisição nas APIs deve conter a **OAuth Consumer Key** e o **OAuth Token** do cliente.
Para mais informações sobre a autenticação, acesse o documento sobre [Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application).

## Métodos

### Listar todos os usuários relacionados
#### Requisição

Para acessar uma lista com todos os usuários relacionados registrados no senhasegura, envie uma requisição para o seguinte endpoint:

```
GET /iso/user/related
```
#### Retorno

Retorna todos os usuários relacionados registrados no senhasegura e uma mensagem com informações sobre o processo de recuperação.

**Parâmetros de resposta**
| Campo | |Tipo | Descrição | Exemplo |
| --- |---|--- | --- | --- |
|`relatedUsers`| |Array de usuários relacionados| Lista com todos os usuários relacionados e suas informações.| 
|| `id` | Int |Código único de identificação do usuário relacionado associado à cada entrada na tabela de Usuários relacionados. Esse valor é automaticamente atribuído pelo senhasegura no momento de [criação do usuário relacionado](/v3-32/docs/pt/a2a-pam-core-create-or-update-a-related-user).| 1 | 
| |`name` | String | Nome atribuído ao usuário relacionado.  | ademirdiniz |
| |`username` | String | Nome de identificação do usuário relacionado registrado no senhasegura. | adiniz |

**Resposta esperada**

```
HTTP/1.1 200 OK
```
```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "5 related users found",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "5 related users found",
        "erro": false,
        "cod_erro": 0
    },
    "relatedUsers": [
        {
            "id": "1",
            "name": "ademirdiniz",
            "username": "adiniz"
        },
        {
            "id": "2",
            "name": "ajoeldiniz",
            "username": "adiniz"
        },
        {
            "id": "3",
            "name": "ademir",
            "username": "adiniz"
        },
        {
            "id": "4",
            "name": "ajdiniz",
            "username": "adiniz"
        },
        {
            "id": "5",
            "name": "dedas",
            "username": "dalmeida"
        }
    ]
}
```

### Listar um usuário relacionado 
#### Requisição
Para acessar informações sobre um usuário relacionado registrado no senhasegura, envie uma requisição para o seguinte endpoint:

```
GET /iso/user/related/[id]
```
#### Parâmetros de requisição

***Path***

| Campo |Tipo | Obrigatório| Descrição | Exemplo |
| --- |---|--- | --- | --- | 
| `id` | Int |Sim| Código único de identificação do usuário relacionado associado à cada entrada na tabela de Usuários relacionados. Esse valor é automaticamente atribuído pelo senhasegura no momento de [criação do usuário relacionado](/v3-32/docs/pt/a2a-pam-core-create-or-update-a-related-user) e pode ser obtido na resposta à requisição [Listar todos os usuários relacionados](/v3-32/docs/pt/a2a-pam-core-list-related-users). | 3 | 

#### Retorno



Retorna as informações do usuário relacionado no senhasegura com base em seu `id` e uma mensagem com informações sobre o processo de consulta.

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
    "relatedUsers": {
        "id": "3",
        "name": "ademir",
        "username": "adiniz"
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
    "code": 400,
    "response": {
        "status": 400,
        "message": "1005: User does not exist",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1005: User does not exist",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1005,
        "message": "1005: User does not exist",
        "detail": null
    }
}
```







