# POST | Criar credencial

Este documento apresenta como criar uma credencial no **PAM Core** via API.

## Requisitos

* Permissão de leitura e escrita no no módulo **A2A**. Acesse o documento sobre como Criar uma autorização para uma aplicação para mais informações.
* Um dispositivo criado. Acesse o documento sobre [Como configurar um dispositivo](https://docs.senhasegura.io/docs/pt/pam-devices-management) no **A2A** para mais informações.

## Requisição
Para criar uma credencial no **PAM Core**, envie uma requisição para o seguinte endpoint:

 <code><span style="color:orange"> POST</code></span> `iso/pam/credential`
 
 

## Parâmetros de requisição
<details>
<summary>Envie os parâmetros abaixo no <b>corpo</b> (<i>body</i>) da requisição</summary>
 <p>
     
| Campo| Tipo| Obrigatório| Descrição| Exemplo| Novo valor da credencial|
|----|----|----|----|----|----|
| `identifier`| String  | Não. <br><b>Nota</b>: Apesar do não preenchimento obrigatório por parte do usuário, se não preenchido, por questões de segurança, o sistema irá gerar automaticamente um `identifier` baseado em `UUID`. Esse valor pode ser atualizado em chamadas subsequentes.   |    String única definida pelo usuário para identificar a credencial.</br> | 123| -
| `username`| String  | **Sim**| Username designado à credencial.| my_user| usr
| `hostname` | String  | **Sim**| Nome do dispositivo.| localhost| -
| `ip`| String  | **Sim**| Endereço IP do dispositivo.| 127.0.0.1|-
| `content`| String  | Não| Senha designada à credencial.| #@*MyS@feP@ssword%$#|-
| `additional`| String  | Não| Informações adicionais.| DATABASE|-
| `tags`| String  | Não| Tags associadas à credencial.| api, app|
| `credential_type`  | String  | Não| Tipo de credencial. Um novo tipo é criado caso o valor passado seja único. | Domain User|Local User    |
| `domain`| String  | Não| Nome de domínio ou abreviação. Apenas domínios previamente registrados são aceitos. | senhasegura.lab|-
| `parent_password`  | Int     | Não| ID da credencial pai. | 123 | -
| `type`| String  | Não| Tipo de dispositivo. Um novo tipo é criado caso o valor passado seja único. | Server|-
| `vendor`| String  | Não| Fornecedor associado ao dispositivo. Um novo fornecedor é criado caso o valor passado seja único. | Debian|-
| `model`| String  | Não| Modelo do dispositivo. Um novo modelo é criado caso o valor passado seja único. | 10.0 Buster|-
| `site`| String  | Não| Localização do dispositivo. Um novo site é criado caso o valor passado seja único. | Default|-
| `device_domain`| String  | Não| Nome de domínio do dispositivo ou abreviação. Apenas domínios previamente registrados são aceitos. | senhasegura.lab|-
| `device_tags`| String  | Não| Tags associadas ao dispositivo.| api, app                |-
| `connectivities`| String  | Não| Conectividade do dispositivo.| SSH:22, HTTPS:443|-
| `session_remote_config` | String | Não| Expressão de login.| SSH:EXPECT:FILL           |-
| `execution_settings` | Object | Não| Configurações administrativas da credencial para definição de troca automática de senha e reconciliação da credencial| Acessar seção Configurações de execução.|-
| `session_settings` | Object | Não| Configurações para gerenciamento de privilégios de sessão para restringir aplicativos remotos, protocolos de conectividade, entre outros.|Acessar seção Configurações de sessão.|-
| `additional_settings` | Object | Não| Configurações para implementação de mecanismos de autenticação da credencial, como TOTP, e designação do usuário dono da credencial, entre outros. |Acessar seção Configurações adicional.|-
| `jit_settings` | Object | Não| Configurações para gerenciar o tempo de utilização de serviços. |Acessar seção Configurações JIT.|-
 <p>
 </details>
 
 ## Opções de gerenciamento de credenciais
 
Você pode optar por criar uma credencial  no **PAM Core** preenchendo o parâmetro `identifier` ou os parâmetros `hostname`, `ip` e `username`.

:::(Info) (Info)
Antes de continuar, saiba que os termos **existente** e **novo** no contexto deste  documento significam:
* **Existente** - um valor que já pertence a uma credencial.
* **Novo** - um valor que ainda não pertence a uma credencial.
:::
### Preencher o parâmetro `identifier` 
Para criar uma credencial, forneça `hostname` e `ip` existentes.

 <!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preencher o identifier</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <th>Condição</th>
            <th colspan="2"><center>-></center></th>
            <th>Resultado</th>
        </tr>
        <tr>
            <td><code>identifier</code> existente</td>
            <td colspan="2"></td>
            <td>A credencial será atualizada.</td>
        </tr>
        <tr>
            <td rowspan="3"><code>identifier</code> novo</td>
            <td rowspan="3">O sistema buscará a credencial encontrada usando <code>hostname</code>, <code>ip</code> e <code>username</code></td>
            <td>Credencial encontrada </td>
            <td>A credencial será atualizada.</td>
        </tr>
        <tr>
            <td>Credencial não encontrada</td>
            <td>Uma nova credencial será criada.</td>
        </tr>
    </table>
</body>
</html>


#### Exemplo de requisição - `identifier` novo
O exemplo a seguir mostra a criação de uma credencial com um `identifier` novo.

```json
{
    "username" : "johncredential",
    "hostname": "Linkedin",   
    "ip": "linkedin.com",
    "content": "vfdvds##@",
    "tags": "social",
    "identifier": "identifierjohn"
}
```
#### Resposta esperada
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
        "identifier": "identifierjohn"
    }
}

