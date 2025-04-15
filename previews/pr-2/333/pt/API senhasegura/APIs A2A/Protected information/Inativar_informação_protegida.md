# Inativar informação protegida

Este documento apresenta como inativar uma informação protegida no **PAM Core** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e as respostas em caso de sucesso ou em caso de erros.

## Métodos
### `DELETE` Inativar uma informação protegida 
#### Requisição
Para inativar uma informação protegida registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:

`/iso/pam/info/[id]`

#### Parâmetros de requisição
***Path***


| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| `id` | Int | Sim | Código único de identificação da informação protegida. Esse valor é automaticamente atribuído pelo senhasegura no momento de [criação do item protegido](/v3-33/docs/pt/a2a-pam-core-create-protected-information). | 1 |

#### Retorno



Inativa a informação protegida no **PAM Core** com base em seu `id` e uma mensagem com informações sobre o processo de inativação.

**Resposta esperada**

`HTTP/1.1 200 OK`

```json

    "response": {
        "status": 200,
        "mensagem": "Information successfully disabled",
        "erro": false,
        "message": "Information successfully disabled",
        "error": false
    }
}
```

**Em caso de erro - informação não encontrada**

`HTTP/1.1 400 Bad Request`

```json
{
    "response": {
        "status": 400,
        "mensagem": "1023: Information not found",
        "erro": true,
        "message": "1023: Information not found",
        "error": true
    },
    "exception": {
        "code": 1023,
        "message": "1023: Information not found",
        "detail": null
    }
}
```

**Em caso de erro - informação inativa**

`HTTP/1.1 400 Bad Request`

```json
{
    "response": {
        "status": 400,
        "mensagem": "1024: Inactive information",
        "erro": true,
        "message": "1024: Inactive information",
        "error": true
    },
    "exception": {
        "code": 1024,
        "message": "1024: Inactive information",
        "detail": null
    }
}
```