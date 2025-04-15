# GET | Listar uma sessão remota

Este documento apresenta como acessar informações de uma sessão remota associada à sua autorização no **PAM Core** via API.

## Requisitos

* Permissão de acesso ao **PAM Core** no módulo **A2A**. Acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application) para mais informações.

## Requisição
Para acessar informações de uma sessão remota registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:

 <code><span style="color:green">GET</code></span> `api/pam/remotesession/[id]`
 
 ## Parâmetros de requisição
<details>
    <summary>Envie o parâmetro abaixo no <b>caminho</b> (<i>path</i>) da URL</summary>
    <p>

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| `id` | Int | **Sim** | Código único de identificação da sessão remota. Esse valor é automaticamente atribuído pelo senhasegura em POST Criar uma URL autenticada para iniciar sessão web proxy e é obtido na resposta da requisição GET Listar todas as sessões remotas. **Nota**: não deve ser confundido com o parâmetro  `session_id`. | 53 |</p>
</details>

## Resposta esperada

```
HTTP/1.1 200 OK 
```
```json
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
    "remote_session": [
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
 
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>

***

<b>Mensagem: "1002: Session not found"</b><br>
<p><b>Possível causa</b>: Sessão não encontrada.<br>
        
<b>Solução</b>: Verifique o <code>id</code> enviado para buscar pela sessão e envie a requisição novamente.</p>

***

<b>Mensagem: "1003: Unexpected identifier type"</b><br>
<p><b>Possível causa</b>: Você pode ter enviado um identificador que o servidor não reconhece, como o <code>session_id</code> ao invés do <code>id</code>.<br>
        
<b>Solução</b>: Verifique o valor correto para o parâmetro <code>id</code> e envie a requisição novamente.</p>
</details>

* * * 

<details>
 
<summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>

***
    
<b>Mensagem: "Unexpected error."</b><br>
 
<p><b>Possível causa</b>: O erro está no servidor senhasegura.<br>
        
<b>Solução</b>: Contate o time de suporte para mais informações.</p>

***

<b>Mensagem: "You are not authorized to access this resource."</b>

<p><b>Possível causa</b>: Você não possui autorização para acessar esse recurso.<br>
        
<b>Solução</b>: Verifique sua permissão de acesso aos recursos do <b>PAM Core</b>.</p>

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
    
<b>Mensagem: "Request timed out."</b>
<p><b>Possível causa</b>: O tempo da requisição se esgotou. <br>
        
<b>Solução</b>: Verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
</details>     
     
     