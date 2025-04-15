# Inativar ou ativar uma credencial

Este documento apresenta como desativar ou ativar uma credencial no **PAM Core** via API, via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e as respostas em caso de sucesso ou em caso de erros.


## Métodos

### `DELETE` Inativar uma credencial

#### Requisição

Há dois endpoints possíveis para inativar uma credencial. 

#### Primeiro endpoint


Para desativar uma credencial registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:

`/iso/pam/credential/[id]`

#### Parâmetros de requisição

***Path***


| Campo  | Tipo   | Obrigatório | Descrição                                     | Exemplo |
| ------ | ------ | ------------ | ----------------------------------------------- | ------- |
| `id` | Int | Sim          | Código único de identificação da credencial. Esse valor é automaticamente atribuído pelo senhasegura no momento de [criação da credencial](/v3-32/docs/pt/a2a-pam-core-create-or-update-a-credential) e é obtido na resposta da requisição [Listar todas as credenciais](/v3-32/docs/pt/a2a-pam-core-list-credentials#listar-todas-as-credenciais).|5   |

#### Retorno
Inativa uma credencial registrada no **PAM Core** baseado em seu `id` e retorna uma mensagem com informações sobre o processo de inativação.

**Resposta esperada**


```
HTTP/1.1 200 OK
```

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}

```
#### Segundo endpoint

Para inativar uma credencial registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:

`/iso/pam/credential/[username@hostname]`

#### Parâmetros de requisição
***Path***


| Campo  | Tipo   | Obrigatório | Descrição                                     | Exemplo |
| ------ | ------ | ------------ | ----------------------------------------------- | ------- |
| `username@hostname` | String | Sim          | Nome de usuário e hostname associados à credencial separados por um sinal de @. Esse valor é atribuído pelo usuário no momento de [criação da credencial](/v3-32/docs/pt/a2a-pam-core-create-or-update-a-credential). |credential_5@destktop-91.com     |


:::(Warning) (Atenção)
Caso o `username` fornecido  possua um @, o endpoint não funcionará como esperado devido ao conflito gerado pela presença de dois símbolos @ no endpoint. 
:::

#### Retorno
Inativa uma credencial registrada no **PAM Core** baseado no `username` e `hostname` fornecidos, e retorna uma mensagem com informações sobre o processo de inativação.

**Resposta esperada**


```
HTTP/1.1 200 OK
```

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}

```



**Em caso de erro - credencial não encontrada**


```
HTTP/1.1 400 Bad Request
```

```json
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1007: Credential not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1007: Credential not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1007,
        "message": "1007: Credential not found",
        "detail": null
    }
}
```
### `PUT` Ativar uma credencial

#### Requisição


Para ativar uma credencial registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:

`/iso/pam/credential/[id]`

#### Parâmetros de requisição

***Path***


| Campo  | Tipo   | Obrigatório | Descrição                                     | Exemplo |
| ------ | ------ | ------------ | ----------------------------------------------- | ------- |
| `id` | Int | Sim          | Código único de identificação da credencial. Esse valor é automaticamente atribuído pelo senhasegura no momento de [criação da credencial](/v3-32/docs/pt/a2a-pam-core-create-or-update-a-credential) e é obtido na resposta da requisição [Listar todas as credenciais](/v3-32/docs/pt/a2a-pam-core-list-credentials#listar-todas-as-credenciais).|5    |

#### Retorno
Ativa uma credencial registrada no **PAM Core** baseado em seu `id` e retorna uma mensagem com informações sobre o processo de ativação.

**Resposta esperada**


```
HTTP/1.1 200 OK
```

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential successfully activated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential successfully activated",
        "erro": false,
        "cod_erro": 0
    }
}
```

**Em caso de erro - credencial não encontrada**


```
HTTP/1.1 400 Bad Request
```

```json
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1007: Credential not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1007: Credential not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1007,
        "message": "1007: Credential not found",
        "detail": null
    }
}
```
