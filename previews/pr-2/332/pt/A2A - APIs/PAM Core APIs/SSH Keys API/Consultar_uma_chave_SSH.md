# Consultar uma chave SSH

Este documento apresenta como acessar as informações de uma chave SSH no **PAM Core** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e respostas em caso de sucesso ou em caso de erros.

## Autorização
Para começar, certifique-se de que o **PAM Core** esteja listado em **Recursos autorizados** no seu módulo **A2A**. Para mais informações sobre a autorização de um aplicativo, acesse o documento sobre como [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application).

## Autenticação
Cada requisição nas APIs deve conter a **OAuth Consumer Key** e o **OAuth Token** do cliente. Para mais informações sobre a autenticação, acesse o documento sobre [Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application).

## Métodos

### Consultar uma chave SSH

#### Requisição

Para acessar uma chave SSH registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:

`GET/iso/pam/key/[id]`

#### Parâmetros de requisição

***Path***



| Campo  | Tipo   | Obrigatório | Descrição                                     | Exemplo |
| ------ | ------ | ------------ | ----------------------------------------------- | ------- |
| `id` | Int | Sim          | Código único de identificação da chave SSH associado à cada entrada na tabela de chaves SSH. Este valor é automaticamente atribuído pelo senhasegura no momento de [criação da chave SSH](/v3-32/docs/pt/a2a-pam-core-create-or-update-an-ssh-key) e pode ser obtido na resposta da requisição `GET iso/pam/credential` que lista todas as credenciais acessíveis ao seu usuário. Para mais informações sobre esse endpoint, acesse o documento sobre [API de credenciais](/v3-32/docs/pt/a2a-api-credentials). | 14694     |


#### Retorno

Retorna uma chave SSH registrado no **PAM Core** com base em seu `id` e uma mensagem com informações sobre o processo de recuperação.

**Resposta esperada**

```
HTTP/1.1 200 OK
```
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Key 14694",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Key 14694",
        "erro": false,
        "cod_erro": 0
    },
    "key": {
        "id": "14694",
        "username": "jsilva",
        "key_name": "api-ssgr1144-evidencia2",
        "hostname": "API-Testing",
        "ip": "128.0.0.1",
        "private_key": "private-key",
        "public_key": "public-key",
        "password": null,
        "tags": [
            "tag1",
            "tag2",
            "tag3"
        ],
        "devices": [
            {
                "hostname": "API-Device1",
                "ip": "128.0.0.1"
            },
            {
                "hostname": "API-Device2",
                "ip": "128.0.0.1"
            },
            {
                "hostname": "API-Device3",
                "ip": "128.0.0.1"
            },
            {
                "hostname": "API-Device4",
                "ip": "128.0.0.1"
            },
         ],
        "expiration_time": null
    }
}
```


#### Em caso de erro - a credencial não é uma chave SSH

```
HTTP/1.1 400 Bad Request
```

```json
{
    "code":400,
    "response": {
	"status":400,
	"message":"1016:The item is not a ssh key",
	"error":true,
	"error_code":1,
	"detail":"",
	"mensagem":"1016:The item is not a ssh key",
	"erro":true,
	"cod_erro":1
	},
    "exception":{
    "code":1016,
    "message":"1016:The item is not a ssh key",
    "detail":null
    }
}
```
#### Em caso de erro - erro inesperado

:::(info)(Info)
Esse erro pode ser causado pelo não fornecimento de um valor para o parâmetro `id`. 
:::

```
HTTP/1.1 500 Internal Server Error
```

```json

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
	"code": 500,
	"message": "Check the index log system error for more details",
	"detail": null
    }
}
```

#### Em caso de erro - chave SSH não encontrada

```
HTTP/1.1 400 Bad Request
```

```json
{
    "code":400,
    "response": {
	"status":400,
	"message":"1015:SSH key not found",
	"error":true,
	"error_code":1,
	"detail":"",
	"mensagem":"1015:SSH key not found",
	"erro":true,
	"cod_erro":1
	},
    "exception": {
	"code":1015,
	"message":"1015:SSH key not found",
	"detail":null
    }
}
```