```
## Preencher os parâmetros `hostname`, `ip` e `username`
Para criar uma credencial, forneça `hostname` e `ip` existentes e envie o `identifier` vazio.

Condição| Resultado|
------|------|
`username` novo| Uma nova credencial será criada.|
`username` existente|A credencial será atualizada.|
 


#### Exemplo de requisição - `username` novo
O exemplo a seguir mostra a criação de uma credencial com um `username` novo.

```json
{
    "identifier": "",
    "username": "dleite5",
    "hostname": "gmail.com",
    "ip": "mail.google.com"
}
```

#### Resposta esperada
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
        "id": "27",
        "identifier": "018f97f9-a3c2-7271-bcf9-1b096086fea8"
    }
}
```

## Outros parâmetros da credencial

Você também pode configurar uma credencial adicionando outros parâmetros disponíveis nas abas:


* Configurações de execução.
* Configurações de sessão. 
* Configurações adicionais.  
* Configurações JIT.

### Configurações de execução
Configurações administrativas da credencial em que é possível definir a troca automática de senha e reconciliação da credencial.

#### Parâmetros de requisição
<details>
<summary>Envie os parâmetros abaixo no <b>corpo</b> (<i>body</i>) da requisição</summary>
 <p>

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
| `authentication_hostname`          | String   | Não         | O hostname de autenticação.| gmail|
| `authentication_ip`                | String   | Não         | O endereço ip de autenticação.| https://www.gmail.com      |
| `status`                           | Boolean  | Não         | Habilita ou desabilita reconciliação de credencial após falha de rotação.         | true, false                |
| `reconciliation_credential`        | String   | Não         | Credencial a ser usada no processo de reconciliação.                              | cred2                      |
| `reconciliation_hostname`          | String   | Não         | O `hostname` de reconciliação.                                                    | gmail                      |
| `reconciliation_ip`                | String   | Não         | O endereço `ip` de reconciliação.                                                 | https://www.gmail.com      |
| `reconciliation_plugin`            | String   | Não         | O plugin de execução para o processo de reconciliação da credencial.              | SSH                        |
| `reconciliation_template`          | String   | Não         | Template para o processo de reconciliação da credencial.                          | 3COM                       |
 <p>
 </details>
 
#### Exemplo de requisição

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

### Configurações de sessão
Configurações implementadas para gerenciar privilégios de sessão em que é possível restringir aplicativos remotos, protocolos de conectividade, entre outros.

#### Parâmetros de requisição
<details>
<summary>Envie os parâmetros abaixo no <b>corpo</b> (<i>body</i>) da requisição</summary>
 <p>
     
