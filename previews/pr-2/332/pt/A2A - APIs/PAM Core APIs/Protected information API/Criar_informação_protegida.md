# Criar informação protegida

Este documento apresenta como criar uma informação protegida no **PAM Core** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e as respostas em caso de sucesso ou em caso de erros.

## Métodos
### `POST` Criar uma informação protegida 
#### Requisição

Para criar uma informação protegida registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:

`/iso/pam/info`


| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| `name` | String | No | Nome atribuído à informação protegida. | saas_vault1 |
| `content` | String | Sim | Informação que você deseja proteger. **Nota**: não é possível fazer upload de um arquivo. | login: mt4adm, password: mt4admp4ss |
| `identifier` | String | No | String única que identifica a informação protegida. | INFOSAASVAULT1 |
| `type` | String | No | Tipo da informação. | access credential |

**Exemplo de requisição**

```json
{   
    "name": "saas_vault1",
    "content":"login: mt4adm, password: mt4admp4ss",
    "identifier": "INFOSAASVAULT1",
    "type": "access Credential"
}
```

#### Retorno
Cria uma informação protegida no **PAM Core** e retorna uma mensagem com informações sobre o processo de criação.

**Resposta esperada**

`HTTP/1.1 200 OK`

```json
{
    "response": {
        "status": 201,
        "mensagem": "Information successfully registered!",
        "erro": false,
        "message": "Information successfully registered!",
        "error": false
    },
    "info": {
	    "name": "saas_vault1",
		"type": "access credential",
		"service": "saas_client",
		"url": "10.10.10.2",
		"content": "login: mt4adm, password: mt4admp4ss",
		"users_allowed": "admin, account_manager, mscharra",
		"identifier": "INFOSAASVAULT1"
    }
}
```

**Em caso de erro - parâmetro obrigatório ausente**

`HTTP/1.1 400 Bad Request`

```json
{
    "response": {
        "status": 400,
        "mensagem": "1026: The information content was not informed",
        "erro": true,
        "message": "1026: The information content was not informed",
        "error": true
    },
    "exception": {
        "code": 1026,
        "message": "1026: The information content was not informed",
        "detail": null
     }
    }
```