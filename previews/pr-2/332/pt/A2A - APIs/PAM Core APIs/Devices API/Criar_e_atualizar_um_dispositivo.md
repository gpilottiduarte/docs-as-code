# Criar e atualizar um dispositivo

Este artigo apresenta como criar e atualizar os dispositivos no **PAM Core** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e as respostas em caso de sucesso ou em caso de erros.

## Autorização

Para começar, certifique-se de que o **PAM Core** esteja listado em **Recursos autorizados** no seu módulo **A2A**.
Para mais informações sobre a autorização de um aplicativo, acesse [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application).

## Autenticação

Cada requisição na API deve conter a **OAuth Consumer Key** e o **OAuth Token** do cliente.
Para mais informações sobre autenticação, acesse [Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application).

## Métodos
### Criar um dispositivo


#### Requisição

Para criar um dispositivo no **PAM Core**, envie uma requisição para o seguinte endpoint:

```
POST /iso/pam/device
```
#### Parâmetros de requisição*

:::(Info) (Info)
Se o hostname fornecido corresponder ao de um dispositivo previamente criado, esta requisição atualizará o dispositivo existente. Caso contrário, ela criará um novo dispositivo e o associará a este hostname.
:::

***Body***
| Campo | Tipo | Obrigatório | Descrição | Exemplo | Novo valor padrão do dispositivo |
| --- | --- | --- | --- | --- | - |
| **ip** | String | Sim | Endereço IP do dispositivo. | 172.10.21.21 |- |
| **hostname** | String | Sim | Nome do dispositivo. | Device-via-API |- |
| **model** | String | Sim | Modelo do dispositivo. Um novo modelo é criado se o valor for único. | Linux |- |
| **type** | String | Sim | Tipo de dispositivo. Um novo tipo é criado se o valor for único. | RedHat |- |
| **vendor** | String | Sim | Fornecedor associado ao dispositivo. Um novo fornecedor é criado se o valor for único. | Desktop |- |
| **site** | String | Sim | Site associado ao dispositivo. Um novo site é criado se o valor for único. | AWS |- |
| **device_domain** | String | Não | Nome ou abreviação do domínio. Apenas domínios previamente registrados são aceitos. | api, app |- |
| **device_tags** | String | Não | Tags associadas ao dispositivo. | api, app |- |
| **connectivities** | String | Não | Conectividade do dispositivo. | SSH:22 |- |
| **session_remote_config** | String | Não | Expressão do login. |  |- |

:::(Warning) (Atenção)
Ao listar os **device_domains**, adicione vírgulas sem espaço entre eles, conforme o exemplo a seguir:
"testlab.com,demo.lab.com".
:::

**Exemplo de requisição**

```
{
    "ip": "172.10.21.21",
    "hostname": "Device-via-API",
    "model": "RedHat",
    "type": "Desktop",
    "vendor": "Linux",
    "site": "AWS",
    "device_domain": "api, app"
    "device_tags": "api, app",
    "connectivities": "SSH:22"
  }
```

#### Retorno


Cria um dispositivo no **PAM Core** e retorna uma mensagem com informações sobre o processo de criação.

**Resposta esperada**

```
HTTP/1.1 201 CREATED
```
```
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Device successfully registered!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device successfully registered!",
        "erro": false,
        "cod_erro": 0
    },
    "device": {
        "id": "31",
        "hostname": "Device-via-API",
        "ip": "172.10.21.21",
        "model": "RedHat",
        "type": "Desktop",
        "vendor": "Linux",
        "site": "AWS",
        "device_domain": "api,app",
        "connectivities": "SSH:22",
        "session_remote_config": "",
        "device_tags": "api,app"
    }
}
```

**Em caso de erro -  ausência de parâmetro obrigatório**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1004: The device's hostname was not informed",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1004: The device's hostname was not informed",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1004,
        "message": "1004: The device's hostname was not informed",
        "detail": null
    }
}
```

### Atualizar um dispositivo
#### Requisição
Para atualizar um dispositivo registrado no **PAM Core**, envie uma requisição para o seguinte endpoint:

```
POST /iso/pam/device
```
#### Parâmetros de requisição
:::(Info) (Info)
Se o hostname fornecido não corresponder ao de um dispositivo previamente criado, este endpoint criará um novo dispositivo e o associará a este hostname.
:::

***Body***
| Campo | Tipo | Obrigatório | Descrição | Exemplo | Novo valor padrão do dispositivo |
| --- | --- | --- | --- | --- | - |
| **ip** | String | Sim | Endereço IP do dispositivo. | 127.0.0.1 |- |
| **hostname** | String | Sim | Nome do dispositivo. | Device-via-API |- |
| **model** | String | Sim | Modelo do dispositivo. Um novo modelo é criado se o valor for único. | Linux |- |
| **type** | String | Sim | Tipo de dispositivo. Um novo tipo é criado se o valor for único. | Server |- |
| **vendor** | String | Sim | Fornecedor associado ao dispositivo. Um novo fornecedor é criado se o valor for único. | Debian |- |
| **site** | String | Sim | Site associado ao dispositivo. Um novo site é criado se o valor for único. | Default |- |
| **device_domain** | String | Não | Nome ou abreviação do domínio. Apenas domínios previamente registrados são aceitos. | senhasegura.lab |- |
| **device_tags** | String | Não | Tags associadas ao dispositivo. | api, app |- |
| **connectivities** | String | Não | Conectividade do dispositivo. | SSH:22, HTTPS:443 |- |
| **session_remote_config** | String | Não | Expressão do login. | SSH:EXPECT:FILL |- |

:::(Warning) (Atenção)
Ao listar os **device_domains**, adicione vírgulas sem espaço entre eles, conforme o exemplo a seguir:
"testlab.com,demo.lab.com".
:::

**Exemplo de requisição**


```
{
    "ip": "172.0.0.1",
    "hostname": "Device-via-API",
    "model": "Server",
    "type": "Debian",
    "vendor": "Linux",
    "site": "Default",
    "device_domain": "senhasegura.lab"
    "device_tags": "api, app",
    "connectivities": "SSH:22, HTTPS:443"
    "session_remote_config": "SSH:EXPECT:FILL"
  } 
```
#### Retorno
Atualiza um dispositivo no **PAM Core** e retorna uma mensagem com informações sobre o processo de atualização.

**Resposta esperada**

```
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Device updated successfully!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device updated successfully!",
        "erro": false,
        "cod_erro": 0
    },
    "device": {
        "id": "31",
        "hostname": "Device-via-API",
        "ip": "172.0.0.1",
        "model": "Server",
        "type": "Debian",
        "vendor": "Linux",
        "site": "Default",
        "device_domain": "senhasegura.lab",
        "connectivities": "SSH:22, HTTPS:443"
        "session_remote_config": "SSH:EXPECT:FILL",
        "device_tags": "api, app"
    }
}
```

**Em caso de erro -  ausência de um parâmetro obrigatório**

```
HTTP/1.1 400 Bad Request
```

```
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1004: The device's hostname was not informed",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1004: The device's hostname was not informed",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1004,
        "message": "1004: The device's hostname was not informed",
        "detail": null
    }
}
```
**Em caso de erro  - dispositivo não encontrado**

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
