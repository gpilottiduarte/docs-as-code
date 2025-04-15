# Criar ou atualizar uma chave SSH

Este documento apresenta como criar ou atualizar uma chave SSH no **PAM Core** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e as respostas em caso de sucesso ou em caso de erros.

## Autorização

Para começar, certifique-se de que o **PAM Core** esteja listado em **Recursos autorizados** no seu módulo **A2A**. Para mais informações sobre a autorização de um aplicativo, acesse o documento sobre como [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application).

## Autenticação

Cada requisição nas APIs deve conter a **OAuth Consumer Key** e o **OAuth Token** do cliente. Para mais informações sobre a autenticação, acesse o documento sobre [Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application).

## Métodos

### Criar ou atualizar uma chave SSH
#### Requisição

Para criar ou atualizar uma chave SSH registrada no PAM Core, envie uma requisição para o seguinte endpoint:

`POST /iso/pam/key`

:::(error) (Alerta!)
Caso esteja usando o **A2A** para criar uma credencial e o dispositivo correspondente não exista, você precisará criar um dispositivo primeiramente. Para mais informações, acesse a documentação sobre criar um dispositivo.
:::

#### Parâmetros de requisição

***Body***

:::(Info) (Info)
Ao enviar uma requisição de atualização, não é necessário incluir parâmetros que você não deseja editar. 
:::

| Campo |  | Tipo | Obrigatório | Descrição | Exemplo | Valor padrão |
| --- | --- | --- | --- | --- | --- | --- |
| `username`  |  | String | Não. **Nota**: apesar de não obrigatório, como boa prática, o preenchimento desse campo facilita a busca pela chave SSH. | Nome de usuário relacionado à chave no dispositivo | jsilva  | usr  |
| `hostname`  |  | String | Sim (para criar uma chave SSH). | Nome do dispositivo principal associado à chave SSH. | API-Testing  | - |
| `ip`  |  | String | Sim (para criar uma chave SSH). | IP do dispositivo principal associado à chave SSH. | 128.0.0.1  | - |
| `public_key`  |  | String | Sim (para criar  uma chave SSH). | Chave pública | public-key  | - |
| `enabled`  |  | Boolean | Não | Situação da chave SSH: ativa ou inativa. | `true`  |  |
| `private_key`  |  | String | Sim (para criar uma chave SSH). | Chave privada | private-key| - |
| `identifier`  |  | String | Sim (para atualizar uma chave SSH). **Nota**: caso esse valor não seja fornecido durante a criação da chave SSH, nenhuma mudança via API poderá ser feita nos campos da chave. Neste caso, apenas a [inativação ou ativação da chave](/v3-32/docs/pt/a2a-pam-core-deactivate-or-activate-an-ssh-key) estará disponível através dos endpoints designados para isso. | Identificador da chave SSH.   | api-ssgr1144-caracteres-tags  | - |
| `key_name`  |  | String |Não. **Nota**: apesar de não obrigatório, como boa prática, o preenchimento desse campo facilita a busca pela chave SSH. | Nome da chave | api-ssgr1144-tags  | - |
| `password`  |  | String | Não | Senha opcional que fornece uma camada extra de segurança à chave privada. |  | - |
| `tags`  |  | String | Não | Tags da chave SSH |tag1,tag2,tag3,!@#$%¨*&()_+  | - |
| `devices`  |  | Array de dispositivos | Não | Dispositivos associados à chave SSH, contendo seu hostname . | Veja abaixo o exemplo*. | - |
|  | `hostname`  | String | Não | Veja abaixo o exemplo*. | Veja abaixo o exemplo. | - |

***Exemplo de um array de dispositivos.**
```json
"devices": [
        {
            "hostname": "API-Device1"
        },
        {
            "hostname": "API-Device2"
        },
        {
            "hostname": "API-Device3"
        },
        {
            "hostname": "API-Device4"
        }
    ]
}


```

:::(error) (Alerta!)
- Se ao criar uma credencial, um array vazio for informado no campo `devices`, a chave não terá dispositivos adicionais associados.
- No campo `enabled`, se o valor informado for `false`, a chave SSH será criada como inativa. Portanto, para acessar as informações desta chave, será preciso ativá-la manualmente utilizando a [rota](/v3-32/docs/pt/a2a-pam-core-deactivate-or-activate-an-ssh-key) apropriada ou seguir o [procedimento](/v3-32/docs/pt/pam-how-to-manage-ssh-keys#operations-for-ssh-keys) dentro do senhasegura.
:::

**Exemplo de requisição**

```json
{
    "username": "jsilva",
    "hostname" : "API-Testing",
    "ip": "128.0.0.1",
    "public_key": "public-key",
    "enabled": true,
    "private_key": "private-key",
    "identifier": "api-ssgr1144-caracteres-tags",
    "key_name": "api-ssgr1144-tags",
    "tags": "tag1,tag2,tag3,!@#$%¨&*()_+",
    "devices": [
        {
            "hostname": "API-Device1"
        },
        {
            "hostname": "API-Device2"
        },
        {
            "hostname": "API-Device3"
        },
        {
            "hostname": "API-Device4"
        }
    ]
}
```

#### Retorno
Cria ou atualiza uma chave SSH no **PAM Core** e retorna uma mensagem com informações sobre o processo.

**Resposta esperada - criar uma chave SSH**
`HTTP/1.1 200 OK`

```json
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Key successfully registered!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Key successfully registered!",
        "erro": false,
        "cod_erro": 0
    },
    "key": {
        "id": "14704",
        "tag": "api-ssgr1144-caracteres-tags2",
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
            }
        ],
        "devices_error": []
    }
}
```

**Resposta esperada - atualizar uma chave SSH**

```
HTTP/1.1 201 Updated
```

```json
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Key updated successfully!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Key updated successfully!",
        "erro": false,
        "cod_erro": 0
    },
    "key": {
        "id": "14704",
        "tag": "api-ssgr1144-caracteres-tags2",
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
            }
        ],
        "devices_error": []
    }
}
```

**Em caso de erro - parâmetro obrigatório ausente**

`HTTP/1.1 400 Bad Request`

```json
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1004: The device's hostname was not informed",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1004: The device's hostname was not informed",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1004,
        "message": "1004: The device's hostname was not informed",
        "detail": ""
    }
}
```