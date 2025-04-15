# POST | Criar credencial

Crie uma credencial no **PAM Core**.

## Pré-requisitos

* Autorização com permissão de **acesso** e de **leitura e escrita** ao **PAM Core** concedidas pelo administrador no **A2A**.
Saiba mais em [Como gerenciar autorizações no A2A](/v4/docs/pt/how-to-manage-authorizations-in-a2a).
* Dispositivo criado no **PAM Core**.
Saiba mais em [POST | Criar dispositivo](/v4/docs/pt/api-post-create-device).

## Requisição

 <code><span style="color:orange"> POST</code></span> `api/pam/credential`
 

## Parâmetros de requisição

Envie os parâmetros abaixo no <b>body</b> da requisição.


* </summary><code>identifier</code> - <b>string</b> - String única definida pelo usuário ou pelo Segura para identificar a credencial.</summary>
<b>Nota</b>: embora o preenchimento do campo não seja obrigatório pelo usuário, por motivos de segurança, o sistema gerará automaticamente um identificador baseado em <code>UUID</code> caso ele seja deixado em branco. Este valor pode ser atualizado em chamadas futuras.
<b>Padrão</b>: [a-zA-Z0-9-_.]
<b>Exemplo</b>: `018fe9a6_541d_7380_99b6_56051b71a475`

:::(error) (Alerta!)
Utilize apenas letras (a-z, A-Z), números (0-9), e os caracteres underscore (_), hífen (-) e ponto final (.) na criação do identifier. O uso de outros caracteres especiais resultará em erro. 
:::

<br>
* <summary><code>username</code> - <b><b>string</b></b> - <span style="color:red"> obrigatório</span style="color:red"> - Nome do usuário designado à credencial.</summary>

<b>Nota</b>: o parâmetro `username` deve ser enviado na criação da credencial, mesmo que seu valor seja uma string vazia (`''`). Nesse caso, ele será automaticamente criado com o valor padrão `usr`.


<br>
* <summary><code>hostname</code> - <b>string</b> - <span style="color:red"> obrigatório</span style="color:red"> - Nome do host do dispositivo associado à credencial.</summary>


<br>
* <summary><code>ip</code> - <b>string</b> - <span style="color:red"> obrigatório</span style="color:red"> - Endereço IP do dispositivo associado à credencial.</summary>


<br>
* <summary><code>content</code> - <b>string</b> -  Senha designada à credencial.</summary>
<b>Valor padrão da nova credencial</b>: <code>-</code>

<br>
* <summary><code>additional</code> - <b>string</b> - Informações adicionais da credencial.</summary>
<b>Valor padrão da nova credencial</b>: <code>-</code>

<br>
* <summary><code>tags</code> - <b>string</b> - Palavras-chave associadas à credencial.</summary>
<b>Valor padrão da nova credencial</b>: <code>-</code>


<br>
* <summary><code>credential_type</code> - <b>string</b> - Tipo de credencial.</summary>
<b>Valor padrão da nova credencial</b>: <code>Local User</code>

<br>
* <summary><code>domain</code> - <b>string</b> - Nome de domínio ou abreviação.</summary>
<b>Valor padrão da nova credencial</b>: <code>-</code>

<br>
* <summary><code>parent_password</code> - <b>int</b> - ID da credencial pai.</summary>
<b>Valor padrão da nova credencial</b>: <code>-</code>

<br>
* <summary><code>type</code>- <b>string</b> - Tipo de dispositivo.</summary>
<b>Nota</b>: um novo tipo é criado caso o valor seja único.
<b>Valor padrão da nova credencial</b>: <code>-</code>
  
  <br>
* <summary><code>vendor</code> - <b>string</b> - Fabricante do dispositivo.</summary>
<b>Nota</b>: um novo fabricante é criado caso o valor seja único.
<b>Valor padrão da nova credencial</b>: <code>-</code>

<br>
* <summary><code>model</code> - <b>string</b> - Modelo do dispositivo.</summary>
 <b>Nota</b>: um novo modelo é criado caso o valor seja único.
<b>Valor padrão da nova credencial</b>: <code>-</code>

