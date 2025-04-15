# DEL | Liberar custódia de credencial

Libere a custódia de uma credencial no **PAM Core**.

***
Quando um usuário realiza uma chamada <code><span style="color:green"> GET</code></span> `/api/pam/credential[id]` para visualizar uma credencial, isso é chamado de concessão temporária de custódia dessa credencial ao usuário, também conhecido como *account check-in*. 

Quando o acesso a essa credencial é revogado, isso é descrito como a liberação da custódia da credencial, também conhecido como *account check-out*.

Acesse o documento [Sobre a custódia de credenciais](/v3-33/docs/pt/pam-about-credential-custody) para mais informações sobre o conceito de custódia de credenciais,

***
## Requisitos
* Autorização com permissão de **acesso** ao **PAM Core** concedidas pelo administrador no **A2A**. 
Acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-33/docs/pt/a2a-how-to-create-an-authorization-for-an-application) para mais informações.

* Custódia de uma credencial solicitada via API através do endpoint
<code><span style="color:green"> GET</code></span> `/api/pam/credential[id]`.
Access o documento [GET | Listar uma credencial](/v3-33/docs/pt/api-get-list-a-credential) para mais informações.



## Requisição
<code><span style="color:red"> DEL</code></span> `/api/pam/credential/custody/[id]`


## Parâmetros de requisição

Envie o parâmetro abaixo no <b>path</b> . da URL.

* <summary><code>id</code> - <b>int</b> - <span style="color:red"> obrigatório</span style="color:red"> - Código único de identificação da credencial.</summary><p><b>Nota</b>: esse valor é automaticamente atribuído pelo senhasegura em <a href = "/v3-33/docs/pt/api-post-create-credential"> POST | Criar credencial</a> e é obtido na resposta da requisição <a href = "/v3-33/docs/pt/api-get-list-all-credentials"> GET | Listar todas as credenciais</a>.</summary>

### Exemplo de requisição

<code><span style="color:red"> DEL</code></span> `{{url}}/api/pam/credential/custody/94`

## Resposta

```json
HTTP/1.1 200 OK
```

 
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential custody 94 released",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential custody 94 released",
        "erro": false,
        "cod_erro": 0
    }
}
```


## Erros

<details>
 <summary><b><span style="color:red">400</span> - Bad Request</b></summary>

***
<b>Mensagem: "1007: Credential not found"</b>
    
<p><b>Possível causa</b>: a credencial não foi encontrada.<br>
        
<b>Solução</b>: verifique o valor do <code>id</code> e envie a requisição novamente.</p>
    

***
  <p><b>Mensagem: "1008: Credential inactive"</b>
 <p><b>Possível causa</b>: a credencial está inativa.<br></p>
<b>Solução</b>: ative a credencial através do endpoint <code><span style="color:blue"> PUT</code></span> <code>/api/pam/credential/[id]</code> e envie a requisição novamente.
  

* * *
<b>Mensagem: "1009: No access to credential"</b>

<br><b>Possível causa</b>: sua autorização não possui acesso à credencial. 
    
<b>Solução</b>: solicite ao administrador que revise sua permissão de acesso à credencial desejada.

* * *

 <br><b>Mensagem: "1018: The credential is not in the user custody"</b>
  
<br><b>Possível causa</b>: usuário não possui a custódia da credencial. 
    
<b>Solução</b>: consulte a credencial através do endpoint <code><span style="color:green"> GET</code></span> <code>/iso/pam/credential[id]</code> e após o sucesso dessa chamada, envie a requisição novamente.
     
* * *
<b>Mensagem: "1039: Without PAM Configuration Access permission"</b>

<b>Possível causa</b>: sua autorização não possui permissão de alteração da credencial. 
     
<b>Solução</b>: solicite ao administrador que revise sua permissão de <b>leitura e escrita</b> aos recursos do **PAM Core** no **A2A**. 
***
</details>

<details>
<summary><b><span style="color:red">404</span> - Not Found</b></summary>
    
***

 <b>Mensagem: "Resource sub not found"</b>
    
 <p><b>Possível causa</b>: a URL ou o recurso solicitado não está correto.<br>
        
<b>Solução</b>: verifique a URL e envie a requisição novamente.</p>
 
* * *
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

