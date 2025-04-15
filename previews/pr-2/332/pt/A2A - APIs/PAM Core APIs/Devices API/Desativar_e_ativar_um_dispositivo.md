# Desativar e ativar um dispositivo

Este artigo apresenta como desativar e ativar dispositivos no **PAM Core** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e respostas em caso de sucesso ou em caso de erros.

## Autorização

Para começar, certifique-se de que o **PAM Core** esteja listado em **Recursos autorizados** no seu módulo **A2A**.
Para mais informações sobre a autorização de um aplicativo, acesse [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application).

## Autenticação

Cada requisição na API deve conter a **OAuth Consumer Key** e o **OAuth Token** do cliente.
Para mais informações sobre a autenticação, acesse [Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application).

## Métodos
### Desativar um dispositivo 

#### Requisição

Para desativar um dispositivo registrado no **PAM Core**, envie uma requisição para o seguinte endpoint:

```
DELETE /iso/pam/device/[device_id]
```
:::(Warning) (Cuidado)
Ao desativar um dispositivo, todas as credenciais associadas a ele são automaticamente suspensas.
:::

#### Parâmetros de requisição

***Path***


| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| **device_id** | String | Sim | Código único de identificação do dispositivo. | 53 |

#### Retorno


Desativa um dispositivo registrado no **PAM Core** com base em seu **ID** e apresenta uma mensagem com informações sobre o processo de desativação.

**Resposta esperada**

```
HTTP/1.1 200 OK
```
```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Device successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}
```

**Em caso de erro - dispositivo não encontrado**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1011: Device not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1011: Device not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1011,
        "message": "1011: Device not found",
        "detail": null
    }
}
```

### Ativar um dispositivo
#### Requisição
Para ativar um dispositivo registrado no **PAM Core**, envie uma requisição para o seguinte endpoint:

```
PUT /iso/pam/device/[device_id]
```
:::(Warning) (Cuidado)
Ao ativar o dispositivo, as senhas vinculadas a ele não serão reativadas.
:::

#### Parâmetros de requisição

***Path***

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| **device_id** | String | Sim | Código único de identificação do dispositivo. | 53 |

#### Retorno

Ativa um dispositivo registrado no **PAM Core** com base em seu **ID** e apresenta uma mensagem com informações sobre o processo de ativação.

**Resposta esperada** 

```
HTTP/1.1 200 OK
```
```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Device successfully activated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device successfully activated",
        "erro": false,
        "cod_erro": 0
    }
}
```

**Em caso de erro -  dispositivo não encontrado**

```
HTTP/1.1 400 Bad Request
```
```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1011: Device not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1011: Device not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1011,
        "message": "1011: Device not found",
        "detail": null
    }
}
```