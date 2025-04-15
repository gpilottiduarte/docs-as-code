# POST | Provision

## Provisionar credencial

Permite criar um novo *Secret* para uma credencial.

### Request

```
POST https://vault_url/iso/coe/dapp/provision
```

### Exemplo de request

```json
{
    "identity": "secret-postman"
}
```

### Parâmetros para a request

| Campo | Tipo | Descrição |
| :---- | :---- | :---- |
| `pod_nome` | *String* | Nome da cápsula que irá usar a credencial. |
| `deploy` | *String* | Nome do *deploy* que irá usar a credencial. |
| `namespace` | *String* | *Namespace* do contentor que utilizará a credencial. |

### Exemplo de respostas

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Secret provisions done.",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Secret provisions done.",
        "erro": false,
        "cod_erro": 0
    },
    "tenant": "Segura",
    "secret": {
        "secret_id": "213",
        "secret_name": "secret-postman",
        "identity": "secret-postman",
        "version": "7",
        "description": "secret created by postman",
        "expiration_date": "",
        "engine": "Generic",
        "renew_cloud_time": false,
        "renew_credential_time": false,
        "renew_ephemeral_credential_time": false,
        "data": [
            {
                "hostname": "WinSUP",
                "username": "usera2a"
            },
            {
                "hostname": "TEAM-PRODUTOS-Windows-Server-2016-001",
                "username": "SQLServer_67644da30288d",
                "password": "********",
                "additional_information": null,
                "ip": "10.66.32.13"
            }
        ]
    }
}
```

### Parâmetros para a resposta

| Campo | Tipo | Descrição |
| :---- | :---- | :---- |
| `nome` | *String* | Nome da aplicação. |
| `descrição` | *String* | Descrição da aplicação. |
| `tags` | *String* | *Tags* que identificam a aplicação. |
| `sistema` | *String* | Sistema do *Secret.* |
| `ambiente` | *String* | Ambiente *secret*. |
| `secret_id` | *Integer* | ID do *Secret*. |
| `secret_nome` | *String* | Nome do *Secret*. |
| `identificador` | *String* | Identificador do *Secret*. |
| `versão` | *String* | Versão do *Secret*. |
| *`expiration_date`* | *String* | Data de validade do *Secret*. |
| `motor` | *String* | *Engine* do *Secret*. |
| `valor` | *String* | Valor do *Secret*. |