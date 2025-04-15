# GET | Listar todos os dispositivos

Este documento apresenta como acessar informações dos dispositivos associados à sua autorização no **PAM Core** via API.

## Requisitos

* Permissão de acesso ao **PAM Core** no módulo **A2A**. Acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application) para mais informações.

## Requisição
Para acessar uma lista com todos os dispositivos registrados no **PAM Core**, envie uma requisição para o seguinte endpoint:

 <code><span style="color:orange"> GET</code></span> `iso/pam/device`
 
 

## Resposta esperada

```
HTTP/1.1 200 OK 
```
```
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "2 devices found",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "2 devices found",
        "erro": false,
        "cod_erro": 0
    },
    "devices": [
        {
            "id": "1",
            "hostname": "mydevicehostname",
            "ip": "172.10.20.30",
            "model": "Windows Server 2012",
            "type": "Server",
            "vendor": "Microsoft",
            "site": "LAX"
	        "tags": "tag001"
        },
        {
            "id": "6",
            "hostname": "myseconddevice",
            "ip": "41.41.208.182",
            "model": "CentOS 7",
            "type": "Server",
            "vendor": "CentOS",
            "site": "AWS"
	        "tags": ""
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
     
     