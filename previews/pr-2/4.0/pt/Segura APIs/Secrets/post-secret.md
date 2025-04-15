# POST | Secret

## Criar ou atualizar um secret

Permite criar um atualizar um secret.

### Request

```
POST https://vault_url/iso/sctm/secret
```

### Exemplos de request

```json
{
    "identity": "secret-postman",
    "name": "secret-postman",
    "engine": "Generic",
    "expiration_date": "",
    "description": "secret created by postman",
    "data": "{{secret}}"
}
```

É possível, ainda, adicionar credenciais à *secret*. Para isso, a API utilizará o campo `data:{{secret}}` conforme mencionado acima. Para utilizar esse campo, é necessário utilizar o seguinte *script*:

```json
{
    "access_keys": [
        {
            "access_key": {
                "type": "aws",
                "fields": {
                    "access_key_id": "********",
                    "access_key_id_label": "AWS_ACCESS_KEY_ID",
                    "secret_access_key": "********",
                    "secret_access_key_label": "AWS_SECRET_ACCESS_KEY"
                }
            }
        }
    ],
    "credentials": [
        {
            "credential": {
                "fields": {
                    "user": "cred_a",
                    "user_label": "USERNAME",
                    "host": "aws.amazon.com",
                    "host_label": "HOSTNAME",
                    "password": "********",
                    "password_label": "PASSWORD",
                    "additional_information": "mongodb://api-server/auth",
                    "additional_information_label": "CONNECTION_STRING"
                }
            }
        },
        {
            "credential": {
                "fields": {
                    "user": "an_username",
                    "user_label": "USERNAME",
                    "host": "an_ip",
                    "host_label": "HOSTNAME",
                    "password": "********",
                    "password_label": "PASSWORD",
                    "additional_information": "the_additional_info"
                }
            }
        }
    ]
}
```

Este *script* deve ser utilizado no campo “*scripts*” dentro do Postman de outro cliente de API que você esteja usando.

### Parâmetros para a request

| Campo | Tipo | Descrição |
| :---- | :---- | :---- |
| `Name` | *String* | Nome do *Secret*. |
| `Identity` | *String* | Identidade do *Secret*. |
| `Expiration_Date` | *Date/time* | A data de desativação do *Secret*. |
| `Description` | *String* | Descrição do *Secret*. |
| `Engine` | *String* | A *Engine* do *Secret*, deve ser uma *engine* válida registrada no Segura. |
| `renew_cloud_time` | *Integer* | Tempo para renovar as chaves de acesso à nuvem em minutos. Se omitido, desabilita a renovação automática. |
| `renew_credential_time` | *Integer* | Tempo para renovar as credenciais em minutos. Se omitido, desabilita a renovação automática. |
| `renew_ephemeral_credential_time` | *Integer* | Tempo para renovar as credenciais efêmeras em minutos. Se omitido, desabilita a renovação automática. |
| `Data` | *String* | Deve ser um `.json` codificado em `base64` válido. |

### Exemplo de Resposta

```json
{
    "response": {
        "status": 201,
        "mensagem": "Secret created successfully.",
        "erro": false,
        "cod_erro": 0,
        "message": "Secret created successfully.",
        "error": false,
        "error_code": 0
    },
    "application": {
        "name": "postman",
        "description": "teste",
        "tags": [
            "abc",
            "def",
            "teste"
        ],
        "system": "inetconfig",
        "environment": "stage",
        "secrets": [
            {
                "secret_id": "7",
                "secret_name": "state_secret",
                "identity": "example_2",
                "version": "2",
                "description": "Chamada de API",
                "expiration_date": "2022-08-18 11:10:00",
                "engine": "GitLab",
                "data": [
                    {
                        "AWS_ACCESS_KEY_ID": "********",
                        "AWS_SECRET_ACCESS_KEY": "********",
                        "TTL": ""
                    },
                    {
                        "APP": "Postman",
                        "CONNECTION_STRING": "mongodb://api-server/auth",
                        "DATE": "date",
                        "HOSTNAME": "an_ip",
                        "PASSWORD": "********",
                        "USERNAME": "an_username"
                    }
                ]
            }
        ]
    }
}
```

### Parâmetros para a resposta

| Campo | Tipo | Descrição |
| :---- | :---- | :---- |
| `name` | *String* | Nome da aplicação. |
| `description` | *String* | Descrição da aplicação. |
| `tags` | *String* | Tags para identificação da aplicação. |
| `system` | *String* | Sistema do *Secret.* |
| `environment` | *String* | Ambiente do *Secret.* |
| `secret_id` | *Integereger* | ID do *Secret.* |
| `secret_name` | *String* | Nome do *Secret.* |
| `identity` | *String* | Identificador do *Secret*. |
| `version` | *String* | Versão do *Secret*. |
| `expiration_date` | *Date/Time* | Data de expiração do *Secret*. |
| `engine` | *String* | Engine do *Secret*. |
| `data` | *String* | Valor do *Secret*. |