<br>
* <summary><code>site</code> - <b>string</b> - Localização do dispositivo.</summary>
<b>Nota</b>: um novo site é criado caso o valor seja único.
<b>Valor padrão da nova credencial</b>: <code>-</code>

<br>
* <summary><code>device_domain</code> - <b>string</b> - Nome de domínio do dispositivo ou abreviação.</summary>
<b>Nota</b>: apenas domínios previamente registrados são aceitos.
<b>Valor padrão da nova credencial</b>: <code>-</code>

:::(Warning) (Atenção)
Ao listar mais de um `device_domain`, adicione vírgulas sem espaço entre eles, conforme o exemplo a seguir:
`testlab.com,demo.lab.com`
:::

<br>
* <summary><code>device_tags</code> - <b>string</b> - Palavras-chave associadas ao dispositivo.</summary>
<b>Valor padrão da nova credencial</b>: <code>-</code>

<br>
* <summary><code>connectivities</code> - <b>string</b> - Conectividade do dispositivo.</summary>
<b>Valor padrão da nova credencial</b>: <code>-</code>

<br>
* <summary><code>session_remote_config</code> - <b>string</b> - Expressão de login.</summary>
<b>Valor padrão da nova credencial</b>: <code>-</code>


<br>
* <summary><code>execution_settings</code> - <b>object</b> - Configurações administrativas da credencial para definição de troca automática de senha e reconciliação da credencial.</summary>
<b>Exemplo</b>: acessar seção <a href="/v4/docs/pt/api-post-create-credential#configurações-de-execução">Configurações de execução</a>.
<b>Valor padrão da nova credencial</b>: <code>-</code></p>

<br>
* <summary><code>session_settings</code>  - <b>object</b> - Configurações para gerenciamento de privilégios de sessão para aplicativos remotos, protocolos de conectividade, entre outros.</summary>
<b>Exemplo</b>: acessar seção <a href="/v4/docs/pt/api-post-create-credential#configurações-de-sessão">Configurações de sessão</a>.
<b>Valor padrão da nova credencial</b>: <code>-</code></p>
 
 <br>
* <summary><code>additional_settings</code> - <b>object</b> - Configurações para implementação de mecanismos de autenticação da credencial, como TOTP, e designação do usuário dono da credencial, entre outros.</summary>
<b>Exemplo</b>: acessar seção <a href="/v4/docs/pt/api-post-create-credential#configurações-adicionais">Configurações adicionais</a>.
<b>Valor padrão da nova credencial</b>: <code>-</code>

<br>
* <summary><code>jit_settings</code>  - <b>object</b> - Configurações para gerenciar o tempo de utilização de serviços.</summary>
<b>Exemplo</b>: acessar seção <a href="/v4/docs/pt/api-post-create-credential#configurações-jit">Configurações JIT</a>.
<b>Valor padrão da nova credencial</b>: <code>-</code>
       
<br>
 
 ## Opções de criação de credencial
 
Você pode optar por uma das seguintes opções para criar uma credencial  no **PAM Core**:
* Enviando um valor para o parâmetro `identifier`.
* Enviando um valor para o parâmetro `username`.

Em ambos os casos, é necessário fornecer valores existentes para os parâmetros `hostname` e `ip` do dispositivo associados à credencial.

:::(Info) (Info)
Antes de continuar, saiba que os termos **existente** e **novo**, no contexto deste  documento, significam:
* **Existente** - um valor que já pertence a uma credencial.
* **Novo** - um valor que ainda não pertence a uma credencial.
:::
### Enviar o parâmetro `identifier` 
* Envie `hostname` e `ip` existentes.
* Envie um `username` novo.
* Envie um `identifier` novo.


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
            <td>A credencial será atualizada com os demais valores enviados.</td>
        </tr>
        <tr>
            <td rowspan="3"><code><b>identifier</code> novo</b></td>
            <td rowspan="3">O sistema buscará a credencial encontrada pelos valores do <code>hostname</code>, <code>ip</code> e <code>username</code></td>
            <td>Credencial encontrada </td>
            <td>A credencial será atualizada com os demais valores enviados.</td>
        </tr>
        <tr>
            <td>Credencial não encontrada</td>
            <td><b>Uma nova credencial será criada</b>.</td>
        </tr>
    </table>
</body>



