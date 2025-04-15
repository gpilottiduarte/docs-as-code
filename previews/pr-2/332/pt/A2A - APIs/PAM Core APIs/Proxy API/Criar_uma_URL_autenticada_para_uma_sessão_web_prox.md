# Criar uma URL autenticada para uma sessão web proxy

Este artigo apresenta como criar uma URL autenticada para uma sessão web proxy no **PAM Core** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e as respostas em caso de sucesso ou em caso de erros.

## Autorização

Para começar, certifique-se de que o **Web Proxy Session** esteja listado em **Recursos autorizados** no seu módulo **A2A**. Para mais informações sobre a autorização de um aplicativo, acesse a documentação sobre como [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application).

## Autenticação

Cada requisição nas APIs deve conter a **OAuth Consumer Key** e o **OAuth Token** do cliente. Para mais informações sobre a autenticação, acesse a documentação sobre [Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application).

## Métodos
### Criar uma URL autenticada para uma sessão web proxy

#### Requisição

Para gerar uma URL autenticada para iniciar uma sessão web proxy em um dispositivo previamente registrado no **PAM Core** usando o web proxy do senhasegura, envie uma requisição para o seguinte endpoint:

```
POST /iso/remote/session
```

:::(Info) (Info)
Por padrão, o sistema definirá a resolução da tela como 1920x1080, a menos que especificado de outra forma.
:::

#### Parâmetros de requisição 

***Body***

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
|```user```| String | Sim | Nome de usuário utilizado para autenticação. O usuário deve ter sido previamente adicionado ao senhasegura. | senhasegura-user |
| ``` credential``` | String | Sim |Nome de usuário da credencial utilizada nesta sessão web proxy. | admin |
| ```device ``` | String | Sim | Hostname ou endereço IP do dispositivo de destino. | 172.12.32.14 |
| ``` protocol``` | String | Sim | Protocolo de rede (SSH, RDP, HTTPS, entre outros.). | SSH |
| ``` remotedevice``` | String | No | ID do dispositivo, endereço IP ou hostname para a sessão web proxy. Necessário somente se a sessão utilizar credenciais de domínio. | 123 |
| ```remoteAddr ``` | String | Não | Endereço IP do usuário. Este endereço IP será utilizado durante toda a sessão. | 201.13.25.61 |
| ```port ``` | Int | Não | Porta usada durante toda a sessão. Por padrão, ela utiliza a porta do dispositivo do dispositivo escolhido, a menos que seja especificado de outra forma. | 22 |
| ```remoteapp ``` | Int | Não | ID do RemoteApp. Apenas para sessões do RemoteApp. | 123 |
| ```screensize ``` | String | Não | Resolução de tela. | 1900x1200 |

#### Retorno


Cria uma URL autenticada para uma sessão web proxy em um dispositivo registrado no **PAM Core** e retorna uma mensagem com informações sobre o processo de criação.


**Resposta esperada**
```
HTTP/1.1 200 OK
```

```
{
    "response": {
        "status": 200,
        "mensagem": "Session created successfully",
        "erro": false,
        "message": "Session created successfully",
        "error": false
    },
    "session": {
        "session_url": "https://senhasegura/modulos/auth?_sr=cmJzOkQwUzdq     Wk9zQkhKY2FvRkNaQ0Q2OVRnbVdmTnk1MEc2cDNnM1orM2ltL3BxQURZNW91WW1G     TExFU2JlYldkTlRabFNWb0Z2VzllU0E1WlIraEtJM3NvMlZmZ0NZTXV4QlNFWEtPUko3YlMxQWNwZmxYTWw2ZGxsUlFEOCtPdlBq",
        "token": "c4ac50a35bcc0a0d1641b02e64dd7c6421d3e5be2afa5378ca29ce5621e2eb38"
    }
}

```

:::(Info) (Info)
As URLs autenticadas expiram após 30 segundos e não podem mais ser utilizadas. Gere uma nova, caso necessário.
:::

**Em caso de erro -  parâmetro obrigatório ausente**

```
HTTP/1.1 400 Bad Request
```

```
{
    "response": {
        "status": 400,
        "mensagem": "Credential not specified",
        "erro": true,
        "cod_erro": 0,
        "message": "Credential not specified",
        "error": true,
        "error_code": 0
    }
}

```

#### Erros possíveis

Os parâmetros a seguir são obrigatórios e caso não sejam informados, podem resultar em erros: 

* ```user```: User not specified (usuário não especificado).
* ```credential```: Credential not specified (credencial não especificada).
* ```device```: Credential device not specified (dispositivo da credencial não informado).
* ```protocol```: Invalid protocol (protocolo inválido).

