# Criar ou atualizar uma senha

Este artigo apresenta como criar ou atualizar uma senha no **MySafe** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e respostas em caso de sucesso ou em caso de erros.

## Autorização

A autorização para as APIs do **MySafe** é feita diretamente no módulo.
Para mais informações, acesse o documento sobre [Como adicionar uma autorização de chave de acesso](/v3-32/docs/pt/mysafe-how-to-add-an-access-key-authorization).

## Autenticação

A autenticação nas **APIs MySafe** é feita utilizando o método de autenticação OAuth 2.0. Para iniciar este processo, é necessário fornecer o **Client ID** e o **Client Secret**, além de obter o **token de autenticaçã**o deles a partir do endpoint:
```
GET /api/oauth2/token
```
Para mais informações sobre como obter o **Client ID** e o **Client Secret**, acesse o documento sobre [Como visualizar uma autorização de chave de acesso](/v3-32/docs/pt/mysafe-how-to-view-an-access-key-authorization).

## Métodos

### Criar uma senha


#### Requisição

Para adicionar uma senha ao **MySafe**, envie uma requisição para o seguinte endpoint:

```
POST /api/mysafe/password
```

:::(Info) (Info)
Quando uma senha é adicionada ao **MySafe**, ela é automaticamente associada ao seu criador, identificando-o como seu proprietário.
:::

#### Parâmetros de requisição

***Body***

| Campo |  | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |--- |
| ```name ```|  | String | Sim | Nome atribuído à senha. |senseg account |
| ``` url``` |  | String | Não | URL do site onde a senha está sendo usada. |www.senhasegura.com |
| ```username``` |  | String | Sim | Nome de usuário usado para acessar a conta. | npass |
| ```password ``` |  | String | Sim | A senha que está sendo adicionada. | 8jhfy@3789 |
| ``` secret_key``` |  | String  | Não | *Seed* para gerar automaticamente o TOTP. | JBSWY3DPEHPK3PXP |
| ``` notes``` |  | String | Não  | Observações adicionais sobre a senha. |  Access details |
| ``` tags``` |  | String | Não | Palavras-chave para ajudar a identificar a senha.| tag1, tag2 |
| ```users_allowed ``` |  | Array de objetos | Não | Informação sobre os usuários com permissão de acesso à senha.|  |
| | ```username```  | String | Não | Nome de usuário do usuário com permissão de acesso à senha. |  pduarte |
|  | ```can_edit``` | Boolean | Não | Permissão de edição. Se deixado vazio, usuários terão apenas permissão de visualização. |  |
| ```groups_allowed ``` |  |  Array de objetos | Não | Informação sobre os grupos com permissão de acesso à senha. |  |
|  | ```name``` | String | Não | Nome do grupo com permissão de acesso à senha. | Test group |
| | ```can_edit``` | Boolean | Não | Permissão de edição.Se deixado vazio, os membros do grupo terão apenas permissão de visualização. | false |


**Exemplo de requisição**

```
{
    "name": "senseg account",
    "url": "www.senhasegura.com",
    "username": "npass",
    "password": "8jhfy@3789",
    "secret_key": "JBSWY3DPEHPK3PXP",
    "notes": "Access details",
    "tags": "tag1, tag2",
    "users_allowed": [
        {
            "username" : "pduarte"
        }
    ],
    "groups_allowed": [
        {
            "name" : "Test group",
            "can_edit" : false
        }
    ]
}
```

#### Retorno
Adiciona uma senha ao **MySafe**, e retorna uma mensagem com informações sobre o processo de adição da senha. 

**Resposta esperada**

```
HTTP/1.1 201 Created
```

```
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Password successfully registered",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Password successfully registered",
        "erro": false,
        "cod_erro": 0
    },
    "password_entity": {
        "identifier": "312",
        "name": "senseg account",
        "url": "www.senhasegura.com",
        "username": "npass",
        "note": "Access details",
        "tags": "tag1, tag2",
        "users_allowed": [
            {
                "username": "pduarte",
                "can_edit": false
            }
        ],
        "groups_allowed": [
            {
                "name": "Test group",
                "can_edit": false
            }
        ],
        "shared_error": []
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
}
```

### Atualizar uma senha
#### Requisição
Para atualizar uma senha no **MySafe**, envie uma requisição para o seguinte endpoint:

