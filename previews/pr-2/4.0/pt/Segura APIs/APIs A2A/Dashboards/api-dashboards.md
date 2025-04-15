# Dashboards

O Segura WebService A2A possui métodos de consulta das informações copiladas pelo módulo Dashboard.

:::(warning) (Cuidado)
Para utilizar esses métodos o recurso **Dashboards** deve ser selecionado na autorização da aplicação.
:::

## Dashboard de sessões proxy

 
``` 
GET /iso/coge/sessoes/* 
``` 
Este método irá retornar a quantidade de sessões proxy que ocorreram e que ainda estão em execução. Junto da path da URI, deve ser informado qual protocolo desejado. Os demais parâmetros devem ser fornecidos como query da URI.

### Protocolos suportados

-   ***jumpserver:*** Apenas sessões proxy que ocorreram através do Segura Terminal Proxy

-   ***rdpgate:*** Apenas sessões proxy que ocorreram através do Segura RDP Proxy

-   ***ssh:*** Apenas sessões proxy de protocolo SSH independente de qual tecnologia proxy foi utilizada

-   ***rdp:*** Apenas sessões proxy de protocolo RDP independente de qual tecnologia proxy foi utilizada

-   ***rdpweb:*** Apenas sessões proxy de protocolo RDP que ocorreram através do Segura Web Proxy

-   ***sshweb:*** Apenas sessões proxy de protocolo SSH que ocorreram através do Segura Web Proxy

-   ***all:*** Todas sessões executadas

Cada protocolo irá retornar um dicionário contendo diferentes nós representando a tecnologia proxy utilizada. Como filtros adicionais, os seguintes parâmetros podem ser fornecidos:

| Campo | Tipo | Exemplo | Obrig. | Obs. |
| --- | --- | --- | --- | --- |
| ativo | Integer | 1 | Não | Forneça 1 para indicar que apenas sessões ativas deva ser retornado. |
| data1 | String | 2020-01-30 | Não | Data de início do período de consulta. Formato YYYY-MM-DD (ISO 8601). |
| data2 | String | 2020-03-30 | Não | Data de término do período de consulta. Formato YYYY-MM-DD (ISO 8601). |
| hostname | String | mysrv | Não | Hostname do dispositivo a ser consultado. Deve ser igual ao hostname cadastrado no Segura . |
| userCredencial | String | mycredusr | Não | Username da credencial utilizada a ser consultada.. |
| username | String | myssusr | Não | Username do usuário Segura que realizou a sessão |

### Consultar todas as sessões

 
``` 
GET iso/coge/sessoes/all 
``` 

#### Resposta esperada
 
``` 
HTTP/1.1 200 OK 
``` 

```json
{
    "response": {
        "status": 200,
        "mensagem": "Sessoes",
        "erro": false,
        "message": "Sessoes",
        "error": false
    },
    "sessoes": {
        "historico": {
            "SQL": 4,
            "RDP_Web": "3",
            "RDP_Gate": "1",
            "SSH/Telnet": 4,
            "Jump_Server": 2,
            "HTTP_VNC": "2"
        },
        "ativas": {
            "RDP_Gate": "2",
            "Jump_Server": 1
        }
    }
}
```

#### Resposta para consulta de sessões com valores inválidos

Neste exemplo, nenhuma sessão será retornada porque os dados fornecidos são inválidos.

```json
{
    "response": {
        "status": 200,
        "mensagem": "Sessoes",
        "erro": false,
        "message": "Sessoes",
        "error": false
    },
    "sessoes": {
        "ativas": [],
        "historico": []
    }
}
```

#### Resposta para consultar sessões SSH

Neste exemplo, apenas sessões de protocolo SSH que ocorreram, ou que tenham iniciado dentro do período fornecido, serão retornadas.

