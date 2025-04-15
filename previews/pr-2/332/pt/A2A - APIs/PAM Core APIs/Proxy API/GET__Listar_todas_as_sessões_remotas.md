# GET | Listar todas as sessões remotas

Este documento apresenta como acessar informações das sessões remotas associadas à sua autorização no **PAM Core** via API.

## Requisitos

* Permissão de acesso ao **PAM Core** no módulo **A2A**. Acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application) para mais informações.

## Requisição
Para acessar uma lista com todas as sessões remotas registradas no **PAM Core**, envie uma requisição para o seguinte endpoint:

 <code><span style="color:orange"> GET</code></span> `api/pam/remotesessions`
 
 
## Resposta esperada
:::(Warning) (Atenção)
Dependendo da quantidade de sessões remotas registradas no ambiente, a lista retornada pode ser muito longa e a resposta pode demorar alguns instantes.
:::

:::(Info) (Info)
Consulte o documento POST | Criar uma URL autenticada para uma sessão web proxy para uma descrição detalhada dos parâmetros listados na resposta abaixo.
:::
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

## Erros
     
<details>
 
<summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>

***

<b>Mensagem: "Unexpected error"</b><br>
<p><b>Possível causa</b>: O erro está no servidor senhasegura.<br>
        
<b>Solução</b>: Contate o time de suporte para mais informações.</p>

* * *  
<b>Mensagem: "You are not authorized to access this resource"</b>    
<br><b>Possível causa</b>: Você não possui autorização para acessar esse recurso. 
     
<b>Solução</b>: Verifique sua permissão de acesso aos recursos do <b>PAM Core.</b>
   
 </details>   

* * *  

<details>
<summary><b>Client authentication failed</b></summary>

*** 
   
<b>Mensagem: "Client authentication failed."</b>
<p><b>Possível causa</b>: Falha na autenticação da sua aplicação com o servidor senhasegura.<br>
        
   <b>Solução</b>: Corrija os parâmetros <b>Client ID</b> e <b>Client secret</b> e solicite um novo token de acesso.</p>
</details>
     
* * *     
<details>
    <summary><b>No route matched with those values</b></summary>

***   
    
<b>Mensagem: "No route matched with those values"</b>    
<p><b>Possível causa</b>: Ausência do header de autorização na requisição de API.<br>
        
  <b>Solução</b>: Solicite um novo token de acesso.</p>
</details>
 
* * *
<details>
    <summary><b> Request timed out</b></summary>

***   
    
<b>Mensagem: "Request timed out"</b>
<p><b>Possível causa</b>: O tempo da requisição se esgotou. <br>
        
<b>Solução</b>: Verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
</details>     
     
     