| Campo          |                     | Tipo            | Obrigatório | Descrição                                                   | Exemplo       | Novo valor da credencial |
|-------------------------------------|-----------------|-------------|-------------------------------------------------------------|---------------|---------------------------|----|
| `SSH`|| Boolean| Não| Habilita ou desabilita o protocolo SSH.| true  | false|
| `Telnet`|| Boolean| Não| Habilita ou desabilita o protocolo Telnet.| true  | false|
| `MySQL`|| Boolean| Não| Habilita ou desabilita a conexão MySQL.| true| false|
| `SQL Server`    || Boolean| Não| Habilita ou desabilita a conexão SQL Server.| true  | false|
| `HTTP`|| Boolean| Não| Habilita ou desabilita o protocolo HTTP.| true  | false|
| `HTTPS`|| Boolean| Não| Habilita ou desabilita o protocolo HTTPS.| true  | false|
| `RDP`|| Boolean| Não| Habilita ou desabilita o protocolo RDP.| true| false|
| `X11 Forward`|| Boolean| Não| Habilita ou desabilita o X11 Forward.| true  | false|
| `VNC`|| Boolean| Não| Habilita ou desabilita a conexão via VNC.  | true|false
| `restrict_access_to_remote_application`| | Boolean       | Não| Habilita ou desabilita o acesso restrito à aplicação remota.| true| false|
||`macros`| Array of objects| Não| Automação macro para RemoteApp.| -| -|
||`remote_app`| String| Não| Automação RemoteApp associada à credencial.| MySQL| -|
| `connectivity`    || String| Não| Conectividade para automação RemoteApp associada à credencial.| SSH| -|
| `use_own_credential_to_connect` || Boolean| Não         | Habilita ou desabilita o uso da própria credencial para conexão.| false | true|
| `authentication_credential`   || String| Não| A credencial de autenticação.| cred2| -|
| `authentication_hostname`   || String| Não| O hostname de autenticação.| gmail| -|
| `authentication_ip`     || String| Não| O endereço IP de autenticação.| https://www.gmail.com | - |
 </p>
 </details>

#### Exemplo de requisição

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
     
     
###  Configurações adicionais


Configurações para implementar mecanismos de autenticação da credencial, como TOTP, e designação do usuário dono da credencial, entre outros.

 #### Parâmetros de requisição
<details>
  <summary>Envie os parâmetros abaixo no <b>corpo</b> (<i>body</i>) da requisição</summary>
 <p>
 
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
| `notes`                             |       | String          | Não         | Observações gerais sobre a credencial.                       | Credential to be used only in network A. | - 
</p>
 </details>
 
 #### Exemplo de requisição

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

### Configurações JIT
Configurações JIT (Just-in-Time) são implementadas para gerenciar o tempo de utilização de serviços, especialmente em contextos onde é necessário conceder acesso temporário para a realização de ações específicas. Isso é frequentemente aplicado em situações como criação de contas, ativação de serviços ou adição de permissões temporárias para executar determinadas ações.

As credenciais JIT são empregadas para iniciar sessões em dispositivos localizados em redes segregadas. Essas credenciais são acessíveis via Web Proxy, Terminal Proxy e RDP Proxy, garantindo acesso seguro e temporário aos recursos necessários.

O senhasegura possibilita a criação e remoção de uma credencial mediante inicialização e finalização de uma sessão Proxy, bem como a ativação e desativação de uma credencial mediante inicialização e finalização de uma sessão Proxy.

#### Criar e remover uma credencial mediante inicialização e término de uma sessão Proxy

#### Parâmetros de requisição 

<details>
 <summary>Envie os parâmetros abaixo no <b>corpo</b> (<i>body</i>) da requisição</summary>
 <p>