#### Exemplo de requisição - `identifier` novo
O exemplo a seguir mostra a criação de uma credencial com um `identifier` novo.

<code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/credential`

```json
{
    "identifier": "dyaihdppaj78a547",
    "username" : "username",
    "hostname": "w2016",   
    "ip": "10.66.33.15",
    "content": "blfjahbnaihdaa",
    "tags": "social"
}
```
#### Resposta 

 ```json
HTTP/1.1 201 CREATED
```
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
    "tenant": "Segura",
    "credential": {
        "id": "152",
        "identifier": "dyaihdppaj78a547"
    }
}

```
## Enviar o parâmetro `username`

* Envie `hostname` e `ip` existentes.
* Envie um `username` novo. 
* Não envie um valor para o `identifier`.

Condição| Resultado|
------|------|
`username` **novo**| **Uma nova credencial será criada**.|
`username` existente|A credencial será atualizada com os demais valores enviados.|
 


#### Exemplo de requisição - `username` novo
O exemplo a seguir mostra a criação de uma credencial com um `username` novo.

<code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/credential`
```json
{
    "username" : "newusername",
    "hostname": "w2016",   
    "ip": "10.66.33.15",
    "content": "blfjahbnaihdaa",
    "identifier": "",
    "tags": "social"
}
```

#### Resposta 

```json
HTTP/1.1 201 CREATED
```

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
    "tenant": "Segura",
    "credential": {
        "id": "149",
        "identifier": "018fea0c-6fe6-726c-87fd-8e595037e8a2"
    }
}
```

## Outros parâmetros da credencial

Você também pode configurar uma credencial adicionando outros parâmetros. São eles:


