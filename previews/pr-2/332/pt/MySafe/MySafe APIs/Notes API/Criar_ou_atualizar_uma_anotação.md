# Criar ou atualizar uma anotação

Este artigo apresenta como criar ou atualizar uma anotação armazenada no **MySafe** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e as respostas em caso de sucesso ou erro.


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

### Criar uma anotação
#### Requisição
Para adicionar uma anotação ao **MySafe**, envie uma requisição para o seguinte endpoint:

```
POST /api/mysafe/note
```

:::(Info) (Info)
Quando uma anotação é adicionada ao **MySafe**, ela é automaticamente associada ao seu criador, identificando-o como seu proprietário.
:::

#### Parâmetros de requisição

***Body***

| Campo |  | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |--- |
| ```name ```|  | String | Sim | Nome atribuído à anotação. |Secret note |
| ``` note``` |  | String | Sim  | A anotação que está sendo adicionada. |  My top secret note 
| ``` tags``` |  | String | Não |  Palavras-chave para ajudar a identificar a anotação.| topsecret |
| ```users_allowed ``` |  | Array de objetos | Não | Informação sobre os usuários com permissão de acesso  à anotação. |  |
| | ```username```  | String | Não | Nome de usuário do usuário que irá acessar a anotação.  |  pduarte |
|  | ```can_edit``` | Boolean | Não | Permissão de edição. Se vazio, o usuário terá apenas permissão de visualização.  |  |
| ```groups_allowed ``` |  | Array de objetos | No | Informação sobre o grupo com permissão de acesso  à anotação. |  |
|  | ```name``` | String | Não | Nome do grupo  que irá acessar a anotação.| Test group |
| | ```can_edit``` | Boolean | Não | Permissão de edição. Se vazio, o grupo terá apenas permissão de visualização. | false |

**Exemplo de requisição**

```
{
    "name": "Secret note",
    "note": "My top secret note",
    "tags": "secret",
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
Adiciona uma anotação ao **MySafe** e retorna uma mensagem com informações sobre o processo de adição da anotação. 


**Resposta esperada**

```
HTTP/1.1 201 Created
```
```
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Note successfully registered",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Note successfully registered",
        "erro": false,
        "cod_erro": 0
    },
    "note_entity": {
        "identifier": "173",
        "name": "Secret note",
        "tags": "secret",
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
 {
    "response": {
        "status": 400,
        "mensagem": "1001: Parameter 'note' was not informed!",
        "erro": true,
        "cod_erro": 0,
        "message": "1001: Parameter 'note' was not informed!",
        "error": true,
        "error_code": 0
    },
    "exception": {
        "code": 1001,
        "message": "1001: Parameter 'note' was not informed!",
        "detail": ""
    }
}
```

### Atualizar uma anotação
#### Requisição
Para atualizar uma anotação armazenada no **MySafe**, envie uma requisição para o seguinte endpoint:

```
PUT /api/mysafe/note/update/[identifier]
```
#### Parâmetros de requisição

***Path***


| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
|```identifier```| String | Sim | Código identificador  único associado a cada entrada na tabela de anotações. Este valor é automaticamente atribuído pelo senhasegura ao  [criar uma anotação](/v3-32/docs/pt/mysafe-apis-create-or-update-a-note#create-a-note) e é obtido na resposta da requisição  [Listar todas as anotações ou Listar uma anotação](/v3-32/docs/pt/mysafe-apis-list-notes). | 173 |

**Body**
:::(Info) (Info)
Ao enviar uma requisição de atualização, não é necessário incluir parâmetros que você não deseja editar.
:::

| Campo |  |Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |--- |
| ```name ```|  | String | Não | Nome atribuído à anotação. |My secret note |
| ``` note``` |  | String | Não  | A anotação que está sendo adicionada. |  My super top secret note |
| ``` tags``` |  | String | Não |  Palavras-chave para ajudar a identificar a anotação.| secret1 |
| ```users_allowed ``` |  | Array de objetos | Não | Informação sobre os usuários com permissão de acesso  à anotação.  **Nota**: se você passar um array vazio, as permissões de compartilhamento serão removidas. |  |
| | ```username```  | String | Não | Nome de usuário do usuário que poderá acessar a anotação. |  pduarte |
|  | ```can_edit``` | Boolean | Não | Permissão de edição. Se vazio, o usuário terá apenas permissão de visualização. | true |
| ```groups_allowed ``` |  | Array de objetos | Não | Informação sobre o grupo com permissão de acesso  à anotação. **Nota**: se você passar um array vazio, as permissões  de compartilhamento serão removidas. |  |
|  | ```name``` | String | Não | Nome do grupo que poderá acessar a anotação.| Test group |
| | ```can_edit``` | Boolean | Não | Permissão de edição. Se vazio, o grupo terá apenas permissão de visualização. | true |

**Exemplo de requisição**

```
{
    "name": "My secret note",
    "note": "My super top secret note",
    "tags": "secret1",
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
    ]
}
```
#### Retorno
Atualiza a anotação armazenada no **MySafe** baseado em seu `identifier` e retorna uma mensagem com informações sobre o processo de atualização da anotação. 

**Resposta esperada**

```
HTTP/1.1 200 OK
```

```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Note successfully update",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Note successfully update",
        "erro": false,
        "cod_erro": 0
    },
    "note_entity": {
        "identifier": "173",
        "name": "My secret note",
        "tags": "secret1",
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

**Em caso de erro - usuário não possui acesso a essa anotação**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1006: User does not have access",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1006: User does not have access",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1006,
        "message": "1006: User does not have access",
        "detail": null
    }
}
```

**Em caso de erro - anotação não encontrada**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1005: Note not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1005: Note not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1005,
        "message": "1005: Note not found",
        "detail": null
    }
}
```