```
PUT /api/mysafe/password/update/[identifier]
```

#### Parâmetros de requisição
***Path***


| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
|```identifier```| String | Sim | Código identificador  único associado a cada entrada na tabela de senhas. Este valor é automaticamente atribuído pelo senhasegura ao [criar uma senha](/v3-32/docs/pt/mysafe-apis-create-or-update-a-password) e é obtido na resposta da requisição [Listar todas as senhas ou Listar uma senha](/v3-32/docs/pt/mysafe-apis-list-passwords). | 312 |

***Body***
:::(Info) (Info)
Ao enviar uma requisição de atualização, não é necessário incluir parâmetros que você não deseja editar.
:::

| Campo |  | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |--- |
| ```name ```|  | String | Não | Nome atribuído à senha. |sensegura account |
| ```username``` |  | String | Não | Nome de usuário usado para acessar a conta. | senhapass |
| ``` url``` |  | String | Não | URL do site onde a senha está sendo usada. |www.url.com |
| ```password ``` |  | String | Não | A senha que está sendo adicionada. | x%8jhfy@3789a |
| ``` notes``` |  | String | Não  | Observações adicionais sobre a senha. |  Access details for this key |
| ``` tags``` |  | String | Não | Palavras-chave para ajudar a identificar a senha.| access |
| ``` secret_key``` |  | String  | Não | *Seed* para gerar automaticamente o TOTP. | 3DPEHPK3PXPGHODADA |
| ```users_allowed ``` |  |  Array de objetos | Não | Informação sobre os usuários com permissão de acesso à senha.  **Nota**: se você enviar um array vazio, as opções de compartilhamento serão removidas.|  |
| | ```username```  | String | Não | Nome de usuário do usuário com permissão de acesso à senha. |  pduarte |
|  | ```can_edit``` | Boolean | Não | Permissão de edição. Se deixado vazio, o usuário terá apenas permissão de visualização. | true|
| ```groups_allowed ``` |  |  Array de objetos | Não | Informação sobre os grupos com permissão de acesso à senha. **Nota**: se você enviar um array vazio, as opções de compartilhamento serão removidas. |  |
|  | ```name``` | String | Não | Nome do grupo com permissão de acesso à senha. | Test group |
| | ```can_edit``` | Boolean | Não | Permissão de edição.Se deixado vazio, os membros do grupo terão apenas permissão de visualização. | true |

**Exemplo de requisição**

```
{
    "name": "senhasegura account",
    "username": "senhapass",
    "url": "www.url.com",
    "password": "x%8jhfy@3789a",
    "notes": "Access details for this key.",
    "tags": "access",
    "secret_key": "3DPEHPK3PXPGHODADA",
    "users_allowed": [
        {
            "username": "pduarte", 
            "can_edit": true
         }
    ],
    "groups_allowed": [
        {
            "name": "Test group",
            "can_edit": false
        }
    ]
}
```

#### Retorno
Atualiza uma senha armazenada no **MySafe**, com base no seu `identifier`, e retorna uma mensagem com informações sobre o processo de atualização. 


**Resposta esperada**

```
HTTP/1.1 200 OK
```

```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Password successfully updated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Password successfully updated",
        "erro": false,
        "cod_erro": 0
    },
    "password_entity": {
        "identifier": "312",
        "name": "senhasegura account",
        "url": "www.url.com",
        "username": "senhapass",
        "note": "Access details for this key.",
        "tags": "access",
        "users_allowed": [
            {
                "username": "pduarte",
                "can_edit": true
            }
        ],
        "groups_allowed": [
            {
                "name": "Test group",
                "can_edit": true
            }
        ],
        "shared_error": []
    }
}
```

**Em caso de erro - usuário não possui acesso a essa senha**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1005: Password not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1005: Password not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1005,
        "message": "1005: Password not found",
        "detail": null
    }
}
```

**Em caso de erro - senha não encontrada**

```
HTTP/1.1 400 Bad Request
```

```
{
    "response": {
        "status": 400,
        "mensagem": "1005: Password not found",
        "erro": true,
        "cod_erro": 0,
        "message": "1005: Password not found",
        "error": true,
        "error_code": 0
    },
    "exception": {
        "code": 1005,
        "message": "1005: Password not found",
        "detail": ""
    }
}

```