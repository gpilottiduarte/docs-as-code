# GET | Secret

## Consultar secret

Este *endpoint* permite a recuperação de metadados da aplicação e fornece um inventário detalhado dos *secrets* associados à instância específica. A funcionalidade possibilita o acesso programático às configurações de segurança e credenciais armazenadas.

### Request

```
GET https://vault_url/iso/dapp/application
```

### Exemplo de resposta

```json
{
    "response": {
        "status": 200,
        "mensagem": "Application 5",
        "erro": false,
        "message": "Application 5",
        "error": false
    },
    "application": {
        "name": "postman",
        "description": null,
        "tags": [
            ""
        ],
        "system": "back",
        "environment": "test",
        "secrets": [
            {
                "secret_id": "106",
                "secret_name": "application5",
                "identity": "application5",
                "version": "",
                "expiration_date": "",
                "engine": "Kubernetes",
                "data": [
                    {
                        "hostname": "application5_v_test",
                        "username": "ADMIN_V_USR",
                        "password": "********",
                        "additional_information": "ADMIN_V_SCHEMA",
                        "ip": "app.application.com"
                    },
                    {
                        "access_key_id": "********",
                        "secret_access_key": "********",
                        "TTL": null
                    },
                    {
                        "my_key_name": "my_key_value",
                        "my_key_name_2": "my_key_value_2"
                    }
                ]
            }
        ]
    }
}
```

### Exemplo de resposta com SSH com secret

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
                "secret_id": "3",
                "secret_name": "state_secret",
                "identity": "cart/americanas/npf/cassandra",
                "version": "205",
                "description": "Chamada de API",
                "expiration_date": "2022-08-18 11:10:00",
                "engine": "GitLab",
                "data": [
                    {
                        "HOSTNAME": "AWS Gateway",
                        "USERNAME": "user",
                        "CONNECTION_STRING": "mongodb://api-server/auth",
                        "private_key": "********",
                        "public_key": "********",
                        "PASSWORD": "********",
                        "ip": "aws.amazon.com"
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
| `nome` | *String* | Nome da aplicação |
| `descrição` | *String* | Descrição da aplicação |
| `tags` | *String* | *Tags* que identificam a aplicação |
| `sistema` | *String* | Sistema do *Secret* |
| `ambiente` | *String* | Ambiente do *secret* |
| `secret_id` | Integer | ID do *secret* |
| `secret_name` | *String* | Nome do *secret* |
| `identificador` | *String* | Identificador do *secret* |
| `versão` | *String* | Versão do *Secret* |
| `expiration_date` | *String* | Data de validade do *secret* |
| `motor` | *String* | *Secret engine* |
| `valores` | *String* | Valores do *Secret* |