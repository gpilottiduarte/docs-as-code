# Listar senhas

Este artigo apresenta como acessar as informações das senhas armazenadas no **MySafe** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e respostas em caso de sucesso ou em caso de erros.

## Autorização

A autorização para as **APIs MySafe** é feita diretamente no módulo.
Para mais informações, acesse o documento sobre [Como adicionar uma autorização de chave de acesso](/v3-32/docs/pt/mysafe-how-to-add-an-access-key-authorization).

## Autenticação

A autenticação nas **APIs MySafe** é feita utilizando o método de autenticação OAuth 2.0. Para iniciar este processo, é necessário fornecer o **Client ID** e o **Client Secret**, além de obter o **token de autenticação** deles a partir do endpoint:

```
GET /api/oauth2/token
```
Para mais informações sobre como obter o **Client ID** e o **Client Secret**, acesse o documento sobre [Como visualizar uma autorização de chave de acesso](/v3-32/docs/pt/mysafe-how-to-view-an-access-key-authorization).

## Métodos

### Listar todas as senhas 
#### Requisição

Para acessar uma lista com todas as senhas armazenadas no **MySafe**, envie uma requisição para o seguinte endpoint:

```
GET /iso/mysafe/password

```

#### Parâmetros de requisição

***Query***


| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| ```tag``` | String | Não | Busca por todas as senhas registradas com uma `tag` específica. | test |

#### Retorno





Retorna todas as senhas associadas ao acesso do seu usuário no **MySafe** e apresenta uma mensagem com informações sobre o processo de consulta.


**Resposta esperada**

```
HTTP/1.1 200 OK
```
```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "",
        "erro": false,
        "cod_erro": 0
    },
    "password_on_list": 
        {
            "identifier": "197",
            "name": "Testing",
            "url": "www.url.com",
            "username": "maria",
            "tags": "test",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "198",
            "name": "API",
            "url": "",
            "username": "dleite",
            "tags": "api",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "226",
            "name": "Gmail",
            "url": "www.gmail.com",
            "username": "dleite",
            "tags": "gmail",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        }
    ]
}


```
### Listar uma senha



#### Requisição





Para acessar uma senha armazenada no **MySafe**, envie uma requisição para o seguinte endpoint:

```
GET /api/mysafe/password/[identifier]
```

#### Parâmetros de requisição
***Path***

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| ```identifier```| String | Sim |Código identificador único associado a cada entrada na tabela de senhas. Este valor é automaticamente atribuído pelo senhasegura ao [criar uma senha](/v3-32/docs/pt/mysafe-apis-create-or-update-a-password).  | 197 |

#### Retorno

Retorna uma senha associada ao acesso do seu usuário no **MySafe**, com base em seu `identifier`, e uma mensagem com informações sobre o processo de consulta.

#### Parâmetros de resposta

| Campo | |Tipo | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| ``` identifier``` |  | String |Código identificador único associado a cada entrada na tabela de senhas. Este valor é atribuído automaticamente pelo senhasegura ao [criar uma senha](/v3-32/docs/pt/mysafe-apis-create-or-update-a-password).| 197 |
| ``` name``` |  | String | Nome atribuído à senha.| Testing |
|  ```url ``` |  | String | URL do site onde a senha está sendo usada. | www.url.com |
|  ``` username``` |  | String | Nome do usuário usado para acessar a conta. | maria |
|  ```password ``` |  | String | A senha acessível ao seu usuário. | Cs^Q4PdbIOo4 |
| ``` secret_key```  |  | String | A chave secreta fornecida pelo serviço para autenticação multi-fator. | JBSWY3DPEHPK3PXP |
| ```token ```  |  | String | Código TOTP  gerado automaticamente pelo senhasegura para autenticação multi-fator com base no ```token ``` fornecido ao [criar ou atualizar uma senha](/v3-32/docs/pt/mysafe-apis-create-or-update-a-password).| 452180 |
| ``` notes```  |  | String | Observações sobre a senha. | This is a test password. |
| ``` tags```  |  | String | Palavras-chave para ajudar a identificar a senha. |test|
| ``` users_allowed```  |  | Array de objetos |Informação sobre os usuários com permissão de acesso à senha. **Nota**: um array vazio significa que a senha não foi compartilhada. |  |
|   | ```username``` | String | Nome de usuário do usuário com permissão de acesso à senha. |  |
|  |  ``` can_edit``` | Boolean | Permissão de edição. Se vazio, o usuário possui apenas permissão de visualização. |  |
| ``` groups_allowed```  |  | Array de objetos |Informação sobre os grupos com permissão de acesso à senha.  **Nota**: um array vazio significa que a senha não foi compartilhada.|  |
|  | ```name ```  | String | Nome do grupo com permissão de acesso à senha.|  |
|  | ``` can_edit``` | Boolean | Permissão de edição. Se vazio, os membros do grupo possuem apenas permissão de visualização. |

**Resposta esperada** 

```
HTTP/1.1 200 OK
```
```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Success",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Success",
        "erro": false,
        "cod_erro": 0
    },
    "password_entity": {
        "identifier": "197",
        "name": "Testing",
        "url": "www.url.com",
        "username": "maria",
        "password": "Cs^Q4PdbIOo4",
        "secret_key": JBSWY3DPEHPK3PXP,
        "token": 452180,
        "notes": "This is a test password",
        "tags": "test",
        "users_allowed": [],
        "groups_allowed": []
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
**Em caso de erro - usuário não possui acesso a essa senha**


```
HTTP/1.1 400 Bad request
```

```
{
    "response": {
        "status": 400,
        "mensagem": "1006: User does not have access",
        "erro": true,
        "cod_erro": 1,
        "message": "1006: User does not have access",
        "error": true,
        "error_code": 1
    },
    "exception": {
        "code": 1006,
        "message": "1006: User does not have access",
        "detail": ""
    }
}
```