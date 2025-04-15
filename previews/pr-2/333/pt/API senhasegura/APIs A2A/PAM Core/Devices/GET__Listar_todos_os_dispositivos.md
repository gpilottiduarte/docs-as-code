# GET | Listar todos os dispositivos

Acesse informações de dispositivos no **PAM Core**.

## Requisitos
* Autorização com permissão de **acesso** ao **PAM Core** concedida pelo administrador no  **A2A**. 
Acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-33/docs/pt/a2a-how-to-create-an-authorization-for-an-application) para mais informações.
* Dispositivos criados no **PAM Core**. 
Acesse o documento [POST | Criar dispositivo](/v3-33/docs/pt/api-post-create-device) para mais informações.

## Requisição


 <code><span style="color:orange"> GET</code></span> `/api/pam/device`


### Exemplo de requisição

<code><span style="color:orange"> GET</code></span> `{{url}}/api/pam/device`  
  
  
  ## Resposta 

 ```json
HTTP/1.1 200 OK 
```
```json
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
 
 ### Campos do corpo da resposta

    
<summary>&#8226; <code>devices</code> - <b>array de objetos</b> - Dados dos dispositivos.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>id</code> - <b>int</b> - Código único de identificação do dispositivo gerado automaticamente pelo senhasegura em <a href = "/v3-33/docs/pt/api-post-create-device">POST | Criar dispositivo</a>.</summary>
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>hostname</code> - <b>string</b> - Nome do host do dispositivo.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>ip</code> - <b>string</b> - Endereço IP do dispositivo.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>model</code> - <b>string</b> Modelo do dispositivo .</summary>

<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>type</code> - <b>string</b> - Tipo de dispositivo.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>vendor</code> - <b>string</b> - Fabricante do dispositivo.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>site</code> - <b>string</b> Localização do dispositivo.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>tags</code> - <b>string</b> - Palavras-chave associadas ao dispositivo.</summary>

<br>


 ## Erros
 
 
<details>
<summary><b><span style="color:red">404</span> - Not Found</b>.</summary>

***
<b>Mensagem: "Resource sub not found"</b><br>

<p><b>Possível causa</b>: a URL ou o recurso solicitado não está correto.<br>
        
<b>Solução</b>: verifique a URL e garanta que todos os parâmetros estão corretos.</p>

* * *
    
</details>




<details>
    <summary><b><span style="color:red">500</span> - Internal Server Error</b>.</summary>

***
    
<b>Mensagem: "Unexpected error."</b><br>

<p><b>Possível causa</b>: o erro está no servidor senhasegura.<br>
        
<b>Solução</b>: contate o time de suporte para mais informações.</p>
    
 ***
<b>Mensagem: "You are not authorized to access this resource."</b>
<p><b>Possível causa</b>: você não possui autorização para acessar esse recurso.<br>
        
<b>Solução</b>: solicite ao administrador que revise sua permissão de acesso aos recursos do <b>PAM Core</b> no <b>A2A</b>.</p>

* * *
</details>
     


<details>
<summary><b>Client authentication failed</b>.</summary>

*** 
   
<b>Mensagem: "Client authentication failed."</b>
    
<p><b>Possível causa</b>: falha na autenticação da sua aplicação com o servidor senhasegura.<br>
        
<b>Solução</b>: verifique os parâmetros de autenticação como <code>Access Token URL</code>, <code>Client ID</code> e <code>Client secret</code> e solicite um novo token de acesso.</p>
</details>
     
   

<details>
<summary><b>Invalid signature</b>.</summary>

*** 
    
<b>Mensagem: "Invalid signature"</b>
    
<p><b>Possível causa</b>: falha no reconhecimento da URL da aplicação cliente.
        
<b>Solução</b>: verifique a URL da aplicação cliente e envie a requisição novamente.</p>
* * *
</details>
     


<details>
    <summary><b>No route matched with those values</b>.</summary>
    
***   
    
<b>Mensagem: "No route matched with those values."</b>
   <p><b>Possível causa</b>: ausência do header de autorização na requisição de API.<br>
        
  <b>Solução</b>: solicite um novo token de acesso.</p>
* * *
</details>
 

<details>
    <summary><b> Request timed out</b>.</summary>
    
***
    
<b>Mensagem: "Request timed out."</b>
<p><b>Possível causa</b>: o tempo da requisição se esgotou. <br>
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
</details> 
     