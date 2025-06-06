# GET | Listar todas as sessões remotas

Acesse informações sobre todas as sessões proxy registradas no **PAM Core**.

## Requisitos

* Autorização com permissão de **acesso** ao **PAM Core** concedida pelo administrador no **A2A**.
 Acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-33/docs/pt/a2a-how-to-create-an-authorization-for-an-application) para mais informações.
 
 * Sessões remotas iniciadas no **PAM Core**.
 
 ## Requisição

 <code><span style="color:green"> GET</code></span> `api/pam/session/remotesessions`

 ## Exemplo de requisição
 <code><span style="color:green"> GET</code></span> `{{url}}/api/pam/session/remotesessions`

## Resposta 

:::(Warning) (Atenção)
Dependendo da quantidade de sessões registradas no ambiente, a lista retornada pode ser muito longa e o tempo de resposta pode demorar alguns minutos.

:::

``` json
HTTP/1.1 200 OK
```

``` json
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
    "tenant": "senhasegura",
    "remote_sessions": [
        {
            "id": "3",
            "user": "Admin",
            "origin_ip": "172.16.20.125",
            "credential": "usrdomadm01",
            "device": "10.66.33.15:3389",
            "protocol": "rdp",
            "proxy": "Web Proxy",
            "session_id": "e7acacb6aedbab70073456da5744166939b77527",
            "start": "2024-05-06 16:05:07",
            "end": "2024-05-06 16:07:59",
            "time": "00:02:52",
            "prevent_purge": "No",
            "request": null,
            "ITSM": null
        },
        {
            "id": "6",
            "user": "Admin",
            "origin_ip": "172.16.20.125",
            "credential": "usrsudonopass",
            "device": "10.66.33.17:22",
            "protocol": "ssh",
            "proxy": "Web Proxy",
            "session_id": "c819cbc5f2fad2065f1d132a22d0e2dfacccb228",
            "start": "2024-05-06 16:11:17",
            "end": "2024-05-06 16:11:30",
            "time": "00:00:13",
            "prevent_purge": "No",
            "request": null,
            "ITSM": null
        }
    ]
 }
```

### Campos do corpo da resposta


<summary><code>remote_sessions</code> - <b>array de objetos</b> - Dados das sessões remotas listadas.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>id</code> - <b><b>int</b></b> - Código único de identificação sessão remota.</summary>&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: esse valor é automaticamente atribuído pelo senhasegura no momento de criação da sessão e não deve ser confundido com o parâmetro <code>session_id</code>.


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>user</code> - <b><b>string</b></b> - Nome de usuário utilizado para autenticação.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>origin_ip</code> - <b><b>string</b></b> - Endereço IP do dispositivo de origem da sessão.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>credential</code> - <b>string</b> - Credencial usada para realizar a sessão.</summary>
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>device </code> - <b>string</b> - Nome do host ou endereço IP do dispositivo de destino .</summary>
  
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>protocol</code> - <b>string</b> - Protocolo de rede (SSH, RDP, HTTPS, entre outros.).</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>proxy</code> - <b>string</b> - Tipo de sessão proxy.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>session_id</code> - <b>string</b> - Hash único gerado pelo senhasegura para identificar exclusivamente uma sessão específica .</summary>&nbsp;&emsp;&emsp;&nbsp;<b>Exemplo</b>:<code>e7acacb6aedbab70073456da5744166939b77527</code>

&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: este identificador é usado internamente pela aplicação para operações relacionadas à sessão, tais como controle de acesso, rastreamento de atividades e gerenciamento de recursos. Cada vez que uma sessão é iniciada, um novo <code>session_id</code> é gerado para essa sessão específica.


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>start</code> - <b>string</b> - Data e hora de início da sessão em formato ISO 8601.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Exemplo</b>: <code>2024-05-06 16:05:07</code></p>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>end</code> - <b>string</b> - Data e hora de término da sessão em formato ISO 8601.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Exemplo</b>: <code>2024-05-06 16:07:59</code></p>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>time</code> - <b>string</b> - Duração da sessão.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Exemplo</b>: <code>00:02:52</code></p>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>prevent_purge</code> - <b>string</b> - Indica se haverá a exclusão automática dos dados de uma sessão  .</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Exemplo</b>: <code>No</code></p>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>request</code> - <b>string</b> - Solicitação feita pelo usuário.</summary>

<br>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>ITSM</code> - <b>string</b> - Código do software ITSM.</summary>



## Erros

<details>
    <summary><b><span style="color:red">404</span> - Not Found</b>.</summary>

***

<p><b>Mensagem: "Resource sub not found"</b>
<p><b>Possível causa</b>: a URL ou o recurso solicitado não está correto.<br>
        
<b>Solução</b>: verifique a URL e envie a requisição novamente.</p>
***
</details>

<details>
 
<summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>

***
    
<b>Mensagem: "Unexpected error."</b><br>
 
<p><b>Possível causa</b>: o erro está no servidor senhasegura.<br>
        
<b>Solução</b>: contate o time de suporte para mais informações.</p>

***

<b>Mensagem: "You are not authorized to access this resource"</b>

<b>Possível causa</b>: você não possui autorização para acessar esse recurso.<br>
        
<b>Solução</b>: solicite ao administrador que revise sua permissão de acesso aos recursos do <b>PAM Core</b> no <b>A2A</b>.

* * *
</details>



<details>
<summary><b>Client authentication failed</b></summary>

*** 
   
<b>Mensagem: "Client authentication failed"</b>
<p><b>Possível causa</b>: falha na autenticação da sua aplicação com o servidor senhasegura.<br>
        
   <b>Solução</b>: verifique os parâmetros de autenticação como <code>Access Token</code>, <code>Client ID</code> e <code>Client secret</code> e solicite um novo token de acesso.</p>

* * *
</details>



<details>
 <summary><b>No route matched with those values</b></summary>

*** 
    
   
<b>Mensagem: "No route matched with those values"</b>
    
<p><b>Possível causa</b>: ausência do header de autorização na requisição de API.<br>
        
<b>Solução</b>: solicite um novo token de acesso.</p>

* * *
</details>
 

<details>
<summary><b> Request timed out</b></summary>

***
    
<b>Mensagem: "Request timed out"</b>
<p><b>Possível causa</b>: o tempo da requisição se esgotou. <br>
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
</details>     