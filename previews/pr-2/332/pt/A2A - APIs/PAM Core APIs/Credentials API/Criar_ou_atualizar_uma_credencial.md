# Criar ou atualizar uma credencial

Este documento apresenta como criar ou atualizar uma credencial no **PAM Core** via API, via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e respostas em caso de sucesso ou em caso de erros.


## Métodos

## `POST` Criar ou atualizar uma credencial

### Requisição
Para criar ou atualizar uma credencial no **PAM Core**, envie uma requisição para o seguinte endpoint:


`/iso/pam/credential` 

:::(Error) (Alerta!)
Caso esteja usando o **A2A** para criar uma credencial e o dispositivo correspondente não exista, você precisará primeiro criar um dispositivo. Para mais informações, acesse o documento sobre [criação de dispositivo](/v3-32/docs/pt/pam-devices-management). 
:::

### Parâmetros de requisição
***Body***



| Campo| Tipo| Obrigatório| Descrição| Exemplo| Novo valor da credencial
|----|----|----|----|----| ----|
| `identifier`       | String  | **Não** (ao criar uma credencial).        **Sim** (ao atualizar uma credencial).  **Nota**: vá até a seção [Opções de gerenciamento de credenciais](/v3-32/docs/pt/a2a-pam-core-create-or-update-a-credential#opções-de-gerenciamento-de-credenciais) para mais detalhes.  |    String única definida pelo usuário para identificar a credencial.| 123| -
| `username`| String  | Sim| Username designado à credencial.| my_user| usr
| `content`| String  | Não| Senha designada à credencial.| MyPrettyPassword@1234     |-
| `additional`| String  | Não| Informações adicionais.| DATABASE|-
| `tags`| String  | Não| Tags associadas à credencial.| api, app|
| `credential_type`  | String  | Não| Tipo de credencial. Um novo tipo é criado caso o valor passado seja único. | Domain User|Local User    |
| `domain`| String  | Não| Nome de domínio ou abreviação. Apenas domínios previamente registrados são aceitos. | senhasegura.lab|-
| `parent_password`  | Int     | Não| ID da credencial pai. | 123 | -
| `hostname` | String  | Sim| Nome do dispositivo.| localhost| -
| `ip`| String  | Sim| Endereço IP do dispositivo.| 127.0.0.1|-
| `type`| String  | Não| Tipo de dispositivo. Um novo tipo é criado caso o valor passado seja único. | Server|-
| `vendor`| String  | Não| Fornecedor associado ao dispositivo. Um novo fornecedor é criado caso o valor passado seja único. | Debian|-
| `model`| String  | Não| Modelo do dispositivo. Um novo modelo é criado caso o valor passado seja único. | 10.0 Buster|-
| `site`| String  | Não| Localização do dispositivo. Um novo site é criado caso o valor passado seja único. | Default|-
| `device_domain`| String  | Não| Nome de domínio do dispositivo ou abreviação. Apenas domínios previamente registrados são aceitos. | senhasegura.lab|-
| `device_tags`| String  | Não| Tags associadas ao dispositivo.| api, app                |-
| `connectivities`| String  | Não| Conectividade do dispositivo.| SSH:22, HTTPS:443|-
| `session_remote_config` | String | Não| Expressão de login.| SSH:EXPECT:FILL           |-


### Opções de gerenciamento de credenciais 



Após enviar a requisição, você pode optar por criar ou atualizar uma credencial registrada no **PAM Core** escolhendo entre preencher o parâmetro `identifier` ou os parâmetros `hostname`, `ip` e `username`.

:::(Info) (Info)
Antes de continuar, saiba que os termos **válido** e **inválido** no contexto deste  documento significam:
* **válido** - um valor que foi previamente atribuído a uma credencial.
* **inválido** - um valor que não foi previamente atribuído a uma credencial.
:::


### Preencha o parâmetro identifier 
Ao fornecer um valor para o `identifier`, preste atenção ao seguinte:
* O parâmetro `identifier` tem precedência sobre o `username` da credencial. Isso significa que se você fornecer um `identifier` ao criar a credencial, você pode atualizar o `username` da credencial em uma chamada subsequente.
* Forneça um `hostname` e `ip` válidos.
* Ao atualizar a credencial, se o `identifier` fornecido for inválido, o sistema procurará a credencial usando suas informações de `hostname`, `ip` e `username`.
* Se a credencial for encontrada, ela será atualizada com todos os parâmetros fornecidos, incluindo o `identifier`.
* Se a credencial não for encontrada, uma nova será criada com base nos parâmetros fornecidos.


#### Criar uma credencial com um identifier inválido 
Ao fornecer um `identifier` inválido, o sistema buscará pela credencial usando suas informações de `hostname`, `ip` e `username`. Caso essas informações não sejam encontradas, a credencial será criada.

**Exemplo de requisição**
```json
{
    "`username`" : "jhoncredential",
    "`hostname`": "Linkedin",   
    "`ip`": "linkedin.com",
    "content": "vfdvds##@",
    "tags": "social",
    "`identifier`": "`identifier`jhon"
}

```

#### Retorno

Cria uma credencial no **PAM Core** e retorna uma mensagem com informações sobre o processo de criação. 

**Resposta esperada**
```json
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Credential successfully registered!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential successfully registered!",
        "erro": false,
        "cod_erro": 0
    },
    "credential": {
        "id": "115",
        "tag": null
    }
}
```

#### Atualizar uma credencial com um identifier válido

Ao fornecer um `identifier` válido, a credencial é atualizada com base nos demais parâmetros fornecidos.


**Exemplo de requisição**

```json
{
    "`username`" : "cred6updatetest",
    "`hostname`": "Linkedin",   
    "`ip`": "linkedin.com" ,
    "`identifier`": "`identifier`testing",
    "content": "bfgbdfbdsd#@"
}
```
#### Retorno

Atualiza uma credencial no **PAM Core** com base em seu `identifier` e  retorna uma mensagem com informações sobre o processo de atualização.

**Resposta esperada**

```json
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Credential updated successfully!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential updated successfully!",
        "erro": false,
        "cod_erro": 0
    },
    "credential": {
        "id": "114",
        "tag": "`identifier`jhon"
    }
}
```

#### Atualizar uma credencial com um identifier inválido

Ao fornecer um `identifier` inválido, o sistema buscará pela credencial usando suas informações de `hostname`, `ip` e `username`. Caso essas informações sejam encontradas, a credencial será atualizada.

**Exemplo de requisição**

```json
{
    "username" : "TLS12Testing@outlook.com",
    "hostname": "Outlook",
    "ip": "login.live.com" ,
    "`identifier`": "`identifier`testing"
}


```
#### Retorno

Atualiza as informações de uma credencial no **PAM Core** com base em seu `hostname`, `ip` e `username` e  retorna uma mensagem com informações sobre o processo de atualização.

 **Resposta esperada**
 
 
```json
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Credential updated successfully!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential updated successfully!",
        "erro": false,
        "cod_erro": 0
    },
    "credential": {
        "id": "114",
        "tag": "`identifier`jhon-Updated-identifier"
    }
}


```


**Em caso de erro - parâmetro obrigatório ausente**

`HTTP/1.1 400 Bad Request` 

```json
{
    "response": {
        "status": 400,
        "mensagem": "1004: The device's `hostname` was not informed",
        "erro": true,
        "message": "1004: The device's `hostname` was not informed",
        "error": true
    },
    "exception": {
        "code": 1004,
        "message": "1004: The device's `hostname` was not informed",
        "detail": null
    }
}
```

### Preencha os parâmetros hostname, ip e username

* Ao criar uma credencial, caso você não forneça um `identifier` , será necessário fornecer um `hostname`, um `ip` e um `username` para a credencial.

* O `hostname` e o `ip` devem ser válidos.

* Se um `username` válido for fornecido , a credencial será atualizada.

* Se o `username` fornecido for inválido, uma nova credencial será criada.

:::Info(Info)
Se você atribuir um `identifier` único à credencial durante sua criação, poderá usá-lo para atualizar a credencial em uma chamada subsequente.
:::

#### Criar uma credencial com um username inválido

Ao fornecer um `username` inválido, a credencial será criada com com base nos demais parâmetros fornecidos.

**Exemplo de requisição**

```json
{
    "`hostname`": "gmail",
    "`username`": "cred9",
    "`ip`": "https://www.gmail.com",
    "`identifier`": "`identifier`2",
    "additional": "info editada"
}
```

#### Retorno

Cria uma credencial no **PAM Core** e retorna uma mensagem com informações sobre o processo de criação.

**Resposta esperada**

```json
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Credential successfully registered!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential successfully registered!",
        "erro": false,
        "cod_erro": 0
    },
    "credential": {
        "id": "115",
        "tag": null
    }
}
```
#### Atualizar uma credencial com um username válido

Ao fornecer um `username` que já está atribuído a uma credencial, a credencial é atualizada com base nos demais parâmetros fornecidos.
```json
{
    "username" : "cred9",
    "hostname": "Facebook",   
    "ip": "facebook.com",
    "content": "updating-my-password",
    "tags": "face, social, updated"
}
```

#### Retorno
Atualiza as informações de uma credencial no **PAM Core** com base em seu `username` e  retorna uma mensagem com informações sobre o processo de atualização.

**Resposta esperada**

```json
{
    "code": 201,
    "response": {
        "status": 201,
        "message": "Credential updated successfully!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential updated successfully!",
        "erro": false,
        "cod_erro": 0
    },
    "credential": {
        "id": "115",
        "tag": null
    }
}
```
**Em caso de erro - parâmetro obrigatório ausente**

```
HTTP/1.1 400 Bad Request
```

```json
{
    "response": {
        "status": 400,
        "mensagem": "1004: The device's `hostname` was not informed",
        "erro": true,
        "message": "1004: The device's `hostname` was not informed",
        "error": true
    },
    "exception": {
        "code": 1004,
        "message": "1004: The device's `hostname` was not informed",
        "detail": null
    }
}
```

### Outros parâmetros da credencial
Você também pode configurar uma credencial adicionando outros parâmetros disponíveis nas abas:


* Configurações de execução.
* Configurações de sessão. 
* Configurações adicionais.  
* Configurações JIT.



#### Configurações de execução
**Parâmetros do corpo da requisição**


| Campo                              | Tipo     | Obrigatório | Descrição                                                                         | Exemplo                    |
|------------------------------------|----------|-------------|-----------------------------------------------------------------------------------|----------------------------|
| `parent_credential`                | String   | Não         | Credencial pai selecionada para a credencial editada.                             | my_user                    |
| `parent_hostname`                  | Int      | Não         | `hostname` para a credencial pai selecionada.                                     | gmail                      |
| `parent_ip`                        | Int      | Não         | `ip` do dispositivo para a credencial pai selecionada.                             | 10.10.10.10                |
| `automatic_change`                 | Boolean  | Não         | Habilita ou disabilita mudanças automáticas.                                      | true, false                |
| `agent_based_password_change`      | Boolean  | Não         | Habilita ou desabilita mudança de senha agent-based.                              | true, false                |
| `change_plugin`                    | String   | Não         | Plugin de mudança para ser usada ao rotacionar a credencial.                      | SSH                        |
| `change_template`                  | String   | Não         | Template de mudança para rotação da credencial.                                   | 3COM                       |
| `use_own_credential_to_connect`    | Boolean  | Não         | Habilita ou desabilita o uso da própria credencial para conexão.                  | true, false                |
| `authentication_credential`        | String   | Não         | Credencial usada para autenticação durante o processo de rotação da credencial.   | cred2                      |
| `authentication_hostname`          | String   | Não         | O `hostname` de autenticação.                                                     | gmail                      |
| `authentication_ip`                | String   | Não         | O endereço de `ip` de autenticação.                                               | https://www.gmail.com      |
| `status`                           | Boolean  | Não         | Habilita ou desabilita reconciliação de credencial após falha de rotação.         | true, false                |
| `reconciliation_credential`        | String   | Não         | Credencial a ser usada no processo de reconciliação.                              | cred2                      |
| `reconciliation_hostname`          | String   | Não         | O `hostname` de reconciliação.                                                    | gmail                      |
| `reconciliation_ip`                | String   | Não         | O endereço `ip` de reconciliação.                                                 | https://www.gmail.com      |
| `reconciliation_plugin`            | String   | Não         | O plugin de execução para o processo de reconciliação da credencial.              | SSH                        |
| `reconciliation_template`          | String   | Não         | Template para o processo de reconciliação da credencial.                          | 3COM                       |


**Exemplo de requisição**

```json
{
    "username": "exemplo caderno 3.32",
    "hostname": "API-Testing",
    "ip": "128.0.0.1",
    "execution_settings": 
    {
        "parent_credential": "cred2",
        "parent_hostname": "gmail",
        "parent_ip": "https://www.gmail.com",
        "automatic_change": true,
        "agent_based_password_change": true,
        "change_plugin": "SSH",
        "change_template": "3COM",
        "use_own_credential_to_connect": false,
        "authentication_credential": "cred2",
        "authentication_hostname": "gmail",
        "authentication_ip": "https://www.gmail.com",
        "status": true,
        "reconciliation_credential": "cred2",
        "reconciliation_hostname": "gmail",
        "reconciliation_ip": "https://www.gmail.com",
        "reconciliation_plugin": "SSH",
        "reconciliation_template": "3COM"
    }
}
```

#### Configurações de sessão
**Parâmetros do corpo da requisição**


| Campo          |                     | Tipo            | Obrigatório | Descrição                                                   | Exemplo       | Novo valor da credencial |
|-------------------------------------|-----------------|-------------|-------------------------------------------------------------|---------------|---------------------------|----|
| `SSH`                |                 | Boolean         | Não         | Habilita ou desabilita o protocolo SSH.                     | true  | false                     |
| `Telnet`            |                  | Boolean         | Não         | Habilita ou desabilita o protocolo Telnet.                  | true  | false                     |
| `MySQL`            |                   | Boolean         | Não         | Habilita ou desabilita a conexão MySQL.                     | true  | false                     |
| `SQL Server`    |                      | Boolean         | Não         | Habilita ou desabilita a conexão SQL Server.                | true  | false                     |
| `HTTP`                 |               | Boolean         | Não         | Habilita ou desabilita o protocolo HTTP.                    | true  | false                     |
| `HTTPS`             |                  | Boolean         | Não         | Habilita ou desabilita o protocolo HTTPS.                   | true  | false                     |
| `RDP`                  |               | Boolean         | Não         | Habilita ou desabilita o protocolo RDP.                     | true  | false                     |
| `X11 Forward`     |                    | Boolean         | Não         | Habilita ou desabilita o X11 Forward.                      | true  | false                     |
| `VNC`                                 | Boolean         | Não         | Habilita ou desabilita a conexão via VNC.                  | true  | false                     |
| `restrict_access_to_remote_application`| | Boolean       | Não         | Habilita ou desabilita o acesso restrito à aplicação remota.| true| false                     |
|         |            `macros`          | Array of objects| Não         | Automação macro para RemoteApp.                             | -             | -                         |
|         |     `remote_app`           | String          | Não         | Automação RemoteApp associada à credencial.                 | MySQL         | -                         |
| `connectivity`    |                 | String          | Não         | Conectividade para automação RemoteApp associada à credencial.| SSH        | -                         |
| `use_own_credential_to_connect` |      | Boolean         | Não         | Habilita ou desabilita o uso da própria credencial para conexão.| false | true                     |
| `authentication_credential`   |       | String          | Não         | A credencial de autenticação.                               | cred2         | -                         |
| `authentication_hostname`   |         | String          | Não         | O hostname de autenticação.                                 | gmail         | -                         |
| `authentication_ip`     |             | String          | Não         | O endereço IP de autenticação.                              | https://www.gmail.com | - |


**Exemplo de requisição**

```json
{
    "username": "exemplo caderno 3.32",
    "hostname": "API-Testing",
    "ip": "128.0.0.1",
    "session_settings": 
        {
            "SSH": true,
            "Telnet": true,
            "MySQL": true,
            "SQL Server": true,
            "HTTP": true,
            "HTTPS": true,
            "RDP": true,
            "X11 Forward": true,
            "VNC": true,
            "restrict_access_to_remote_application": true,
            "macros": 
            [
                {
                    "remote_app": "MySQL",
                    "connectivity": "SSH"
                },
                {
                    "remote_app": "Kaspersky",
                    "connectivity": "RDP"
                }
            ],
            "use_own_credential_to_connect": false,
            "authentication_credential": "cred2",
            "authentication_hostname": "gmail",
            "authentication_ip": "https://www.gmail.com"
        }
}
```
#### Configurações adicionais

**Parâmetros de corpo requisição**

Configurações para implementar mecanismos de autenticação da credencial, como TOTP, e designação do usuário dono da credencial, entre outros. 


| Campo                               |       | Tipo            | Obrigatório | Descrição                                                   | Exemplo       | Novo valor padrão da credencial |
|-------------------------------------|-------|-----------------|-------------|-------------------------------------------------------------|---------------|---------------------------------|
| `identifier`                        |       | String          | Não         | Identificador da credencial. Usado para recuperar a credencial via Webservice (A2A). | identifier    | -                               |
| `user_credential_owner`              |       | String          | Não         | Usuário dono da credencial.                                 | admin         | -                               |
| `server_path`                       |       | String          | Não         | Caminho de localização do script ou arquivo onde a credencial está armazenada. | /etc/host     | -                               |
| `secret_key`                        |       | String          | Não         | A secret key (TOTP).                                         | 295B3LA1M6LRAHI2S7G1A36LMK6I4IWW | -                               |
| `criticality`                       |       | String          | Não         | O nível de criticidade. Os valores possíveis são Baixo, Médio e Alto. | High          | Medium                          |
| `additional_authentication_fields` |       | Array of objects| Não         | Lista de campos adicionais de autenticação.                  | -             | -                               |
|                             |     `name`  | String          | Não         | Nome da autenticação adicional.                              | name          | -                               |
|                  | `short_name`           | String          | Não         | Nome curto da autenticação adicional.                        | short_name1   | -                               |
|                            |     `value`  | String          | Não         | O valor a ser preenchido durante o processo de autenticação adicional. | Enable        | -                               |
| `notes`                             |       | String          | Não         | Observações gerais sobre a credencial.                       | Credential to be used only in network A. | -                               |

**Exemplo de requisição**

```json
{
    "username": "exemplo caderno 3.32",
    "hostname": "API-Testing",
    "ip": "128.0.0.1",
    "additional_settings": 
    [
        {
            "identifier": "identifer",
            "user_credential_owner": "admin",
            "server_path": "/etc/host",
            "secret_key": "295B3LA1M6LRAHI2S7G1A36LMK6I4IWW",
            "criticality": "High",
            "additional_authentication_fields": 
                {
                    "name": "name",
                    "short_name": "short_name1",
                    "value": "Enable"
                },
                {
                    "name": "name2",
                    "short_name": "short_name2",
                    "value": "value"
                }
            ],
            "notes": "Credential to be used only in network A"
        }
}

```

#### Configurações JIT



**Parâmetros do corpo da requisição**

| Campo                                      | Tipo            | Obrigatório | Descrição                                                   | Exemplo                  | Novo valor padrão da credencial |
|--------------------------------------------|-----------------|-------------|-------------------------------------------------------------|--------------------------|---------------------------------|
| `jit`                                      | Boolean         | Não         | Habilita ou desabilita as configurações Just-in-Time.       | false                    | false                           |
| `credential_creation_and_deletion`         | Boolean         | Não         | Habilita ou desabilita a criação e deleção das credenciais. | true                     | -                               |
| `enable_disable_credential`                | Boolean         | Não         | Habilita ou desabilita a credencial.                        | false                    | -                               |
| `use_own_credential_to_connect`            | Boolean         | Não         | Habilita ou desabilita o uso da própria credencial para conectar. | false              | true                            |
| `authentication_credential`               | String          | Não         | A credencial de autenticação.                               | cred2                    | -                               |
| `authentication_hostname`                 | String          | Não         | O `hostname` de autenticação.                               | gmail                    | -                               |
| `authentication_ip`                       | String          | Não         | O endereço `ip` de autenticação.                            | https://www.gmail.com    | -                               |
| `credential_creation_plugin`              | String          | Não         | O plugin de autenticação da credencial.                     | Windows RM               | -                               |
| `credential_creation_template`            | String          | Não         | O template de autenticação da credencial.                   | Create credential Windows server. | -                      |
| `credential_deletion_plugin`              | String          | Não         | O plugin de deleção da credencial.                         | Windows RM               | -                               |
| `credential_deletion_template`            | String          | Não         | O template de deleção da credencial.                       | Delete credential Windows server. | -                      |
| `credential_enable_plugin`                | String          | Não         | O plugin de habilitação da credencial.                     | Windows RM               | -                               |
| `credential_enable_template`              | String          | Não         | O template de habilitação da credencial.                   | Enable credential Windows server. | -                      |
| `credential_disable_plugin`               | String          | Não         | O plugin de disabilitação da credencial.                   | Windows RM               | -                               |
| `credential_disable_template`             | String          | Não         | O template de disabilitação da credencial.                 | Disable credential Windows server. | -                      |

**Exemplo de requisição**

```json

{
    "username": "exemplo caderno 3.32",
    "hostname": "API-Testing",
    "ip": "128.0.0.1",
    "jit_settings": 
        {
            "jit": false,
            "credential_creation_and_deletion": true,
            "enable_disable_credential": false,
            "use_own_credential_to_connect": false,
            "authentication_credential": "cred2",
            "authentication_hostname": "gmail",
            "authentication_ip": "https://www.gmail.com",
            "credential_creation_plugin": "Windows RM",
            "credential_creation_template": "Create credential Windows server",
            "credential_deletion_plugin": "Windows RM",
            "credential_deletion_template": "Delete credential Windows server",
            "credential_enable_plugin": "Windows RM",
            "credential_enable_template": "Enable credential Windows server",
            "credential_disable_plugin": "Windows RM",
            "credential_disable_template": "Disable credential Windows server"
        }
}
```
## Erros possíveis
Aqui está uma lista com códigos de erro HTTP e suas descrições:
* **1004**: Missing device's hostname (Hostname do dispositivo ausente).
* **1005**: Missing device's ip address (Endereço ip do dispositivo ausente).
* **1007**: Credential not found (Credencial não encontrada).
* **1009**: No access to credential. (Sem acesso à credencial).
