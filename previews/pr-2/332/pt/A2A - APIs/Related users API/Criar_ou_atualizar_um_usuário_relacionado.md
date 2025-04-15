# Criar ou atualizar um usuário relacionado

Este documento apresenta como criar ou atualizar, via API, as informações de um usuário relacionado registrado no senhasegura, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e as respostas em caso de sucesso ou em caso de erros.

## Autorização

Para começar, certifique-se de que **Usuários** esteja listado em **Recursos autorizados** no seu módulo **A2A**.
Para mais informações sobre a autorização de um aplicativo, acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application).

## Autenticação

Cada requisição nas APIs deve conter a **OAuth Consumer Key** e o **OAuth Token** do cliente.
Para mais informações sobre a autenticação, acesse o documento sobre [Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application).

## Métodos
### Criar um usuário relacionado
#### Requisição

Para criar um usuário relacionado no senhasegura, envie uma requisição para o seguinte endpoint:


```
POST /iso/user/related
```

#### Parâmetros de requisição
***Body***

| Campo |Tipo |Obrigatório| Descrição | Exemplo |
| --- |---|--- | --- |  --- | 
|`name` | String |Sim |Nome atribuído ao usuário relacionado que está sendo criado.   | ademirdiniz |
|`username` | String | Sim|Nome de identificação do usuário já cadastrado no senhasegura.|adiniz |


**Exemplo de requisição**

```
{ 
    "name": "ademirdiniz",
    "username": "adiniz"
}
```

#### Retorno



Cria um usuário relacionado no senhasegura e retorna uma mensagem com informações sobre o processo de criação.

**Resposta esperada**

```
HTTP/1.1 200 OK
```

```
{
    "response": {
        "status": 200,
        "mensagem": "Related user successfully registered!",
        "erro": false,
        "message": "Related user successfully registered!",
        "error": false,
    },
    "relatedUsers": {          
        "id": 3,
        "name": "ademirdiniz",
        "username": "adiniz"
      }
}
```
**Em caso de erro - parâmetro obrigatório ausente**


```
HTTP/1.1 400 Bad Request
```

```
{
    "response": {
        "status": 400,
        "mensagem": "1001: Parameter 'username' was not informed!",
        "erro": true,
        "cod_erro": 0,
        "message": "1001: Parameter 'username' was not informed!",
        "error": true,
        "error_code": 0
    },
    "exception": {
        "code": 1001,
        "message": "1001: Parameter 'username' was not informed!",
        "detail": ""
    }
```

### Atualizar um usuário relacionado
#### Requisição
Para atualizar um usuário relacionado registrado no senhasegura, envie uma requisição para o seguinte endpoint:

#### Parâmetros de requisição

***Path***
| Campo |Tipo |Obrigatório| Descrição | Exemplo |
| --- |---|--- | --- |  --- | 
|`id` | Int |Sim |Código único de identificação do usuário relacionado associado à cada entrada na tabela de Usuários relacionados. Esse valor é automaticamente atribuído pelo senhasegura no momento de [criação do usuário relacionado](/v3-32/docs/pt/a2a-pam-core-create-or-update-a-related-user#criar-um-usuário-relacionado) e pode ser obtido na resposta à requisição [Listar todos os usuários relacionados](/v3-32/docs/pt/a2a-pam-core-list-related-users).  | ademirdiniz |

***Body***

:::(Info) (Info)
Ao enviar uma requisição de atualização, não é necessário incluir parâmetros que você não deseja editar.
:::

| Campo |Tipo |Obrigatório| Descrição | Exemplo |
| --- |---|--- | --- |  --- | 
|`name` | String |Sim |Nome atribuído ao usuário relacionado que está sendo criado.   | Ademir Diniz |
|`username` | String | Sim|Nome de identificação do usuário já cadastrado no senhasegura.|addiniz |

**Exemplo de requisição**

```
{ 
    "id" : 3,
    "name": "Ademir Diniz",
    "username": "addiniz"
}
```

#### Retorno


Atualiza um usuário relacionado no senhasegura com base em seu `id` e retorna uma mensagem com informações sobre o processo de atualização.

**Resposta esperada**

```
HTTP/1.1 200 OK
```

```
"response": {
        "status": 200,
        "mensagem": "Related user successfully updated!",
        "erro": false,
        "cod_erro": 0,
        "message": "Related user successfully updated!",
        "error": false,
        "error_code": 0
    },
    "relatedUsers": {
        "id": "3",
        "name": "Ademir Diniz",
        "username": "aadiniz"
    }
```
---
**Em caso de erro - parâmetro obrigatório ausente**
```
HTTP/1.1 400 Bad Request
```

```
{
    "response": {
        "status": 400,
        "mensagem": "1001: Parameter 'username' was not informed!",
        "erro": true,
        "cod_erro": 0,
        "message": "1001: Parameter 'username' was not informed!",
        "error": true,
        "error_code": 0
    },
    "exception": {
        "code": 1001,
        "message": "1001: Parameter 'username' was not informed!",
        "detail": ""
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