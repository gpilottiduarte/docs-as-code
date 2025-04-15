# Liberar a custódia de uma credencial

Este documento apresenta como liberar a custódia de uma credencial no **PAM Core** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e as respostas em caso de sucesso ou em caso de erros.

### `DELETE` Liberar a custódia de uma credencial

Quando a API recebe uma solicitação de senha, nós referimos a isso como conceder temporariamente a custódia correspondente ao usuário. Quando a API revoga o acesso a essa credencial, descrevemos isso como liberar a custódia.

#### Requisição


Para liberar a custódia de uma credencial registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:



`/iso/pam/credential/custody/[id]`

#### Parâmetros de requisição

***Path***



| Campo  | Tipo   | Obrigatório | Descrição                                     | Exemplo |
| ------ | ------ | ------------ | ----------------------------------------------- | ------- |
| `id` | Int | Sim          | Código único de identificação da credencial. Esse valor é automaticamente atribuído pelo senhasegura no momento de [criação da credencial](/v3-32/docs/pt/a2a-pam-core-create-or-update-a-credential) e é obtido na resposta da requisição [Listar todas as credenciais](/v3-32/docs/pt/a2a-pam-core-list-credentials#listar-todas-as-credenciais).|94     |


#### Retorno

Libera a custódia de uma credencial registrada no **PAM Core** com base em seu `id` e uma mensagem com informações sobre o processo de liberação.

**Resposta esperada**

```
HTTP/1.1 200 OK
```
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential custody 94 released",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential custody 94 released",
        "erro": false,
        "cod_erro": 0
    }
}

```
:::(Info) (Info)
Na `mensagem` acima, `Credential custody 94 released`, 94 é o `identifier` da credencial.
:::

 **Em caso de erro - credencial não encontrada**

```
HTTP/1.1 400 Bad Request
```

```json
{
    "response": {
        "status": 400,
        "mensagem": "1007: Credential not found",
        "erro": true,
        "message": "1007: Credential not found",
        "error": true
    },
    "exception": {
        "code": 1007,
        "message": "1007: Credential not found",
        "detail": null
    }
}
```

**Em caso de erro - usuário não possui a custódia da credencial**


```
HTTP/1.1 400 Bad Request
```

```json
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1018: The credential is not in the user custody",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1018: The credential is not in the user custody",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1018,
        "message": "1018: The credential is not in the user custody",
        "detail": null
    }
}

```