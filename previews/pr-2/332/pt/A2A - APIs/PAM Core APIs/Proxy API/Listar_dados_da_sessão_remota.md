# Listar dados da sessão remota

Este documento apresenta como consultar dados de uma ou mais sessões remotas registradas no **PAM Core** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e as respostas em caso de sucesso ou em caso de erros.

## Autorização

Para começar, certifique-se de que o **PAM Core** esteja listado em **Recursos autorizados** no seu módulo **A2A**.
Para mais informações sobre a autorização de um aplicativo, acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application).

## Autenticação

Cada requisição nas APIs deve conter a **OAuth Consumer Key** e o **OAuth Token** do cliente.
Para mais informações sobre a autenticação, acesse o documento sobre [Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application).

## Métodos
### Listar todas as sessões remotas


#### Requisição
Para consultar as informações de todas as sessões remotas registradas no **PAM Core**, envie uma requisição para o seguinte endpoint:

```
GET api/session/remotesessions
```
#### Retorno




Retorna todas as informações de sessões remotas registradas no **PAM Core** associadas ao acesso do seu usuário, e fornece informações sobre o processo de recuperação das informações.

:::(Warning) (Atenção)
Dependendo da quantidade de sessões registradas no ambiente, a lista retornada pode ser muito longa.
:::

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
    "remote_sessions": [
        {
            "id": "540",
            "user": "Admin",
            "origin_ip": "172.16.20.50",
            "credencial": "win7",
            "dispositivo": "127.0.0.1:27500",
            "protocol": "rdp",
            "proxy": "RDP Proxy",
            "session_id": "421c83a3b10be439d4da33b6c140f53eaf448207",
            "start": "2020-11-17 15:29:21",
            "end": "2020-11-17 15:29:41",
            "time": "00:00:20",
            "prevent_purge": "Não",
            "request": null,
            "ITSM": "governance code"
        },
        {
            "id": "541",
            "user": "Admin",
            "origin_ip": "172.16.20.50",
            "credencial": "win7",
            "dispositivo": "127.0.0.1:27500",
            "protocol": "rdp",
            "proxy": "RDP Proxy",
            "session_id": "0ca5556cee9cf223c808a0828cab174939937d1d",
            "start": "2020-11-17 15:32:32",
            "end": "2020-11-17 15:33:02",
            "time": "00:00:30",
            "prevent_purge": "Não",
            "request": null,
            "ITSM": null
        }
    ]

 }
```

### Listar uma sessão remota


#### Requisição
Para consultar as informações de uma sessão remota, envie uma requisição para o seguinte endpoint:

```
GET api/session/remotesessions/[id]
```
#### Parâmetros de requisição

***Path***

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
|```id```| Int |Sim |Código identificador  único associado a cada entrada na tabela de sessões. Este valor é atribuído automaticamente pelo senhasegura ao criar uma URL autenticada para iniciar sessão web proxy para identificar cada registro de sessão de forma única e é obtido na resposta à requisição [Listar todas as sessões remotas](/v3-32/docs/pt/a2a-list-remote-session-data#listar-todas-as-sessões-remotas). Não deve ser confundido com o parâmetro  ```session_id``` | 540 |

#### Retorno

Retorna todas as informações de uma sessão remota registrada no **PAM Core**baseado em seu ```id```, e fornece informações sobre o processo de recuperação dos dados.

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
    "remote_session": [
        {
            "id": "540",
            "user": "Admin",
            "origin_ip": "172.16.20.50",
            "credencial": "win7",
            "dispositivo": "127.0.0.1:27500",
            "protocol": "rdp",
            "proxy": "RDP Proxy",
            "session_id": "42138173871371wuhwqf448207",
            "start": "2020-11-17 15:29:21",
            "end": "2020-11-17 15:29:41",
            "time": "00:00:20",
            "prevent_purge": "Não",
            "request": null,
            "ITSM": "governance code"
        }
    ]
}


```

**Em caso de erro - sessão remota não encontrada**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1002: Session not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1002: Session not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1002,
        "message": "1002: Session not found",
        "detail": null
    }
}
```

**Em caso de erro - ```id``` inválido**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1003: Unexpected identifier type",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1003: Unexpected identifier type",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1003,
        "message": "1003: Unexpected identifier type",
        "detail": null
    }
}

```