| Campo| Tipo    | Obrigatório| Descrição| Exemplo|
|------------------------------------|---------|---------------------------------------------------------- |--------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| `jit`| Boolean | Não| Habilita ou desabilita as configurações Just-in-Time.| true | false|
| `credential_creation_and_deletion` | Boolean | Não| Cria a credencial mediante solicitação de inicialização da sessão Proxy, e remove a credencial após o término da sessão.  | true | -|
| `use_own_credential_to_connect`| Boolean | Não| Habilita ou desabilita o uso da própria credencial para conectar.| false | true|
| `authentication_credential`| String  | Sim (quando valor do parâmetro `use_own_credential_to_connect` for `false`) | A credencial de autenticação.| cred2 | -                             |
| `authentication_hostname`| String  | Sim (quando valor do parâmetro `use_own_credential_to_connect` for `false`) | O `hostname` de autenticação.| gmail| -|
| `authentication_ip`| String  | Sim (quando valor do parâmetro use_own_credential_to_connect for false) | O endereço `ip` de autenticação.| https://www.gmail.com| -|
| `credential_creation_plugin`| String  | Não| O plugin de criação da credencial. <br><b>Nota</b>: esse campo deve ser preenchido com um plugin existente e já cadastrado no senhasegura.| Windows RM | -|
| `credential_creation_template`| String  | Não| O template de criação da credencial. <br><b>Nota</b>: esse campo deve ser preenchido com um template existente e já cadastrado no senhasegura.| Create credential Windows server | - |
| `credential_deletion_plugin`| String  | Não| O plugin de remoção da credencial.  <br><b>Nota</b>: esse campo deve ser preenchido com um plugin existente e já cadastrado no senhasegura.| Windows RM | -|
| `credential_deletion_template`| String  | Não| O template de remoção da credencial. <br><b>Nota</b>: esse campo deve ser preenchido com um template existente e já cadastrado no senhasegura.</br>| Delete credential Windows server | - |
</p>
 </details>

#### Exemplo de requisição

```json
{
  "username": "API_CREDENTIAL_3",
  "hostname": "API_DEVICE_1",
  "ip": "localhost",
  "jit_settings": {
    "jit": true,
    "credential_creation_and_deletion": true,
    "enable_disable_credential": false,
    "use_own_credential_to_connect": false,
    "authentication_credential": "API_CREDENTIAL_1",
    "authentication_hostname": "API_DEVICE_1",
    "authentication_ip": "localhost",
    "credential_creation_plugin": "SSH",
    "credential_creation_template": "Linux - Create User",
    "credential_deletion_plugin": "SSH",
    "credential_deletion_template": "Linux - Remove User"
  }
}
```
#### Ativar e desativar uma credencial mediante inicialização e término de uma sessão Proxy

#### Parâmetros de requisição
<details>
<summary>Envie os parâmetros abaixo no <b>corpo</b> (<i>body</i>) da requisição</summary>
 <p>

| Campo| Tipo| Obrigatório| Descrição| Exemplo|
|-------------------------------------|---------|-----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| `jit`| Boolean | Não| Habilita ou desabilita as configurações Just-in-Time.| true | false|
| `enable_disable_credential`| Boolean | Não| Habilita a credencial mediante solicitação de inicialização da sessão Proxy, e desativa a credencial após o término da sessão. | true |
| `use_own_credential_to_connect`| Boolean | Não| Habilita ou desabilita o uso da própria credencial para conectar.| true | 
| `authentication_credential`| String  | Sim (quando valor do parâmetro `use_own_credential_to_connect` for `false`) | A credencial de autenticação.| API_CREDENTIAL_1| 
| `authentication_hostname`| String  | Sim (quando valor do parâmetro `use_own_credential_to_connect` for `false`) | O `hostname` de autenticação.| API_DEVICE_1 |
| `authentication_ip`| String  | Sim (quando valor do parâmetro `use_own_credential_to_connect` for `false`) | O endereço `ip` de autenticação.|localhost | 
| `credential_enable_plugin`| String  | Não| O plugin de habilitação da credencial. <br><b>Nota:<b> esse campo deve ser preenchido com um plugin existente e já cadastrado no senhasegura.<br>| LDAP |
| `credential_enable_template`| String  | Não| O template de habilitação da credencial. <br><b>Nota:<b> esse campo deve ser preenchido com um template existente e já cadastrado no senhasegura.<br>| AD - Activate User | 
| `credential_disable_plugin`| String  | Não| O plugin de desativação da credencial. <br><b>Nota:<b> esse campo deve ser preenchido com um plugin existente e já cadastrado no senhasegura.<br>| LDAP |
| `credential_disable_template`| String  | Não| O template de desativação da credencial. <br><b>Nota:<b> esse campo deve ser preenchido com um template existente e já cadastrado no senhasegura.<br> | AD - Deactivate User |
</p>
 </details>
     
  #### Exemplo de requisição

