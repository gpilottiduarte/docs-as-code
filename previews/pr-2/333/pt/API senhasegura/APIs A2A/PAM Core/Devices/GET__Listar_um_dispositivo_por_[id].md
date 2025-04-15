# GET | Listar um dispositivo por [id]

Acesse informações de um dispositivo registrado no **PAM Core**.

## Requisitos
* Autorização com permissão de **acesso** ao **PAM Core** concedida pelo administrador no  **A2A**. 
Acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-33/docs/pt/a2a-how-to-create-an-authorization-for-an-application) para mais informações.
* Dispositivo criado no **PAM Core**. 
Acesse o documento [POST | Criar dispositivo](/v3-33/docs/pt/api-post-create-device) para mais informações.

## Requisição


 <code><span style="color:green">GET</code></span> `/api/pam/device/[id]`


## Parâmetros de requisição
Envie o parâmetro abaixo no <b>path</b> da URL.

<summary><code>id</code> - <b>int</b> - <span style="color:red">obrigatório</span> - Código único de identificação do dispositivo.</summary>
<b>Nota</b>: esse valor é automaticamente atribuído pelo senhasegura em <a href="/v3-33/docs/pt/api-post-create-device">POST | Criar dispositivo</a> e é obtido na resposta da requisição <a href="/v3-33/docs/pt/api-get-list-all-devices">GET | Listar todos os dispositivos</a>.



### Exemplo de requisição

<code><span style="color:green">GET</code></span> `{{url}}/api/pam/device/14`
  
  
  ## Resposta 

 ```json
HTTP/1.1 200 OK 
```
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Device 14",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device 14",
        "erro": false,
        "cod_erro": 0
    },
    "tenant": "senhasegura",
    "device": {
        "id": "14",
        "hostname": "API device",
        "ip": "10.66.33.17",
        "model": "Gmail",
        "type": "Desktop",
        "vendor": "Linux",
        "site": "AWS",
        "device_domain": "my_device_domain",
        "connectivities": "HTTP:80, SSH:22"",
        "session_remote_config": "HTTP::",
        "device_tags": "test"
    }
}
```
 
 ### Campos do corpo da resposta

    
<summary>&#8226; <code>devices</code> - <b>objeto</b> - Dados do dispositivo.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>id</code> - <b>int</b> - Código único de identificação do dispositivo.
    
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
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>device_domain</code> - <b>string</b> - Nome ou abreviação do dispositivo.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>connectivities</code> - <b>string</b> - Conectividade do dispositivo.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>session_remote_config</code> - <b>string</b> - Expressão de login.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>device_tags</code> - <b>string</b> - Palavras-chave associadas ao dispositivo.</summary>

<br>


 ## Erros
 
<details>
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>
 
* * *
    
    
<b>Mensagem: "1011: Device not found"</b>     

<br><b>Possível causa</b>: dispositivo não encontrado.<p>
     
<b>Solução</b>: verifique o valor do <code>id</code> e envie a requisição novamente.


* * *
</details>
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
     