* [Configurações de execução](/v4/docs/pt/api-post-create-credential#configurações-de-execução).
* [Configurações de sessão](/v4/docs/pt/api-post-create-credential#configurações-de-sessão). 
* [Configurações adicionais](/v4/docs/pt/api-post-create-credential#configurações-adicionais).  
* [Configurações JIT](/v4/docs/pt/api-post-create-credential#configurações-jit).

### Configurações de execução
Configurações administrativas da credencial em que é possível definir a troca automática de senha e [reconciliação da credencial](/v4/docs/pt/pam-about-credential-reconciliation).

#### Parâmetros de requisição

Envie os parâmetros abaixo no <b>body</b> da requisição.


<summary>&#8226; <code>execution_settings</code> - <b>object</b> - Dados das configurações de execução.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>parent_credential</code> - <b>string</b> - Credencial pai selecionada para a credencial editada.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>parent_hostname</code> - <b>string</b> - Nome do host da credencial pai selecionada.</summary>


<br>    
 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>parent_ip</code> - <b>string</b> - Endereço IP do dispositivo da credencial pai selecionada.</summary>


<br>  
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>automatic_change</code> - <b>boolean</b> - Habilita ou desabilita mudanças automáticas.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Valor padrão da nova credencial</b>: <code>false</code>

<br>  
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>agent_based_password_change</code> - <b>boolean</b> - Habilita ou desabilita mudança de senha agent-based.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Valor padrão da nova credencial</b>: <code>false</code>    


<br> 
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>change_plugin</code> - <b>string</b> - Plugin de mudança para ser usado ao rotacionar a credencial.</summary>


<br> 
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>change_template</code> - <b>string</b> - Template de mudança para ser usado ao rotacionar a credencial.

<br> 
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>use_own_credential_to_connect</code> - <b>boolean</b> - Habilita ou desabilita o uso da própria credencial para se conectar ao dispositivo e mudar a credencial.</summary>

&nbsp;&emsp;&emsp;&nbsp;<b>Valor padrão da nova credencial</b>: <code>false</code>

<br> 
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_credential</code> - <b>string</b> - <span style="color:red"> obrigatório (quando valor do parâmetro <code>use_own_credential_to_connect</code> for <code>false</code>)</span style="color:red"> Credencial usada para autenticação durante o processo de rotação da credencial.</summary>

<br>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_hostname</code> - <b>string</b> - <span style="color:red"> obrigatório (quando valor do parâmetro <code>use_own_credential_to_connect</code> for <code>false</code>)</span style="color:red"> - Hostname do dispositivo de autenticação.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_ip</code> - <b>string</b> - <span style="color:red"> obrigatório (quando valor do parâmetro <code>use_own_credential_to_connect</code> for <code>false</code>)</span style="color:red"> - Endereço IP do dispositivo de autenticação.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>status</code> - <b>boolean</b> - Habilita ou desabilita reconciliação de credencial após falha de rotação.</summary>


&nbsp;&emsp;&emsp;&nbsp;<b>Valor padrão da nova credencial</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>reconciliation_credential</code> - <b>string</b> - Credencial a ser usada no processo de reconciliação.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>reconciliation_hostname</code> - <b>string</b> - Nome do host do dispositivo de reconciliação da credencial.

<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>reconciliation_ip</code> - <b>string</b> - Endereço IP do dispositivo de reconciliação da credencial.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>reconciliation_plugin</code> - <b>string</b> - Plugin de execução para o processo de reconciliação da credencial.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>reconciliation_template</code> - <b>string</b> - Template para o processo de reconciliação da credencial.</summary>

 
#### Exemplo de requisição
<code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/credential`

```json
{
    "username": "usernametest",
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
Envie os parâmetros abaixo no <b>body</b> da requisição.


<summary>&#8226; <code>session_settings</code> - <b>object</b> - Dados das configurações de sessão.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>SSH</code> - <b>boolean</b> - Habilita ou desabilita o protocolo SSH.</summary>

&nbsp;&emsp;&emsp;&nbsp;<b>Valor padrão da nova credencial</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>Telnet</code> - <b>boolean</b> - Habilita ou desabilita o protocolo Telnet.</summary>

&nbsp;&emsp;&emsp;&nbsp;<b>Valor padrão da nova credencial</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>MySQL</code> - <b>boolean</b> - Habilita ou desabilita a conexão MySQL.</summary>

&nbsp;&emsp;&emsp;&nbsp;<b>Valor padrão da nova credencial</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>SQL Server</code> - <b>boolean</b> - Habilita ou desabilita a conexão SQL Server.</summary>
    
&nbsp;&emsp;&emsp;&nbsp;<b>Valor padrão da nova credencial</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>HTTP</code> - <b>boolean</b> - Habilita ou desabilita o protocolo HTTP.</summary>
  
&nbsp;&emsp;&emsp;&nbsp;<b>Valor padrão da nova credencial</b>: <code>false</code>
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>HTTPS</code> - <b>boolean</b> - Habilita ou desabilita a conexão HTTPS.</summary>

&nbsp;&emsp;&emsp;&nbsp;<b>Valor padrão da nova credencial</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>RDP</code> - <b>boolean</b> - Habilita ou desabilita a conexão RDP.</summary>

&nbsp;&emsp;&emsp;&nbsp;<b>Valor padrão da nova credencial</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>X11 Forward</code> - <b>boolean</b> - Habilita ou desabilita o X11 Forward.</summary>
   
&nbsp;&emsp;&emsp;&nbsp;<b>Valor padrão da nova credencial</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>VNC</code> - <b>boolean</b> - Habilita ou desabilita a conexão via VNC.</summary>

&nbsp;&emsp;&emsp;&nbsp;<b>Valor padrão da nova credencial</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>restrict_access_to_remote_application</code> - <b>boolean</b> - Habilita ou desabilita o acesso restrito a sessões proxy RemoteApp.</summary>
   
&nbsp;&emsp;&emsp;&nbsp;<b>Valor padrão da nova credencial</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>macros</code> - <b>array of objects</b>  - Lista dos dados da automação macro contendo <code>remote_app</code> e  <code>connectivity</code>.</summary>

<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;→<code>remote_app</code> - <b>string</b> - Automação RemoteApp associada à credencial.</summary>

<br>
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;→<code>connectivity</code> - <b>string</b> - Conectividade para automação RemoteApp associada à credencial.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>use_own_credential_to_connect</code> - <b>boolean</b> - Habilita ou desabilita o uso da própria credencial para conexão.</summary>
    
&nbsp;&emsp;&emsp;&nbsp;<b>Valor padrão da nova credencial</b>: <code>false</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_credential</code> - <b>string</b> - <span style="color:red"> obrigatório (quando valor do parâmetro <code>use_own_credential_to_connect</code> for <code>false</code>)</span style="color:red"> - A credencial de autenticação.
.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_hostname</code> - <b>string</b> - <span style="color:red"> obrigatório (quando valor do parâmetro <code>use_own_credential_to_connect</code> for <code>false</code>)</span style="color:red"> - O nome do host do dispositivo de autenticação.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_ip</code> - <b>string</b> - <span style="color:red"> obrigatório (quando valor do parâmetro <code>use_own_credential_to_connect</code> for <code>false</code>)</span style="color:red"> - O endereço IP do dispositivo de autenticação.</summary>


 
#### Exemplo de requisição

<code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/credential`
```json
{
    "username": "usernametest",
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

Envie os parâmetros abaixo no <b>body</b> da requisição.


<summary>&#8226; <code>additional_settings</code> - <b>array of objects</b>  - Lista com as configurações adicionais da credencial</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>identifier</code> - <b>string</b> - Identificador da credencial. Usado para recuperar a credencial via Webservice (<b>A2A</b>).</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>user_credential_owner</code> - <b>string</b> - Usuário dono da credencial.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>server_path</code> - <b>string</b> - Caminho de localização do script ou arquivo onde a credencial está armazenada.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>secret_key</code> - <b>string</b> - A secret key (TOTP) associada à credencial.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>criticality</code> - <b>string</b> - O nível de criticidade da credencial. Os valores possíveis são <code>low</code>, <code>medium</code> e <code>high</code>.</summary>
    
&nbsp;&emsp;&emsp;&nbsp;<b>Valor padrão da nova credencial</b>: <code>medium</code>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>additional_authentication_fields</code> - <b>array of objects</b>  - Campos adicionais de autenticação. Dados da automação macro contendo <code>name</code>, <code>short_name</code> e  <code>value</code>.</summary>

<br>
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;→<code>name</code> - <b>string</b> - Nome da autenticação adicional.</summary>

<br>
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;→<code>short_name</code> - <b>string</b> - Nome curto ou abreviação da autenticação adicional.</summary>
    
<br>
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;→<code>value</code> - <b>string</b> - O valor a ser preenchido durante o processo de autenticação adicional.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>notes</code> - <b>string</b> - Observações gerais sobre a credencial</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Exemplo</b>: <code>Credential to be used only in network A.	</code>

 
 #### Exemplo de requisição

<code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/credential`

```json
{
    "username": "usernametest",
    "hostname": "API-Testing",
    "ip": "128.0.0.1",
    "additional_settings": [
        {
            "identifier": "identifer",
            "user_credential_owner": "admin",
            "server_path": "/etc/host",
            "secret_key": "295B3LA1M6LRAHI2S7G1A36LMK6I4IWW",
            "criticality": "High",
            "additional_authentication_fields": [
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
            ]
        }
    ],
    "notes": "Credential to be used only in network A"
}

```

### Configurações JIT
Configurações JIT (Just-in-Time) são implementadas para gerenciar o tempo de utilização de serviços, especialmente em contextos onde é necessário conceder acesso temporário para a realização de ações específicas. Isso é frequentemente aplicado em situações como criação de contas, ativação de serviços ou adição de permissões temporárias para executar determinadas ações.

As credenciais JIT são empregadas para iniciar sessões em dispositivos localizados em redes segregadas. Essas credenciais são acessíveis via Web Proxy, Terminal Proxy e RDP Proxy, garantindo acesso seguro e temporário aos recursos necessários.

Você pode implementar as configurações JIT ao criar uma credencial para os seguintes cenários:
* Criação e remoção de uma credencial mediante inicialização e finalização de uma sessão Proxy.
*  Ativação e desativação de uma credencial mediante inicialização e finalização de uma sessão Proxy.

#### Criar e remover uma credencial mediante inicialização e finalização de uma sessão Proxy

#### Parâmetros de requisição 

Envie os parâmetros abaixo no <b>body</b> da requisição.
    
    

<summary>&#8226; <code>jit_settings</code> - <b>object</b>  - Dados das configurações Just-in-Time para criação e remoção de credencial mediante inicialização e finalização de uma sessão Proxy.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>jit</code> - <b>boolean</b> - Habilita ou desabilita as configurações Just-in-Time.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_creation_and_deletion</code> - <b>boolean</b> - Indica a criação da credencial mediante solicitação de inicialização da sessão Proxy, e remoção da credencial após o término da sessão.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>use_own_credential_to_connect</code> - <b>boolean</b> - Habilita ou desabilita o uso da própria credencial para conectar.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_credential</code> - <b>boolean</b> - <span style="color:red"> obrigatório (quando valor do parâmetro <code>use_own_credential_to_connect</code> for <code>false</code>)</span style="color:red"> - A credencial de autenticação.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_hostname</code> - <b>boolean</b> - <span style="color:red"> obrigatório (quando valor do parâmetro <code>use_own_credential_to_connect</code> for <code>false</code>)</span style="color:red"> - O nome do host do dispositivo de autenticação.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_ip</code> - <b>boolean</b> - <span style="color:red"> obrigatório (quando valor do parâmetro <code>use_own_credential_to_connect</code> for <code>false</code>)</span style="color:red"> - O endereço IP do dispositivo de autenticação.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_creation_plugin</code> - <b>string</b> - O plugin de criação da credencial.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: deve ser um plugin existente e já cadastrado no Segura.
 

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_creation_template</code> - <b>string</b> - O template de criação da credencial.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: deve ser um template existente e já cadastrado no Segura.
    

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_deletion_plugin</code> - <b>string</b> - O plugin de remoção da credencial.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: deve ser um plugin existente e já cadastrado no Segura.
    

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_deletion_template</code> - <b>string</b> - O template de remoção da credencial.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: deve ser um template existente e já cadastrado no Segura.
   
<br>

#### Exemplo de requisição

<code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/credential`

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
#### Ativar e desativar uma credencial mediante inicialização e finalização de uma sessão Proxy

#### Parâmetros de requisição
Envie os parâmetros abaixo no <b>body</b> da requisição.

<summary>&#8226; <code>jit_settings</code> - <b>object</b>  - Dados das configurações Just-in-Time para ativação e desativação de credencial mediante inicialização e finalização de uma sessão Proxy.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>jit</code> - <b>boolean</b> - Habilita ou desabilita as configurações Just-in-Time.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>enable_disable_credential</code> - <b>boolean</b> - Habilita a credencial mediante solicitação de inicialização da sessão Proxy, e desativa a credencial após o término da sessão.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>use_own_credential_to_connect</code> - <b>boolean</b> - Habilita ou desabilita o uso da própria credencial para conectar.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_credential</code> - <b>string</b> - <span style="color:red"> obrigatório (quando valor do parâmetro <code>use_own_credential_to_connect</code> for <code>false </code>)</span style="color:red"> - A credencial de autenticação.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_hostname</code> - <b>string</b> - <span style="color:red"> obrigatório (quando valor do parâmetro <code>use_own_credential_to_connect</code> for <code>false </code>)</span style="color:red"> - O nome do host do dispositivo de autenticação.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>authentication_ip</code> - <b>string</b> - <span style="color:red"> obrigatório (quando valor do parâmetro <code>use_own_credential_to_connect</code> for <code>false </code>)</span style="color:red"> - O endereço IP do dispositivo de autenticação.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_enable_plugin</code> - <b>string</b> - O plugin de habilitação da credencial.</summary>
 &nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: deve ser um plugin existente e já cadastrado no Segura.
   

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_enable_template</code> - <b>string</b> - O template de habilitação da credencial.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: deve ser um template existente e já cadastrado no Segura.
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_disable_plugin</code> - <b>string</b> - O plugin de desativação da credencial.</summary>
 &nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: deve ser um plugin existente e já cadastrado no Segura.
    
    

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential_disable_template</code> - <b>string</b> - O template de desativação da credencial.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: deve ser um template existente e já cadastrado no Segura.
    

 #### Exemplo de requisição

<code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/credential`
    
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
<p><b>Possível causa</b>: o parâmetro obrigatório <code>hostname</code> do dispositivo não foi informado.<br></p>
<b>Solução</b>: informe o <code>hostname</code> do dispositivo e envie a requisição novamente.
  

* * *
<b>Mensagem: "1005: The device's IP was not informed"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>ip</code> do dispositivo não foi informado.<br></p>
<b>Solução</b>: informe o <code>ip</code> do dispositivo e envie a requisição novamente.
  

* * *
  <b>Mensagem: "1011: Device not found"</b>
 <p><b>Possível causa</b>: o dispositivo não foi encontrado.<br></p>
  <b>Solução</b>: informe um dispositivo existente e envie a requisição novamente.

  ***
    
 <p><b>Mensagem: "1029: It is not possible to enter a domain that has not been previously registered"</b></p>
    
<p><b>Possível causa</b>: o <code>device_domain</code> não existe ou a formatação enviada está incorreta.<br></p>
    
<b>Solução</b>: Envie um valor existente para o <code>device_domain</code> ou, caso esteja enviando mais de um <code>device_domain</code>, lembre-se de não adicionar espaço entre as vírgulas. Exemplo: <code>qakm.lab.mt4.dev,my_device_domain</code>
    
 ***
    
<b>Mensagem: "1039: Without PAM Configuration Access permission"</b>  
<br><b>Possível causa</b>: sua autorização não possui permissão de criação de credencial. 
     
<b>Solução</b>: solicite ao administrador que revise sua permissão de <b>leitura e escrita</b> aos recursos do <b>PAM Core</b> no <b>A2A</b>.

* * *

<p><b>Mensagem: "1042: Invalid username"</b></p>
    
<p><b>Possível causa</b>: o parâmetro obrigatório  <code>username</code> não foi enviado.<br></p>
    
<b>Solução</b>: insira o parâmetro <code>username</code> e envie a requisição novamente. Não é necessário preencher com um valor, mas é necessário enviar o parâmetro.
    
 ***
<p><b>Mensagem:  "1046: Plugin not informed"</b></p>
 <p><b>Possível causa</b>: o plugin não foi informado.<br></p>
    
<b>Solução</b>: informe um valor para o plugin de criação, remoção, ativação ou desativação da credencial. Esse plugin deve ser existente e estar cadastrado no Segura.

***
    
<p><b>Mensagem:  "1047: Template plugin not informed"</b></p>
 <p><b>Possível causa</b>: o template não foi informado.<br></p>
    
<b>Solução</b>: informe um valor para o template de criação, remoção, ativação ou desativação da credencial. Esse template deve ser existente e estar cadastrado no Segura.

***
 <p><b>Mensagem:  "1053: O identificador só pode conter letras, números,  \ "_ \ “ e \”- \” . “</b></p>
 <p><b>Possível causa</b>: algum caractere proibido foi utilizado na atualização do <code>identifier</code>.<br></p>
    
<b>Solução</b>: utilize apenas letras, números  e os caracteres listados.

***
</details>

    

<details>
    <summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>
    
***
<p><b>Possível causa</b>: o erro está no servidor Segura.<br>
        
<b>Solução</b>: contate o time de suporte para mais informações.</p>

* * *    
</details>
     
<details>
<summary><b>Client authentication failed</b></summary>

*** 
   
<b>Mensagem: "Client authentication failed."</b>
    
<p><b>Possível causa</b>: falha na autenticação da sua aplicação com o servidor Segura.<br>
        
<b>Solução</b>: verifique os parâmetros de autenticação como <code>Access Token URL</code>, <code>Client ID</code> e <code>Client secret</code> e solicite um novo token de acesso.</p>
 
* * *  
</details>
    

     
<details>
<summary><b>Invalid signature</b></summary>

*** 
    
<b>Mensagem: "Invalid signature"</b>
    
<p><b>Possível causa</b>: falha no reconhecimento da URL da aplicação cliente.
        
<b>Solução</b>: verifique a URL da aplicação cliente e envie a requisição novamente.</p>

* * *
</details>
     


<details>
    <summary><b>No route matched with those values</b></summary>
    
***   
    
<b>Mensagem: "No route matched with those values."</b>
   <p><b>Possível causa</b>: ausência do header de autorização na requisição de API.<br>
        
  <b>Solução</b>: solicite um novo token de acesso.</p>
* * *
</details>
 

<details>
    <summary><b> Request timed out</b></summary>
    
***
    
<b>Mensagem: "Request timed out."</b>
<p><b>Possível causa</b>: o tempo da requisição se esgotou. <br>
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor Segura.</p>
</details>
     