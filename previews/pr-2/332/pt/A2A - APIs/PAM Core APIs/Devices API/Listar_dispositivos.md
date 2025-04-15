# Listar dispositivos

o Este artigo apresenta como acessar as informações dos dispositivos no **PAM Core** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e as respostas em caso de sucesso ou em caso de erros.

## Autorização

Para começar, certifique-se de que o **PAM Core** esteja listado em **Recursos autorizados** no seu módulo **A2A**.
Para mais informações sobre a autorização de um aplicativo, acesse [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application).

## Autenticação

Cada requisição na API deve conter a **OAuth Consumer Key** e o **OAuth Token** do cliente.
Para mais informações sobre a autenticação, acesse [Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application).

## Métodos
### Listar um dispositivo 
#### Requisição

Para acessar um dispositivo registrado no **PAM Core**, envie uma requisição para o seguinte endpoint:

```
GET /iso/pam/device/[device_id]
```

#### Parâmetros de requisição

***Path***


| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| **device_id** | String | Sim | Código único de identificação do dispositivo. | 53 |

#### Retorno

Retorna um dispositivo registrado no **PAM Core** com base em seu **ID** e uma mensagem com informações sobre o processo de recuperação.

**Resposta esperada**

```
HTTP/1.1 200 OK
```
```
{
    "response": {
        "status": 200,
        "mensagem": "Device 53",
        "erro": false,
        "cod_erro": 0,
        "message": "Device 53",
        "error": false,
        "error_code": 0
    },
    "device": {
        "id": "53",
        "hostname": "desktop-91.com",
        "ip": "172.10.20.90",
        "model": "Ubuntu",
        "type": "Desktop",
        "vendor": "Linux",
        "site": "AWS",
        "device_domain": "senhasegura.lab",
        "connectivities": "SSH:22",
        "session_remote_config": "SSH:EXPECT:FILL",
        "device_tags": "api, app"
    }
}
```

**Em caso de erro - dispositivo não encontrado**

```
HTTP/1.1 400 Bad Request
```
```
{
    "response": {
        "status": 400,
        "mensagem": "1011: Device not found",
        "erro": true,
        "message": "1011: Device not found",
        "error": true
    },
    "exception": {
        "code": 1011,
        "message": "1011: Device not found",
        "detail": null
    }
}
```

### Listar dispositivos
#### Requisição
Para acessar uma lista de todos os dispositivos registrados no **PAM Core**, envie uma requisição para o seguinte endpoint:

```
GET /iso/pam/device
```

#### Retorno
Retorna todos os dispositivos registrados no **PAM Core**, associados ao acesso do seu usuário, e uma mensagem com informações sobre o processo de recuperação.

**Resposta esperada**

```
HTTP/1.1 200 OK 
```
```
{
    "resposta": {
        "status": 200,
        "mensagem": "2 dispositivos encontrados",
        "erro": false,
        "message": "2 dispositivos encontrados",
        "error": false
    },
    "dispositivos": [
        {
            "id": "1",
            "hostname": "mydevicehostname",
            "ip": "172.10.20.30",
            "modelo": "Windows Server 2012",
            "tipo": "Server",
            "fornecedor": "Microsoft",
            "site": "LAX"
	        "tags": "tag001"
        },
        {
            "id": "6",
            "hostname": "myseconddevice",
            "ip": "41.41.208.182",
            "modelo": "CentOS 7",
            "tipo": "Server",
            "fornecedor": "CentOS",
            "site": "AWS"
	        "tags": ""
        }
    ]
}
```


