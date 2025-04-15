# Dashboards

The Segura WebService A2A has methods of consulting the information copilated by the Dashboard module.

:::(warning) (Attention)
To use these methods the **Dashboards** ,resource must be selected in the application authorization.
:::

## Proxy session dashboard

 
``` 
GET /iso/dash/sessions/* 
``` 
This method will return the number of proxy sessions that have occurred and are still running. Next to the URI path, you must be informed which protocol you want. The other parameters must be provided as a URI query.

### Protocols supported

-   ***jumpserver:*** Only proxy sessions that occurred through the Segura Terminal Proxy

-   ***rdpgate:*** Only proxy sessions that occurred through Segura RDP Proxy

-   ***ssh:*** Only SSH protocol proxy sessions regardless of which proxy technology was used

-   ***rdp:*** Only RDP protocol proxy sessions regardless of what proxy technology was used

-   ***rdpweb:*** Only RDP protocol proxy sessions that occurred through the Segura Web Proxy

-   ***sshweb:*** Only SSH protocol proxy sessions that occurred through the Segura Web Proxy

-   ***all:*** All sessions performed

Each protocol will return a dictionary containing different nodes representing the proxy technology used. As additional filters, the following parameters can be provided:

| Field | Type | Example | Req. | Obs. |
| --- | --- | --- | --- | --- |
| ativo | Integer | 1 | No | Provide 1 to indicate that only active sessions should be returned |
| data1 | String | 2020-01-30 | No | Start date of the query period. Format YYYY-MM-DD (ISO 8601) |
| data2 | String | 2020-03-30 | No | End date of the query period. Format YYYYY-MM-DD (ISO 8601) |
| hostname | String | mysrv | No | Hostname of the device to be queried. It must be the same as the hostname registered in the Segura . |
| userCredencial | String | mycredusr | No | Username of the credential used to be queried. |
| username | String | myssusr | No | Username of the user passwords that performed the session. |

### See all sessions

 
``` 
GET /iso/dash/sessions/all 
``` 
#### Expected response

 
``` 
HTTP/1.1 200 OK 
``` 

```json
{
    "response": {
        "status": 200,
        "mensagem": "Sessions",
        "erro": false,
        "message": "Sessions",
        "error": false
    },
    "sessions": {
        "enabled": {
            "Jump_Server": "1"
        },
        "historic": {
            "SQL": "1",
            "RDP_Web": "35",
            "RDP_Gate": "44",
            "SSH/Telnet": 76,
            "Jump_Server": 411,
            "HTTP_VNC": "70"
        }
    }
}
```
#### Response to query of sessions with invalid values

In this example no session will be returned because the data provided are invalid.

```json
{
    "response": {
        "status": 200,
        "mensagem": "Sessions",
        "erro": false,
        "message": "Sessions",
        "error": false
    },
    "sessions": {
        "ativas": [],
        "historico": []
    }
}
```
#### Response to query SSH sessions

In this example, only SSH protocol sessions that have occurred, or have started within the period provided will be returned.

```json
{
    "response": {
        "status": 200,
        "mensagem": "Sessions",
        "erro": false,
        "message": "Sessions",
        "error": false
    },
    "sessoes": {
        "historico": {
            "SSH/Telnet": "2",
            "Jump_Server": "1"
        },
        "ativas": {
            "Jump_Server": 1
        }
    }
}
```

## Threat Dashboard

 
``` 
GET /iso/coge/risco/* 
``` 
This method will return proxy sessions and password custodies that are suspicious. Next to the URI path, you should be informed which type of operation you want. The other parameters must be provided as a URI query.

### Queries Modes

-   ***all:*** Returns both the list of suspicious queries and suspicious accesses

-   ***queries:*** Returns only the list of suspicious queries

-   ***access:*** Returns only the list of suspicious accesses

As additional filters, the following parameters may be provided:

-   ***date1:*** Query start date period. Format YYYY-MM-DD (ISO 8601)

-   ***date2:*** Query end date period. Format YYYYY-MM-DD (ISO 8601)

-   ***hostname:*** Hostname of the device to be queried. It must be the same as the hostname registered in the Segura.

-   ***userCredential:*** Username of the credential used to be queried.

-   ***username:*** Username of the user Segura that you have performed the session

-   ***protocol:*** Set a protocol variable if you need to filter for a particular protocol.

-   ***rdp:*** RDP Proxy Sessions via Segura RDP Proxy and Segura Web Proxy.

-   ***rdpweb:*** RDP proxy sessions via Segura Web Proxy.

-   ***ssh:*** SSH Sessions from Segura Terminal Proxy or Segura Web Proxy.

-   ***sshweb:*** SSH Sessions from the Segura Web Proxy.

-   ***telnet:*** Telnet sessions from Segura Terminal Proxy or Segura Web Proxy.

-   ***vnchttp:*** Sessions to websites via Segura Web Proxy.

-   ***rdpgate:*** RDP Proxy Sessions via Segura RDP Proxy.

-   ***jumpserver:*** SSH Sessions from the Segura Segura Terminal Proxy.

-   ***sql:*** Database Sessions via Segura Web Proxy.

-   ***all:*** all proxy options.


### Query all threats
 
``` 
GET /iso/coge/risco/all 
``` 

#### Expected response

``` 
HTTP/1.1 200 OK 
``` 

