# DEL | Desativar dispositivo

Desative um dispositivo no **PAM Core**.

## Pré-requisitos
* Autorização com permissão de **acesso** e de **leitura e escrita** ao **PAM Core** concedidas pelo administrador no **A2A**. 
Saiba mais em [Como gerenciar autorizações no A2A](/v4/docs/pt/how-to-manage-authorizations-in-a2a).
* Um dispositivo ativo no **PAM Core**. 
Saiba mais em [POST | Criar dispositivo](/v4/docs/pt/api-post-create-device) e [PUT | Ativar dispositivo](/v4/docs/pt/api-put-enable-device).

## Requisição


  <code><span style="color:red"> DEL</code></span> `/api/pam/device/[id]`


## Parâmetros de requisição



Envie o parâmetro abaixo no <b>path</b>  da URL.

<summary><code>id</code> - <b>int</b> - <span style="color:red">obrigatório</span> - Código único de identificação do dispositivo.</summary>
  <b>Nota</b>: esse valor é automaticamente atribuído pelo Segura em <a href="/v4/docs/pt/api-post-create-device">POST | Criar dispositivo</a> e é obtido na resposta da requisição <a href="/v4/docs/pt/api-get-list-all-devices">GET | Listar todos os dispositivos</a>.



 ### Exemplo de requisição


<code><span style="color:red"> DEL</code></span> `{{url}}/api/pam/device/5`
  
  
  
  ## Resposta 
 
 ```json
HTTP/1.1 200 OK
```

 
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Device successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}
```

## Erros

<details>
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>
 
* * *
    
    
<b>Mensagem: "1011: Device not found"</b>     

<br><b>Possível causa</b>: dispositivo não encontrado. 
     
<b>Solução</b>: verifique o valor do <code>id</code> e envie a requisição novamente.

* * *
    
    
<b>Mensagem: "1039: Without PAM Configuration Access permission"</b>  
<br><b>Possível causa</b>: sua autorização não possui permissão de alteração de dispositivo. 

<b>Solução</b>: solicite ao administrador que revise sua permissão de acesso aos recursos do <b>PAM Core</b> no <b>A2A</b>.</p>


***
</details>

<details>
<summary><b><span style="color:red">404</span> - Not Found</b></summary>

***
<b>Mensagem: "Resource sub not found"</b><br>

<p><b>Possível causa</b>: a URL ou o recurso solicitado não está correto.<br>
        
<b>Solução</b>: verifique a URL e garanta que todos os parâmetros estão corretos.</p>

* * *
    
</details>




<details>
    <summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>

***
    
<b>Mensagem: "Unexpected error."</b><br>

<p><b>Possível causa</b>: o erro está no servidor Segura.<br>
        
<b>Solução</b>: contate o time de suporte para mais informações.</p>
    
 ***
<b>Mensagem: "You are not authorized to access this resource."</b>
<p><b>Possível causa</b>: você não possui autorização para acessar esse recurso.<br>
        
<b>Solução</b>: solicite ao administrador que revise sua permissão de acesso aos recursos do <b>PAM Core</b> no <b>A2A</b>.</p>

* * *
</details>
     


<details>
<summary><b>Client authentication failed</b></summary>

*** 
   
<b>Mensagem: "Client authentication failed."</b>
    
<p><b>Possível causa</b>: falha na autenticação da sua aplicação com o servidor Segura.<br>
        
<b>Solução</b>: verifique os parâmetros de autenticação como <code>Access Token URL</code>, <code>Client ID</code> e <code>Client secret</code> e solicite um novo token de acesso.</p>
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