```json
{
    "response": {
        "status": 200,
        "mensagem": "Sessoes",
        "erro": false,
        "message": "Sessoes",
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

## Dashboard de ameaças

 
``` 
GET /iso/coge/risco/* 
``` 
Este método irá retornar as sessões proxy e custódias de senha que sejam suspeitas. Junto da path da URI, deve ser informado qual tipo de operação desejado. Os demais parâmetros devem ser fornecidos como query da URI.

### Modos de consulta

-   ***all:*** Retorna tanto a lista de consultas suspeitas quanto acessos suspeitos.

-   ***consultas:*** Retorna apenas a lista de consultas suspeitas.

-   ***acessos:*** Retorna apenas a lista de acessos suspeitos.

Como filtros adicionais, os seguintes parâmetros podem ser fornecidos:

-   ***data1:*** Data de início do período de consulta. Formato YYYY-MM-DD (ISO 8601).

-   ***data2:*** Data de término do período de consulta. Formato YYYY-MM-DD (ISO 8601).

-   ***hostname:*** Hostname do dispositivo a ser consultado. Deve ser igual ao hostname cadastrado no Segura.

-   ***userCredencial:*** Username da credencial utilizada a ser consultada.

-   ***username:*** Username do usuário Segura que realizou a sessão.

-   ***protocolo:*** Utilize se desejar filtrar por um protocolo específico.

-   ***rdp:*** Sessões proxy RDP via Segura Web Proxy e Segura RDP Proxy.

-   ***rdpweb:*** Sessões proxy RDP via Segura Web Proxy.

-   ***ssh:*** Sessões SSH provenientes do Segura Terminal Proxy ou Segura Web Proxy

-   ***sshweb:*** Sessões SSH provenientes do Segura Web Proxy

-   ***telnet:*** Sessões Telnet provenientes do Segura Terminal Proxy ou Segura Web Proxy

-   ***vnchttp:*** Sessões a websites via Segura Web Proxy

-   ***rdpgate:*** Sessões proxy RDP via Segura RDP Proxy

-   ***jumpserver:*** Sessões SSH provenientes do Segura Terminal Proxy

-   ***sql:*** Sessões a banco de dados via Segura Web Proxy

-   ***all:*** Todas opções de proxy

Veja os exemplos a seguir para diferentes consultas.

### Consultar todas as ameaças

``` 
GET /iso/coge/risco/all 
``` 

#### Resposta esperada

``` 
HTTP/1.1 200 OK 
``` 

```json
{
    "response": {
        "status": 200,
        "mensagem": "Sessoes",
        "erro": false,
        "message": "Sessoes",
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

#### Resposta esperada quando a consulta é feita com datas invertidas

 
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

#### Resposta esperada quando a consulta é feita fornecendo credencial e omitindo hostname

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

#### Resposta esperada quando a consulta é feita fornecendo hostname e omitindo credencial

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

#### Resposta esperada quando a consulta é feita fornecendo um protocolo inválido

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

### Consultar todas as consultas suspeitas por credenciais

 
``` 
GET /iso/coge/risco/consultas 
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

### Consultar todos os acessos suspeitos
 
``` 
GET /iso/coge/risco/acessos 
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

## Dashboard de credenciais

``` 
GET /iso/coge/credenciais/* 
``` 
Este método retorna o status das credenciais geridas pelo Segura. Para realizar a consulta é necessário fornecer o estado desejado:

-   ***all:*** Todos estados

-   ***expiradas:*** Apenas contagem de expiradas. Quantidade de credenciais que tem configuração de troca de senha automática e que já expiraram o prazo para executar a troca.

-   ***utilizacao:*** Apenas contagem de credenciais em utilização. Quantidade de credenciais em custódia no momento.

### Consultar todas as credenciais

``` 
GET /iso/coge/credenciais/all 
``` 

#### Resposta esperada

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
        "expiradas": "1",
        "utilizacao": "3"
    }
}
```

### Consultar credenciais expiradas

``` 
GET /iso/coge/credenciais/expiradas 
``` 

#### Resposta esperada

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

### Consultar credenciais em utilização

``` 
GET /iso/coge/credenciais/utilizacao 
``` 

#### Resposta esperada
 
``` 
HTTP/1.1 200 OK 
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

#### Resposta esperado quando é fornecido um estado inválido

``` 
GET /iso/coge/credenciais/invalido 
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

#### Resposta esperado quando não é fornecido um estado

``` 
GET /iso/coge/credenciais/ 
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
