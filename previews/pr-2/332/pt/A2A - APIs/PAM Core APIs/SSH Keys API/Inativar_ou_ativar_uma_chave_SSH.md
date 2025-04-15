# Inativar ou ativar uma chave SSH

Este documento apresenta como inativar ou ativar uma chave SSH no PAM Core via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e as respostas em caso de sucesso ou em caso de erros.

## Autorização
Para começar, certifique-se de que o **PAM Core** esteja listado em **Recursos autorizados** no seu módulo **A2A**. Para mais informações sobre a autorização de um aplicativo, acesse a documentação sobre como [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application).

## Autenticação
Cada requisição nas APIs deve conter a **OAuth Consumer Key** e o **OAuth Token** do cliente. Para mais informações sobre a autenticação, acesse a documentação sobre [Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application).

## Métodos

### Inativar uma chave SSH

#### Requisição

Para inativar uma chave SSH registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:

`DELETE /iso/pam/key/[id]`

#### Parâmetros de requisição

***Path***

| Campo | Tipo   | Obrigatório | Descrição                                     | Exemplo |
| ----- | ------ | ------------ | ----------------------------------------------- | ------- |
| `id`    | Int | Sim          | Código único de identificação da chave SSH associado à cada entrada na tabela de chaves SSH. Este valor é automaticamente atribuído pelo senhasegura no momento de [criação da chave SSH](/v3-32/docs/pt/a2a-pam-core-create-or-update-an-ssh-key) e pode ser obtido na resposta da requisição GET iso/pam/credential que lista todas as credenciais acessíveis ao seu usuário. Para mais informações sobre esse endpoint, acesse o documento sobre [API de credenciais](/v3-32/docs/pt/a2a-api-credentials).  | 14694     |


#### Retorno

Inativa uma chave SSH registrada no **PAM Core** baseado em seu `id` e retorna uma mensagem com informações sobre o processo de inativação.

**Resposta esperada**

`HTTP/1.1200OK`

```json
{

    "code": 200,
    "response":  {
        "status": 200,
        "message": "Key successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Key successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}

```

#### Em caso de erro - chave SSH já está inativa

`HTTP/1.1 400 Bad Request`

```json
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1017: Key inactive",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1017: Key inactive",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1017,
        "message": "1017: Key inactive",
        "detail": null
    }
}
```


#### Em caso de erro - usuário não possui acesso a essa chave SSH

`HTTP/1.1 400 Bad Request`

```json
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1009: No access to credential",
        "error": true,  
        "error_code": 1,    
        "detail": "",
        "mensagem": "1009: No access to credential",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1009,
        "message": "1009: No access to credential",
        "detail": null
    }
}
```


### Ativar uma chave SSH

#### Requisição

Para ativar uma chave SSH registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:

`PUT /iso/pam/key/[id]`

#### Parâmetros de requisição

***Path***

| Campo | Tipo   | Obrigatório | Descrição                                     | Exemplo |
| ----- | ------ | ------------ | ----------------------------------------------- | ------- |
| `id`    | Int | Sim          | Código único de identificação da chave SSH associado à cada entrada na tabela de chaves SSH. Este valor é automaticamente atribuído pelo senhasegura no momento de [criação da chave SSH](/v3-32/docs/pt/a2a-pam-core-create-or-update-an-ssh-key) e pode ser obtido na resposta da requisição GET iso/pam/credential que lista todas as credenciais acessíveis ao seu usuário. Para mais informações sobre esse endpoint, acesse o documento sobre [API de credenciais](/v3-32/docs/pt/a2a-api-credentials).  | 14694     |

#### Retorno

Ativa uma chave SSH registrada no **PAM Core** baseado em seu `id` e retorna uma mensagem com informações sobre o processo de ativação.

**Resposta esperada**

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Key successfully activated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Key successfully activated",
        "erro": false,
        "cod_erro": 0
    }
}
```

**Em caso de erro - a chave SSH já está ativa**

`HTTP/1.1 400 Bad Request`

```json
 {
    "code": 400,
    "response": {
        "status": 400,
        "message": "1045: Ssh key is already activated",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1045: Ssh key is already activated",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1045,
        "message": "1045: Ssh key is already activated",
        "detail": ""
    }
}
```

#### Erros possíveis
Aqui está uma lista de códigos de erro HTTP e seus respectivos motivos:
* **1009**: No access to credential (Sem acesso à credencial)
* **1013**: The public key was not informed  (Chave pública não informada).
* **1014**: The private key was not informed (Chave privada não informada).
* **1016**: The item is not a ssh key (O item não é uma chave SSH).