```json
{
    "response": {
        "status": 200,
        "mensagem": "HigherRisk",
        "erro": false,
        "message": "HigherRisk",
        "error": false
    },
    "higher_risk": {
        "queries": [
            {
                "query_Cod": "2",
                "risk": "0",
                "query_date": "2021-03-05 10:00:07",
                "user_Cod": "87",
                "username": "Jose Pedro",
                "credential_cod": "1",
                "credential": "accounts",
                "additional_Info": "",
                "device": "Google (google.com)"
            },
            ...
        ],
        "access": [
            {
                "session_cod": "1",
                "host": "172.10.15.20",
                "port": "3389",
                "protocol": "rdp",
                "credential": "usrloclmtd",
                "risk": "0",
                "start_date": "2021-03-17 02:44:00",
                "end_date": "2021-03-17 02:44:34",
                "duration": "00:00:34",
                "user_Cod": "117",
                "username": "usrlmtd"
            },
            ...
        ]
    }
}
```

#### Expected response when the query is made with dates reversed

 
``` 
GET /iso/coge/risco/all?data1=2021-01-28&data2=2020-01-29 
``` 

```json
{
    "response": {
        "status": 400,
        "mensagem": "Date1 greater than date2",
        "erro": false,
        "message": "Date1 greater than date2",
        "error": false
    }
}
```

#### Expected response when the query is made by providing credential and omitting hostname

``` 
GET /iso/coge/risco/all?userCredencial=CREDENTIALDC783 
``` 

```json
{
    "response": {
        "status": 400,
        "mensagem": "hostname parameter is missing",
        "erro": false,
        "message": "hostname parameter is missing",
        "error": false
    }
}
```

#### Expected response when the query is made by providing hostname and omitting credential

``` 
GET /iso/coge/risco/all?hostname=HOSTNAMEIROHP 
``` 

```json
{
    "response": {
        "status": 400,
        "mensagem": "userCredencial parameter is missing",
        "erro": false,
        "message": "userCredencial parameter is missing",
        "error": false
    }
}
```

#### Expected response when the query is made by providing an invalid protocol

``` 
GET /iso/coge/risco/all?protocolo=PROTOCOLOO4TZ5 
``` 

```json
{
    "response": {
        "status": 400,
        "mensagem": "Invalid protocol",
        "erro": false,
        "message": "Invalid protocol",
        "error": false
    }
}
```
### Query all suspicious credentials request

``` 
GET /iso/coge/risco/queries 
``` 

#### Expected response

``` 
HTTP/1.1 200 OK 
``` 

```json
{
    "response": {
        "status": 200,
        "mensagem": "MaiorRisco",
        "erro": false,
        "message": "MaiorRisco",
        "error": false
    },
    "maior_risco": {
        "consultas": [
            {
                "Cod_Consulta": "1",
                "Risco": "0",
                "Data_Consulta": "2021-01-11 10:18:32",
                "Cod_Usuario": "102",
                "Nome_Usuario": "Peter Robinson Green",
                "Cod_Credencial": "5",
                "Credencial": "fakermainframeuser",
                "Info_Adicional": null,
                "Dispositivo": "fakeserver (10.20.10.15)"
            },

            ...
        ]
    }
}
```
### Query all suspicious accesses

``` 
GET /iso/coge/risco/access 
``` 

#### Resposta esperada

 
``` 
HTTP/1.1 200 OK 
``` 

```json
{
    "response": {
        "status": 200,
        "mensagem": "MaiorRisco",
        "erro": false,
        "message": "MaiorRisco",
        "error": false
    },
    "maior_risco": {
        "acessos": [
            {
                "Cod_Sessao": "1",
                "Host": "10.20.10.18",
                "Porta": "3389",
                "Protocolo": "rdp",
                "Credencial": "usrdomlmtd",
                "Risco": "0",
                "Data_Inicio": "2020-11-20 16:07:30",
                "Data_Fim": "2020-11-20 16:08:09",
                "Duracao": "00:00:39",
                "Cod_Usuario": "102",
                "Nome_Usuario": "Peter Robinson Greenr"
            },

            ...
        ]
    }
}
```

## Credentials Dashboard

``` 
GET /iso/dash/credentials/* 
``` 
This method returns the status of the credentials managed by the Segura. To perform the query it is necessary to provide the desired status:

-   ***all:*** All states

-   ***expired:*** Expiry count only

-   ***using:*** Credential count only that are in use

### Query all credentials
 
``` 
GET /iso/coge/credentials/all 
``` 

#### Expected response

``` 
HTTP/1.1 200 OK 
``` 

```json
{
    "response": {
        "status": 200,
        "mensagem": "Credentials",
        "erro": false,
        "message": "Credentials",
        "error": false
    },
    "credentials": {
        "expired": "1",
        "using": "12"
    }
}
```

### Query expired credentials

``` 
GET /iso/dash/credentials/expired 
``` 

#### Expected response

``` 
HTTP/1.1 200 OK 
``` 

```json
{
    "response": {
        "status": 200,
        "mensagem": "Credenciais",
        "erro": false,
        "message": "Credenciais",
        "error": false
    },
    "credenciais": {
        "expiradas": "1"
    }
}
```

### Query credentials in use

``` 
GET /iso/dash/credentials/using 
``` 

```json
{
    "response": {
        "status": 400,
        "mensagem": "Invalid request",
        "erro": false,
        "message": "Invalid request",
        "error": false
    }
}
```

#### Expected response when an invalid state is provided

 
``` 
GET /iso/dash/credentials/expired 
``` 

```json
{
    "response": {
        "status": 400,
        "mensagem": "Invalid request",
        "erro": false,
        "message": "Invalid request",
        "error": false
    }
}
```

#### Expected response when no status is provided

 
``` 
GET /iso/dash/credentials/ 
``` 

```json
{
    "response": {
        "status": 404,
        "mensagem": "Resource/sub-resource not found",
        "erro": true,
        "cod_erro": 1,
        "message": "Resource/sub-resource not found",
        "error": true,
        "error_code": 1
    }
}
```
