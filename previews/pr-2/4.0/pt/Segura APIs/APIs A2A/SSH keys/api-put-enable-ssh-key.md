# PUT | Ativar chave SSH

Ative uma chave SSH no **PAM Core**.

## Pré-requisitos
* Autorização com permissão de **acesso** e de **leitura e escrita** ao **PAM Core** concedidas pelo administrador no **A2A**.
Saiba mais em [Como gerenciar autorizações no A2A](/v4/docs/pt/how-to-manage-authorizations-in-a2a).
*  Uma chave SSH inativa no **PAM Core**. 
Saiba mais em [DEL | Inativar chave SSH](/v4/docs/pt/api-del-disable-ssh-key).

## Requisição

 <code><span style="color:blue"> PUT</code></span> `/api/pam/key/[id]`

### Parâmetros da requisição

Envie o parâmetro abaixo no <b>path</b> da URL.

* <code>id</code> - <b>int</b> - <span style="color:red">obrigatório</span> - Código único de identificação da chave SSH.
    <p><b>Nota</b>: esse valor é automaticamente atribuído pelo Segura em <a href="/v4/docs/pt/api-post-create-ssh-key">POST | Criar chave SSH</a> e é obtido na resposta da requisição <a href="/v4/docs/pt/api-get-list-all-credentials"><code><span style="color:green"> GET</code></span> <code>/api/pam/credential</code></a> que lista todas as credenciais acessíveis à sua autorização. 




### Exemplo de requisição

<code><span style="color:blue">PUT</code></span> `{{url}}/api/pam/key/83`
  
### Resposta esperada

```json
HTTP/1.1 200 OK
```

 
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Key successfully activated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Key successfully activated",
        "erro": false,
        "cod_erro": 0
    }
}
```

## Erros

<details>
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>
 
* * *
    

<b>Mensagem: "1009: No access to credential"</b>

<br><b>Possível causa</b>: sua autorização não possui acesso à credencial. 
    
   <b>Solução</b>: solicite ao administrador que verifique sua permissão de acesso a essa credencial.

* * *    
    
<b>Mensagem: "1015: SSH key not found"</b>     

<br><b>Possível causa</b>: chave SSH não encontrada.<p>
     
<b>Solução</b>: verifique o valor do <code>id</code> e envie a requisição novamente.


* * *
  
 <b>Mensagem: "1016: The item is not a ssh key"</b><br>
<br><b>Possível causa</b>: o valor do parâmetro <code>id</code> não corresponde a uma chave SSH. 

<b>Solução</b>: verifique o <code>id</code> e envie a requisição novamente.


***


<b>Mensagem: "1039: Without PAM Configuration Access permission"</b>  
<br><b>Possível causa</b>: sua autorização não possui permissão de alteração de chave SSH. 
     
<b>Solução</b>: solicite ao administrador que verifique sua permissão de <b>leitura e escrita</b> aos recursos do <b>PAM Core</b> no <b>A2A</b>.


***
  
<b>Mensagem: "1045: Ssh key is already activated"</b>

<p><b>Possível causa</b>: A chave SSH já está ativa.<br></p>

***  
</details>



<details>
<summary><b><span style="color:red">404</span> - Not Found</b></summary>

***
<b>Mensagem: "Resource sub not found"</b><br>

<p><b>Possível causa</b>: A URL ou o recurso solicitado não está correto.<br>
        
<b>Solução</b>: verifique a URL e garanta que todos os parâmetros estão corretos.</p>

* * *    
</details>




<details>
<summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>

* * *

<b>Mensagem: "Unexpected error."</b><br>

<p><b>Possível causa</b>: o erro está no servidor Segura.<br>
        
<b>Solução</b>: contate o time de suporte para mais informações.</p>
    
 ***
<b>Mensagem: "You are not authorized to access this resource."</b>

<p><b>Possível causa</b>: você não possui autorização para acessar esse recurso.<br>
        
<b>Solução</b>: solicite ao administrador que verifique sua permissão de acesso aos recursos do <b>PAM Core</b> no <b>A2A</b>.</p>
    
* * *    
</details>



<details>
<summary><b>Client authentication failed</b></summary>

*** 
   
<b>Mensagem: "Client authentication failed"</b>
    
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

***
</details>
 

<details>
<summary><b>No route matched with those values</b></summary>
    
***   
    
<b>Mensagem: "No route matched with those values"</b>
   <p><b>Possível causa</b>: ausência do header de autorização na requisição de API.<br>
        
  <b>Solução</b>: solicite um novo token de acesso.</p>

***
</details>
 

<details>
    <summary><b> Request timed out</b></summary>
    
***
    
<b>Mensagem: "Request timed out"</b>
<p><b>Possível causa</b>: o tempo da requisição se esgotou. <br>
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor Segura.</p>
</details>