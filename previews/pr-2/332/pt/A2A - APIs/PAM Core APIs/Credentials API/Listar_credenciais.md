# Listar credenciais

Este documento apresenta como acessar as informações das credenciais no **PAM Core** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e respostas em caso de sucesso ou em caso de erros.


## Métodos


### `GET` Listar todas as credenciais
#### Requisição

Para acessar uma lista com todas as credenciais no **PAM Core**, envie uma requisição para o seguinte endpoint:

`/iso/pam/credential`

#### Retorno


Retorna todas as credenciais registradas no **PAM Core** associadas à sua autorização, e uma mensagem com informações sobre o processo de recuperação.

:::(Info) (Info)
Chaves SSH inseridas como credencial, também serão listadas nessa resposta. Entretanto, para listar uma chave SSH em específico, envie uma requisição `GET` para o endpoint `iso/pam/key[id]`. Para mais informações, acesse o documento sobre [Consultar uma chave SSH](/v3-32/docs/pt/a2a-pam-core-query-an-ssh-key). 
:::

**Resposta esperada**

```
HTTP/1.1 200 OK
```
```json
{
    "response": {
        "status": 200,
        "mensagem": "2 credentials found",
        "erro": false,
        "message": "2 credentials found",
        "error": false
    },
    "credentials": [
        {
            "id": "1",
            "identifier": "exampleuser01ws",
            "username": "exampleuser01",
            "expiration": null,
            "change": "2020-11-17 16:14:35",
            "view": null,
            "hostname": "exampledevice01",
            "management_ip": "172.10.20.30",
            "type": "Local User",
            "type_code": "1",
            "device_model": "Example Product",
            "device_type": "Server",
            "device_vendor": "Example Vendor",
            "automatic_change": "0",
            "connectivity": "",
            "connectivity_code": ""
        },
        {
            "id": "2",
            "identifier": "exampleuser02ws",
            "username": "exampleuser02",
            "expiration": null,
            "change": "2020-11-17 16:14:35",
            "view": null,
            "hostname": "exampledevice01",
            "management_ip": "172.10.20.30",
            "type": "Local User",
            "type_code": "1",
            "device_model": "Example Product",
            "device_type": "Server",
            "device_vendor": "Example Vendor",
            "automatic_change": "0",
            "connectivity": "",
            "connectivity_code": ""
        }
    ]
}
```

### `GET` Acessar uma credencial

#### Requisição

Há duas formas possíveis de acessar as informações de uma credencial.

#### Primeiro endpoint


Para acessar as informações de uma credencial registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:


`/iso/pam/credential/[id]`

#### Parâmetros de requisição

***Path***



| Campo  | Tipo   | Obrigatório | Descrição                                     | Exemplo |
| ------ | ------ | ------------ | ----------------------------------------------- | ------- |
| `id` | Int | Sim          | Código único de identificação da credencial. Esse valor é automaticamente atribuído pelo senhasegura no momento de [criação da credencial](/v3-32/docs/pt/a2a-pam-core-create-or-update-a-credential) e é obtido na resposta da requisição [Listar todas as credenciais](/v3-32/docs/pt/a2a-pam-core-list-credentials#listar-todas-as-credenciais).|5     |


#### Retorno

Retorna as informações da credencial registrada no **PAM Core** com base em seu `id` e uma mensagem com informações sobre o processo de recuperação.

**Resposta esperada**

```
HTTP/1.1 200 OK
```
```json
{
    "response": {
        "status": 200,
        "mensagem": "Credential 5",
        "erro": false,
        "message": "Credential 5",
        "error": false
    },
    "credential": {
        "id": "5",
        "tag": "robot-test-5",
        "username": "credential_5",
        "password": "secret@2504",
        "content": "secret@2504",
        "hostname": "destktop-91.com",
        "parent_credential_cod": null,
        "parent_credential": null,
        "additional": "CREDADD01",
        "domain": "",
        "ip": "172.10.10.90",
        "port": "22",
        "model": "Ubuntu",
        "expiration_time": "2021-01-16T17:31:39"
    }
}

```
#### Segundo endpoint
Para acessar as informações de uma credencial registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:


`/iso/pam/credential/[username@hostname]`


#### Parâmetros de requisição

***Path***



| Campo  | Tipo   | Obrigatório | Descrição                                     | Exemplo |
| ------ | ------ | ------------ | ----------------------------------------------- | ------- |
| `username@hostname` | String | Sim          |Nome de usuário (`username`) e `hostname` associados à credencial separados por um sinal de @. Esses valores são informados pelo usuário ao [criar uma credencial](/v3-32/docs/pt/a2a-pam-core-create-or-update-a-credential) e podem ser obtidos na resposta da requisição [Listar todas as credenciais](/v3-32/docs/pt/a2a-pam-core-list-credentials#listar-todas-as-credenciais).| credential_5@desktop-91.com     |

:::(Warning) (Atenção)
Caso o `username` fornecido possua um @, o endpoint não funcionará como esperado devido ao conflito gerado pela presença de dois símbolos @ no endpoint. 
:::

#### Retorno


Retorna uma credencial registrada no **PAM Core** baseado no `username` e `hostname` fornecidos, juntamente com uma mensagem contendo informações sobre o processo de recuperação.

**Resposta esperada**

```
HTTP/1.1 200 OK
```

```json
{
    "response": {
        "status": 200,
        "mensagem": "Credential 5",
        "erro": false,
	 "detail": "",
        "message": "Credential 5",
        "error": false,
	 "error_code": 0
    },
    "credential": {
        "id": "5",
        "tag": "robot-test-5",
        "username": "credential_5",
        "password": "secret@2504",
        "content": "secret@2504",
        "hostname": "destktop-91.com",
        "parent_credential_cod": null,
        "parent_credential": null,
        "additional": "CREDADD01",
        "domain": "",
        "ip": "172.10.10.90",
        "port": "22",
        "model": "Ubuntu",
        "expiration_time": "2021-01-16T17:31:39"
    }
```

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


