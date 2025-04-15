# PUT | Ativar dispositivo

Ative um dispositivo no **PAM Core**.

## Requisitos
* Autorização com permissão de **acesso** e de **leitura e escrita** ao **PAM Core** concedidas pelo administrador no **A2A**. 
Acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-33/docs/pt/a2a-how-to-create-an-authorization-for-an-application) para mais informações.
* Um dispositivo inativo no **PAM Core**. 
Acesse o documento <a href=/v3-33/docs/pt/api-del-disable-device>DEL | Inativar dispositivo</a> para mais informações.

## Requisição

<code><span style="color:blue"> PUT</code></span> `/api/pam/device/[id]`



## Parâmetros de requisição
Envie o parâmetro abaixo no <b>path</b> da URL.

<summary><code>id</code> - <b>int</b> - <span style="color:red">obrigatório</span> - Código único de identificação do dispositivo.</summary>
<b>Nota</b>: esse valor é automaticamente atribuído pelo senhasegura em <a href="/v3-33/docs/pt/api-post-create-device">POST | Criar dispositivo</a> e é obtido na resposta da requisição <a href="/v3-33/docs/pt/api-get-list-all-devices">GET | Listar todos os dispositivos</a>.


  ### Exemplo de requisição

<code><span style="color:blue"> PUT</code></span> `{{url}}/api/pam/device/5`
  
  
  
  ## Resposta 
 ```json
HTTP/1.1 200 OK
``` 
 
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Device successfully activated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device successfully activated",
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

<br><b>Possível causa</b>: dispositivo não encontrado.<p>
     
<b>Solução</b>: verifique o valor do <code>id</code> e envie a requisição novamente.


* * *
<b>Mensagem: "1039: Without PAM Configuration Access permission"</b>  
<br><b>Possível causa</b>: sua autorização não possui permissão de alteração de dispositivo. 
     
<b>Solução</b>: solicite ao administrador que revise sua permissão de <b>leitura e escrita</b> aos recursos do <b>PAM Core</b> no <b>A2A</b>.


***
  
<b>Mensagem: "1044: Device is already activated"</b>

<p><b>Possível causa</b>: o dispositivo já está ativo.<br></p>
  


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

<p><b>Possível causa</b>: o erro está no servidor senhasegura.<br>
        
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
    
<p><b>Possível causa</b>: falha na autenticação da sua aplicação com o servidor senhasegura.<br>
        
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
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
</details>