```json
{
  "username": "API_CREDENTIAL_3",
  "hostname": "API_DEVICE_1",
  "ip": "localhost",
  "jit_settings": {
    "jit": true,
    "enable_disable_credential": true,
    "use_own_credential_to_connect": true,
    "authentication_credential": "API_CREDENTIAL_1",
    "authentication_hostname": "API_DEVICE_1",
    "authentication_ip": "localhost",
    "credential_enable_plugin": "LDAP",
    "credential_enable_template": "AD - Activate User",
    "credential_disable_plugin": "LDAP",
    "credential_disable_template": "AD - Deactivate User"
  }
}
```
     
## Erros
     
<details>
    <summary><b><span style="color:red">400</span> - Bad Request</b></summary>

***

<b><b>Mensagem: "1004: The device's hostname was not informed"</b></b>
<p><b>Possível causa</b>: <code>hostname</code> do dispositivo ausente.<br></p>
<b>Solução</b>: Informe o <code>hostname</code> do dispositivo e envie a requisição novamente.
  

* * *
<b>Mensagem: "1005: The device's IP was not informed"</b>
<p><b>Possível causa</b>: <code>ip</code> do dispositivo ausente.<br></p>
<b>Solução</b>: Informe o <code>ip</code> do dispositivo e envie a requisição novamente.
  

* * *
  <b>Mensagem: "1011: Device not found"</b>
 <p><b>Possível causa</b>: Dispositivo não encontrado.<br></p>
  <b>Solução</b>: Informe um dispositivo existente e envie a requisição novamente.

  ***
<p><b>Mensagem: "1042: Invalid username"</b></p>
    
<p><b>Possível causa</b>: <code>username</code> inválido.<br></p>
    
<b>Solução</b>: Insira o parâmetro <code>username</code> e envie a requisição novamente. Não é necessário preencher com um valor, mas é necessário enviar o parâmetro.
    
 ***
<b>Mensagem:  1047</b>
<p><b>Possível causa</b>: Um template de plugin não foi informado.<br></p>
    
<b>Solução</b>: Informe um valor para o template de plugin. Esse template deve ser existente e estar cadastrado no senhasegura.

***
  <b>Código de erro - 1052</b>
<p><b>Possível causa</b>: Uma credencial com o mesmo <code>hostname</code> e <code>dispositivo</code> foi encontrada.</p>

 <b>Solução</b>: Altere os valores do <code>hostname</code> e <code>dispositivo</code> e envie a requisição novamente.
  
 *** 
    
<br><b>Possível causa</b>: Sua autorização não possui acesso à credencial. 
     
<b>Solução</b>: Revise a autorização para adicionar a permissão de consulta à credencial desejada.


</details>


* * *



<details>
    <summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>
    <p><b>Possível causa</b>: O erro está no servidor senhasegura.<br>
        
<b>Solução</b>: Contate o time de suporte para mais informações.</p>

* * *   
<p><b>Possível causa</b>:Um valor inexistente para usuário foi enviado no parâmetro <code>user_credential_owner</code>.<br>
        
<b>Solução</b>: Informe um usuário existente.</p>
    
</details>
     
* * *

<details>
    <summary><b>Client authentication failed</b></summary>
    <p><b>Possível causa</b>: Falha na autenticação da sua aplicação com o servidor senhasegura.<br>
        
   <b>Solução</b>: Corrija os parâmetros <b>Client ID</b> e <b>Client secret</b> e solicite um novo token de acesso.</p>
</details>
     
* * *     
<details>
    <summary><b>No route matched with those values</b></summary>
    
   <p><b>Possível causa</b>: Ausência do header de autorização na requisição de API.<br>
        
  <b>Solução</b>: Solicite um novo token de acesso.</p>
</details>
 
* * *
<details>
    <summary><b> Request timed out</b></summary>
    <p><b>Possível causa</b>: O tempo da requisição se esgotou. <br>
        
<b>Solução</b>: Verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
</details>     
     
     